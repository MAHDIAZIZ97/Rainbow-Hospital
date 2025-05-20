import React, { useState,useContext } from 'react'
import { adminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const UpdateStaff = () => {
  const [image,setImage] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {backendUrl, aToken} = useContext(adminContext);

  const onSubmitHandler = async (event) => {
      event.preventDefault();
      setIsSubmitting(true);
      try {
          if(!image) return  toast.error('Please upload image for staff');
          const formData = new FormData();
          formData.append('image', image);
          formData.append('name', name);
          formData.append('email', email);
          formData.append('id', id);
          formData.append('password', password);

          await new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            }, 2000);
          })

          const { data } = await axios.post(backendUrl+'/api/admin/add-staff', formData, {headers: {aToken}});
          if(data.success){
            toast.success(data.message);
            setImage(null);
            setName('');
            setEmail('');
            setId('');
            setPassword('');
            
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
        className='border-2 border-gray-400 p-3 m-3 rounded-md'
        onSubmit={onSubmitHandler}
        encType='multipart/form-data'
        >
      <p className='my-3 text-2xl text-[#035d67] font-semibold'>Edit Staff</p>
      <div>
        <div className='flex gap-1.5 my-4'>
            <label htmlFor='image'>
            <img src={image ? URL.createObjectURL(image) : '/image.png'} className='h-15 w-15 rounded-full border-1 '/>
            </label>
            <input 
                type='file' 
                id='image' hidden 
                name='image'
                accept='image/*'
                onChange={(e) => setImage(e.target.files[0])}
                />
            <p>Upload staff <br />Image</p>
        </div>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
               type='text'
               id='name' required 
               className='outline-2 outline-gray-300 rounded-sm px-2 h-8 mx-2 my-2 w-70'
               name='name'
               value={name}
               onChange={(e) => setName(e.target.value)}
               />
          <label htmlFor='email'>Email:</label>
          <input 
              type='email' 
              id='email' required 
              className='outline-2 outline-gray-300 rounded-sm px-2 h-8 mx-2 my-2 w-70'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
        </div>
        <div>
          <label htmlFor='id'>Employee Id:</label>
          <input 
            type='text' 
            id='id' required 
            className='outline-2 outline-gray-300 rounded-sm px-2 h-8 mx-2 my-2 w-59'
            value={id}
            name='id'
            onChange={(e) => setId(e.target.value)}
            />
          <label htmlFor='password'>Password:</label>
          <input 
              type='password' 
              id='password' required 
              name='password'
              className='outline-2 outline-gray-300 rounded-sm px-2 h-8 mx-2 my-2 w-63'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

export default UpdateStaff
