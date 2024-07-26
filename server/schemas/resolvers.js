const { User, Swimmer, Meet } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({});
        return user;
      }
    },

    meet: async (parent, args, context) => {
      if (context.meet) {
        const meet = await Meet.findById(context.meet._id).populate({});
        return meet;
      }
    },
    meets: async () => {

    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addSwimmer: async (parent, args, context) => {
      if (context.user) {
        const swimmer = new Swimmer(args);

        await User.findByIdAndUpdate(context.user_id, { $push: { swimmers: swimmer } })

        return swimmer;
      }
    },
    addMeet: async (parent, args, context) => {
      const meet = new Meet(args);

      await Meet.create(meet);

      return meet;

    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw AuthenticationError;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        console.log('not real')
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    updateMeet: async (parent, { _id, ...args }) => {
      const meet = await Meet.findByIdAndUpdate(_id, args, { new: true });
      return meet;
    },
    deleteMeet: async (parent, { _id }) => {
      const deletedMeet = await Meet.findByIdAndDelete(_id);
      if (!deletedMeet) {
        throw new Error('Meet not found');
      }
      return { _id: deletedMeet._id, message: 'Meet deleted' };
    }
  }
};

module.exports = resolvers;
