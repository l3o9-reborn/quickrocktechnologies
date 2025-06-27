'use client'
import React from 'react'
import { whatWeOffer } from '@/utils/constants'
import Lottie from 'lottie-react'

function WhatWeOffer() {
  return (
    <div className='py-20 px-5 md:px-10 text-center '>
         
        <h1 className='text-gray-700 font-bold text-2xl md:text-4xl text-center tracking-tighter pt-10 pb-5'>WHAT WE OFFER</h1>
        <p  className='text-gray-700 max-w-[1200px] mx-auto font-light  text-center  tracking-wide mt-2  md:px-10 leading-relaxed'>
            QuickRock Technologies works as an extension of your
             development and testing team. We will work together
              to solve your business cases and get the maximum 
              value of your budget. One of our differentiating 
              qualities is that we take the time to understand 
              the particular challenges, difficulties, and needs
               of your business
        </p>
        
        <div className='grid grid-cols-1 md:grid-cols-2 items-start justify-start mt-12 gap-8'>
          {whatWeOffer.map((content) => (
            <div key={content.id} className='flex flex-col items-start justify-start my-10'>
              <div 
              className='w-[300px] h-[275px]  md:w-[350px] md:h-[300px] flex items-center justify-center m-auto'
              >
                        <Lottie
                        animationData={content.animationFile}
                        loop={true}
                        style={{ width: '100%', height: '100%' }}
                        />
              </div>
              <div className='max-w-[500px] w-full self-stretch md:pl-22'>
                <h1
                  className='text-red-500 font-bold text-xl md:text-3xl text-left tracking-tighter'
                  dangerouslySetInnerHTML={{ __html: content.heading }}
                />
                <p className='text-gray-700 font-light flex items-center text-left tracking-wide mt-5 leading-relaxed'>
                  {content.paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default WhatWeOffer