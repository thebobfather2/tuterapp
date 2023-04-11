import React from 'react';
import Navbar from './Navbar';

function Header ({handlePageChange, currentPage}) {
    return (
        <header style={{padding: '10px'}}>
            <h1>Tuter App HomePage</h1>
            <Navbar handlePageChange={handlePageChange} currentPage={currentPage}/>
        </header>
    )
}
export default Header;