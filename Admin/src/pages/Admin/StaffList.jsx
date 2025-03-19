import React, { useContext, useEffect, useState } from "react";
import { adminContext } from "../../context/AdminContext";
import { useNavigate } from "react-router-dom";

const StaffList = () => {
  const { staffs, aToken, getAllStaffs } = useContext(adminContext);
  const navigate = useNavigate('');

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Default items per page
  const [searchTerm, setSearchTerm] = useState('');
  const [editField, setEditField] = useState(false);

  useEffect(() => {
    if (aToken) {
      getAllStaffs();
    }
  }, [aToken]);

  const filteredItems = staffs.filter(staffs => 
      staffs.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staffs.email.toLowerCase().includes(searchTerm.toLowerCase()) || 
      staffs.id.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  // Calculate total pages
  const totalPages = Math.ceil(staffs.length / itemsPerPage);

  // Get the current page's data slice
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentStaffs = filteredItems.slice(startIndex, endIndex);

  const convertToIST = (utcDate) => {
    return new Date(utcDate).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  };

  return (
    <div>
      <h1 className="text-semibold text-4xl ml-5 text-[#035d68] uppercase">All Staff</h1>

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
          <option value="3">3</option>
          <option value="6">6</option>
          <option value="9">9</option>
          <option value="12">12</option>
        </select>
      </div>
      <div>
        <input 
            type="text" 
            placeholder="Search Staff..." 
            className=" pl-2 rounded-md w-50 ml-3 border-2 border-gray-300 h-8" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
      </div>

      {/* Staff List */}
      <div className="flex gap-3 flex-wrap justify-start">
        {currentStaffs.map((item, index) => (
          <div key={index} className="border-2 border-gray-400 p-3 m-3 rounded-sm w-70 overflow-x-hidden">
            <img src={item.image} alt={item.name} className="h-30 w-25 m-auto" />
            <p>Name:{item.name}</p>
            <p>Email ID:{item.email}</p>
            <p>Staff ID:{item.id}</p>
            <p>Created At:{convertToIST(item.createdAt)}</p>
            <p>Updated At:{convertToIST(item.updatedAt)}</p>
            <button 
                className='px-2 py-1 bg-[var(--sign-color)] rounded-md text-white cursor-pointer'
                onClick={() => navigate(`/edit-staff/${item._id}`)}
                >
                Edit
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
        <span className='float-end'>
          Total Staffs: {filteredItems.length} ||
          Total Pages: {totalPages} 
        </span>
      </div>
     
    </div>
  );
};

export default StaffList;
