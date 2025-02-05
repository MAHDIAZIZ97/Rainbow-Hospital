import React, { useContext,useNavigate } from 'react'
import { adminContext } from '../context/AdminContext'
import { assets } from '../assets/assets';

const Navbar = () => {
const {aToken,setAToken} = useContext(adminContext);
const navigate = useNavigate;

const logout = () =>{
    navigate('/');
    aToken && setAToken('');
    aToken && localStorage.removeItem('aToken')
}
  return (
    <div className='flex justify-between items-center p-4 px-8 bg-amber-50'>
      <div className='flex items-center'>
        <img src={assets.logoR}  className='w-50 h-15'/>
        <p className=' text-[#11667A] border-2 px-2 py-1 rounded-xl font-medium '>
            {aToken ? 'Admin' : 'User'}
        </p>
      </div>
      <button onClick={logout} className='bg-[#11667A] text-white rounded-xl font-medium px-4 py-2 cursor-pointer  active:bg-white active:text-[#11667A] border-1 border-[#11667A] transition-all duration-300 ease-initial' title='Logout'>Logout</button>
    </div>
  )
}

export default Navbar
