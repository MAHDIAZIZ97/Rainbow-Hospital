import React, { useContext, useEffect, useState } from 'react'
import { adminContext } from '../../context/AdminContext';

const DoctorList = () => {
  const { doctors,aToken,getAllDoctors } = useContext(adminContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4); // Default items per page
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.speciality.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.degree.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.experience.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const totalPages = Math.ceil(doctors.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDoctors = filteredDoctors.slice(startIndex, endIndex);

  useEffect(() => {
    if(aToken){
      getAllDoctors();
    }
  },[aToken]);
  return (
    // Logic for displaying items per page
    
    <div>
          <h1 className='text-semibold text-4xl ml-5 text-[#035d68] uppercase'>All Doctors</h1>
               <div className="ml-5 mb-3 mt-3">
                  <label className="mr-2 font-semibold">Items per page:</label>
                  <select
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value));
                      setCurrentPage(1); // Reset to first page on change
                    }}
                    className="border-1"
                  >
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="16">16</option>
                    <option value="24">24</option>
                  </select>
                </div>
                <div className='ml-2'>
                    <input 
                        type="text" 
                        placeholder="Search Doctor" 
                        className="  pl-1 rounded-sm w-50 outline-1"
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)}
                        />
                </div>
          <div className='flex gap-3 flex-wrap justify-start'>
            {currentDoctors.map((item,index)=>{
              return(
                <div key={index} className='border-1 border-blue-900 p-2 m-2 rounded-sm w-50 overflow-x-hidden'>
                  <img src={item.image} alt={item.name} className='h-35 w-30 m-auto' />
                  <p>{item.name}</p>
                  <p>{item.speciality}</p>
                  <p>{item.degree}</p>
                  <p>{item.experience}</p>
                  <p>{item.availableDays}</p>
                  <p>Is Available:  
                    <input type="checkbox" defaultChecked={item.available}/>
                 </p>
                </div>)
            })}
          </div>

          <div className="mt-4 ml-5">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-1 border bg-gray-200 rounded mr-2 disabled:opacity-50"
        >
          Prev
        </button>

       {[...Array(totalPages)].map((_, i) => {
            const shouldShow =
                i < 3 || 
                i > totalPages - 4 ||
                (i >= currentPage - 2 && i <= currentPage + 2); 

            if (shouldShow) {
                return (
                    <span
                        className={`px-2 py-1 border border-gray-300 cursor-pointer ${currentPage === i + 1 ? 'bg-gray-100' : ''}`}
                        onClick={() => setCurrentPage(i + 1)}
                        key={i}
                    >
                        {i + 1}
                    </span>
                );
            } else if (
                (i === 3 && currentPage > 5) || 
                (i === totalPages - 4 && currentPage < totalPages - 4) 
            ) {
                return <span key={i} className='px-2 py-1 border border-gray-300 '>...</span>;
            }

            return null;
        })}


        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-1 border bg-gray-200 rounded ml-2 disabled:opacity-50"
        >
          Next
        </button>
        <span className='float-end'>
           Total Doctors: {filteredDoctors.length} ||
          Total Pages: {totalPages}
        </span>
      </div>
      </div>
  )
}

export default DoctorList
