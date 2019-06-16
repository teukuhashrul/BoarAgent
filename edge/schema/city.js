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
    getFavCities:String
  }
`;

const resolvers = {
  Query:{
    getCities:()=>{
      return db.any("select *  from city order by tours desc")
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
          let month = now.getMonth();
          let arrHariBesar = [1,5,12];
          let monthEvent = [];
          arrHariBesar.forEach((item) =>{
            let selisih = item-month;
            if(selisih>=0){
              monthEvent.push(item)
            }

          });
          var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
          let indexMonth = monthEvent[0];
          let bulan = months[indexMonth];
          let nextMonth = months[indexMonth+1];
           res.forEach(item =>{
             let datas = item.created_at+"";
             if(datas.split(" ")[1] == bulan || datas.split(" ")[1] == nextMonth  ){
               let month = {"date":datas.split(" ")[1],"dest":item.destination};
               date.push(month);
             }

          });
           let map = new Map();
           let maxDest = "";
           let maxNumber = 0;
           date.forEach(item =>{
             let dest = item.dest;
             if(!map.has(dest)){
               map.set(dest,1);
               if(map.size === 1){
                 maxDest = dest;
               }
             }else{
               let num = map.get(dest);
               num++;
               if(num>maxNumber){
                 maxNumber = num;
                 maxDest = dest;
               }
             }


           });
           
           return maxDest;
           // console.log(date);


        });
    }
  }
};

module.exports={
  typeDefs,resolvers
}