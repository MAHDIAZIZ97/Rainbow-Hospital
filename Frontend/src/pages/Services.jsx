import React from 'react'
import GetInTouch from '../components/GetInTouch'
import Hero from '../components/Hero'
import { assets } from '../assets/assets'
import ServiceCard from '../components/ServiceCard'

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
            <ServiceCard name={`OPD`} basicDesc={`basic desc about opd`}  />
            <ServiceCard name={`OPD`} basicDesc={`basic desc about opd`} />
            <ServiceCard name={`OPD`} basicDesc={`basic desc about opd`} />
            <ServiceCard name={`OPD`} basicDesc={`basic desc about opd`} />
            <ServiceCard name={`OPD`} basicDesc={`basic desc about opd`} />
            <ServiceCard name={`OPD`} basicDesc={`basic desc about opd`} />
            <ServiceCard name={`OPD`} basicDesc={`basic desc about opd`} />
         </div>
      {/* component */}
      <GetInTouch />
    </div>
  )
}

export default Services
