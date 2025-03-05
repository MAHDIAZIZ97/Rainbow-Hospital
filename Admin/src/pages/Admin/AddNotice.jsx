
import axios from 'axios';
import React,{useState,useContext} from 'react'
import { adminContext } from '../../context/AdminContext';



const AddNotice = () => {
  const [pdf, setPdf] = useState(null);
  const [noticeName, setNoticeName] = useState('');
  const [notices, setNotices] = useState([]);

  const {aToken, backendUrl} = useContext(adminContext);

  const handleUpload = async (e) => {
     e.preventDefault();
     if(!pdf) return alert('No file uploaded');
      if(!noticeName) return alert('Label is required');
      if(!aToken) return alert('Unauthorized Request');

     const formData = new FormData();
      formData.append('pdf', pdf);
      formData.append('noticeName', setNoticeName);


      const { data } = await axios.post(backendUrl + '/upload', formData);
      setNotices([...notices, { id: Date.now(), ...data }]);
      setNoticeName('');
      setPdf(null);
  }

  const handleDelete = (id) => {
    const updatedNotices = notices.filter((notice) => notice.id !== id);
    setNotices(updatedNotices);
};


  return (
    <>
    <div>
    <form className='border-1 border-blue-900 p-3 m-3 rounded-sm'
     onSubmit={handleUpload}>
      <p className='my-3 text-2xl text-[#035d67] font-semibold'>Add Notice</p>
      <div>
       
        <div>
          <label htmlFor='staff-name'>Name:</label>
          <textarea 
              type='text' 
              id='noticeName' required c
              className='outline-1 outline-blue-600 mx-2 my-2 w-150'
              value={noticeName}
              name='noticeName'
              onChange={(e) => setNoticeName(e.target.value)}
              />
         
        </div>
        <div>
            <label htmlFor='noticePdf'>File:</label>
            <input  
                type='file' 
                id='noticePdf' required 
                className='outline-1 outline-blue-600 mx-2 my-2 w-154 cursor-pointer' 
                accept='application/pdf'
                name='noticePdf'
                onChange={(e) => setPdf(e.target.files[0])}
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