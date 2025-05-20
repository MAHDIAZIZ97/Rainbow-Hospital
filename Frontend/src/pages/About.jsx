import React from 'react'
import GetInTouch from '../components/GetInTouch'
import Hero from '../components/Hero'
import { assets } from '../assets/assets'
import Statistics from '../components/Statistics'
import  Swiper  from '../components/Swiper'
import { FaCircle } from "react-icons/fa";


const About = () => {
  return (
    <div>
    {/* hero props */}
      <Hero 
        image={assets.page2}
        pageRoute={`Home/About`}
        pageName={`About Us`}
      />
      {/* page content */}
      {/* section-1 */}
        <div className='grid grid-cols-10 px-[13%] my-5'>
            <div className='sm:col-span-4 col-span-10 bg-amber-100'>
               <img src={assets.aboutUs} className='sm:h-[300px] h-[240px] w-full' />
            </div>
           <div className='sm:col-span-6 col-span-10 '>
                       <ul>
                          <li className='text-2xl font-bold py-2 text-center'>A passion for putting patients first.</li>
                          <div className='md:flex gap-3 justify-start pl-8 hidden'>
                             <div>
                             <p className='flex gap-2 pl-2'><FaCircle  className='mt-1 text-[#11776A]' /> A Passion for Healing </p> 
                             <p className='flex gap-2 pl-2'><FaCircle  className='mt-1 text-[#11776A]' /> All our best </p>  
                             <p className='flex gap-2 pl-2'><FaCircle  className='mt-1 text-[#11776A]' /> A legacy of excellence </p> 
                             </div>
                             <div>
                             <p className='flex gap-2 pl-2'><FaCircle  className='mt-1 text-[#11776A]' /> 5 star care </p> 
                             <p className='flex gap-2 pl-2'><FaCircle  className='mt-1 text-[#11776A]' /> Believing in us</p>  
                             <p className='flex gap-2 pl-2'><FaCircle  className='mt-1 text-[#11776A]' /> Always caring </p> 
                             </div>
                          </div>
                          
                          <li className='sm:px-8 my-3'>Rainbow Hospital Uluberia is a trusted healthcare center dedicated to providing compassionate and quality medical services to the community. Located in the heart of Uluberia, we offer a wide range of healthcare solutions, including outpatient, inpatient, emergency, diagnostic, and specialty care. Our team of experienced doctors, nurses, and staff work with commitment and integrity to ensure patient comfort and safety.</li>
                          <li className='sm:px-8'>With modern facilities and a patient-first approach, Rainbow Hospital is focused on delivering affordable and accessible treatment to all. We aim to be your partner in health, offering excellence in care with a personal, human touch.</li>
                       </ul>
                    </div>
          
        </div>
        
      {/* section-2 */}
        <Statistics />
      {/* section-3 */}
      <div className='sm:h-[400px] h-[300px] bg-[#035d67]  mt-4 opacity-50 items-center justify-center flex flex-col'>
           <div className='sm:max-w-2/4 w-4/5 text-center text-white font-semibold md:text-2xl text-md mt-12'>
           " lorem ipsum dolor sit amet consectetur adipisicing elit
           lorem ipsum dolor sit amet consectetur adipisicing elit
           lorem ipsum dolor sit amet consectetur adipisicing elit
           lorem ipsum dolor sit amet consectetur adipisicing elit
           lorem ipsum dolor sit amet consectetur adipisicing elit
           lorem ipsum dolor sit amet consectetur adipisicing elit "
           </div>
           <span className='h-[0.2rem] w-[15rem] m-auto bg-red-500 mt-4'></span>
            
        </div>
      {/* section-4 */}
        <div className='px-[13%] mt-6'>
          <Swiper />
        </div>
      {/* component */}
      <GetInTouch />
      </div>
  )
}

export default About
