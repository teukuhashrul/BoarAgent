const { ApolloServer, gql } = require('apollo-server');
const {merge} = require('lodash');
const schemaUser = require('../edge/schema/users');
const schemaFlight = require('../edge/schema/flight');
const schmaCIty = require('../edge/schema/city');
const schemaTour = require('../edge/schema/tour');
const schemaWishList = require('../edge/schema/wishlist');
const Query = `
  type Query {
    _empty: String
  }
`;

const Mutation = `
  type Mutation {
    _empty: String
  }
`;




const server = new ApolloServer({ typeDefs:gql([
    Query,
    Mutation,
    schemaUser.typeDefs,
    schemaFlight.typeDefs,
    schmaCIty.typeDefs,
    schemaTour.typeDefs,
    schemaWishList.typeDefs


  ].join("\n")), resolvers:merge(
    schemaUser.resolvers,
    schemaFlight.resolvers,
    schmaCIty.resolvers,
    schemaTour.resolvers,
    schemaWishList.resolvers


  ) });


server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});