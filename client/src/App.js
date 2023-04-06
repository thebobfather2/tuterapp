import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <main className={`p-3`} style={{}}>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      <div style={{minHeight:'80vh'}}>
      {renderPage()}
      </div>
    </main>
  );
}

export default App;
