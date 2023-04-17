const { Schema, model } = require('mongoose');

//import homework schema for student
const homeworkSchema = require('./Homework');

const studentSchema = new Schema(

{
  firstname: {
    type: String,
    required: true
  },
  lastname: { 
    type: String,
    required: true
  },
  assignedTuter: {
    type: Schema.Types.ObjectId,
    ref: 'Tuter'
  },
  
  // show homeworks
  homework: [homeworkSchema],
},
// set this to use virtual below
{
  toJSON: {
    virtuals: true,
  },
}
);


const Student = model('Student', studentSchema);

module.exports = Student;
