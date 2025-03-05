import React, { useContext, useEffect } from 'react'
import { adminContext } from '../../context/AdminContext';

const StaffList = () => {
  const { staffs,aToken,getAllStaffs } = useContext(adminContext);
  useEffect(() => {
    if(aToken){
      getAllStaffs();
    }
  },[aToken]);
  return (
    
      <div>
          <h1 className='text-semibold text-4xl ml-5 text-[#035d68] uppercase'>All Staff</h1>
          <div className='flex gap-3 flex-wrap justify-start'>
            {staffs.map((item,index)=>{
              return(
                <div key={index} className='border-1 border-blue-900 p-3 m-3 rounded-sm w-50 overflow-x-hidden'>
                  <img src={item.staffImage} alt={item.staffName} className='h-35 w-30 m-auto' />
                  <p>{item.staffName}</p>
                  <p>{item.staffEmail}</p>
                  <p>{item.staffId}</p>
                </div>)
            })}
          </div>
      </div>
    
  )
}

export default StaffList
