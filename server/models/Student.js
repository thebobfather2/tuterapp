const { Schema, model } = require('mongoose');
const homeworkSchema = require('./Homework');
const bcrypt = require('bcrypt');

//import homework schema for student
const homeworkSchema = require('./Homework');

const studentSchema = new Schema(

{
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  password: {
    type: String,
    required: true,
  },
  // show homeworks
  homeworkSchema: [homeworkSchemas],
},
// set this to use virtual below
{
  toJSON: {
    virtuals: true,
  },
}
);

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


const Student = model('student', studentSchema);

module.exports = Student;
