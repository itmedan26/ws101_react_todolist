import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav style={{ backgroundColor: '#333', padding: '15px' }}>
            <Link to="/" style={{ color: 'white', margin: '10px' }}>Home</Link>
            <Link to="/about" style={{ color: 'white', margin: '10px' }}>About</Link>
            <Link to="/contact" style={{ color: 'white', margin: '10px' }}>Contact Us</Link>
        </nav>
    );
};

export default NavBar;