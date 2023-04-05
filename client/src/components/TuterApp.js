import React, { useState } from 'react';
import Navbar from './Navbar';


function App() {
    const [page, setPage] = useState("Home");
  
    const [categories] = useState([
      { name: "Home" },
      { name: "Tuter" },
    ]);
  
  
  
    return (
      <div>
        <h1>Tuter App</h1>
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
