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
      </Routes>
    </div>
  )
}

export default App
