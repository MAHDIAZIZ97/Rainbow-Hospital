import React, { useContext,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { adminContext } from '../../context/AdminContext';

const Dashboard = () => {

  const {staffs,aToken, getAllStaffs,doctors,getAllDoctors,otPackages,getAllOtPackages,healthPackages,getAllHealthPackages} = useContext(adminContext);
  
  
  useEffect(() => {
    if(aToken){
      getAllStaffs();
      getAllDoctors();
      getAllHealthPackages();
      getAllOtPackages();
    }
  },[aToken]);
  return ( aToken &&
    <div className='p-5'>
        <h1 className='text-[#035d67] text-3xl font-semibold'>Dashboard</h1>
       <div className='flex gap-x-3 gap-y-5 flex-wrap justify-start mt-4 '>
        <NavLink to={'/staff-list'}>
            <div className='border-2 border-gray-400 w-50 p-3 rounded-sm'>
                <p className='text-[#035d67] text-2xl uppercase font-semibold'>Total Staffs</p>
                <p className='text-3xl font-bold text-blue-900'>{staffs.length}</p>
               
            </div>
        </NavLink>
        <NavLink to={'/doctor-list'}>
          <div className='border-2 border-gray-400 w-60 p-3  rounded-sm'>
             <p className='text-[#035d67] text-2xl uppercase font-semibold'>Total Doctors</p>
             <p className='text-3xl font-bold text-blue-900'>{doctors.length}</p>
          </div>
        </NavLink>
        <NavLink to={'/ot-package-list'}>
          <div className='border-2 border-gray-400 w-50 p-3 rounded-sm'>
             <p className='text-[#035d67] text-2xl uppercase font-semibold'>Ot Packages</p>
             <p className='text-3xl font-bold text-blue-900'>{otPackages.length}</p>
          </div>
        </NavLink>
        <NavLink to={'/notice-list'}>
          <div className='border-2 border-gray-400 w-60 p-3  rounded-sm'>
             <p className='text-[#035d67] text-2xl uppercase font-semibold'>Total Notice</p>
             <p className='text-3xl font-bold text-blue-900'>14</p>
          </div>
        </NavLink>
        <NavLink to={'/all-appointments'}>
          <div className='border-2 border-gray-400 w-65 p-3 rounded-sm'>
             <p className='text-[#035d67] text-2xl uppercase font-semibold'>Total Appointments</p>
             <p className='text-3xl font-bold text-blue-900'>1234</p>
          </div>
          </NavLink>
        <NavLink to={'/all-appointments'}>
          <div className='border-2 border-gray-400 w-93 p-3  rounded-sm'>
             <p className='text-[#035d67] text-2xl uppercase font-semibold'>Today's Appointments</p>
             <p className='text-3xl font-bold text-blue-900'>23</p>
          </div>
          </NavLink>

          <NavLink to={'/health-package-list'}>
           <div className='border-2 border-gray-400 w-65 p-3  rounded-sm'>
             <p className='text-[#035d67] text-2xl uppercase font-semibold'>Total Health Packages</p>
             <p className='text-3xl font-bold text-blue-900'>{healthPackages.length}</p>
          </div>
          </NavLink>
  
          
          
       </div>
    </div>
  )
}

export default Dashboard
