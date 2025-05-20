import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Hero from "./Hero";
import { assets } from "../assets/assets";

const BookAppointment = () => {
  const { doctorName } = useParams(); // Get doctor name from URL
  const [step, setStep] = useState(1);  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    mobile: "",
    name: "",
    address: "",
    gender: "",
    age: "",
    bookingDate: "",
    doctor: doctorName || "", 
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    //console.log(formData);
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/submit-book-appointment`, formData,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      );
      //console.log(data);
      if(data.success){
        toast.success(data.message);
        setFormData(
          {
            mobile: "",
            name: "",
            address: "",
            gender: "",
            age: "",
            bookingDate: "",
            doctor: doctorName || "", 
          }
        );
        navigate('/');
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
    finally{
      setIsSubmitting(false);
    }
  }





  const handleNext = () => {
    if (step === 1 && formData.mobile.length !== 10) {
      toast.error("Enter a valid 10-digit mobile number");
      return;
    }
    if(step === 2  && !formData.patientName && !formData.address && !formData.sex && !formData.age){
      toast.error("Please enter all the fields");
      return;
    }
    setStep(step + 1);
  };

  return (
     <>
     <Hero 
      image={assets.page2}
      pageName={`Appointment`}
      pageRoute={`Home/Appointment`}
     />
    <form onSubmit={handleSubmit}>

    <div className="max-w-lg  mx-auto p-6 my-10 bg-white shadow-md rounded-lg ">
      <div className="text-3xl my-3 text-center uppercase text-[var(--sign-color)] font-semibold">
          Book Appointment
      </div>
      <div className="flex justify-between mb-6">
        {['Contact', 'Basic', 'Date'].map((item,index) => (
          <div
            key={index}
            className={`w-20 h-10 flex items-center justify-center rounded-full 
            ${step >= index+1 ? "bg-cyan-500 text-white" : "bg-gray-300 text-gray-600"}`}
          >
            {item}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div>
          <label className="block mb-2 font-medium">Mobile No:</label>
          <input
            type="tel"
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
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
           <label className="block mb-2 font-medium">Address:</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Enter Your Name"
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
            required
          />
          <div className="flex mt-5 gap-3"> 
          <label className="block mb-2 font-medium">Age:</label>
          <input
            type="number"
            min="1" max="120"
            className="w-2/5 p-2 border rounded"
            placeholder="Enter Your age"
            value={formData.age}
            onChange={(e) => setFormData({...formData, age: e.target.value})}
            required
            
          />
           <label className="block mb-2 font-medium">Gender:</label>
            <select
              className="w-2/5 p-2 border rounded"
              required
              value={formData.gender}
              onChange={(e) => setFormData({...formData, gender: e.target.value })}
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
            value={formData.bookingDate}
            onChange={(e) => setFormData({...formData, bookingDate: e.target.value})}
          />
        </div>
      )}

      {step < 3 ? (
        <button className="px-4 py-2 mt-4 bg-cyan-500 text-white rounded cursor-pointer" onClick={handleNext}>
          Next
        </button>
      ) : (
        <button 
          className={`px-4 py-2 mt-4 bg-cyan-500 text-white rounded cursor-pointer ${isSubmitting ? 'opacity-50 cursor-not-allowed':'cursor-pointer'}`}
          disabled={isSubmitting}
          type="submit">
            {
              isSubmitting ? "Submitting..." : "Submit"
            }
        </button>
      )}
    </div>
  
   
    </form>
    </>
  );
};

export default BookAppointment;
