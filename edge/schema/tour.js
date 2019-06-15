const {db} = require('../db');

const typeDefs =`
  type tour{
     place:String
  
  }
`;

const resolvers ={
  city:{
    tour:city=>{
      return db.any("select * from tour where idCity = $1 " , [city.id])
        .then(res => res);
    }
  }
};

module.exports ={
  resolvers,typeDefs
};
