
import React, {useContext, useState} from 'react'
import { adminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';
import axios from 'axios';
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // 


const AddHealthPackage = () => {
  const [name, setName] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState('');
  const [description, setDescription] = useState('');
  const[remarks, setRemarks] = useState('');
  const[isSubmitting, setIsSubmitting] = useState(false);

  const {backendUrl,aToken} = useContext(adminContext);

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
    const formData = new FormData();
      formData.append('name', name);
      formData.append('originalPrice', originalPrice);
      formData.append('discountedPrice', discountedPrice);
      formData.append('description', description);
      formData.append('remarks', remarks);

      await new Promise((resolve) =>{
        setTimeout(() => {
          resolve();
        }, 2000);
      })
   
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
    finally{
        setIsSubmitting(false);
      }
  }
  return (
    <form className='border-2 border-gray-400 p-3 m-3 rounded-md'
     onSubmit={submitHandler}>
      <p className='my-3 text-2xl text-[#035d67] font-semibold'>Add Health Packages</p>
      <div>
       
        <div>
          <label htmlFor='name'>Name:</label>
          <input 
              type='text' 
              id='name' required 
              className='outline-2 outline-gray-300 rounded-sm px-2 h-8 mx-2 my-2 w-70'
              value={name}
              name='name'
              onChange={(e) => setName(e.target.value)}
              />
          <label htmlFor='originalPrice'>Original Rate:</label>
          <input 
              type='number' 
              id='originalPrice' required 
              className='outline-2 outline-gray-300 rounded-sm px-2 h-8 mx-2 my-2 w-52'
              value={originalPrice}
              name='originalPrice'
              onChange={(e) => setOriginalPrice(Number(e.target.value))}
              />
          
          
        </div>
        <div>
          <label htmlFor='discountedPrice'>Disc.Rate:</label>
          <input 
              type='number' 
              id='discountedPrice' required 
              className='outline-2 outline-gray-300 rounded-sm px-2 h-8 mx-2 my-2 w-54'
              value={discountedPrice}
              name='discountedPrice'
              onChange={(e) => setDiscountedPrice(Number(e.target.value))}
              />
          <label htmlFor='remarks'>Remarks(Any):</label>
          <input 
              type='text' 
              id='remarks'  
              className='outline-2 outline-gray-300 rounded-sm px-2 h-8 mx-2 my-2 w-60'
              value={remarks}
              name='remarks'
              onChange={(e) => setRemarks(e.target.value)}
              />
          
          
        </div>
        <div>
        <label htmlFor='description'>Details:</label>
          <textarea className='outline-2 outline-gray-300 rounded-sm px-2  mx-2 mt-2 min-w-148'
            id='description'
            name='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)} />
        {/* <CKEditor
        editor={ClassicEditor}
        data={description}
        onChange={(event, editor) => {
          const data = editor.getData();
          setDescription(data);
        }}
      />
      <p className="mt-4 text-gray-600">Preview:</p>
      <div className="border p-2 mt-2" dangerouslySetInnerHTML={{ __html: description }} /> */}
      {/* <ReactQuill value={description} onChange={(e) => setDescription(e.target.value)} theme="snow" /> */}
        </div>
        <div className='flex justify-center'>
        <button className={`mt-2  px-3 py-1 rounded-lg text-white  border-[#035d67] transition-all duration-100 ease-in ${isSubmitting ?'cursor-not-allowed bg-[#b3e0e4ef]':'cursor-pointer bg-[#035d67]'} ` }
           type='submit'
           disabled={isSubmitting}
        >
         {isSubmitting ? <img  src='/loader.gif' alt='Loading...' width="42"/> : 'Submit'}
        </button>
        </div>
      </div>
    </form>
  )
}

export default AddHealthPackage
