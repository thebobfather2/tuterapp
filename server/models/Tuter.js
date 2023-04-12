const { Schema, model } = require('mongoose');

// Create a new Tutor
const tuterSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Student',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Tuter = model('Tuter', tuterSchema);

module.exports = Tuter;
