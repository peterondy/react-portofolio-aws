import React, { useRef } from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsWhatsapp} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_58auz9y', 'template_e48i18f', form.current, '52h9hmi2jHLeQiaMJ')
      .then((result) => {
          console.log(result.text);
          alert('Message Send.Thank you for your message. I will contact you as soon as possible. ')
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ramzibenchadi5@gmail.com</h5>
            <a href="mailto:ramzibenchadi5@gmail.com" target='__blank'>Send A Message Using Email</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+213558683566</h5>
            <a href="https://wa.me/+213558683566" target='__blank'>Send A Message Using Whatsapp</a>
          </article>
          <article className="contact__option">
            <FaTelegramPlane className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>+213558683566</h5>
            <a href="https://t.me/+213558683566" target='__blank'>Send A Message Using Telegram</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" cols="30" rows="10" required placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send A Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
