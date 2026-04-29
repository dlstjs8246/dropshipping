-- =============================================================================
-- 0001_backfill_orgs_for_existing_users.sql
--
-- 사용 시점:
--   - 0000_init_all.sql 적용 *전*에 가입한 사용자가 있을 때
--   - handle_new_user 트리거가 어떤 이유로 발동 못 했을 때
--   - "User has no org membership" 에러를 보고 있을 때
--
-- 효과:
--   1. handle_new_user 트리거 함수 + 트리거를 재설치 (idempotent)
--   2. auth.users 중 org_members에 없는 모든 사용자에게
--      개인 org + owner membership 자동 생성
--
-- 멱등 (idempotent) — 두 번 실행해도 안전.
-- =============================================================================

-- 1) 트리거 함수 + 트리거 재설치
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

-- 2) 기존 사용자 백필 — auth.users 중 org_members에 없는 사용자 찾아 자동 생성
do $$
declare
  u record;
  new_org_id uuid;
begin
  for u in
    select id, email from auth.users
    where id not in (select user_id from org_members)
  loop
    insert into orgs (name, owner_id)
    values (coalesce(u.email, 'My workspace') || '''s workspace', u.id)
    returning id into new_org_id;

    insert into org_members (org_id, user_id, role)
    values (new_org_id, u.id, 'owner');

    raise notice 'Backfilled org for user %', u.email;
  end loop;
end $$;

-- 3) 검증 쿼리
-- select count(*) from auth.users;
-- select count(*) from org_members;
-- (위 두 카운트가 같으면 OK)
