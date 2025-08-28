import React from 'react'
import Hero from './_components/Hero'
import HowItWorks from './_components/HowItWorks'
import CtaButtons from './_components/CtaButtons'
import EmailSignup from './_components/EmailSignup'
import ImageGallery from './_components/ImageGallery'
import InnovatorsGallery from './_components/InnovatorsGallery'
import PartnersSection from './_components/Partners'

const Home = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <InnovatorsGallery />
      <CtaButtons />
      <ImageGallery />
      <PartnersSection id="partners" />
      <EmailSignup />
    </>
  );
}

export default Home