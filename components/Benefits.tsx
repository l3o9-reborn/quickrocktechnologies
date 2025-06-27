import React from 'react'
import { benefits } from '@/utils/constants'

function Benefits() {
  return (
    <div className=' pb-20'>
        <h1  className='text-gray-700 font-bold text-xl p-5  md:text-4xl text-center tracking-tighter pt-20 pb-5'>BENEFITS OF WORKING WITH <span className='text-red-500'>QUICKROCK</span></h1>
        <div className='grid grid-cols-1 md:grid-cols-2 items-start justify-start gap-2  md:gap-8 pl-10 md:pl-20 mt-12'>
          {benefits.map((content) =>{ 
            const Icon = content.staticFile
            return (
            <div key={content.id} className='flex flex-col items-start justify-start mb-5'>
              <div className='w-30 h-30  md:ml-20 md:mb-10 border-3 border-red-500 rounded-full flex items-center justify-center '>
                 <Icon 
                  size={48}
                  className='inline-block text-2xl mx-auto  text-red-500'/>
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
          )})}
        </div>
    </div>
  )
}

export default Benefits