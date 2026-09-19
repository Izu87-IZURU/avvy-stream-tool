create table if not exists public.gift_definitions (id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade, name text not null, coin numeric not null, emoji text not null default '🎁', target numeric not null default 10, sort_order integer not null default 0, created_at timestamptz not null default now());
create table if not exists public.gift_counts (user_id uuid not null references auth.users(id) on delete cascade, gift_id uuid not null references public.gift_definitions(id) on delete cascade, count numeric not null default 0, updated_at timestamptz not null default now(), primary key(user_id,gift_id));
create table if not exists public.endurance_item_counts (user_id uuid not null references auth.users(id) on delete cascade, category text not null, item_key text not null, count numeric not null default 0, updated_at timestamptz not null default now(), primary key(user_id,category,item_key));
alter table public.profiles add column if not exists background_color text not null default '#fff8f8';
alter table public.profiles add column if not exists accent_color text not null default '#e98f8f';
alter table public.profiles add column if not exists theme_mode text not null default 'light';
update public.profiles set accent_color='#e98f8f' where accent_color is null;
update public.profiles set theme_mode='light' where theme_mode is null;
alter table public.gift_definitions enable row level security; alter table public.gift_counts enable row level security; alter table public.endurance_item_counts enable row level security;
drop policy if exists gift_definitions_own on public.gift_definitions; create policy gift_definitions_own on public.gift_definitions for all using(auth.uid()=user_id) with check(auth.uid()=user_id);
drop policy if exists gift_counts_own on public.gift_counts; create policy gift_counts_own on public.gift_counts for all using(auth.uid()=user_id) with check(auth.uid()=user_id);
drop policy if exists item_counts_own on public.endurance_item_counts; create policy item_counts_own on public.endurance_item_counts for all using(auth.uid()=user_id) with check(auth.uid()=user_id);


-- Avvy配信補助ツール: 公式ギフト / イベントギフト / オリギフ
alter table public.gift_definitions add column if not exists source text not null default 'original';
alter table public.gift_definitions add column if not exists event_key text;
alter table public.gift_definitions add column if not exists group_name text;
alter table public.gift_definitions add column if not exists mascot text;
alter table public.gift_definitions add column if not exists variant text;
create index if not exists gift_definitions_user_source_idx on public.gift_definitions(user_id,source);
create table if not exists public.gift_event_settings (
  user_id uuid not null references auth.users(id) on delete cascade,
  event_key text not null,
  enabled boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key(user_id,event_key)
);
create table if not exists public.gift_event_gift_settings (
  user_id uuid not null references auth.users(id) on delete cascade,
  gift_id uuid not null references public.gift_definitions(id) on delete cascade,
  enabled boolean not null default true,
  updated_at timestamptz not null default now(),
  primary key(user_id,gift_id)
);
alter table public.gift_event_settings enable row level security;
alter table public.gift_event_gift_settings enable row level security;
drop policy if exists gift_event_settings_own on public.gift_event_settings;
create policy gift_event_settings_own on public.gift_event_settings for all using(auth.uid()=user_id) with check(auth.uid()=user_id);
drop policy if exists gift_event_gift_settings_own on public.gift_event_gift_settings;
create policy gift_event_gift_settings_own on public.gift_event_gift_settings for all using(auth.uid()=user_id) with check(auth.uid()=user_id);


-- ギフト耐久の目標個数（コイン区分ごとにユーザーが設定）
create table if not exists public.gift_targets (
  user_id uuid not null references auth.users(id) on delete cascade,
  source text not null default 'official',
  event_key text,
  coin numeric not null,
  target numeric not null default 50,
  updated_at timestamptz not null default now(),
  primary key(user_id,source,event_key,coin)
);
alter table public.gift_targets enable row level security;
drop policy if exists gift_targets_own on public.gift_targets;
create policy gift_targets_own on public.gift_targets for all using(auth.uid()=user_id) with check(auth.uid()=user_id);
