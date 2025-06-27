'use client'
import React from 'react'
import { serviceContents } from '@/utils/constants'
import Lottie from 'lottie-react'

function OurServices() {
  return (
    <div className=' px-5 md:px-10 py-20 bg-gray-50'>
        <h1 className='text-gray-700 font-bold text-2xl md:text-4xl text-center tracking-tighter pt-10 pb-5'>OUR SERVICES</h1>
        <p  className='text-gray-700 w-[100%] font-light  text-center  tracking-wide mt-2  md:px-10 leading-relaxed'>
            We build software development teams that grow with our clients,
             from the early stages to whatever they aspire to be. 
             Our expertise includes front-end, backend, database,
              and server solutions for mobile, web, and desktop 
              applications. Our purpose is to provide our clients 
              with expert guidance and to build software vital to 
              their organizations.</p>
    {
        serviceContents.map((content)=>{
          return   <div key={content.id} className={`flex ${content.id & 1 ? 'flex-col-reverse' : 'flex-col'} md:flex-row justify-between items-center my-auto mt-12 pb-10`}>
           {(content.id & 1)? (
            <div 
                 className='w-[300px] h-[275px]  md:w-[350px] md:h-[300px] flex items-center justify-center m-auto'
            >
                        <Lottie
                        animationData={content.animationFile}
                        loop={true}
                        style={{ width: '100%', height: '100%' }}
                        />
                    </div>):null}
            <div className='my-auto max-w-[400px] px:40 py:30 mx-auto'>
                <h1
                    className='text-red-500 font-bold text-xl md:text-3xl text-left md:text-left tracking-tighter'
                    dangerouslySetInnerHTML={{ __html: content.heading }}
                />
                <p className='text-gray-700  font-light flex items-center  text-left  md:text-left tracking-wide mt-5 leading-relaxed '>
                    {content.paragraph}
                </p>
            </div>

            {!(content.id & 1)? 
                   ( <div 
                    className='w-[300px] h-[275px]  md:w-[350px] md:h-[300px] flex items-center justify-center m-auto'
                   >
                        <Lottie
                        animationData={content.animationFile}
                        loop={true}
                        style={{ width: '100%', height: '100%' }}
                        />
                    </div>)
            : null}
        </div>
        })
    }

    </div>
  )
}

export default OurServices