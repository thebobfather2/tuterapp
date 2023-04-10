const express = require('express');
const mongodb = require('mongodb').MongoClient;
const { ApolloServer } = require('apollo-server-express');
// const path = require('path');
const db = require('./config/connection');
// const routes = require('./routes');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/studentsDB';


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

// app.use(routes);

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer(typeDefs, resolvers);
 
  // Creates a connection to a MongoDB instance and returns the reference to the database
mongodb.connect(
  // Defines connection between app and MongoDB instance
  connectionString,
  // Sets connection string parser and Server Discover and Monitoring engine to true and avoids warning
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    // Use client.db() constructor to add new db instance
    db = client.db();
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.post('/', (req, res) => {
  // Use db connection to add a document
  db.collection('studentsDB').insertOne({name: req.body.name}), (err, result) => { 
      if (err) throw err;
      res.json(result);
    }
  ;
});

app.get('/', (req, res) => {
  // Use db connection to find all documents in collection
  db.collection('tuter')
    .find()
    .toArray((err, results) => {
      if (err) throw err;
      res.send(results);
    });
});



