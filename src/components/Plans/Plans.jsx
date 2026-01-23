import React from 'react'
import './Plans.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Plans = () => {
  return (
    <div className="plans-container" id='plan'>
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>

      {/* Header */}
      <motion.div 
        className="programs-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className='stroke-text'>Ready To Start</span>
        <span>Your Journey</span>
        <span className='stroke-text'>Now With Us</span>
      </motion.div>

      {/* Plans */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <motion.div 
            className="plan" 
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            {plan.icon}
            <span>{plan.name}</span>
            <span>${plan.price}</span>

            <div className="features">
              {plan.features.map((feature, j) => (
                <div className="feature" key={j}>
                  <img src={whiteTick} alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See more benefits →</span>
            </div>

            <button className="btn">
              <Link to='join-us' smooth={true}>
                Join Now
              </Link>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Plans
