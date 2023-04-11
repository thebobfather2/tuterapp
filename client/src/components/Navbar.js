import React from 'react';
function Navbar({ currentPage, handlePageChange }) {
    console.log(currentPage);
    return (
        <div>
        <nav>
                <a style={{ padding: "30px" }}
                    href="#home"
                    onClick={() => handlePageChange('Home')}
                    // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                    // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                >
                    Home
                </a>
                <a style={{ padding: "30px" }}
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </a>
                <a style={{ padding: "30px" }}
                    href="#tuters"
                    onClick={() => handlePageChange('Tuters')}
                    // Check to see if the currentPage is `Tuters`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'Tuters' ? 'nav-link active' : 'nav-link'}
                >
                    Tuters
                </a>
        </nav>
        </div>
    )
}
export default Navbar;