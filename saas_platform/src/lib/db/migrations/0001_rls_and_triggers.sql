-- =============================================================================
-- 0001_rls_and_triggers.sql
-- Run this AFTER `drizzle-kit migrate` has created the table structure.
-- Apply via: psql $DATABASE_URL -f src/lib/db/migrations/0001_rls_and_triggers.sql
-- Or paste into Supabase SQL Editor.
-- =============================================================================

-- ---------------------------------------------------------------------------
-- 1. Enable Row Level Security on all multi-tenant tables.
-- ---------------------------------------------------------------------------
alter table orgs enable row level security;
alter table org_members enable row level security;
alter table user_keys enable row level security;
alter table lab_sessions enable row level security;

-- ---------------------------------------------------------------------------
-- 2. Helper function — current user's org IDs.
-- ---------------------------------------------------------------------------
create or replace function public.user_org_ids()
returns setof uuid
language sql
stable
security definer
set search_path = public
as $$
  select org_id from org_members where user_id = auth.uid()
$$;

-- ---------------------------------------------------------------------------
-- 3. RLS policies.
-- ---------------------------------------------------------------------------

-- orgs: members can SELECT; only owner can UPDATE/DELETE; INSERT happens via trigger.
create policy "orgs_select_members" on orgs
  for select using (id in (select user_org_ids()));

create policy "orgs_update_owner" on orgs
  for update using (owner_id = auth.uid());

create policy "orgs_delete_owner" on orgs
  for delete using (owner_id = auth.uid());

-- org_members: members can SELECT their org rows.
create policy "org_members_select" on org_members
  for select using (org_id in (select user_org_ids()));

create policy "org_members_insert_owner" on org_members
  for insert with check (
    exists (select 1 from orgs where orgs.id = org_id and orgs.owner_id = auth.uid())
  );

-- user_keys: only the owning user can read/write their own row.
create policy "user_keys_select_self" on user_keys
  for select using (user_id = auth.uid());

create policy "user_keys_insert_self" on user_keys
  for insert with check (user_id = auth.uid());

create policy "user_keys_update_self" on user_keys
  for update using (user_id = auth.uid());

create policy "user_keys_delete_self" on user_keys
  for delete using (user_id = auth.uid());

-- lab_sessions: scoped to org membership.
create policy "lab_sessions_select_org" on lab_sessions
  for select using (org_id in (select user_org_ids()));

create policy "lab_sessions_insert_org" on lab_sessions
  for insert with check (
    org_id in (select user_org_ids()) and created_by = auth.uid()
  );

create policy "lab_sessions_delete_org" on lab_sessions
  for delete using (
    org_id in (select user_org_ids()) and created_by = auth.uid()
  );

-- ---------------------------------------------------------------------------
-- 4. Trigger — on auth.users insert, create personal org + membership.
-- ---------------------------------------------------------------------------
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
