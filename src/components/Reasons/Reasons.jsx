import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import nb from '../../assets/nb.png'
import tick from '../../assets/tick.png'
import { motion } from 'framer-motion'

const Reasons = () => {
  const reasons = [
    "OVER +4 YEARS EXPERIENCE",
    "TRAIN SMARTER AND FASTER THAN BEFORE",
    "1 FREE PROGRAM FOR NEW MEMBER",
    "RELIABLE PARTNERS"
  ];

  return (
    <div className="Reasons" id='reasons'>
      <motion.div 
        className="left-r"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img src={image1} alt="Fitness" />
        <img src={image2} alt="Training" />
      </motion.div>

      <motion.div 
        className="right-r"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span>Some Reasons</span>

        <div>
          <span className='stroke-text'>Why </span>
          <span>Choose Us?</span>
        </div>

        <div className='details-r'>
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={tick} alt="" />
              <span>{reason}</span>
            </motion.div>
          ))}
        </div>

        <span className="partners-label">OUR PARTNERS</span>
        <div className='partners'>
          <img src={nb} alt="New Balance" />
        </div>
      </motion.div>
    </div>
  )
}

export default Reasons
