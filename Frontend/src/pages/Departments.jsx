import React from 'react'
import { NavLink } from 'react-router-dom'
import GetInTouch from '../components/GetInTouch'
import { assets } from '../assets/assets'
import Hero from '../components/Hero'

const Departments = () => {
  return (
    <>
     <Hero 
        image={assets.page2}
        pageRoute={`Home/Departments`}
        pageName={`Our Departments`}
      />
    <div>
    <div className='text-center'> 
        <h1 className='text-[#11667A] text-4xl font-semibold uppercase '>Departments</h1>
    </div>
     <div className='flex flex-wrap gap-4 justify-center items-center my-5'>
        <NavLink to='/departments/cardiology'>
            <div className='sm:h-80 sm:w-80 h-40 w-40 bg-[#9ecbd4] rounded-lg my-6'>
                <img src={assets.doc8} />
                <h1 className='text-center sm:sm:text-2xl text-xl text-[#035d67] font-semibold'>Cardiology</h1>
            </div>
          </NavLink>
          <NavLink to='/departments/neurology'>
            <div className='sm:h-80 sm:w-80 h-40 w-40 bg-[#9ecbd4] rounded-lg my-6'>
                <img src={assets.doc8} />
                <h1 className='text-center sm:text-2xl text-xl text-[#035d67] font-semibold'>Neurology</h1>
            </div>
          </NavLink>
          <NavLink to='/departments/gynecology'>
            <div className='sm:h-80 sm:w-80 h-40 w-40 bg-[#9ecbd4] rounded-lg my-6'>
                <img src={assets.doc8} />
                <h1 className='text-center sm:text-2xl text-xl text-[#035d67]  font-semibold'>Gynecology</h1>
            </div>
          </NavLink>
          <NavLink to='/departments/orthopedics'>
            <div className='sm:h-80 sm:w-80 h-40 w-40 bg-[#9ecbd4] rounded-lg my-6'>
                <img src={assets.doc8} />
                <h1 className='text-center sm:text-2xl text-xl text-[#035d67] font-semibold'>Orthopaedics</h1>
            </div>
          </NavLink>
          <NavLink to='/departments/cardiology'>
            <div className='sm:h-80 sm:w-80 h-40 w-40 bg-[#9ecbd4] rounded-lg my-6'>
                <img src={assets.doc8} />
                <h1 className='text-center sm:text-2xl text-xl text-[#035d67] font-semibold'>Cardiology</h1>
            </div>
          </NavLink>
          <NavLink to='/departments/cardiology'>
            <div className='sm:h-80 sm:w-80 h-40 w-40 bg-[#9ecbd4] rounded-lg my-6'>
                <img src={assets.doc8} />
                <h1 className='text-center sm:text-2xl text-xl text-[#035d67] font-semibold'>Cardiology</h1>
            </div>
          </NavLink>
     </div>
     
    </div>
    <GetInTouch />
    </>
  )
}

export default Departments
