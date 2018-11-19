import { gql } from 'apollo-server-express'

export default gql`

  extend type Query {
    user(id: ID!): User
  }

  extend type Mutation {
    signUp(email: String!, name: String!, lastName: String!): User
  }

  type User {
    id: ID!
    email: String!
    name: String!
    lastName: String!
  }

`
