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
 const [isOpen, setIsOpen] = useState(false);
 const [isDepOpen, setIsDepOpen] = useState(false);
 

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
      className={`px-4 py-1 w-full bg-[#035d67] text-white fixed top-0 left-0 transition-all duration-500 ${
        isFixed ? "md:shadow-lg md:opacity-100  md:translate-y-0 md:z-100 hidden md:block" : "opacity-0 -translate-y-10"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center pl-18">
      <div className='bg-[#035d67] py-0 text-white flex gap-[30%]'>
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
        <div 
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Button / Trigger */}
      <button className=" text-white cursor-pointer hover:text-purple-300 mt-2"> 
        PATIENT
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute -left-15 mt-2 w-48 bg-[#035d67] border border-gray-300 shadow-md  z-100 rounded">
          <ul className="py-2">
          <NavLink to='/patient-guide'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Patient Guide</li>
            </NavLink>
            <NavLink to='/testimonials'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Testimonials</li>
            </NavLink>
            <NavLink to='/book-appointment'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Book Appointment</li>
            </NavLink>
          </ul>
        </div>
      )}
    </div>
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
        <div 
      className="relative inline-block"
      onMouseEnter={() => setIsDepOpen(true)}
      onMouseLeave={() => setIsDepOpen(false)}
    >
      {/* Button / Trigger */}
      <button className=" text-white cursor-pointer hover:text-purple-300 mt-2"> 
        DEPARTMENT
      </button>

      {/* Dropdown Menu */}
      {isDepOpen && (
        <div className="absolute -left-65 mt-1 w-190 bg-[#035a67] border border-gray-300 shadow-md  z-100 rounded">
         <div className='flex gap-2'>
         <ul className="py-2">
            <NavLink to='/patient-guide'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Patient Guide</li>
            </NavLink>
            <NavLink to='/testimonials'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Testimonials</li>
            </NavLink>
            <NavLink to='/book-appointment'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Book Appointment</li>
            </NavLink>
            <NavLink to='/patient-guide'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Patient Guide</li>
            </NavLink>
            <NavLink to='/testimonials'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Testimonials</li>
            </NavLink>
            <NavLink to='/book-appointment'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Book Appointment</li>
            </NavLink>
          </ul>
          <ul className="py-2">
            <NavLink to='/patient-guide'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Patient Guide</li>
            </NavLink>
            <NavLink to='/testimonials'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Testimonials</li>
            </NavLink>
            <NavLink to='/book-appointment'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Book Appointment</li>
            </NavLink>
            <NavLink to='/patient-guide'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Patient Guide</li>
            </NavLink>
            <NavLink to='/testimonials'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Testimonials</li>
            </NavLink>
            <NavLink to='/book-appointment'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Book Appointment</li>
            </NavLink>
          </ul>
          <ul className="py-2">
            <NavLink to='/patient-guide'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Patient Guide</li>
            </NavLink>
            <NavLink to='/testimonials'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Testimonials</li>
            </NavLink>
            <NavLink to='/book-appointment'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Book Appointment</li>
            </NavLink>
            <NavLink to='/patient-guide'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Patient Guide</li>
            </NavLink>
            <NavLink to='/testimonials'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Testimonials</li>
            </NavLink>
            <NavLink to='/book-appointment'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Book Appointment</li>
            </NavLink>
          </ul>
          <ul className="py-2">
            <NavLink to='/patient-guide'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Patient Guide</li>
            </NavLink>
            <NavLink to='/testimonials'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Testimonials</li>
            </NavLink>
            <NavLink to='/book-appointment'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Book Appointment</li>
            </NavLink>
            <NavLink to='/patient-guide'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Patient Guide</li>
            </NavLink>
            <NavLink to='/testimonials'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Testimonials</li>
            </NavLink>
            <NavLink to='/book-appointment'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Book Appointment</li>
            </NavLink>
          </ul>
         </div>
          
        </div>
      )}
    </div>
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
        
       
       </div>
        <div className='flex' >
        <MdOutlineWbSunny className='text-2xl ml-55 mt-5 md:mt-3 md:mr-0'/>
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
            <div className='bg-[#035d67] text-white absolute w-[100%] p-2 md:hidden z-100 transition-all duration-500 ease-in-out '>
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
            <span className='text-[#035d67] font-bold'>033-71482073</span> 
        </div>
       </div>
       <div className='flex items-center gap-1'>
       <CiClock1 className='text-xl' />
        <div>
           <span className='font-bold'>WORKING HOUR</span> 
            <br />
            <span className='text-[#035d67] font-bold'>24 X 7</span> 
        </div>
       </div>
       <div className='flex  items-center gap-1'>
       <CiLocationOn className='text-xl' />
        <div>
           <span className='font-bold'>LOCATION</span> 
            <br />
            <span className='text-[#035d67] font-bold'>Uluberia,Howrah</span> 
        </div>
       </div>
       </div>
       
       

       
       
    </div>
    <div className='bg-[#035d67] py-4 text-white md:px-[13%] flex gap-[40%]'>
    <div className='block md:hidden'>
            <img src={assets.logo3} alt='hospital-logo' className='max-h-[4rem] ml-2' />
       </div>
       <div className='justify-start align-center pt-1  border-0 gap-3 hidden md:flex'>
       <NavLink 
          to='/'
          className={({ isActive }) =>
            `text-white hover:text-purple-300  ${ 
              isActive ? "border-b-4 border-indigo-500 " : " "
            }`
          } >
            HOME
        </NavLink>
        <NavLink to='/about'
           className={({ isActive }) =>
            `text-white hover:text-purple-300  ${ 
              isActive ? "border-b-4 border-indigo-500" : " "
            }`
          }>
            ABOUT
        </NavLink>
   <div 
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Button / Trigger */}
      <button className=" text-white cursor-pointer hover:text-purple-300 "> 
        PATIENT 🔽
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute -left-15 mt-1 w-48 bg-[#035a67] border border-gray-300 shadow-md  z-100 rounded">
          <ul className="py-2">
            <NavLink to='/patient-guide'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Patient Guide</li>
            </NavLink>
            <NavLink to='/testimonials'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Testimonials</li>
            </NavLink>
            <NavLink to='/book-appointment'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Book Appointment</li>
            </NavLink>
          </ul>
        </div>
      )}
    </div>
        <NavLink to='/services'
         className={({ isActive }) =>
            `text-white hover:text-purple-300  ${ 
              isActive ? "border-b-4 border-indigo-500 " : " "
            }`
          }>
            SERVICE
        </NavLink>
       
        <NavLink to='/doctors'
          className={({ isActive }) =>
            `text-white hover:text-purple-300  ${ 
              isActive ? "border-b-4 border-indigo-500 " : " "
            }`
          }>
            DOCTORS
        </NavLink>
        {/* <NavLink to='/departments'
          className={({ isActive }) =>
            `text-white hover:text-purple-300  ${ 
              isActive ? "border-b-4 border-indigo-500 " : " "
            }`
          }>
            DEPARTMENTS
        </NavLink> */}
  <div 
      className="relative inline-block"
      onMouseEnter={() => setIsDepOpen(true)}
      onMouseLeave={() => setIsDepOpen(false)}
    >
      {/* Button / Trigger */}
      <button className=" text-white cursor-pointer hover:text-purple-300 "> 
        DEP 🔽
      </button>

      {/* Dropdown Menu */}
      {isDepOpen && (
        <div className="absolute -left-65 mt-1 w-190 bg-[#035a67] border border-gray-300 shadow-md  z-100 rounded">
         <div className='flex gap-2'>
         <ul className="py-2">
            <NavLink to='/patient-guide'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Patient Guide</li>
            </NavLink>
            <NavLink to='/testimonials'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Testimonials</li>
            </NavLink>
            <NavLink to='/book-appointment'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Book Appointment</li>
            </NavLink>
            <NavLink to='/patient-guide'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Patient Guide</li>
            </NavLink>
            <NavLink to='/testimonials'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Testimonials</li>
            </NavLink>
            <NavLink to='/book-appointment'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Book Appointment</li>
            </NavLink>
          </ul>
          <ul className="py-2">
            <NavLink to='/patient-guide'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Patient Guide</li>
            </NavLink>
            <NavLink to='/testimonials'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Testimonials</li>
            </NavLink>
            <NavLink to='/book-appointment'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Book Appointment</li>
            </NavLink>
            <NavLink to='/patient-guide'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Patient Guide</li>
            </NavLink>
            <NavLink to='/testimonials'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Testimonials</li>
            </NavLink>
            <NavLink to='/book-appointment'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Book Appointment</li>
            </NavLink>
          </ul>
          <ul className="py-2">
            <NavLink to='/patient-guide'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Patient Guide</li>
            </NavLink>
            <NavLink to='/testimonials'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Testimonials</li>
            </NavLink>
            <NavLink to='/book-appointment'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Book Appointment</li>
            </NavLink>
            <NavLink to='/patient-guide'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Patient Guide</li>
            </NavLink>
            <NavLink to='/testimonials'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Testimonials</li>
            </NavLink>
            <NavLink to='/book-appointment'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Book Appointment</li>
            </NavLink>
          </ul>
          <ul className="py-2">
            <NavLink to='/patient-guide'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Patient Guide</li>
            </NavLink>
            <NavLink to='/testimonials'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Testimonials</li>
            </NavLink>
            <NavLink to='/book-appointment'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Book Appointment</li>
            </NavLink>
            <NavLink to='/patient-guide'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Patient Guide</li>
            </NavLink>
            <NavLink to='/testimonials'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Testimonials</li>
            </NavLink>
            <NavLink to='/book-appointment'>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Book Appointment</li>
            </NavLink>
          </ul>
         </div>
          
        </div>
      )}
    </div>
        <NavLink to='/news-and-media'
         className={({ isActive }) =>
            `text-white hover:text-purple-300  ${ 
              isActive ? "border-b-4 border-indigo-500 " : " "
            }`
          }>
            NEWS 
        </NavLink>
        <NavLink to='/contact'
         className={({ isActive }) =>
            `text-white hover:text-purple-300  ${ 
              isActive ? "border-b-4 border-indigo-500 " : " "
            }`
          }>
            CONTACT
        </NavLink>
        
       
       
       
        
       </div>
        <div className='flex' >
        <MdOutlineWbSunny className='text-2xl   cursor-pointer mr-2 mt-5 md:mt-3 md:mr-0'/>
       
        <RxHamburgerMenu  className='text-2xl md:hidden cursor-pointer mr-2 mt-5'  onClick={toggleMenu}/>
       
        </div>
        
    </div>
    </>
  )
}

export default Navbar
