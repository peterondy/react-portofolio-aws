// components/Footer.js
import React from 'react'
import './footer.css'
import Link from 'next/link'

import { FaLinkedinIn } from "react-icons/fa6"
import { CiYoutube } from "react-icons/ci"
import { FaPinterestP } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaEarthAfrica } from "react-icons/fa6"
import { SiUpwork } from "react-icons/si"
import { CiTwitter } from "react-icons/ci"
import { TbBrandTelegram } from "react-icons/tb"
import { IoLogoWhatsapp } from "react-icons/io5";

export default function Footer ()  {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-center py-4">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-4 float-right mt-4 mr-4">
          <Link className='text-3xl text-[#172c3d] hover:text-[#254967]' href="https://www.linkedin.com/" title='Facebook Account' target="_blank" rel="noopener noreferrer">
           <FaEarthAfrica/>
          </Link>
          <Link className='text-3xl text-[#172c3d] hover:text-[#254967]' href="https://www.linkedin.com/" title='Facebook Account' target="_blank" rel="noopener noreferrer">
           <FaLinkedinIn/>
          </Link>
          <Link className='text-3xl text-[#172c3d] hover:text-[#254967]' href="https://www.linkedin.com/" title='Facebook Account' target="_blank" rel="noopener noreferrer">
           <CiYoutube/>
          </Link>
          <Link className='text-3xl text-[#172c3d] hover:text-[#254967]' href="https://www.linkedin.com/" title='Facebook Account' target="_blank" rel="noopener noreferrer">
           <FaPinterestP/>
          </Link>
          <Link className='text-3xl text-[#172c3d] hover:text-[#254967]' href="https://www.linkedin.com/" title='Facebook Account' target="_blank" rel="noopener noreferrer">
           <FaGithub/>
          </Link>
          <Link className='text-3xl text-[#172c3d] hover:text-[#254967]' href="https://www.linkedin.com/" title='Facebook Account' target="_blank" rel="noopener noreferrer">
           <SiUpwork/>
          </Link>
          <Link className='text-3xl text-[#172c3d] hover:text-[#254967]' href="https://www.linkedin.com/" title='Facebook Account' target="_blank" rel="noopener noreferrer">
           <CiTwitter/>
          </Link>
          <Link className='text-3xl text-[#172c3d] hover:text-[#254967]' href="https://www.linkedin.com/" title='Facebook Account' target="_blank" rel="noopener noreferrer">
           <TbBrandTelegram/>
          </Link>
          <Link className='text-3xl text-[#172c3d] hover:text-[#254967]' href="https://www.linkedin.com/" title='Facebook Account' target="_blank" rel="noopener noreferrer">
           <IoLogoWhatsapp/>
          </Link>
          {/* Add more social media links as needed */}
        </div>
        <p className="mt-4 float-left">&copy; {currentYear} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  )
}

