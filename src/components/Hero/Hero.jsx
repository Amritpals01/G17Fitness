import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import NumberCounter from 'number-counter';
//images
import hero_image from "../../assets/hero_image.png";

import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "8px" }}
            transition={transition}
          ></motion.div>
          <span>The best fitness club in the town</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>your</span>
          </div>
          <div>
            <span> ideal body</span>
          </div>
          <div>
            <span>
              In here we will help your body to shape and build your ideal
              living up your life to the fullest
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>
             <NumberCounter  end={4} start={0} delay='1' preFix='+'/>
              </span>
            <span>Year Experiance</span>
          </div>
          <div>
            <span>
            <NumberCounter  end={100} start={20} delay='4' preFix='+'/>
              </span>
            <span>Members joined</span>
          </div>
          <div>
            <span>
            <NumberCounter  end={50} start={10} delay='4' preFix='+'/>
              </span>
            <span>Fitness programs</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn">
            <Link to="join-us" span={true} smooth={true}>
              Get Started
            </Link>
          </button>
          <button className="btn">
            <Link to="testimonial" span={true} smooth={true}>
              Learn More
            </Link>
          </button>
        </div>
      </div>
      <div className="right-h">
        {/* Hero image */}
        <img src={hero_image} alt="" className="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
