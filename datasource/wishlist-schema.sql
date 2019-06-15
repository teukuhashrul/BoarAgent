DROP TABLE IF EXISTS "wishlist";
CREATE TABLE "wishlist"(
	"idUser" int not null,
	"idOffer" int not null,
	"origin" text not null,
	"destination" text not null,
	"departure" text not null,
	"arrival" text not null,
	"price" text not null
);



