import React from 'react';
import { useContext,useEffect } from 'react';
import { adminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const NoticeList = () => {

  const {notices,aToken, getAllNotices,backendUrl} = useContext(adminContext);


  useEffect(() => {
    if(aToken){
      getAllNotices();
    }
  } , [aToken]);

  const handleNoticeDelete = async (id) => {
         try {
          const confirmDelete = window.confirm("Are you sure you want to delete this notice?");
          if(!confirmDelete) return;
          await axios.post(backendUrl +`/api/admin/delete-notice/${id}`,{},{headers: {aToken}});
          notices.filter(item => item._id !== id);
          getAllNotices();
          toast.success("OT package deleted successfully");
         } catch (error) {
            console.error(error.message);
            toast.error("Failed to delete OT package");
         }
         
      }


  return (
    <div>
        <h1 className="text-semibold text-4xl ml-5 my-3 text-[#035d68] uppercase">All Notices</h1>
        <table className='table-auto min-w-200'>
            <thead className='bg-gray-200 border-1 '>
                <tr >
                    <th className='border-1'>Notice Name</th>
                    <th className='border-1'>File</th>
                    <th className='border-1'>Action</th>
                </tr>
            </thead>
            <tbody>
            {
              notices.map((notice,index) => (
                <tr key={index}>
                  <td className='border-1 pl-5 py-2'>{notice.name}</td>
                  <td className='border-1 pl-5 py-2 translate-x-13'>
                      <a
                        href={`${backendUrl}/uploads/pdfs/${notice.file}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#035d67] text-white px-3 py-1  rounded-md hover:bg-cyan-900"
                      >
                        View PDF
                      </a>
                  </td>
                  <td className='border-1 pl-5 py-2 translate-x-13'>
                  <button
                    className='bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700'
                    onClick={() => handleNoticeDelete(notice._id)}
                  >Delete</button>
                  </td>
                </tr>
              ))
            }
            </tbody>
        </table>
        </div>
  )
}

export default NoticeList
