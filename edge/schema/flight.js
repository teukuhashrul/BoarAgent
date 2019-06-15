var Amadeus  = require('amadeus');
var amadeus = new Amadeus({
  clientId: 'Het3rAFqTDF7dsx2vWAjKfGtA3ukAdA0',
  clientSecret: 'X3gGpH61REAGxTlI'
});

const typeDefs = `
  scalar JSON
  extend type Query {
       getBusinesFLights(origin:String,dest:String,departureDate:String):[JSON]
       getVacationFlights(origin:String,dest:String,departureDate:String):[JSON]
    }
`;

const resolvers = {
  Query:{
    getBusinesFLights:(_,{origin,dest,departureDate})=>{
      return amadeus.shopping.flightOffers.get({
        origin : origin,
        destination : dest,
        departureDate: departureDate,

      }).then(res => {
        let arrModif = [];
        let arrData = res.result.data;
        let currency = res.result.meta.currency;
        let currencyRate = 1;
        if(currency === 'EUR'){
          currency = 'IDR';
          currencyRate = 16114;
        }
        arrData.forEach((item) => {
          let offerItems = item.offerItems;
          offerItems.forEach(item => {

            let totalPrice = item.price.total;
            let taxPrice = item.price.totalTaxes;
            item.services.forEach(item => {
              item.segments.forEach((item, index) => {
                let departureAirport= item.flightSegment.departure.iataCode;
                let arrivalAirport = item.flightSegment.arrival.iataCode;
                // let date = new Date(item.flightSegment.arrival.at);
                // console.log(date.getHours());
                if(departureAirport === origin && arrivalAirport === dest){
                  let test = item.flightSegment.arrival.at.split("T")[1].split("+");
                   totalPrice=Math.floor(totalPrice * currencyRate) +"";
                   taxPrice = Math.floor(taxPrice * currencyRate)+"";
                  item.flightSegment.totalPrice =  totalPrice ;
                  item.flightSegment.taxPrice =  taxPrice;
                  item.flightSegment.currency = currency;
                  arrModif.push(item.flightSegment);
                }

              })
            })
          })
        });
        let result = [];
        arrModif.forEach((item,idx)=>{
          let time = {"time":item.arrival.at.split("T")[1].split("+")[0]};
          time.index = idx;
          result.push(time);
        });
        let arrResult = [];
        result.sort((a,b) => {
          return a.time.localeCompare(b.time);
        });
        result.forEach(item=> {
          arrResult.push(arrModif[item.index]);
        });
        return arrResult;
      });
    },
    getVacationFlights:(_,{origin,dest,departureDate})=>{
      return amadeus.shopping.flightOffers.get({
        origin : origin,
        destination : dest,
        departureDate: departureDate,

      }).then(res => {
        let arrModif = [];
        let arrData = res.result.data;
        let currency = res.result.meta.currency;
        let currencyRate = 1;
        if(currency === 'EUR'){
          currency = 'IDR';
          currencyRate = 16114;
        }
        arrData.forEach((item) => {
          let offerItems = item.offerItems;
          offerItems.forEach(item => {

            let totalPrice = item.price.total;
            let taxPrice = item.price.totalTaxes;
            item.services.forEach(item => {
              item.segments.forEach((item, index) => {
                let departureAirport= item.flightSegment.departure.iataCode;
                let arrivalAirport = item.flightSegment.arrival.iataCode;
                if(departureAirport === origin && arrivalAirport === dest){
                  let test = item.flightSegment.arrival.at.split("T")[1].split("+");
                  totalPrice=Math.floor(totalPrice * currencyRate) +"";
                  taxPrice = Math.floor(taxPrice * currencyRate)+"";
                  item.flightSegment.totalPrice =  totalPrice ;
                  item.flightSegment.taxPrice =  taxPrice;
                  item.flightSegment.currency = currency;
                  arrModif.push(item.flightSegment);
                }
              })
            })
          })
        });


        let result = [];
        arrModif.forEach((item,idx)=>{

          let price = {"price":item.totalPrice};
          price.index = idx;
          // console.log(price);
          result.push(price);
        });
        let arrResult = [];

        result.sort((a,b) => {

          return a.price.localeCompare(b.price);
        });
        result.forEach(item=> {
          arrResult.push(arrModif[item.index]);
        });
        return arrResult;
      });
    }
  }
};

module.exports={
  typeDefs,
  resolvers
};