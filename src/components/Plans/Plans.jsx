import React from 'react'
import './Plans.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import { Link } from 'react-scroll'

const Plans = () => {
  return (
    <div className="plans-container" id='plan'>
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>

      {/* Header */}
      <div className="programs-header">
        <span className='stroke-text'>Ready To Start</span>
        <span>Your Journey</span>
        <span className='stroke-text'>Now With Us</span>
      </div>

      {/* Plans */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plans
