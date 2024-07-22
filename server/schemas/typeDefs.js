const typeDefs = `
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    swimmers: [Swimmer]
  }

  type Swimmer {
    _id: ID
    firstName: String
    lastName: String
    birthdate: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query{
    user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addSwimmer(firstName: String!, lastName: String!, birthdate: String!): Swimmer
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
