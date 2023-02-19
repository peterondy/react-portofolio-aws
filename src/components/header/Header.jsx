import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

import Typewriter from "typewriter-effect";


const Header = () => {
  return (
    
    <header id='home'>
      <div className="container headar__container">
         <h5>Hello I'm </h5>
         <h1>Ramzi Ben. </h1>
         <h5 className="text-light">I'm a
          <Typewriter
              onInit={(typewriter)=> {
              typewriter
              .typeString("Full Stack Web Developer")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Full Stack Javascript Developer")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Full Stack Python Developer")
              .pauseFor(1000)
              .deleteAll()
              .typeString("WordPress Developer")
              .start();
              }}
            />
          </h5>
         <CTA />
         
         <img className='me' src={Me} alt='Me'/>
         <HeaderSocials />
         
      </div>
    </header>
  )
}

export default Header
