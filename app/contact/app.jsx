'use client'

import Link from 'next/link'
import Image from 'next/image'
//import Head from 'next/head'
import React, { useRef } from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsWhatsapp} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'
import emailjs from 'emailjs-com'

export default function Contact() {

    const form = useRef()

    const sendEmail = (e) => {
      e.preventDefault()
  
      emailjs.sendForm('service_58auz9y', 'template_80x4y2q', form.current, '52h9hmi2jHLeQiaMJ')
        .then((result) => {
            console.log(result.text)
            alert('Message Send.Thank you for your message. I will contact you as soon as possible. ')
            e.target.reset()
        }, (error) => {
            console.log(error.text)
        })
    }

    return (
        <>
            <section id="contact">
                <div>
                    <h5 className='text-center text-2xl font-bold'>Get In Touch</h5>
                    <h2 className='text-center font-bold my-4'>Contact Me</h2>
                    <div className="container contact__container">
                        <form ref={form} onSubmit={sendEmail}>
                            <input type='text' className='rounded' name='name' placeholder='Your Full Name' required/>
                            <input type='text' className='rounded' name='subject' placeholder='Enter the subject' required/>
                            <input type="email" className='rounded' name='email' placeholder='Your Email' required/>
                            <textarea name="message" className='rounded' cols="30" rows="10" required placeholder='Your Message'></textarea>
                            <div>
                                <button type='submit' className='float-right bg-[#5c7d8f] text-white hover:bg-[#8cb3c2] px-4 py-2 rounded'>Send A Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
