import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { config } from 'dotenv'
import resolvers from './resolvers'
import typeDefs from './typeDefs'

config()
const { PORT, NODE_ENV } = process.env
const app = express()

app.disable('x-powered-by')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: NODE_ENV !== 'production'
})

server.applyMiddleware({ app })

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
)
