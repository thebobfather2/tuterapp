import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
// import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

function AuthNavbar({ currentPage, handlePageChange }) {
    console.log(currentPage);
    return (
        <div>
        <nav>
                <Link style={{ padding: "30px" }}
                    to="/"
                    // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                    // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                >
                    Home
                </Link>
                <Link style={{ padding: "30px" }}
                    to="/about"
                    // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                >
                    About
                </Link>
                <Link style={{ padding: "30px" }}
                    to="/tuters"
                    // Check to see if the currentPage is `Tuters`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                >
                    Tuters
                </Link>

                <Link style={{ padding: "30px" }}
                to="/homework"
                // Check to see if the currentPage is `Homework`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                >
                    Homework
                </Link>

                <Link style={{ padding: "30px" }}
                    to="/Signin"
                    // Check to see if the currentPage is `Signin`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                >
                    Sign Up / Sign In
                </Link>
                
        </nav>
        </div>
        
    )
}



export default AuthNavbar;