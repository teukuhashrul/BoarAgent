DROP TABLE IF EXISTS "city" ;
CREATE TABLE "city"(
	"id" serial primary key,
	"name" text not null,
	"code" text not null,
	"tours" integer not null default 0
);
