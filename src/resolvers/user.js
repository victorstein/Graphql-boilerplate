import { ApolloError, AuthenticationError } from 'apollo-server-express'
import utils from '../utils'

const { pwHash, pwAuth, jwtRegister, jwtAuth } = utils

export default {
  Query: {
    user: async (root, { id }, { User, token }, info) => {
      try {
        if (!token) { throw new AuthenticationError(`Unauthenticated`) }
        await jwtAuth(token)

        let response = await User.findById(id).exec()
        if (!response) { throw new ApolloError(`Unable to find a user with the provided ID`) }

        return response
      } catch (e) {
        throw new ApolloError(e.message)
      }
    }
  },
  Mutation: {
    signUp: async (root, { email, name, lastName, password }, { User }, info) => {
      try {
        password = await pwHash(password)
        let newUser = new User({ email, name, lastName, password })
        return newUser.save()
      } catch (e) {
        throw new ApolloError(`Error creating new user ${e.message}`)
      }
    },
    login: async (root, { email, password }, { User }, info) => {
      try {
        let user = await User.findOne({ email }).exec()
        if (!user) { throw new Error('Invalid email or password') }

        let validPw = await pwAuth(password, user.password)
        if (!validPw) { throw new Error('Invalid email or password') }

        let token = await jwtRegister({ id: user['_id'] })
        return { token }
      } catch (e) {
        throw new AuthenticationError(`Error while Login in ${e.message}`)
      }
    }
  }
}
