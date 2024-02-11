'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FaRegFaceGrinStars } from "react-icons/fa6"
import { BsEmojiSunglasses } from "react-icons/bs";
import './services.css'
export default function Services () {
 
  const cardData = [
      {
          id : 1,
          image: 'https://images.unsplash.com/photo-1573497019779-4e4ce7b4f5e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1',
          name: 'Mern stack development',
          description: 'Create full website using MERN technologies',
          services: {
              service1: 'Custom Web Application Development',
              service2: 'API Development',
              service3: 'Mobile App Development (using React Native)',
              service4: 'Web App Development (using Next JS)',
              service5: 'CMS Development',
          }
      },
      {
          id : 2,
          image: 'https://images.unsplash.com/photo-1573497019779-4e4ce7b4f5e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1',
          name: 'Open Source Projects',
          description: 'Participate in open source communities',
          services: {
              service1: 'Development Contribution',
              service2: 'Code contributions',
              service3: 'Documentation improvements',
              service4: 'Community Management',
              service5: 'Marketing, Management & Promotion',
          }
      },
      {
          id : 3,
          image: 'https://images.unsplash.com/photo-1573497019779-4e4ce7b4f5e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1',
          name: 'Single page application (SPA) development',
          description: 'Create single page application (SPA) using React js & Next js',
          services: {
              service1: 'Full-stack SPA Development',
              service2: 'Single page Application Modernization',
              service3: 'SPA Performance Optimization:',
              service4: 'SEO Optimization',
              service5: 'Analytics and Reporting',
          }
      },
      {
          id : 4,
          image: 'https://images.unsplash.com/photo-1573497019779-4e4ce7b4f5e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1',
          name: 'Develop Saas & Startup\'s',
          description: 'Develop & Create your Startup idea',
          services: {
              service1: 'Help startups launch quickly and efficiently',
              service2: 'MVP Development and Prototyping',
              service3: 'API Development and Integrations',
              service4: 'Offer additional services',
              service5: 'Ongoing Maintenance and Support',
          }
      },
      {
          id : 5,
          image: 'https://images.unsplash.com/photo-1573497019779-4e4ce7b4f5e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1',
          name: 'Create & Develop Web App\s',
          description: 'Develop your full web app',
          services: {
              service1: 'Web App On Demand',
              service2: 'Bespoke Web App Development',
              service3: 'API Development and Integration:',
              service4: 'Web App Maintenance and Support',
              service5: 'Accessibility Consulting',
              service6: 'SEO Optimization',
          }
      },
  ]

  const [hover, setHover] = useState(false);


  return (
    <div className='services text-center'>
        <h1 className='text-2xl bold mt-8'>Services</h1>
        <div className='cards'>
            {cardData.map((card, index) => {
                return (
                    <div key={index} className='card'>
                        <div>
                            <h3 className='mb-2 text-2xl font-bold tracking-tight'>{card.name}</h3>
                            <p>{card.description}</p>
                            <ul>
                                {Object.keys(card.services).map((service, index) => {
                                    return (
                                        <li onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
                                            key={index}><div className='emoji'>{hover ? <BsEmojiSunglasses className='float-left mr-4 text-2xl' /> :<FaRegFaceGrinStars className='float-left mr-4 text-2xl' />} </div> <span>{card.services[service]}</span></li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  );
}