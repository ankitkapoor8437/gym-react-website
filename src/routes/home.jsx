import React from 'react'
// import '../App.css'
import Hero from '../components/hero-section/hero';
import Programs from '../components/programs-section/programs';
import Reasons from '../components/reasons-section/reasons';
import Plans from '../components/plans-section/plans';
import Testimonial from '../components/testimonial-section/testimonial';
import Join from '../components/join-section/join';
import Footer from '../components/footer-section/footer';

const Home = () => {
  return (
    <div >
        <Hero/>
        <Programs/>
        <Reasons/>
        <Plans/>
        <Testimonial/>
        <Join/>
        <Footer/>
    </div>
  )
}

export default Home;