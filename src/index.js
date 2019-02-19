const { ApolloServer, gql } = require('apollo-server')
const { Prisma } = require('prisma-binding')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')


const resolvers = {
  Query,
  Mutation,
  User,
}

const server = new ApolloServer({ 
  typeDefs: './src/schema.graphql', 
  resolvers,
  context: request => ({
    ...request,
    prisma,
  }),
});

server.willStart(() => console.log('Server is running on http://localhost:4000'));
