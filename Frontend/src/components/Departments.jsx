import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import GetInTouch from './GetInTouch'
import { assets } from '../assets/assets'
import axios from 'axios'

const Departments = ({img1,pageRoute,pageName,depName="demo",details,depHead="LOGIST",docSpeciality}) => {
  const [doctors, setDoctors] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const getAllDoctors = async () => {
      try {
        const {data} = await axios.get(backendUrl + '/api/user/all-doctors');
        if(data.success){
          setDoctors(data.doctors);
          //console.log(data)
        }
      }
      catch (error) {
        console.error('Error:', error);
      }
  }

  useEffect(() => {
    getAllDoctors();
  }, [])

  return (
     
    <div>
       <Hero
        image={img1}
        pageRoute={pageRoute}
        pageName={pageName} />
        {/* hero section */}
        <div className='flex  items-center justify-center w-full h-[400px]'> 
           <div>
              <img src={assets.doc8} alt="doctor" className='h-[400px] w-full object-cover' />
           </div>
           <div className='max-w-2/4'>
              <h1 className='text-3xl'>{depName}</h1>
              {details}
           </div>
        </div>
        {/* transparent section */}
        <div className='h-[400px] bg-[#035d67]  mt-4 opacity-50 items-center justify-center flex flex-col'>
           <div className='max-w-2/4 text-center text-white font-semibold text-2xl mt-15'>
           " lorem ipsum dolor sit amet consectetur adipisicing elit
           lorem ipsum dolor sit amet consectetur adipisicing elit
           lorem ipsum dolor sit amet consectetur adipisicing elit
           lorem ipsum dolor sit amet consectetur adipisicing elit
           lorem ipsum dolor sit amet consectetur adipisicing elit
           lorem ipsum dolor sit amet consectetur adipisicing elit "
           </div>
           <span className='h-[0.2rem] w-[15rem] m-auto bg-red-500 mt-4'></span>
            
        </div>
      {/* doctors */}

         <div className='text-4xl text-[#11667A] font-semibold text-center mt-4'>
            {depHead}
         </div>
        <div className='flex flex-wrap items-center justify-center my-5 gap-3'>
            {/* doctor card */}
            {doctors
            .filter(doc => doc.speciality.toLowerCase() == docSpeciality.toLowerCase())
            .map((doc,id) =>{
                return(
                  <div className='h-80 w-60 bg-[#9ecbd4] rounded-lg my-6 pb-4 ' key={id}>
                      <img src={doc.image} alt="doctor" className='h-2/4 mb-2 w-full object-cover' />
                      <h1 className='text-center text-md text-cyan-900 '>{doc.name}</h1>
                      <h1 className='text-center text-md text-cyan-900 '>{doc.specialization}</h1>
                      <h1 className='text-center text-md text-cyan-900 '>{doc.degree}</h1>
                      <h1 className='text-center text-md text-cyan-900 '>{doc.experience}</h1>
                      <h1 className='text-center text-md text-cyan-900 '>{doc.availableDays}</h1>
                      <h1 className='text-center text-md text-cyan-900 '>{doc.speciality}</h1>
                      <button className='bg-[#035d67] text-white rounded-md px-2 py-1 flex justify-center items-center m-auto cursor-pointer active:scale-95 duration-200 hover:bg-[#33565a]'>
                          Book Now
                      </button>
                </div>
                )
            })}
        </div>
        <GetInTouch />

    </div>
  )
}

export default Departments
  