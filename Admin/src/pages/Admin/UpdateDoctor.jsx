
import React, { useState,useContext } from 'react'
import { adminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';
import axios from 'axios';
import Select from "react-select";



const UpdateDoctor = () => {
  

  const options = [
    { value: "sunday", label: "Sunday" },
    { value: "monday", label: "Monday" },
    { value: "tuesday", label: "Tuesday" },
    { value: "wednesday", label: "Wednesday" },
    { value: "thursday", label: "Thursday" },
    { value: "friday", label: "Friday" },
    { value: "saturday", label: "Saturday" },
  ];

    const [name, setName] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [image, setImage] = useState(null);
    const [experience, setExperience] = useState('');
    const [degree, setDegree] = useState('');
    const [availableDays, setAvailableDays] = useState([]);
    const [available, setAvailable] = useState(false);
    const [isSubmitting,setIsSubmitting] = useState(false);

    
  
    const {backendUrl, aToken} = useContext(adminContext);
    const submitHandler = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        try {
          if(!image){
             return toast.error('Please upload image for theDoctor');
          }
            const formData = new FormData();
            formData.append('name', name);
            formData.append('speciality', speciality);
            formData.append('image', image);
            formData.append('experience', experience);
            formData.append('degree', degree);
            formData.append('availableDays', availableDays);
            formData.append('available', available);
  
          //   for (let pair of formData.entries()) {
          //     console.log(pair[0] + ': ' + pair[1]);
          // }

          await new Promise((resolve) =>{
            setTimeout(() => {
              resolve();
            }, 2000);
          });

          const { data } = await axios.post(backendUrl+'/api/admin/add-doctor', formData, {headers: {aToken}});
          
            if(data.success){
              toast.success(data.message);
              setName('');
              setSpeciality('');
              setImage(null);
              setExperience('');
              setDegree('');
              setAvailableDays('');
              setAvailable(false);
          } 
          else{
            toast.error(data.message);
          }
        }
         catch (error) {
           console.log(error);
           toast.error(error.message);
        }
        finally{
            setIsSubmitting(false);
        }
    }
  return (
    <form 
      onSubmit={submitHandler}
      encType='multipart/form-data'
      className='border-2 border-gray-400 p-3 m-3 rounded-md'>
      <p className='my-3 text-2xl text-[#035d67] font-semibold'>Edit Doctor</p>
      <div>
        <div className='flex gap-1.5 my-4'>
            <label htmlFor='image'>
            <img src={image ? URL.createObjectURL(image) : '/image.png'} className='h-15 w-15 rounded-full border-1 '/>
            </label>
            <input 
              type='file' 
              id='image' hidden 
              name='image'
              onChange={(e) => setImage(e.target.files[0])}
              accept='image/*' />
            <p>Upload doctor <br />Image</p>
        </div>
        <div>
          <label htmlFor='name'>Doctor Name:</label>
          <input 
               type='text' 
               id='name' required 
               name='name'
               className='outline-2 outline-gray-300 rounded-sm mx-2 px-2 h-8 my-2 w-70'
               value= {name}
               onChange={(e) => setName(e.target.value)}
               />
          <label htmlFor='experience'>Experience :</label>
          <input 
                type='text' 
                id='experience' required 
                name='experience'
                className='outline-2 outline-gray-300 rounded-sm px-2 h-8 mx-2 my-2 w-55'
                value = {experience}
                onChange={e => setExperience(e.target.value)}
                />
        </div>
        <div className=''>
          <label htmlFor='specialty'>Specialty:</label>
          {/* <input type='text' id='staff-id' required className='outline-1 outline-blue-600 mx-2 my-2 w-59'/> */}
          <select className=' mx-2 w-61 h-6 outline-2 outline-gray-300 rounded-sm px-2 h-8'
              value={speciality}
              onChange={(e) => setSpeciality(e.target.value)}>
              <option  value="">Select Specialty</option>
              <option id='specialty' name='speciality' value="Cardiologist">Cardiologist</option>
              <option id='specialty' name='speciality' value="Dermatologist">Dermatologist</option>
              <option id='specialty' name='speciality' value="Gastroenterologist">Gastroenterologist</option>
              <option id='specialty' name='speciality' value="General Physician">General Physician</option>
              <option id='specialty' name='speciality' value="Neurologist">Neurologist</option>
              <option id='specialty' name='speciality' value="Orthopedic Surgeon">Orthopedic Surgeon</option>
              <option id='specialty' name='speciality' value="Pediatrician">Pediatrician</option>
              <option id='specialty' name='speciality' value="Psychiatrist">Psychiatrist</option>
              <option id='specialty' name='speciality' value="Surgeon">Surgeon</option>
              <option id='specialty' name='speciality' value="Urologist">Urologist</option>
              <option id='specialty' name='speciality' value="Veterinarian">Veterinarian</option>
              <option id='specialty' name='speciality' value="Anesthesiologist">Anesthesiologist</option>
              <option id='specialty' name='speciality' value="Gynecologist">Gynecologist</option>
              <option id='specialty' name='speciality' value="Oncologist">Oncologist</option>
              <option id='specialty' name='speciality' value="Radiation Therapist">Radiation Therapist</option>
              <option id='specialty' name='speciality' value="Obstetrician">Obstetrician</option>
              <option id='specialty' name='speciality' value="Pediatrician">Pediatrician</option>
              <option id='specialty' name='speciality' value="Respiratory">Respiratory</option>
              <option id='specialty' name='speciality' value="Gastroenterologist">Gastroenterologist</option>
              <option id='specialty' name='speciality' value="Neurologist">Neurologist</option>
              <option id='specialty' name='speciality' value="Surgeon">Surgeon</option>
              <option id='specialty' name='speciality' value="Neurologist">Neurologist</option>
              <option id='specialty' name='speciality' value="Surgeon">Surgeon</option>
            </select>
          
          <label htmlFor='degree'>Qualification:</label>
          <input 
              type='text' 
              id='degree' required 
              name='degree'
              className='outline-2 outline-gray-300 rounded-sm px-2 h-8 mx-2 my-2 w-63'
              value = {degree}
              onChange={(e) => setDegree(e.target.value)}
              />
        </div>
        <div>
          <label htmlFor='availableDays'>Available Day(s):</label>
          <Select
                options={options}
                isMulti
                value={options.filter(option => availableDays.includes(option.value))}
                 onChange={selectedOptions => setAvailableDays(selectedOptions.map(option => option.value))}
                 className='h-10  outline-gray-300 rounded-sm  '
              />
          <label htmlFor='available'>Is Available:</label>
          <input 
              type='checkbox' 
              id='available' 
              checked={available}
              onChange={(e) => setAvailable(e.target.checked)}
              className='mx-2 my-2 '
              value={available}
              />
              {/* <p>{available ? 'checked' : 'unchecked'}</p> */}
        </div>
        <div className='flex justify-center'>
        <button className={`mt-2  px-3 py-1 rounded-lg text-white  border-[#035d67] transition-all duration-100 ease-in ${isSubmitting ?'cursor-not-allowed bg-[#b3e0e4ef]':'cursor-pointer bg-[#035d67]'} ` }
           type='submit'
           disabled={isSubmitting}
        >
         {isSubmitting ? <img  src='/loader.gif' alt='Loading...' width="42"/> : 'Update'}
        </button>
        </div>
        
      </div>

      
    </form>
  )
}

export default UpdateDoctor