import React from 'react'
import Nav from '@/components/Nav'
import CustomHero from '@/components/CustomHero'
import HeadWithParagraph from '@/components/HeadWithParagraph'
import Footer from '@/components/Footer'


function Careers() {
  return (
    <div className='shadow-2xl shadow-green-600 min-h-[100vh]'>
        <Nav/>
        <CustomHero
            heading='Careers'
            subheading='Come Work With Us'
        
        />
        <HeadWithParagraph
            heading='JOIN US'
            paragraph='At QuickRock, we foster and inspire innovative ideas to support growth and value addition. We are passionate about the work we do. Following a transparent system and keeping the communication channels open, we commute ideas and suggestions within the team. We invest in our people and offer them numerous learning and development opportunities. Join us to be a part of a visionary team.'
        
        />
        <Footer/>
    </div>
  )
}

export default Careers