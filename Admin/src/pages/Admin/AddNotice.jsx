
import axios from 'axios';
import React,{useState,useContext} from 'react'
import { adminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';

const AddNotice = () => {

const [name, setName] = useState('');
const [file, setFile] = useState(null);

const {aToken, backendUrl} = useContext(adminContext);

const handleFileChange = (e) => {
     const file = e.target.files[0];
     if(file && file.type === 'application/pdf') {
       setFile(file);
     } else {
        toast.error('Please select a pdf file');
      }
}

const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('file', file); 

      // for(let a in formData) {
      //   console.log(a[0] + ':' + a[1]);
      // }
      
     const { data } =  await axios.post(`${backendUrl}/api/admin/add-notice`, formData, {headers: {aToken}});
      if (data.success) {
        toast.success('Notice added successfully');
        setName('');
        setFile(null);
      }
      else {
        toast.error('Failed to add Notice');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error(error.message);
    }
}
  
  return (
    <>
    <div>
    <form className='border-1 border-blue-90  0 p-3 m-3 rounded-sm'
     onSubmit={submitHandler}>
      <p className='my-3 text-2xl text-[#035d67] font-semibold'>Add Notice</p>
      <div>
       
        <div>
          <label htmlFor='name'>Name:</label>
          <textarea 
              type='text' 
              id='name' required 
              className='outline-1 outline-blue-600 mx-2 my-2 w-150'
              value={name}
              name='name'
              onChange={(e) => setName(e.target.value)}
              />
         
        </div>
        <div>
            <label htmlFor='file'>File:</label>
            <input  
                type='file' 
                id='file' required 
                className='outline-1 outline-blue-600 mx-2 my-2 w-154 cursor-pointer' 
                accept='application/pdf'
                name='file'
                onChange={handleFileChange}
                />
        </div>
        <div className='flex justify-center'>
        <button className='mt-2 bg-[#035d67] px-3 py-1 rounded-lg text-white cursor-pointer active:text-[#035d67] active:bg-white border-1 border-[#035d67] transition-all duration-100 ease-in '   type='submit'>Submit</button>
        </div>
        
      </div>
      
    </form>
    </div>
    </>
  )
}

export default AddNotice