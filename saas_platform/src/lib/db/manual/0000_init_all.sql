-- =============================================================================
-- 0000_init_all.sql — Single-file production initialization
--
-- Vercel 배포 환경에서는 `npm run db:generate / db:migrate`를 로컬 실행할
-- 필요 없습니다. 이 파일 하나를 Supabase SQL Editor에 붙여넣으면:
--   - 3개 enum 타입 생성
--   - 5개 테이블 생성
--   - RLS 활성화 + 16개 정책
--   - handle_new_user 트리거
-- 모두 한 번에 적용됩니다.
--
-- Idempotent: 두 번 실행해도 안전.
-- =============================================================================

-- 1. Enum types
do $$ begin
  create type org_role as enum ('owner', 'member');
exception when duplicate_object then null; end $$;

do $$ begin
  create type lab_module as enum ('margin', 'l1_triangulation', 'l2_builder', 'l3_agent');
exception when duplicate_object then null; end $$;

do $$ begin
  create type verdict as enum ('GO', 'HOLD', 'FAIL');
exception when duplicate_object then null; end $$;

-- 2. Tables
create table if not exists orgs (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  owner_id uuid not null,
  created_at timestamptz not null default now()
);

create table if not exists org_members (
  org_id uuid not null references orgs(id) on delete cascade,
  user_id uuid not null,
  role org_role not null default 'member',
  created_at timestamptz not null default now(),
  primary key (org_id, user_id)
);

create table if not exists user_keys (
  user_id uuid primary key,
  anthropic_key_encrypted text,
  perplexity_key_encrypted text,
  updated_at timestamptz not null default now()
);

create table if not exists progress (
  user_id uuid primary key,
  data jsonb not null default '{}',
  updated_at timestamptz not null default now()
);

create table if not exists lab_sessions (
  id uuid primary key default gen_random_uuid(),
  org_id uuid not null references orgs(id) on delete cascade,
  created_by uuid not null,
  module lab_module not null,
  title text,
  input jsonb not null,
  output jsonb not null,
  verdict verdict,
  created_at timestamptz not null default now()
);

-- 3. Enable RLS
alter table orgs enable row level security;
alter table org_members enable row level security;
alter table user_keys enable row level security;
alter table lab_sessions enable row level security;
alter table progress enable row level security;

-- 4. Helper function — current user's org IDs
create or replace function public.user_org_ids()
returns setof uuid
language sql
stable
security definer
set search_path = public
as $$
  select org_id from org_members where user_id = auth.uid()
$$;

-- 5. RLS policies (drop+recreate for idempotency)

-- orgs
drop policy if exists "orgs_select_members" on orgs;
create policy "orgs_select_members" on orgs
  for select using (id in (select user_org_ids()));

drop policy if exists "orgs_update_owner" on orgs;
create policy "orgs_update_owner" on orgs
  for update using (owner_id = auth.uid());

drop policy if exists "orgs_delete_owner" on orgs;
create policy "orgs_delete_owner" on orgs
  for delete using (owner_id = auth.uid());

-- org_members
drop policy if exists "org_members_select" on org_members;
create policy "org_members_select" on org_members
  for select using (org_id in (select user_org_ids()));

drop policy if exists "org_members_insert_owner" on org_members;
create policy "org_members_insert_owner" on org_members
  for insert with check (
    exists (select 1 from orgs where orgs.id = org_id and orgs.owner_id = auth.uid())
  );

-- user_keys (self-only)
drop policy if exists "user_keys_select_self" on user_keys;
create policy "user_keys_select_self" on user_keys
  for select using (user_id = auth.uid());

drop policy if exists "user_keys_insert_self" on user_keys;
create policy "user_keys_insert_self" on user_keys
  for insert with check (user_id = auth.uid());

drop policy if exists "user_keys_update_self" on user_keys;
create policy "user_keys_update_self" on user_keys
  for update using (user_id = auth.uid());

drop policy if exists "user_keys_delete_self" on user_keys;
create policy "user_keys_delete_self" on user_keys
  for delete using (user_id = auth.uid());

-- lab_sessions (org-scoped)
drop policy if exists "lab_sessions_select_org" on lab_sessions;
create policy "lab_sessions_select_org" on lab_sessions
  for select using (org_id in (select user_org_ids()));

drop policy if exists "lab_sessions_insert_org" on lab_sessions;
create policy "lab_sessions_insert_org" on lab_sessions
  for insert with check (
    org_id in (select user_org_ids()) and created_by = auth.uid()
  );

drop policy if exists "lab_sessions_delete_org" on lab_sessions;
create policy "lab_sessions_delete_org" on lab_sessions
  for delete using (
    org_id in (select user_org_ids()) and created_by = auth.uid()
  );

-- progress (self-only)
drop policy if exists "progress_select_self" on progress;
create policy "progress_select_self" on progress
  for select using (user_id = auth.uid());

drop policy if exists "progress_insert_self" on progress;
create policy "progress_insert_self" on progress
  for insert with check (user_id = auth.uid());

drop policy if exists "progress_update_self" on progress;
create policy "progress_update_self" on progress
  for update using (user_id = auth.uid());

drop policy if exists "progress_delete_self" on progress;
create policy "progress_delete_self" on progress
  for delete using (user_id = auth.uid());

-- 6. Trigger — auto-create personal org + membership on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  new_org_id uuid;
begin
  insert into orgs (name, owner_id)
  values (coalesce(new.email, 'My workspace') || '''s workspace', new.id)
  returning id into new_org_id;

  insert into org_members (org_id, user_id, role)
  values (new_org_id, new.id, 'owner');

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function public.handle_new_user();

-- 7. Verification queries (uncomment to test)
-- select tablename from pg_tables where schemaname = 'public' order by tablename;
-- select polname, polrelid::regclass from pg_policy where polrelid::regclass::text in ('orgs','org_members','user_keys','lab_sessions','progress');
-- select tgname from pg_trigger where tgrelid = 'auth.users'::regclass and not tgisinternal;
