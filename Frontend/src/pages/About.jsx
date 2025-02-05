import React from 'react'
import GetInTouch from '../components/GetInTouch'
import Hero from '../components/Hero'
import { assets } from '../assets/assets'
import Statistics from '../components/Statistics'
import  Swiper  from '../components/Swiper'
import { FaCircle } from "react-icons/fa";
import Transparent from '../components/Transparent'

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
            <div className='col-span-4 bg-amber-100'>
               
            </div>
           <div className='col-span-6 hidden md:block'>
                       <ul>
                          <li className='text-2xl font-bold py-2 text-center'>A passion for putting patients first.</li>
                          <div className='flex gap-3 justify-start pl-8'>
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
                          
                          <li className='px-8 my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</li>
                          <li className='px-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque  faucibus porttitor enim et.</li>
                       </ul>
                    </div>
          
        </div>
        
      {/* section-2 */}
        <Statistics />
      {/* section-3 */}
       <Transparent />
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
