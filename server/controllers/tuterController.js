const { Tuter } = require('../models');

module.exports = {
  getTuter(req, res) {
    Tuter.find()
      .then((tuter) => res.json(tuter))
      .catch((err) => res.status(500).json(err));
  },

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
