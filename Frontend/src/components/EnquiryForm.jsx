import React, { useState, useEffect } from 'react';
import {toast} from 'react-toastify';
import axios from 'axios';

const EnquiryForm = () => {

  const [isSubmitting,setIsSubmitting]  = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    enquiryDate: '',
    time: '',
    doctor: '',
    mobile: '',
    age: '',
    address: '',
    sex: '',
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/submit-enquiry`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      await new Promise(
        (resolve) =>{
          setTimeout(
            resolve(),2000
          )
        }
      )
      if(data.success){
          toast.success('Enquiry submitted successfully.');
          setFormData(
            {
              name: '',
              enquiryDate: '',
              time: '',
              doctor: '',
              mobile: '',
              age: '',
              address: '',
              sex: '',
            }
          )
      }
      else{
        toast.error('Error occur.')
      }
      // handle success toast/message here if needed
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      toast.error('Something error occur.')
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center text-teal-700">Enquiry Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label className="block text-gray-700">Name</label>
          <input type="text" name="name" required
            value={formData.name}
            onChange={(e) => {setFormData({...formData, name:e.target.value})}}
            className="w-full mt-1 p-2 border rounded-md outline-none focus:ring-2 ring-teal-400" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Date</label>
            <input type="date" name="enquiryDate" required
              value={formData.enquiryDate}
              onChange={(e) => {setFormData({...formData, enquiryDate:e.target.value})}}
              className="w-full mt-1 p-2 outline-1 rounded-md focus:ring-2 ring-teal-400" />
          </div>

          <div>
            <label className="block text-gray-700">Time</label>
            <input type="time" name="time" required
              value={formData.time}
              onChange={(e) => {setFormData({...formData, time:e.target.value})}}
              className="w-full mt-1 p-2 outline-1 rounded-md focus:ring-2 ring-teal-400" />
          </div>
        </div>

        <div>
          <label className="block text-gray-700">Doctor's Name (if known)</label>
          <input type="text" name="doctor"
            value={formData.doctor}
            onChange={(e) => {setFormData({...formData, doctor:e.target.value})}}
            className="w-full mt-1 p-2 outline-1 rounded-md focus:ring-2 ring-teal-400" />
        </div>
        <div>
          <label className="block text-gray-700">Mobile No</label>
          <input type="tel" name="mobile" required
            pattern="\d{10}" maxLength="10" minLength="10"
            value={formData.mobile}
            onChange={(e) => {setFormData({...formData, mobile:e.target.value})}}
            className="w-full mt-1 p-2 outline-1 rounded-md focus:ring-2 ring-teal-400" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Age</label>
            <input type="number" name="age" required
              value={formData.age}
              onChange= {(e) => {setFormData({...formData, age:e.target.value})}}
              className="w-full mt-1 p-2 outline-1 rounded-md focus:ring-2 ring-teal-400" />
          </div>

          <div>
            <label className="block text-gray-700">Sex</label>
            <select name="sex" required
              value={formData.sex}
              onChange={(e) => {setFormData({...formData, sex:e.target.value})}}
              className="w-full mt-1 p-2 outline-1 rounded-md focus:ring-2 ring-teal-400">
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-gray-700">Address</label>
          <textarea name="address" required
            value={formData.address}
            onChange={(e) => {setFormData({...formData, address:e.target.value})}}
            className="w-full mt-1 p-2 outline-1 rounded-md resize-none focus:ring-2 ring-teal-400" rows="3" />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-[#035d67] active:bg-teal-700 text-white py-2 px-4 rounded-md transition 
          duration-200 ${isSubmitting ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          {isSubmitting ? 'Submitting...': 'Submit'}
        </button>
      </form> 
    </div>
  );
};

export default EnquiryForm;
