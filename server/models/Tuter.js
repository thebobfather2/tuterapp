const { Schema, model } = require('mongoose');

// Schema to create a course model
const tuterSchema = new Schema(
  {
    tuterName: {
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

const Tuter = model('tuter', tuterSchema);

module.exports = Tuter;
