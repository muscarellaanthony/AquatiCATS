// const Meet = require('../models/Meet.js')

// const {
//     GraphQLObjectType,
//     GraphQLID,
//     GraphQLString,
//     GraphQLSchema,
//     GraphQLList,
//     GraphQLNonNull,
//     GraphQLBoolean
// } = require('graphql');

// const MeetType = new GraphQLObjectType({
//     name: 'Meet',
//     fields: () => ({
//         id: { type: GraphQLID },
//         date: { type: GraphQLString },
//         name: { type: GraphQLString },
//         location: { type: GraphQLString },
//         deadline: { type: GraphQLString },
//         invitational: { type: GraphQLBoolean },
//     })
// })



// const RootQuery = new GraphQLObjectType({
//     name: 'RootQueryType',
//     fields: {
//         meets: {
//             type: new GraphQLList(MeetType),
//             resolve(parent, args) {
//                 return Meet.find()
//             }
//         }
//     }
// })

// module.exports = new GraphQLSchema({
//     query: RootQuery
// })
