import Hero from '@/components/Hero';
import OurServices from '@/components/OurServices';
import WantUsToCallYou from '@/components/WantUsToCallYou';
import WhatWeOffer from '@/components/WhatWeOffer';
import Footer from '@/components/Footer'
export default function Home() {
  return (
    <div className='shadow-2xl shadow-amber-900'>

      
      <Hero />
      <OurServices/>
      <WhatWeOffer/>
      <WantUsToCallYou/>
      <Footer/>
      
    </div>
  )
}

