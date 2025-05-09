import React from 'react'
import Navbar from './components/nav'
import HeroSection from './components/hero'
import AboutSection from './components/about'
import FamilySection from './components/family'
import GallerySection from './components/gallery'
import DetailsSection from './components/details'
import ContactSection from './components/contact'
import Footer from './components/footer'


const page = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <AboutSection/>
    <FamilySection/>
    <DetailsSection/>
    <GallerySection/>
    <ContactSection/>
    <Footer/>
  
    </>
  )
}

export default page