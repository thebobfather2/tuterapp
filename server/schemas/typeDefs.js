const { gql } = require('apollo-server-express');
const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    email: String!
}

type Tuter {
    _id: ID!
    firstname: String!
    lastname: String!
    students: [Student]!
}

type Student {
    _id: ID!
    firstname: String!
    lastname: String!
    assignedTuter: Tuter!
    homework: [Homework]
    }
    
type Homework {
    homeworkId: ID!
    homeworkName: String!
    description: String!
    homeworkQuestion: String!
}
type Auth {
    token: ID!
    user: User
    
}

type Query {
    users: [User]
    user(_id: ID!): User
    me: User
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
}
`

module.exports = typeDefs;