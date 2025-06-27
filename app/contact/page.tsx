import React from 'react'
import Nav from '@/components/Nav'
import CustomHero from '@/components/CustomHero'
import WantUsToCallYou from '@/components/WantUsToCallYou'
import Footer from '@/components/Footer'

function ContactUs() {
  return (
    <div className='shadow-2xl shadow-red-600'>
        <Nav/>
        <CustomHero
            heading='Contact Us'
            subheading='Get In Touch '
        />
        <WantUsToCallYou/>
        <Footer/>
    </div>
  )
}

export default ContactUs