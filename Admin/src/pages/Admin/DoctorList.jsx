import React, { useContext, useEffect } from 'react'
import { adminContext } from '../../context/AdminContext';

const DoctorList = () => {
  const { doctors,aToken,getAllDoctors } = useContext(adminContext);

  useEffect(() => {
    if(aToken){
      getAllDoctors();
    }
  },[aToken]);
  return (
    <div>
          <h1 className='text-semibold text-4xl ml-5 text-[#035d68] uppercase'>All Doctors</h1>
          <div className='flex gap-3 flex-wrap justify-start'>
            {doctors.map((item,index)=>{
              return(
                <div key={index} className='border-1 border-blue-900 p-2 m-2 rounded-sm w-50 overflow-x-hidden'>
                  <img src={item.image} alt={item.name} className='h-35 w-30 m-auto' />
                  <p>{item.name}</p>
                  <p>{item.speciality}</p>
                  <p>{item.degree}</p>
                  <p>{item.experience}</p>
                  <p>{item.availableDays}</p>
                  <p>Is Available:  
                    <input type="checkbox" defaultChecked={item.available}/>
                 </p>
                </div>)
            })}
          </div>
      </div>
  )
}

export default DoctorList
