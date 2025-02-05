import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { assets } from '../assets/assets';



const Footer = () => {
  return (
    <div className=' bg-[#11667A] text-white font-extralight text-[0.9rem]'>
      <div className='text-center mx-[13%] grid grid-cols-12 pt-12 gap-5'>
        <div className='md:col-span-4 col-span-12'>
            <img src={assets.logo3}/>
            <p>Leading the Way in Medical</p>
            <p>Execellence, Trusted Care.</p>
        </div>
        <div className='md:col-span-4 col-span-12'>
            <p className='text-xl underline'>Quick Links</p>
            <ul>
               <li>Home</li>
               <li>About</li>
               <li>Services</li>
               <li>Doctors</li>
               <li>News</li>
            </ul>

        </div>
        <div className='md:col-span-4 col-span-12'>
          <p className='text-xl underline'>Contact Us</p>
          <p>OPD-1: 6292291350</p>
          <p>OPD-2: 9748493438</p>
          <p>Gangarampur,Uluberia</p>
          <p>Howrah,711316</p>
          <p>EMAIL: rainobwuluberia@gmail.com</p>
           
        </div>
        
      </div>
      <hr  className='mx-[13%] my-8'/>
      <div className='flex md:flex-row flex-col mx-[13%] justify-between'>
        <div>
           © 2025 All Rights Reserved by Rainbow Hospital & Diagnostic Service
        </div>
        <div className='flex gap-2'>
        <FaFacebookSquare />
        <FaSquareInstagram />
        <IoLogoYoutube />
        <FaLinkedin />
        <FaSquareXTwitter />
        
        </div>
      </div>
      <div className='text-center mt-2  py-2'>
        Made with ❤️ by Mahdi Aziz Mollah
      </div>
    </div>
  )
}

export default Footer
