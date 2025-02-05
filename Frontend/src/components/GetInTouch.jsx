import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiClock } from "react-icons/fi";


const GetInTouch = () => {
  return (
    <div className='py-5'>
      <div className='mt-8'>
            <ul className='text-center'>
              <li className='text-2xl text-cyan-400 tracking-widest'>Get in Touch</li>
              <li className='text-4xl text-[#11667A] font-semibold'>CONTACT</li>
            </ul>
          </div>
      <div className='flex flex-wrap justify-center items-center gap-3 h-full mx-[13%] md:py-3 space-y-0.5 mt-3 '>
          <div className='h-30 md:w-50 w-30 bg-blue-100 cursor-pointer text-[#11667A] hover:-translate-y-1 transition duration-300 ease-in-out flex flex-col items-center justify-center rounded-md   '>
             <IoCallOutline className='text-3xl text-cyan-400' />
             <p className='font-semibold tracking-widest mt-2'>EMERGENCY</p>
             <a href='tel:6292291352'><p>+91-6292291352</p></a>
             <a href='tel:03371482053'><p>033-71480253</p></a>
          </div>
          <a href='https://www.google.com/maps/dir//Gangarampur,+Rail+Bridge,+near+Uluberia,+Uluberia,+Howrah,+Kolkata,+West+Bengal+711316/@22.4693398,88.0013488,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a0285d7f3adcc29:0x70ab3438852dc098!2m2!1d88.0837504!2d22.4693607?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D' target='_blank'>
          <div className='h-30 md:w-50 w-30 bg-blue-100 cursor-pointer text-[#11667A] hover:-translate-y-1 transition duration-300 ease-in-out flex flex-col items-center justify-center rounded-md   '>
             <IoLocationOutline className='text-3xl text-cyan-400' />
             <p className='font-semibold tracking-widest mt-2'>LOCATION</p>
             <p>Uluberia</p>
             <p>Howrah</p> 
          </div></a>
          <div className='h-30 md:w-50 w-30 bg-blue-100 cursor-pointer text-[#11667A] hover:-translate-y-1 transition duration-300 ease-in-out flex flex-col items-center justify-center rounded-md   '>
             <MdOutlineMailOutline className='text-3xl text-cyan-400' />
             <p className='font-semibold tracking-widest mt-2'>E-MAIL</p>
             <a href='mailTo:rainbowuluberia@gmail.com'><p className='md:text-[0.8rem] hidden md:block'>rainbowuluberia@gmail.com</p></a>
             <a href='mailTo:rhdshr7@gmail.com'><p className='text-[0.8rem]'>rhdshr7@gmail.com</p></a>
          </div>
          <div className='h-30 md:w-50 w-30 bg-blue-100 cursor-pointer text-[#11667A] hover:-translate-y-1  transition duration-300 ease-in-out flex flex-col items-center justify-center rounded-md   '>
             <FiClock className='text-3xl text-cyan-400' />
             <p className='font-semibold tracking-widest mt-2'>AVAILABLE</p>
             <p>24 x 7</p>
             <p>OPD 8AM-8PM</p> 
          </div>
         
      </div>
    </div>
  )
}

export default GetInTouch
