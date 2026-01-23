import React, { useRef, useState } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'

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
      <motion.div 
        className="left-j"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <hr />
        <div>
          <span className='stroke-text'>Ready To</span>
          <span> Level Up</span>
        </div>
        <div>
          <span>Your Body</span>
          <span className='stroke-text'> With Us?</span>
        </div>
      </motion.div>

      <motion.div 
        className="right-j"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
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
      </motion.div>
    </div>
  )
}

export default Join
