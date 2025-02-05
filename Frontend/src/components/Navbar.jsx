import React, { useState,useEffect } from 'react'
import {assets} from '../assets/assets';
import { IoCallOutline } from "react-icons/io5";
import { CiClock1 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { MdOutlineWbSunny } from "react-icons/md";
import ImageWithDropdown from './ImageWithDropdown';


const Navbar = () => {

 const [hamburger, setHamburger] = useState(false);
 const [isFixed, setIsFixed] = useState(false);
 

 const toggleMenu = () => {
    setHamburger(!hamburger);
 }

 useEffect(() => {
  const handleScroll = () => {
    const scrollThreshold = window.innerHeight / 5; 
    if (window.scrollY > scrollThreshold) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
 
  return (
    <>

<nav
      className={`px-4 py-1 w-full bg-[#11667A] text-white fixed top-0 left-0 transition-all duration-500 ${
        isFixed ? "md:shadow-lg md:opacity-100  md:translate-y-0 md:z-100 hidden md:block" : "opacity-0 -translate-y-10"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center pl-18">
      <div className='bg-[#11667A] py-0 text-white flex gap-[40%]'>
       <div className='justify-start align-center pt-1  border-0 gap-3 hidden md:flex'>
        <img src={assets.logo3} alt='hospital-logo' className='max-h-[3rem] ml-2' />
       <NavLink 
          to='/'
          className="text-white hover:text-purple-300 transition-all duration-300 ease-in-out 
              mt-2 ">
            HOME
        </NavLink>
        <NavLink to='/about'
           className="text-white hover:text-purple-300 transition-all duration-300 ease-in-out 
              mt-2 ">
            ABOUT
        </NavLink>
        <NavLink to='/services'
         className="text-white hover:text-purple-300 transition-all duration-300 ease-in-out 
              mt-2 ">
            SERVICE
        </NavLink>
        <NavLink to='/doctors'
          className="text-white hover:text-purple-300 transition-all duration-300 ease-in-out 
              mt-2 ">
            DOCTORS
        </NavLink>
        <NavLink to='/news-and-media'
         className="text-white hover:text-purple-300 transition-all duration-300 ease-in-out 
              mt-2 ">
            NEWS 
        </NavLink>
        <NavLink to='/contact'
         className="text-white hover:text-purple-300 transition-all duration-300 ease-in-out 
              mt-2 ">
            CONTACT
        </NavLink>
        
        <button className='bg-[#bfd2f8] text-slate-700 font-semibold px-4 py-1 rounded-2xl cursor-pointer hover:bg-blue-500 duration-500 hidden md:block xl:ml-[55%] md:ml-[20%]'>
        SignUp</button>
       </div>
        <div className='flex' >
        <MdOutlineWbSunny className='text-2xl mr-3 mt-5 md:mt-3 md:mr-0'/>
        <RxHamburgerMenu  className='text-2xl md:hidden cursor-pointer mr-2 mt-5'  onClick={toggleMenu}/>
       
        </div>
        
    </div>
      </div>
    </nav>
    
     {    
            hamburger ?
            <div className=' translate-y-0 relative z-99 transition-all transform duration-200 ease-in'>
            <div className='flex justify-center bg-gray-300'>
                            <img src={assets.logoR} alt='hospital-logo' className='max-h-[5rem]' />
                     </div>
            <div className='bg-[#11667A] text-white absolute w-[100%] p-2 md:hidden z-100 transition-all duration-500 ease-in-out '>
            <IoMdClose  className='float-end text-2xl cursor-pointer ' onClick={toggleMenu}/>
            <div className='grid place-items-center'>
                     
                <ul>
                    
                    <li className='my-1 ml-5'><NavLink to='/' onClick={toggleMenu}>HOME</NavLink></li>
                    <li className='my-1 ml-5'><NavLink to='/about' onClick={toggleMenu}>ABOUT</NavLink></li>
                    <li className='my-1 ml-5'><NavLink to='/services' onClick={toggleMenu}>SERVICE</NavLink></li>
                    <li className='my-1 ml-5'><NavLink to='/doctors' onClick={toggleMenu}>DOCTORS</NavLink></li>
                    <li className='my-1 ml-5'><NavLink to='/news-and-media' onClick={toggleMenu}>NEWS</NavLink></li>
                    <li className='my-1 ml-5'><NavLink to='/contact' onClick={toggleMenu}>CONTACT</NavLink></li>
                    </ul>
                    <button className='bg-[#bfd2f8] text-slate-700 font-semibold px-[30%] py-2 rounded-3xl cursor-pointer hover:bg-blue-500 duration-500' onClick={toggleMenu}>Sign Up</button> 
                </div>   
             </div>
            </div>
            :
            <div className='-translate-y-[15rem] absolute'>
           
            </div>
 
        }
      
    <div className='flex justify-start md:gap-[22%] md:mx-[10%] m-3 '>
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
            <img src={assets.logo3} alt='hospital-logo' className='max-h-[4rem] ml-2' />
       </div>
       <div className='justify-start align-center pt-1  border-0 gap-3 hidden md:flex'>
       <NavLink 
          to='/'
          className={({ isActive }) =>
            `text-white hover:text-purple-300 transition-all duration-300 ease-in-out ${ 
              isActive ? "border-b-4 border-indigo-500 " : " "
            }`
          } >
            HOME
        </NavLink>
        <NavLink to='/about'
           className={({ isActive }) =>
            `text-white hover:text-purple-300 transition-all duration-300 ease-in-out ${ 
              isActive ? "border-b-4 border-indigo-500" : " "
            }`
          }>
            ABOUT
        </NavLink>
        <NavLink to='/services'
         className={({ isActive }) =>
            `text-white hover:text-purple-300 transition-all duration-300 ease-in-out ${ 
              isActive ? "border-b-4 border-indigo-500 " : " "
            }`
          }>
            SERVICE
        </NavLink>
        <NavLink to='/doctors'
          className={({ isActive }) =>
            `text-white hover:text-purple-300 transition-all duration-300 ease-in-out ${ 
              isActive ? "border-b-4 border-indigo-500 " : " "
            }`
          }>
            DOCTORS
        </NavLink>
        <NavLink to='/news-and-media'
         className={({ isActive }) =>
            `text-white hover:text-purple-300 transition-all duration-300 ease-in-out ${ 
              isActive ? "border-b-4 border-indigo-500 " : " "
            }`
          }>
            NEWS 
        </NavLink>
        <NavLink to='/contact'
         className={({ isActive }) =>
            `text-white hover:text-purple-300 transition-all duration-300 ease-in-out ${ 
              isActive ? "border-b-4 border-indigo-500 " : " "
            }`
          }>
            CONTACT
        </NavLink>
        
        <button className='bg-[#bfd2f8] text-slate-700 font-semibold px-4 py-2 rounded-2xl cursor-pointer hover:bg-blue-500 duration-500 hidden md:block xl:ml-[55%] md:ml-[20%]'>
        SignUP</button>
       
        <span className='hidden md:block'>
        <ImageWithDropdown />
        
         
        </span>
        
       </div>
        <div className='flex' >
        <MdOutlineWbSunny className='text-2xl mr-3 mt-5 md:mt-3 md:mr-0'/>
        <span className='block md:hidden mt-3'>
        <ImageWithDropdown />
        </span>
        <RxHamburgerMenu  className='text-2xl md:hidden cursor-pointer mr-2 mt-5'  onClick={toggleMenu}/>
       
        </div>
        
    </div>
    </>
  )
}

export default Navbar
