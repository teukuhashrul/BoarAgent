
DROP TABLE IF EXISTS "tour";
CREATE TABLE "tour"(
	"id" serial primary key,
	"place" text not null,
	idCity int not null
);

