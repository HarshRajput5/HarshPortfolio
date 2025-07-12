import React, { useState } from 'react';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
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
  );
};

export default Navbar; 