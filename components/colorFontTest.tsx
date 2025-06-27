import React from 'react'

function colorFontTest() {
  return (
      <div className=" font-poppins bg-gray-100 h-screen flex flex-col items-center justify-center">
          <div className='text-red-400 font-bold text-3xl  md:text-4xl tracking-tighter'>
            Back to Primary school
          </div>
          <div className='text-gray-700 font-bold text-2xl md:text-3xl tracking-tighter'>
            Secondary High School
          </div>
          <div className='text-gray-900  md:text-lg tracking-wide'>
            Oh no! I am back to school again.
          </div>
          <button className='bg-red-600 w-70 md:w-100 text-gray-200 px-10 md:px-20  py-2 md:py-3 rounded-sm  md:text-2xl hover:bg-red-500 capitalize outline-none '>Click Me Now </button>

          </div>
  )
}

export default colorFontTest