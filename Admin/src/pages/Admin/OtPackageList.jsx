import React, { useContext, useEffect, useState } from "react";
import { adminContext } from "../../context/AdminContext";
import { useNavigate } from "react-router-dom";

const StaffList = () => {
  const { otPackages, aToken, getAllOtPackages } = useContext(adminContext);
  const navigate = useNavigate('');

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6); // Default items per page
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    if (aToken) {
      getAllOtPackages();
    }
  }, [aToken]);

  const filteredItems = otPackages.filter(pac => 
    pac.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pac.department.toLowerCase().includes(searchTerm.toLowerCase()) || 
    pac.remarks.toLowerCase().includes(searchTerm.toLowerCase()) 
);

  // Calculate total pages
  const totalPages = Math.ceil(otPackages.length / itemsPerPage);

  // Get the current page's data slice
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOtPackages = filteredItems.slice(startIndex, endIndex);

  const convertToIST = (utcDate) => {
    return new Date(utcDate).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  };

  return (
    <div>
      <h1 className="text-semibold text-4xl ml-5 text-[#035d68] uppercase">All OT Packages</h1>

      {/* Dropdown to select items per page */}
      <div className="ml-5 mb-3 mt-2">
        <label className="mr-2 font-semibold">Items per page:</label>
        <select
          value={itemsPerPage}
          onChange={(e) => {
            setItemsPerPage(Number(e.target.value));
            setCurrentPage(1); // Reset to first page on change
          }}
          className="border-1"
        >
          <option value="6">6</option>
          <option value="12">12</option>
          <option value="18">18</option>
          <option value="24">24</option>
        </select>
      </div>
      <div>
        <input 
            type="text" 
            placeholder="Search Ot packages..." 
            className=" pl-2 rounded-md ml-3 w-50 border-2 border-gray-300 h-8" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
      </div>

      {/* Staff List */}
      <div className="flex flex-wrap justify-start">
        {currentOtPackages.map((item, index) => (
          <div key={index} className="border-2 border-gray-400 p-3 m-3 rounded-sm w-70 overflow-x-hidden">
            <p className="text-cyan-500 font-semibold">Name:{item.name}</p>
            <p>Price: <span className="text-blue-900 font-semibold">{item.price}</span></p>
            <p>Department: <span className="text-blue-900 font-semibold">{item.department}</span></p>
            <p>Remarks: <span className="text-blue-900 font-semibold">{item.remarks}</span></p>
            <p>Created At: <span className="text-blue-900 font-semibold">{convertToIST(item.createdAt)}</span></p>
            <p>Updated At: <span className="text-blue-900 font-semibold">{convertToIST(item.updatedAt)}</span></p>
            
            <button 
                className='px-2 py-1 bg-[var(--sign-color)] rounded-md text-white cursor-pointer'
                onClick={() => navigate(`/edit-ot-package/${item._id}`)}
                >
                Edit
              </button>
              <button 
                className='px-2 mx-3 py-1 bg-[var(--sign-color)] rounded-md text-white cursor-pointer'
                onClick={() => confirm('Are you sure you want to delete??')}
                >
                Delete
              </button>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="mt-4 ml-5">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-1 border bg-gray-200 rounded mr-2 disabled:opacity-50"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_,i) =>
             <span className= { `px-2 py-1 border-1 border-gray-300 cursor-pointer ${ currentPage === i+1?'bg-gray-100':''} `}
             onClick={() => setCurrentPage(i+1)}
             key={i}
             >{i+1}</span> )} 

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-1 border bg-gray-200 rounded ml-2 disabled:opacity-50"
        >
          Next
        </button>
        <span className='float-end mr-25 my-3'>
          Total HealthPackages: {filteredItems.length} ||
          Total Pages: {totalPages} 
        </span>
      </div>
     
    </div>
  );
};

export default StaffList;
