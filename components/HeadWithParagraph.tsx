import React from 'react'

function HeadWithParagraph({heading, paragraph}:{heading:string , paragraph: string}) {
  return (
     <div className=' px-5 md:px-10 py-20 bg-gray-50'>
        <h1 
         dangerouslySetInnerHTML={{ __html: heading }}
            className='text-gray-700 font-bold text-4xl md:text-6xl text-center tracking-tighter pt-10 pb-5'/>
        <p  
         dangerouslySetInnerHTML={{ __html: paragraph }}
        className='text-gray-700 w-[100%] font-light md:text-xl  text-center  tracking-wide mt-2  md:px-10 leading-relaxed'/>
     </div>
  )
}

export default HeadWithParagraph