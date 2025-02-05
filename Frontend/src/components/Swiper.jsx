import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import DocCard from './DocCard';

const doctors = [
  { name: "Dr. Aziz", desc: "Expert in Cardiology", image: "/images/doc1.jpg" },
  { name: "Dr. Sarah", desc: "Neurologist Specialist", image: "/images/doc2.jpg" },
  { name: "Dr. John", desc: "Orthopedic Surgeon", image: "/images/doc3.jpg" },
  { name: "Dr. Emma", desc: "Pediatrician", image: "/images/doc4.jpg" },
  { name: "Dr. Robert", desc: "Dermatologist", image: "/images/doc5.jpg" },
  { name: "Dr. Sophia", desc: "ENT Specialist", image: "/images/doc6.jpg" }
];

export default function DoctorSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      breakpoints={{
        320: { slidesPerView: 1 },  // 1 card on small screens
        480: { slidesPerView: 2 },  // 2 cards on medium screens
        768: { slidesPerView: 3 },  // 3 cards on tablets
        1024: { slidesPerView: 4 }  // 4 cards on large screens
      }}
      style={{paddingBottom: "2.5rem"}}
    >
      {doctors.map((doctor, index) => (
        <SwiperSlide key={index}>
          <DocCard name={doctor.name} desc={doctor.desc} image={doctor.image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
