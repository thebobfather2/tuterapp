const { gql } = require('apollo-server-express');
const typeDefs = gql`
type User {
    _id: ID!
    userName: String!
    email: String!
    password: String!
}

type Tuter {
    _id: ID!
    tuterName: String!
    students: [Student]!
}

type Student {
    _id: ID!
    first: String!
    last: String!
    homework: [Homework]!
    }
    
type Homework {
    assignmentId: ID!
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
    addUser(userName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
}
`

module.exports = typeDefs;