import React from 'react'
import Nav from '@/components/Nav'
import CustomHero from '@/components/CustomHero'
import HeadWithParagraph from '@/components/HeadWithParagraph'
import Benefits from '@/components/Benefits'
import WantUsToCallYou from '@/components/WantUsToCallYou'
import Footer from '@/components/Footer'




function AboutPage() {
  return (
    <div className='shadow-2xl shadow-pink-900'>
        <Nav/>
        <CustomHero 
            heading='We Are QuickRock'
            subheading='A Software Solution Provider'
        />
       <HeadWithParagraph
            heading={`<span class='inline-block text-red-500'>WHO</span> WE ARE`}
            paragraph={'QuickRock is a premier provider of software development and testing services. Having talented software engineers on board, we craft compelling web, desktop, and mobile applications for our clients. <br/> Since our inception, we have partnered with numerous companies and delivered operational gains to startup, emerging, and established  organizations all over the world'}
        />
        <Benefits/>
        <WantUsToCallYou />
        <Footer/>

      </div>
  )
}

export default AboutPage