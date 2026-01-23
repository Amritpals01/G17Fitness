import React, { useState } from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { motion, AnimatePresence } from 'framer-motion'

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  const handlePrev = () => {
    setSelected(prev => prev === 0 ? tLength - 1 : prev - 1);
  };

  const handleNext = () => {
    setSelected(prev => prev === tLength - 1 ? 0 : prev + 1);
  };

  return (
    <div className="Testimonials" id='testimonial'>
      <motion.div 
        className="left-t"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span>Testimonials</span>
        <span className='stroke-text'>What They</span>
        <span>Say About Us</span>

        <AnimatePresence mode="wait">
          <motion.span
            key={selected}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.4 }}
          >
            {testimonialsData[selected].review}
          </motion.span>
        </AnimatePresence>

        <span>
          <span>{testimonialsData[selected].name}</span>
          {' '}- {testimonialsData[selected].status}
        </span>
      </motion.div>

      <motion.div 
        className="right-t"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 0.5, x: 0 }}
          transition={{ duration: 0.6 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 0.2, x: 0 }}
          transition={{ duration: 0.6 }}
        ></motion.div>

        <AnimatePresence mode="wait">
          <motion.img
            key={selected}
            src={testimonialsData[selected].image}
            alt={testimonialsData[selected].name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>

        <div className="arrows">
          <img 
            onClick={handlePrev} 
            src={leftArrow} 
            alt="Previous" 
          />
          <img 
            onClick={handleNext} 
            src={rightArrow} 
            alt="Next" 
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Testimonials
