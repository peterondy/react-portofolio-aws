'use client'

import Image from 'next/image'
import Link from 'next/link'
import paxontools from '@/public/paxontools.png'
import portfolio1 from '@/public/portfolio1.png'
import portfolio1 from '@/public/portfolio1.jpg'

import React, {useState,useEffect} from 'react'

export default function Slider () {
    const slides = [
        {
            id:1,
            title: 'Meteo react app',
            description: 'Meteo react app is an app to get wheather details',
            src: portfolio1,
            link:'https://github.com/peterondy/meteo-app-react'
        },
        {
            id:2,
            title: 'Paxon Tools',
            description: 'Paxon Tools is a tool that give you access to : change image extension, change image to pdf, change voice to speech, change speech to voice, etc...',
            src: paxontools,
            link:'https://paxontools.onrender.com/'
        },
        {
            id:3,
            title: 'Ecommerce Platfrom',
            description: 'Ecommerce platform an example of ecommerce app.',
            src: portfolio1,
            link:'https://github.com/peterondy/e-commerce.github.io/'
        }
    ]
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const [selectedImage, setSelectedImage] = useState(null)

  
    useEffect(() => {
        const timer = setInterval(() => {
          setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }, 5000) // Change slide every 2 seconds
    
        return () => clearInterval(timer) // Clean up on unmount
      }, [length])
  
    return (
        <div className='slides'>
            {slides.map((slide, index) => (
                <div key={index} className='slide' style={{ display: current === index ? 'block' : 'none' }}>
                    <Link href={slide.link}><Image className='rounded' src={slide.src} width={400} height={400} alt={'Slider Image '+index}></Image></Link>
                    <h2 className='mt-8 text-3xl'>{slide.id} - {slide.title}</h2>
                    <p className='text-2xl'>{slide.description}</p>
                </div>
            ))}
        </div>
    )
}
