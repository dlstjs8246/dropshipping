# 🎓 Week 7: 크리에이티브 공장 (AI 에셋 대량 생산)

## 🎯 이번 주 학습 목표
1. 틱톡(TikTok) 플랫폼의 '3초 훅(Hook)' 개념을 이해하고 도파민을 자극하는 콘텐츠 공식을 배운다.
2. ChatGPT Plus(DALL-E)와 미드저니를 활용해 고품질 썸네일과 제품 라이프스타일 이미지를 대량 생산한다.
3. CapCut 템플릿을 활용해 15초짜리 숏폼 영상을 10분 만에 찍어내는 프로세스를 구축한다.

---

## ⏰ 타임라인 (총 2.5시간)
* **0:00 - 0:10 (10분)**: 6주차 과제(라이브 스토어 피드백) 리뷰
* **0:10 - 0:40 (30분)**: [이론] 숏폼 콘텐츠의 생태계와 3초 훅의 비밀
* **0:40 - 0:50 (10분)**: ☕ 쉬는 시간
* **0:50 - 2:10 (80분)**: [실습] DALL-E 이미지 생성, CapCut 영상 컷편집 실습
* **2:10 - 2:30 (20분)**: Q&A 및 7주차 과제 안내

---

## 📖 이론 파트 (0:10 - 0:40)

### 1. 잘 만든 영상 vs 팔리는 영상

이쁘고 영화같이 잘 찍은 영상은 유튜브용입니다. 틱톡과 릴스에서는 화면이 거칠어도 "어? 저게 뭐야?" 하고 **손가락을 멈추게 만드는 '팔리는 영상'**이 필요합니다. 첫 3초 안에 가장 극단적인 Before/After를 보여주거나 시각적인 충격을 줘야 합니다.

### 2. 크리에이티브 공장의 3요소 (Hook - Body - Call To Action)

영상 길이는 무조건 15초 내외로 맞추세요.
- **0~3초**: 문제점 폭로 (거북목으로 고통받는 모습)
- **3~10초**: 제품 사용 (넥밴드를 착용하고 편안해짐)
- **10~15초**: 행동 유도 (지금 프로필 링크에서 50% 할인)

이 공식을 그대로 AI 편집기에 태웁니다.

### 3. ⚠️ AI 생성 콘텐츠 — 2026 법적 지뢰 5선

Sora 2 / Veo 3 / Imagen 4로 광고를 만들 때 **모르고 위반하면 즉시 벌금** 5건. 미국·EU 발송이 1건이라도 있으면 적용:

| 법규 | 시행 | 위반 사례 | 페널티 |
|---|---|---|---|
| **California AB 1836** | 2025-01-01 | 사망 셀럽 likeness 무단 AI 생성 ("Steve Jobs가 추천하는…") | **위반 1건당 $10K+** ([Perkins Coie](https://perkinscoie.com/insights/update/single-day-california-enacts-five-bills-tackling-digital-replicas-and-deepfakes)) |
| **California AB 2655** | 2025-01-01 | 선거기 직전 정치 deepfake | $1K~$5K + 민사 |
| **California AB 2839** | 2025-01-01 | 광고에서 실존 인물 likeness 무단 사용 (CEO 흉내) | 민사 + 광고 즉시 중단 명령 |
| **EU AI Act Article 50** | **2026-08-02 시행** | EU 거주자에게 AI 생성/조작 콘텐츠를 **AI라 표시 안 함** | 매출의 1% 또는 €750만 |
| **C2PA / SynthID 워터마크 제거** | 즉시 (Sora 2·Veo 3 약관) | OpenAI/Google 자동 삽입 워터마크 의도적 제거 | 계정 정지 + 민사 |

#### 안전 프롬프트 / 위험 프롬프트

| ❌ 위험 (즉시 벌금) | ✅ 안전 |
|---|---|
| "Inspired by [실존 셀럽 이름]" | "30대 미국인 모델 스타일" |
| "스티브 잡스가 우리 제품 추천" | "tech entrepreneur archetype" |
| 실존 회사 CEO 얼굴 합성 | 익명 fictional persona |
| Sora 2 영상에서 워터마크 잘라내기 | 워터마크 그대로 유지 + 자막으로 가림 |
| 정치인·국가 지도자 이미지 | 카테고리 자체 회피 |

#### EU 발송 시 의무 라벨 (2026.8~)

EU 거주자에게 AI 생성 광고를 노출 시 **명시적 표시 의무**:

```
영문: "This ad contains AI-generated/altered content."
영상 자막 마지막 1초 또는 캡션 첫 줄 권장.
```

> **본 강의 권장**: 미국 단일 시장 모델은 EU AI Act 영향 X. 단 California AB 시리즈는 **미국 발송이면 무조건 적용** — 실존 인물 likeness 절대 회피. 광고 1건이 매출 6개월 분 벌금 가능.

---

## 💻 실습 파트 (0:50 - 2:10)

### Step 1. AI 이미지 대량 생산 (30분)
> 💡 **유료 결제 안내**: 이번 주만 유일하게 ChatGPT Plus(유료) 결제를 권장합니다. DALL-E의 품질이 무료 툴보다 압도적이기 때문입니다.

#### Step 1-A. DALL-E / Midjourney 5종 프롬프트 팩 (필수 자료)

[02_Master_Prompts.md §5 DALL-E / Midjourney 광고 이미지 5종 프롬프트 팩](./02_Master_Prompts.md)을 그대로 복사해 사용합니다. 한 상품에 대해 5가지 분위기를 동시에 뽑습니다:

| # | 스타일 | 용도 | 화면비 |
|:--:|---|---|:--:|
| 1 | **Lifestyle Hero** | 메인 비주얼 | 9:16 |
| 2 | **Before / After Pain Hook** | 틱톡 1프레임 | 9:16 |
| 3 | **UGC Authentic** (가짜 UGC) | 광고 같지 않은 자연스러움 | 9:16 |
| 4 | **Studio Product Shot** | 상세페이지 단독 컷 | 1:1 |
| 5 | **Lifestyle in Use** | 사용 중 컷 (시즈널) | 4:5 |

5종 × 6 시드 = **30장**을 1시간 안에 받아 폴더에 저장하고, 마음에 드는 1장씩만 골라 다음 단계로 넘깁니다.

#### Step 1-B. 프롬프트 변수 치환표

5종 프롬프트의 `[PRODUCT]` `[PERSONA]` `[PAIN]` 자리에 본인 상품 정보를 넣어 일괄 치환합니다.

| 변수 | 예시 (자세 교정기) | 예시 (LED 무드등) |
|---|---|---|
| `[PRODUCT]` | silicone neckband posture corrector | smart RGB LED mood lamp |
| `[PERSONA]` | 25-year-old WFH worker | 22-year-old college student |
| `[PAIN]` | chronic neck pain from long hours | bland boring bedroom vibe |
| `[SCENE]` (선택) | minimalist home office | dark cozy bedroom |

### Step 2. CapCut 숏폼 영상 제작 (50분)

#### Step 2-A. 3초 훅 영상 콘티 템플릿

| 구간 | 길이 | 필수 요소 | 자세교정기 예시 |
|:--:|:--:|---|---|
| **Hook** | 0~3초 | 충격 비주얼 + 페인 텍스트 1줄 | "Your neck is screaming." + 굽은 등 클로즈업 |
| **Body** | 3~10초 | 제품 등장 + 사용 시연 + Before/After 컷 | 제품 착용 → 자세 교정 → 미소 |
| **CTA** | 10~15초 | 가격 + 한정 메시지 + 화면 하단 화살표 | "50% OFF — link in bio" + 깜빡이는 이모지 |

#### Step 2-B. CapCut 5단계 워크플로우 (정확한 메뉴 경로)

```
1. New Project
   → CapCut 앱 실행 → 우상단 [+ New Project]
   → 9:16 (TikTok/Reels) 선택

2. Import Media
   → 하단 [Add] → 갤러리에서 §1에서 만든 이미지 5장 + 공급처 영상 선택
   → 타임라인 드래그로 순서 배치

3. Add Voiceover (TTS)
   → 텍스트 도구 [T] → Claude로 작성한 15초 영어 대본 입력
   → 텍스트 클립 선택 → 우측 [Text to Speech]
   → "Sweet Vibes" (US Female) 또는 "Casual Guy" (US Male) 선택

4. Add Sound (트렌딩 BGM)
   → 하단 [Audio] → [Sounds] → "Trending" 탭
   → 🎵 아이콘 옆에 ⚠️ 마크 없는 사운드만 선택 (상업적 이용 가능)
   → 음량 30% (보이스오버를 가리지 않도록)

5. Add Captions (자동 자막)
   → 하단 [Text] → [Auto Captions]
   → English 선택 → 1~3초 안에 자동 생성
   → 폰트 크기 28pt, 흰색 + 검정 외곽선 (모바일 가독성)

Export 설정:
   → 우상단 [Export] → 1080p / 60fps / High quality
   → MP4로 저장 (TikTok 업로드 시 화질 보존)
```

#### Step 2-C. 저작권 안전 체크리스트

다음 4가지를 매번 확인하세요. 1번이라도 위반하면 계정 정지 위험.

| 체크 | 항목 |
|:--:|---|
| ☐ | CapCut 사운드 패널에 ⚠️ 또는 🚫 표시가 없는가? |
| ☐ | UGC 영상에 다른 브랜드 로고가 비치지 않는가? |
| ☐ | 미국 현지 크리에이터 영상을 무단 다운로드하지 않았는가? |
| ☐ | FTC 광고 표시 의무 — 캡션에 `#ad` 또는 `Sponsored` 명시? (제휴 영상 한정) |

---

## ❓ 자주 묻는 질문 (FAQ)

**Q: 남의 영상을 다운받아 편집해서 올리면 저작권 문제가 없나요?**
> 중국 공급자의 영상은 그들도 팔기 위해 만든 것이라 보통 제재하지 않습니다. 하지만 미국 현지 크리에이터의 영상을 불펌하면 스토어가 즉시 정지당합니다. 가장 좋은 것은 저번 주에 주문한 **샘플이 도착하면 본인이 직접 스마트폰으로 찍는 UGC**(User Generated Content) 영상입니다.

**Q: 틱톡 계정이 없는데 한국에서 올려도 미국에 노출되나요?**
> 매우 중요한 질문입니다. 틱톡은 유심(USIM)과 IP를 기반으로 노출 지역을 결정합니다. 한국 유심을 낀 폰으로 올리면 한국에만 뜹니다. 미국 타겟팅을 위한 공기계+VPN 세팅법이나 틱톡 비즈니스 계정 연동법은 다음 주 8주차 제휴 마케팅 시간에 완벽하게 세팅합니다.

---

## 📝 7주차 과제 안내
1. 오늘 배운 CapCut 편집 기술을 활용해, 각기 다른 훅(Hook)을 가진 숏폼 영상 3개를 제작하세요.
2. 완성된 영상 1개를 구글 드라이브에 올려 노션 대시보드에 링크를 제출하세요.
