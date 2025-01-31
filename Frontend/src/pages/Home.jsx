import React from 'react'
import { assets } from '../assets/assets'
import { FaRegAddressBook } from "react-icons/fa6";


const Home = () => {
  return (
    <>
    {/* first part */}
    <div className='relative bg-slate-200'>
      <img src={assets.header_img} alt='hero-img' className='md:pl-[40rem] md:h-[30rem]' />
      <div className='absolute top-[30%] left-[15%]'>
        <p className='text-2xl font-bold text-green-800'>Caring for Life</p>
        <h1 className='text-5xl font-semibold text-red-800'>Leading the way <br/> in medical excellence.</h1>
        <button className='bg-red-300 mt-3 px-4 py-2 rounded-2xl text-slate-100 font-semibold hover:bg-red-500 duration-500 cursor-pointer'>OUR SERVICES</button>
      </div>
      <div className='absolute justify-center w-full top-[90%] gap-4 hidden md:flex'>
        <button className='flex gap-2 bg-red-400 mt-3 px-8 py-6  text-gray-800 font-semibold hover:bg-gray-100 duration-500 cursor-pointer'>LEARN MORE
        <FaRegAddressBook className='mt-1' />
        </button>
        <button className='flex gap-2 bg-blue-400 mt-3 px-8 py-6  text-gray-800 font-semibold hover:bg-gray-100 duration-500 cursor-pointer'>LEARN MORE
        <FaRegAddressBook className='mt-1' />
        </button>
        <button className='flex gap-2 bg-red-400 mt-3 px-8 py-6  text-gray-800 font-semibold hover:bg-gray-100 duration-500 cursor-pointer'>LEARN MORE
        <FaRegAddressBook className='mt-1' />
        </button>
        </div>
    </div>
    <div>
    </div>

    {/* 2nd part */}
     <div className='mt-[6rem] flex  flex-wrap justify-center ' >
        <div className=' p-3 text-center basis-128'>
          <p className='text-xl font-semibold text-blue-400'>WELCOME TO RAINBOW HOSPITAL</p>
          <h1 className='text-3xl text-blue-800 font-bold'>A great place to receive care.</h1>
          <p>Rainbow Hospital is a renowned healthcare provider specializing in pediatrics, obstetrics, and gynecology. It offers advanced medical services, compassionate care, and state-of-the-art facilities for families.</p>
        </div>
        
     </div>
    </>
  )
}

export default Home
