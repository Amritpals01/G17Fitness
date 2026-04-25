import React from 'react'
import './Reasons.css'
import reason1 from '../../assets/reason-choose-1.png'
import reason2 from '../../assets/reason-choose-2.png'
import reason3 from '../../assets/reason-choose-3.png'
import reason4 from '../../assets/reason-choose-4.png'
import reason5 from '../../assets/reason-choose-5.png'
import tick from '../../assets/tick.png'

const galleryImages = [
  { src: reason1, alt: 'Coach and athlete with competition medals' },
  { src: reason2, alt: 'Client fitness transformation before and after' },
  { src: reason3, alt: 'Client progress comparison in gym' },
  { src: reason4, alt: '24 week body transformation results' },
  { src: reason5, alt: 'Body recomposition before and after' }
]

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
        {galleryImages.map(({ src, alt }) => (
          <img key={alt} src={src} alt={alt} />
        ))}
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

      </div>
    </div>
  )
}

export default Reasons
