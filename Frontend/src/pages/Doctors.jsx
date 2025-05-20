import React, {useState} from 'react'
import Hero from '../components/Hero'
import GetInTouch from '../components/GetInTouch'
import { assets } from '../assets/assets'
import Statistics from '../components/Statistics'
import DocCard from '../components/DocCard'

import { useEffect } from 'react'
import axios from 'axios';

const Doctors = () => {
  const [doctors,setDoctors] = useState([]);
  const [searchTerm,setSearchTerm] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const getAllDoctors = async () =>{
      try {
        const {data} = await axios.get(backendUrl + '/api/user/all-doctors');
        if(data.success){
          setDoctors(data.doctors);
          //console.log(data)
        }
      } catch (error) {
        console.error('Error:', error);
      }
  
  }
  useEffect(()=>{
    getAllDoctors();
  }, [])



  const filteredDoctors = doctors.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm) ||
    doc.speciality.toLowerCase().includes(searchTerm) ||
    doc.degree.toLowerCase().includes(searchTerm) ||
    doc.experience.toLowerCase().includes(searchTerm)||
    doc.availableDays.toLowerCase().includes(searchTerm)
  );
  return (
    <div>
    {/* hero props */}
      <Hero 
        image={assets.page2}
        pageRoute={`Home/Doctors`}
        pageName={`Our Doctors`}
      />
      {/* page content */}
       <div className='my-3 flex justify-center '>
       
       <input  
            type='search'
            placeholder='Search Doctors...'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className='sm:w-2/8 w-6/8 h-10 border-2 border-gray-500 dark:border-white rounded-sm outline-0 px-2'
            />
       </div>
      
        <div className='flex flex-col items-center sm:flex-row flex-wrap gap-x-2 gap-y-5 justify-center my-8'>
        {
          filteredDoctors.map((doc, index) => (
            <DocCard key={doc._id} name={doc.name} desc={doc.specialization} degree={doc.degree} image={doc.image} speciality={doc.speciality} exp={doc.experience} available={doc.availableDays.toUpperCase()}/>
          ))
          
        }
        </div>
      {/* component */}
      <Statistics />
      <GetInTouch />
      </div>
  )
}

export default Doctors
