DROP TABLE IF EXISTS "users";
CREATE  EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "users" (
    "id" serial primary key,
    "name" text not null,
    "email" text not null,
    "phone" text not null default '0',
    "password" text not null,
    "created_at" timestamp default now(),
	"updated_at" timestamp default now()
);

CREATE UNIQUE INDEX "user_email_idx" ON "users" ("email");

