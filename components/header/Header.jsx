import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import './header.css'

export default function Header() {
  return (
    <header>
        <nav className="border-gray-200">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/" className='flex items-center text-[#1c364b] space-x-3 rtl:space-x-reverse text-4xl'>Ramzi Benchadi</Link>
            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
                <li>
                    <Link href='/' className='block py-2 px-3  text-[#1c364b] bg-blue-700 rounded md:bg-transparent md:text-blue-[#477091] md:p-0 dark:text-white md:dark:text-blue-500' aria-current='page'>Home</Link>
                </li>
                <li>
                    <Link href='#services' className='block py-2 px-3  text-[#1c364b] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-[#477091] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Services</Link>
                </li>
                <li>
                    <Link href='#projects' className='block py-2 px-3  text-[#1c364b] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-[#477091] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Projects</Link>
                </li>
                <li>
                    <Link href='#testimonials' className='block py-2 px-3  text-[#1c364b] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-[#477091] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Testimonials</Link>
                </li>
                <li>
                    <Link href='/contact' className='block py-2 px-3  text-[#1c364b] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-[#477091] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Contact</Link>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    </header>
  )
}

