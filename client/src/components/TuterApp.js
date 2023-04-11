import React, { useState } from 'react';
import AppNavbar from './Navbar.js';


function App() {
    const [page, setPage] = useState("Home");
  
    const [categories] = useState([
      { name: "Home" },
      { name: "Tuter" },
    ]);
  
  
  
    return (
      <div style={{backgroundColor: "#b8C655"}}>
        
        <h1>Tuter App from Tuterapp.js</h1>
        {/* <Header 
        categories={categories}
        page={page}
        setPage={setPage}
        ></Header>
        <main>
          <div>{currentPage(page)}</div>
        </main>
        <Footer></Footer> */}
      </div>
    );
  }


export default App;
