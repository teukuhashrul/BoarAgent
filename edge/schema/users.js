
const {db} = require("../db"); //before es6 i guess
var Amadeus  = require('amadeus');
var amadeus = new Amadeus({
  clientId: 'Het3rAFqTDF7dsx2vWAjKfGtA3ukAdA0',
  clientSecret: 'X3gGpH61REAGxTlI'
});
const typeDefs = `

  type User {
    id: String
    name :String
    email :String
    phone:String
    password:String
  }
   extend type Mutation{
    register(nama:String,email:String,phone:String,password:String):String
    login(email:String,password:String) : String
    
  }
  extend type Query {
    getUsers: [User]
  }
`;


const resolvers = {
  Query:{
    getUsers:()=>{
    return db.any("select * from users")
      .then(user =>  user);
  },
  },
  Mutation: {
    register:(_,{nama,email,phone,password})=>{
      return db.none("insert into users(name,email,phone,password )  values ($1,$2,$3,$4)" , [nama,email,phone,password])
        .then(() => "sukses")
    },
    login:(_,{email,password})=>{
      return db.one("select * from users where email = $1 and password = $2" , [email,password])
        .then(res => {
          if(res){
            return JSON.stringify(res);
          }
        })
        .catch(() => "salah");

    }
  }
};

module.exports={
  typeDefs,
  resolvers
};