const { Schema, Types } = require('mongoose');

const homeworkSchema = new Schema(
  {
    assignmentId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    homeworkName: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 4,
      default: 'Homework',
    },
    problem: {
      type: Number,
      required: true,
      default: 0,
    },
    question: {
      type: String,
      required: true,
      maxlength: 200,
      minlength: 4,
      default: 'Review'
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = homeworkSchema;
