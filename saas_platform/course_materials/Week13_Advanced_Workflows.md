# 🎓 Week 13: 워크플로우 고도화 (VIP 고객 관리)

## 🎯 이번 주 학습 목표
1. 데이터 기반으로 단순 1회성 구매 고객을 단골(VIP)로 전환하는 후속 플로우를 기획한다.
2. Make.com의 심화 기능인 Router(분기점)를 사용하여 조건에 따라 다른 행동을 하는 자동화를 구축한다.

---

## ⏰ 타임라인 (총 2.5시간)
* **0:00 - 0:10 (10분)**: 12주차 과제(병목 분석 및 마진 결산) 리뷰
* **0:10 - 0:40 (30분)**: [이론] LTV(고객 생애 가치)와 리텐션 마케팅
* **0:40 - 0:50 (10분)**: ☕ 쉬는 시간
* **0:50 - 2:10 (80분)**: [실습] Make.com Router 활용 VIP 자동 분류 메일 세팅
* **2:10 - 2:30 (20분)**: Q&A 및 다음 주 최종 발표(14주차) 준비 안내

---

## 📖 이론 파트 (0:10 - 0:40)

### 1. 신규 고객 획득 비용(CAC) vs 단골 유지 비용

새로운 고객 1명을 틱톡 광고로 데려와서 물건을 팔려면 **20달러가 듭니다**. 하지만 이미 한 번 물건을 사서 만족한 고객에게 이메일을 보내서 또 사게 만드는 데는 **0달러**가 듭니다. 광고비가 점점 비싸지는 2026년에 살아남는 유일한 방법은 한 명의 고객이 두 번, 세 번 사게 만드는 **'재구매(LTV)' 설계**입니다.

### 2. 조건부 자동화의 논리 (If / Then / Else)

모든 고객에게 똑같은 할인 쿠폰을 뿌리는 건 바보짓입니다. 이미 100달러어치를 산 큰손(VIP)에게는 30% VIP 시크릿 쿠폰을, 장바구니에 담고 나간 사람에게는 10% 쿠폰을 줘야 합니다. 오늘은 이 조건부 로직을 자동화 툴에 심어봅니다.

> 💡 **2026 코드 우선 옵션**: Make.com Router로 30+ 모듈 비대해지면 [Supplement 10 §4-7 (Claude Agent SDK)](./Supplement_10_L3_AI_Agent_Building.md) + [§5 Multi-Agent (Watcher→Analyst→Communicator)](./Supplement_10_L3_AI_Agent_Building.md) + [§9.5 Voice Agent](./Supplement_10_L3_AI_Agent_Building.md)로 마이그레이션. 졸업 후 매월 매출 $20K+ 도달 시 적합. **MCP 표준**으로 Shopify·Klaviyo·GA4를 한 Agent에서 통합 제어 가능 ([§4-6-bis](./Supplement_10_L3_AI_Agent_Building.md)).
>
> 💡 **운영 결단 AI 매주 사용**: VIP 분류 외에 [Master Prompts §40 (이번 주 우선순위)](./02_Master_Prompts.md) + [§42 Repeat Refunder](./02_Master_Prompts.md) + [§29 Cart Abandonment](./02_Master_Prompts.md) 매주 월요일 09:00 루틴 권장.

---

## 💻 실습 파트 (0:50 - 2:10)

### Step 1. Make.com Router (분기점) 개념 실습 (40분)
1. 10주차에 만들었던 '주문 알림 시나리오'를 복제해서 엽니다.
2. 트리거(새 주문) 뒤에 **Router** 모듈을 하나 추가합니다. 길이 2개로 갈라집니다.
3. **위쪽 길 (VIP 경로)**: 필터 아이콘을 누르고 `Total Price > 100` (결제액 100달러 초과) 조건을 겁니다.
   * *액션*: VIP 전용 감사 이메일 발송 ("대량 구매에 감사드립니다. 평생 사용 가능한 30% 할인 코드를 드립니다.") 및 슬랙에 '🚨 VIP 등장!' 알림.
4. **아래쪽 길 (일반 고객 경로)**: 필터 아이콘을 누르고 `Total Price <= 100` 조건을 겁니다.
   * *액션*: 일반 감사 이메일 발송.
5. 가짜 주문을 10달러짜리, 150달러짜리 두 번 발생시켜 보고 각각 다른 길로 타는지 로그를 확인합니다.

---

### Step 2. 3-Agent 흐름 시연 — Watcher → Analyst → Communicator (40분)

Step 1의 단순 Router는 **금액**으로만 분기합니다. 실제 운영에서는 "환불 요청", "VIP 단골", "악성 클레임" 같은 **맥락**으로 분기해야 합니다. 여기서 AI 에이전트 3개가 협업하는 구조가 등장합니다.

```
┌──────────────┐   JSON   ┌──────────────┐   JSON   ┌──────────────┐
│ 1. Watcher   │ ───────▶ │ 2. Analyst   │ ───────▶ │ 3. Communicator│
│  (이벤트     │          │  (Claude API │          │  (Gmail / Slack│
│   감시)      │          │   분류)      │          │   분기 액션)   │
└──────────────┘          └──────────────┘          └──────────────┘
   Make.com                  HTTP 모듈                Make.com Router
```

#### Step 2-A. Agent 1: Watcher (모니터링)

**역할**: Shopify의 신규 주문 + 환불 요청을 5분 간격으로 폴링.

```
Make 시나리오:
- Trigger: Shopify > Watch Orders (Polling, 5분 간격)
- 추가 Trigger: Shopify > Watch Refund Requests (별도 시나리오 분리)
- 출력 변수:
  {
    "event_type": "order_created" | "refund_request",
    "order_id": "...",
    "customer_email": "...",
    "current_order_total_usd": 0,
    "lifetime_value_usd": 0,    // ← Shopify Customer API에서 추가 조회
    "message_body": "..."        // refund 요청 시에만 채워짐
  }
```

#### Step 2-B. Agent 2: Analyst (Claude API 분류)

**역할**: Watcher의 JSON을 받아 VIP / NORMAL / RISK로 라벨링.

```
Make 모듈:
- HTTP > Make a Request
- Method: POST
- URL: https://api.anthropic.com/v1/messages
- Headers:
    x-api-key: {{환경변수}}
    anthropic-version: 2023-06-01
    content-type: application/json
- Body (raw JSON):
{
  "model": "claude-haiku-4-5-20251001",
  "max_tokens": 300,
  "system": "Master Prompts §10 전체 텍스트 붙여넣기 (02_Master_Prompts.md)",
  "messages": [{
    "role": "user",
    "content": "{{Watcher의 JSON 출력}}"
  }]
}
```

응답 파싱:
- `Parse JSON` 모듈 추가 → Analyst의 응답에서 `classification`, `suggested_action`, `confidence`, `priority` 추출.

#### Step 2-C. Agent 3: Communicator (Gmail/Slack 분기)

**역할**: 분류 결과에 따라 다른 채널로 다른 메시지 발송.

```
Make Router 3분기:
─────────────────────────────────────────────────────────
[필터] classification = "VIP" AND confidence ≥ 0.85
   → Slack 모듈: #vip-alerts 채널에 "🌟 VIP 주문! ${{order_total}}" 멘션
   → Gmail 모듈: VIP 감사 이메일 + 30% 시크릿 코드

[필터] classification = "NORMAL" AND confidence ≥ 0.85
   → Gmail 모듈: 일반 감사 이메일 발송
   → (Slack 알림 없음)

[필터] classification = "RISK" OR confidence < 0.85
   → Slack 모듈: #cs-escalation 채널에 "⚠️ 강사 검토 필요: {{reasoning}}" 멘션
   → Gmail 모듈은 발송 X (사람이 검토 후 수동 답장)
─────────────────────────────────────────────────────────
```

#### Step 2-D. Agent 간 핸드오프 데이터 구조 (JSON 스키마)

각 에이전트가 다음 에이전트에게 넘기는 JSON 스키마를 명시해야 디버깅이 쉽습니다.

```json
// Watcher → Analyst
{
  "event_type": "order_created",
  "order_id": "9876543210",
  "customer_email": "jane@example.com",
  "lifetime_value_usd": 245.00,
  "current_order_total_usd": 89.00,
  "message_body": null
}

// Analyst → Communicator
{
  "classification": "VIP",
  "confidence": 0.92,
  "reasoning": "누적 LTV $245 — VIP 임계치($200) 초과",
  "suggested_action": "send_vip_thanks_email",
  "priority": "high"
}
```

### Step 3. Multi-Agent vs Single Agent 비교 — 언제 정당화되는가?

Multi-Agent는 **항상** 더 좋은 게 아닙니다. 아래 조건을 동시에 만족할 때만 도입하세요.

| 조건 | Single Agent로 충분 | Multi-Agent 필요 |
|---|---|---|
| 분기 수 | 1~2개 | **3개 이상** |
| 외부 도구 통합 | 1개 (Slack만) | **2개 이상** (Slack + Gmail + Sheets) |
| 의사결정 복잡도 | 단순 임계치 (`> 100`) | **맥락 이해 필요** (감정·이력) |
| 디버깅 비용 | 낮음 | 높음 — JSON 스키마 명세 필수 |

> **결론**: Step 1의 단순 금액 Router는 Single Agent로 충분합니다. Step 2의 환불·VIP·악성 클레임 동시 처리는 Multi-Agent가 정답입니다.

---

## ❓ 자주 묻는 질문 (FAQ)

**Q: 메일 보내는 것도 Mailchimp 같은 전문 앱이 낫지 않나요?**
> 나중에 고객 리스트가 만 명이 넘어가면 전문 이메일 마케팅 앱(Klaviyo 등)을 쓰는 게 맞습니다. 하지만 지금 당장 한 달에 앱 비용으로 수만 원씩 지출할 필요는 없습니다. MVP 단계에서는 Make.com과 지메일 연동만으로도 충분히 VIP 관리를 자동화할 수 있습니다. 본격적인 이메일 자동화는 [Supplement 01](./Supplement_01_Email_Automation_Playbook.md) 참조.

**Q: 3-Agent 시스템이 너무 복잡해 보이는데 꼭 필요한가요?**
> 아니요. 시작 단계에서는 Step 1의 **단순 Router 1개로 충분**합니다. 3-Agent는 월 매출 $5K 이상으로 운영이 안정화된 후 도입하는 다음 단계입니다.

---

## 📝 13주차 과제 안내
1. 다음 주(마지막 주)는 대망의 **최종 성과 발표회**입니다!
2. 1주차부터 13주차까지 본인이 겪은 시행착오, 만든 스토어 자랑, 가장 힘들었던 순간, 그리고 최종 마진액(0원이거나 마이너스여도 괜찮음)을 5장 내외의 PPT로 만들어 오세요. 
3. **가장 뼈아픈 실패를 솔직하게 공유해 주신 분께 특별상을 드리겠습니다.**
