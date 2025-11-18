import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Helper to handle section navigation
  const handleSectionNav = (section) => {
    if (location.pathname === '/') {
      // Already on home, scroll directly
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home and pass section in state
      navigate('/', { state: { scrollTo: section } });
    }
    setDrawerOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__logo" style={{cursor: 'pointer'}} onClick={() => navigate('/', { replace: true })}>
        <span role="img" aria-label="logo">🌟</span> Harsh's Portfolio
      </div>
      <nav className="navbar__links">
        <Link to="/skills">Skills</Link>
        <a href="#about" onClick={e => { e.preventDefault(); handleSectionNav('about'); }}>About</a>
        <a href="#skills" onClick={e => { e.preventDefault(); handleSectionNav('skills'); }}>Tools</a>
        <Link to="/projects">Projects</Link>
        <a href="#contact" onClick={e => { e.preventDefault(); handleSectionNav('contact'); }}>Contact</a>
      </nav>
      <button className="navbar__hamburger" onClick={() => setDrawerOpen(true)} aria-label="Open menu">
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </button>
      <div className="navbar__profile">
        <img src="https://firebasestorage.googleapis.com/v0/b/interior-designer-7d03e.appspot.com/o/AI_Character.png?alt=media&token=a3cb15ac-6dc3-45ba-9f70-13d78a5a7ef3" alt="John Doe" className="profile-img" />
      </div>
      {/* Drawer */}
      <div className={`drawer ${drawerOpen ? 'open' : ''}`}> 
        <button className="drawer__close" onClick={() => setDrawerOpen(false)} aria-label="Close menu">&times;</button>
        <nav className="drawer__links">
          <Link to="/skills" onClick={() => setDrawerOpen(false)}>Skills</Link>
          <a href="#about" onClick={e => { e.preventDefault(); handleSectionNav('about'); }}>About</a>
          <a href="#skills" onClick={e => { e.preventDefault(); handleSectionNav('skills'); }}>Skills</a>
          <Link to="/projects" onClick={() => setDrawerOpen(false)}>Projects</Link>
          <a href="#contact" onClick={e => { e.preventDefault(); handleSectionNav('contact'); }}>Contact</a>
        </nav>
      </div>
      {/* Overlay for drawer */}
      {drawerOpen && <div className="drawer-overlay" onClick={() => setDrawerOpen(false)}></div>}
    </header>
  );
};

export default Navbar; 