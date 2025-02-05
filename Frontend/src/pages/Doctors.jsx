import React from 'react'
import Hero from '../components/Hero'
import GetInTouch from '../components/GetInTouch'
import { assets } from '../assets/assets'
import Statistics from '../components/Statistics'
import DocCard from '../components/DocCard'
import Search from '../components/Search'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Doctors = () => {
  return (
    <div>
    {/* hero props */}
      <Hero 
        image={assets.page2}
        pageRoute={`Home/Doctors`}
        pageName={`Our Doctors`}
      />
      {/* page content */}
      <div className='flex justify-center items-center mt-6 mb-1 gap-8 sm:flex-row flex-col'>
         <Search placeHolder={`Search by Doctor`}/>
         <Search placeHolder={`Search by Department`} />
         <Stack direction="row" spacing={2}>
            <Button variant="contained" className='w-40 h-14'>Search</Button>
        </Stack>
      </div>
        <div className='flex flex-col items-center sm:flex-row flex-wrap gap-x-2 gap-y-5 justify-center my-8'>
          <DocCard  name={`DR.DANG`} desc={`Neurologist`} degree={`MBBS,MD`}/>
          <DocCard  name={`DR.DANG`} desc={`Neurologist`} degree={`MBBS,MD`}/>
          <DocCard  name={`DR.DANG`} desc={`Neurologist`} degree={`MBBS,MD`}/>
          <DocCard  name={`DR.DANG`} desc={`Neurologist`} degree={`MBBS,MD`}/>
          <DocCard  name={`DR.DANG`} desc={`Neurologist`} degree={`MBBS,MD`}/>
          <DocCard  name={`DR.DANG`} desc={`Neurologist`} degree={`MBBS,MD`}/>
          <DocCard  name={`DR.DANG`} desc={`Neurologist`} degree={`MBBS,MD`}/>
        </div>
      {/* component */}
      <Statistics />
      <GetInTouch />
      </div>
  )
}

export default Doctors
