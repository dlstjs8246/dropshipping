# 🎬 Supplement 06: AI 에셋 생산 스택 (음성·영상·음악·이미지 통합)

> **목적**: 텍스트 외의 모든 콘텐츠 자산(이미지·영상·음성·음악)을 AI로 생산하는 풀 스택 가이드.
> **연계**: Master Prompts §5 (이미지), §25 (Voice/Video), Supplement 05 레시피 4

---

## 1. 콘텐츠 자산 6대 카테고리 + 추천 도구

| 카테고리 | 1순위 도구 | 2순위 | 무료 한도 | 유료 (월) |
|---|---|---|:--:|:--:|
| **이미지 (사실적)** | DALL-E 3 (ChatGPT Plus) | Imagen 3 (Gemini) | Gemini 무제한 | $20 |
| **이미지 (예술적)** | Midjourney | Ideogram | Ideogram 무료 | $10~ |
| **단편 영상 (B-roll)** | Runway Gen-3 | Pika 1.5 | 두 곳 무료 한도 | $15~ |
| **AI 아바타 (얼굴 영상)** | HeyGen | D-ID | HeyGen 1분/월 | $30~ |
| **음성 (TTS)** | ElevenLabs | OpenAI TTS | EL 10분/월 | $5~ |
| **음악 (BGM)** | Suno AI | Udio | Suno 50곡/일 | $10~ |

**총 무료 스택**: 월 $0로 영상 30개, 이미지 100장, 음성 10분, 음악 무제한 가능
**유료 풀 스택**: 월 ~$60로 무제한급 운영 가능

---

## 2. 이미지 생성 — 도구별 전략

### DALL-E 3 (ChatGPT Plus 통합)
- **강점**: 텍스트 처리 우수, 자연어로 수정 (in-paint)
- **약점**: 사람 얼굴 일관성 약함, 시드 4개씩만
- **드랍쉬핑 적용**:
  - 상세페이지 라이프스타일 컷
  - 광고 1번 컷 (Lifestyle Hero)
  - 인포그래픽 (텍스트 포함)

```text
[DALL-E 사용 팁]
1. ChatGPT 대화 안에서 "Make 4 variations" 반복 가능
2. "More minimalist", "Warmer lighting" 등 자연어 수정
3. 한 번에 1024×1024 / 1024×1792 / 1792×1024 선택
4. 생성된 이미지 우클릭 → "Edit" → in-paint 수정 가능
```

### Midjourney v6.1 (전용 디스코드)
- **강점**: 예술성·디테일·시드 일관성 압도적
- **약점**: 디스코드 UI, 텍스트 처리 약함
- **드랍쉬핑 적용**:
  - 브랜드 로고 5종
  - 광고 2~5번 컷 (UGC, Studio, In-Use)
  - 패키지 디자인 컨셉

```text
[Midjourney 핵심 파라미터]
--ar 9:16    : 틱톡 세로 영상용
--ar 1:1     : 로고·아이콘
--ar 4:5     : 인스타그램 피드
--v 6.1      : 최신 버전 (사실성)
--niji 6     : 애니메이션·일러스트 스타일
--s 50       : 스타일라이즈 약하게 (사실적 결과)
--seed [N]   : 같은 시드로 일관성 유지
--cref [URL] : 캐릭터 일관성 (모델 얼굴 고정)
```

### Imagen 3 (Gemini, 무료)
- **강점**: 무제한 무료, 영문 텍스트 우수
- **약점**: 미세 디테일 약함
- **드랍쉬핑 적용**:
  - 영웅 배너 (히어로 섹션)
  - 블로그 썸네일
  - 소셜 포스트 이미지

```text
[Gemini Imagen 사용]
1. gemini.google.com 접속
2. "Create an image of ..." 입력
3. 1회 4장 생성, 무제한 반복 가능
4. 한국어 프롬프트도 가능 (단, 영문이 더 정확)
```

---

## 3. 영상 생성 — Runway vs Pika

### Runway Gen-3 ($15/월)
- **강점**: 영화적 모션, 물리 정확도, 10초 영상
- **약점**: 처리 시간 5~10분/영상
- **추천 용도**: 광고용 B-roll, 시네마틱 컷

```text
[Runway 프롬프트 패턴]
"Cinematic close-up of [SUBJECT] in [SCENE], [CAMERA MOVEMENT],
[LIGHTING], shot on Sony A7IV 50mm, shallow depth of field,
4K, 24fps"

예시:
"Cinematic close-up of hands using a silicone neckband
at a cozy modern desk, slow camera push-in, warm tungsten
lighting, shot on Sony A7IV 50mm, shallow depth of field,
4K, 24fps, 5 second duration"
```

### Pika 1.5 ($10/월)
- **강점**: 빠른 생성 (2분/영상), 만화·일러스트 스타일 우수
- **약점**: 사실적 표현 약함
- **추천 용도**: 빠른 프로토타입, 일러스트 영상, 만화 스타일

```text
[Pika 프롬프트 패턴]
"Animation of [SUBJECT] doing [ACTION], [STYLE], [DURATION]"

예시:
"Animation of a posture corrector floating and rotating,
clean studio background, soft lighting, 3 second loop"
```

---

## 4. AI 아바타 — HeyGen 풀 워크플로우

본인 얼굴 영상이 부담스러울 때, AI 아바타로 대체.

```text
[HeyGen 5단계]
1. heygen.com → Sign Up
2. Avatars → Browse → "AI Avatar" 선택 (200+ 무료 아바타)
   또는 본인 얼굴 1분 영상 업로드 → Personal Avatar 생성
3. Voice → ElevenLabs Voice ID 연동 또는 HeyGen 내장 보이스
4. Script 입력 (한국어/영어 가능)
5. Generate → 5분 후 1080p 영상 다운로드

[비용 절약]
- 무료: 1분/월 (15초 영상 4개)
- $30/월 Creator: 15분/월 (영상 60개)
- 요금제 1단계 위가 가성비 최고
```

### HeyGen vs 본인 얼굴 영상 결정 트리
```
본인이 영상 출연 부담? 
  └─ YES → HeyGen Personal Avatar (본인 얼굴 학습)
  └─ NO  → 직접 촬영 (CapCut + 자동 자막)

영어 발음 자신 없음?
  └─ YES → HeyGen + ElevenLabs Voice Clone (영어)
  └─ NO  → 직접 녹음

브랜드 정체성에 얼굴이 중요?
  └─ YES → 본인 직접 (브랜드 자산)
  └─ NO  → AI 아바타로 OK
```

---

## 5. 음성 생성 — ElevenLabs 풀 가이드

### Voice Cloning 단계 (Personal Voice)
```
1. elevenlabs.io → Sign Up
2. Voices → "Voice Lab" → "Add Voice"
3. "Instant Voice Cloning" 선택
4. 본인 음성 1분 샘플 업로드 (조용한 환경 + 명료한 발음)
5. Voice ID 발급 (예: voice_id_abc123)
6. Generation에서 항상 이 Voice ID 사용 → 영상 톤 일관성

[권장 샘플]
- 깨끗한 마이크 (스마트폰 내장도 OK)
- 1분간 자연스러운 톤으로 책 한 페이지 낭독
- 영어 영상용 → 영어 1분 샘플
- 한국어 영상용 → 한국어 1분 샘플 (별도 Voice ID)
```

### 보이스 선택 가이드 (드랍쉬핑 광고용)

| 페르소나 | 추천 Voice (내장) | 톤 |
|---|---|---|
| 25-35 여성 (라이프스타일) | "Bella" / "Nicole" | 친근, 차분 |
| 25-40 남성 (테크/가젯) | "Sam" / "Antoni" | 활기, 신뢰감 |
| 40+ 전문가 (의료/웰니스) | "Adam" / "Rachel" | 권위, 진중 |
| 18-25 Gen Z | "Charlie" / "Dorothy" | 캐주얼, 빠른 톤 |

```text
[비용 계산]
무료: 10,000 chars/월 = 약 15분 음성 = 영상 60개 (15초 × 60)
Starter $5/월: 30,000 chars = 영상 200개
Creator $22/월: 100,000 chars = 영상 600개

→ 첫 3개월은 무료로 충분, 이후 Starter 권장
```

---

## 6. 음악 생성 — Suno AI

### 사용 패턴
```
1. suno.com → Sign In (Discord/Google)
2. "Create" 탭 → 프롬프트 입력
3. 무료 50곡/일 생성 가능

[프롬프트 예시 — 광고 BGM]
"Upbeat, modern lo-fi hip hop instrumental, no vocals,
[15 seconds], minimalist, suitable for tiktok ad,
[brand mood: calm, productive]"

[BGM 무료 옵션 비교]
- CapCut 무료 라이브러리: ⚠️ 일부만 상업적 OK
- Suno AI: ✓ 본인이 만든 음악 = 본인 저작권
- YouTube Audio Library: ✓ 무료 + 상업적 OK
- Epidemic Sound: ✓ 안전, $15/월
```

> **중요**: 틱톡 트렌딩 사운드는 ⚠️ 상업적 이용 불가 가능성. AI 생성 음악 또는 YouTube Audio Library가 안전.

---

## 7. 통합 워크플로우 — 영상 1개 30분 제작

```
[15초 광고 영상 1개]
├─ Claude (1분):    스크립트 작성 (Master Prompts §25)
├─ ElevenLabs (1분): TTS 생성 (15초 음성)
├─ DALL-E (3분):    히어로 이미지 1장 (시드 4개 중 1)
├─ Runway (10분):   B-roll 5초 1개
├─ Suno (1분):      BGM 15초 1개
└─ CapCut (15분):   조립 + 자동 자막 + Export

총: 31분 (대기 시간 포함)
```

### 5종 영상 동시 제작 (효율화)
```
Step 1 (5분): Claude로 5종 스크립트 + 5종 이미지 프롬프트 + 5종 영상 묘사
Step 2 (5분): ElevenLabs에서 5개 TTS 일괄 생성
Step 3 (15분): DALL-E + Runway 5개씩 동시 큐 (대기)
Step 4 (1분): Suno BGM 1개 (5종 공통)
Step 5 (60분): CapCut에서 5개 영상 조립

총: ~85분으로 5개 영상 완성 (영상당 평균 17분)
```

---

## 8. 저작권·라이선스 체크리스트

| ☐ | 항목 |
|:--:|---|
| ☐ | DALL-E·Midjourney·Imagen 생성물은 상업적 이용 OK (각 약관 확인) |
| ☐ | ElevenLabs 본인 Voice Clone은 본인 저작권 |
| ☐ | ElevenLabs 내장 Voice는 ElevenLabs 약관 확인 (Starter 이상은 상업적 OK) |
| ☐ | Suno AI 본인 생성 음악은 본인 저작권 |
| ☐ | Runway/Pika 생성 영상은 본인 저작권 |
| ☐ | HeyGen 본인 얼굴 학습 시 본인 동의 명확 |
| ☐ | 타인 음성·얼굴·이미지를 AI로 학습하면 ⚠️ 초상권/퍼블리시티권 위반 |
| ☐ | "Inspired by [실존 인플루언서]" 같은 프롬프트는 위험 |

---

## 9. 비용 최적화 — 월 $0 ~ $60 단계

### 월 $0 (시작 단계)
```
이미지: Imagen 3 (Gemini 무료 무제한)
영상: Pika 무료 한도
음성: ElevenLabs 무료 10분
음악: Suno 무료 50곡/일
편집: CapCut 무료
→ 영상 30개/월 가능
```

### 월 $20 (성장 단계)
```
+ ChatGPT Plus $20: DALL-E 3 + GPT-4o
→ 영상 60개/월, 이미지 무제한
```

### 월 $60 (스케일 단계)
```
ChatGPT Plus $20
+ ElevenLabs Starter $5
+ Runway Standard $15
+ Midjourney Basic $10
+ Suno Pro $10
→ 영상 100+개/월, 모든 자산 무제한
```

---

## 📌 영상 마케팅 1주일 챌린지 (W7 직후)

| Day | 챌린지 |
|:--:|---|
| Day 1 | DALL-E로 본인 상품 라이프스타일 이미지 5장 |
| Day 2 | Midjourney로 같은 상품 5종 다른 스타일 |
| Day 3 | ElevenLabs Voice Clone 본인 음성 등록 |
| Day 4 | Runway로 5초 B-roll 1개 |
| Day 5 | Claude로 영상 5종 스크립트 |
| Day 6 | CapCut으로 영상 1개 풀 조립 (15초) |
| Day 7 | 영상 5개 모두 완성 + 틱톡 업로드 |

> **결론**: 졸업 즈음에는 1인 셀러가 영상 100개/월 + 이미지 500장/월 자체 제작이 표준이 됩니다. AI 에셋 스택을 구축한 셀러와 안 구축한 셀러의 차이는 1년 후 매출 5~10배입니다.
