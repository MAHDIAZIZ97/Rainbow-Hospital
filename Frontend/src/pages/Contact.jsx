  import React, { useState } from 'react'
import { assets } from '../assets/assets'
import Hero from '../components/Hero'
import Statistics from '../components/Statistics'
import MapEmbed from '../components/MapEmbed'
import GetInTouch from '../components/GetInTouch'
import { toast } from 'react-toastify'
import axios  from 'axios'

const Contact = () => {
  const [isSubmitting,setIsSubmitting] = useState(false);
  const [formData,setFormData] = useState({
      name: '',
      mobile: '',
      email: '',
      age: '',
      sex: '',
      message: ''
  })
  const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      await new Promise((resolve) => {
         setTimeout(resolve,2000);
      })
      try {
        const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/submit-contact-us`,
          formData,
          {
            headers:{
              'Content-Type' : 'application/json'
            }
          }
        )

      if(data.success){
        toast.success('Submitted successfully.')
        setFormData(
          {
            name: '',
            mobile: '',
            email: '',
            age: '',
            sex: '',
            message: ''
          }
        )
      }
      else{
        toast.error(data.message);
      }
        
      } catch (error) {
        console.error(error.message)
        toast.error('Error occur.')
      } 
      finally{
        setIsSubmitting(false)
      }

  }
  return (
    <div>
    {/* hero props */}
      <Hero 
        image={assets.page2}
        pageRoute={`Home/Contact`}
        pageName={`Contact Us`}
      />
      {/* page content */}
      <div>
        <div className='my-6'>
          <MapEmbed />
        </div>
        <div className='bg-cyan-100 py-4'>
          <h1 className='text-center text-3xl font-semibold uppercase mt-5 text-[#035d67]'>Contact Us</h1>
        <div className='md:w-5/9 w-8/9 m-auto'>



        {/* form starts */}
        <form className="space-y-4 " onSubmit={handleSubmit}>
        
        <div>
          <label className="block text-gray-700">Name</label>
          <input type="text" 
            name="name" required
            value={formData.name}
            onChange={(e) => {setFormData({...formData, name:e.target.value})}}
            className="w-full mt-1 p-2 border rounded-md outline-none focus:ring-2 ring-teal-400" />
        </div>

        

        <div>
          <label className="block text-gray-700">Email Id </label>
          <input type="text" 
            name="email" 
            value={formData.email}
            onChange={(e) => {setFormData({...formData, email:e.target.value})}}
            placeholder="Optional"
            className="w-full mt-1 p-2 outline-1 rounded-md focus:ring-2 ring-teal-400" />
        </div>
        <div>
          <label className="block text-gray-700">Mobile No </label>
          <input type="tel" name="mobile" required
            value={formData.mobile}
            onChange={(e) => {setFormData({...formData, mobile:e.target.value})}}
            placeholder="Required"
            className="w-full mt-1 p-2 outline-1 rounded-md focus:ring-2 ring-teal-400" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Age</label>
            <input type="number" name="age" required
              value={formData.age}
              onChange={(e) => {setFormData({...formData, age:e.target.value})}}
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
          <label className="block text-gray-700">Message</label>
          <textarea name="address" required
           value={formData.message}
           onChange={(e) => {setFormData({...formData, message:e.target.value})}}
            className="w-full mt-1 p-2 outline-1 rounded-md resize-none focus:ring-2 ring-teal-400" rows="3" />
        </div>
        <div className='text-center'>
        <button
          type="submit"
          className={`md:w-2/8 text-center bg-[#035d67] active:bg-teal-700 text-white py-2 px-4 rounded-md transition duration-200  ${isSubmitting ?'opacity-50 cursor-not-allowed':'cursor-pointer'}`}
        >
          {isSubmitting ? 'Submitting' : 'Submit'}
        </button>
        </div>
        
      </form> 
        </div>
        </div>
      
        <div className='mt-3'>
          <Statistics />
          <GetInTouch />
        </div>
      </div>
     
      </div>
  )
}

export default Contact
