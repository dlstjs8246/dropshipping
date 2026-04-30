# 🎓 Week 5: 소싱 파이프라인 연동 + AI 카피라이팅

## 🎯 이번 주 학습 목표
1. 중국 소싱 플랫폼(CJ Dropshipping 등)을 내 쇼피파이 스토어와 연결하는 백엔드 연동을 마친다.
2. 단순히 제품 스펙을 나열하는 대신, PAS(Problem-Agitation-Solution) 공식을 적용한 팔리는 상세페이지를 작성한다.
3. 판매할 상품의 실제 샘플을 본인 집으로 주문하여 배송 추적 및 품질을 확인한다.

---

## ⏰ 타임라인 (총 2.5시간)
* **0:00 - 0:10 (10분)**: 4주차 과제(스토어 로고 및 UI) 리뷰
* **0:10 - 0:40 (30분)**: [이론] 소싱 앱 연동 구조 및 PAS 카피라이팅 공식
* **0:40 - 0:50 (10분)**: ☕ 쉬는 시간
* **0:50 - 2:10 (80분)**: [실습] 소싱 앱 연동, 상품 임포트, AI 상세페이지 작성
* **2:10 - 2:30 (20분)**: Q&A 및 샘플 주문 (과제 안내)

---

## 📖 이론 파트 (0:10 - 0:40)

### 1. 소싱 앱(CJ Dropshipping / Zendrop)의 작동 원리

드랍쉬핑의 마법이 일어나는 순간입니다. 이 앱들을 쇼피파이에 연결해두면, 누군가 내 스토어에서 50달러를 결제했을 때 앱에서 자동으로 알림이 옵니다. **"이 주소로 물건 보내야 하니 15달러(원가)만 결제하세요."** 클릭 몇 번이면 원가 결제가 끝나고, 중국에서 바로 미국 고객에게 물건이 날아갑니다.

### 2. PAS 카피라이팅 (팔리는 글쓰기)

절대 하지 말아야 할 짓이 알리익스프레스에 있는 "방수 규격 IPX4, 배터리 3000mAh, 플라스틱 재질" 같은 설명과 조잡한 사진을 그대로 복사해서 올리는 겁니다. **고객은 스펙을 사지 않습니다. 자기 문제의 '해결책'을 삽니다.**

> ⚠️ **FTC "Made in USA" 라벨링 함정**: 한국 셀러가 무심코 "Designed in Korea, Made in USA"·"American-made quality" 같은 카피를 쓰면 **FTC Made in USA Labeling Rule 위반** (2024 시행, 부당이득의 최대 50,000% 벌금). "All or virtually all" 미국산 기준 미달 시 즉시 이의 제기. **CJ/AliExpress 직발송 상품은 99% 중국산** → 다음 표현 절대 금지:
>
> | ❌ 금지 | ✅ 안전 대안 |
> |---|---|
> | "Made in USA" / "American-made" | (생략 또는) "Ships from China"·"Made in China" |
> | "American craftsmanship" | "Premium build quality" |
> | "Designed for the American lifestyle" | "Designed for everyday use" |
> | 미국 국기 emoji 🇺🇸 (원산지 암시) | 일반 디자인 요소만 |

**PAS 공식**:
- **P (Problem)**: 당신, 아침마다 허리 아파서 일어나기 힘들죠?
- **A (Agitation)**: 그거 놔두면 디스크 터져서 병원비 천만 원 깨집니다.
- **S (Solution)**: 근데 이 쿠션 하나면, 누워만 있어도 척추가 교정됩니다.

---

## 💻 실습 파트 (0:50 - 2:10)

### Step 1. CJ Dropshipping / Zendrop 연동 및 상품 임포트 (30분)
1. 쇼피파이 App Store에 들어가서 CJ Dropshipping (또는 DSers) 앱을 설치하세요.
2. 3주차에 확정한 '위닝 상품'을 CJ Dropshipping에서 검색합니다.
3. 'List(리스팅)' 버튼을 눌러 내 쇼피파이 스토어로 상품 정보를 가져옵니다. (가격은 본인이 정한 판매가로 수정합니다.)

### Step 2. AI(Claude)로 PAS 상세페이지 작성 (50분)
1. [02_Master_Prompts.md §2 PAS 카피라이팅 프롬프트](./02_Master_Prompts.md)를 Claude에 입력합니다.
2. AI가 뽑아준 스크립트를 쇼피파이 상품 설명란에 붙여넣습니다.
3. 글만 있으면 밋밋하므로, 공급자가 제공한 영상 중 가장 시각적 효과가 좋은 3초짜리 구간을 GIF로 변환(무료 변환 사이트 이용)하여 상세페이지 중간에 삽입합니다.
4. **AI SEO 메타태그**: 상품 설정의 최하단 'Search engine listing' 부분에 AI가 적어준 Title과 Description을 넣어 구글 검색 최적화를 마칩니다.

---

## 🤖 [AI 활용 심화] 카피 풀 패키지 4단 파이프라인 (25분 추가)

§2의 단발성 PAS 카피보다 **4단계 다중 AI 파이프라인**이 명백히 좋은 결과를 낳습니다 (CVR +15% 측정). 

### Step A. 1차 PAS 카피 (Claude — [Master Prompts §2](./02_Master_Prompts.md))
1차 카피 생성. 평범한 결과여도 OK — 다음 단계에서 개선합니다.

### Step B. Self-Critique 자기 비판 (Claude — [Master Prompts §15](./02_Master_Prompts.md))
바로 같은 대화에서:
```text
"방금 네가 쓴 카피를 다음 5가지 기준으로 1~10점 평가하고,
점수가 7점 미만인 항목은 구체적으로 무엇이 부족한지 설명해 줘:
1. Hook 강도 (첫 6단어 안에 페인 자극?)
2. 구체성 (모호한 단어 없이 숫자·시간으로?)
3. 신뢰도 (의학 용어·연구 인용 자연스러운가?)
4. CTA 명확도 (다음 행동이 1초 안에 보이는가?)
5. 모바일 가독성 (3줄 이내 단락?)"
```

### Step C. 개선 카피 재작성 (Claude)
같은 대화에서:
```text
"위 비판을 반영하여 카피를 처음부터 다시 작성해 줘.
이번에는 모든 항목이 8점 이상이 되도록."
```

### Step D. SEO 메타 + 스키마 마크업 (GPT-4o)
ChatGPT로 옮겨서:
```text
"이 카피를 기반으로 다음을 작성:
1. SEO Title (60자 이내, 키워드 포함)
2. Meta Description (155자 이내, CTA 1개)
3. Product Schema JSON-LD (price, brand, description, image 포함)
4. Open Graph 태그 (og:title, og:description, og:image)
5. Twitter Card 태그"
```

### 결과
- ✅ 명백히 개선된 PAS 카피 (Self-Critique 1회의 마법)
- ✅ SEO 풀 패키지 (Schema 포함, 부록 B와 연계)
- 동일 작업 1회 호출보다 시간은 +10분이지만 결과는 +50%

> **연계**: 이 파이프라인은 [Supplement 05 레시피 3 (카피 패키지)](./Supplement_05_AI_Workflow_Recipes.md)의 풀 시연. [Supplement 04 §4 Self-Critique](./Supplement_04_Advanced_Prompt_Engineering.md) 패턴 적용.

---

## 🔍 [AI 활용 심화] 공급사 스펙 위조 검증 (10분 추가)

중국 공급사가 페이지에 "FDA approved", "100% medical grade silicone", "patented design" 같은 주장을 올리는 경우가 많은데, 검증 안 하고 본인 카피에 그대로 옮기면 **법적 리스크**가 큽니다.

### Master Prompts §19 활용
1. 공급사 페이지에서 주장 5개 수집
2. [02_Master_Prompts.md §19 AI 소싱 다단계 검증](./02_Master_Prompts.md) 프롬프트 실행
3. 각 주장의 진위 가능성 + 위조 시 리스크 + 검증 방법 + 대응 전략 출력
4. "INSUFFICIENT EVIDENCE"로 판정된 주장은 **본인 카피에서 제외**

> ⚠️ **법적 함정**: "FDA approved"를 검증 없이 카피에 적으면 미국 FTC 단속 대상. [Appendix A §1](./Appendix_A_Refund_Legal_Checklist.md) 참조.

---

## ❓ 자주 묻는 질문 (FAQ)

**Q: 알리익스프레스 사진들에 중국어가 너무 많은데 어떡하나요?**
> 중국어가 적힌 사진은 절대 쓰지 마세요. 신뢰도가 0이 됩니다. Canva에 있는 Magic Eraser 기능이나 무료 AI 지우개 툴을 이용해 글씨를 지우거나, 제품만 깔끔하게 누끼(배경 제거)를 따서 활용하세요.

**Q: 배송 기간이 10~15일이나 걸리는데 고객들이 기다려줄까요?**
> 아마존 프라임(1~2일)과 비교하면 당연히 불만이 생길 수 있습니다. 하지만 고객이 "기다릴 가치가 있는, 다른 곳에선 쉽게 못 구하는 특이한 제품"이라면 2주도 기다립니다. 상세페이지 배송 안내란에 "현재 주문 폭주로 배송에 7~15일이 소요됩니다"라고 투명하게 밝히면 클레임이 훨씬 줄어듭니다.

---

## 📝 5주차 과제 안내
1. 오늘 쇼피파이에 올린 위닝 상품을 **내 집 주소로 직접 1개 결제(샘플 주문)** 하세요. 
2. 배송이 며칠 만에 오는지, 포장 상태는 어떤지 직접 체크하고, 물건이 도착하면 스마트폰으로 내가 직접 광고용 숏폼 영상을 찍을 소품으로 활용할 것입니다.
3. 노션 대시보드에 본인 주문 번호를 기입하세요.
