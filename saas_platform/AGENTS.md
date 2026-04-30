<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Notable Next.js 16 changes affecting this project

- **`middleware.ts` → `proxy.ts`**: The middleware file convention is renamed.
  Function name is `proxy` (not `middleware`). See `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/proxy.md`.
- New error boundaries: `forbidden.md`, `unauthorized.md` (separate from `error.md`).
- Server Actions still use `'use server'` directive (no change).
- `cookies()` is async — `await cookies()` everywhere.
<!-- END:nextjs-agent-rules -->

---

## SaaS Architecture (Phase A)

### Stack
- **Framework**: Next.js 16.2.4 (App Router, Server Components default, Turbopack)
- **DB**: Supabase Postgres + Drizzle ORM (`src/lib/db/`)
- **Auth**: Supabase Auth (email magic link)
- **AI**: Anthropic SDK with BYOK (per-user encrypted keys via `src/lib/crypto/byok.ts`)
- **UI**: shadcn/ui-style primitives in `src/components/ui/` + Pretendard via CDN
- **State**: TanStack Query (server) + react-hook-form + Zod (forms)

### Multi-tenant from day 1
- All app tables have `org_id`. RLS policies in `src/lib/db/migrations/0001_rls_and_triggers.sql`.
- `auth.users` insert triggers `handle_new_user()` → creates personal `orgs` + `org_members` row.
- Read-helpers: `src/lib/auth/session.ts` (`requireSessionUser`, `requireCurrentOrgId`).

### BYOK key flow
1. Onboarding `/onboarding/2` collects Anthropic key.
2. Validated with 1-token call (`validateAnthropicKey`).
3. Encrypted with AES-256-GCM (`src/lib/crypto/byok.ts`) using `ENCRYPTION_KEY` env.
4. Stored in `user_keys.anthropicKeyEncrypted`.
5. Decrypted per-request in Server Actions via `getAnthropicForUser(userId)`.
6. Plaintext key never leaves the server's request memory.

### Setup
See [SETUP.md](./SETUP.md) for end-to-end environment provisioning.

### Module map (Phase A — current)
| Module | Route | Server Action | Sources from course |
|---|---|---|---|
| Margin Shield | `/margin` | `src/app/margin/actions.ts` | W2 Kill Criteria + W3 Landed Cost + Master Prompts §1·§18 |
| L1 Triangulation | `/lab/l1` | `src/app/lab/l1/actions.ts` | Supplement 08 §6.2 |
| L2 Assistant Builder | `/lab/l2` | `src/app/lab/l2/actions.ts` | Supplement 09 §3·§7~§9 |
| L3 Agent Sandbox | `/lab/l3` | `src/app/lab/l3/actions.ts` | Supplement 10 §3 (Order Decision Agent) |
| Sessions | `/sessions` | (read-only) | All modules' output JSONB search/filter |
| Progress Hub | `/progress` | `src/app/progress/actions.ts` | Supplement 11 (Pre-flight + 14 Weekly + L1/L2/L3) |

### Phase 2/3 roadmap (curriculum promised, not yet implemented)

**Curriculum 14 commits expanded the lecture material (Master Prompts 11종 → 47종, new compliance/AI/operational frameworks). The following promised features are NOT yet in SaaS — they exist as Master Prompts the student copies into Claude/ChatGPT directly:**

| Feature | Course ref | Suggested SaaS surface |
|---|---|---|
| **§39 Master Prompt Router** (학생 막힘 → §1~§47 자동 추천) | Master Prompts §39 | New `/router` page with chat UI — highest priority |
| **§40 Weekly Priority** (월요일 09:00 KPI dump → 5 actions) | §40 + Sup11 §5.4 | `/dashboard` weekly insight card |
| **§38 Mental Coach** (Day 30 데스파이러·번아웃 진단) | §38 + Sup11 §5.5 | `/progress` mental check tab |
| **§42 Repeat Refunder Triage** (Tier 0~4 분류) | §42 + AppA §6 | `/sessions` filter or `/disputes` new module |
| **§47 IP & Photography Risk Pre-Check** (신규 SKU 등록 전) | §47 + AppF #11 | `/margin` pre-scan integration |
| **§35 Cohort LTV** (월별 코호트) | §35 + W12 | `/dashboard` LTV widget (requires Shopify connect) |
| **§29 Cart Abandonment 5 카테고리** | §29 + Sup01 §3 | Klaviyo connect + behavior triage |
| **Voice Agent CS** (ElevenLabs Convai) | Sup10 §9.5 | `/lab/voice` new module |
| **사업 모델 3가지 selector** (Low/Niche/High-Ticket) | W12 [심화] | Onboarding 3rd step or `/dashboard` model badge |
| **3PL Hybrid 라우팅** (베스트셀러 → US warehouse) | AppC §6 | `/inventory` with Shopify Locations integration |

**Phase 2 priority** (build order):
1. `/router` (§39) — single highest-leverage feature, ties everything together
2. `/dashboard` weekly priority + LTV widgets (§40 + §35) — visible value
3. `/disputes` Repeat Refunder (§42) — direct margin impact
4. `/lab/voice` (Build 4) — last, requires ElevenLabs integration

**Phase 3 priority**:
- `/inventory` 3PL Hybrid + Cohort + Bundle (§41)
- `/onboarding` Business Model selector
- Klaviyo / Shopify deeper integrations

### Data persistence
- All module outputs persist to `lab_sessions` (single table, JSONB `output`).
- Schema in `src/lib/db/schema.ts`. Use `db.insert(labSessions).values({...}).returning()`.

### Server Action conventions
- Top of file: `"use server";`
- Pattern: `useActionState` + `useFormStatus` for form pending state.
- Always `requireSessionUser()` first; `requireCurrentOrgId(user.id)` for tenant scope.
- Validation: Zod schema. Return `{ status: "error", message: string }` on validation fail.
- On success: `redirect()` to detail page (don't return data — keeps state simple).

### Anthropic patterns
- Use `MODELS.fast` (Haiku 4.5) for classification/validation/scans.
- Use `MODELS.smart` (Sonnet 4.6) for synthesis/generation.
- Always use `tool_use` to force structured output (avoid JSON-mode flakiness).
- Always set `cache_control: { type: "ephemeral" }` on the system prompt's last block.
- Server-enforce numeric/decision logic — don't trust LLM math.

### Curriculum reader (legacy)
`/curriculum` and `/curriculum/[slug]` are unchanged from pre-Phase A. They read `course_materials/*.md` from the filesystem at request time. Do not migrate to DB until Phase D.
