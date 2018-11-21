import { ApolloError } from 'apollo-server-express'
import utils from '../utils'

const { pwHash } = utils

export default {
  Query: {
    user: (root, args, context, info) => {
      return 'user'
    }
  },
  Mutation: {
    signUp: async (root, { email, name, lastName, password }, { User }, info) => {
      try {
        password = await pwHash(password)
        let newUser = new User({ email, name, lastName, password })
        return newUser.save()
      } catch (e) {
        console.log(e)
        let error = new ApolloError(`Error creating new user ${e.message}`)
        return error
      }
    }
  }
}
