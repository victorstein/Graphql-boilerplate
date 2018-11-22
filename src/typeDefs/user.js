import { gql } from 'apollo-server-express'

export default gql`

  extend type Query {
    user(id: ID!): User
  }

  type token {
    token: String
  }

  extend type Mutation {

    signUp(email: String!, name: String!, lastName: String!, password: String!): User

    login(email: String!, password: String!): token

  }

  type User {
    id: ID!
    email: String!
    name: String!
    lastName: String!
  }

`
