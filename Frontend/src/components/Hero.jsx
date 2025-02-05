import React from 'react'

const Hero = ({image,pageRoute,pageName}) => {
  return (
    <>
    <div className='w-full md:h-70 h-50 bg-cover bg-center rounded-lg px-35 py-[5%] shadow-lg opacity-80' style={{ backgroundImage: `url(${image})`}}>  
      <p className='text-cyan-800 text-2xl font-semibold'>{pageRoute}</p>
      <p className='text-[#11667A] text-4xl font-bold '>{pageName}</p>
       
    </div>
        <div className='grid grid-cols-12'>
          <div className='col-span-3 h-1.5 bg-cyan-400'></div>
          <div className='col-span-6 h-1.5 bg-[#11667A]'></div>
          <div className='col-span-3 h-1.5 bg-cyan-400'></div>
       </div>
    </>
  )
}

export default Hero
