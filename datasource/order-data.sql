truncate table "orders";
insert into "orders"  ("idUser","idOffer","origin","destination", "departure", "arrival" , "created_at" , "updated_at")
values 
  (1,1,'CGK','KNO', '2018-12-22T11:40:00+07:00', '2018-12-23T10:40:00+07:00' , '2018-12-10 22:38:49.777814' , '2018-12-10 22:38:49.777814'),
  (10,2,'KNO','CGK', '2018-10-17T11:40:00+07:00', '2018-12-20T02:40:00+07:00' , '2018-12-10 10:38:12.598814' , '2018-12-10 10:33:12.98719'),
  (3,12,'BTJ','KNO', '2018-05-20T11:40:00+07:00', '2018-05-23T10:40:00+07:00' , '2018-12-11 16:38:49.608814' , '2018-12-11 17:38:50.608814'),
  (4,7,'BTJ','KNO', '2019-01-11T13:40:00+07:00', '2019-01-13T10:40:00+07:00' , '2019-01-11 17:38:49.008814' , '2018-12-11 17:38:50.008814'),
  (5,11,'JOG','CGK', '2018-05-20T11:40:00+07:00', '2018-05-25T10:40:00+07:00' , '2018-12-11 17:00:49.398214' , '2018-12-11 17:00:50.398214'),
   (5,3,'BTJ','TNJ', '2018-07-15T11:40:00+07:00', '2018-07-27T15:22:00+07:00' , '2018-07-15 17:38:49.598814' , '2018-07-16 17:38:50.598814'),
	(7,10,'TNJ','CGK', '2018-02-20T11:40:00+07:00', '2018-02-23T10:40:00+07:00' , '2018-02-11 01:38:49.598814' , '2018-02-11 01:38:50.598814'),
	(9,8,'BTJ','KNO', '2018-05-20T11:40:00+07:00', '2018-05-23T10:40:00+07:00' , '2018-12-11 17:38:49.798814' , '2018-12-11 17:38:50.798814'),
	(4,13,'BTJ','KNO', '2018-11-09T11:40:00+07:00', '2018-05-10T11:40:00+07:00' , '2018-12-11 17:38:11.198814' , '2018-12-11 17:38:50.198814'),
	(3,12,'LOP','KNO', '2019-02-09T11:40:00+07:00', '2018-02-11T10:40:00+07:00' , '2018-02-14 17:38:49.598814' , '2018-02-14 17:38:50.598814');