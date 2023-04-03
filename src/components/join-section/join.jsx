import React, { useRef } from 'react'
import '../join-section/join.css'
import emailjs from '@emailjs/browser';



const Join = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vy99nuq', 'template_8hjymjl', form.current, 'vHe4ERAzZ95pTH1Kr')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <div className='join' id='join-us'>

      <div className="leftJ">
        <hr />
        <div>
          <span className='stroke-text'>Ready to</span>
          <span>Level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className='stroke-text'>with us?</span>
        </div>
      </div>

      <div className="rightJ">
        <form ref={form} className="email" onSubmit={sendEmail}>
          <input type="email" name="user_email" placeholder='Enter your Email here.' />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>

    </div>
  )
}

export default Join;