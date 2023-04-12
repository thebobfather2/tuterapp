const { Schema, Types } = require('mongoose');

const homeworkSchema = new Schema({
  homeworkId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
    },
  homeworkName: [
    {
      type: String,
      required: true
    },
  ],
  description: {
    type: String,
    required: true,
  },
  homeworkQuestion: {
    type: String,
    required: true,
  }
});

module.exports = homeworkSchema;



