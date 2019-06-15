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


      return db.any("select destination, created_at from orders   ")
        .then(res => {
          let  date = [];
          let now = new Date();
          var months = ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sept','Oct','Nov','Dec'];
           res.forEach(item =>{
             let datas = item.created_at+"";
             //ambil natal
             if(datas.split(" ")[1] == 'Dec' || datas.split(" ")[1] == 'Jan'  ){
               let month = {"date":datas.split(" ")[1],"dest":item.destination};
               date.push(month);
             }

          });
           console.log(date);


        });
    }
  }
};

module.exports={
  typeDefs,resolvers
}