'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import me from '@/public/me.jpg'

import { FaLinkedinIn } from "react-icons/fa6"
import { CiYoutube } from "react-icons/ci"
import { FaPinterestP } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaEarthAfrica } from "react-icons/fa6"
import { SiUpwork } from "react-icons/si"
import { CiTwitter } from "react-icons/ci"
import { TbBrandTelegram } from "react-icons/tb"

import './main.css'
export default function Main () {

    const downloadFile = async () => {
        const response = await fetch(`https://docs.google.com/document/d/12CNq3k_RrZe1UvQ0jttq0rdGo1rPUBR42DTPz5i6Ftk/export?format=pdf`);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'MyCV.pdf');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      };

    return (
        <main className="main flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <div className='imagecontent float-left'>
                    <div className=''>
                        <Image src={me} className='imgme rounded mb-8' width={300} height={300} alt='My Image' />
                        <div className='socialmedialinks w-[calc(100% - 5rem)]'>
                            <Link href='https://ramziben.github.io/' title='My official website' target='_blank' className='inline-block mr-2'><FaEarthAfrica className='text-sky-500 hover:text-sky-600 text-4xl'/></Link>
                            <Link href='https://www.linkedin.com/in/ramziben/' title='Linkedin' target='_blank' className='inline-block mr-2'><FaLinkedinIn className='text-sky-500 hover:text-sky-600 text-4xl'/></Link>
                            <Link href='https://www.youtube.com/@i100tech3' title='Youtube' target='_blank' className='inline-block mr-2'><CiYoutube className='text-sky-500 hover:text-sky-600 text-4xl'/></Link>
                            <Link href='https://www.pinterest.com/ramziben10' title='Pinterest' target='_blank' className='inline-block mr-2'><FaPinterestP className='text-sky-500 hover:text-sky-600 text-4xl'/></Link>
                            <Link href='https://github.com/peterondy' title='Gitub Account' target='_blank' className='inline-block mr-2'><FaGithub className='text-sky-500 hover:text-sky-600 text-4xl'/></Link>
                            <Link href='https://twitter.com/ramzibenchadi' title='Twitter Account' target='_blank' className='inline-block mr-2'><CiTwitter className='text-sky-500 hover:text-sky-600 text-4xl'/></Link>
                            <Link href='https://t.me/+213663644389' title='Telegram Account' target='_blank' className='inline-block mr-2'><TbBrandTelegram className='text-sky-500 hover:text-sky-600 text-4xl'/></Link>
                        </div>
                    </div>
                </div>
                <div className='informationscontent w-[60%] float-right'>
                    <h1 className='text-4xl'>About ME :</h1>
                    <p className='mt-4 text-2xl indent-[20px] text-sky-50'>- Software engineer have a Bachelor degree in Computer science. And now I'm study distributed computing system engineer and security in University of Batna 2. I have also a profesional certificate from Google in Fundamental of Digital arketing in 2021.</p>
                    <p className='mt-4 text-2xl indent-[20px] text-sky-50'>- I love programming, learning and discover new more things in this world.</p>
                    <p className='mt-4 text-2xl indent-[20px] mb-8 text-sky-50'>- Contact me for free for any project or collaboration.</p>
                    <div className='buttons'>
                    <Link href='#contact' title='Contact Me For Free' target='_blank' className='rounded py-4 px-8 bg-[#5c7d8f] text-white hover:bg-[#8cb3c2]'>Contact me</Link>
                    <button onClick={downloadFile}  className='rounded py-4 px-8 bg-[#5c7d8f] text-white hover:bg-[#8cb3c2] mx-2' target="_blank" rel="noopener noreferrer">
                        Download My CV
                    </button>
                    <Link href='https://upwork.com/freelancers/ramziben' title='Hire Me On Upwork' target='_blank' className='rounded py-4 px-8 bg-[#5c7d8f] text-white hover:bg-[#8cb3c2] inline-flex'><SiUpwork className='mt-1 mr-2'/> Hire ME</Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

