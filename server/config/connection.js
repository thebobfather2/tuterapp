const { connect, connection } = require('mongoose');

const connectionString = 'mongodb://127.0.0.1:27017/TuterApp';
// const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/TuterApp';


connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
