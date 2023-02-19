import React from 'react'
import './services.css'
import {HiCheck} from 'react-icons/hi'
import {BsWordpress} from 'react-icons/bs'
import {CgWebsite} from 'react-icons/cg'
import {FiSettings} from 'react-icons/fi'

const Services = () => {
  return (
    <section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3><BsWordpress /> WordPress Development</h3>
            </div>
            <ul className="service__list">
              <li>
                <HiCheck />
                <p>Setup Wordpress on your host.</p>  
              </li>
              <li>
                <HiCheck />
                <p>Setup plugins & themes.</p>  
              </li>
              <li>
                <HiCheck />
                <p>Create, Edit, Update Themes & Plugins.</p>  
              </li>
              <li>
                <HiCheck />
                <p>Wrodpress Ecommerce.</p>  
              </li>
              <li>
                <HiCheck />
                <p>Wordpress Saas.</p>  
              </li>
              <li>
                <HiCheck />
                <p>Wordpress Landing Page.</p>  
              </li>
              <li>
                <HiCheck />
                <p>Update & Redisign.</p>  
              </li>
              <li>
                <HiCheck />
                <p>Using plugins like Elementor, Divi, Aios, Wpforms.</p>  
              </li>
              <li>
                <HiCheck />
                <p>Fix Errors & Isssues.</p>  
              </li>
              <a href="https://www.upwork.com/services/product/development-it-a-responsive-amazing-and-modern-wordpress-website-1616430225200214016?ref=fl_profile" className="btn btn-primary" target='_blank'>Go To Upwork</a>
            </ul>
          </article>
          <article className="service">
            <div className="service__head">
              <h3><CgWebsite /> Web Development</h3>
            </div>
            <ul className="service__list">
              <li>
                <HiCheck />
                <p>Create Web Apps.</p>  
              </li>
              <li>
                <HiCheck />
                <p>Create Startup websites.</p>  
              </li>
              <li>
                <HiCheck />
                <p>Create Saas.</p>  
              </li>
              <li>
                <HiCheck />
                <p>Create Landing Page.</p>  
              </li>
              <li>
                <HiCheck />
                <p>Full Stack Development.</p>  
              </li>
              <li>
                <HiCheck />
                <p>Ecommerce Development.</p>  
              </li>
            </ul>
          </article>
          <article className="service">
            <div className="service__head">
              <h3><FiSettings /> Update, Redisign & Fix errors</h3>
            </div>
            <ul className="service__list">
              <li>
                <HiCheck />
                <p>Update & Redisign existing websites.</p>  
              </li>
              <li>
                <HiCheck />
                <p>Fix Errors & Issues.</p>  
              </li>
              <li>
                <HiCheck />
                <p>Create custom web app.</p>  
              </li>
              <li>
                <HiCheck />
                <p>React JS & Node JS development.</p>  
              </li>
              <li>
                <HiCheck />
                <p>PHP development.</p>  
              </li>
              <li>
                <HiCheck />
                <p>Django development.</p>  
              </li>
            </ul>
          </article>
        </div>
    </section>
  )
}

export default Services
