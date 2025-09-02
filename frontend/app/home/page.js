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
      <section id="hero" className="scroll-mt-20">
        <Hero />
      </section>

      <section id="projects" className="scroll-mt-20">
        <HowItWorks />
      </section>

      <section id="innovators" className="scroll-mt-20">
        <InnovatorsGallery />
      </section>

      <section id="cta" className="scroll-mt-20">
        <CtaButtons />
      </section>

      <section id="events" className="scroll-mt-20">
        <ImageGallery />
      </section>

      <section id="partners" className="scroll-mt-20">
        <PartnersSection />
      </section>

      <section id="about" className="scroll-mt-20">
        <EmailSignup />
      </section>
    </>
  );
}

export default Home
