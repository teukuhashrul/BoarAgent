const {db} = require('../db');
const typeDefs = `
  type wish{
    idUser:Int
    idOffer:Int
    origin:String
    destination:String
    departure:String
    arrival:String
    price:String
  }
  
  extend type  Mutation{
    insertWishlist(idUser:Int,idOffer:Int,origin:String,destination:String,arrival:String,departure:String):String
  }
  extend type Query{
      getWishlistbyId(idOffer:Int):wish
  }
`;
const resolvers ={
  Mutation:{
    insertWishlist:(_,{idUser,idOffer,origin,destination,departure,arrival,price})=>{
          return db.none("insert into wishlist  values ($1,$2,$3,$3,$5,$6)", [idUser,idOffer,origin,destination,departure,arrival,price])
        .then(() => "sukses")
        .catch((res) => "wtf");s
    }
  },
  Query:{
    getWishlistbyId:(_, {idOffer} )=>{

      return db.one('select * from "wishlist" where "idOffer" = $1' , [idOffer])
        .then(res => {
          console.log(res);
          return res;
        });
    }
  }
};
module.exports={
  typeDefs,resolvers
};