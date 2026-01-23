import React from 'react'
import './Programs.css'
import { programsData } from '../../data/programsData'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Programs = () => {
  return (
    <div className="Programs" id='programs'>
      {/* Header */}
      <motion.div 
        className="programs-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className='stroke-text'>Explore Our</span>
        <span>Programs</span>
        <span className='stroke-text'>To Shape You</span>
      </motion.div>

      {/* Program Cards */}
      <div className='program-categories'>
        {programsData.map((program, index) => (
          <motion.div 
            className="category" 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>
                <Link to='join-us' smooth={true}>
                  Join Now →
                </Link>
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Programs
