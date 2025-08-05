import React from 'react'
import Hero from './_components/Hero'
import HowItWorks from './_components/HowItWorks'
import CtaButtons from './_components/CtaButtons'
import EmailSignup from './_components/EmailSignup'
import ImageGallery from './_components/ImageGallery'
import InnovatorsGallery from './_components/InnovatorsGallery'

const Home = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <InnovatorsGallery />
      <CtaButtons />
      <ImageGallery />
      <EmailSignup />
    </>
  );
}

export default Home