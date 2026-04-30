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

---

## ~~Round 2: 자동 연동 + JSONB 검색~~ ✅ 완료 (커밋 예정)

### lab_sessions → Progress 자동 체크

`src/lib/progress/auto-mark.ts` — 모듈별 매핑 룰 + idempotent merge upsert (실패 시 silent — UX 보조 기능). 각 모듈 server action 끝에서 호출.

매핑:
- **Margin scan** (any) → W3.1. **GO** verdict 추가 → W3.2.
- **Margin batch** → W3.1. 행 중 GO 1+ 있으면 W3.2.
- **L1 Triangulation 1회 실행** → W1.1, W1.2, L1-3, L1-5. Perplexity 사용 시 추가 → L1-9.
- **L2 빌드** (카피/DM/CS) → L2-1 + 비서 타입별 (L2-2/3/4) + W11.4.
- **L3 Order Agent** → L3-1, L3-3, W13.4.

### /sessions JSONB 검색

기존 `title` ilike → `title OR output::text ilike` (OR 조건). `l1.question`, `l3.decision.reasoning`, `l2.spec.brandName`, `margin.rationale` 등 모두 검색. 단일 학생 dataset(<1000 rows)에서 충분히 빠름. GIN 인덱스는 100+ 사용자 시점에 추가.

---

## ⚠️ Phase 2/3 — 강의 자료가 약속하지만 SaaS에 미구현된 영역

**2026.4 시점 현실**: course_materials는 14 커밋 동안 대규모 확장 (Master Prompts 11종 → 47종, Voice Agent CS, IP 사전 점검, 사업 모델 3가지, 3PL Hybrid, Mental Coach, Weekly Priority 등). **SaaS Phase A는 Margin/L1/L2/L3/Sessions/Progress 6 라우트뿐** — 학생이 강의 자료의 §38~§47 보고 SaaS 들어가면 약속 기능 못 찾음.

이 gap을 명확히 인정하고 진행 우선순위 정리. AGENTS.md "Phase 2/3 roadmap" 표 참조.

### Phase 2 우선순위 (build order)

| 순위 | 기능 | 예상 작업 |
|:--:|---|---|
| 1 | **`/router` Master Prompt Router (§39)** | 자유 글쓰기 → §1~§47 자동 추천 챗 UI. 가장 큰 leverage — 47종 모두 가시화 |
| 2 | **`/dashboard` Weekly Priority + Cohort LTV widgets (§40 + §35)** | KPI dump → 5 액션 + 월별 코호트 LTV 곡선. Shopify connect 필요 |
| 3 | **`/disputes` Repeat Refunder Triage (§42)** | Customer 데이터 → Tier 0~4 자동 분류 + Shopify auto-tag. 직접 마진 영향 |
| 4 | **`/lab/voice` Voice Agent (Build 4)** | ElevenLabs Convai 통합. 마지막 — 외부 API 의존 |

### Phase 3 우선순위
- `/inventory` 3PL Hybrid + Bundle (§41 Cross-sell)
- `/onboarding` Business Model selector (Low/Niche/High-Ticket)
- Klaviyo / Shopify 깊은 integration (§29 Cart Abandonment 5-category triage)
- `/disputes`에 Visa CE 3.0 evidence 자동 수집

### 외부 의존 후보 (Phase 4)

- **Inngest cron + Resend email** — 가격 모니터링 정기 실행 + "스캔 완료" 이메일. 5분 가입 × 2.
- **Stripe billing** — Cohort 1 무료 → 일반 $19/월. Stripe 비즈니스 계정 필요.
- **Shopify Custom App** — 진짜 주문 → L3 Agent 가동. Shopify dev store 등록.
- **Browser Use OSS deploy** — Supplement 10 §4 Build 2 (경쟁사 가격 모니터링). Render/Railway 호스팅.
- **Recharts 확장** — Profit Dashboard mock 컴포넌트 부활 (Phase A에서 archive). Shopify 연결 후.

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
