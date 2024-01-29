create table "public"."album" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "track_list" uuid[] not null,
    "artist_id" uuid,
    "title" text not null,
    "description" text,
    "image" uuid not null default '9966fad2-bdbb-48a8-9ecc-1d4492e788bf'::uuid
);


alter table "public"."album" enable row level security;

create table "public"."artist" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "image" uuid not null default '4e417287-f829-4e2e-b461-550d5ba79533'::uuid,
    "name" text not null
);


alter table "public"."artist" enable row level security;

create table "public"."playlist" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "title" text not null,
    "description" text,
    "image" uuid default '9966fad2-bdbb-48a8-9ecc-1d4492e788bf'::uuid
);


alter table "public"."playlist" enable row level security;

create table "public"."track" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "artist_id" uuid not null,
    "image" uuid not null default 'be5fcc5d-2e08-49db-b19f-3523f526a4f6'::uuid,
    "title" text not null,
    "source" uuid not null
);


alter table "public"."track" enable row level security;

create table "public"."user_playlist" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone not null default now(),
    "user_id" uuid not null,
    "track_list" uuid[],
    "title" text not null,
    "description" text,
    "image" uuid not null default '9966fad2-bdbb-48a8-9ecc-1d4492e788bf'::uuid
);


alter table "public"."user_playlist" enable row level security;

CREATE UNIQUE INDEX album_pkey ON public.album USING btree (id);

CREATE UNIQUE INDEX artist_pkey ON public.artist USING btree (id);

CREATE UNIQUE INDEX playlist_pkey ON public.playlist USING btree (id);

CREATE UNIQUE INDEX track_pkey ON public.track USING btree (id);

CREATE UNIQUE INDEX user_playlist_pkey ON public.user_playlist USING btree (id);

alter table "public"."album" add constraint "album_pkey" PRIMARY KEY using index "album_pkey";

alter table "public"."artist" add constraint "artist_pkey" PRIMARY KEY using index "artist_pkey";

alter table "public"."playlist" add constraint "playlist_pkey" PRIMARY KEY using index "playlist_pkey";

alter table "public"."track" add constraint "track_pkey" PRIMARY KEY using index "track_pkey";

alter table "public"."user_playlist" add constraint "user_playlist_pkey" PRIMARY KEY using index "user_playlist_pkey";

alter table "public"."album" add constraint "album_artist_id_fkey" FOREIGN KEY (artist_id) REFERENCES artist(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."album" validate constraint "album_artist_id_fkey";

alter table "public"."album" add constraint "album_image_fkey" FOREIGN KEY (image) REFERENCES storage.objects(id) ON UPDATE CASCADE ON DELETE SET DEFAULT not valid;

alter table "public"."album" validate constraint "album_image_fkey";

alter table "public"."artist" add constraint "artist_image_fkey" FOREIGN KEY (image) REFERENCES storage.objects(id) ON UPDATE CASCADE ON DELETE SET DEFAULT not valid;

alter table "public"."artist" validate constraint "artist_image_fkey";

alter table "public"."playlist" add constraint "playlist_image_fkey" FOREIGN KEY (image) REFERENCES storage.objects(id) ON UPDATE CASCADE ON DELETE SET DEFAULT not valid;

alter table "public"."playlist" validate constraint "playlist_image_fkey";

alter table "public"."track" add constraint "track_artist_id_fkey" FOREIGN KEY (artist_id) REFERENCES artist(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."track" validate constraint "track_artist_id_fkey";

alter table "public"."track" add constraint "track_image_fkey" FOREIGN KEY (image) REFERENCES storage.objects(id) ON UPDATE CASCADE ON DELETE SET DEFAULT not valid;

alter table "public"."track" validate constraint "track_image_fkey";

alter table "public"."track" add constraint "track_source_fkey" FOREIGN KEY (source) REFERENCES storage.objects(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."track" validate constraint "track_source_fkey";

alter table "public"."user_playlist" add constraint "user_playlist_image_fkey" FOREIGN KEY (image) REFERENCES storage.objects(id) ON UPDATE CASCADE ON DELETE SET DEFAULT not valid;

alter table "public"."user_playlist" validate constraint "user_playlist_image_fkey";

alter table "public"."user_playlist" add constraint "user_playlist_user_id_fkey" FOREIGN KEY (user_id) REFERENCES next_auth.users(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."user_playlist" validate constraint "user_playlist_user_id_fkey";

grant delete on table "public"."album" to "anon";

grant insert on table "public"."album" to "anon";

grant references on table "public"."album" to "anon";

grant select on table "public"."album" to "anon";

grant trigger on table "public"."album" to "anon";

grant truncate on table "public"."album" to "anon";

grant update on table "public"."album" to "anon";

grant delete on table "public"."album" to "authenticated";

grant insert on table "public"."album" to "authenticated";

grant references on table "public"."album" to "authenticated";

grant select on table "public"."album" to "authenticated";

grant trigger on table "public"."album" to "authenticated";

grant truncate on table "public"."album" to "authenticated";

grant update on table "public"."album" to "authenticated";

grant delete on table "public"."album" to "service_role";

grant insert on table "public"."album" to "service_role";

grant references on table "public"."album" to "service_role";

grant select on table "public"."album" to "service_role";

grant trigger on table "public"."album" to "service_role";

grant truncate on table "public"."album" to "service_role";

grant update on table "public"."album" to "service_role";

grant delete on table "public"."artist" to "anon";

grant insert on table "public"."artist" to "anon";

grant references on table "public"."artist" to "anon";

grant select on table "public"."artist" to "anon";

grant trigger on table "public"."artist" to "anon";

grant truncate on table "public"."artist" to "anon";

grant update on table "public"."artist" to "anon";

grant delete on table "public"."artist" to "authenticated";

grant insert on table "public"."artist" to "authenticated";

grant references on table "public"."artist" to "authenticated";

grant select on table "public"."artist" to "authenticated";

grant trigger on table "public"."artist" to "authenticated";

grant truncate on table "public"."artist" to "authenticated";

grant update on table "public"."artist" to "authenticated";

grant delete on table "public"."artist" to "service_role";

grant insert on table "public"."artist" to "service_role";

grant references on table "public"."artist" to "service_role";

grant select on table "public"."artist" to "service_role";

grant trigger on table "public"."artist" to "service_role";

grant truncate on table "public"."artist" to "service_role";

grant update on table "public"."artist" to "service_role";

grant delete on table "public"."playlist" to "anon";

grant insert on table "public"."playlist" to "anon";

grant references on table "public"."playlist" to "anon";

grant select on table "public"."playlist" to "anon";

grant trigger on table "public"."playlist" to "anon";

grant truncate on table "public"."playlist" to "anon";

grant update on table "public"."playlist" to "anon";

grant delete on table "public"."playlist" to "authenticated";

grant insert on table "public"."playlist" to "authenticated";

grant references on table "public"."playlist" to "authenticated";

grant select on table "public"."playlist" to "authenticated";

grant trigger on table "public"."playlist" to "authenticated";

grant truncate on table "public"."playlist" to "authenticated";

grant update on table "public"."playlist" to "authenticated";

grant delete on table "public"."playlist" to "service_role";

grant insert on table "public"."playlist" to "service_role";

grant references on table "public"."playlist" to "service_role";

grant select on table "public"."playlist" to "service_role";

grant trigger on table "public"."playlist" to "service_role";

grant truncate on table "public"."playlist" to "service_role";

grant update on table "public"."playlist" to "service_role";

grant delete on table "public"."track" to "anon";

grant insert on table "public"."track" to "anon";

grant references on table "public"."track" to "anon";

grant select on table "public"."track" to "anon";

grant trigger on table "public"."track" to "anon";

grant truncate on table "public"."track" to "anon";

grant update on table "public"."track" to "anon";

grant delete on table "public"."track" to "authenticated";

grant insert on table "public"."track" to "authenticated";

grant references on table "public"."track" to "authenticated";

grant select on table "public"."track" to "authenticated";

grant trigger on table "public"."track" to "authenticated";

grant truncate on table "public"."track" to "authenticated";

grant update on table "public"."track" to "authenticated";

grant delete on table "public"."track" to "service_role";

grant insert on table "public"."track" to "service_role";

grant references on table "public"."track" to "service_role";

grant select on table "public"."track" to "service_role";

grant trigger on table "public"."track" to "service_role";

grant truncate on table "public"."track" to "service_role";

grant update on table "public"."track" to "service_role";

grant delete on table "public"."user_playlist" to "anon";

grant insert on table "public"."user_playlist" to "anon";

grant references on table "public"."user_playlist" to "anon";

grant select on table "public"."user_playlist" to "anon";

grant trigger on table "public"."user_playlist" to "anon";

grant truncate on table "public"."user_playlist" to "anon";

grant update on table "public"."user_playlist" to "anon";

grant delete on table "public"."user_playlist" to "authenticated";

grant insert on table "public"."user_playlist" to "authenticated";

grant references on table "public"."user_playlist" to "authenticated";

grant select on table "public"."user_playlist" to "authenticated";

grant trigger on table "public"."user_playlist" to "authenticated";

grant truncate on table "public"."user_playlist" to "authenticated";

grant update on table "public"."user_playlist" to "authenticated";

grant delete on table "public"."user_playlist" to "service_role";

grant insert on table "public"."user_playlist" to "service_role";

grant references on table "public"."user_playlist" to "service_role";

grant select on table "public"."user_playlist" to "service_role";

grant trigger on table "public"."user_playlist" to "service_role";

grant truncate on table "public"."user_playlist" to "service_role";

grant update on table "public"."user_playlist" to "service_role";


