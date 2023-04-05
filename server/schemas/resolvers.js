const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    user: async (parent, { _id }) => {
      return User.findOne({_id});
    },
    me: async (parent, args, context) => {
        if (context.user) {
          return User.findOne({_id: context.user._id});
        }
        throw new AuthenticationError('You need to be logged in!');
    }
  },
  Mutation: {
    login: async (parent, {email, password}) => {
      const user = await User.findOne({email});
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return {user, token};
    },
    addUser: async (parent, { email, password, username }) => {
      const user = await User.create(
        {email, password, username}
      );
      const token = signToken(user);
      return {user, token};
    },
  },
};

module.exports = resolvers;
