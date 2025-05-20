import React from 'react'
import GetInTouch from '../components/GetInTouch'
import Hero from '../components/Hero'
import { assets } from '../assets/assets'
import ServiceCard from '../components/ServiceCard'
import { NavLink } from 'react-router-dom'


const Services = () => {
  return (
    <div>
    {/* hero props */}
      <Hero 
        image={assets.page2}
        pageRoute={`Home/Services`}
        pageName={`Our Services`}
      />
      {/* page content */}
      <div>
          <div className='text-center'> 
              <h1 className='text-[#11667A] text-4xl font-semibold uppercase '>Our Services</h1>
          </div>
           <div className='flex flex-wrap gap-4 justify-center items-center my-5'>
              <NavLink to='/services/ipd'>
                  <div className='sm:h-80 sm:w-80 h-40 w-40 bg-[#9ecbd4] rounded-lg my-6'>
                      <img src={assets.doc8} />
                      <h1 className='text-center sm:text-2xl text-xl text-[#035d67] font-semibold'>In Patient</h1>
                  </div>
                </NavLink>
                <NavLink to='/services/opd'>
                  <div className='sm:h-80 sm:w-80 h-40 w-40 bg-[#9ecbd4] rounded-lg my-6'>
                      <img src={assets.doc8} />
                      <h1 className='text-center sm:text-2xl text-xl text-[#035d67] font-semibold'>Out Patient</h1>
                  </div>
                </NavLink>
                <NavLink to='/services/ot'>
                  <div className='sm:h-80 sm:w-80 h-40 w-40 bg-[#9ecbd4] rounded-lg my-6'>
                      <img src={assets.doc8} />
                      <h1 className='text-center sm:text-2xl text-xl text-[#035d67]  font-semibold'>Operation</h1>
                  </div>
                </NavLink>
                <NavLink to='/services/pathology'>
                  <div className='sm:h-80 sm:w-80 h-40 w-40 bg-[#9ecbd4] rounded-lg my-6'>
                      <img src={assets.doc8} />
                      <h1 className='text-center sm:text-2xl text-xl text-[#035d67] font-semibold'>Pathology</h1>
                  </div>
                </NavLink>
                <NavLink to='/services/physiotherapy'>
                  <div className='sm:h-80 sm:w-80 h-40 w-40 bg-[#9ecbd4] rounded-lg my-6'>
                      <img src={assets.doc8} />
                      <h1 className='text-center sm:text-2xl text-xl text-[#035d67] font-semibold'>Physiotherapy</h1>
                  </div>
                </NavLink>
                <NavLink to='/services/radiology'>
                  <div className='sm:h-80 sm:w-80 h-40 w-40 bg-[#9ecbd4] rounded-lg my-6'>
                      <img src={assets.doc8} />
                      <h1 className='text-center sm:text-2xl text-xl text-[#035d67] font-semibold'>Radiology</h1>
                  </div>
                </NavLink>
                <NavLink to='/services/emergency'>
                  <div className='sm:h-80 sm:w-80 h-40 w-40 bg-[#9ecbd4] rounded-lg my-6'>
                      <img src={assets.doc8} />
                      <h1 className='text-center sm:text-2xl text-xl text-[#035d67] font-semibold'>Emergency</h1>
                  </div>
                </NavLink>
                <NavLink to='/services/packages'>
                  <div className='sm:h-80 sm:w-80 h-40 w-40 bg-[#9ecbd4] rounded-lg my-6'>
                      <img src={assets.doc8} />
                      <h1 className='text-center sm:text-2xl text-xl text-[#035d67] font-semibold'>Packages</h1>
                  </div>
                </NavLink>
                <NavLink to='/services/others'>
                  <div className='sm:h-80 sm:w-80 h-40 w-40 bg-[#9ecbd4] rounded-lg my-6'>
                      <img src={assets.doc8} />
                      <h1 className='text-center sm:text-2xl text-xl text-[#035d67] font-semibold'>Others</h1>
                  </div>
                </NavLink>
           </div>
           
          </div>
      {/* component */}
      <GetInTouch />
    </div>
  )
}

export default Services
