import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    review: "This service is amazing! Highly recommended.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    review: "Great experience, very satisfied with the quality.",
    rating: 4.5,
  },
  {
    name: "Michael Johnson",
    review: "Good value for money. I will use it again.",
    rating: 4,
  },
  {
    name: "Emily Davis",
    review: "Exceptional service and very responsive support team!",
    rating: 5,
  },
  {
    name: "Chris Brown",
    review: "Decent experience. Could be improved in some areas.",
    rating: 3.5,
  },
];

// Function to render star ratings
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  return (
    <div className="flex text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} />
      ))}
      {halfStar && <FaStarHalfAlt />}
    </div>
  );
};

const Testimonial = () => {
  return (
    <div className="w-full bg-gray-100 dark:bg-[var(--dark-theme)] py-6 overflow-hidden">
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        loop={true}
        speed={12000} 
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        modules={[FreeMode, Autoplay]}
        className="flex items-center"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg dark:bg-[var(--dark-theme)] max-w-sm border border-gray-300 mx-2"
          >
            <p className="text-gray-700 italic mb-2 dark:text-white">"{testimonial.review}"</p>
            <StarRating rating={testimonial.rating} />
            <h4 className="mt-3 text-[#035d67] font-semibold dark:text-[#00D3F3]">{testimonial.name}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
