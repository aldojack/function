import React from 'react'
import RightArrow from '../assets/right-arrow.svg';

export default function Feature() {
  return (
    <header className='w-full mt-24 md:mt-4 bg-feature-bg bg-cover h-1/2 flex items-end justify-center md:justify-start'>
        <div className='flex bg-[#282B3A] m-6 text-white items-center w-[342px] md:w-[448px]'>
        <div className='p-8 w-[95%]'>
            <p className=' opacity-50'>What's New</p>
            <p>The Winter Collection</p>
        </div>
        <div className='py-12 px-6 items-stretch border-l-2'>
            <img src={RightArrow}/>
        </div>
        </div>
    </header>
  )
}
