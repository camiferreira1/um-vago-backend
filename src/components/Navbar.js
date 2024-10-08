// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import logo from '../assets/images/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" />
        </nav>
    );
};

export default Navbar;
