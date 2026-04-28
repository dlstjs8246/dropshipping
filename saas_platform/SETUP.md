# SaaS Setup — Phase A (W1 후 환경 준비)

W1 코드 인프라는 모두 완성되었습니다. 다음 4단계로 외부 환경을 준비하세요.

## 1. Supabase 프로젝트 생성 (~5분)

1. [supabase.com](https://supabase.com)에서 무료 계정 가입
2. **New project** 클릭 → 이름 `command-center` (또는 본인 선호) → Region `Northeast Asia (Seoul)` → DB password 안전하게 저장
3. 프로젝트 생성 후 **Settings → API**에서 두 값 복사:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `Project API keys → anon public` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. **Settings → Database → Connection string → Transaction (port 6543)** 복사 + `[YOUR-PASSWORD]` 치환 → `DATABASE_URL`

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

## 3. DB 스키마 + RLS 적용

```bash
cd saas_platform

# 1) Drizzle이 SQL 마이그레이션 파일 생성
npm run db:generate

# 2) 생성된 마이그레이션을 Supabase에 적용
npm run db:migrate

# 3) RLS 정책 + auth trigger 적용 (Supabase Dashboard → SQL Editor에 붙여넣기)
#    파일: src/lib/db/migrations/0001_rls_and_triggers.sql
```

**Supabase Dashboard → SQL Editor**에서 [`0001_rls_and_triggers.sql`](src/lib/db/migrations/0001_rls_and_triggers.sql)의 전체 내용을 붙여넣고 **Run**.

## 4. 검증

```bash
npm run dev
```

- http://localhost:3000 접속 — 빈 화면이지만 콘솔 에러 없어야 함
- Supabase Dashboard → Table Editor에 `orgs`, `org_members`, `user_keys`, `lab_sessions` 4개 테이블 보임
- Authentication → Settings → "Confirm email" OFF (개발 편의 — 운영 시 ON)

## W1 완료 시그널

다음 모두 ✅:
- [ ] `.env.local` 파일에 4개 변수 채움
- [ ] Supabase에 4개 테이블 생성 확인
- [ ] RLS 정책 11개 생성 확인 (Database → Policies)
- [ ] `on_auth_user_created` trigger 확인 (Database → Triggers)
- [ ] `npm run dev` 에러 없이 부팅
- [ ] `npm run build` 통과

✅ 5/6 이상 OK → W2 (shadcn/ui + Pretendard + 사이드바)로 진행.

## 다음: W2 미리보기

- shadcn/ui init + 10 primitives 추가
- Pretendard 한글 폰트 (next/font/local)
- 사이드바 셸 + 다크모드 토큰
- `<html lang="en">` → `<html lang="ko">`

코드는 이미 W2 진행 가능 상태로 준비됨 (사용자 액션은 W2 처음에 없음).
