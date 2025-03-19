import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HomeHero = () => {
  const words = ["Compassion", "Care", "Innovation", "Excellence", "Healing"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" flex items-center justify-center bg-slate-200 dark:bg-[var(--dark-theme)] sm:mt-[8rem] mt-[5rem] pb-8 ">
      <div className="text-center ">
        <h1 className="text-5xl font-bold text-gray-800  dark:text-gray-100">
          Welcome to <span className="text-[#11667A] dark:text-cyan-200">Our Hospital</span>
        </h1>
        <motion.p
          key={words[index]} 
          className="text-2xl text-gray-600 mt-4 dark:text-gray-100"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.8 }}
        >
          We believe in <span className="text-cyan-400 dark:text-cyan-200 font-semibold">{words[index]}</span>
        </motion.p>
      </div>
    </div>
  );
};

export default HomeHero;
