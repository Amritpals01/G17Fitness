import React from 'react'
import './Footer.css'
import Logo from '../../assets/logo.png'
import Instagram from '../../assets/instagram.png'
import Github from '../../assets/github.png'
import Linkedin from '../../assets/linkedin.png'
import { Link } from 'react-scroll'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        {/* Logo & Tagline */}
        <div className="footer-logo">
          <img src={Logo} alt="G17 Fitness" />
          <span>Transform your body, transform your life. Join G17 Fitness and start your journey to a healthier, stronger you.</span>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <Link to="home" smooth={true} spy={true}>Home</Link>
          <Link to="programs" smooth={true} spy={true}>Programs</Link>
          <Link to="reasons" smooth={true} spy={true}>Why Us</Link>
          <Link to="plan" smooth={true} spy={true}>Plans</Link>
          <Link to="testimonial" smooth={true} spy={true}>Testimonials</Link>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="Github" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} alt="LinkedIn" />
          </a>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          © {currentYear} <span>G17 Fitness</span>. All Rights Reserved.
        </div>
      </div>

      <div className="blur blur-f-1"></div>
    </div>
  )
}

export default Footer
