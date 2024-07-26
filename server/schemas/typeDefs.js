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

  type Meet{
    _id: ID
    date: String
    location: String
    name: String
    deadline: String
    invitational: Boolean
  }

  type Auth {
    token: ID
    user: User
  }
  
  type Query{
    user: User

    meet: Meet
    meets: [Meet]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addSwimmer(firstName: String!, lastName: String!, birthdate: String!): Swimmer
    addMeet(date: String!, location: String!, name: String!, deadline: String!, invitational: Boolean): Meet
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    updateMeet(_id: ID! date: String, location: String, name: String, deadline: String, invitational: Boolean): Meet
    deleteMeet(_id: ID!): DeleteResponse
  }

  type DeleteResponse {
    _id: ID
    message: String
  }
`;

module.exports = typeDefs;
