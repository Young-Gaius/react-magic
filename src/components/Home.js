import React from 'react';
import './Home.css'; // Import the CSS file

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Math Magicians</h1>
      <p className="home-description">
        Math Magicians is a web application that provides a calculator for performing arithmetic
        calculations and a random quote generator to inspire and motivate you.
      </p>
      <p className="home-subtitle">
        Get started by exploring the calculator functionality or discovering insightful quotes.
      </p>
    </div>
  );
}

export default Home;
