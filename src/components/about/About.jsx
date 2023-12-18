import React from 'react'
import './about.css'
import ME from '../../assets/me1.jpg'
import {FaAward} from 'react-icons/fa'
import {HiOutlineUsers} from 'react-icons/hi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {SiUpwork} from 'react-icons/si'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="ME" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years Working Experience</small>
            </article>
            <article className="about__card">
              <HiOutlineUsers className='about__icon'/>
              <h5>Projects</h5>
              <small>+50 Projects Ended</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Clients</h5>
              <small>+20 Clients Happy</small>
            </article>
          </div>
          <br />
          <p>
            I'm Ramzi Ben. I'm Full Stack Developer. I have experience of +3 years as a full stack developer.
            I love learn, travel, create new products and software's 😎😎😎.

          </p>

          <a href="#contact" className='btn btn-primary'>Contact Me</a>
          <a href="https://www.upwork.com/freelancers/~018d2cf7cd086a663e" className='btn btn-primary'>Hire ME On Upwork<SiUpwork id='upwork'/></a>

        </div>
      </div>
    </section>
  )
}

export default About
