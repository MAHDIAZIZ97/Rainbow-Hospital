
import React, {useContext, useState} from 'react'
import { adminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';
import axios from 'axios';


const AddHealthPackage = () => {
  const [name, setName] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState('');
  const [description, setDescription] = useState('');
  const[remarks, setRemarks] = useState('');

  const {backendUrl,aToken} = useContext(adminContext);

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
    const formData = new FormData();
      formData.append('name', name);
      formData.append('originalPrice', originalPrice);
      formData.append('discountedPrice', discountedPrice);
      formData.append('description', description);
      formData.append('remarks', remarks);
   
      const { data } = await axios.post(backendUrl +'/api/admin/add-health-package', {
        name,
        originalPrice,
        discountedPrice,
        description,
        remarks,
      }, {headers: {aToken}});
      
      if(data.success){
        toast.success('Health Package Added Successfully');
        setName('');
        setOriginalPrice(null);
        setDiscountedPrice(null);
        setDescription('');
        setRemarks('');
      } else {
        toast.error('Failed to Add Health Package');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    }
  }
  return (
    <form className='border-1 border-blue-900 p-3 m-3 rounded-sm'
     onSubmit={submitHandler}>
      <p className='my-3 text-2xl text-[#035d67] font-semibold'>Add Health Packages</p>
      <div>
       
        <div>
          <label htmlFor='name'>Name:</label>
          <input 
              type='text' 
              id='name' required 
              className='outline-1 outline-blue-600 mx-2 my-2 w-70'
              value={name}
              name='name'
              onChange={(e) => setName(e.target.value)}
              />
          <label htmlFor='originalPrice'>Original Rate:</label>
          <input 
              type='number' 
              id='originalPrice' required 
              className='outline-1 outline-blue-600 mx-2 my-2 w-52'
              value={originalPrice}
              name='originalPrice'
              onChange={(e) => setOriginalPrice(Number(e.target.value))}
              />
          
          
        </div>
        <div>
          <label htmlFor='discountedPrice'>Disc. Rate:</label>
          <input 
              type='number' 
              id='discountedPrice' required 
              className='outline-1 outline-blue-600 mx-2 my-2 w-54'
              value={discountedPrice}
              name='discountedPrice'
              onChange={(e) => setDiscountedPrice(Number(e.target.value))}
              />
          <label htmlFor='remarks'>Remarks(Any):</label>
          <input 
              type='text' 
              id='remarks'  
              className='outline-1 outline-blue-600 mx-2 my-2 w-60'
              value={remarks}
              name='remarks'
              onChange={(e) => setRemarks(e.target.value)}
              />
          
          
        </div>
        <div>
        <label htmlFor='description'>Details:</label>
          <textarea className='outline-1 outline-blue-600 mx-2 mt-2 min-w-148'
            id='description'
            name='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className='flex justify-center'>
        <button className='mt-2 bg-[#035d67] px-3 py-1 rounded-lg text-white cursor-pointer active:text-[#035d67] active:bg-white border-1 border-[#035d67] transition-all duration-100 ease-in '   type='submit'>Submit</button>
        </div>
      </div>
    </form>
  )
}

export default AddHealthPackage
