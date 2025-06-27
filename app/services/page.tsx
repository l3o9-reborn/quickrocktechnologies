 import React from 'react'
 import Nav from '@/components/Nav'
 import CustomHero from '@/components/CustomHero'
import OurServices from '@/components/OurServices'
import WantUsToCallYou from '@/components/WantUsToCallYou'
import Footer from '@/components/Footer'
 
 function Services() {
   return (
     <div className='shadow-2xl shadow-amber-600'>
        <Nav/>
        <CustomHero
            heading='Our Services'
            subheading=''
        />
        <OurServices/>
        <WantUsToCallYou/>
        <Footer/>
     </div>
   )
 }
 
 export default Services