import React, { useContext, useEffect, useState } from "react";
import { adminContext } from "../../context/AdminContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const StaffList = () => {
  const { healthPackages, aToken, getAllHealthPackages,backendUrl } = useContext(adminContext);
  const navigate = useNavigate('');

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3); 
  const [searchTerm, setSearchTerm] = useState('');
  


  useEffect(() => {
    if (aToken) {
      getAllHealthPackages();
    }
  }, [aToken]);

  const filteredItems = healthPackages.filter(hp => 
    hp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hp.description.toLowerCase().includes(searchTerm.toLowerCase())
    
);

  // Calculate total pages
  const totalPages = Math.ceil(healthPackages.length / itemsPerPage);

  // Get the current page's data slice
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentHealthPackages = filteredItems.slice(startIndex, endIndex);
  const handleDelete = async (id) => {
     try {
      const confirmDelete = window.confirm("Are you sure you want to delete this health package?");
      if(!confirmDelete) return;
      await axios.post(backendUrl +`/api/admin/delete-health-package/${id}`,{},{headers: {aToken}});
      currentHealthPackages.filter(item => item._id !== id);
      getAllHealthPackages();
      toast.success("Health package deleted successfully");
     } catch (error) {
        console.error(error.message);
        toast.error("Failed to delete health package");
     }
     
  }
  const convertToIST = (utcDate) => {
    return new Date(utcDate).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  };

  return (
    <div>
      <h1 className="text-semibold text-4xl ml-5 text-[#035d68] uppercase">All Health Packages</h1>

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
          <option value="12">12</option>
          <option value="18">18</option>
          <option value="24">24</option>
        </select>
      </div>
      <div>
        <input 
            type="text" 
            placeholder="Search Health packages..." 
            className=" pl-2 rounded-md w-50 border-2 border-gray-300 h-8 ml-3" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
      </div>

      {/* Staff List */}
      <div className="flex gap-3 flex-wrap justify-start">
        {currentHealthPackages.length > 0 ?
          currentHealthPackages.map((item, index) => (
          <div key={index} className="border-2 border-gray-400 p-3 m-3 rounded-sm w-70 overflow-x-hidden">
            <p className="text-cyan-500 font-semibold">Name:{item.name}</p>
            <p>Org Price: <span className="text-blue-900 font-semibold">{item.originalPrice}</span></p>
            <p>Disc Price: <span className="text-blue-900 font-semibold">{item.discountedPrice}</span></p>
            <p>Description: <span className="text-blue-900 font-semibold">{item.description}</span></p>
            <p>Created At: <span className="text-blue-900 font-semibold">{convertToIST(item.createdAt)}</span></p>
            <p>Updated At: <span className="text-blue-900 font-semibold">{convertToIST(item.updatedAt)}</span></p>
            
            <button 
                className='px-2 py-1 bg-[var(--sign-color)] rounded-md text-white cursor-pointer'
                onClick={() => navigate(`/update-health-package/${item._id}`)}
                >
                Edit
              </button>
              <button 
                className='px-2 mx-3 py-1 bg-[var(--sign-color)] rounded-md text-white cursor-pointer'
                onClick={() => handleDelete(item._id)}
                >
                Delete
              </button> 
          </div>
        )): 
          <p className="text-gray-500 text-center m-auto text-4xl h-60">OOPS😒 !! No health packages found.</p>
        }
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
          Total HealthPackages: {filteredItems.length} ||
          Total Pages: {totalPages} 
        </span>
      </div>
     
    </div>
  );
};

export default StaffList;
