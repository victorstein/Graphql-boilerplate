import { ApolloError, AuthenticationError } from 'apollo-server-express'
import utils from '../utils'

const { pwHash, pwAuth, jwtRegister } = utils

export default {
  Query: {
    user: (root, { id }, { User }, info) => {
      try {
        return User.findById(id).exec()
      } catch (e) {
        throw new ApolloError(`Unable to find a user witht the provided ID`)
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
        return token
      } catch (e) {
        throw new AuthenticationError(`Error while Login in ${e.message}`)
      }
    }
  }
}
