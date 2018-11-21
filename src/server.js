import '@babel/polyfill'
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { config } from 'dotenv'
import resolvers from './resolvers'
import typeDefs from './typeDefs'
import mongoose from 'mongoose'
import models from './models'

(async () => {
  try {
    config()
    const { PORT, NODE_ENV, DB_URI, DB_NAME, DB_PASS, DB_USER, DB_PORT } = process.env
    const { User } = models
    const app = express()

    app.disable('x-powered-by')

    await mongoose.connect(
      `mongodb://${DB_USER}:${DB_PASS}@${DB_URI}:${DB_PORT}/${DB_NAME}`,
      {
        useNewUrlParser: true
      }
    )

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      playground: NODE_ENV !== 'production',
      context: { User }
    })

    server.applyMiddleware({ app })

    app.listen({ port: PORT }, () =>
      console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
    )
  } catch (e) {
    console.log(e)
  }
})()
