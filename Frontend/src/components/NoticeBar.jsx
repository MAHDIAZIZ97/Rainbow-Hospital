import React, {useState,useEffect} from "react";
import './NoticeBar.css'
import axios from "axios";

export default function NoticeBar() {

  const [isPaused, setIsPaused] = useState(false);
  const [notices,setNotices] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const getAllNotices = async () => {
    try {
        const { data } = await axios.get(backendUrl + '/api/user/all-notices',{});
        if(data.success){
            setNotices(data.notices);
        }
        else{
            console.error(data.message);
        }
        
    } catch (error) {
        console.log(error.message);
        console.error("Failed to get notices");
    }
  }

  useEffect(() => {
    getAllNotices();
  }, []);

  return (
    <div 
      className="w-full text-black  overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}  
      onMouseLeave={() => setIsPaused(false)} 
    >
    <div className="flex justify-center ">
    <div className="px-5 md:px-10 bg-gray-500 text-white pt-1 ">
    <h2 className="text-xl font-mono">Updates</h2>
    </div>
    <div className="w-full bg-yellow-500 text-black py-2 overflow-hidden ">
      
    <div
      className={`whitespace-nowrap flex gap-8 animate-marquee`}
         style={{ animationPlayState: isPaused ? "paused" : "running", cursor: "pointer" }}
        >

        {notices.map((item, idx) => (
           ( 
            <a
              href={`${backendUrl}/uploads/pdfs/${item.file}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-sm sm:text-base font-bold" key={idx}>
               {item.name}
            </p>
            </a>
          )
        ))}
       
        </div>
        </div>
      </div>
    </div>
  );
}
