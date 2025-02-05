import React from 'react'
import Hero from '../components/Hero'
import { assets } from '../assets/assets'
import GetInTouch from '../components/GetInTouch'

const Appointment = () => {
  return (
    <div>
    {/* hero props */}
      <Hero 
        image={assets.page2}
        pageRoute={`Home/Doctors`}
        pageName={`Our Doctors`}
      />
      {/* page content */}
      Services
      {/* component */}
      <GetInTouch />
      </div>
  )
}

export default Appointment
