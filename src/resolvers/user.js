import { ApolloError, AuthenticationError } from 'apollo-server-express'
import utils from '../utils'

const { pwHash, pwAuth, jwtRegister, jwtAuth } = utils

export default {
  Query: {
    user: async (root, { id }, { User, token }, info) => {
      try {
        // Check if the request contains a token
        if (!token) { throw new AuthenticationError(`Unauthenticated`) }

        // If request contains a token validate with jwt
        await jwtAuth(token)

        // If no error Execute the search query
        let response = await User.findById(id).exec()
        if (!response) { throw new ApolloError(`Unable to find a user with the provided ID`) }

        // if a user is found return it
        return response
      } catch (e) {
        throw new ApolloError(e.message)
      }
    }
  },
  Mutation: {
    signUp: async (root, { email, name, lastName, password }, { User }, info) => {
      try {
        // Check if email is already taken
        let emailInUse = await User.findOne({ email }).exec()
        if (emailInUse) { throw new Error('Email already in use') }

        // Hash the password using bcrypt
        password = await pwHash(password)
        let newUser = new User({ email, name, lastName, password })

        // Save and return user
        return newUser.save()
      } catch (e) {
        throw new ApolloError(`Error creating new user ${e.message}`)
      }
    },
    login: async (root, { email, password }, { User }, info) => {
      try {
        // Check if the user exist using the email
        let user = await User.findOne({ email }).exec()
        if (!user) { throw new Error('Invalid email or password') }

        // Validate password using bcrypt
        let validPw = await pwAuth(password, user.password)
        if (!validPw) { throw new Error('Invalid email or password') }

        // If password is valid send payload to jwt and strore token
        let token = await jwtRegister({ id: user['_id'] })

        // Return token
        return { token }
      } catch (e) {
        throw new AuthenticationError(`Error while Login in ${e.message}`)
      }
    }
  }
}
