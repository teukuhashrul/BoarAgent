DROP TABLE IF EXISTS "orders";
CREATE TABLE "orders" (
    "idUser" integer not null ,
    "idOffer" integer not null ,
    "origin" text not null,
    "destination" text not null,
     "departure" text not null,
     "arrival" text not null,
      "created_at" timestamp not null,
     "updated_at" timestamp not null
);
