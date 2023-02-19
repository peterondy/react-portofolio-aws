import React from 'react'
import CV from '../../assets/cv.pdf'
import {SiUpwork} from 'react-icons/si'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="https://www.upwork.com/freelancers/~018d2cf7cd086a663e" className='btn btn-primary' target='_blank'>Hire ME On Upwork<SiUpwork id='upwork'/></a>
    </div>
  )
}

export default CTA
