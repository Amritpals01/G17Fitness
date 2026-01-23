import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import nb from '../../assets/nb.png'
import tick from '../../assets/tick.png'

const Reasons = () => {
  const reasons = [
    "OVER +4 YEARS EXPERIENCE",
    "TRAIN SMARTER AND FASTER THAN BEFORE",
    "1 FREE PROGRAM FOR NEW MEMBER",
    "RELIABLE PARTNERS"
  ];

  return (
    <div className="Reasons" id='reasons'>
      <div className="left-r">
        <img src={image1} alt="Fitness" />
        <img src={image2} alt="Training" />
      </div>

      <div className="right-r">
        <span>Some Reasons</span>

        <div>
          <span className='stroke-text'>Why </span>
          <span>Choose Us?</span>
        </div>

        <div className='details-r'>
          {reasons.map((reason, index) => (
            <div key={index}>
              <img src={tick} alt="" />
              <span>{reason}</span>
            </div>
          ))}
        </div>

        <span className="partners-label">OUR PARTNERS</span>
        <div className='partners'>
          <img src={nb} alt="New Balance" />
        </div>
      </div>
    </div>
  )
}

export default Reasons
