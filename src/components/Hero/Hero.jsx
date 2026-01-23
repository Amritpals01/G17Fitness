import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import NumberCounter from 'number-counter';
import hero_image from "../../assets/hero_image.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  // Check if mobile for simpler animations
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
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
            <span>
              <NumberCounter end={4} start={0} delay='1' preFix='+' duration={2}/>
            </span>
            <span>Years Experience</span>
          </div>
          <div>
            <span>
              <NumberCounter end={100} start={20} delay='2' preFix='+'/>
            </span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={10} delay='2' preFix='+'/>
            </span>
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
        <div className="hero-image-back"></div>
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
