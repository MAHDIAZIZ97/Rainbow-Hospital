import { useState } from "react";
import { useParams } from "react-router-dom";
import {toast } from "react-toastify";

const BookAppointment = () => {
  const { doctorName } = useParams(); // Get doctor name from URL
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    mobile: "",
    patientName: "",
    address: "",
    sex: "",
    age: "",
    bookingDate: "",
    doctor: doctorName || "", // Auto-fill doctor name
  });

  const handleNext = () => {
    if (step === 1 && formData.mobile.length !== 10) {
      alert("Enter a valid 10-digit mobile number");
      return;
    }

    
    if(step === 2  && !formData.patientName && !formData.address && !formData.sex && !formData.age){
      alert("Please enter a valid data");
      return;
    }
    setStep(step + 1);
  };

  return (
    <div className="max-w-lg mx-auto p-6 my-5 bg-white shadow-md rounded-lg">
      <div className="text-3xl my-3 text-center uppercase text-[var(--sign-color)] font-semibold">Book Appointment</div>
      <div className="flex justify-between mb-6">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className={`w-10 h-10 flex items-center justify-center rounded-full 
            ${step >= num ? "bg-cyan-500 text-white" : "bg-gray-300 text-gray-600"}`}
          >
            {num}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div>
          <label className="block mb-2 font-medium">Mobile No:</label>
          <input
            type="number"
            maxLength="10"
            className="w-full p-2 border rounded"
            placeholder="Enter Mobile Number"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
          />
          <label className="block mt-4 mb-2 font-medium">Doctor:</label>
          <input
            type="text"
            className="w-full p-2 border rounded bg-gray-100"
            value={formData.doctor}
            readOnly
          />
        </div>
      )}
      {step === 2 && (
        <div>
          <label className="block mb-2 font-medium">Name:</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Enter Your Name"
            required
          />
           <label className="block mb-2 font-medium">Address:</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Enter Your Name"
            required
          />
          <div className="flex mt-5 gap-3"> 
          <label className="block mb-2 font-medium">Age:</label>
          <input
            type="number"
            min="1" max="120"
            className="w-2/5 p-2 border rounded"
            placeholder="Enter Your age"
            required
            
          />
           <label className="block mb-2 font-medium">Sex:</label>
            <select
              className="w-2/5 p-2 border rounded"
              required
              value={formData.sex}
              onChange={(e) => setFormData({...formData, sex: e.target.value })}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
        </div>
      )}
      {step === 3 && (
        <div>
          <label className="block mb-2 font-medium">Appointment Date:</label>
          <input
            type="date"
            className="w-full p-2 border rounded"
            required
          />
        </div>
      )}

      {step < 3 ? (
        <button className="px-4 py-2 mt-4 bg-blue-500 text-white rounded" onClick={handleNext}>
          Next
        </button>
      ) : (
        <button 
        className="px-4 py-2 mt-4 bg-green-500 text-white rounded"
        type="submit">Confirm Booking</button>
      )}
    </div>
  );
};

export default BookAppointment;
