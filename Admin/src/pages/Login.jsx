import React, { useState,useContext} from 'react'
import { adminContext } from '../context/AdminContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

   const [state, setState] = useState('Admin');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const { setAToken,backendUrl } = useContext(adminContext);

   const onSubmitHandler = async (event) =>{
      event.preventDefault();
      try {
        if (state === 'Admin') {
          const {data} = await axios.post(backendUrl + '/api/admin/login', {email, password});
           if(data.success) {
             localStorage.setItem('aToken', data.token);
             setAToken(data.token);
           }
           else{
             toast.error(data.message);
             localStorage.removeItem('aToken');
             setAToken('');
           }
        }
        else{

        }
      } catch (error) {
        
      }
      }
   

  

  return (
    <form onSubmit={onSubmitHandler} className= ' min-h-[80vh] flex items-center justify-center'>
       <div className='flex flex-col items-start justify-center bg-white p-6 shadow-lg  gap-3 text-sm min-w-[20rem] sm:min-w-96 '>
             <div className='text-2xl font-semibold text-[#11667A] uppercase m-auto'>
             <div className='flex justify-center gap-2 font-bold '>
             <span className='text-2xl font-bold text-cyan-400'>
              {state}
              </span>    Login
             </div>
            
            <div>
              <p className='text-[0.8rem] mt-2'>Email:</p>
              <input type="text" onChange={(e) => setEmail(e.target.value)}  value={email}  required className='border border-[#DADADA] rounded w-80 p-2 mt-1 text-sm text-gray-800 outline-1 '/>
            </div>
            <div>
              <p className='text-[0.8rem] mt-2'>Password:</p>
              <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}  required className='border border-[#DADADA] rounded text-gray-800 outline-1 text-sm p-2 pr-16 mt-1 w-80' />
            </div>
            </div>

            <button className='bg-[#11667A] w-85   text-white py-2  cursor-pointer rounded-lg hover:text-[#11667A] hover:bg-white border-1 border-[#11667A] transition-all duration-200 ease-in font-medium'>Log in</button>
            <div className='px-3'>
            {
              state === 'Admin' ?
              <p>Staff login? <span onClick={() => setState('Staff')}  className='cursor-pointer text-cyan-400 font-normal underline' >Click Here</span></p>
              :<p>Admin login? <span onClick={() => setState('Admin')} className='cursor-pointer text-cyan-400 font-normal underline'>Click Here</span></p>
            }
            </div>
          
       </div>
    </form>
  )
}

export default Login
