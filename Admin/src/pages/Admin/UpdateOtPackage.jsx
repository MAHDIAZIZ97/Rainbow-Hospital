
import axios from 'axios';
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { adminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';
const UpdateOtPackage = () => {
  const [name,setName] = useState('');
  const [department, setDepartment] = useState('');
  const [price, setPrice] = useState('');
  const [remarks, setRemarks] = useState('');
  const {backendUrl,aToken} = useContext(adminContext);
  const [isSubmitting,setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {

      const formData = new FormData();
      formData.append('name', name);
      formData.append('department', department);
      formData.append('price', price);
      formData.append('remarks', remarks);

      // for(let d of formData) {
      //   console.log(d[0] + ':' + d[1]);  // Debugging purposes for form data
      // }

      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 1000); // Simulating network delay
      });
  
      const {data} = await axios.post(backendUrl+ '/api/admin/add-ot-package', {
        name,
        department,
        price,
        remarks,
      }, {headers:{aToken}});
      
       if(data.success){
        toast.success('Package saved successfully');
        setName('');
        setDepartment('');
        setPrice('');
        setRemarks('');
       }
       else{
        toast.error('Failed to save package');
       }
      
    } catch (error) {
       console.error('Error:', error);
      toast.error('Failed to save package');
    }
    finally{
      setIsSubmitting(false);
    }
  }


  return (
    <form 
        className='border-2 border-gray-400 p-3 m-3 rounded-md'
        onSubmit={handleSubmit}>
      <p className='my-3 text-2xl text-[#035d67] font-semibold'>Edit Ot Packages</p>
      <div>
        
        <div>
          <label htmlFor='name'>Ot Name:</label>
          <input 
              type='text' 
              id='name' 
              name='name' required 
              className='outline-2 outline-gray-300 rounded-sm px-2 h-8 mx-2 my-2 w-70'
              value={name} 
              onChange={(e) => setName(e.target.value)}  
              />

          <label htmlFor='department'>Department:</label>
          <input
               type='text' 
               id='department' 
               name='department' required 
               className='outline-2 outline-gray-300 rounded-sm px-2 h-8 mx-2 my-2 w-70'
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
               />
        </div>
        <div>
          <label htmlFor='price'>Rate (Rs.):</label>
          <input
               type='number'
               id='price' 
               name='price' required 
               className='outline-2 outline-gray-300 rounded-sm px-2 h-8 mx-2 my-2 w-59'
                value={price}
                onChange={(e) => setPrice(e.target.value)} 
               />
          <label htmlFor='remarks'>Remarks:</label>
          <input 
              type='text' 
              id='remarks'
              name='remarks'  
              className='outline-2 outline-gray-300 rounded-sm px-2 h-8 mx-2 my-2 w-86'
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}  
              />
        </div>
        <div className='flex justify-center'>
        <button className={`mt-2  px-3 py-1 rounded-lg text-white  border-[#035d67] transition-all duration-100 ease-in ${isSubmitting ?'cursor-not-allowed bg-[#b3e0e4ef]':'cursor-pointer bg-[#035d67]'} ` }
           type='submit'
           disabled={isSubmitting}
        >
         {isSubmitting ? <img  src='/loader.gif' alt='Loading...' width="42"/> : 'Update'}
        </button>
        </div>
      </div>
    </form>
  )
}
export default UpdateOtPackage;