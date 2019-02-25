const { ApolloServer, makeExecutableSchema, gql } = require('apollo-server')
const { Prisma } = require('prisma-binding')
const { importSchema } = require('graphql-import')
const typeDefs = importSchema('./src/schema.graphql')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')

const resolvers = {
  Query,
  Mutation,
  User,
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: { requireResolversForResolveType: false },
})

const server = new ApolloServer({ 
  schema,
  context: request => ({
    ...request,
    db: new Prisma({
      typeDefs: './src/generated/graphql-schema/prisma.graphql',
      endpoint: process.env.PRISMA_ENDPOINT,
      debug: true,
    }),
  }),
});

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
