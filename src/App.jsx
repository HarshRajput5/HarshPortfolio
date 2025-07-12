import { useState } from 'react';
import './App.css'
import ServicesSection from './ServicesSection';
import AboutMeSection from './AboutMeSection';
import FavoriteToolsSection from './FavoriteToolsSection';
import LatestProjectsSection from './LatestProjectsSection';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="main-layout">
      {/* Navigation Bar */}
      <header className="navbar">
        <div className="navbar__logo">
          <span role="img" aria-label="logo">🌟</span> Harsh's Portfolio
        </div>
        <nav className="navbar__links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Journey</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
          <a href="#blog">Blog</a>
        </nav>
        <button className="navbar__hamburger" onClick={() => setDrawerOpen(true)} aria-label="Open menu">
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
        <div className="navbar__profile">
          <img src="https://pngimg.com/d/businessman_PNG6564.png" alt="John Doe" className="profile-img" />
        </div>
        {/* Drawer */}
        <div className={`drawer ${drawerOpen ? 'open' : ''}`}> 
          <button className="drawer__close" onClick={() => setDrawerOpen(false)} aria-label="Close menu">&times;</button>
          <nav className="drawer__links">
            <a href="#services" onClick={() => setDrawerOpen(false)}>Services</a>
            <a href="#about" onClick={() => setDrawerOpen(false)}>About</a>
            <a href="#skills" onClick={() => setDrawerOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setDrawerOpen(false)}>Projects</a>
            <a href="#education" onClick={() => setDrawerOpen(false)}>Journey</a>
            <a href="#pricing" onClick={() => setDrawerOpen(false)}>Pricing</a>
            <a href="#contact" onClick={() => setDrawerOpen(false)}>Contact</a>
            <a href="#blog" onClick={() => setDrawerOpen(false)}>Blog</a>
          </nav>
        </div>
        {/* Overlay for drawer */}
        {drawerOpen && <div className="drawer-overlay" onClick={() => setDrawerOpen(false)}></div>}
      </header>
      {/* Main content will go here */}
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-label">Hello There!</div>
            <h1>
              I'm <span className="highlight underline">Harsh Rajput,</span><br />
              Flutter Developer<br />
              Based in INDIA.
            </h1>
            <p className="hero-desc">
            I'm Harsh Rajput, a passionate Flutter Developer building scalable, real-time mobile apps for startups and companies.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">
                View My Portfolio <span className="play-icon">▶</span>
              </button>
              <button className="btn-outline">Hire Me</button>
            </div>
          </div>
          <div className="hero-image-block">
            <div className="hero-image-wrapper">
              <img src="https://pngimg.com/d/businessman_PNG6564.png" alt="John Doe" className="hero-img" />
              <div className="hero-badge-circle">HIRE ME</div>
              <div className="hero-badge-ux">UI/UX Designer</div>
              <div className="hero-badge-role">Flutter Developer</div>
            </div>
          </div>
        </section>
        <ServicesSection />
        <AboutMeSection />
        <FavoriteToolsSection />
        <LatestProjectsSection />
      </main>
    </div>
  )
}

export default App
