const { Schema } = require('mongoose');

const homeworkSchema = new Schema({
  homeworkName: [
    {
      type: String,
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



