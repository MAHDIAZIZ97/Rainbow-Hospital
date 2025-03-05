import React, { useState,useContext } from 'react'
import { adminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';
import axios from 'axios';



const AddStaff = () => {
  const [staffImage,setStaffImage] = useState(null);
  const [staffName, setStaffName] = useState('');
  const [staffEmail, setStaffEmail] = useState('');
  const [staffId, setStaffId] = useState('');
  const [staffPassword, setStaffPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {backendUrl, aToken} = useContext(adminContext);

  const onSubmitHandler = async (event) => {
      event.preventDefault();
      setIsSubmitting(true);
      try {
          if(!staffImage) return  toast.error('Please upload image for staff');

          const formData = new FormData();
          formData.append('staffImage', staffImage);
          formData.append('staffName', staffName);
          formData.append('staffEmail', staffEmail);
          formData.append('staffId', staffId);
          formData.append('staffPassword', staffPassword);

          await new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            }, 2000);
          })

          const { data } = await axios.post(backendUrl+'/api/admin/add-staff', formData, {headers: {aToken}});
          if(data.success){
            toast.success(data.message);
            setStaffImage(null);
            setStaffName('');
            setStaffEmail('');
            setStaffId('');
            setStaffPassword('');
            
          }else{
            toast.error(data.message);
          }

      } catch (error) {
        console.log(error);
        toast.error('Failed to add staff');
      }
      finally{
        setIsSubmitting(false);
      }

  }
  return (
    <form 
        className='border-1 border-blue-900 p-3 m-3 rounded-sm'
        onSubmit={onSubmitHandler}
        encType='multipart/form-data'
        >
      <p className='my-3 text-2xl text-[#035d67] font-semibold'>Add Staff</p>
      <div>
        <div className='flex gap-1.5 my-4'>
            <label htmlFor='staffImage'>
            <img src={staffImage ? URL.createObjectURL(staffImage) : '/image.png'} className='h-15 w-15 rounded-full border-1 '/>
            </label>
            <input 
                type='file' 
                id='staffImage' hidden 
                name='staffImage'
                accept='image/*'
                onChange={(e) => setStaffImage(e.target.files[0])}
                />
            <p>Upload staff <br />Image</p>
        </div>
        <div>
          <label htmlFor='staff-name'>Name:</label>
          <input
               type='text'
               id='staff-name' required 
               className='outline-1 outline-blue-600 mx-2 my-2 w-70'
               value={staffName}
               onChange={(e) => setStaffName(e.target.value)}
               />
          <label htmlFor='staffEmail'>Email:</label>
          <input 
              type='email' 
              id='staffEmail' required 
              className='outline-1 outline-blue-600 mx-2 my-2 w-70'
              value={staffEmail}
              onChange={(e) => setStaffEmail(e.target.value)}
              />
        </div>
        <div>
          <label htmlFor='staffId'>Employee Id:</label>
          <input 
            type='text' 
            id='staffId' required 
            className='outline-1 outline-blue-600 mx-2 my-2 w-59'
            value={staffId}
            onChange={(e) => setStaffId(e.target.value)}
            />
          <label htmlFor='staffPassword'>Password:</label>
          <input 
              type='password' 
              id='staffPassword' required 
              className='outline-1 outline-blue-600 mx-2 my-2 w-63'
              value={staffPassword}
              onChange={(e) => setStaffPassword(e.target.value)}
              />
        </div>
        <div className='flex justify-center'>
        <button className='mt-2 bg-[#035d67] px-3 py-1 rounded-lg text-white cursor-pointer  border-[#035d67] transition-all duration-100 ease-in '  
           type='submit'
           disabled={isSubmitting}
        >{isSubmitting ? 'Adding...' : 'Submit'}
        </button>
        </div>
        
      </div>

      
    </form>
  )
}

export default AddStaff
