import React, { useState,useEffect } from 'react'
import {assets} from '../assets/assets';
import { IoCallOutline } from "react-icons/io5";
import { CiClock1 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import ImageWithDropdown from './ImageWithDropdown';
import ThemeToggle from '../ThemeToggle';


const Navbar = () => {

 const [hamburger, setHamburger] = useState(false);
 const [isFixed, setIsFixed] = useState(false);
 const [isOpen, setIsOpen] = useState(false);
 const [isDepOpen, setIsDepOpen] = useState(false);
 const [floatHamburger, setFloatHamburger] = useState(false);
 

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

useEffect(() => {
  const handleHamburger = () =>{
    const scrollHamburger = window.innerHeight/5;
    if(window.scrollY > scrollHamburger) {
       setFloatHamburger(true); 
    }
    else {
       setFloatHamburger(false);
    }
    window.addEventListener("scroll", handleHamburger);
    return () => window.removeEventListener("scroll", handleHamburger);
  }
},[])
 
  return (
<div className='dark:bg-[var(--dark-theme)] -mt-20'>

<nav
      className={`px-4 sm:py-1 py-0  w-full bg-[#035d67] dark:bg-[var(--dark-theme)] text-white fixed top-0 left-0 transition-all duration-500 ${
        isFixed ? "md:shadow-lg md:opacity-100  md:translate-y-0 md:z-100 hidden md:block" : "opacity-0 -translate-y-10"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center pl-18">
      <div className='bg-[#035d67] dark:bg-[var(--dark-theme)] py-0 text-white flex gap-[30%]'>
       <div className='justify-start align-center  border-0 gap-3 hidden md:flex'>
       <NavLink to='/'>
          <img src={assets.logo3} alt='hospital-logo' className='max-h-[3rem] ml-2' />
       </NavLink>
        
       <NavLink 
          to='/'
          className="text-white hover:text-purple-300 transition-all duration-300 ease-in-out 
              mt-2 ">
            HOME
        </NavLink>
        <NavLink to='/about' 
           onClick={() => {window.scrollTo(0, 0);}}
           className="text-white hover:text-purple-300 transition-all duration-300 ease-in-out 
              mt-2 ">
            ABOUT
        </NavLink>
      
      {/* Button / Trigger */}
      <NavLink to='/patient-guide' className=" text-white cursor-pointer hover:text-purple-300 mt-2"> 
        PATIENT
      </NavLink>

 
        <NavLink to='/services'
         onClick={() => {window.scrollTo(0, 0);}}
         className="text-white hover:text-purple-300 transition-all duration-300 ease-in-out 
              mt-2 ">
            SERVICES
        </NavLink>
        <NavLink to='/doctors'
          className="text-white hover:text-purple-300 transition-all duration-300 ease-in-out 
              mt-2 ">
            DOCTORS
        </NavLink>
    
    
      {/* Button / Trigger */}
      <NavLink to='/departments' 
        className=" text-white cursor-pointer hover:text-purple-300 mt-2"
        > 
        DEPARTMENTS
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
        <NavLink to='/contact'
         className="text-white hover:text-purple-300 transition-all duration-300 ease-in-out 
              mt-2 ">
            GALLERY
        </NavLink>
        <NavLink to='/contact'
         className="text-white hover:text-purple-300 transition-all duration-300 ease-in-out 
              mt-2 ">
            ACADEMICS
        </NavLink>
        <div className='mt-2  2xl:ml-[25rem] sm:ml-[10px] md:ml-[10rem]' >
        <ThemeToggle />
       
        </div>
        
       
       </div>
        
        
    </div>
      </div>
    </nav>

    {/* mobile view */}
    
     {    
            hamburger ?
            <div className=' relative z-99 transition-all duration-500  translate-y-20'>
                      <div className='flex justify-center bg-gray-300'>
                      <NavLink to='/' onClick={toggleMenu}>
                        <img src={assets.logoR} alt='hospital-logo' className='max-h-[5rem]' />
                      </NavLink>
                            
                     </div>
                    <div className='bg-[#035d67] text-white absolute w-[100%] p-2 md:hidden z-100'>
                        <IoMdClose  className='float-end text-2xl cursor-pointer ' onClick={toggleMenu}/>
                     <div className='grid place-items-center'>
                     
                    <ul>
                    
                    <li className='my-1 ml-5'><NavLink to='/' onClick={toggleMenu}>HOME PAGE</NavLink></li>
                    <li className='my-1 ml-5'><NavLink to='/about' onClick={toggleMenu}>ABOUT US</NavLink></li>
                    <li className='my-1 ml-5'><NavLink to='/services' onClick={toggleMenu}>OUR SERVICES</NavLink></li>
                    <li className='my-1 ml-5'><NavLink to='/doctors' onClick={toggleMenu}>OUR DOCTORS</NavLink></li>
                    <li className='my-1 ml-5'><NavLink to='/news-and-media' onClick={toggleMenu}>NEWS AND MEDIA</NavLink></li>
                    <li className='my-1 ml-5'><NavLink to='/contact' onClick={toggleMenu}>CONTACT US</NavLink></li>
                    <li className='my-1 ml-5'><NavLink to='/departments' onClick={toggleMenu}>OUR DEPARTMENTS</NavLink></li>
                    <li className='my-1 ml-5'><NavLink to='/gallery' onClick={toggleMenu}>GALLERY AND PHOTOS</NavLink></li>
                    <li className='my-1 ml-5'><NavLink to='/academics' onClick={toggleMenu}>ACADEMICS</NavLink></li>
                    <li className='my-1 ml-5'><NavLink to='/patient-guide' onClick={toggleMenu}>PATIENT GUIDE</NavLink></li>
                    
                    </ul>

                </div>   
             </div>
           </div>
        :
        <div className=' relative z-99 transition-all duration-500  -translate-y-70' >
                      <div className='flex justify-center bg-gray-300'>
                      <NavLink to='/'><img src={assets.logoR} alt='hospital-logo' className='max-h-[5rem]' /></NavLink>
                     </div>
                    <div className='bg-[#035d67] text-white absolute w-[100%] p-2 md:hidden z-100'>
                        <IoMdClose  className='float-end text-2xl cursor-pointer ' onClick={toggleMenu}/>
                     <div className='grid place-items-center'>
                     
                    <ul>
                    
                    <li className='my-1 ml-5'><NavLink to='/' onClick={toggleMenu}>HOME</NavLink></li>
                    <li className='my-1 ml-5'><NavLink to='/about' onClick={toggleMenu}>ABOUT</NavLink></li>
                    <li className='my-1 ml-5'><NavLink to='/services' onClick={toggleMenu}>SERVICES</NavLink></li>
                    <li className='my-1 ml-5'><NavLink to='/doctors' onClick={toggleMenu}>DOCTORS</NavLink></li>
                    <li className='my-1 ml-5'><NavLink to='/news-and-media' onClick={toggleMenu}>NEWS</NavLink></li>
                    <li className='my-1 ml-5'><NavLink to='/contact' onClick={toggleMenu}>CONTACT</NavLink></li>
                    <li className='my-1 ml-5'><NavLink to='/departments' onClick={toggleMenu}>DEPARTMENTS</NavLink></li>
                    <li className='my-1 ml-5'><NavLink to='/gallery' onClick={toggleMenu}>GALLERY</NavLink></li>
                    {/* <li className='my-1 ml-5'><NavLink to='/academics' onClick={toggleMenu}>ACADEMICS</NavLink></li>
                    <li className='my-1 ml-5'><NavLink to='/patient-guide' onClick={toggleMenu}>PATIENT</NavLink></li> */}
                    
                    </ul>

                </div>   
             </div>
           </div>
 
        }
       
      
    <div className='flex justify-start md:gap-[22%] md:mx-[10%] md:m-3 mt-0 md:pt-2 dark:text-white'>
       <div className='hidden md:block'>
          <NavLink to='/'><img src={assets.logoR} alt='hospital-logo' className='max-h-[5rem]' /></NavLink> 
       </div>
       <div className='hidden md:flex flex-wrap justify-center gap-3 '>
       <div className='flex items-center gap-1'>
       <IoCallOutline className='text-xl' />
        <div>
           <span className='font-bold'>EMERGENCY</span> 
            <br />
            <span className='text-[#035d67] dark:text-cyan-200 font-bold'>033-71482073</span> 
        </div>
       </div>
       <div className='flex items-center gap-1'>
       <CiClock1 className='text-xl' />
        <div>
           <span className='font-bold'>WORKING HOUR</span> 
            <br />
            <span className='text-[#035d67] dark:text-cyan-200 font-bold'>24 X 7</span> 
        </div>
       </div>
       <div className='flex  items-center gap-1'>
       <CiLocationOn className='text-xl' />
        <div>
           <span className='font-bold'>LOCATION</span> 
            <br />
            <span className='text-[#035d67] dark:text-cyan-200 font-bold'>Uluberia,Howrah</span> 
        </div>
       </div>
       </div>
       
       

       
       
    </div>
    <div className='bg-[#035d67] dark:bg-[var(--dark-theme)] py-4 text-white md:px-[13%] flex gap-30'>
    <div className='block md:hidden'>
    <NavLink to='/'> 
        <img src={assets.logo3} alt='hospital-logo' className='max-h-[4rem] ml-2' />
    </NavLink>
           
       </div>
       <div className='justify-start gap-5 align-center pt-1  border-0  hidden md:flex'>
       <NavLink 
          to='/'
          className={({ isActive }) =>
            `text-white hover:text-purple-300  ${ 
              isActive ? "border-b-4 border-cyan-500 " : " "
            }`
          } >
            HOME
        </NavLink>
        <NavLink to='/about'
           className={({ isActive }) =>
            `text-white hover:text-purple-300  ${ 
              isActive ? "border-b-4 border-cyan-500" : " "
            }`
          }>
            ABOUT
        </NavLink>
   
      {/* Button / Trigger */}
      <NavLink to='/patient-guide'
        className={({ isActive }) =>
            `text-white hover:text-purple-300  ${ 
              isActive ? "border-b-4 border-cyan-500 " : " "
            }`
          }> 
        PATIENT
      </NavLink>

     
    
        <NavLink to='/services'
         className={({ isActive }) =>
            `text-white hover:text-purple-300  ${ 
              isActive ? "border-b-4 border-cyan-500 " : " "
            }`
          }>
            SERVICES
        </NavLink>
       
        <NavLink to='/doctors'
          className={({ isActive }) =>
            `text-white hover:text-purple-300  ${ 
              isActive ? "border-b-4 border-cyan-500 " : " "
            }`
          }>
            DOCTORS
        </NavLink>
  
 
      <NavLink to='/departments' className={({ isActive }) =>
            `text-white hover:text-purple-300  ${ 
              isActive ? "border-b-4 border-cyan-500 " : " "
            }`}> 
        DEPARTMENTS
      </NavLink>

   
        <NavLink to='/news-and-media'
         className={({ isActive }) =>
            `text-white hover:text-purple-300  ${ 
              isActive ? "border-b-4 border-cyan-500 " : " "
            }`
          }>
            NEWS 
        </NavLink>
        <NavLink to='/contact'
         className={({ isActive }) =>
            `text-white hover:text-purple-300  ${ 
              isActive ? "border-b-4 border-cyan-500 " : " "
            }`
          }>
            CONTACT
        </NavLink>
        <NavLink to='/gallery'
         className={({ isActive }) =>
            `text-white hover:text-purple-300  ${ 
              isActive ? "border-b-4 border-cyan-500 " : " "
            }`
          }>
            GALLERY
        </NavLink>
        <NavLink to='/academics'
         className={({ isActive }) =>
            `text-white hover:text-purple-300  ${ 
              isActive ? "border-b-4 border-cyan-500 " : " "
            }`
          }>
            ACADEMICS
        </NavLink>
        
       
       <span className='xl:ml-[10rem] md:ml-[5rem] 2xl:ml-[15rem] hidden sm:block'>
       <ThemeToggle />
       </span>
       
        
       </div>
    <div className='flex sm:hidden ' >
        <ThemeToggle />
        <RxHamburgerMenu  className='text-2xl  cursor-pointer  mt-5 ml-3 '  onClick={toggleMenu}/>
    </div>
        
    </div>
    {/* {
          floatHamburger ? 
           <div  >
       
            <RxHamburgerMenu  className='text-2xl absolute top-30 left-30 bg-amber-100 cursor-pointer  mt-5 ml-3'  onClick={toggleMenu}/>
       
        </div>: ''
        } */}
    </div>
  )
}

export default Navbar
