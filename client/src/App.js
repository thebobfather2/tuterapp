import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Tuters from './pages/tuters';
import Signin from './pages/Signin';
import Homework from './pages/Homework';
// import AuthNavbar from './components/AuthNavbar.js';
import Auth from './utils/auth';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
    
    <main className={`p-3`} style={{}}>
      <div>
      </div>
    </main>
      <Router>
        <>
          <Header />
          
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/about'
              element={<About />}
            />
            <Route
              path='/tuters'
              element={<Tuters />}
            />
            <Route
              path='/Signin'
              element={<Signin />}
            />
            <Route
            path='/Homework'
            element={<Homework />}
            />
          </Routes>
          
        </>
      </Router>
    </ApolloProvider>
  );
}
// function App() {
//   const [currentPage, setCurrentPage] = useState('Home');
//   const renderPage = () => {
//     if (currentPage === 'Home') {
//       return <Home />;
//     }
//     if (currentPage === 'About') {
//       return <About />;
//     }
//     if (currentPage === 'Tuters') {
//       return <Tuters />;
//     }
    
//   };

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <main className={`p-3`} style={{}}>
//       <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
//       <div style={{minHeight:'80vh'}}>
//       {renderPage()}
//       </div>
//     </main>
//   );
// }

export default App;
