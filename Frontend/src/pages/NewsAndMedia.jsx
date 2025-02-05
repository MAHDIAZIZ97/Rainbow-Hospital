import React from 'react'
import { assets } from '../assets/assets'
import Hero from '../components/Hero'
import GetInTouch from '../components/GetInTouch'

const NewsAndMedia = () => {
  return (
    <div>
    {/* hero props */}
      <Hero 
        image={assets.page2}
        pageRoute={`Home/NewsAndMedia`}
        pageName={`News And Media`}
      />
      {/* page content */}
      Services
      {/* component */}
      <GetInTouch />
      </div>
  )
}

export default NewsAndMedia
