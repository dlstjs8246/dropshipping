# Next Steps — Phase B 후속 작업 후보

본 문서는 SaaS Phase A + B1 + Polish 커밋 이후 다음 진행할 후보 작업을 기록합니다.
모두 외부 계정·승인 없이 (Anthropic·Perplexity API 키만으로) 진행 가능합니다.

선택 시 우선순위는 본인 사용 빈도 + 시연 가치 + 강의 정체성 정합 기준.

---

## ~~(b) L1 Perplexity 4번째 소스~~ ✅ 완료 (커밋 예정)

L1 Triangulation에 Perplexity Sonar 4번째 소스 추가. 키 미입력 시 Claude 3-temp만으로 graceful fallback.

**산출물**:
- `src/lib/perplexity.ts` — BYOK 키 fetch + `callPerplexity()` + `validatePerplexityKey()`
- `src/app/settings/api-keys/{page,actions,PerplexityKeyForm}.tsx` — 선택 입력 폼 + 키 제거 액션
- `src/app/lab/l1/actions.ts` — Perplexity 4번째 perspective (실패 시 graceful degrade)
- `src/app/lab/l1/[id]/page.tsx` — 4-source 모드 시 4-col grid + 출처 URL 클릭 가능 + .md export에 sources 섹션 포함
- `src/app/lab/l1/page.tsx` — "3 sources" / "4 sources" 배지 + Settings 안내
- `src/app/onboarding/[step]/page.tsx` — Perplexity 선택사항 안내

**모델**: `sonar` (cheapest with citations)

---

## ~~(c) Self-Assessment Hub `/progress`~~ ✅ 완료 (커밋 예정)

Supplement 11이 정적 마크다운 → 인터랙티브 SaaS 기능으로 진화.

**산출물**:
- `progress` 테이블 (user_id pk + JSONB data + updated_at) + RLS self-only 4 정책
- 마이그레이션 `0003_add_progress_table.sql`
- `src/lib/progress/structure.ts` — 단일 출처: PREFLIGHT 20 + WEEKS 14×5 + L1/L2/L3 자가 진단 28문항 + rubric 3축
- `/progress` Tabs (Pre-flight / 14주 / L1 / L2 / L3 / 루브릭) + sticky 저장 버튼 + 진척 배지
- RubricRadar — Recharts radar chart (3축 매출/시스템/AI)
- Server action `saveProgress` — Zod 검증 + JSONB upsert
- Sidebar Learn 그룹에 Progress 항목 추가, proxy.ts 보호 prefix에 `/progress` 추가

**의존성 추가**: `recharts@^2.15.0`

**다음 라운드 후보** (lab_sessions 자동 연동):
- L1 세션 생성 시 → l1_assessment 카운트 자동
- Margin GO 결과 → W3.2 자동 체크
- L2 빌드 완료 → L2 자가 진단 #2 자동

---

## ~~(d) Margin Shield 배치 스캔~~ ✅ 완료 (커밋 예정)

CSV 형식으로 최대 20개 상품을 한 번에 평가. 5개씩 chunk + 1초 delay로 rate-limit 회피.

**산출물**:
- `src/lib/business/margin-engine.ts` — 핵심 스캔 로직을 `runMarginEngine()` headless 함수로 추출 (단일/배치 공유)
- `src/app/margin/batch/{page,BatchForm,BatchResultsTable,actions}.tsx` — CSV textarea + sortable TanStack Table v8 결과 표
- `src/app/margin/actions.ts` — 엔진 함수 사용하도록 리팩터 (인라인 로직 100+ 줄 제거)
- `src/app/margin/page.tsx` — 헤더에 "배치 스캔" 진입 버튼

**CSV 형식**:
```
url, 상품명, 소싱가, 배송비, 무게(g), 판매가
```
URL 없으면 5개 필드만도 OK. 헤더 행 자동 감지.

**결과 표**:
- Sortable: verdict (GO/HOLD/FAIL), margin %, landed cost
- 행 클릭 → 기존 `/margin/[id]` detail
- 실패·스킵 행은 별도 카드에 사유 표시

**의존성 추가**: `@tanstack/react-table@^8.20.6`

---

## ~~(e) 글로벌 세션 검색·필터~~ ✅ 완료 (커밋 예정)

모든 모듈 (Margin / L1 / L2 / L3) 세션을 한 페이지에서 통합 검색·필터.

**산출물**:
- `/sessions` server component — searchParams 받아 Drizzle conditional where 빌드
- `SessionsFilters.tsx` (client) — 검색 input + 3개 Select (모듈/Verdict/기간) + URL push
- 페이지네이션: page-based (PAGE_SIZE=25), prev/next 버튼
- 행 클릭 → 모듈별 detail 라우트로 자동 매핑 (Margin/L1/L2/L3)

**필터·검색 조건**:
- Title `ilike` 부분 매치 (Drizzle ilike helper)
- Module enum exact 매치
- Verdict enum exact 매치
- Days = 7 / 30 / 90 / all (default 30)

**의존성**: nuqs 사용 안 함 — `searchParams` prop + `URLSearchParams` 조합으로 충분.

---

## ✅ NEXT_STEPS (b)~(e) 모두 완료

다음 라운드 후보:
- **lab_sessions 자동 연동 → Progress** (L1 세션 → l1_assessment 카운트, Margin GO → W3.2 자동, L2 빌드 → L2 자가 진단)
- **외부 통합 트랙** (Inngest cron, Resend email, Stripe billing, Shopify, Browser Use OSS)
- **Output JSONB 검색** — 현재 title만 검색. l1.question, l3.decision 등 JSONB 필드도 검색하려면 Postgres `jsonb_path_ops` GIN 인덱스 추가

---

## 추천 진행 순서

1. **(b) L1 Perplexity** ← 가장 작은 수정, 즉시 가치 큼 (강의 정체성 + AI 깊이)
2. **(d) Margin Shield 배치** ← 일상 사용성 (니치 발굴 시 매주 사용)
3. **(c) Self-Assessment Hub** ← 가장 큰 작업이지만 단일 학생 SaaS의 차별점
4. **(e) 글로벌 검색·필터** ← 위 3개 끝낸 뒤 데이터가 충분히 쌓였을 때

각 항목은 독립적으로 추가 가능. 하나 끝낼 때마다 별도 commit 권장.

---

## 외부 계정·승인 필요한 향후 후보 (참고)

| 항목 | 이유 | 외부 의존 |
|---|---|---|
| Inngest cron + Resend email | 가격 모니터링 자동화 + 이메일 알림 | Inngest 가입 5분 + Resend 가입 5분 |
| Stripe billing | Cohort 1 무료 → 일반 $19/월 | Stripe 비즈니스 계정 |
| Shopify webhook | 진짜 주문 → L3 Agent 가동 | Shopify Custom App 등록 |
| Browser Use OSS deploy | L3 Build 2 (Supplement 10 §4) | Render/Railway 호스팅 |
| Kakao OAuth | KR 학생 가입 1-click | KR 비즈니스 검토 1~3주 |

이들은 본 문서 범위 외 — 각각 별도 plan으로 분기 권장.
