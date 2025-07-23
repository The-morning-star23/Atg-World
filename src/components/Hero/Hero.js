import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Mobile-only header elements */}
      <div className="d-flex d-lg-none justify-content-between align-items-center px-3 pt-3 text-white">
        <i className="bi bi-arrow-left fs-5"></i>
        <button className="btn btn-outline-light">Join Group</button>
      </div>

      {/* Hero Text */}
      <div className="hero-content">
        <h1>Computer Engineering</h1>
        <p>142,765 Computer Engineers follow this</p>
      </div>
    </div>
  );
};

export default Hero;