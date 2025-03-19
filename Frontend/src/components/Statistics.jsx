import React, { useState, useEffect } from "react";

export default function Statistics() {
  const [patients, setPatients] = useState(0);
  const [doctors, setDoctors] = useState(0);
  const [totalBeds,setTotalBeds] = useState(0);

  const patientCount = 300; 
  const doctorCount = 150; 
  const totalBedsCount = 100; 

  useEffect(() => {
    const animateCount = (target, setter) => {
      let current = 0;
      const interval = setInterval(() => {
        if (current < target) {
          current += Math.ceil(target / 100); 
          setter(current);
        } else {
          setter(target);
          clearInterval(interval); 
        }
      }, 50); 
    };
    animateCount(patientCount, setPatients);
    animateCount(doctorCount, setDoctors);
    animateCount(totalBedsCount, setTotalBeds);
  }, []);

  return (
    <div className="flex md:flex-row dark:bg-[var(--dark-theme)] flex-col justify-around p-8 bg-gray-100 rounded-lg shadow-md dark:text-white">
      <div className="text-center">
      <h3 className="text-2xl font-semibold">Total Beds</h3>
      <p className="text-4xl font-bold text-orange-600">{totalBeds}+</p>
      </div>
      <div className="text-center">
      
      <h3 className="text-2xl font-semibold">Daily Patients</h3>
        <p className="text-4xl font-bold text-blue-600">{patients}+</p>
      </div>
      <div className="text-center">
      <h3 className="text-2xl font-semibold">Doctors</h3>
        <p className="text-4xl font-bold text-green-600">{doctors}+</p>
        
      </div>
    </div>
  );
}

