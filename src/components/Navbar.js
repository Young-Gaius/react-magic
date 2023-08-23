import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/">Math Magicians</Link>
          </div>
          <div className="navbar-links">
            <Link to="/" className="navbar-link">
              Home
            </Link>
            <Link to="/calculator" className="navbar-link">
              Calculator
            </Link>
            <Link to="/quote" className="navbar-link">
              Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
