import React, { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpened(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="header">
      <img src={Logo} alt="G17 Fitness" className="logo" />
      {isMobile && !menuOpened ? (
        <div onClick={() => setMenuOpened(true)}>
          <svg
            className="mobile-menu-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            style={{ color: '#00d4ff' }}
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </div>
      ) : (
        <ul className="header-menu">
          {isMobile && (
            <li onClick={() => setMenuOpened(false)} style={{ position: 'absolute', right: '1rem', top: '0.8rem', color: '#00d4ff' }}>
              ✕
            </li>
          )}
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="programs"
              spy={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="reasons"
              spy={true}
              smooth={true}
            >
              Why Us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="plan"
              spy={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonial"
              spy={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="join-us"
              spy={true}
              smooth={true}
            >
              Join Now
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
