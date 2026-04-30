# 🤖 Supplement 10: L3 AI Agent 사용법 — 의사결정 자동화 & 무인 시스템

> **AI Mastery Track L3** — 자동화 (최심화)
>
> **선수 학습**: [L1 Supplement 08](./Supplement_08_L1_Generative_AI_Foundations.md) (검증 능력) + [L2 Supplement 09](./Supplement_09_L2_AI_Assistant_Building.md) (비서 빌드)
>
> **목적**: 본 문서를 끝내면 (1) Assistant vs Agent를 명확히 구분한다, (2) 주문·CS·경쟁사 모니터링 3개 Agent가 가동된다, (3) Browser Use Agent로 동적 사이트까지 자동화한다, (4) 무인 24/7 시스템 마스터 아키텍처를 안다, (5) 인간이 절대 자동 결정을 위임하면 안 되는 영역을 안다.
>
> **소요 시간**: 1회독 2시간 + 3개 빌드 각 60~120분 (총 약 6~8시간).
>
> **결제 권장**: Make.com Pro $9 + Anthropic API ~$15 + 인프라 ~$5 = **약 $30/월**. 매출 $3,000+ 부터 ROI 명확.

---

## 0. L3에 들어오기 전 (선수 점검)

### L1 / L2 / L3 한 줄 정의

| 레벨 | 정의 | 본인 진도 |
|:--:|---|---|
| **L1** | 즉석 프롬프트로 답 받기 + 검증 | [ ] §6.2 4단계 프로토콜 자동 실행 |
| **L2** | 본인 비서가 매일 같은 작업 수행 (트리거 = 본인) | [ ] 카피·DM·CS 3개 비서 가동 |
| **L3** | Agent가 트리거 기반 자율 행동 (트리거 = 시스템) | (이번 학습) |

**원칙**: L1·L2를 안 한 채 L3로 가면, 잘못된 결정도 자동으로 일어납니다. **L3 = L1 검증 + L2 비서 + 트리거 + 자율 행동**.

> L1·L2 미독자는 §0 박스 끝의 한 줄 요약만 읽고도 본 문서를 따라갈 수 있습니다. 단 §3 Build 1 빌드 시 L2 카피·CS 비서가 사전 빌드되어 있어야 매끄럽습니다.

---

## 1. Assistant vs Agent — 같은 일, 다른 구조

### 1-1. 핵심 정의

**Agent = 트리거 + 의사결정 룰 + 행동 + 로깅**

```
[트리거]        — Webhook / Cron / 이메일 도착 등 (자동)
[의사결정 룰]   — Claude API에 의한 판단 (룰 + 컨텍스트)
[행동]          — API 호출 / Slack 알림 / DB 기록
[로깅]          — Sheets/DB에 결정·근거·결과 기록 (디버깅용)
```

### 1-2. "환불 메일 응답" — 같은 작업의 두 모습

| 단계 | Assistant 방식 (L2) | **Agent 방식 (L3)** |
|---|---|---|
| 시작 | 본인이 메일을 본다 → 복사 | Gmail 신규 메일 도착 (자동 트리거) |
| 의사결정 | 본인이 "이건 환불 가능?" 판단 | Claude API가 환불정책 PDF 기준 자동 판단 |
| 행동 | 본인이 "초안 써줘" → 복사 → Gmail | Slack에 초안 도착 → [Approve] 클릭 → Gmail 자동 발송 |
| 로깅 | 본인이 노션에 메모 (또는 안 함) | Sheets에 자동 1행 추가 (메일 ID, 분류, confidence, 발송 여부) |
| 본인 시간 | 메일당 8~12분 | **메일당 30초** (승인 클릭만) |

핵심 차이 한 줄:
> **Assistant**는 본인이 "지시"해야 일합니다. **Agent**는 본인이 "허락"만 하면 일합니다.

지시는 매번 5~10분이지만, 허락은 1초. 이 차이가 1인 셀러의 24시간을 240시간으로 늘립니다.

### 1-3. Agent로 갈 때 얻는 것 / 잃는 것

| 얻는 것 | 잃는 것 |
|---|---|
| 24시간 작동 | 디버깅 비용 (Sheets·Slack 로그 매주 점검) |
| 본인 시간 90% 절약 | 오작동 위험 (잘못된 결정도 자동) |
| 일관성 100% | 초기 셋업 시간 6~10시간 |
| 폭주 시 큰 손실 가능 | 폭주 방지 안전장치 필수 (§8) |

→ **Agent는 잘못된 결정도 자동으로 합니다.** §7 휴먼-인-루프 경계 + §8 폭주 방지 없이는 절대 켜지 마세요.

### 1-4. Make.com은 "Agent-lite" — 어디서 진짜 Agent가 되는가

[Week 10](./Week10_Auto_Fulfillment_CS.md) Make 시나리오는 trigger + action 2단입니다 — "if 주문 들어오면 then CJ에 발주" 같은 정적 룰. 의사결정이 없습니다.

**Agent로 승격 = 의사결정 룰이 Claude API에 있을 때**. 즉:

```
[트리거] → [Claude API: 룰 + 컨텍스트로 판단] → [Router: 판단에 따라 분기] → [행동]
```

이 구조가 본 문서 Build 1·2·3의 공통 골격입니다.

---

## 2. 무인 24/7 운영 시스템 마스터 아키텍처

### 2-1. 풀 다이어그램

```
                  무인 24/7 드랍쉬핑 시스템 — Master Architecture
                  ────────────────────────────────────────────

    ┌─────────────────┐       webhook (즉시)
    │  Shopify Store  │ ──────────────────────────┐
    └─────────────────┘                            ▼
            ▲                          ┌──────────────────┐
            │                          │ [A] Order Agent  │   trigger: order.create
            │ 발송                      │  Make + Claude    │   decision: 재고/마진/BL
            │                          │  Haiku 4.5       │   action: CJ or Slack
            │                          └─────────┬────────┘
            │                                    │
            │                       ┌────────────┴────────────┐
            │                       │ AUTO_ORDER              │ ESCALATE
            │                       ▼                         ▼
            │              ┌────────────────┐         ┌──────────────┐
            │              │[B] CJ Fulfill  │         │ Slack        │
            │              │ HTTP (CJ API)  │         │ #orders-     │
            │              └───────┬────────┘         │  review      │
            │                      │                  └──────────────┘
            │                      ▼                          │
            │              ┌────────────────┐                 │
            │              │[C] Track123    │                 │
            │              │  Tracker Agent │                 ▼
            │              │  (poll 6h)     │             [본인 검토]
            │              └───────┬────────┘                 │
            │                      │ status_update            │
            │                      ▼                          │
    ┌────────────────┐    ┌──────────────────┐                │
    │ 고객 이메일    │───▶│[D] Watcher Agent │                │
    │  (Gmail)       │    │  Make Gmail watch │                │
    └────────────────┘    └────────┬─────────┘                │
                                   │ JSON                     │
                                   ▼                          │
                          ┌──────────────────┐                │
                          │[E] Analyst Agent │                │
                          │  Claude API +    │                │
                          │  Shopify Customer│                │
                          │  RAG (Projects)  │                │
                          └────────┬─────────┘                │
                                   │ classification           │
                                   ▼                          │
                          ┌──────────────────┐                │
                          │[F] Communicator  │                │
                          │  Claude (RAG 답안)│               │
                          └────────┬─────────┘                │
                                   │ draft                    │
                                   ▼                          │
                          ┌──────────────────┐                │
                          │ Slack 승인        │                │
                          │ [Approve][Edit]   │ ◀──────────────┘
                          │  [Reject]         │      모든 인간 개입
                          └────────┬─────────┘      한 곳에 집중
                                   │ Approve
                                   ▼
                          ┌──────────────────┐
                          │  Gmail 자동 발송  │
                          └────────┬─────────┘
                                   │
                                   ▼
                          ┌──────────────────┐
                          │ Sheets (모든 결정 │
                          │   1 행씩 로깅)    │
                          └────────┬─────────┘
                                   │ daily 06:00
                                   ▼
                          ┌──────────────────┐         ┌──────────────────┐
                          │[G] Analytics     │ ──────▶ │ Notion 대시보드  │
                          │  Agent (Claude)  │         │  (본인 5분 점검) │
                          │  Self-Critique   │         └──────────────────┘
                          └──────────────────┘
                                   │
                                   ▼
                          ┌──────────────────┐
                          │[H] Browser Use   │   매일 09:00
                          │  Competitor      │   경쟁사 5개 가격
                          │  Scraper (OSS)   │   → Sheets → Slack
                          └──────────────────┘
```

7개 Agent (A~G) + 외부 1개 (H). 인간 개입은 Slack 한 채널로 수렴 = "허락 5초" 모델.

### 2-2. 노드별 책임 분해

| 노드 | 트리거 | 의사결정 | 행동 | 인간 개입 | 월 비용 |
|---|---|---|---|---|:--:|
| [A] Order | Webhook | 재고/마진/BL 3룰 | CJ 발주 or Slack | 위험 시 | $5 |
| [B] CJ Fulfill | A의 OK | — | CJ API 호출 | X | $1 |
| [C] Track123 | Cron 6h | — | 송장 갱신 | X | $0 |
| [D] Watcher | Gmail watch | 분류만 | E에게 핸드오프 | X | $1 |
| [E] Analyst | D의 출력 | RAG 분류 + 우선순위 | F에게 핸드오프 | X | $5 |
| [F] Communicator | E의 출력 | 답변 초안 | Slack 게시 | **항상** | $5 |
| [G] Analytics | Cron 06:00 | Self-Critique | Notion 갱신 | X | $3 |
| [H] Browser Use | Cron 09:00 | 가격 추출 | Sheets + Slack | X | $5 |
| **합계** | | | | | **~$25** |

(Make.com Pro $9는 별도 → 총 ~$34/월)

### 2-3. JSON 핸드오프 스키마 표준

각 노드 사이에 흐르는 JSON은 **항상 동일 골격**입니다.

```json
{
  "trace_id": "uuid-v4",
  "timestamp": "2026-04-28T09:15:32Z",
  "source_node": "watcher",
  "target_node": "analyst",
  "payload": { ... },
  "confidence": 0.92,
  "metadata": {
    "model": "claude-haiku-4-5",
    "tokens_used": 480,
    "cache_hit": true
  }
}
```

`trace_id`로 모든 노드를 가로질러 추적 가능. confidence < 0.85면 자동으로 [F] Communicator 우회 후 Slack 강제 승인.

### 2-4. 휴먼 대시보드 (Notion 5분 점검 7항목)

매일 아침 5분, Notion 대시보드를 봅니다.
1. 어제 처리된 주문 N건 (Auto N건 / Escalate N건)
2. 어제 CS 답변 N건 (Approve N건 / Edit N건 / Reject N건)
3. 폭주 신호 — 동일 사유 ESCALATE 3회+ 발생?
4. 경쟁사 가격 변동 알림 (어제 -15%↑)
5. 분쟁 임박 — Stripe Dispute 신호?
6. API 비용 어제 $X (Hard cap 대비 %)
7. 본인 미승인 대기 중 메일 N건

→ 5분이면 끝. 1주일 한 번 깊게 점검 (§6 자가 개선).

---

## 3. Build 1 — Single Agent: Shopify 신규 주문 → CJ 자동 발주

### 3-1. 목표

밤에 들어온 주문을 본인이 자는 동안 CJ에 자동 발주하되, 위험 신호(재고 없음·마진 30% 미만·블랙리스트 국가)가 하나라도 있으면 발주하지 말고 Slack에 멘션.

### 3-2. 의사결정 룰 명세

| 룰 | 통과 조건 | 위반 시 |
|---|---|---|
| 재고 | `cj_stock_qty >= ordered_qty` | ESCALATE |
| 마진 | `(selling - cogs - shipping) / selling >= 0.30` | ESCALATE |
| 블랙리스트 국가 | `country NOT IN [KP, IR, CU, SY, RU]` | ESCALATE |

3개 모두 통과 + confidence >= 0.9 → **AUTO_ORDER**. 1개라도 위반 → **ESCALATE**.

### 3-3. Make.com 모듈 구성 (5 모듈)

```
[1] Webhooks > Custom webhook
    └─ Shopify Admin → Settings → Notifications → Webhooks → "Order created"
       이벤트를 이 URL로 던지게 등록.

[2] HTTP > Make a request   ← Claude API 호출 (의사결정 두뇌)
    └─ Method: POST
       URL: https://api.anthropic.com/v1/messages
       Headers:
         x-api-key: {{ENV.ANTHROPIC_KEY}}
         anthropic-version: 2023-06-01
         content-type: application/json
       Body type: Raw / JSON

[3] Tools > Parse JSON  ← Claude 응답에서 decision 필드 추출

[4] Flow Control > Router  ← 2 분기

    [분기 A: decision = "AUTO_ORDER"]
      └─ HTTP > Make a request (CJ Order API)
      └─ Google Sheets > Add a row (로그)

    [분기 B: decision = "ESCALATE"]
      └─ Slack > Post a message (#orders-review 채널, 사유 포함)
      └─ Google Sheets > Add a row (로그)
```

### 3-4. Claude API Body — 그대로 복사

```json
{
  "model": "claude-haiku-4-5-20251001",
  "max_tokens": 400,
  "system": "너는 드랍쉬핑 발주 의사결정기다. 입력된 주문을 다음 3가지 기준으로 평가하여 JSON으로만 답한다.\n\n[기준]\n1. 재고: cj_stock_qty >= ordered_qty 인가?\n2. 마진: (selling_price - cogs - shipping) / selling_price >= 0.30 인가?\n3. 블랙리스트 국가가 아닌가? (KP, IR, CU, SY, RU)\n\n[출력 — JSON만]\n{\n  \"decision\": \"AUTO_ORDER\" | \"ESCALATE\",\n  \"failed_rules\": [],\n  \"reasoning\": \"한 문장\",\n  \"confidence\": 0.0\n}\n\n[하드 룰]\n- 1개라도 FAIL → ESCALATE.\n- confidence < 0.9 → ESCALATE.",
  "messages": [
    { "role": "user", "content": "{{1.body}}" }
  ]
}
```

`{{1.body}}`는 1번 모듈(Webhook)에서 받은 Shopify 주문 페이로드 전체를 매핑. Make의 매핑 패널에서 "Webhooks > body" 선택.

**Haiku 4.5를 쓰는 이유**: 분류·룰 평가 같은 단순 의사결정에는 Haiku가 충분. Sonnet/Opus는 비용 5~10x — 낭비. (§8.2 비용 절감 참조.)

### 3-5. 출력 JSON + Router 분기

```json
// Claude 응답 예시
{
  "decision": "ESCALATE",
  "failed_rules": ["margin"],
  "reasoning": "Margin 24% (below 30% threshold)",
  "confidence": 0.95
}
```

Router는 `{{3.decision}}` 값으로 분기. AUTO_ORDER이면 CJ HTTP, ESCALATE이면 Slack.

### 3-6. 테스트 + 디버깅 + 로깅

**테스트 시나리오 4개**:
1. 정상 주문 (3룰 모두 통과) → AUTO_ORDER
2. 재고 부족 → ESCALATE (failed_rules: ["stock"])
3. 마진 22% → ESCALATE (failed_rules: ["margin"])
4. 북한 배송지 → ESCALATE (failed_rules: ["blacklist"])

각 결과를 Sheets에 1행씩 로깅. 컬럼: timestamp / order_id / decision / failed_rules / confidence / action_taken.

**디버깅**: Slack `#orders-review`에 ESCALATE이 너무 자주 뜨면 Sheets 로그를 1주일치 Claude에 통째 입력 → "패턴 분석해서 룰을 더 합리적으로 조정해줘" (§6 자가 개선).

---

## 4. Build 2 — Browser Use Agent: 매일 경쟁사 가격 스크랩

### 4-1. 왜 Browser Use Agent인가

[Week 11](./Week11_RAG_Price_Monitoring.md) 모니터링 봇은 정적 HTML만 스크랩 가능. 하지만 2026년 대부분 D2C 사이트는:
- React/Next.js SPA (HTML이 비어있고 JavaScript로 렌더링)
- Cloudflare 봇 차단
- 로그인 벽

→ 정적 스크래핑으로 안 됨. **Browser Use Agent** (실제 브라우저를 자동 조작) 필요.

### 4-2. 2026년 초 Browser Use Agent — 3대 옵션

| 항목 | Anthropic Computer Use | **Browser Use OSS** ← 추천 | Skyvern |
|---|---|---|---|
| 출시 | 2024-10 베타 → 2025 GA | 2024-Q4 OSS, 2025 활발 | 2024-Q3, YC |
| 호스팅 | Anthropic 자체 격리 VM | 본인 PC 또는 Render/Railway | SaaS Cloud + OSS |
| 제어 범위 | **화면 전체** (마우스·키보드) | 브라우저 내부만 (Playwright) | 브라우저 내부만 |
| LLM 백엔드 | Claude만 | Claude/GPT/Gemini 선택 | OpenAI 기본 |
| 비용 | Claude API + 화면 토큰 (비쌈) | Claude/GPT API만 | Cloud $0.10/run~ |
| 한국어 셋업 | 중 (격리 환경 필요) | **저** (pip install + .env) | 저 (가입만) |
| Lock-in | Anthropic | 없음 | Skyvern |
| 비개발자 30분 시작 | △ | **○** | ○ |

### 4-3. 본 강의 추천: Browser Use OSS + Claude Sonnet 4.6

선택 사유:
1. **비용·해지 자유**: 본인 Anthropic API 키만 있으면 끝. SaaS 구독 X.
2. **Computer Use보다 안전**: 브라우저 한 탭 안에서만 동작 → 내 PC의 Slack·은행 앱·메모장 등에 접근 불가. **"AI가 내 PC 망가뜨리면?" 시나리오를 구조적으로 차단**.
3. **Python 1개 파일**로 시작 → [Cursor (W6 학습)](./Week06_Cursor_Coding_Optimization.md)와 직접 호환.
4. **Claude·GPT·Gemini 백엔드 자유**: 프롬프트 캐싱 활용해 Claude 90% 할인 가능 (§8.2).

> **Computer Use는 언제 쓰나?**
> 브라우저 밖 작업이 꼭 필요할 때 (예: 본인 PC의 엑셀 매크로 자동 실행). 1인 셀러에게는 99% 불필요하며, §7-3 위험성 때문에 **본 강의에서는 학습용으로만 짧게 언급**합니다.

### 4-4. 워크플로우 — 매일 09:00 경쟁사 5개 가격 수집

```
[Vercel Cron 또는 Render Cron 09:00 KST]
        │
        ▼
[Render 또는 본인 PC: Python — browser-use 라이브러리]
        │   "다음 5개 URL을 차례로 열어 가격, 재고 상태,
        │    구매 버튼 텍스트를 추출해서 JSON으로 반환해.
        │    URL: [...]"
        │
        ▼
[JSON 결과 → Google Sheets API → 한 시트에 5 행 추가]
        │
        ▼
[직전 7일 평균과 비교 — 가격이 -15% 이상 떨어졌으면 Slack 알림]
```

### 4-5. browser-use 시작 5분 가이드

```bash
# 1. Python 환경 (3.11+)
pip install browser-use

# 2. .env 파일
ANTHROPIC_API_KEY=sk-ant-...

# 3. main.py
from browser_use import Agent
from langchain_anthropic import ChatAnthropic

llm = ChatAnthropic(model="claude-sonnet-4-6")
agent = Agent(
    task="""
    Visit these 5 competitor URLs in order:
    https://uprightgo.com/products/upright-go-2
    https://backembrace.com/products/back-embrace-original
    [...3 more...]

    For each URL, extract:
    - price (USD, just the number)
    - in_stock (true/false)
    - cta_text (button label)

    Return a JSON array: [{url, price, in_stock, cta_text}]
    """,
    llm=llm,
)
result = agent.run()
print(result)
```

→ Render Cron으로 매일 09:00 실행 + 결과를 Sheets API에 PUT.

### 4-6. 안전 가드레일

- ❌ 절대 로그인 정보를 Agent에 입력시키지 말 것 (브랜드 평판·법적 리스크)
- ❌ 타깃 사이트가 Cloudflare 차단하면 즉시 중단 — 우회 시도 X
- ❌ robots.txt 무시 X — Browser Use는 합법적 사용만
- ✅ 매 요청 사이 5초+ 지연 (서버 부담 X)
- ✅ User-Agent 명시 ("Brand-Name competitor monitoring")

### 4-6-bis. MCP (Model Context Protocol) — Agent 표준 도구 프로토콜

[Anthropic이 2024.11에 발표한 MCP](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation)는 Agent와 외부 도구·데이터 소스를 연결하는 **OpenAPI 같은 표준 프로토콜**. 2025.12 Linux Foundation으로 이관되어 **벤더 중립 표준**이 됨. 2026.4 기준 75+ Claude 공식 connector + Cursor·Windsurf·Zed 등 IDE 통합.

#### MCP 핵심 개념

```
┌─ MCP Client (Cursor / Claude Desktop / 본인 Agent SDK 앱)
│
├─ MCP Server 1: Shopify (상품·주문·재고 read/write)
├─ MCP Server 2: GA4 (analytics 쿼리)
├─ MCP Server 3: Klaviyo (CRM 세그먼트 + 메일 발송)
├─ MCP Server 4: Slack (알림 발송)
└─ MCP Server N: 본인 커스텀 (CJ 발주 + Order DB)
```

각 server가 **tool 목록 + 입력 스키마 + 핸들러**를 정의. Client는 LLM 컨텍스트에 자동 노출. **한 번 연결 → 모든 Agent에서 재사용**.

#### 1인 셀러용 MCP 활용 5선

| 활용 | MCP Server | 사용 사례 |
|---|---|---|
| Shopify 주문 자동 조회 | `@shopify/mcp-server` | "오늘 미발송 주문 목록" → 자동 발송 |
| GA4 분석 자동 | `@google/ga4-mcp` | "어제 ROAS 채널별 분석" |
| Slack 알림 통합 | `@modelcontextprotocol/server-slack` | 분쟁/재고 부족 즉시 알림 |
| 자체 CJ 발주 봇 | 본인 작성 (FastMCP Python) | 주문 → CJ → 송장 발급 |
| 가격 모니터링 | `@modelcontextprotocol/server-puppeteer` | §4 Browser Use 대안 |

#### 셋업 — Claude Desktop 기준 (5분)

```json
// ~/.claude/claude_desktop_config.json
{
  "mcpServers": {
    "shopify": {
      "command": "npx",
      "args": ["-y", "@shopify/mcp-server"],
      "env": { "SHOPIFY_API_KEY": "..." }
    },
    "slack": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-slack"]
    }
  }
}
```

**Claude Desktop 재시작 → 우측 사이드바에 도구 자동 등록**. Claude에 자연어로 "오늘 매출 100$ 이상 주문을 Slack #orders 채널에 정리해 보내줘" → 자동 실행.

#### Tool Search + Programmatic Tool Calling (2026.2 신규)

Claude API에 추가된 두 기능:
- **Tool Search**: LLM이 100+ 도구 중 작업에 맞는 도구를 동적으로 검색
- **Programmatic Tool Calling**: Tool 응답을 Code Interpreter처럼 변환하여 chained 호출

> **본 강의 권장 진입 경로**: §3 Make.com → 검증 후 §4-7 Claude Agent SDK → 6개월 운영 후 MCP 표준화. MCP는 **여러 Agent + 도구 재사용** 시점에 가치 폭발 — 1인 셀러 단일 Agent 단계엔 over-engineering.

---

### 4-7. 코드 우선 옵션 — Agent SDK (Claude Agent SDK / OpenAI Agents SDK)

§3 Make.com·§4 Browser Use는 노코드/저코드 빠른 셋업에 최적. 하지만 **Agent를 본격적으로 빌드한다면** (멀티 도구 호출 + 메모리 + 서브 에이전트 + 스트리밍 + 구조화 출력) 2025년 출시된 Agent SDK가 골격 없이 직접 만드는 것보다 압도적으로 빠릅니다.

| 항목 | **Claude Agent SDK** | **OpenAI Agents SDK** |
|---|---|---|
| 출시 | 2025-Q4 | 2025-Q1 (Swarm 후속) |
| 언어 | Python · TypeScript | Python · JS |
| 장점 | 200K context · 프롬프트 캐싱 90% 할인 · MCP 표준 도구 | GPT-5 · 빌트인 트레이싱 UI · Voice Agent |
| 핸드오프 | `Subagent` + `Tool` 데코레이터 | `handoff()` 함수 |
| 가드레일 | `permission_mode` (system 권한 격리) | `Guardrail` 클래스 (입출력 검증) |
| 본 강의 적합도 | **L3 빌드 1순위** (Claude 톤 일관성) | Voice 보조 (영어 IVR 등) |

```python
# Claude Agent SDK — §3 의사결정 룰을 SDK로 재작성한 예
from claude_agent_sdk import query, AssistantAgent, tool

@tool
def check_inventory(sku: str) -> dict:
    return cj_api.stock(sku)

@tool
def recompute_margin(sku: str, sale_price: float) -> dict:
    return margin_engine.run(sku, sale_price)

agent = AssistantAgent(
    model="claude-sonnet-4-6",
    tools=[check_inventory, recompute_margin],
    system="너는 Shopify 주문 의사결정 Agent. 3룰(재고/마진/BL) 평가 후 JSON 반환.",
    max_iterations=5,
)

result = await query(agent, order_payload)  # AUTO_ORDER or ESCALATE
```

**언제 Make.com에서 SDK로 옮길까**:
- Make.com 시나리오가 30+ 모듈로 비대해짐
- 동일 LLM 호출이 3+ 모듈에서 반복 (캐싱 못함)
- 멀티 단계 사고가 필요 (Make Router로는 표현 한계)
- 월 Make.com Operations 한도 초과 ($30+ 결제 시점)

> **추천 진입 경로**: §3 Make.com → 첫 매출 + 운영 안정 (1~2개월) → §4-7 Claude Agent SDK 마이그레이션. SDK는 [Cursor (W6)](./Week06_Cursor_Coding_Optimization.md) + [Supplement 09 L2 학습](./Supplement_09_L2_AI_Assistant_Building.md) 후 진입 권장.

---

## 5. Build 3 — Multi-Agent: CS 풀 처리 (Watcher → Analyst → Communicator)

### 5-1. 패턴 일반화

[Week 13](./Week13_Advanced_Workflows.md) 3-Agent 흐름은 **재사용 가능한 골격**입니다.

```
[Watcher]      → [Analyst]            → [Communicator]
신호 감지       분류 + 컨텍스트 보강    행동 또는 초안
(Gmail watch)  (Claude + Shopify API)  (Claude + RAG)
```

이 패턴은 CS / 분쟁 / 광고 모니터링 / 재고 알림 등 어디든 적용. 본 §5는 CS 시나리오로 풀 빌드.

### 5-2. 핸드오프 JSON 스키마 표준

```json
// Watcher → Analyst
{
  "trace_id": "uuid",
  "source": "gmail.watch",
  "email": {
    "from": "customer@example.com",
    "subject": "Where is my order?",
    "body": "...",
    "received_at": "2026-04-28T08:15Z"
  }
}

// Analyst → Communicator
{
  "trace_id": "uuid",
  "classification": "shipping_inquiry",
  "priority": "normal",  // VIP / normal / risk
  "customer_history": {
    "order_count": 3,
    "lifetime_value": 187.50,
    "last_order_status": "in_transit"
  },
  "context_for_reply": {
    "tracking_number": "...",
    "estimated_delivery": "2026-05-03"
  },
  "confidence": 0.94
}

// Communicator → Slack (휴먼 승인)
{
  "trace_id": "uuid",
  "draft_reply": "Hi [name], thanks for reaching out...",
  "tone": "neutral_friendly",
  "policy_citations": ["Shipping_Policy.md §2"],
  "confidence": 0.94,
  "action": "AWAITING_APPROVAL"
}
```

### 5-3. CS 시나리오 풀 워크플로우

```
[D] Watcher Agent
   - Make.com Gmail watcher 모듈 (5분 폴링)
   - 신규 메일을 JSON으로 변환

[E] Analyst Agent
   - Claude Haiku 4.5 (분류만 — 빠르고 저렴)
   - Shopify Customer API 호출 — 주문 이력 조회
   - 출력: 분류 + VIP/normal/risk + 컨텍스트

[F] Communicator Agent
   - Claude Sonnet 4.6 (작문은 더 정교한 모델)
   - Claude Projects RAG (정책 PDF 5개 업로드 — Refund/Shipping/FAQ/Brand_Voice/Past_Replies)
   - 출력: 답변 초안 + 정책 인용 + tone

[Slack 승인]
   - #cs-review 채널에 카드 형식으로 게시
   - [Approve] [Edit] [Reject] 3개 버튼
   - Approve → 자동 Gmail 발송
   - Edit → 본인이 직접 수정 후 발송
   - Reject → 발송 안 함, 본인이 직접 작성
```

### 5-4. 에러 회복 + 에스컬레이션 룰

| 조건 | 액션 |
|---|---|
| confidence < 0.85 | 강제 escalate (Slack 강조 표시) |
| 동일 고객 5회+ RISK 분류 | 본인 Slack DM (VIP 매니저 = 본인) |
| API 실패 3회 | 시나리오 정지 + 비상 알림 |
| Communicator가 정책 인용 X | 발송 차단, 본인 검토 강제 |
| 한국어 + 영어 외 언어 | 자동 escalate (오번역 위험) |

### 5-5. Cross-link

이 빌드는 [Week 11 RAG](./Week11_RAG_Price_Monitoring.md) + [Appendix A §6 Dispute SOP](./Appendix_A_Refund_Legal_Checklist.md) + [Master Prompts §10 Multi-Agent](./02_Master_Prompts.md)의 통합 풀 구현. L2 [Supplement 09 §9 CS 비서](./Supplement_09_L2_AI_Assistant_Building.md)의 "Assistant 버전"을 Agent로 승격.

---

## 6. 자가 개선 Agent (Feedback Loop)

### 6-1. 개념

**Agent도 매주 1번 자기 평가**하면 시간이 갈수록 정확해집니다.

```
[Sheets 로그] → [Claude에 통째 입력] → ["오답 5건 + 시스템 프롬프트 개선안"] → [본인 검토 후 적용]
```

### 6-2. 주간 회고 자동화

매주 일요일 22:00 Cron 실행:

```
1. 지난 7일 Sheets 로그 전체 export (300~1000 rows)
2. Claude Sonnet 4.6에 통째 입력 + 다음 프롬프트:
   "다음은 지난 7일간 [Order/CS/Browser] Agent의 의사결정 로그다.
    1. 명백한 오답 5건을 식별 (사람이 보면 다르게 결정했을 케이스)
    2. 각 오답의 패턴 1줄 분석
    3. 시스템 프롬프트에 추가할 가드 1줄
    4. 자가 평가 점수 (1~10)
    [JSON으로만 답하라]"
3. 출력 → Notion 페이지 자동 생성 → 본인 일요일 5분 검토
4. 본인이 가드 추가 승인하면 다음 주 시스템 프롬프트에 반영
```

### 6-3. 한계

자가 개선은 **드리프트(drift) 감지**와 **A/B 비교**까지는 못 합니다. 그건 사람이 매월 1회 깊게 봐야 합니다.

---

## 7. 인간 개입 경계 (Human-in-Loop Boundaries)

### 7-1. 절대 자동 결정 금지 매트릭스

| 결정 영역 | Agent 자동 OK 한도 | 인간 개입 강제 시점 | 권장 패턴 |
|---|---|---|---|
| 환불 처리 | $30 미만 + 14일 이내 + 사유 = "damaged" | $30 이상 / 14일 초과 / 사유 모호 | Approve-before-act |
| Stripe/PayPal Dispute 응답 | **절대 X** | **모든 건 100% 인간** | Block-by-default |
| 신규 상품 가격 변경 | 0% (절대 X) | 모든 건 인간 | Block-by-default |
| 광고 예산 변경 (TikTok/Meta) | $20/일 미만 자동 일시정지 OK | 증액·재개·전략 변경 | Notify-then-act |
| CS 일반 문의 답변 | 초안 자동 생성 OK | 발송은 항상 클릭 | Approve-before-act |
| VIP 감사 메일 (자동 발송) | 정형 템플릿 + ≥0.85 confidence | 동일 고객 재발송 / 컴플레인 직후 | Act-then-audit |
| 브랜드 보이스 SNS 게시물 | **절대 X** | 모든 게시물 인간 작성·검수 | Block-by-default |
| 재고 발주 (CJ) | 마진≥30% + 블랙리스트 X + 재고 OK | 1건이라도 FAIL | Approve-before-act |
| 가격 모니터링 알림 | 모든 알림 자동 OK (행동 X) | 가격 인상 결정은 인간 | Act-then-audit |
| 법적 응답 (FTC·PIPA) | **절대 X** | 변호사·본인 검토 | Block-by-default |

### 결정 원칙 1줄

> **"되돌릴 수 있는 행동만 자동, 되돌릴 수 없는 행동은 클릭."**

환불·법적 응답·SNS 게시물은 한 번 나가면 못 돌립니다. 가격 모니터링 Slack 알림은 틀려도 무해. 이 기준으로 본인 Agent를 1주일에 한 번 점검.

### 7-2. 휴먼-인-루프 4 패턴

| 패턴 | 정의 | 예시 |
|---|---|---|
| **Approve-before-act** | 행동 직전 인간 클릭 강제 | CS 답변, 환불 처리 |
| **Notify-then-act** | 행동 후 즉시 인간에게 알림 | 광고 일시정지, 소액 자동 환불 |
| **Act-then-audit** | 자동 행동 + 주간 감사 | 가격 모니터링 알림 |
| **Block-by-default** | 절대 자동 X, 항상 인간 | Dispute, 법적 응답, SNS 게시물 |

### 7-3. Computer Use Agent 특별 경고

Anthropic Computer Use는 **본인 PC 화면 전체**를 제어합니다 (마우스·키보드·모든 창).

- 메인 계정에서 절대 실행 X — **별도 Windows 계정 또는 VM**에서만
- 브라우저 비밀번호 매니저 자동 로그인 비활성화
- 작업 종료 후 세션 즉시 종료, 모든 활동 로그 30일 보관
- **카드·결제 페이지·은행 사이트는 절대 자동화 대상에 포함 X**

→ 1인 셀러는 Browser Use OSS로 충분. Computer Use는 권하지 않음.

---

## 8. 비용·요율 한계 (Cost & Rate Limits)

### 8-1. Agent 운영 월 비용 (3개 빌드 동시)

| 항목 | 비용 |
|---|:--:|
| Make.com Pro | $9 |
| Anthropic API (Haiku 분류 + Sonnet 작문) | ~$15 |
| Browser Use 인프라 (Render free tier 가능) | $0~$5 |
| Sheets/Slack/Track123/CJ | $0 |
| **합계** | **~$25~30** |

> **분기점**: 매출 $1,000 미만이면 본 supplement 보류, **$3,000+ 부터 ROI 명확** (시간 절약 $200+/월).

### 8-2. Claude API 비용 절감 3가지

| 기법 | 절감 | 적용 |
|---|---|---|
| **Prompt Caching** | 최대 90% (시스템 프롬프트 캐시) | 모든 Build의 시스템 프롬프트에 적용. `cache_control` 헤더. |
| **Haiku 분류 + Sonnet 작문** | 5~10x | Build 1·3 분류는 Haiku, Communicator만 Sonnet |
| **Batch API** | 50% (12시간 비동기 OK 한 작업) | Build 4 자가 회고 (일요일 밤 → 월요일 아침까지 OK) |

### 8-3. Make.com Operations 한계

무료 1,000 ops/월. 3개 Build 풀가동 시 약 5,000~10,000 ops/월 → **Pro $9/월 (10K ops)** 필수.

### 8-4. 폭주(Runaway Loop) 방지

| 방지 | 구현 |
|---|---|
| **Hard cap** | API 비용 $50/일 초과 시 Make 시나리오 자동 정지 + Slack 비상 |
| **Circuit breaker** | API 실패 3회 연속 → 시나리오 5분 정지 후 재시도 |
| **Loop detection** | 같은 trace_id가 30분 내 5번 이상 등장 → 자동 정지 |
| **Daily summary** | 매일 06:00 어제 비용·결정 횟수 Slack 알림 |

→ 폭주 1회 = 하루에 $500+ 손실 가능. 위 4개는 **첫날 셋업 필수**.

---

## 9. L3 졸업 7일 챌린지

| Day | 과제 |
|:--:|---|
| 1 | §1 Assistant vs Agent 1줄로 설명 + Make.com Pro 결제 |
| 2 | Build 1 (Order Agent) 빌드 + 4개 테스트 시나리오 통과 |
| 3 | Build 2 (Browser Use) 빌드 + 경쟁사 5개 첫 스크랩 성공 |
| 4 | Build 3 (Multi-Agent CS) Watcher + Analyst 단계 빌드 |
| 5 | Build 3 Communicator + Slack 승인 흐름 완성 |
| 6 | §6 자가 개선 회고 자동화 + Notion 대시보드 7항목 |
| 7 | §7 휴먼-인-루프 매트릭스 본인 Agent에 적용 + §8 폭주 방지 4종 셋업 |

7일 챌린지 통과 → **본인 24/7 무인 시스템 가동**. 매일 5분 Notion 점검 + 주 30분 회고 = 본인 시간 주 10시간 절약.

---

## 10. 다음 단계 — L4 영역 미리보기 (선택)

| L4 영역 | 의미 |
|---|---|
| Multi-tenant Agent | 본인 시스템 → 다른 셀러에게 SaaS로 |
| Agent Marketplace | 본인이 만든 Agent를 판매 |
| 자체 SaaS화 | [Week 14 Command Center](./Week14_Final_Review_SaaS_Pitch.md) 연계 |

L4는 본 강의 범위 밖. Week 14 SaaS 비전과 연결됩니다.

---

## 📌 Quick Reference Card (1페이지 인쇄용)

```
═══════════════════════════════════════════════════════════
  L3 AI Agent — 3개 Build 한눈에
═══════════════════════════════════════════════════════════

[Build 1] Single Agent — Shopify 주문 → CJ 자동 발주
   트리거:  Shopify Webhook (order.create)
   결정:   Claude Haiku 4.5 (재고/마진/BL 3룰)
   행동:   AUTO_ORDER → CJ API   |   ESCALATE → Slack
   인간:   위험 시 Slack 클릭

[Build 2] Browser Use Agent — 매일 경쟁사 가격 스크랩
   트리거:  Cron 09:00 KST
   결정:   Browser Use OSS + Claude Sonnet 4.6
   행동:   가격 추출 → Sheets → -15% 시 Slack
   인간:   결정만 사람 (Agent는 알림만)

[Build 3] Multi-Agent — CS Watcher → Analyst → Communicator
   트리거:  Gmail watch (5분 폴링)
   결정:   Haiku(분류) + Sonnet(작문) + RAG(정책)
   행동:   Slack 카드 [Approve/Edit/Reject]
   인간:   항상 (NEVER auto-send)

휴먼-인-루프 4 패턴:
  Approve-before-act  | Notify-then-act
  Act-then-audit      | Block-by-default

폭주 방지 4종 (첫날 필수):
  Hard cap $50/일  |  Circuit breaker 3회
  Loop detection   |  Daily summary 06:00

월 비용: ~$30 (Make $9 + Anthropic $15 + 인프라 $5)
ROI 분기점: 매출 $3,000+ 부터
═══════════════════════════════════════════════════════════
```

---

> **마지막 한 마디**: L3의 핵심은 "잘못된 결정도 자동으로 일어난다"는 것을 인정하는 것입니다. 그래서 §7 인간 개입 경계가 본 문서의 진짜 IP입니다. 24시간 작동을 얻는 대가로 폭주 위험을 받아들이는 거래 — 이 거래를 받아들일 준비가 됐을 때만 Agent를 켜세요. 졸업 후 매출 $3K 돌파 전에는 L2 비서로도 충분합니다.
