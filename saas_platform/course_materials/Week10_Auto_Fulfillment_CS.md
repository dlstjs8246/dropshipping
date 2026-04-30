# 🎓 Week 10: 운영 자동화 1단계 (Make.com 발주/CS 자동화)

## 🎯 이번 주 학습 목표
1. 노코드 툴인 Make.com의 기본 원리(Trigger와 Action)를 이해한다.
2. 수동으로 하던 쇼피파이 주문 알림 및 공급처 발주 지시를 100% 자동화한다.
3. 배송 완료 고객에게 자동으로 리뷰를 요청하는 마케팅 플로우를 구축한다.

---

## ⏰ 타임라인 (총 2.5시간)
* **0:00 - 0:10 (10분)**: 9주차 과제(광고 세팅 및 오가닉 트래픽) 리뷰
* **0:10 - 0:30 (20분)**: [이론] 노코드(Make.com)와 API의 원리 이해
* **0:30 - 0:40 (10분)**: ☕ 쉬는 시간
* **0:40 - 2:10 (90분)**: [실습] Blueprint 임포트, 주문 알림 슬랙 봇, 자동 리뷰 이메일 봇
* **2:10 - 2:30 (20분)**: Q&A 및 10주차 과제 안내

---

## 📖 이론 파트 (0:10 - 0:30)

### 1. 잘 때도 돌아가는 기계 만들기 (API의 마법)

이제 매출이 하루에 1개, 2개 나기 시작할 겁니다. 그런데 매일 아침 쇼피파이를 켜고, 고객 주소를 복사해서, 알리익스프레스에 붙여넣고 결제하고 있으면 본인은 사장님이 아니라 **시급 만 원짜리 알바생**이 된 겁니다. 오늘은 Make.com이라는 노코드 툴로 이 단순 반복 노동을 기계에게 넘깁니다.

### 2. Trigger(방아쇠)와 Action(행동)

자동화는 딱 두 개만 기억하세요.
- **Trigger**: 언제 작동할 것인가?
- **Action**: 무슨 일을 할 것인가?

> 💡 **Make.com 외 진화 경로 (졸업 후)**: Make.com 시나리오가 30+ 모듈로 비대해지면 [Supplement 10 §4-7 (Claude Agent SDK)](./Supplement_10_L3_AI_Agent_Building.md) 또는 [§4-6-bis (MCP 표준 프로토콜)](./Supplement_10_L3_AI_Agent_Building.md)로 마이그레이션. Cursor 3로 직접 코드 작성 시 [Week 6](./Week06_Cursor_Coding_Optimization.md) Composer 2 + Agents Window 활용.

예: "쇼피파이에 새 주문이 들어오면(Trigger), 내 슬랙으로 알림을 보내라(Action)."

---

## 💻 실습 파트 (0:40 - 2:10)

> 💡 **핵심 팁**: Make 모듈을 처음부터 직접 연결하면 에러가 자주 납니다. 강사가 제공하는 [04_Make_Automation_Guide.md](./04_Make_Automation_Guide.md)의 **사전 제작된 Blueprint(.json) 파일**을 'Import' 기능으로 불러오세요.

### Step 1. 신규 주문 슬랙 알림 봇 (30분)
1. Make.com 가입 후 새 시나리오를 만들고 강사가 제공하는 JSON 파일을 Import 합니다.
2. **연결 (Connection)**: 쇼피파이 모듈을 클릭하고 본인의 스토어 계정 권한을 승인합니다.
3. 슬랙(또는 지메일) 모듈을 클릭해 알림을 받을 채널을 연결합니다.
4. 하단의 'Run Once'를 누른 뒤 쇼피파이에서 가짜 주문을 하나 넣고 슬랙으로 주문 데이터(상품명, 주소)가 날아오는지 테스트합니다.

### Step 2. 자동 리뷰 요청 이메일 세팅 (60분)
1. 두 번째 Blueprint를 Import 합니다. (트리거: 주문 상태가 '배송 완료'로 변경됨)
2. `Sleep` 모듈을 확인합니다. 배송되자마자 리뷰 써달라고 하면 고객이 싫어하므로 **3일 대기(딜레이)**를 줍니다.
3. `Gmail` 모듈을 클릭하고 이메일 템플릿을 수정합니다.
   > 예: "안녕! 물건은 잘 받았어? 사진 리뷰를 남겨주면 다음 구매 때 쓸 20% 할인 쿠폰을 바로 쏴줄게!"
4. 시나리오를 'ON'으로 켜서 상시 가동 상태로 만듭니다.

---

## 🤖 [AI 활용 심화] Make.com + Claude API 직접 호출 (30분 추가)

Make.com 만으로는 단순 If/Then 분기까지만 가능합니다. **HTTP 모듈로 Claude API를 직접 호출**하면 같은 Make 시나리오 안에서 진짜 AI 의사결정이 가능해집니다.

### Step A. Anthropic API 키 발급
1. console.anthropic.com → Sign In
2. API Keys → Create Key → 복사 (sk-ant-... 로 시작)
3. Make.com → Connections → "Add" → Custom 형식으로 저장 (보안)

### Step B. Make HTTP 모듈로 Claude 호출

```text
HTTP > "Make a Request" 모듈 추가:

URL: https://api.anthropic.com/v1/messages
Method: POST
Headers:
  x-api-key: {{환경변수 또는 Connection}}
  anthropic-version: 2023-06-01
  content-type: application/json

Body type: Raw
Content type: JSON
Request content:
{
  "model": "claude-haiku-4-5-20251001",
  "max_tokens": 500,
  "system": "너는 e커머스 분류기야. 들어온 이벤트를 VIP/NORMAL/RISK로 라벨링.",
  "messages": [{
    "role": "user",
    "content": "{{Shopify 주문 데이터 JSON}}"
  }]
}

Parse response: ✓ Yes
```

### Step C. AI 답변을 Router로 분기

응답에서 `content[0].text`를 파싱해 JSON으로 받으면:
```json
{
  "classification": "VIP",
  "confidence": 0.92,
  "suggested_action": "send_vip_thanks_email"
}
```

이 값을 Make Router의 분기 조건으로 사용 → **Master Prompts §10 Multi-Agent 분류**가 그대로 작동.

### Step D. Claude Haiku 가격 (자동화 시 비용)
- Input: $1 / 1M tokens
- Output: $5 / 1M tokens
- **분류 1건당 약 $0.0001** → 월 1만 건 처리에 $1

> **결론**: Make.com 단독은 "if 100달러 초과면 VIP" 같은 단순 규칙만 가능. Claude API + Make HTTP 모듈을 결합하면 **맥락을 이해하는 진짜 AI 자동화**가 됩니다 (Week 13 Multi-Agent의 사전 학습).

---

## 🎓 [AI 활용 심화] CS 자동 응답의 휴먼-인-루프 패턴

100% 자동화는 위험합니다. AI 답변 → Slack 승인 → Gmail 발송 패턴이 가장 안전.

### Make 시나리오 구조
```
1. Trigger: Gmail 신규 메일 수신
2. HTTP > Claude API 호출 (Master Prompts §4 시스템 프롬프트)
3. AI 답변 초안 생성
4. Slack 모듈 > Interactive Message 발송:
   "이 답변으로 발송할까요?
   [Approve ✓] [Edit ✏️] [Reject ✗]"
5. Webhook > Slack 버튼 응답 대기
6. IF Approve → Gmail 자동 발송
   IF Edit → Google Doc 생성하여 강사가 수정
   IF Reject → 강사에게 멘션 알림
```

### 효과
- AI 응답 속도 (5초)
- 인간 검수 안전성 (잘못된 답변 차단)
- CS 시간 80% 절감 (모두 직접 쓰지 않음)

> **연계**: Supplement 05 레시피 7 (RAG CS 봇 + 휴먼 검수)의 풀 시연.

---

## ❓ 자주 묻는 질문 (FAQ)

**Q: Make.com 쓰면 돈이 많이 드나요?**
> 무료 버전으로도 한 달에 1,000번의 작동(Operation)이 가능합니다. 초보 시절에는 이걸로 차고 넘칩니다. 주문량이 폭발해서 무료 한도를 넘기면 그때 월 $9짜리 유료 플랜을 쓰시면 됩니다.

**Q: 연동 중에 자꾸 401 Unauthorized 에러가 나요!**
> 비밀번호나 API 키 권한이 잘못되었을 때 나는 에러입니다. 연결(Connection)을 아예 지웠다가 다시 처음부터 스토어 로그인을 해보세요.

---

## 📝 10주차 과제 안내
1. 오늘 만든 2개의 시나리오(주문 알림, 리뷰 요청)를 모두 'ON' 상태로 활성화하세요.
2. 작동 중인 Make.com 대시보드 화면을 캡처해서 노션 과제란에 제출하세요.
