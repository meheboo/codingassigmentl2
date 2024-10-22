
import React from 'react';
import './HeroSection.css';
import demo from '../images/demo.png'
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Learn a New Skill Everyday, Anytime, and Anywhere.</h1>
        <p>
          <span className='th'>1000+ </span>Courses covering all tech domains for you to learn and explore new opportunities. Learn from Industry Experts and land your Dream Job.
        </p>
        <div className="hero-buttons">
          <button className="start-trial-btn">Start Trial</button>
          <button className="how-it-works-btn">How it Works</button>
        </div>
      </div>
      <div className="hero-images">
        {/* Placeholder for images */}
        <img src={demo} alt="girl" className="hero-img" />
      </div>
    </section>
  );
};

export default HeroSection;