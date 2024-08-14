import React from 'react'
import './Programs.css'
import RightArrow from '../../assets/rightArrow.png'
import {programsData} from '../../data/programsData'
import { Link } from 'react-scroll'
const Programs = () => {
  return (
    <div className="Programs" id='programs'>
        {/*  Header */}
        <div className="programs-header">
            <span className='stroke-text'>Explore Our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>
        <div className='program-categories'>
            {programsData.map((program)=>(
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span><Link to='join-us'smooth={true} >Join Now  -{'>'}</Link></span>
                       
                    </div>
                </div>
            ))}

        </div>
        
    </div>
  )
}

export default Programs
