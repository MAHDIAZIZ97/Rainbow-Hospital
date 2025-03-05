
import React from 'react'
const AddOtPackage = () => {
  return (
    <form className='border-1 border-blue-900 p-3 m-3 rounded-sm'>
      <p className='my-3 text-2xl text-[#035d67] font-semibold'>Add Ot Packages</p>
      <div>
        
        <div>
          <label htmlFor='staff-name'>Ot Name:</label>
          <input type='text' id='staff-name' required className='outline-1 outline-blue-600 mx-2 my-2 w-70'/>
          <label htmlFor='staff-email'>Department:</label>
          <input type='email' id='staff-email' required className='outline-1 outline-blue-600 mx-2 my-2 w-70'/>
        </div>
        <div>
          <label htmlFor='staff-id'>Rate:</label>
          <input type='text' id='staff-id' required className='outline-1 outline-blue-600 mx-2 my-2 w-59'/>
          <label htmlFor='staff-password'>Others:</label>
          <input type='password' id='staff-password' required className='outline-1 outline-blue-600 mx-2 my-2 w-98'/>
        </div>
        <div className='flex justify-center'>
        <button className='mt-2 bg-[#035d67] px-3 py-1 rounded-lg text-white cursor-pointer active:text-[#035d67] active:bg-white border-1 border-[#035d67] transition-all duration-100 ease-in '   type='submit'>Submit</button>
        </div>
      </div>
    </form>
  )
}
export default AddOtPackage