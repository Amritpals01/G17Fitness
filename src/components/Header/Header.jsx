import React, { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setMenuOpened(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (menuOpened) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => document.body.classList.remove("menu-open");
  }, [menuOpened]);

  const closeMenu = () => setMenuOpened(false);

  return (
    <div className="header">
      <img src={Logo} alt="G17 Fitness" className="logo" />

      {isMobile && (
        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={menuOpened ? "Close menu" : "Open menu"}
          aria-expanded={menuOpened}
          onClick={() => setMenuOpened((open) => !open)}
        >
          {menuOpened ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      )}

      {isMobile && menuOpened && (
        <div className="menu-backdrop" onClick={closeMenu} aria-hidden="true" />
      )}

      <ul className={`header-menu ${isMobile && menuOpened ? "menu-open" : ""} ${isMobile && !menuOpened ? "menu-closed" : ""}`}>
        <li>
          <Link onClick={closeMenu} activeClass="active" to="home" spy={true} smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link onClick={closeMenu} to="programs" spy={true} smooth={true}>
            Programs
          </Link>
        </li>
        <li>
          <Link onClick={closeMenu} to="reasons" spy={true} smooth={true}>
            Why Us
          </Link>
        </li>
        <li>
          <Link onClick={closeMenu} to="plan" spy={true} smooth={true}>
            Plans
          </Link>
        </li>
        <li>
          <Link onClick={closeMenu} to="testimonial" spy={true} smooth={true}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link onClick={closeMenu} to="join-us" spy={true} smooth={true}>
            Join Now
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
