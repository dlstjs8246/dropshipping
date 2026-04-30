# 📚 부록 B: 상품 페이지 SEO 체크리스트

> **목적**: Shopify 상품 페이지를 Google 검색 결과 상위에 노출시키는 온페이지 SEO 핵심 5가지를 정리합니다.
> **연계 주차**: Week 5 (카피라이팅) — 카피 작성 직후 1회독 권장

---

## 1. H1 / Title / Meta Description 길이 규칙

검색 엔진은 첫 60자만 본다. 길이를 어기면 잘립니다.

| 요소 | 길이 제한 | 위치 | 예시 (자세 교정기) |
|---|:--:|---|---|
| **H1** | 60자 이내 | 페이지 본문 최상단 | `Silicone Posture Corrector Neckband — Fix Your Neck in 15 Minutes a Day` |
| **`<title>` 태그** | 50~60자 | `<head>` (Shopify는 Page Title) | `Posture Corrector Neckband \| [BRAND]` |
| **Meta Description** | 150~160자 | `<head>` (Shopify는 Description) | `Reverse text neck in 15 min/day. Soft silicone, no stretching pain. Free US shipping. 30-day money-back guarantee.` |
| **URL Slug** | 3~5 단어 | Shopify Online Store > Products > Edit > URL handle | `posture-corrector-neckband` (NOT `product-12345`) |

> **꿀팁**: H1과 Title은 같지 않아야 합니다. Title은 검색결과용 (브랜드명 포함), H1은 페이지 안의 큰 제목.

---

## 2. 이미지 Alt 텍스트 자동화 프롬프트

Google Image Search + 시각 장애인 접근성을 위한 alt 텍스트.

```text
[Role]
You are an SEO image alt-text writer.

[Instruction]
Generate 1 alt text for each product image in 8-12 words.
Include the primary keyword and a descriptive context.

[Inputs]
- Product: [PRODUCT_NAME]
- Primary keyword: [KEYWORD] (e.g., "posture corrector")
- Image description: [what's in the image — e.g., "person wearing
  the neckband while typing at a desk"]

[Output Format]
- alt: "..."

[Examples]
- alt: "Silicone posture corrector worn by office worker at desk"
- alt: "Posture corrector neckband side view in white background"
- alt: "Before-after photo showing posture improvement with neckband"
```

> Shopify Admin → Products → Edit → Image → Alt text 필드에 1개씩 입력.

---

## 3. 스키마 마크업 (Product / Offer / Review)

검색 결과에 ⭐ 별점 + 가격이 노출되어 CTR이 30% 이상 상승합니다.

### Shopify에 자동 적용
대부분의 무료 Shopify 테마(`Dawn`, `Sense` 등)는 Product/Offer 스키마를 자동 출력합니다. 다음 단계로 검증:

```
1. https://search.google.com/test/rich-results 접속
2. 본인 상품 페이지 URL 입력 → "URL Test"
3. 결과에서 "Product" 항목이 ✓ 녹색이면 정상
4. "Review" 항목 ✗ 라면 — 리뷰 위젯 앱 추가 필수 (Loox, Judge.me)
```

### Review 스키마 추가 (Loox 무료 플랜)
```
Shopify Apps → Loox 검색 → Install
→ Loox Settings → Reviews → "Embed snippets" 활성화
→ Theme automatically updates
→ 다시 Rich Results Test 실행 → "Review" ✓ 확인
```

> ⚠️ **FTC Fake Reviews Rule (2024-10-21 시행, 2026 위반당 $53,088 — 인플레 조정 매년)**: 리뷰 위젯 설정 시 [Appendix A §6.3](./Appendix_A_Refund_Legal_Checklist.md) 안전 SOP 필독. "★4-5 자동 게시 / ★1-3 검수" 같은 부정 리뷰 억제 설정 금지. AI 생성 후기 절대 X. **모든 후기 자동 게시 + 24h 이내 사장 답글** 패턴 권장.

> 🤖 **Image SEO 자동 (월 1회)**: 모든 상품 이미지에 alt text·파일명을 페르소나·키워드 매칭 자동 생성. [Master Prompts §43 (Image SEO + Alt Text 자동)](./02_Master_Prompts.md). Shopify Bulk Editor 또는 Matrixify로 100개+ 일괄 적용. Google Image Search 노출 + Shopify SEO 점수 직접 영향.

---

## 4. 내부 링크 5규칙

Google은 사이트 내부 연결 구조를 통해 페이지의 중요도를 추론합니다.

| ☐ | 규칙 |
|:--:|---|
| ☐ | 모든 상품 페이지 → "Related Products" 섹션 (3~6개) |
| ☐ | 블로그 포스트 → 상품 페이지 본문 내 텍스트 링크 (앵커: 제품명) |
| ☐ | 푸터 → 인기 카테고리 5개 + 베스트셀러 3개 |
| ☐ | 홈페이지 → 메가 메뉴 (모든 카테고리 1클릭 도달) |
| ☐ | 404 페이지 → 인기 상품 4개 + 검색창 |

---

## 5. 무료 Shopify SEO 앱 추천 3종

| 앱 | 무료 한도 | 핵심 기능 |
|---|---|---|
| **SEO Manager** | 1주일 무료 후 $20/월 | Meta tags 일괄 편집, 깨진 링크 추적 |
| **TinyIMG** | 무료 (월 50장) | 이미지 자동 압축 + alt 자동 생성 |
| **Plug in SEO** | 무료 + $29.99/월 | SEO 점수 일일 리포트, 깨진 링크 알림 |

> **추천 조합**: TinyIMG (무료) + Plug in SEO 무료 버전 = $0/월로 70% 커버

---

## 6. Google Search Console 연동 5단계

```
1. search.google.com/search-console 접속 → "Add Property"
2. 도메인 입력 (예: yourstore.com)
3. 인증 방식 → "HTML tag" 선택 → 메타 태그 복사
4. Shopify Admin → Online Store → Themes → Edit Code
   → theme.liquid의 <head> 안에 메타 태그 붙여넣기 → Save
5. GSC로 돌아가 "Verify" → 1~3분 후 ✓ 확인
```

### 첫 30일 핵심 지표
- **Coverage**: 100% Indexed 목표 (Shopify는 보통 자동)
- **Performance**: 클릭률 (CTR) 추적 — 상위 10위 키워드 모니터링
- **Core Web Vitals**: 모든 "Good" 상태 유지 (Shopify 무료 테마는 보통 OK)

---

## 📌 출시 전 1회독 체크리스트

| ☐ | 항목 |
|:--:|---|
| ☐ | 모든 상품 페이지의 H1·Title·Meta Description이 §1 길이 규칙을 따르는가? |
| ☐ | URL handle이 영문 키워드 중심으로 설정되었는가? |
| ☐ | 모든 이미지에 alt 텍스트가 있는가? |
| ☐ | Rich Results Test에서 Product / Offer / Review 모두 ✓ 인가? |
| ☐ | 상품 페이지에 "Related Products" 섹션이 있는가? |
| ☐ | Google Search Console 연동이 완료되었는가? |
