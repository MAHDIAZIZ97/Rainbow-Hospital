import React from 'react'

const BookAppointment = () => {
  return (
    <div>
    {/* hero props */}
      <Hero 
        image={assets.page2}
        pageRoute={`Home/Book-Appointment`}
        pageName={`Book an Appointment`}
      />
      {/* page content */}
      Services
      {/* component */}
      <GetInTouch />
      </div>
  )
}

export default BookAppointment
