-- =============================================================================
-- 0003_add_progress_table.sql
-- Self-Assessment Hub backing table.
-- Run after `drizzle-kit migrate` creates the structure (or paste manually).
-- =============================================================================

alter table progress enable row level security;

create policy "progress_select_self" on progress
  for select using (user_id = auth.uid());

create policy "progress_insert_self" on progress
  for insert with check (user_id = auth.uid());

create policy "progress_update_self" on progress
  for update using (user_id = auth.uid());

create policy "progress_delete_self" on progress
  for delete using (user_id = auth.uid());
