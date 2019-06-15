const { ApolloServer, gql } = require('apollo-server');
const {merge} = require('lodash');
const schemaUser = require('../edge/schema/users');
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


  ].join("\n")), resolvers:merge(
    schemaUser.resolvers,


  ) });


server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});