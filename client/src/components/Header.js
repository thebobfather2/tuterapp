import React from 'react';
import Navbar from './Navbar';

function Header ({handlePageChange, currentPage}) {
    return (
        <header>
            <h1>Tuter App HomePage</h1>
            <Navbar handlePageChange={handlePageChange} currentPage={currentPage}/>
        </header>
    )
}
export default Header;