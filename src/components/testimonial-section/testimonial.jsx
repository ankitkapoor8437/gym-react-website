import React, { useState } from 'react';
import '../testimonial-section/testimonial.css';
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { motion } from 'framer-motion';


const Testimonial = () => {
  const transition = { type: 'spring', duration: 3 }
  const [value, setValue] = useState(0);
  const tLength = testimonialsData.length;
  return (
    <div className="testimonials">
      <div className="leftT">
        <span>Testimonials</span>
        <span className='stroke-text'>What they</span>
        <span>say about us</span>

        <motion.span
          key={value}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
        >{testimonialsData[value].review}</motion.span>
        <span>
          <span style={{ color: 'var(--orange)' }}>
            {testimonialsData[value].name}
          </span> {' '}
          - {testimonialsData[value].status}
        </span>


      </div>
      <div className="rightT">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          key={value}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[value].image} alt="" />

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