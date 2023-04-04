const { } = require('../models');

module.exports = {
  // Get all courses
  getTuter(req, res) {
    Tuter.find()
      .then((tuter) => res.json(tuter))
      .catch((err) => res.status(500).json(err));
  },
  // Get a course
  getOneTuter(req, res) {
    Tuter.findOne({ _id: req.params.tuterId })
      .select('-__v')
      .then((tuter) =>
        !tuter
          ? res.status(404).json({ message: 'No tuter with that ID' })
          : res.json(course)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a course
//   createCourse(req, res) {
//     Course.create(req.body)
//       .then((course) => res.json(course))
//       .catch((err) => {
//         console.log(err);
//         return res.status(500).json(err);
//       });
//   },
  // Delete a course
//   deleteCourse(req, res) {
//     Course.findOneAndDelete({ _id: req.params.courseId })
//       .then((course) =>
//         !course
//           ? res.status(404).json({ message: 'No course with that ID' })
//           : Student.deleteMany({ _id: { $in: course.students } })
//       )
//       .then(() => res.json({ message: 'Course and students deleted!' }))
//       .catch((err) => res.status(500).json(err));
//   },
  // Update a course
  updateTuter(req, res) {
    Tuter.findOneAndUpdate(
      { _id: req.params.tuterId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((tuter) =>
        !tuter
          ? res.status(404).json({ message: 'No tuter with this id!' })
          : res.json(course)
      )
      .catch((err) => res.status(500).json(err));
  },
};
