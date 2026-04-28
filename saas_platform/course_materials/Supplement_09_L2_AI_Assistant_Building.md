# 🛠 Supplement 09: L2 AI Assistant 사용법 — 본인 비서 만들기

> **AI Mastery Track L2** — 활용
>
> **대상**: ChatGPT/Claude는 쓰지만 매번 같은 프롬프트를 복붙하는 사람. L1 ([Supplement 08](./Supplement_08_L1_Generative_AI_Foundations.md))을 1회독한 사람.
>
> **목적**: 본 문서를 끝내면 본인 스토어 전용 **3개 비서**가 가동된다 — 카피 비서 / DM 비서 / CS 비서.
>
> **소요 시간**: 1회독 90분 + 3개 비서 빌드 각 30~60분 (총 약 3~4시간).
>
> **다음 단계**: [Supplement 10 — L3 AI Agent](./Supplement_10_L3_AI_Agent_Building.md) (예정).

---

## 1. L2가 메우는 갭 — "왜 매번 같은 프롬프트를 복붙하는가"

L1까지 끝낸 사람의 일상은 이렇습니다.

```
오늘 카피 1개 필요 → ChatGPT 열고 → "내 브랜드는 ~ 톤은 ~ 형식은 ~" 5문단 입력 → 답 받기
내일 카피 1개 더 필요 → ChatGPT 열고 → 같은 5문단 또 입력 → 답 받기
모레 DM 100개 필요 → ChatGPT 열고 → 또 5문단 입력 → 답 받기
```

**문제**: 같은 컨텍스트를 매일 5분씩 다시 입력 = 1년이면 30시간. 그리고 매번 톤이 달라집니다.

**L2 해결**: 컨텍스트를 **한 번만** 비서에 박아두고, 그 다음부터는 **변수만 바꿔서** 호출합니다.

| | L1 (즉석) | **L2 (비서)** | L3 (Agent) |
|---|---|---|---|
| 매번 컨텍스트 입력 | 5분 | **0분** | 0분 |
| 톤 일관성 | 매번 다름 | **5트라이얼 동일** | 동일 |
| 본인 시간/요청 | 5분 | **30초** | 5초 (승인만) |
| 트리거 | 본인이 매번 | 본인이 매번 | **자동** |

본 문서를 끝내면 가지게 되는 것:
- [ ] **카피 비서** — 상품명만 입력하면 본인 톤의 PAS 카피 1초 출력
- [ ] **DM 비서** — 크리에이터 핸들 + 최근 영상 1개 입력 → 개인화 DM 출력
- [ ] **CS 비서** — 고객 메일 입력 → 정책 준수 답변 초안 (본인 승인 후 발송)
- [ ] Custom GPTs / Claude Projects 5단계 빌드법 자력 적용 능력
- [ ] Few-shot Pool로 톤을 영구 고정하는 기법

---

## 2. Assistant 빌더 결정 — 5초

[Supplement 07](./Supplement_07_AI_Agent_Builder_Comparison.md)에서 비교 끝났습니다. 본 문서의 결정:

| 비서 | 1순위 | 2순위 | 이유 |
|---|---|---|---|
| 카피 비서 | **Custom GPTs** (ChatGPT Plus 필요) 또는 **Claude Projects** (Pro 필요) | Gemini Gems | 짧은 출력 → 둘 다 OK |
| DM 비서 | **Claude Projects** | Custom GPTs | 200K 컨텍스트 = 5개 채널 분석 풀로드 가능 |
| CS 비서 | **Claude Projects** | Custom GPTs | RAG 깊이 + 환각 적음 = 정책 준수 핵심 |

**전체 1순위 권장**: Claude Projects (Pro $20/월). ChatGPT Plus만 가진 학생도 카피 비서까지는 Custom GPTs로 시작 가능. 본 문서는 **양쪽 모두 5단계 빌드법** 을 제공합니다.

### 결제 점검 1분
- ChatGPT Plus ($20/월) — Custom GPTs 빌드 필요
- Claude Pro ($20/월) — Claude Projects 빌드 필요
- 둘 다 무료로는 **본인 비서 빌드 불가** (사용은 가능, 빌드는 유료)

→ 둘 다 결제할 필요 없음. **Claude Pro 1개로 시작**하면 3개 비서 모두 만들 수 있음.

---

## 3. Custom GPTs 5단계 빌드 — 명세 → 지침 → 지식 → Action → 배포

Custom GPTs는 "사용자 발화에만 응답하는 한 줄짜리 도구"가 아닙니다. 다섯 단계 — **명세 → 지침 → 지식 → Action → 배포** — 를 거쳐야 비로소 "본인 비서"가 됩니다. 대부분이 2단계(지침)에서 끝내고 한 달 뒤에 "그냥 ChatGPT 같다"고 실망하는 이유가 여기 있습니다.

5단계 중 빠지면 곧장 품질 붕괴를 부르는 단계는 **Stage 1 (명세)** 와 **Stage 3 (지식)** 입니다. 명세 없이 만들면 "모든 걸 하는 봇"이 되어 어느 작업도 잘 못 하고, 지식 없이 만들면 매번 같은 정보를 채팅창에 다시 붙여넣게 됩니다.

이 5단계 사고법은 어떤 빌더(Custom GPTs / Claude Projects / Gemini Gems / 향후 신규)에도 통합니다.

### Stage 1 — 명세 (Spec) 1쪽

빌드 직전 1쪽을 채웁니다.

```
[비서 명세서 — 1쪽]
이름:           카피 비서
한 줄 정체성:    [BRAND_NAME]의 PAS 상세페이지 카피 작성기
입력:           상품명 1개 + 가격 + 핵심 강점 3개
출력:           H1 1줄 + PAS 본문 3단 + CTA 1줄 (영어)
실패 정의:      톤 깨짐 / 금지어 사용 / 5트라이얼에서 일관성 60% 미만
사용자:         본인 1명 (private)
빈도:           주 5~10회
```

명세 없이 만들면 "할 수 있는 모든 걸 하는 봇"이 되고, 어느 작업도 잘 못 합니다.

### Stage 2 — 지침 (System Prompt)

5요소만 들어가면 충분합니다.

```
1. 역할 (Role)        : 너는 [BRAND_NAME]의 전속 카피라이터다
2. 작업 (Task)        : 입력 상품을 PAS 3단 + CTA로 작성
3. 제약 (Constraints) : 영어, 60자 이내 H1, 금지어 [...] 사용 X
4. 형식 (Format)      : H1 / Problem / Agitation / Solution / CTA 5블록
5. 가드 (Guardrail)   : 의학·인증 단정 금지, 모호한 사실은 [VERIFY] 태그
```

System Prompt는 **1500자 안에서 끝내야** 잘 작동합니다. 길수록 AI가 일부를 무시합니다.

### Stage 3 — 지식 (Knowledge Files)

이게 **빠지면 비서가 죽는** 핵심 단계.

| 업로드 OK | 업로드 NEVER |
|---|---|
| 브랜드 보이스 정의서 (1쪽) | 고객 실명·이메일·주소 |
| 베스트 카피 5개 + 출처 | Shopify/Stripe API 키 |
| 금지어 리스트 30~50개 | 결제·카드번호 |
| 환불·배송 정책 (PDF) | 미공개 마진·소싱가 |
| FAQ 톱 50 | 본인 사업자등록 원본 |

→ §6에서 풀 표로 다룹니다.

### Stage 4 — Action (외부 API) — 선택

Shopify/Klaviyo/Sheets 직접 연동. 본 문서 3개 비서는 Action 없이도 작동하므로 **L3로 미룸**. 필요해지면 [Supplement 10 §3](./Supplement_10_L3_AI_Agent_Building.md) 참조.

### Stage 5 — 배포

| 옵션 | 사용 |
|---|---|
| **Private** ← 권장 | 본인만 사용 |
| Workspace | 팀 공유 |
| Public (GPT Store) | 외부 노출. 단 지식 파일에 **본인 IP 포함되면 절대 X** |

본 문서 3개 비서는 모두 **Private**.

---

## 4. Claude Projects 5단계 빌드

Custom GPTs와 대칭입니다. 차이점만 짚습니다.

| Stage | Custom GPTs | Claude Projects |
|---|---|---|
| 1. 명세 | 동일 (1쪽) | 동일 |
| 2. 지침 | "GPT Builder" 채팅으로 자동 생성 | **Custom Instructions** 직접 입력 |
| 3. 지식 | "Knowledge" 파일 업로드 | **Project Knowledge** 파일 업로드 |
| 4. Action | OpenAPI YAML 6줄 | **MCP** (Model Context Protocol) |
| 5. 배포 | Private/Workspace/Public | **Private 또는 Pro 사용자 간 공유** |

### Claude Projects 핵심 팁 4개

1. **Custom Instructions는 8000자 이하** — 길수록 약점. 핵심 5~10줄만.
2. **컨텍스트 PDF는 Few-shot 5개 + 정책 1개 + 브랜드 보이스 1개 = 7개 이내** — 더 올리면 산만해짐.
3. **Few-shot 예시 폴더는 3·5·10 룰** — 3개로 시작, 일관성 안 나오면 5개, 그래도 안 되면 10개.
4. **일관성 테스트는 5트라이얼** — 같은 입력 5번 → 출력 톤이 동일한가?

### Pro 사용자 간 공유 vs 비공개

본인이 만든 비서를 Claude Pro 친구에게 공유 가능. 단 **지식 파일도 같이 공유**되므로 IP 노출 X = **비공개 운영 권장**.

---

## 5. 브랜드 보이스 고정 — Few-shot Pool 기법

### 5.1 왜 "친근하게"는 항상 실패하는가

❌ "친근한 톤으로 써줘" → AI는 "친근함"이 학습 데이터에서 본 평균치를 출력 = 본인 브랜드와 무관
✅ "다음 5개 예시의 *문장 길이·소문자/대문자 비율·이모지 빈도·문장 시작 패턴*을 정확히 따라 써줘" → AI는 통계적으로 모방 가능

### 5.2 Few-shot Pool 5개를 뽑는 방법

```
Step 1 — 본인이 좋아하는 미국 D2C 브랜드 3개 선정
   (예: Glossier, Allbirds, Liquid Death)
Step 2 — 각 브랜드의 Instagram·홈페이지·이메일에서
         가장 본인 톤에 맞는 카피 1~2개씩 발췌
Step 3 — 본인이 직접 쓴 베스트 카피 2개 추가
Step 4 — 5개를 Brand_Voice.md에 5축과 함께 정리
Step 5 — 5개에서 공통 패턴 1줄 추출 → System Prompt에 주입
```

### 5.3 톤 일관성 자가 점검 5축

| 축 | 측정 | 거북목 넥밴드 예시 |
|---|---|---|
| 문장 평균 길이 | 단어 수 | 8~14단어 |
| 소문자 시작 비율 | % | 80%↑ |
| 이모지 빈도 | 문단당 | 0~1개 |
| 의인화 | OK/X | OK ("your spine called") |
| 절대 금지 | 단어 | "Buy now!", 느낌표 2개+ |

5트라이얼 중 4번 이상 5축 모두 통과 = 톤 고정 성공.

---

## 6. 지식 파일 큐레이션 — 업로드할 것 vs 절대 올리지 말 것

### 6.1 업로드 OK — 형식 가이드

| 파일 | 권장 포맷 | 길이 | 핵심 규칙 |
|---|:--:|:--:|---|
| 환불·배송 정책 | MD/PDF | 1~3쪽 | H1/H2 헤더 명확, 표는 4컬럼↓ |
| 브랜드 보이스 정의서 | MD | 1쪽 | Few-shot 5개 필수 |
| 베스트 카피 모음 | MD | 5~10개 | 각 카피마다 채널·CTR 1줄 |
| FAQ 톱 50 | MD | 50문답 | "Q:" / "A:" 일관 |
| 과거 응대 메일 | MD | 30~50건 | 고객 익명화 ([CUSTOMER_001]) |
| 채널 분석 결과 | JSON | 채널당 1객체 | Master Prompts §6 출력 그대로 |
| 커미션 구조 | MD 표 | 1쪽 | 티어·정산·세율 |
| 상품 스펙 시트 | CSV/MD | 상품당 1행 | 단위·재질·인증 명시 |

### 6.2 절대 NEVER — 사고 유형

| 절대 X | 발생 가능 사고 | 대안 |
|---|---|---|
| 고객 이메일·이름·주소 | GDPR/CCPA 위반, 데이터 유출 신고 의무 | 익명화 — `[CUSTOMER_001]` |
| Shopify/Stripe API 키 | 계정 탈취 | 1Password Secret 관리 |
| 카드번호·결제 토큰 | PCI 위반 | 어떤 AI에도 절대 X |
| 미공개 마진·소싱가 | 경쟁사 학습 위험 | 비공개 GPT/Project에만 |
| 미발행 상품 사진 | 모델 학습에 흡수 가능 | Settings → Data Controls → 학습 거부 ON |
| 사업자등록·세무 자료 | 신원 노출, PIPA 위반 | 절대 X |

### 6.3 AI가 잘 파싱하는 규칙
- MD > PDF > DOCX > 이미지
- 표는 4컬럼 이하 (Claude는 5+에서 가독성 하락)
- 헤더는 `#` 1단계만 (#### 4단계 이상은 무시되는 경우)
- CSV는 헤더 1행, BOM 없는 UTF-8
- 한 파일 10MB 이하

---

## 7. Assistant 1: 카피 비서 (Copy Assistant) 풀 빌드

### 7.1 명세

```
이름:    카피 비서 — [BRAND_NAME]
입력:    상품명 + 가격 + 강점 3개
출력:    H1 / Problem / Agitation / Solution / CTA (영어)
실패:    톤 5축 미달 / 금지어 / 의학 단정
빈도:    주 5~10회
빌더:    Claude Projects (1순위) 또는 Custom GPTs
```

### 7.2 시스템 프롬프트 (그대로 복붙)

```text
너는 [BRAND_NAME]의 전속 카피라이터야. 다음 4개 규칙 위에서만 작동해.

1. 출력은 항상 P-A-S(Problem → Agitation → Solution) 3단 구조,
   상세페이지 H1 + 첫 문단 + CTA 한 줄로 끝낸다.
2. 톤은 업로드된 `Brand_Voice.md`의 5개 예시를 정확히 모방한다.
   추상적 지시("친근하게")는 무시하고 예시의 문장 길이·소문자/대문자
   비율·이모지 빈도를 그대로 따른다.
3. `Banned_Words.md`에 있는 단어는 한 개도 사용하지 않는다.
4. 사실 단정 금지 — 의학·수치·인증 주장은 "유저가 검증해야 한다"는
   주석을 답변 끝에 [VERIFY] 태그로 남긴다.

답변 끝에는 항상 톤 일관성 자가 평가 1줄(1~5점)을 붙인다.
```

### 7.3 지식 파일 3종

**Brand_Voice.md** (그대로 복사 후 변수 치환):

```markdown
# Brand Voice — [BRAND_NAME]

## 한 줄 정체성
calm·modern·slightly playful한 30대 WFH 미국인이 자기 친구한테 권하듯.

## 톤 5축 정량
- 문장 평균 길이: 8~14단어
- 소문자 시작 비율: 80% 이상
- 이모지: 문단당 0~1개 (한국어로 절대 X)
- 의인화: 신체 부위·물건이 말 거는 형식 OK ("your spine called")
- 절대 금지: "Buy now!", 느낌표 2개 이상, 의료 단정

## 목소리 예시 5개 (Few-shot Pool)
Example 1 (IG caption): "your back deserves better than that 'office chair'."
Example 2 (PDP H1): "sit like the boss you actually are."
Example 3 (Email subject): "your spine called. it wants this."
Example 4 (Ad hook): "3 hours. that's how long your neck has been begging."
Example 5 (UGC line): "got mine on tuesday. by friday i forgot i was wearing it."

## 안티 예시 3개 (이 톤은 절대 X)
- "Buy our amazing posture corrector now!"
- "We are committed to your wellness."
- "✨🌸 Self-care is everything! 🌸✨"
```

**Best_Copy_5.md**: 본인이 좋아하는 D2C 5개 카피 원본 + 출처 URL + 채널 + CTR.

**Banned_Words.md**: 30~50개 직설 의료/광고 단어 (cure, heal, FDA-approved, miracle, guaranteed 등).

### 7.4 5트라이얼 일관성 테스트

같은 입력 "수면 안대 / $24 / 라텍스 프리·여행용·100% 차광" 을 5번 던집니다.

| Trial | H1 톤 일치 | PAS 구조 | 금지어 | 5축 5/5 |
|:--:|:--:|:--:|:--:|:--:|
| 1 | ✅ | ✅ | ✅ | 5/5 |
| 2 | ✅ | ✅ | ✅ | 4/5 |
| 3 | ✅ | ✅ | ⚠️ ("guaranteed") | 4/5 |
| 4 | ✅ | ✅ | ✅ | 5/5 |
| 5 | ✅ | ✅ | ✅ | 5/5 |

→ 4/5 이상 통과 = 카피 비서 가동 OK. 3 이하면 Brand_Voice 예시 더 추가.

### 7.5 Master Prompts §2 PAS 연결

이 비서는 [Master Prompts §2 PAS](./02_Master_Prompts.md)의 풀 프롬프트를 단발 호출 → 영구 컨텍스트로 승격한 것입니다. 매번 §2를 복붙하지 않고 **상품명 한 줄만** 입력하면 됩니다.

---

## 8. Assistant 2: DM 비서 (Outreach DM Assistant) 풀 빌드

### 8.1 명세

```
이름:    DM 비서 — 크리에이터 아웃리치
입력:    크리에이터 핸들 + 최근 영상 1개 (URL 또는 제목)
출력:    개인화 DM 1통 (영어, 80~120단어) + 4일 후 follow-up
실패:    개인화 0% (영상 미언급) / 금지어 / 차단 위험 단어
빈도:    주 50~200회
빌더:    Claude Projects (200K 컨텍스트로 5개 채널 분석 풀로드)
```

### 8.2 시스템 프롬프트

```text
너는 [BRAND_NAME]의 크리에이터 아웃리치 매니저다. 4개 규칙 위에서만 작동해.

1. 모든 DM은 **첫 문장에 크리에이터 최근 영상의 구체 디테일** 1개를 인용한다.
   ("loved your video about ___" 식으로 디테일 X — 진짜 본 사람만 쓸 수 있는
   1줄을 첨삭한다.)
2. 톤은 업로드된 `Brand_Voice.md` 5축을 따른다.
3. 절대 금지: "great video!", "amazing content!", 일반 칭찬, "DM me" 명령.
4. 형식: 인용(1) → 우리 상품 1줄(2) → 가치 제안(3) → CTA 부드럽게(4) →
   follow-up 텍스트 (4일 후 발송용).

`Anti_Block_Rules.md` 7개 규칙 위반 시 답변 거부하고 위반 항목 명시.
응답률 5% 미만 신호 (template 냄새 강함) 자가 점검 1줄을 끝에 붙인다.
```

### 8.3 지식 파일 4종

| 파일 | 용도 |
|---|---|
| `Store_Info.md` | 본인 스토어 한 줄 + 상품 1개 + 차별점 1줄 |
| `Commission_Structure.md` | 티어·정산 주기·세율 |
| `5_Channel_Analyses.json` | Master Prompts §6 출력을 5개 채널분 |
| `Past_Replies_Won.md` | 본인이 받았던 DM 중 회신온 5개 (Few-shot) |

### 8.4 테스트

크리에이터 1명 정보 입력:
```
@postureprov / "I tried 5 posture correctors for 30 days — here's what worked"
```

기대 출력:
```
hey @postureprov — your day-22 frame where you laid out all 5 side by side
hit different. most reviewers cherry-pick winners; you actually showed the
losers.

we ship one of those (the soft-frame one in your cluster of "actually
worked"). think your audience would weigh in honestly?

happy to send a sample with no strings — even if it doesn't make your
next video.

[FOLLOW_UP — Day 4 if no reply]
no pressure on the sample btw — i know you get 200+ of these. just say
"pass" and i'll never bug you again.
```

→ 영상 디테일 인용(✅), 일반 칭찬 X(✅), 부드러운 CTA(✅), 4일 후 follow-up(✅).

### 8.5 W8 + Master Prompts §6 §7 연결

이 비서는 [Master Prompts §6 채널 분석](./02_Master_Prompts.md) → [§7 풀 DM](./02_Master_Prompts.md) 2단계 파이프라인을 1개 비서에 통합한 것입니다. [Week 8](./Week08_TikTok_Affiliate_Outreach.md) Step 2 AI 초개인화 DM을 비서로 자동화.

---

## 9. Assistant 3: CS 비서 (Customer Service Assistant) 풀 빌드

### 9.1 명세 — Human-in-loop 원칙

```
이름:    CS 비서 — 고객 응대
입력:    고객 메일 1통
출력:    초안 + 우선순위 플래그(VIP/일반/위험) + 환불 가능 여부
실패:    자동 발송 (NEVER) / 정책 위반 / 환각 단정
빈도:    주 30~100회
빌더:    Claude Projects (RAG 깊이 + 환각 적음)
```

> **🔴 절대 원칙**: CS 비서는 **NEVER auto-send**. 항상 초안 → 본인 검토 → 발송. 자동 발송은 [Supplement 10 L3](./Supplement_10_L3_AI_Agent_Building.md)에서도 휴먼-인-루프 필수.

### 9.2 시스템 프롬프트

```text
너는 [BRAND_NAME]의 CS 매니저다. 4개 규칙 위에서만 작동해.

1. 절대 자동 발송 X. 모든 출력은 "초안"임을 명시한다.
2. 답변은 업로드된 `Refund_Policy.md`·`Shipping_Policy.md`·`FAQ_Top_50.md`만
   근거로 한다. 정책에 없는 사항은 "[VERIFY: 정책 확인 필요]"로 표시.
3. 톤 매트릭스:
   - Frustrated (불만·환불 요청·욕설) → 사과 first, 해결책 second, 보상 last
   - Neutral (배송 문의·일반 질문) → 정보 first, 친절 second
   - VIP (재구매 3회+) → 개인화 first, 우선 처리 약속 second
4. 우선순위 플래그를 답변 첫 줄에 표시: [VIP] [일반] [위험: 즉시 본인 확인]

답변 끝에 환불 가능 여부 + 근거 정책 1줄을 추가.
```

### 9.3 지식 파일 5종

| 파일 | 용도 |
|---|---|
| `Refund_Policy.md` | [Appendix A 환불 정책](./Appendix_A_Refund_Legal_Checklist.md) 영문 템플릿 |
| `Shipping_Policy.md` | DDP/DDU + Track123 안내 |
| `FAQ_Top_50.md` | 자주 묻는 50문답 |
| `Brand_Voice.md` | 카피 비서와 동일 (재사용) |
| `Past_Winning_Replies.md` | 본인이 잘 답한 30~50건 (익명화) |

### 9.4 테스트 — 4가지 고객 메일 유형

| 입력 | 기대 플래그 | 기대 출력 |
|---|---|---|
| "내 주문 어디 있어요? 3주 째 안 와요" | [일반] | 사과 + Track123 링크 + 평균 배송 14~21일 안내 |
| "이거 사기 아닙니까? 환불해주세요!" | [위험: 즉시 본인 확인] | 사과 + 환불 정책 인용 + Stripe Dispute 회피 톤 |
| "이거 너무 좋아요! 친구한테도 추천하려는데" (재구매 3회+) | [VIP] | 감사 + 추천 코드 부여 + 신상 우선 안내 약속 |
| "FDA 승인 받았나요?" | [위험] | 의료 단정 X + "[VERIFY: 정책 확인 필요]" 표시 |

### 9.5 W11 + Appendix A + Master Prompts §4·§21 연결

본 비서는 [W11 RAG](./Week11_RAG_Price_Monitoring.md) 개념의 풀 빌드 구현. [Appendix A §6 Dispute SOP](./Appendix_A_Refund_Legal_Checklist.md)에 따라 Dispute 임박 메일은 [위험] 플래그 + 즉시 본인 확인.

---

## 10. 테스트 & 리파인먼트 — "비서 완성"의 3-기준 체크리스트

| 기준 | 측정 | 통과 |
|---|---|:--:|
| **일관성** | 같은 입력 5번 → 톤 5축 동일 | 4/5 이상 |
| **정책 준수** | 정책 위반·금지어 0 | 5/5 |
| **출력 형식** | 변수 치환 직후 그대로 사용 가능 | 5/5 |

3개 기준 모두 통과 → 비서 가동 OK. 1개라도 실패 → Few-shot 추가 또는 System Prompt 5요소 재점검.

### 리파인먼트 루프 (주 1회)
1. 한 주간 사용한 출력 중 만족도 낮은 5건 수집
2. 각 출력의 약점 1줄씩 메모
3. 약점 패턴 → System Prompt에 가드 1줄 추가 또는 Few-shot 1개 추가
4. 재테스트 5트라이얼

---

## 11. 프라이버시·보안 — 절대 업로드하지 말 것 6가지

§6.2를 더 깊이 다룹니다.

| 절대 X | 발생 사고 | 한국·미국 위반 |
|---|---|---|
| 고객 실명·이메일·주소 | 데이터 유출 신고 의무 | PIPA 5천만원 / GDPR 4% 매출 |
| Shopify/Stripe API 키 | 계정 탈취·금전 손실 | — |
| 결제·카드번호 | PCI 위반 | 직접 처벌 |
| 미공개 마진·소싱가 | 경쟁사 학습 흡수 | — |
| 미발행 상품 사진 | 학습 데이터 흡수 (옵트아웃 미설정 시) | — |
| 본인 사업자등록·세무 | 신원 노출 | PIPA 위반 |

### 만약 실수로 올렸다면 — 30분 안 SOP

1. **즉시 비서 비공개 전환** (Private/Workspace → Private)
2. **Settings → Data Controls → Delete chat history** 실행
3. ChatGPT: Settings → Data Controls → "Improve the model" OFF
4. Claude: Settings → Privacy → Conversation history → Delete
5. 영향 범위 평가 (얼마나 노출됐나? 기간?)
6. 고객 데이터인 경우 → [Appendix A §4 GDPR/CCPA](./Appendix_A_Refund_Legal_Checklist.md) 통보 의무 점검

---

## 12. L3로 넘어가는 다리 — Assistant vs Agent

### Assistant = 사용자 발화에 응답
- 본인이 매번 "트리거"
- 본인이 출력을 받아 다음 단계로
- 24시간 작동 X (본인 컴퓨터 앞에 있어야)

### Agent = 트리거 + 자율 행동
- Webhook/Cron이 트리거
- 본인은 "승인"만 (또는 자동)
- 24시간 작동

본 문서의 3개 비서를 Make.com Webhook으로 묶으면 **Agent**가 됩니다. 예시:

```
[Shopify 주문] → [고객 정보] → [CS 비서] → [Slack 승인] → [Gmail 발송]
   (트리거)      (입력)       (Assistant)    (휴먼-인-루프)   (자동 행동)
```

이게 [Supplement 05 레시피 5·7](./Supplement_05_AI_Workflow_Recipes.md)이 가르치는 패턴이고, 풀 구현은 [Supplement 10 L3](./Supplement_10_L3_AI_Agent_Building.md)에서.

---

## 13. 30일 빌드 챌린지

| 주차 | 과제 |
|:--:|---|
| Week 1 | 카피 비서 빌드 (Stage 1~5) + 5트라이얼 |
| Week 2 | DM 비서 빌드 + 채널 5개 분석 풀로드 |
| Week 3 | CS 비서 빌드 + 4가지 메일 유형 테스트 |
| Week 4 | 3개 비서 통합 운영 + 리파인먼트 1회 + L3 진입 자격 자가 진단 |

졸업 후 30일 안에 3개 비서가 가동되면 **본인 시간 주 5시간 절약**. 1년이면 260시간 = 32일 풀타임.

---

## 📌 한 페이지 치트시트 (인쇄용)

```
═══════════════════════════════════════════════════
  L2 AI Assistant 사용법 — 5단계 빌드
═══════════════════════════════════════════════════

[1] 명세 (Spec)         — 1쪽: 입력·출력·실패 정의
[2] 지침 (System Prompt) — 5요소 (Role·Task·Constraints·Format·Guard)
[3] 지식 (Knowledge)    — Few-shot 5개 + 정책 + 금지어
[4] Action (선택)       — L3 영역
[5] 배포                — Private 권장

3개 비서:
  - 카피 비서 → Master Prompts §2 PAS
  - DM 비서   → §6 채널 분석 + §7 DM
  - CS 비서   → §4 CS 봇 + Appendix A 정책

완성 기준 (3개 모두 통과):
  ✅ 일관성   5트라이얼 4/5+
  ✅ 정책 준수 위반 0
  ✅ 출력 형식 즉시 사용 가능

절대 X: 고객 실명·API 키·결제·카드번호·미공개 마진
═══════════════════════════════════════════════════
```

---

> **마지막 한 마디**: L2의 핵심은 "매번 같은 5분을 0분으로 만드는 것"입니다. 3개 비서가 가동되면 본인은 비로소 "사장"이 됩니다 — 매번 카피·DM·CS를 직접 쓰는 사람이 아니라, 비서들의 출력을 검토하는 사람. 그 다음 단계는 [Supplement 10 — L3 AI Agent](./Supplement_10_L3_AI_Agent_Building.md): 비서들이 본인 승인 없이도 동작하는 무인 시스템.
