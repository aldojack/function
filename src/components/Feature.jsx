import React from 'react'
import RightArrow from './RightArrow'

export default function Feature() {
  return (
    <header className='w-full mt-24 md:mt-4 bg-feature-bg bg-cover min-h-[36.5rem] md:max-h-[45rem] flex items-end justify-center md:justify-start'>
        <button role="button" aria-label="What's New" className='flex bg-[#282B3A] m-6 text-white items-center w-[21rem] md:w-[28rem] cursor-pointer' tabIndex="0">
        <div className='p-8 w-[95%]'>
            <p className='opacity-50 text-sm'>What's New</p>
            <p className=' text-xl md:text-2xl'>The Winter Collection</p>
        </div>
        <div className='py-12 px-6 items-stretch border-gray-600 border-l-2 '>
            <RightArrow fillColour="#fff"/>
        </div>
        </button>
    </header>
  )
}
