import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div>
      <div className="header">
        <img src={Logo} alt="" className="logo" />
        {menuOpened === false && mobile === true ? (
          <div
            style={{
              borderRadius: "5px",
            }}
            onClick={() => setMenuOpened(true)}
          >
            <img
              src={Bars}
              alt=""
              style={{ width: "1.5rem", height: "1.5rem", paddingTop: "4rem" }}
            />
          </div>
        ) : (
          <ul className="header-menu">
            <li>
              <Link
                onClick={() => setMenuOpened(false)}
                activeClass="active"
                to="home"
                span={true}
                smooth={true}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuOpened(false)}
                to="programs"
                span={true}
                smooth={true}
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuOpened(false)}
                to="reasons"
                span={true}
                smooth={true}
              >
                Why Us
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuOpened(false)}
                to="plan"
                span={true}
                smooth={true}
              >
                Plans
              </Link>
            </li>
            <li>
              <Link onClick={() => setMenuOpened(false)}
              to="testimonial"
              span={true}
              smooth={true}
              >Testimonials</Link>
            </li>
            <li>
            <Link onClick={() => setMenuOpened(false)}
              to="join-us"
              span={true}
              smooth={true}
              >Join Now</Link>
            </li>
            
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
