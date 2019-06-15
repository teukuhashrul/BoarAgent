DROP TABLE IF EXISTS "addreses";
CREATE  EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "users" (
    "id" serial primary key,
    "user_id" int ,
    "province" text ,
    "subdistrict" text ,
    "city" text,
    "postcode" text ,
    "addres" text ,
    "created_at" timestamp default now(),
	"updated_at" timestamp default now()
);
