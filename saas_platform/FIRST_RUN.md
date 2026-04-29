# First Run — 첫 가입부터 5개 모듈 검증까지

**전제**: [SETUP.md](./SETUP.md)의 1~4단계 완료 (Supabase 프로젝트, .env.local, 마이그레이션, 부팅 검증).

**소요 시간**: 30~60분 (BYOK 키 발급 포함).

**결과물**: 모든 모듈이 본인 BYOK 키로 진짜 작동하는 것을 확인 + 발견된 결함 수정.

---

## 사전 — Anthropic API 키 발급 (~5분)

1. [console.anthropic.com](https://console.anthropic.com) 가입
2. **Settings → API Keys → Create Key** — 키 이름 `command-center-dev`
3. 새 키 (`sk-ant-api03-...`) 복사 — **이 한 번만 보임**, 안전하게 저장
4. **Plans & Billing → Add credit** — $5~10 충전 (학습용 충분)

> Anthropic Tier 1: 5 RPM (분당 5요청). 첫 사용에는 충분. 매크로 batch는 약간 느림.

---

## Step 1 — 가입 + 온보딩 (~5분)

```bash
cd saas_platform
npm run dev
```

http://localhost:3000 → "시작하기" 클릭 → `/login`

### 1-A. 가입

매직 링크 (이메일) **또는** Google OAuth 둘 중 하나:

- **매직 링크**: 이메일 입력 → 메일함의 링크 클릭 → `/auth/callback`
- **Google**: "Google로 계속" → 계정 선택 → `/auth/callback`

처음이면 자동으로 `/onboarding/1`로 redirect.

### 1-B. 온보딩

- Step 1: 환영 메시지 → "다음" 클릭
- Step 2: Anthropic 키 (`sk-ant-...`) 붙여넣기 → "저장하고 시작하기"
  - 클라이언트 → server 1-token 검증 → AES-256-GCM 암호화 → user_keys 저장
  - 성공 시 `/dashboard` redirect

### 1-C. Supabase 검증

- **Authentication → Users**: 본인 이메일로 1행
- **Table Editor → orgs**: 1행 (이름 = "yourname's workspace")
- **Table Editor → org_members**: 1행 (role = owner)
- **Table Editor → user_keys**: 1행 (anthropic_key_encrypted 채워짐)

### ✅ Step 1 시그널
- [ ] 가입 + 온보딩 통과
- [ ] `/dashboard` 도달 (모듈 카드 4개 표시)
- [ ] Supabase에 4개 row 자동 생성 (auth.users + orgs + org_members + user_keys)

---

## Step 2 — Margin Shield 단일 스캔 (~3분)

`/margin` 이동 → 폼 입력:

| 필드 | 예시 값 |
|---|---|
| URL | (비워둠 — 또는 https://www.cjdropshipping.com/product/...) |
| 상품명 | 거북목 교정 넥밴드 |
| 소싱가 | 6.00 |
| 배송비 | 3.50 |
| 무게 | 180 |
| 판매가 | 39.00 |

"7-필터로 평가하기" 클릭 → ~30초 대기 → `/margin/[id]` 결과 페이지.

### ✅ Step 2 시그널
- [ ] verdict 배지 (GO/HOLD/FAIL) 표시
- [ ] 7-필터 체크리스트 + 1줄 사유
- [ ] Landed Cost 계산 표시 (HTS 매치 또는 25% fallback)
- [ ] 다운로드 버튼 클릭 → `.md` 다운로드 OK
- [ ] `/margin` 돌아가면 "최근 스캔"에 1행 보임
- [ ] `/progress` 이동 → **W3.1 자동 체크됨** (verdict가 GO면 W3.2도)

---

## Step 3 — Margin Shield 배치 스캔 (~3분)

`/margin/batch` → CSV 텍스트영역에 붙여넣기:

```
url, 상품명, 소싱가, 배송비, 무게, 판매가
, 거북목 넥밴드 v2, 6.00, 3.50, 180, 39.00
, 알람 시계, 4.50, 2.00, 250, 29.00
, LED 스트립, 5.00, 3.00, 220, 24.00
```

"배치 평가 시작" 클릭 → ~30~60초 → 결과 표 표시.

### ✅ Step 3 시그널
- [ ] 결과 표 3행 (verdict 정렬 가능)
- [ ] 행 클릭 → detail 페이지 이동
- [ ] 헤더에 "성공 3건" 카운트 (실패·스킵 0)

---

## Step 4 — L1 Triangulation (~3분)

`/lab/l1` → 질문 textarea:

```
거북목 교정 넥밴드를 미국에서 $39에 팔 때 위닝 가능성은?
2026년 4월 기준으로 답해줘.
```

"교차 검증하기" 클릭 → ~30초 → `/lab/l1/[id]` 결과.

### ✅ Step 4 시그널
- [ ] 3개 perspective (분석 / 생성 / 반대) 표시
- [ ] 4단계 합의/부분/충돌 패턴 자동 분류
- [ ] Perplexity 검증 프롬프트 표시 + 복사 버튼 작동
- [ ] `/progress` 이동 → **W1.1, W1.2, L1-3, L1-5 자동 체크**

---

## Step 5 — L2 Assistant Builder (~5분)

`/lab/l2` → 카피 비서 선택 + 스펙 입력:

| 필드 | 값 |
|---|---|
| 비서 타입 | 카피 비서 |
| 브랜드 이름 | NeckEase |
| 한 줄 정체성 | 30대 WFH 미국인이 친구한테 권하는 톤 |
| 입력 설명 | 상품명 + 가격 + 강점 3개 |
| 출력 설명 | H1 + PAS 본문 + CTA (영어, 60자 H1 한도) |
| 실패 정의 | 톤 5축 미달, 의료 단정, "Buy now!" 사용 |

"비서 빌드하기" → ~30초 → `/lab/l2/[id]` 결과.

### ✅ Step 5 시그널
- [ ] System Prompt textarea에 5요소 (Role/Task/Constraints/Format/Guard) 포함
- [ ] Knowledge Files 체크리스트 (Brand_Voice.md, Best_Copy_5.md, Banned_Words.md)
- [ ] 5트라이얼 테스트 플랜 표시
- [ ] ".md 다운로드" → Claude Projects 복붙 가능 형식
- [ ] `/progress` → **L2-1, L2-2, W11.4 자동 체크**

---

## Step 6 — L3 Agent Sandbox (~3분)

`/lab/l3` → 프리셋 "정상 주문" 클릭 → 모든 필드 자동 채워짐 → "Agent 실행".

### ✅ Step 6 시그널
- [ ] verdict AUTO_ORDER (3룰 모두 pass + confidence ≥ 0.9)
- [ ] 의사결정 흐름 4단계 시각화
- [ ] Make.com 블루프린트 7-step 표시
- [ ] "JSON 복사" + ".md 다운로드" 작동
- [ ] 다른 프리셋 시도: "마진 미달" → ESCALATE / "블랙리스트 국가" → ESCALATE
- [ ] `/progress` → **L3-1, L3-3, W13.4 자동 체크**

---

## Step 7 — Progress Hub 검증 (~5분)

`/progress` → 3개 탭 모두 점검:

### ✅ Step 7 시그널
- [ ] **Pre-flight 탭**: 본인이 실제로 한 항목 체크 (예: ChatGPT/Claude/Gemini 가입 등)
- [ ] **14주 Weekly 탭**: Step 2~6에서 자동 체크된 W1.1·1.2·3.1·11.4·13.4 보임
- [ ] **L1·L2·L3 탭**: 각각 자동 체크된 항목 보임
- [ ] **졸업 루브릭 탭**: 슬라이더 3개 (매출/시스템/AI) 조절 가능 + Recharts radar 즉시 갱신
- [ ] "저장" 버튼 → 성공 alert + DB의 progress.data 갱신

---

## Step 8 — 글로벌 세션 검색 (~2분)

`/sessions` → 지금까지 만든 5+ 세션 모두 표시.

### ✅ Step 8 시그널
- [ ] 모든 모듈 세션 통합 리스트
- [ ] 검색창에 "거북목" 입력 + Apply → 1+행 매치 (title 또는 output JSONB)
- [ ] 모듈 필터 = "Margin Shield" → 4행만
- [ ] Verdict = GO 필터 → GO 결과만
- [ ] 행 클릭 → 모듈별 detail로 이동

---

## Step 9 — Settings + 다크 모드 (~2분)

### 9-A. Settings
- `/settings/account`: 본인 이메일·가입일 표시
- `/settings/api-keys`: Anthropic 저장됨 배지 + Perplexity "미설정" 배지
- (선택) Perplexity 키 추가 → L1 다시 실행하면 4 sources 모드

### 9-B. 다크 모드
사이드바 하단 토글 → light → dark → system 순환. 페이지 새로고침해도 유지.

### 9-C. 세션 삭제
아무 detail 페이지 → "삭제" 버튼 → Dialog 확인 → 삭제 → 리스트로 이동.

### ✅ Step 9 시그널
- [ ] 다크/라이트/시스템 3 모드 모두 작동 + 새로고침 시 유지
- [ ] 키 회전 (새 키 입력) 작동
- [ ] 세션 삭제 + 리스트에서 사라짐

---

## 🎯 전체 검증 합격 기준

다음 9개 Step의 **각 시그널 80% 이상 통과** = 환경 + 코드 모두 가동 OK.

| Step | 모듈 | 자동 체크 |
|:--:|---|---|
| 1 | 가입 | orgs + user_keys 자동 생성 |
| 2 | Margin 단일 | W3.1 (+W3.2 if GO) |
| 3 | Margin 배치 | W3.1 + W3.2 if any GO |
| 4 | L1 Triangulation | W1.1, W1.2, L1-3, L1-5 |
| 5 | L2 Builder | L2-1, L2-2/3/4, W11.4 |
| 6 | L3 Agent | L3-1, L3-3, W13.4 |
| 7 | Progress | 위 모든 자동 체크 보임 + 루브릭 작동 |
| 8 | Sessions | 통합 검색·필터 |
| 9 | Settings + 다크 모드 | UX 폴리시 |

---

## ❌ 발견 시 디버깅 가이드

문제 발생 시 다음 정보를 함께 보고하면 빠르게 해결됩니다:

1. 어느 Step에서 실패했나
2. 브라우저 콘솔 에러 (F12 → Console 탭)
3. 터미널 콘솔 에러 (npm run dev 창)
4. Supabase Logs (Dashboard → Logs → 최근 5분 이내)
5. Network 탭에서 실패한 요청의 Response

흔한 문제:

| 증상 | 원인 |
|---|---|
| 매직 링크 메일 안 옴 | Supabase Auth → Settings → SMTP 미설정 (개발 시 Supabase 무료 한도 4통/시간) |
| 가입 후 onboarding 무한 loop | user_keys row 못 생성 — RLS 정책 미적용 (SETUP.md 3-B 재확인) |
| Anthropic 호출 시 401 | BYOK 키 형식 또는 잔액 부족 |
| Margin scan 30초 후 timeout | Anthropic Tier 1 RPM 초과 — 1분 대기 후 재시도 |
| Recharts radar 안 그려짐 | 클라이언트 hydration — 새로고침 또는 다른 탭 후 돌아오기 |

---

> **마무리**: 9 Step 모두 통과하면 SaaS는 진짜 가동되는 상태. 다음 단계는 Vercel 배포 (별도 가이드).
