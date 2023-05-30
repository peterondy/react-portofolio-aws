import React from 'react'
import './experience.css'
import {HiBadgeCheck} from 'react-icons/hi'
import {TbApi} from 'react-icons/tb'
import {BsWordpress} from 'react-icons/bs'
import {DiJqueryLogo} from 'react-icons/di'
import {RiReactjsLine} from 'react-icons/ri'
import {DiJavascript1} from 'react-icons/di'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {FaBootstrap} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {FaPhp} from 'react-icons/fa'
import {DiDjango} from 'react-icons/di'
import {SiMysql} from 'react-icons/si'
import {FaAws} from 'react-icons/fa'
import {DiMongodb} from 'react-icons/di'
import {SiFirebase} from 'react-icons/si'
import {SiSqlite} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <AiFillHtml5 className='experience__detail-icon' />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <IoLogoCss3 className='experience__detail-icon' />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <DiJavascript1 className='experience__detail-icon' />
                <dir>
                  <h4>JavaScript</h4>
                  <small className="text-light">Experienced</small>
                </dir>
              </article>
              <article className="experience__details">
                <RiReactjsLine className='experience__detail-icon' />
                <div>
                  <h4>ReactJS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <FaBootstrap className='experience__detail-icon' />
                <SiTailwindcss className='experience__detail-icon' />
                <div>
                  <h4>Bootstrap & Tailwind</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <DiJqueryLogo className='experience__detail-icon' />
                <div>
                  <h4>JQuery</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <TbApi className='experience__detail-icon' />
                <div>
                  <h4>APIs</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsWordpress className='experience__detail-icon' />
                <div>
                  <h4>WordPress</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>
          <div className="experience__backend">
          <h3>Backend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <FaNodeJs className='experience__detail-icon' />
                <div>
                  <h4>NodeJS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <FaPhp className='experience__detail-icon' />
                <div>
                  <h4>PHP</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <DiDjango className='experience__detail-icon' />
                <div>
                  <h4>Python/Django</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <SiMysql className='experience__detail-icon' />
                <div>
                  <h4>MySQL</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <FaAws className='experience__detail-icon' />
                <div>
                  <h4>AWS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <DiMongodb className='experience__detail-icon' />
                <div>
                  <h4>MongoDB</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <SiFirebase className='experience__detail-icon' />
                <div>
                  <h4>Firebase</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <SiSqlite className='experience__detail-icon' />
                <div>
                  <h4>SQLite</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Experience
