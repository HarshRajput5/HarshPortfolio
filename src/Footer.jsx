import React from 'react';
import './Footer.css';
import { FaFacebookF, FaBehance, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          {/* <div className="footer-avatar">O</div> */}
          <div>
            <div className="footer-name">Harsh Rajput.</div>
            <div className="footer-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div className="footer-socials">
              <a href="#" className="footer-social"><FaFacebookF /></a>
              <a href="#" className="footer-social"><FaBehance /></a>
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
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Projects</li>
              <li>Blogs</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Contact</div>
            <ul>
              <li>+0123–456–789</li>
              <li>www.example.com</li>
              <li>example@gmail.com</li>
              <li>2464 Royal Ln. Mesa, New Jersey 45463</li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Get the latest information</div>
            <form className="footer-newsletter">
              <input type="email" placeholder="Email address" />
              <button type="submit">&#8594;</button>
            </form>
          </div>
        </div>
        <div className="footer-blogs-btn">
          <button>
            View All Blogs <span className="footer-arrow">→</span>
          </button>
        </div>
      </div>
      <div className="footer-bottom">
        <div>Copyright © 2024 <span className="footer-highlight">Harsh Rajput.</span> All Rights Reserved.</div>
        <div>
          <a href="#">User Terms & Conditions</a> | <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
} 