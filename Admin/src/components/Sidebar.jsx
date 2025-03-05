import React, {useContext,useState} from 'react'
import { adminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { MdOutlineDashboard } from "react-icons/md"
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosList } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegAddressBook } from "react-icons/fa6";
import { LiaBriefcaseMedicalSolid } from "react-icons/lia";
import { RiLockPasswordLine } from "react-icons/ri";
const Sidebar = () => {
  const {aToken} = useContext(adminContext);
  return (
    <div className='bg-blue-100 min-h-screen min-w-[15%]'>
     {
      aToken && 
      <ul>
         <NavLink className={({isActive})=> `flex gap-2 py-1 items-center px-2 
         ${isActive ? `border-r-4 border-[#035d67] bg-cyan-100`: `null`}`} to={'/admin-dashboard'}>
            <MdOutlineDashboard />
            <p>Dashboard </p>
         </NavLink>
         
         <NavLink className={({isActive})=> `flex gap-2 py-1 items-center px-2 
         ${isActive ? `border-r-4 border-[#035d67] bg-cyan-100`: `null`}`} to={'/all-appointments'}>
            <FaRegAddressBook />
            <p>Appointments</p>
         </NavLink>
         <NavLink className={({isActive})=> `flex gap-2 py-1 items-center px-2 
         ${isActive ? `border-r-4 border-[#035d67] bg-cyan-100`: `null`}`} to={'/add-staff'}>
         <IoIosAddCircleOutline />
            <p>Add Staff</p>
         </NavLink>
         <NavLink className={({isActive})=> `flex gap-2 py-1 items-center px-2 
         ${isActive ? `border-r-4 border-[#035d67] bg-cyan-100`: `null`}`} to={'/staff-list'} >
             <IoIosList />
            <p>Staff List</p>
         </NavLink>
         <NavLink className={({isActive})=> `flex gap-2 py-1 items-center px-2 
         ${isActive ? `border-r-4 border-[#035d67] bg-cyan-100`: `null`}`} to={'/add-doctor'}>
         <IoIosAddCircleOutline />
            <p>Add Doctor</p>
         </NavLink>
         <NavLink className={({isActive})=> `flex gap-2 py-1 items-center px-2 
         ${isActive ? `border-r-4 border-[#035d67] bg-cyan-100`: `null`}`} to={'/doctor-list'}>
            <IoIosList />
            <p>Doctor List</p>
         </NavLink>
         <NavLink className={({isActive})=> `flex gap-2 py-1 items-center px-2 
         ${isActive ? `border-r-4 border-[#035d67] bg-cyan-100`: `null`}`} to={'/health-package-list'}>
         <LiaBriefcaseMedicalSolid />
            <p>Health Packages</p>
         </NavLink>
         <NavLink className={({isActive})=> `flex gap-2 py-1 items-center px-2 
         ${isActive ? `border-r-4 border-[#035d67] bg-cyan-100`: `null`}`} to={'/add-health-package'}>
         <IoIosAddCircleOutline />
            <p>Add Health Pkgs.</p>
         </NavLink>
         <NavLink className={({isActive})=> `flex gap-2 py-1 items-center px-2 
         ${isActive ? `border-r-4 border-[#035d67] bg-cyan-100`: `null`}`} to={'/ot-package-list'}> 
         <LiaBriefcaseMedicalSolid />
            <p>Ot Packages</p>
         </NavLink>
         <NavLink className={({isActive})=> `flex gap-2 py-1 items-center px-2 
         ${isActive ? `border-r-4 border-[#035d67] bg-cyan-100`: `null`}`} to={'/add-ot-package'}>
         <IoIosAddCircleOutline />
            <p>Add Ot Packages</p>
         </NavLink>
         <NavLink className={({isActive})=> `flex gap-2 py-1 items-center px-2 
         ${isActive ? `border-r-4 border-[#035d67] bg-cyan-100`: `null`}`} to={'/notice-list'}>
            <IoMdNotificationsOutline />
            <p>Notice</p>
         </NavLink>
         <NavLink className={({isActive})=> `flex gap-2 py-1 items-center px-2 
         ${isActive ? `border-r-4 border-[#035d67] bg-cyan-100`: `null`}`} to={'/add-notice'}>
         <IoIosAddCircleOutline />
            <p>Add Notice</p>
         </NavLink>
         <NavLink className={({isActive})=> `flex gap-2 py-1 items-center px-2 
         ${isActive ? `border-r-4 border-[#035d67] bg-cyan-100`: `null`}`} to={'/change-password'}>
            <RiLockPasswordLine />
            <p>Change Password</p>
         </NavLink>
      </ul>
     }
    </div>
  )
}
export default Sidebar
