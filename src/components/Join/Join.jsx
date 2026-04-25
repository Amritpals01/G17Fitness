import React, { useRef, useState } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = 'service_t5tfsre';
const EMAILJS_TEMPLATE_ID = 'template_hwg1pbp';
const EMAILJS_PUBLIC_KEY = 'NahMgIU9ucCnuvf3y';

const getFriendlyEmailError = (rawMessage = '') => {
  if (rawMessage.includes('Gmail_API: Invalid grant')) {
    return 'Owner action needed: Gmail connection expired in EmailJS. Please reconnect Gmail in EmailJS dashboard.';
  }

  return rawMessage || 'Email failed. Please try again.';
};

const Join = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSending(true);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setSubmitted(true);
      form.current.reset();
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      const rawMessage = error?.text || error?.message || '';
      setErrorMsg(getFriendlyEmailError(rawMessage));
      console.error('Join form email failed:', error);
    } finally {
      setIsSending(false);
    }
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
          <button type="submit" className='btn btn-j' disabled={isSending}>
            {isSending ? 'Sending...' : submitted ? '✓ Joined!' : 'Join Now'}
          </button>
        </form>
        {errorMsg && <p className="join-error">{errorMsg}</p>}
      </div>
    </div>
  )
}

export default Join
