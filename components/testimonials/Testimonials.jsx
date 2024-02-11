import React from 'react'
import './testimonials.css'
import Me from '@/public/me.jpg'
import Image from 'next/image'
import ziad from '@/public/ziad.jpg'
import nada from '@/public/nada.jpeg'
import david from '@/public/david.jpeg'
import { FaRegStar } from "react-icons/fa";

const Testimonials = () => {

    const testimonials = [
        {
          name: 'David Shaulov',
          rate: 5,
          role: 'Staff Engineer, Algolia',
          image: david, // Replace with your image URL
          testimonial:
            'Ramzi is quick to understand and design. I got mine platform in a few hours. I will deal with him in the future.',
        },
        {
            name: 'Amina Nada',
            rate: 4,
            role: 'Staff Engineer, Algolia',
            image: nada, // Replace with your image URL
            testimonial:
              'He solves things in an easy and simple way. Happy to deal with him.',
          },
          {
            name: 'Ziad Majed',
            rate: 5,
            role: 'Staff Engineer, Algolia',
            image: '', // Replace with your image URL
            testimonial:
              'He knows very well what he is doing as long as you tell him the details. He is organized, easy to deal with, and loves to help people. I highly recommend him and will deal with him in the future.',
          },
          {
            name: 'Celian Van',
            rate: 5,
            role: 'Staff Engineer, Algolia',
            image: '', // Replace with your image URL
            testimonial:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.',
          },
          {
            name: 'Celian Van',
            rate: 5,
            role: 'Staff Engineer, Algolia',
            image: '', // Replace with your image URL
            testimonial:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.',
          },
          {
            name: 'Toxic Kappa',
            rate: 5,
            role: 'Staff Engineer, Algolia',
            image: '', // Replace with your image URL
            testimonial:
              'I highly recommend Ramzi. I will deal with him in the future. He really loves helping people.',
          },
        // Add more testimonials as needed
      ];

    return (
        <section className='testimonials py-12' id='testimonials'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                <h1 className="text-4xl font-bold tracking-wide uppercase">Testimonials</h1>
                <h5 className="mt-2 text-3xl leading-8 tracking-tight text-gray-900 sm:text-4xl">
                    Our customers love us
                </h5>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="relative testimonial">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md text-white">
                                        <Image src={testimonial.image} className='rounded-full' width={100} height={100}></Image>
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-[##172c3d]">
                                        {testimonial.name} 
                                        <div className='flex float-right text-[#779cad]'>
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i}>
                                                    {i < testimonial.rate ? <FaRegStar /> : ''}
                                                </span>
                                            ))}
                                        </div>
                                    </p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-[#779cad]">{testimonial.testimonial}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    )

}

export default Testimonials