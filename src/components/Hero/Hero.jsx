import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import NumberCounter from 'number-counter';
import hero_image from "../../assets/hero_image.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  const transition = { type: "spring", duration: 3, stiffness: 30, damping: 15, mass: 1 };
  const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        
        {/* Badge */}
        <motion.div 
          className="the-best-ad"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "8px" }}
            transition={transition}
          ></motion.div>
          <span>The best fitness club in the town</span>
        </motion.div>

        {/* Hero Text */}
        <motion.div 
          className="hero-text"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.div variants={fadeIn} transition={{ duration: 0.6 }}>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </motion.div>
          <motion.div variants={fadeIn} transition={{ duration: 0.6 }}>
            <span>Ideal Body</span>
          </motion.div>
          <motion.div variants={fadeIn} transition={{ duration: 0.6 }}>
            <span>
              Transform your physique with our expert trainers and state-of-the-art facilities. 
              Join us and start your journey to a healthier, stronger you.
            </span>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="figures"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div>
            <span>
              <NumberCounter end={4} start={0} delay='1' preFix='+' duration={3}/>
            </span>
            <span>Years Experience</span>
          </div>
          <div>
            <span>
              <NumberCounter end={100} start={20} delay='4' preFix='+'/>
            </span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={10} delay='4' preFix='+'/>
            </span>
            <span>Fitness Programs</span>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
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
        </motion.div>
      </div>

      <div className="right-h">
        <div className="hero-image-back"></div>
        <motion.img 
          src={hero_image} 
          alt="Hero" 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    </div>
  );
};

export default Hero;
