const {db} = require("../db"); //before es6 i guess
var Amadeus  = require('amadeus');
var amadeus = new Amadeus({
  clientId: 'Het3rAFqTDF7dsx2vWAjKfGtA3ukAdA0',
  clientSecret: 'X3gGpH61REAGxTlI'
});
const typeDefs = `
  scalar JSON
  type User {
    id: String
    name :String
    email :String
    password:String
  }

  input UserInput{
    name : String
    email : String
    password : String
    
  }

  input loginInput{
    email:String
    password:String
    response:String
  }

   extend type Mutation{
    register(input:UserInput):String
    login(input:loginInput) : String
  }
  extend type Query {
    getUsers: [User]
    getFlight:JSON
    test:String
  }
`;


const resolvers = {
  Query:{
    getUsers:()=>{
    return db.any("select * from users")
      .then(user =>  user);
  },
    getFlight:()=>{
      return amadeus.shopping.flightOffers.get({
        origin : 'CGK',
        destination : 'AMQ',
        departureDate: "2019-06-25",
        returnDate: "2019-06-26"
      }).then(res => JSON.parse(res.body));
    },
    test:()=>{
      return amadeus.referenceData.locations.get({
        keyword : 'SOE',
        subType : Amadeus.location.airport
      }).then(res => res.body)

    }
  }
};

module.exports={
  typeDefs,
  resolvers
}