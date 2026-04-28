-- =============================================================================
-- 0002_add_l3_agent_module.sql
-- Add 'l3_agent' to the lab_module enum.
-- Run after the Phase B deploy. Postgres allows ALTER TYPE ADD VALUE without
-- locking; existing rows are unaffected.
-- =============================================================================

ALTER TYPE lab_module ADD VALUE IF NOT EXISTS 'l3_agent';
