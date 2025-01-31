import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import HealthBlog from './pages/HealthBlog';
import Login from './pages/Login';
import MyAppointments from './pages/MyAppointments';
import MyProfile from './pages/MyProfile';
import NewsAndMedia from './pages/NewsAndMedia';
import PatientGuide from './pages/PatientGuide';
import Doctors from './pages/Doctors';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';
import Services from './pages/Services';
import Ipd from './pages/Services/Ipd';
import Opd from './pages/Services/Opd';
import Pathology from './pages/Services/Pathology';
import Radiology from './pages/Services/Radiology';
import Others from './pages/Services/Others';
import Physiotherapy from './pages/Services/Physiotherapy';
import Departments from './pages/Departments';



const App = () => {
  return (
    <div>
     <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/academics' element={<Academics />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/health-blog' element={<HealthBlog />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/my-appointments' element={<MyAppointments />}/>
        <Route path='/my-profile' element={<MyProfile />}/>
        <Route path='/news-and-media' element={<NewsAndMedia />}/>
        <Route path='/patient-guide' element={<PatientGuide />}/>
        <Route path='/doctors' element={<Doctors />}/>
        <Route path='/doctors/:specialty' element={<Doctors />}/>
        <Route path='/appointment/:docId' element={<Appointment />}/>
        <Route path='/departments' element={<Departments />}/>

        {/* services */}
        <Route path='/services/ipd' element={<Ipd />}/>
        <Route path='/services/opd' element={<Opd />}/>
        <Route path='/services/others' element={<Others />}/>
        <Route path='/services/pathology' element={<Pathology />}/>
        <Route path='/services/physiotherapy' element={<Physiotherapy />}/>
        <Route path='/services/radiology' element={<Radiology />}/>

        {/* departments */}

      </Routes>
    </div>
  )
}

export default App
