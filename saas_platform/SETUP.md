# SaaS Setup — 환경 준비

코드는 준비 완료. 다음 4단계로 환경을 설정하면 첫 가입이 가능합니다.

---

## 1. Supabase 프로젝트 생성 (~5분)

1. [supabase.com](https://supabase.com)에서 무료 계정 가입
2. **New project** 클릭 → 이름 `command-center` (또는 본인 선호) → Region `Northeast Asia (Seoul)` → DB password 안전하게 저장
3. 프로젝트 생성 후 **Settings → API**에서 두 값 복사:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `Project API keys → anon public` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. **Settings → Database → Connection string → Transaction (port 6543)** 복사 + `[YOUR-PASSWORD]` 치환 → `DATABASE_URL`

---

## 2. 환경 변수 파일 생성

```bash
cd saas_platform
cp .env.local.example .env.local
```

`.env.local` 편집 — 위 3개 값 + 다음 명령어로 생성한 32-byte hex 키:

```bash
# Mac/Linux
openssl rand -hex 32

# Windows PowerShell
[byte[]] $bytes = New-Object byte[] 32; (New-Object System.Security.Cryptography.RNGCryptoServiceProvider).GetBytes($bytes); ($bytes | ForEach-Object { $_.ToString('x2') }) -join ''
```

값을 `ENCRYPTION_KEY`에 붙여넣기.

---

## 3. DB 스키마 + RLS 적용

### 3-A. 구조 (테이블) 생성 — Drizzle 자동

```bash
cd saas_platform
npm run db:generate    # 1) schema.ts 분석 → src/lib/db/migrations/0000_xxx.sql 자동 생성
npm run db:migrate     # 2) 그 SQL을 Supabase에 적용
```

이 단계가 끝나면 Supabase Dashboard → Table Editor에 5개 테이블이 보입니다:
`orgs`, `org_members`, `user_keys`, `lab_sessions`, `progress`.

### 3-B. RLS 정책 + 트리거 + 추가 enum — 수동 적용 (3개 SQL 파일)

수동 SQL은 `src/lib/db/manual/` 폴더에 있습니다 (Drizzle 자동 생성과 분리). **Supabase Dashboard → SQL Editor**에서 다음 3개 파일을 **순서대로** 붙여넣고 Run:

| # | 파일 | 내용 |
|:--:|---|---|
| 1 | [`manual/0001_rls_and_triggers.sql`](src/lib/db/manual/0001_rls_and_triggers.sql) | orgs/org_members/user_keys/lab_sessions RLS + handle_new_user 트리거 |
| 2 | [`manual/0002_add_l3_agent_module.sql`](src/lib/db/manual/0002_add_l3_agent_module.sql) | `lab_module` enum에 `'l3_agent'` 추가 |
| 3 | [`manual/0003_add_progress_table.sql`](src/lib/db/manual/0003_add_progress_table.sql) | progress 테이블 RLS (self-only 4개 정책) |

각 파일을 SQL Editor에 통째 붙여넣기 → **Run**. 모두 idempotent이므로 두 번 실행해도 안전.

### 3-C. Auth 설정

**Authentication → Settings**:
- **Confirm email** OFF (개발 편의 — 운영 시 ON)
- **Site URL** 설정:
  - 로컬: `http://localhost:3000`
  - 운영: `https://your-domain.com`

---

## 4. 첫 부팅 검증

```bash
npm run dev
```

http://localhost:3000 접속 → 랜딩 페이지가 깨끗하게 보이면 OK.

### 환경 시그널 체크

다음 모두 ✅:

- [ ] `.env.local`에 4개 변수 채움 (NEXT_PUBLIC_SUPABASE_URL/ANON_KEY/DATABASE_URL/ENCRYPTION_KEY)
- [ ] Supabase Table Editor에 **5개 테이블** 생성 확인
- [ ] Database → Policies에 **RLS 정책 15개+** 생성 확인 (orgs 3, org_members 2, user_keys 4, lab_sessions 3, progress 4)
- [ ] Database → Triggers에 `on_auth_user_created` 확인
- [ ] Database → Enumerated Types → `lab_module`에 `l3_agent` 포함 확인
- [ ] `npm run dev` 부팅 시 콘솔 에러 없음
- [ ] http://localhost:3000 접속 시 랜딩 페이지 렌더링

✅ 6/7 이상 OK → **[FIRST_RUN.md](./FIRST_RUN.md)** 따라 첫 가입 + 5개 모듈 검증 진행.

---

## (선택) Google OAuth 활성화 — 5분

이메일 매직 링크 외에 "Google로 계속" 버튼을 활성화하려면:

### A. Google Cloud Console
1. [console.cloud.google.com](https://console.cloud.google.com) → 새 프로젝트 (또는 기존)
2. **APIs & Services → OAuth consent screen** → External 선택 → 앱 이름 입력
3. **APIs & Services → Credentials → Create Credentials → OAuth client ID**
4. Application type: **Web application**
5. **Authorized redirect URIs**에 다음 추가:
   ```
   https://YOUR-PROJECT-REF.supabase.co/auth/v1/callback
   ```
   (Supabase Dashboard → Authentication → Providers → Google에 정확한 URL이 표시됨)
6. **Create** → Client ID + Client Secret 복사

### B. Supabase Dashboard
1. **Authentication → Providers → Google** 클릭
2. **Enable Sign in with Google** 토글 ON
3. Client ID + Secret 붙여넣기 → **Save**

### C. 검증
- `/login` 페이지 새로고침 → "Google로 계속" 버튼 클릭 가능
- Google 계정 선택 → `/auth/callback` → 첫 로그인이면 `/onboarding/1`로, 재방문이면 `/dashboard`로

> Google OAuth는 비즈니스 검토가 필요 없습니다 (Kakao OAuth와 차이). External 모드는 100명까지 무검토 사용 가능.

---

## 트러블슈팅

| 증상 | 원인 / 해결 |
|---|---|
| `npm run db:migrate` 시 권한 오류 | `DATABASE_URL`에 `[YOUR-PASSWORD]` 미치환 |
| 가입 후 redirect 실패 | Authentication → URL Configuration → Site URL 미설정 |
| RLS 위반 에러 (PGRST301 등) | 3-B 단계의 manual SQL 미실행 |
| `on_auth_user_created` 트리거 미발동 | 0001 SQL의 `create trigger`가 SQL Editor에서 마지막에 빨갛게 표시되어 무시됨 → 다시 Run |
| Anthropic 키 입력 시 검증 실패 | 키가 `sk-ant-`로 시작하는지 확인 / Anthropic Console에 잔액 있는지 확인 |
| Margin 스캔 시 cheerio 에러 | CJ 페이지가 Cloudflare 또는 SPA — URL 비우고 입력값만 사용 |
