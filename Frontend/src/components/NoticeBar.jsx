import React, {useState} from "react";
import './NoticeBar.css'

export default function NoticeBar() {

  const [isPaused, setIsPaused] = useState(false);
  return (
    <div 
      className="w-full text-black  overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}  
      onMouseLeave={() => setIsPaused(false)} 
    >
    <div className="flex justify-center ">
    <div className="px-5 md:px-10 bg-gray-500 text-white pt-1">
    <h2 className="text-xl font-mono">Updates</h2>
    </div>
    <div className="w-full bg-yellow-500 text-black py-2 overflow-hidden ">
      
      <div className={`whitespace-nowrap flex gap-8 ${isPaused ? "animate-none cursor-pointer" : "animate-marquee"}`}>
        <p className="text-sm sm:text-base font-bold">
          📢 Important Notice: Rainbow Hospital is always ready to serve you at your worst.
        </p>
        <p className="text-sm sm:text-base font-bold">
          🏥 Book your appointment online for quick service!
        </p>
        <p className="text-sm sm:text-base font-bold">
          💉 Free health check-up camp on 10th Feb!
        </p>
        </div>
        </div>
      </div>
    </div>
  );
}
