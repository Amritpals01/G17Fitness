import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="left-h">
        <Header />
        
        {/* Badge */}
        <div className="the-best-ad">
          <div className="badge-slider"></div>
          <span>The best fitness club in the town</span>
        </div>

        {/* Hero Text */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              Transform your physique with our expert trainers and state-of-the-art facilities. 
              Join us and start your journey to a healthier, stronger you.
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="figures">
          <div>
            <span>+4</span>
            <span>Years Experience</span>
          </div>
          <div>
            <span>+100</span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>Fitness Programs</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="hero-buttons">
          <button className="btn">
            <Link to="join-us" spy={true} smooth={true}>
              Get Started
            </Link>
          </button>
          <button className="btn btn-secondary">
            <Link to="programs" spy={true} smooth={true}>
              Learn More
            </Link>
          </button>
        </div>
      </div>

      <div className="right-h">
        <img 
          src={hero_image} 
          alt="Hero" 
          className="hero-image"
        />
      </div>
    </div>
  );
};

export default Hero;
