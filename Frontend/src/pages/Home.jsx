import React from "react";
import { assets } from "../assets/assets";
import { FaRegAddressBook } from "react-icons/fa6";
import { GiHospitalCross } from "react-icons/gi";
import { FaBedPulse } from "react-icons/fa6";
import { MdOutlineBloodtype } from "react-icons/md";
import { MdSos } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { LuHeartPulse } from "react-icons/lu";
import Swiper from "../components/Swiper";
import Statistics from "../components/Statistics";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
import NoticeBar from "../components/NoticeBar";
import HomeHero from "../components/HomeHero";
import { NavLink } from "react-router-dom";
import Testimonial from "../components/Testimonial";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <NoticeBar />

      {/* first part */}
      <div className="relative bg-slate-200 flex  sm:gap-10 dark:bg-[var(--dark-theme)]">
      <motion.div
      initial={{ x: "-200%" }}     // Start fully off-screen to the left
      animate={{ x: 0 }}           // Animate to original position
      transition={{
        type: "spring",            // Smooth bounce effect (optional)
        stiffness: 100,
        damping: 20,
        duration: 3,             // You can tweak this
      }}
        className="px-[4rem]">
          <HomeHero />
        </motion.div>

        <motion.div
      initial={{ x: "200%" }}     // Start fully off-screen to the left
      animate={{ x: 0 }}           // Animate to original position
      transition={{
        type: "spring",            // Smooth bounce effect (optional)
        stiffness: 100,
        damping: 20,
        duration: 3,             // You can tweak this
      }}>
          <img
            src={assets.header_img}
            alt="hero-img"
            className="hidden md:block max-h-[32rem] px-[5rem]"
          />
        </motion.div>

        <div className="absolute justify-center w-full top-[90%] gap-4 hidden md:flex">
          <NavLink to="/doctors">
            <button className="flex gap-2 bg-red-400 mt-3 px-8 py-6  text-gray-800 font-semibold hover:bg-gray-100 duration-500 hover:rounded-xl cursor-pointer">
              BOOK APPOINTMENT
              <FaRegAddressBook className="mt-1" />
            </button>
          </NavLink>
          <NavLink to="/enquiry">
            <button className="flex gap-2 bg-blue-400 mt-3 px-8 py-6  text-gray-800 font-semibold hover:bg-gray-100 duration-500 hover:rounded-xl cursor-pointer">
              SUBMIT ENQUIRY
              <FaRegAddressBook className="mt-1" />
            </button>
          </NavLink>
          <NavLink to="/departments">
            <button className="flex gap-2 bg-red-400 mt-3 px-8 py-6  text-gray-800 font-semibold hover:bg-gray-100 duration-500 cursor-pointer hover:rounded-xl">
              OUR DEPARTMENTS
              <FaRegAddressBook className="mt-1" />
            </button>
          </NavLink>
        </div>
      </div>
      <div>
        <div className="md:hidden gap-2 my-2 flex flex-col justify-center items-center">
          <NavLink to="/doctors">
            <button className="px-10 py-5 w-full text-white bg-[#11667A] active:bg-white active:text-[#11667A] rounded-2xl text-xl border-2 border-gray-200 cursor-pointer transition-all duration-200 ease-out">
              Get Appointment
            </button>
          </NavLink>
          <NavLink to="/enquiry">
            <button className="px-12 py-5 w-full text-white bg-[#11667A] active:bg-white active:text-[#11667A] rounded-2xl text-xl border-2 border-gray-200 cursor-pointer transition-all duration-200 ease-out">
              Submit Enquiry
            </button>
          </NavLink>
        </div>
      </div>
      {/* 8th part comes here */}
      <div className="md:mt-16 ">
        <Statistics />
      </div>

      {/* 2nd part */}
      <div className="mt-[2rem]  flex dark:text-white flex-wrap justify-center ">
        <div className=" p-3 text-center basis-128">
          <p className="text-xl font-semibold text-cyan-400">
            WELCOME TO RAINBOW HOSPITAL
          </p>
          <h1 className="text-3xl text-[#11667A] font-bold">
            A great place to receive care.
          </h1>
          <p>
            Rainbow Hospital is a renowned healthcare provider specializing in
            pediatrics, obstetrics, and gynecology. It offers advanced medical
            services, compassionate care, and state-of-the-art facilities for
            families.
          </p>
        </div>
      </div>
      {/* 3rd part */}
      <div className="w-full">
        <img src={assets.page2c} className="px-1  md:px-[13%] h-65 w-full" />
      </div>
      {/* 4th part */}
      <div className="dark:text-white">
        <div className="flex flex-col text-center my-8">
          <span className="text-cyan-400 text-xl tracking-widest uppercase font-semibold">
            Care you can believe in
          </span>
          <span className="text-[#11667A] text-4xl font-semibold uppercase">
            Our Services
          </span>
        </div>
        <div className="grid grid-cols-12 px-[13%] gap-2.5">
          <div className="md:col-span-2 col-span-12 border-1 border-gray-400">
            <ul>
              <li className="p-4 text-center hover:bg-[#11667A] hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
                <GiHospitalCross className=" m-auto text-3xl text-green-400" />
                OPD
              </li>
              <li className="p-4 text-center hover:bg-[#11667A] hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
                <FaBedPulse className=" m-auto text-3xl text-blue-400" />
                IPD
              </li>
              <li className="p-4 text-center hover:bg-[#11667A] hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
                <MdOutlineBloodtype className="m-auto text-3xl text-cyan-400" />
                DIAGNSOTIC
              </li>
              <li className="p-4 text-center hover:bg-[#11667A] hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
                <MdSos className="m-auto text-3xl text-red-400" />
                EMERGENCY
              </li>
            </ul>
            <NavLink to="/services">
              <button className="px-10 py-5 w-full text-white bg-[#11667A] hover:bg-white hover:text-[#11667A] border-2 border-gray-200 cursor-pointer transition-all duration-200 ease-out"
               onClick={() => window.scrollTo(0,0)}>
                View All
              </button>
            </NavLink>
          </div>
          <div className="col-span-6 hidden md:block">
            <ul>
              <li className="text-2xl font-bold py-2 text-center">
                A passion for putting patients first.
              </li>
              <div className="flex gap-3 justify-start pl-8">
                <div>
                  <p className="flex gap-2 pl-2">
                    <FaCircle className="mt-1 text-[#11776A]" /> A Passion for
                    Healing{" "}
                  </p>
                  <p className="flex gap-2 pl-2">
                    <FaCircle className="mt-1 text-[#11776A]" /> All our best{" "}
                  </p>
                  <p className="flex gap-2 pl-2">
                    <FaCircle className="mt-1 text-[#11776A]" /> A legacy of
                    excellence{" "}
                  </p>
                </div>
                <div>
                  <p className="flex gap-2 pl-2">
                    <FaCircle className="mt-1 text-[#11776A]" /> 5 star care{" "}
                  </p>
                  <p className="flex gap-2 pl-2">
                    <FaCircle className="mt-1 text-[#11776A]" /> Believing in us
                  </p>
                  <p className="flex gap-2 pl-2">
                    <FaCircle className="mt-1 text-[#11776A]" /> Always caring{" "}
                  </p>
                </div>
              </div>

              <li className="px-8 my-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                placerat scelerisque tortor ornare ornare. Quisque placerat
                scelerisque tortor ornare ornare Convallis felis vitae tortor
                augue. Velit nascetur proin massa in. Consequat faucibus
                porttitor enim et.
              </li>
              <li className="px-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                placerat scelerisque faucibus porttitor enim et.
              </li>
            </ul>
          </div>
          <div className="col-span-4 hidden md:block">
            <img src={assets.page3a} className="h-50 w-full mb-2" />
            <img src={assets.page3b} className="h-50 w-full" />
          </div>
        </div>
      </div>
      {/* 5th part */}
      <div className="px-[13%] dark:text-white">
        <div className="mt-8">
          <ul className="text-center">
            <li className="text-2xl text-cyan-400 tracking-widest">
              Always Caring
            </li>
            <li className="text-4xl text-[#11667A] font-semibold">
              OUR SPECIALTIES
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <div className="m-auto">
            <NavLink to="/departments">
              <button
                className="bg-[#11667A] px-2 py-1 text-white rounded-md hover:text-[#11667A] hover:bg-white border-1 border-[#11667A] transition-all duration-200 ease-in cursor-pointer
           hover:shadow-2xl "
              >
                Explore
              </button>
            </NavLink>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-1 mt-7">
          <div className="md:col-span-3  col-span-4 border-1 py-6 rounded-md cursor-pointer  border-gray-200 place-items-center hover:bg-[#11667A] hover:text-white transition-all duration-150 ease-in hover:-translate-y-0.5 ">
            <LuHeartPulse className="text-6xl text-cyan-300" />
            Cardiology
          </div>
          <div className="md:col-span-3  col-span-4 border-1 py-6 rounded-md cursor-pointer  border-gray-200 place-items-center hover:bg-[#11667A] hover:text-white transition-all duration-150 ease-in hover:-translate-y-0.5 ">
            <LuHeartPulse className="text-6xl text-cyan-300" />
            Neurology
          </div>
          <div className="md:col-span-3  col-span-4 border-1 py-6 rounded-md cursor-pointer  border-gray-200 place-items-center hover:bg-[#11667A] hover:text-white transition-all duration-150 ease-in hover:-translate-y-0.5 ">
            <LuHeartPulse className="text-6xl text-cyan-300" />
            Medicine
          </div>
          <div className="md:col-span-3  col-span-4 border-1 py-6 rounded-md cursor-pointer  border-gray-200 place-items-center hover:bg-[#11667A] hover:text-white transition-all duration-150 ease-in hover:-translate-y-0.5 ">
            <LuHeartPulse className="text-6xl text-cyan-300" />
            Gynaecology
          </div>
          <div className="md:col-span-3  col-span-4 border-1 py-6 rounded-md cursor-pointer  border-gray-200 place-items-center hover:bg-[#11667A] hover:text-white transition-all duration-150 ease-in hover:-translate-y-0.5 ">
            <LuHeartPulse className="text-6xl text-cyan-300" />
            Orthopedics
          </div>
          <div className="md:col-span-3  col-span-4 border-1 py-6 rounded-md cursor-pointer  border-gray-200 place-items-center hover:bg-[#11667A] hover:text-white transition-all duration-150 ease-in hover:-translate-y-0.5 ">
            <LuHeartPulse className="text-6xl text-cyan-300" />
            Surgery
          </div>
          <div className="md:col-span-3  col-span-4 border-1 py-6 rounded-md cursor-pointer  border-gray-200 place-items-center hover:bg-[#11667A] hover:text-white transition-all duration-150 ease-in hover:-translate-y-0.5 ">
            <LuHeartPulse className="text-6xl text-cyan-300" />
            Dermatology
          </div>
          <div className="md:col-span-3  col-span-4 border-1 py-6 rounded-md cursor-pointer  border-gray-200 place-items-center hover:bg-[#11667A] hover:text-white transition-all duration-150 ease-in hover:-translate-y-0.5 ">
            <LuHeartPulse className="text-6xl text-cyan-300" />
            ENT
          </div>
          <div className="md:col-span-3 sm:hidden col-span-4 border-1 py-6 rounded-md cursor-pointer  border-gray-200 place-items-center hover:bg-[#11667A] hover:text-white transition-all duration-150 ease-in hover:-translate-y-0.5 ">
            <LuHeartPulse className="text-6xl text-cyan-300" />
            Urology
          </div>
        </div>
      </div>
      {/* 6th part */}
      {/* <div className="bg-linear-to-t from-sky-200 to-indigo-200  mt-15  flex flex-col  px-[13%]  py-6">
           <p className='text-center text-3xl uppercase font-semibold text-cyan-400  mb-6'>Book an Appointment</p>
            <BookAppointment />
           
          
      </div> */}

      {/* 7th part */}

      <div className="mt-16  px-[13%] ml-3 md:ml-0">
        <div className="my-8">
          <ul className="text-center">
            <li className="text-2xl text-cyan-400 tracking-widest">
              Trusted Care
            </li>
            <li className="text-4xl text-[#11667A] font-semibold">
              OUR DOCTORS
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <div className="m-auto">
            <NavLink to="/doctors">
              <button
                className="bg-[#11667A] px-2 py-1 text-white rounded-md hover:text-[#11667A] hover:bg-white border-1 border-[#11667A] transition-all duration-200 ease-in cursor-pointer
           hover:shadow-2xl "
              >
                View All
              </button>
            </NavLink>
          </div>
        </div>
        <Swiper />
      </div>

      {/* 8th part */}
      <Testimonial />

      {/* 9th part */}
      <div>
        <GetInTouch />
      </div>
    </>
  );
};

export default Home;
