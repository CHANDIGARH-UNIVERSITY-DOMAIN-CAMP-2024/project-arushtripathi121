import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation

const Home = () => {
  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <div className="navbar">
        <nav>
          <ul className="nav-list">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/tour" className="nav-link">Tour</Link></li>
            <li><Link to="/about" className="nav-link">About Us</Link></li>
          </ul>
        </nav>
      </div>

      {/* Home Page Content */}
      <div className="hero-section">
        <h1 className="home-title">Welcome to Virtual Reality Tours</h1>
        <p className="home-description">
          Explore immersive virtual tours of stunning destinations around the globe. 
          Take your first step into the future of travel.
        </p>
        <Link to="/tour" className="cta-button">Start Your Tour</Link>
      </div>
    </div>
  );
};

export default Home;
