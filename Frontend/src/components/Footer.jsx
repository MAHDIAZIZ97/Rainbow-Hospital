import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';



const Footer = () => {
  return (
    <div className=' bg-[#11667A] dark:bg-[var(--dark-theme)] text-white font-extralight text-[0.9rem]'>
      <div className='text-center mx-[13%] grid grid-cols-12 pt-12 gap-5'>
        <div className='md:col-span-4 col-span-12'>
            <img src={assets.logo3}/>
            <p>Leading the Way in Medical</p>
            <p>Excellence, Trusted Care.</p>
        </div>
        <div className='md:col-span-4 col-span-12'>
            <p className='text-xl underline'>Quick Links</p>
            <ul>
            <NavLink to='/' onClick={() => window.scrollTo(0,0)}><li>Home</li></NavLink>
            <NavLink to='/about' onClick={() => window.scrollTo(0,0)}><li>About</li></NavLink>
            <NavLink to='/services' onClick={() => window.scrollTo(0,0)}><li>Services</li></NavLink>
            <NavLink to='/doctors' onClick={() => window.scrollTo(0,0)}><li>Doctors</li></NavLink>
            <NavLink to='/news-and-media' onClick={() => window.scrollTo(0,0)}><li>News</li></NavLink>
            </ul>

        </div>
        <div className='md:col-span-4 col-span-12'>
          <p className='text-xl underline'>Contact Us</p>
          <a href='tel:6292291350'><p>OPD-1: 6292291350</p></a>
          <a href='tel:9748493438'><p>OPD-1: 9748493438</p></a>
          <p>Gangarampur,Uluberia</p>
          <p>Howrah,711316</p>
          <a href='mailto:rainbowuluberia@gmail.com'><p>EMAIL: rainobwuluberia@gmail.com</p></a>
           
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
