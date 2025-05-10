'use client';

import React, { useEffect, useState } from 'react';
import Navbar from './components/nav';
import HeroSection from './components/hero';
import AboutSection from './components/about';
import FamilySection from './components/family';
import GallerySection from './components/gallery';
import DetailsSection from './components/details';
import ContactSection from './components/contact';
import Footer from './components/footer';
import HoroscopeSection from './components/horoscope';
import OccupationSection from './components/occupation';
import LifestyleSection from './components/lifestyle';
import TestimonialSection from './components/testimonials';
import MarriageLoader from './components/loader';
import BeliefsSection from './components/beliefs';
import MarriagePhilosophy from './components/philosophy';
import LetterSection from './components/lettersection';

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <MarriageLoader />;
  }

  return (
    <>
      <Navbar />
      <HeroSection />

      <MarriagePhilosophy/>

      <div id="about">
      <AboutSection />
      </div>
      <OccupationSection />
      <div id="family">
      <FamilySection />
      </div>
      <div id="details">
      <DetailsSection />
      </div>

      <HoroscopeSection />
      <LifestyleSection />

      <BeliefsSection/>

      <div id='gallery'>
      <GallerySection />
      </div>
      
      <TestimonialSection />
      <LetterSection/>
      <ContactSection />
      <Footer />
    </>
  );
};

export default Page;
