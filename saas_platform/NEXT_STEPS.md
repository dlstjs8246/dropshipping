# Next Steps — Phase B 후속 작업 후보

본 문서는 SaaS Phase A + B1 + Polish 커밋 이후 다음 진행할 후보 작업을 기록합니다.
모두 외부 계정·승인 없이 (Anthropic·Perplexity API 키만으로) 진행 가능합니다.

선택 시 우선순위는 본인 사용 빈도 + 시연 가치 + 강의 정체성 정합 기준.

---

## (b) L1 Perplexity 4번째 소스 — ~2h

**가치**: AI 깊이 +. 현재 L1은 Claude 3-temperature 시뮬레이션. Perplexity 추가 = **진짜로 다른 AI 모델 + 출처 URL** 포함 → Supplement 08 §6.5 "Perplexity로 출처 확인" 강의와 직접 정렬.

**구현 범위**:
1. `package.json`에 추가 의존성 0 (Perplexity는 Anthropic SDK처럼 별도 SDK 없이 fetch로 호출 가능)
2. 스키마: `user_keys.perplexityKeyEncrypted` 컬럼 이미 존재 → 추가 마이그레이션 X
3. Settings/api-keys에 Perplexity 키 입력 폼 추가 (validateAnthropicKey 패턴 복제)
4. `src/lib/perplexity.ts` — `getPerplexityForUser(userId)` + `validatePerplexityKey()`
5. `src/app/lab/l1/actions.ts` — Perplexity 호출 추가 (대신 contrarian 자리에 또는 4번째 perspective로)
6. L1 결과 페이지: 3-column → 4-column grid + Perplexity 답변에 출처 URL 렌더링
7. Synthesis 프롬프트에 4-source 인지 추가

**Phase A에서 만든 BYOK 패턴 재사용**:
- `src/lib/crypto/byok.ts` (encrypt/decrypt 그대로)
- `src/lib/anthropic.ts` 패턴 (Perplexity는 OpenAI 호환 API)
- `src/app/onboarding/actions.ts` saveAnthropicKey 패턴 → savePerplexityKey

**Perplexity API 엔드포인트** (참고):
- Base: `https://api.perplexity.ai/chat/completions`
- Model: `sonar-pro` (검색 + 출처 포함) 또는 `sonar` (저렴)
- 응답 `citations` 배열에 출처 URL 포함

**연계 강의**: Supplement 08 §6.5

---

## (c) Self-Assessment Hub `/progress` — ~4h

**가치**: 강의 정체성 직격. Supplement 11 (Self-Assessment 시스템)이 현재 정적 마크다운 체크리스트인데, 인터랙티브 SaaS 기능으로 진화 → 단일 학생 자기주도 학습의 척추.

**구현 범위**:
1. 스키마 추가: `progress` 테이블 1개
   ```sql
   progress (
     user_id uuid pk references auth.users(id),
     data jsonb not null default '{}', -- {preflight, weeks, l1_assessment, l2, l3, rubric}
     updated_at timestamptz
   )
   ```
   + RLS 정책 (`user_keys`와 동일 패턴 — self만 read/write)
   + 마이그레이션 `0003_add_progress_table.sql`

2. `/progress` 페이지 — Supplement 11 §1~§4를 인터랙티브 폼으로:
   - Pre-flight 20문항 체크박스 (4 카테고리)
   - 14주 Weekly Checkpoint (각 5문항, 아코디언 또는 탭)
   - L1/L2/L3 졸업 자가 진단 통합 (10/8/10 문항)
   - 졸업 루브릭 3축 (매출/시스템/AI) — 자가 평가 슬라이더 또는 라디오

3. 시각화: 졸업 루브릭 3축을 **Recharts radar chart**로
   - `npm install recharts`
   - `src/components/progress/RubricRadar.tsx`

4. Server Action: `src/app/progress/actions.ts` — savePreflightItem, saveWeeklyCheckpoint, saveAssessment, saveRubric (debounced auto-save)

5. Sidebar에 `/progress` 추가 (Learn 그룹)

6. lab_sessions 자동 연동:
   - L1 세션 생성 시 → progress.l1_assessment에 카운트 +1
   - Margin 세션 GO 결과 → 해당 주차 체크포인트 자동 체크 (예: W3.2 23점 룰)
   - L2 비서 빌드 완료 → L2 자가 진단 #2 자동 체크

**연계 강의**: Supplement 11 전체 + L1/L2/L3 §10

---

## (d) Margin Shield 배치 스캔 — ~1.5h

**가치**: 시장 조사 속도 5x. 현재 Margin Shield는 1개 URL씩. 배치 = 10개 URL 붙여넣기 → 병렬 평가 → 정렬된 표.

**구현 범위**:
1. `/margin/batch` 신규 라우트
2. Form: textarea로 URL 10개 입력 (한 줄에 1개)
3. Server Action: `runBatchMarginScan` — Promise.all로 10개 병렬 호출 (단, Anthropic rate limit 고려해서 batch size 5 + 1초 delay)
4. 결과 페이지: 정렬 가능한 표 (verdict, margin %, landed cost) — TanStack Table v8
5. 표 행 클릭 → 기존 `/margin/[id]` detail 이동
6. 모든 행을 `lab_sessions`에 개별 저장

**의존성 추가**:
```json
"@tanstack/react-table": "^8.20.6"
```

**파일**:
- `src/app/margin/batch/page.tsx`
- `src/app/margin/batch/BatchForm.tsx`
- `src/app/margin/batch/actions.ts`
- `src/app/margin/batch/[batchId]/page.tsx` (선택 — batch grouping)

**제약**:
- Anthropic Tier 1 무료 키는 5 RPM. 배치 5개씩 분할 + retry-after 헤더 존중.
- Tier 2+ 키는 50 RPM 가능.

---

## (e) 글로벌 세션 검색·필터 — ~1.5h

**가치**: 데이터 누적 시 필수. 100+ 세션 쌓이면 dashboard 최근 5개로는 부족.

**구현 범위**:
1. `/sessions` 신규 라우트 — 모든 모듈 세션 통합 뷰
2. 검색: `title` + `output` JSONB의 핵심 필드 (verdict, decision, question)
3. 필터:
   - 모듈: margin / l1 / l2 / l3 / 전체
   - Verdict: GO / HOLD / FAIL / 무관
   - 날짜 범위: 지난 7일 / 30일 / 90일 / 전체
4. URL search params (`nuqs`로) — 공유·북마크 가능
5. 페이지네이션 — TanStack Table v8 + 서버 사이드 (Drizzle limit/offset)
6. Sidebar에 `/sessions` 항목 추가

**의존성 추가**:
```json
"nuqs": "^2.2.3"
```

**파일**:
- `src/app/sessions/page.tsx`
- `src/app/sessions/SessionsTable.tsx`
- `src/app/sessions/Filters.tsx`

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
