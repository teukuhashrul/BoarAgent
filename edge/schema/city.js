const {db} = require('../db');

const typeDefs=`
  type city{
    id:Int
    name:String
    code:String
    tours:Int
    tour:[tour]
  }
  extend type Query{
    getCities:[city]
  }
  extend type Mutation{
    getFavCities:[city]
  }
`;

const resolvers = {
  Query:{
    getCities:()=>{
      return db.any("select * from city order by tours desc")
        .then(res => res);
    }
  },
  Mutation:{
    getFavCities:()=>{
      let today = new Date();
      //tahun baru , lebaran , natal
      let bulanBesar = [1,4,12];
      let now = today.getMonth();
      let min = 10000;


      return db.any("select destination, departure from orders   ")
        .then(res => {
          let  date = [];
           res.forEach(item =>{
              let month = {"date":parseInt(item.departure.split("T")[0].split('-')[1]),"dest":item.destination};
              date.push(month);
          });
           console.log(res);
           let intersect =date.filter(value => bulanBesar.includes(value));
           intersect.sort();
           intersect.forEach(item =>{
             let selisih = item - now;
             if(selisih>0){

             }
           })

        });
    }
  }
};

module.exports={
  typeDefs,resolvers
}