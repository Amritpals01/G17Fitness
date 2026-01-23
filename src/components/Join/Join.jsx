import React, { useRef, useState } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t5tfsre', 'template_hwg1pbp', form.current, 'NahMgIU9ucCnuvf3y')
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
          form.current.reset();
          setTimeout(() => setSubmitted(false), 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="Join" id='join-us'>
      <div className="left-j">
        <hr />
        <div>
          <span className='stroke-text'>Ready To</span>
          <span> Level Up</span>
        </div>
        <div>
          <span>Your Body</span>
          <span className='stroke-text'> With Us?</span>
        </div>
      </div>

      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input 
            type="email" 
            name="user_email" 
            placeholder='Enter your email to get started'
            required
          />
          <button type="submit" className='btn btn-j'>
            {submitted ? '✓ Joined!' : 'Join Now'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Join
