import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation

const About = () => {
  return (
    <div>
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

      {/* About Page Content */}
      <div className="about-container">
        <h1>About Virtual Reality Tours</h1>
        <p>
          Virtual Reality Tours is designed to provide immersive previews of top destinations,
          helping users plan trips and make confident booking decisions.
        </p>
      </div>
    </div>
  );
};

export default About;
