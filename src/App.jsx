import React from 'react'
import Header from './components/header/Header'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Nav from './components/nav/Nav'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'
import Services from './components/services/Services'
import Portofolio from './components/portofolio/Portofolio'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portofolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
