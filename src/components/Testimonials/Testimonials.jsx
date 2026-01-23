import React, { useState } from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'

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
      <div className="left-t">
        <span>Testimonials</span>
        <span className='stroke-text'>What They</span>
        <span>Say About Us</span>

        <span key={selected} className="review-text">
          {testimonialsData[selected].review}
        </span>

        <span>
          <span style={{ color: 'var(--primary)', fontWeight: '700' }}>
            {testimonialsData[selected].name}
          </span>
          {' '}- {testimonialsData[selected].status}
        </span>
      </div>

      <div className="right-t">
        <div></div>
        <div></div>

        <img
          key={selected}
          src={testimonialsData[selected].image}
          alt={testimonialsData[selected].name}
        />

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
      </div>
    </div>
  )
}

export default Testimonials
