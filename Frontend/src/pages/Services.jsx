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
      <div className='flex flex-col items-center sm:flex-row flex-wrap gap-x-2 gap-y-5 justify-center px-[13%] my-8'>
        <NavLink to='/services/opd'>
            <ServiceCard name={`OPD`} basicDesc={`basic desc about opd`} image={assets.doc1} />  
        </NavLink>
        <NavLink to='/services/ipd'>
        <ServiceCard name={`IPD`} basicDesc={`basic desc about opd`}  image={assets.contact_image} />
        </NavLink>
        <NavLink to='/services/pathology'>
        <ServiceCard name={`PATHOLOGY`} basicDesc={`basic desc about opd`} image={assets.about_image} />
          </NavLink>
          <NavLink to='/services/ot'>
          <ServiceCard name={`OT`} basicDesc={`basic desc about opd`} image={assets.appointment_img}/>
          </NavLink>
          <NavLink to='/services/radiology'>
          <ServiceCard name={`RADIOLOGY`} basicDesc={`basic desc about opd`} image={'/rainbow_logo.png'} />
          </NavLink>
          <NavLink to='/services/physiotherapy'>
          <ServiceCard name={`PHYSIOTHERAPY`} basicDesc={`basic desc about opd`} image={assets.about_image} />
          </NavLink>
          <NavLink to='/services/others'>
          <ServiceCard name={`OTHERS`} basicDesc={`basic desc about opd`} image={assets.appointment_img} />
          </NavLink>
          <NavLink to='/services/emergency'>
          <ServiceCard name={`EMERGENCY`} basicDesc={`basic desc about opd`} image={assets.about_image} />
          </NavLink>
            
            
            
            
            
            
            
         </div>
      {/* component */}
      <GetInTouch />
    </div>
  )
}

export default Services
