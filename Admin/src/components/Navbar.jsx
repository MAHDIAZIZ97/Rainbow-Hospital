import React, { useContext } from 'react'
import { adminContext } from '../context/AdminContext'
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { StaffContext } from '../context/StaffContext';
import ThemeToggle from '../ThemeToggle';

const Navbar = () => {
const {aToken,setAToken} = useContext(adminContext);
const {sToken,setSToken} = useContext(StaffContext);
const navigate = useNavigate('');



const logout = () =>{
   if(confirm('Are you sure you want to logout?')){
     setAToken(null);
     setSToken(null);
     localStorage.removeItem('aToken');
     localStorage.removeItem('sToken');
     navigate('/');
   }
   
}
  return (
    <div className='flex justify-between items-center p-4 px-8 dark:bg-[var(--dark-theme)] bg-amber-50'>
      <div className='flex items-center'>
        <img src={assets.logoR}  className='w-50 h-15'/>
        <p className=' text-[#11667A] border-2 px-2 py-1 rounded-xl font-medium '>
            {aToken ? 'Admin' : 'Staff'}
        </p>
      </div>
      <div className='sm:ml-[55rem]'>
        <ThemeToggle />
      </div>
      
      <button  onClick={logout} className='bg-[#11667A] ml-4 text-white rounded-xl font-medium px-4 py-2 cursor-pointer  active:bg-white active:text-[#11667A] border-1 border-[#11667A] transition-all duration-300 ease-initial' title='Logout'>Logout</button>
    </div>
  )
}

export default Navbar
