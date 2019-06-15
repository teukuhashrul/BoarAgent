truncate  table  "users";
insert  into "users" ("email" ,"password" ,"name") values
('jojo@jojo.com' , crypt('123123jojo', gen_salt('bf')),'jojo' ),
('hasrul@hasrul.com' , crypt('123123jojo', gen_salt('bf')),'hasrul' ),
('lara@lara.com' , crypt('123123jojo', gen_salt('bf')),'lara' );