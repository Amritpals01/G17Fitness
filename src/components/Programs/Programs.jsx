import React from 'react'
import './Programs.css'
import { programsData } from '../../data/programsData'
import { Link } from 'react-scroll'

const Programs = () => {
  return (
    <div className="Programs" id='programs'>
      {/* Header */}
      <div className="programs-header">
        <span className='stroke-text'>Explore Our</span>
        <span>Programs</span>
        <span className='stroke-text'>To Shape You</span>
      </div>

      {/* Program Cards */}
      <div className='program-categories'>
        {programsData.map((program, index) => (
          <div className="category" key={index}>
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default Programs
