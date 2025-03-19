import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import DocCard from './DocCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function DoctorSlider() {
  const [doctors,setDoctors] = useState([]);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const getAllDoctors = async () =>{
        try {
          const {data} = await axios.get(backendUrl + '/api/user/all-doctors');
          if(data.success){
            setDoctors(data.doctors);
            console.log(data)
          }
        } catch (error) {
          console.error('Error:', error);
        }
    
    }
    useEffect(()=>{
      getAllDoctors();
    }, [])
  
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={30}
      autoplay={{ 
        delay: 3000, // 🔹 Moves every 3 seconds
        disableOnInteraction: false,
        pauseOnMouseEnter: true, 
      }}
       loop={true}
      // speed={000}
      
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 },  // 1 card on small screens
        480: { slidesPerView: 2, spaceBetween:15 },  // 2 cards on medium screens
        768: { slidesPerView: 3, spaceBetween:20},  // 3 cards on tablets
        1024: { slidesPerView: 4, spaceBetween:25}  // 4 cards on large screens
      }}
      style={{paddingBottom: "2.5rem"}}
    >
      {doctors.slice(0,8).map((doctor, index) => (
        <SwiperSlide 
            key={doctor._id}>
          <DocCard name={doctor.name} speciality={doctor.speciality} image={doctor.image}
          degree={doctor.degree} exp={doctor.experience} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
