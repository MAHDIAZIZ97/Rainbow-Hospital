import React, { useContext, useState, useEffect } from 'react';
import { adminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateHealthPackage = () => {
  const { aToken, backendUrl } = useContext(adminContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    originalPrice: 0,
    discountedPrice: 0,
    remarks: '',
    description: '',
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/admin/get-health-package/${id}`, {
          headers: { aToken },
        });

        //console.log("Fetched data:", res.data);
        setFormData(res.data.healthPackage);
        setLoading(false);
      } catch (error) {
        console.error(error.message);
        toast.error("Failed to fetch health package");
        setLoading(false);
      }
    };

    fetchPackage();
  }, [id, aToken, backendUrl]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name.includes("Price") ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${backendUrl}/api/admin/update-health-package/${id}`,
        formData,
        { headers: { aToken } }
      );

      toast.success("Health package updated successfully");
      navigate('/health-package-list');
    } catch (error) {
      console.error(error.message);
      toast.error("Failed to update health package");
    }
  };

  if (loading) return <p className="text-center text-xl text-gray-500 mt-5">Loading...</p>;

  return (
    <form
      className="border-2 border-gray-400 p-3 m-3 rounded-md"
      onSubmit={handleSubmit}
    >
      <p className="my-3 text-2xl text-[#035d67] font-semibold">
        Edit Health Packages
      </p>
      <div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            required
            className="outline-2 outline-gray-300 rounded-sm px-2 h-8 mx-2 my-2 w-70"
            value={formData?.name || ''}
            name="name"
            onChange={handleChange}
          />
          <label htmlFor="originalPrice">Original Rate:</label>
          <input
            type="number"
            id="originalPrice"
            required
            className="outline-2 outline-gray-300 rounded-sm px-2 h-8 mx-2 my-2 w-52"
            value={formData?.originalPrice || 0}
            name="originalPrice"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="discountedPrice">Disc.Rate:</label>
          <input
            type="number"
            id="discountedPrice"
            required
            className="outline-2 outline-gray-300 rounded-sm px-2 h-8 mx-2 my-2 w-54"
            value={formData?.discountedPrice || 0}
            name="discountedPrice"
            onChange={handleChange}
          />
          <label htmlFor="remarks">Remarks(Any):</label>
          <input
            type="text"
            id="remarks"
            className="outline-2 outline-gray-300 rounded-sm px-2 h-8 mx-2 my-2 w-60"
            value={formData?.remarks || ''}
            name="remarks"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Details:</label>
          <textarea
            className="outline-2 outline-gray-300 rounded-sm px-2 mx-2 mt-2 min-w-148"
            id="description"
            name="description"
            value={formData?.description || ''}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-[#035d67] text-white px-4 py-1 rounded-md">
            {loading ? <img  src='/loader.gif' alt='Loading...' width="42"/> : 'Update'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default UpdateHealthPackage;
