import React from 'react'
import { assets } from '../assets/assets'
import Hero from '../components/Hero'
import Statistics from '../components/Statistics'
import MapEmbed from '../components/MapEmbed'

const Contact = () => {
  return (
    <div>
    {/* hero props */}
      <Hero 
        image={assets.page2}
        pageRoute={`Home/Contact`}
        pageName={`Contact Us`}
      />
      {/* page content */}
      <div>
        <div className='my-6'>
          <MapEmbed />
        </div>
        <div className='flex sm:flex-row flex-col gap-5 bg-amber-100 px-[13%] '>
           <div className='bg-red-100 w-[50%] h-[20em]'>
                a
           </div>
           <div className='bg-blue-100  w-[50%] h-[20rem]'>
                b
           </div>
        </div>
        <div>
          <Statistics />
        </div>
      </div>
     
      </div>
  )
}

export default Contact
