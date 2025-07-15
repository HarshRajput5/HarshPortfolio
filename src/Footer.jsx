import React from 'react';
import './Footer.css';
import { FaFacebookF, FaBehance, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer"  id="contact">
      <div className="footer-main">
        <div className="footer-brand">
          {/* <div className="footer-avatar">O</div> */}
          <div>
            <div className="footer-name">Harsh Rajput.</div>
            <div className="footer-desc">I help businesses turn ideas into fast, beautiful, and scalable mobile apps using Flutter. From sleek UI to smooth functionality, I deliver clean, maintainable code that works. Let’s build something your users will love!</div>
            <div className="footer-socials">
              <a href="#" className="footer-social"><FaFacebookF /></a>
              {/* <a href="#" className="footer-social"><FaBehance /></a> */}
              <a href="#" className="footer-social"><FaYoutube /></a>
              <a href="#" className="footer-social"><FaTwitter /></a>
              <a href="#" className="footer-social"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <div className="footer-columns">
          <div className="footer-col">
            <div className="footer-col-title">Navigation</div>
            <ul>
              <li><Link to="/" replace>Home</Link></li>
              <li><Link to="/service">Services</Link></li>
              <li><Link to="/" state={{ scrollTo: 'about' }}>About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/" state={{ scrollTo: 'contact' }}>Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Contact</div>
            <ul>
              <li>+91 9824156034</li>
              <li>rajputharsh9825@gmail.com</li>
              <li>Vadodara, Gujarat, India</li>
            </ul>
          </div>
          {/* <div className="footer-col">
            <div className="footer-col-title">Get the latest information</div>
            <form className="footer-newsletter">
              <input type="email" placeholder="Email address" />
              <button type="submit">&#8594;</button>
            </form>
          </div> */}
        </div>
        {/* <div className="footer-blogs-btn">
          <button>
            View All Blogs <span className="footer-arrow">→</span>
          </button>
        </div> */}
      </div>
      <div className="footer-bottom">
        <div>Copyright © 2025 <span className="footer-highlight">Harsh Rajput.</span> All Rights Reserved.</div>
        {/* <div>
          <a href="#">User Terms & Conditions</a> | <a href="#">Privacy Policy</a>
        </div> */}
      </div>
    </footer>
  );
} 