# ⚙️ Make.com 노코드 자동화 블루프린트(Blueprint) 가이드

> **강사용 주의사항**: Week 10~11에서 노코드 자동화 시나리오를 밑바닥부터 짜게 하면 수강생의 90%가 포기합니다. 강사가 미리 아래 구조로 시나리오를 만들고, `.json` 형태의 Blueprint를 추출하여 수업 시간에 배포(Import)하도록 지도하세요.

---

## 1. 📦 주문 발주 알림 봇 (Week 10)
고객이 쇼피파이에서 상품을 결제하면, 소싱 담당자(본인)의 Slack 또는 이메일로 발주 요청 데이터가 자동으로 전송되는 시나리오.

### 아키텍처 흐름
1. **[Trigger] Shopify**: `Watch Orders` (새로운 주문이 들어왔을 때 작동)
   - *수강생 세팅*: 본인 쇼피파이 계정 연결 권한 승인
2. **[Action] Text Parser**: 주문 내역에서 상품명, 수량, 배송지 주소, 우편번호만 파싱
3. **[Action] Slack (또는 Gmail)**: `Create a Message`
   - *전송 메시지 양식*:
     ```text
     🚨 신규 주문 알림!
     - 상품명: {{1. line_items[].title}}
     - 수량: {{1. line_items[].quantity}}개
     - 배송지: {{1. shipping_address.address1}}, {{1. shipping_address.zip}}
     👉 지금 바로 CJ Dropshipping에서 발주를 진행하세요!
     ```

---

## 2. 📧 배송 완료 후 자동 리뷰 요청 (Week 10)
배송이 완료된 지 3일이 지난 고객에게 자동으로 사진 리뷰를 요청하여 스토어 신뢰도를 높이는 자동화.

### 아키텍처 흐름
1. **[Trigger] Shopify**: `Watch Fulfillments` (배송 상태가 'Delivered'로 변경될 때 작동)
2. **[Action] Tools**: `Sleep` (딜레이 모듈)
   - *설정*: 배송 완료 즉시 보내면 스팸 같으므로 3일(259200초) 대기 설정
3. **[Action] Gmail (또는 Shopify Email)**: `Send an Email`
   - *제목*: "How was your [상품명]?"
   - *내용*: "안녕하세요 {{고객이름}}님, 주문하신 상품은 잘 받으셨나요? 사용해 보신 소감을 사진과 함께 리뷰로 남겨주시면, 다음 결제 시 20% 할인 쿠폰을 드립니다!"

---

## 3. 🚨 경쟁사 가격 및 소싱가 변동 모니터링 봇 (Week 11)
알리익스프레스나 공급업체의 원가가 갑자기 오르거나 품절될 경우를 대비한 생존용 모니터링 시나리오.

### 아키텍처 흐름
1. **[Trigger] HTTP**: `Make a Request`
   - *설정*: 공급업체 상품 URL 주기적(매일 아침 9시) 스크래핑 (GET 요청)
2. **[Action] Text Parser (Regex)**: `Match Pattern`
   - *설정*: 상품 페이지 HTML에서 가격 태그(`<span class="price">...</span>`) 부분 숫자 추출
3. **[Router] 조건 분기**:
   - **경로 A**: 추출된 가격이 어제 기록된 내 시트의 원가보다 높을 경우
     - **[Action] Slack**: "⚠️ 경고! [상품명] 소싱가가 인상되었습니다. 당장 스토어 판매가를 올리거나 마진을 재계산하세요!"
   - **경로 B**: 'Out of Stock' 텍스트가 발견될 경우
     - **[Action] Shopify**: `Update a Product` (내 스토어 상품 상태를 임시 품절로 자동 변경)

> **🚀 SaaS 전환 포인트 (Week 14 연계)**
> "Make.com으로 이렇게 설정하는 과정, 복잡하고 귀찮죠? API 끊어지면 에러도 나고요. 그래서 제가 이 기능을 버튼 하나로 켤 수 있는 **SaaS(Auto-Pilot Agent)**를 만들었습니다. 졸업생들은 무료로 쓰세요!"
