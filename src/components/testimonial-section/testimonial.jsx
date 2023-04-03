import React, { useState } from 'react';
import '../testimonial-section/testimonial.css';
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'


const Testimonial = () => {
  const [value, setValue] = useState(0);
  const tLength = testimonialsData.length;
  return (
    <div className="testimonials">
      <div className="leftT">
        <span>Testimonials</span>
        <span className='stroke-text'>What they</span>
        <span>say about us</span>

        <span>{testimonialsData[value].review}</span>
        <span>
          <span style={{ color: 'var(--orange)' }}>
            {testimonialsData[value].name}
          </span> {' '}
          - {testimonialsData[value].status}
        </span>


      </div>
      <div className="rightT">
        <div></div>
        <div></div>
        <img src={testimonialsData[value].image} alt="" />

        <div className="arrows">
          <img
            onClick={() => {
              value === 0
                ? setValue(tLength - 1)
                : setValue((prev) => prev - 1);
            }}
            src={leftArrow} alt="" />

          <img
            onClick={() => {
              value === tLength - 1
                ? setValue(0)
                : setValue((next) => next + 1);
            }}
            src={rightArrow} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Testimonial;