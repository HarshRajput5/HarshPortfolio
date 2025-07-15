import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section">
          <div className="hero-content">
            <div className="hero-label">Hello There!</div>
            <h1>
              I'm <span className="highlight underline">Harsh Rajput,</span><br />
              Full-Service App <br />
              & Web Developer<br />
              {/* Based in INDIA. */}
            </h1>
            <p className="hero-desc">
            I'm Harsh Rajput, a passionate Flutter Developer building scalable, real-time mobile apps for startups and companies.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => window.location.href = '/projects'}>
                View My Portfolio <span className="play-icon">▶</span>
              </button>
              {/* <button className="btn-outline">Hire Me</button> */}
            </div>
          </div>
          <div className="hero-image-block">
            <div className="hero-image-wrapper">
              <img src="src\assets\AI_Character.png" alt="John Doe" className="hero-img" />
              <div className="hero-badge-circle">HIRE ME</div>
              <div className="hero-badge-ux">Web Developer</div>
              <div className="hero-badge-role">Flutter Developer</div>
            </div>
          </div>
        </section>
  );
};

export default HeroSection; 