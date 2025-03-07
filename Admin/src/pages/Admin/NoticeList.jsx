import React from 'react';
import { useContext,useEffect } from 'react';
import { adminContext } from '../../context/AdminContext';

const NoticeList = () => {

  const {notices,aToken, getAllNotices} = useContext(adminContext);


  useEffect(() => {
    if(aToken){
      getAllNotices();
    }
  } , [aToken]);


  return (
    <div>
        <h1 className="text-semibold text-4xl ml-5 my-3 text-[#035d68] uppercase">All Notices</h1>
        <table className='table-auto min-w-200'>
            <thead className='bg-gray-200 border-1 '>
                <tr >
                    <th className='border-1'>Notice Name</th>
                    <th className='border-1'>File</th>
                </tr>
            </thead>
            <tbody>
            {
              notices.map((notice,index) => (
                <tr key={index}>
                  <td className='border-1 pl-5 py-2'>{notice.name}</td>
                  <td className='border-1 pl-5 py-2'><a href="#">{notice.file}</a></td>
                </tr>
              ))
            }
            </tbody>
        </table>
        </div>
  )
}

export default NoticeList
