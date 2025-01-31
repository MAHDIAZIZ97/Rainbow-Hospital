import React, { useState } from 'react'
import {assets} from '../assets/assets';
import { IoCallOutline } from "react-icons/io5";
import { CiClock1 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {

 const [hamburger, setHamburger] = useState(false);

 const toggleMenu = () => {
    setHamburger(!hamburger);
 }

  return (
    <>
     {
            hamburger ?
            <div>
            <div className='bg-[#11667A] text-white absolute w-[100%] p-2 md:hidden z-100'>
                <ul>
                    <IoMdClose  className='float-end text-2xl' onClick={toggleMenu}/>
                    <li className='my-1 ml-5'><NavLink to='/' onClick={toggleMenu}>HOME</NavLink></li>
                    <li className='my-1 ml-5'><NavLink to='/about' onClick={toggleMenu}>ABOUT</NavLink></li>
                    <li className='my-1 ml-5'><NavLink to='/services' onClick={toggleMenu}>SERVICE</NavLink></li>
                    <li className='my-1 ml-5'><NavLink to='/doctors' onClick={toggleMenu}>DOCTORS</NavLink></li>
                    <li className='my-1 ml-5'><NavLink to='news-and-media' onClick={toggleMenu}>NEWS</NavLink></li>
                    <li className='my-1 ml-5'><NavLink to='/contact' onClick={toggleMenu}>CONTACT</NavLink></li>
                    </ul>
                    <button className='bg-[#bfd2f8] text-slate-700 font-semibold px-4 py-2 rounded-2xl cursor-pointer hover:bg-blue-500 duration-500' onClick={toggleMenu}>Appointment</button>
                
            </div>
            </div>
          
            :
            null
 
        }
    <div className='flex justify-start md:gap-[22%] md:mx-[10%] m-3'>
       <div className='hidden md:block'>
            <img src={assets.logoR} alt='hospital-logo' className='max-h-[5rem]' />
       </div>
       <div className='flex flex-wrap justify-center gap-3'>
       <div className='flex items-center gap-1'>
       <IoCallOutline className='text-xl' />
        <div>
           <span className='font-bold'>EMERGENCY</span> 
            <br />
            <span className='text-[#11667A] font-bold'>033-71482073</span> 
        </div>
       </div>
       <div className='flex items-center gap-1'>
       <CiClock1 className='text-xl' />
        <div>
           <span className='font-bold'>WORKING HOUR</span> 
            <br />
            <span className='text-[#11667A] font-bold'>24 X 7</span> 
        </div>
       </div>
       <div className='flex  items-center gap-1'>
       <CiLocationOn className='text-xl' />
        <div>
           <span className='font-bold'>LOCATION</span> 
            <br />
            <span className='text-[#11667A] font-bold'>Uluberia,Howrah</span> 
        </div>
       </div>
       </div>
       
       

       
       
    </div>
    <div className='bg-[#11667A] py-4 text-white md:px-[13%] flex gap-[40%]'>
    <div className='block md:hidden'>
            <img src={assets.logo} alt='hospital-logo' className='max-h-[5rem]' />
       </div>
       <div className='justify-center align-center pt-1 gap-3 hidden md:flex'>
       <NavLink to='/'>
            HOME
        </NavLink>
        <NavLink to='/about'>
            ABOUT
        </NavLink>
        <NavLink to='/services'>
            SERVICE
        </NavLink>
        <NavLink to='/doctors'>
            DOCTORS
        </NavLink>
        <NavLink to='news-and-media'>
            NEWS 
        </NavLink>
        <NavLink to='/contact'>
            CONTACT
        </NavLink>
       </div>
        <div>
        <button className='bg-[#bfd2f8] text-slate-700 font-semibold px-4 py-2 rounded-2xl cursor-pointer hover:bg-blue-500 duration-500 hidden md:block'>Appointment</button>
        <RxHamburgerMenu  className='text-2xl md:hidden'  onClick={toggleMenu}/>
       
        </div>
        
    </div>
    </>
  )
}

export default Navbar
