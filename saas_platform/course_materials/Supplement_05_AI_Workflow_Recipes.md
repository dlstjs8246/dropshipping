# 🔗 Supplement 05: AI 워크플로우 레시피 — 다중 AI 연결

> **목적**: 한 작업을 한 AI에 맡기지 말고, **여러 AI를 파이프라인으로 연결**하여 결과 품질을 극대화합니다. 10개 레시피 모두 드랍쉬핑 14주 흐름에 직접 적용 가능.
> **연계**: Master Prompts §13~25, Supplement 03 (도구 선택), Supplement 04 (고급 프롬프트)

---

## 워크플로우 사고법

> **단일 AI 한계**: Claude는 검색이 약하고, GPT는 긴 문맥이 약하고, Perplexity는 창작이 약합니다.
> **다중 AI 파이프라인**: 각 AI의 강점만 골라 출력을 다음 AI의 입력으로 던지면 → **품질 + 비용 + 속도 모두 최적화**.

---

## 🥬 레시피 1: 니치 발굴 4단 파이프라인 (W2)

```
[Perplexity]    → [Claude]      → [Claude]       → [Gemini]
실시간 트렌드     7대 필터 평가     스코어카드        시각화 차트
   │                  │                  │                  │
   ▼                  ▼                  ▼                  ▼
"2026년 4월        "이 5개 상품을    "통과 상품을      "이 데이터를
미국에서 떠오르는    7대 Kill         30점 만점         바차트로
DTC 카테고리       Criteria로        스코어카드로       시각화"
5개 + 출처"        평가"             환산"
```

**실행:**
1. Perplexity: "2026년 4월 미국 향 DTC 시장에서 검색량 30%+ 상승 카테고리 5개 + 각 출처 URL"
2. Perplexity 결과 → Claude에 붙여넣기 + Master Prompts §1 (Kill Criteria) 실행
3. PASS 상품 → Claude로 30점 스코어카드 환산
4. Claude의 점수 데이터 → Gemini로 차트 생성 ("Make a bar chart of the following data: ...")

**결과**: 90분 노가다 → 25분 완성

---

## 🎨 레시피 2: 브랜드 패키지 5단 파이프라인 (W4)

```
[Claude]      → [Claude]     → [Midjourney]   → [DALL-E]      → [Gemini]
브랜드 네임      슬로건         로고 5종         히어로 이미지     컬러 팔레트
ToT 5종 후보    톤 정의         시드 4개씩       사실적 렌더링     + 폰트 추천
```

**실행:**
1. Claude: §16 브랜드 네이밍 풀 시스템 → 1위 후보 선정
2. Claude: 그 브랜드명 + Few-shot 슬로건 5종 → 1개 선정
3. Midjourney: §17 로고 디자인 브리프 5종 → 각 4 시드 = 20장
4. DALL-E (ChatGPT Plus): 히어로 배너 이미지 (브랜드 컬러 적용)
5. Gemini: "이 로고 PNG를 보고 컬러 팔레트 5색 + Google Fonts 추천 2개"

**결과**: 디자이너 의뢰 ~$500 → AI 비용 ~$10

---

## 📝 레시피 3: 카피 전체 패키지 (W5)

```
[Claude]         → [Claude]       → [Claude]      → [GPT-4o]
PAS 첫 카피        Self-Critique     개선 카피        SEO 메타
                   (5축 평가)                         + Schema
```

**실행:**
1. Claude: §2 PAS 카피 프롬프트 → 첫 버전
2. Claude: §15 Self-Critique → 5축 평가 + 약점 식별
3. Claude: 위 비판 반영하여 처음부터 재작성
4. GPT-4o: "이 카피를 기반으로 SEO 메타 (Title 60자, Meta Desc 155자) + Product Schema JSON-LD 작성"

**결과**: 1개 카피만 쓰는 것보다 명백히 좋은 결과 (CVR 측정 시 평균 +15%)

---

## 🎬 레시피 4: 영상 광고 5종 30분 제작 (W7)

```
[Claude]         → [ElevenLabs]   → [DALL-E + Runway] → [CapCut]
스크립트 5종       음성 5개 (TTS)    이미지 + B-roll      합본 + 자막
```

**실행:**
1. Claude: §25 Voice/Video AI 시나리오 → 5종 15초 스크립트
2. ElevenLabs: 본인 Voice ID로 5개 모두 TTS 생성 (총 1.5분, 무료 한도 OK)
3. DALL-E: §5 5종 이미지 팩 / Runway: 각 영상의 B-roll 5초씩
4. CapCut: 음성 + 이미지/B-roll 결합 → 자동 자막 → 1080p Export

**결과**: 영상 5개 × 보통 2시간 → 30분으로 단축

---

## 📊 레시피 5: 크리에이터 100명 발굴 + 개인화 DM (W8)

```
[Apify TikTok Scraper] → [Claude]      → [Claude]       → [수동 발송]
100명 데이터 수집           §6 채널 분석   §7 개인화 DM      복사-붙여넣기
                          (JSON)         100개 생성
```

**실행:**
1. Apify (또는 수동 30명 스크롤): TikTok 검색 → 핸들·팔로워·최근 영상 3개 캡션 수집
2. Claude API로 §6 채널 분석 프롬프트 100회 호출 (Haiku 4.5, 약 $0.5)
3. 위 결과를 §7 풀 DM 프롬프트의 입력으로 → 100개 개인화 DM 생성
4. CRM 시트에 100개 저장 → 1시간당 15개씩 수동 복사 발송

**결과**: 보통 8시간 노가다 → 1시간 + 발송만 분산

---

## 📈 레시피 6: 광고 분석 → 액션 자동화 (W9, W12)

```
[CSV Export]    → [Claude]       → [Claude Artifacts] → [Slack Webhook]
Shopify+TikTok    §9 4주 분석       차트 시각화          매주 월요일 알림
```

**실행:**
1. 매주 일요일: Shopify Analytics + TikTok Ads Manager에서 CSV Export
2. Claude: §9 데이터 분석 풀 프롬프트 실행 → KEEP/SCALE/KILL 결단
3. Claude Artifacts: 같은 대화에서 "이 데이터를 라인 차트로" 요청 → 즉시 시각화
4. Make.com: 월요일 9시 자동 → Slack에 결단 + 차트 이미지 전송

**결과**: 매주 분석 노가다 → 일요일 30분 + 자동 알림

---

## 🤖 레시피 7: RAG CS 봇 + 휴먼 검수 (W11)

```
[고객 메일 수신] → [Claude API]    → [Slack Approval] → [Gmail 발송]
                  Projects (RAG)    인간 1초 승인      자동 발송
                  + 답변 초안
```

**실행:**
1. Make.com: Gmail 신규 메일 트리거
2. Claude API (Projects with 매뉴얼 PDF 업로드): 답변 초안 생성
3. Slack에 "이렇게 답할까요? [Approve] [Edit] [Reject]" 버튼 메시지
4. Approve 클릭 시 → Gmail로 자동 발송

**결과**: 100% 자동화의 위험 (할루시네이션) 제거 + CS 시간 90% 절감

---

## 🌐 레시피 8: 위기 대응 풀 파이프라인

```
[위기 발생]     → [Perplexity]   → [Claude]        → [GPT-4o]
Stripe Dispute    유사 사례 검색    §22 어필 작성     영문 교정 + 톤
```

**실행:**
1. Perplexity: "Stripe dispute response winning examples + Section 75" 등 유사 케이스 5개 + 출처
2. Claude: §22 위기 대응 프롬프트에 위 사례 + 본인 정보 입력 → 어필 메시지 초안
3. GPT-4o: "이 영문을 더 정중하게, 단 단호하게 교정. 200~300 words 유지"
4. 최종 검토 후 Stripe 대시보드에 제출

**결과**: 변호사 비용 ~$500 → AI 비용 ~$0 (위기 대응 30분 안에)

---

## 💡 레시피 9: 트렌드 모니터링 자동화 (졸업 후)

```
[매일 9시 Cron] → [Perplexity API] → [Claude]      → [Notion]
                 신규 트렌드 검색     필터링 + 요약    DB에 자동 저장
```

**실행:**
1. Make.com Cron: 매일 9시 트리거
2. Perplexity API: "Yesterday's trending DTC products on TikTok + Amazon"
3. Claude API: 결과를 본인 니치(자세 교정)와 관련 있는지 필터 + 1줄 요약
4. Notion API: 본인 "Trend Watch" DB에 행 추가

**결과**: 트렌드 놓침 0건 + 일일 5분 노션 확인만으로 시장 파악

---

## 🛒 레시피 10: 신상품 등록 풀 파이프라인 (졸업 후)

```
[CJ 상품 URL]  → [Claude]        → [Claude]      → [DALL-E]   → [Shopify API]
              §1 Kill Criteria    §2 PAS 카피     이미지 5장    자동 등록
```

**실행:**
1. Claude: 상품 URL 붙여넣기 → §1 Kill Criteria 평가
2. PASS 시 → §2 PAS 카피 + §17 SEO 메타 자동 생성
3. DALL-E: §5 5종 이미지 프롬프트 → 5장 생성
4. Shopify Admin API: 위 모든 데이터로 신상품 자동 등록 (Make.com)

**결과**: 신상품 등록 보통 90분 → 5분 클릭 → 자동 처리

---

## 📐 워크플로우 설계 원칙

### Do's ✅
1. **각 단계 출력 = 다음 단계 입력**으로 명확히 정의
2. **JSON 형식**으로 데이터 전달 (자동화 시 필수)
3. **Self-Critique를 중간에 1회** 삽입 (품질 +30%)
4. **저비용 모델 (Haiku/4o-mini)을 단순 분류에** 활용
5. **마지막 단계는 항상 인간 검수**

### Don'ts ❌
1. 한 AI에게 너무 많은 작업 (10단계 → 결과 품질 60%)
2. 텍스트 형식으로 데이터 전달 (자동화 시 파싱 실패)
3. 모든 단계에 Opus/GPT-4o (비용 폭증)
4. 100% 자동화 (할루시네이션 위험)
5. 단계마다 모델 변경 없이 모두 같은 모델 (강점 활용 X)

---

## 💰 워크플로우 자동화 시 비용 추정 (월 100건 기준)

| 레시피 | 단계 수 | 월 비용 추정 | 절감 효과 |
|---|:--:|:--:|---|
| 1. 니치 발굴 | 4 | $5 | 60시간/월 절감 |
| 2. 브랜드 패키지 | 5 | $30 (Midjourney) | 디자이너 비용 $500 |
| 3. 카피 패키지 | 4 | $3 | 카피라이터 비용 $200 |
| 4. 영상 5종 | 4 | $20 (Runway) | 편집자 비용 $300 |
| 5. 크리에이터 100명 DM | 4 | $5 | 외주 $200 |
| 6. 광고 분석 | 4 | $2 | 분석가 시간 8h/월 |
| 7. RAG CS 봇 | 4 | $10 (Claude API) | CS 인력 비용 |
| 8. 위기 대응 | 4 | $1 | 변호사 비용 $500 |
| 9. 트렌드 모니터링 | 4 | $15 (Perplexity API) | 시간 30h/월 |
| 10. 신상품 등록 | 4 | $5 | 60분/상품 → 5분 |
| **합계 (모두 운영)** | | **~$100/월** | **~$2,000+ 가치** |

> **결론**: 졸업 후 6개월 안에 위 10개 레시피 중 5개만 운영해도 1인 셀러가 외주·정직원 없이 월 $5K~10K 매출 운영 가능.
