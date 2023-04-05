import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
// import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('id_token');
 
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <h1>Tuter App</h1>
    // <ApolloProvider client = { client }>
    // <Router>
    //   <>
    //     {/* <Navbar />
    //     <Switch>
          
    //       <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
    //     </Switch> */}
    //   </>
    // </Router>
    // </ApolloProvider>
  );
}

export default App;
