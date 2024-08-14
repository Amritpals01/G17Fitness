import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import nb from '../../assets/nb.png'
import tick from '../../assets/tick.png'
const Reasons = () => {
  return (
   <div className="Reasons" id='reasons'>
    <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        
        
    </div>
    <div className="right-r">
        <span>Some reasons</span>

        <div>
            <span className='stroke-text'>why </span>
            <span>choose us?</span>
        </div>
        
        <div className='details-r'>
            <div>
                <img src={tick} alt="" />
                <span>OVER +4 YEARS EXPERIANCE</span>
            </div>
            <div>
                <img src={tick} alt="" />
                <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
            </div>
            <div>
                <img src={tick} alt="" />
                <span>1 FREE PROGRAM FOR NEW MEMBER</span>
            </div>
            <div>
                <img src={tick} alt="" />
                <span>RELIABLE PARTNERS </span>
            </div>
        </div>
        <span style={{
            color : 'var(--gray)',
            fontWeight : 'normal',
            fontSize : 'small'
        }}>OUR PARTNERS:</span>
        <div className='partners'>
            <img src={nb} alt="" />
        </div>
    </div>
   </div>
  )
}

export default Reasons
