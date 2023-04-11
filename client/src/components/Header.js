import React from 'react';
import Navbar from './Navbar';
import "./style.css"

function Header ({handlePageChange, currentPage}) {
    return (
        <header style={{padding: '10px', paddingBottom: "20px", color: "F3E47D", backgroundColor: "#f18750"}}>
            <h1 className='Header' style={{ textAlign: "right", textShadow: "2px, 2px, F3E47D", color: "F3E47D" }}>
            Tuter
                <img src="/img/tuterlogo.png" style={{ width: '50px' }} />
            </h1>
            <Navbar handlePageChange={handlePageChange} currentPage={currentPage}/>
        </header>
    )
}
export default Header;