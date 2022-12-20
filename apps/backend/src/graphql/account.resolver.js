import { gql } from 'apollo-server-express'
// import { combineResolvers } from 'graphql-resolvers'
// import { AuthenticationError, UserInputError } from 'apollo-server'
// import md5 from 'md5'
// import jwt from 'jsonwebtoken'
// import { isAuthenticated } from './authorization.js'
// import { models, sequelize, Sequelize } from '../sequelize/models/index.js'

export const typeDef = gql`
extend type Query {
  now: String
}
`

export const resolver = {
  Query: {
    now: async () => {
      try {
        return 'hello'
      } catch (err) {
        console.error(err)
        throw err
      }
    }
  }
}
