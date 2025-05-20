import React from 'react'
import Hero from '../components/Hero'
import { assets } from '../assets/assets'
import GetInTouch from '../components/GetInTouch'
// import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const PatientGuide = () => {
  return (
    <div>
     <Hero 
       image={assets.page2}
       pageRoute={`Home/PatientGuide`}
       pageName={`Patient Guide`}
     /> 
     <div className='w-full flex flex-col sm:flex-row justify-center items-center my-5'>
        <div className='sm:w-2/5 w-4/5 text-center'>
            <h1 className='text-[#11667A] text-4xl font-semibold uppercase '>Patient Guide</h1>
            Our Patient Guide helps you understand hospital services, including registration, appointments, billing, insurance, and discharge procedures. It outlines your rights, responsibilities, and key information about visiting hours, emergency care, and support services. Designed to make your hospital journey smooth and stress-free, the guide ensures you receive safe, respectful, and informed care every step of the way.
        </div>
        <div>
            <img src={assets.doc8} alt="doctor" className='h-[300px] w-full object-cover' />
        </div>
     </div>

     <div className='w-full flex flex-col justify-center items-center'>
     {/* ------------1------------- */}
      <Accordion sx={{width:'80%', mb: 1, }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">How to book an OPD?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color:'blue'}}>
            You can easily book any OPD doctor by call or by online booking. Our OPD  booking section is operational 
            everyday from 8 AM to 8 PM.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* -------------2-------------- */}
      <Accordion sx={{width:'80%', mb: 1, }}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">What is the visiting time for IPD patients?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color:'blue'}}>
            It generally varies where your patient is admitted. In case of general unit it is 10 AM to 11 AM and 4 PM to 6 PM. But in case of ICU it is only 4 PM to 5 PM. If you book a cabin one female person can be accomodated with patient for every time.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>

     <GetInTouch />
       
    </div>
  )
}

export default PatientGuide
