import Link from 'next/link'
import Image from 'next/image'
import Services from '@/components/services/Services'
//import styles from './Home.module.css'
import Header from '@/components/header/Header'
import Main from '@/components/main/Main'
import Projects from '@/components/projects/Projects'
import Testimonials from '@/components/testimonials/Testimonials'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Services/>
      <Projects/>
      <Testimonials/>
      <Footer/>
      
    </div>
  )
}
