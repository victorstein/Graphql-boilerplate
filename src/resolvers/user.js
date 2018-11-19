export default {
  Query: {
    user: (root, args, context, info) => {
      return 'user'
    }
  },
  Mutation: {
    signUp: (root, args, context, info) => {
      return 'signed up'
    }
  }
}
