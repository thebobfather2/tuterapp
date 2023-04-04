const { Schema, model } = require('mongoose');
const homeworkSchema = require('./Homework');

// Schema to create Student model
const studentSchema = new Schema(
  {
    first: {
      type: String,
      required: true,
      max_length: 50,
    },
    last: {
      type: String,
      required: true,
      max_length: 50,
    },
    homework: {
      type: String,
      required: true,
      max_length: 200,
    },
    assignments: [homeworkSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Student = model('student', studentSchema);

module.exports = Student;
