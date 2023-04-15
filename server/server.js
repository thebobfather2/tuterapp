const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const MongoClient = require('mongodb').MongoClient;

const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/studentsDB';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.post('/addUser', (req, res) => {
  const { username, email, password } = req.body;
  // Do something with the received data (e.g. add it to a database)
  console.log(`Received data: ${username}, ${email}, ${password}`);
  res.send('Data received!');
});

app.post('/', (req, res) => {
  // Use db connection to add a document
  db.collection('tuters').insertOne({name: req.body.name}, (err, result) => { 
      if (err) throw err;
      res.json(result);
    });
});

app.get('/', (req, res) => {
  // Use db connection to find all documents in collection
  db.collection('tuters').find((err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

const startServer = async () => {
  await client.connect();
  await server.start();
  server.applyMiddleware({ app });
  console.log(`API server running on port ${PORT}`);
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
}

startServer();
