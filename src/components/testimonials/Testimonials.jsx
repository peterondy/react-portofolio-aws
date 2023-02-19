import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpeg'
import AVTR2 from '../../assets/avatar2.jpeg'
import AVTR3 from '../../assets/avatar3.jpeg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const data = [
  {
    avatar: AVTR1,
    name: 'David Shaulov',
    review: 'Ramzi is quick to understand and design. I got mine platform in a few hours. I will deal with him in the future..'
  },
  {
    avatar: AVTR2,
    name: 'Amina Nada',
    review: 'He solves things in an easy and simple way. Happy to deal with him..'
  },
  {
    avatar: AVTR3,
    name: 'He knows very well what he is doing as long as you tell him the details. He is organized, easy to deal with, and loves to help people. I highly recommend him and will deal with him in the future.',
    review: 'Thank you.'
  },
  {
    avatar: AVTR4,
    name: 'Romina Ilina-Posea',
    review: 'I am very happy to deal with him.'
  },
]
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
          spaceBetween={40}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
        {
          data.map(({avatar, name, review}, index)=>{
            return(
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar 1" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials