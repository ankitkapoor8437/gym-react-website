import React from 'react'
import '../plans-section/plans.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
const Plans = () => {
  return (
    <div className='plans-container' id='plans-container'>
      <div className="blur planblur1" ></div>
      <div className="blur planblur2"></div>
      <div className="programs-header" style={{ gap: "2rem", }}>
        <span className='stroke-text'>READY TO START</span>YOUR JOURNEY<span className='stroke-text'>NOW WITHUS</span><span></span>
      </div>

      {/* Plans Card */}
      <div className="plans">
        {plansData.map((value, index) => (
          <div className="plan" key={index}>
            {value.icon}
            <span>{value.name}</span>
            <span>$ {value.price}</span>

            <div className="features">
              {value.features.map((feature, index) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={index}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            <div><span>See more benefits -> </span></div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plans;