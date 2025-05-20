import React from 'react';
import { Routes,Route,useLocation } from 'react-router-dom';
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
import Cardiology from './pages/Departments/Cardiology';
import Footer from './components/Footer';
import BookAppointment from './components/BookAppointment';
import Gynecology from './pages/Departments/Gynecology';
import Neurology from './pages/Departments/Neurology';
import Orthopaedics from './pages/Departments/Orthopaedics';
import NotFound from './pages/NotFound';
import { ToastContainer } from 'react-toastify';
import Ot from './pages/Services/Ot';
import Emergency from './pages/Services/Emergency';
import EnquiryForm from './components/EnquiryForm';
import Packages from './pages/Services/Packages';
import 'react-toastify/dist/ReactToastify.css';




const App = () => {

  const location = useLocation();

  // const hideLayoutOnRoutes = ['*'];
  // const shouldHideLayout = hideLayoutOnRoutes.includes(location.pathname);
  return (
    <div className='dark:bg-[var(--dark-theme)]'>
    
     <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/academics' element={<Academics />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/health-blog' element={<HealthBlog />}/>
        {/* <Route path='/login' element={<Login />}/> */}
        {/* <Route path='/my-profile' element={<MyProfile />}/> */}
        <Route path='/news-and-media' element={<NewsAndMedia />}/>
        <Route path='/patient-guide' element={<PatientGuide />}/>
        <Route path='/doctors' element={<Doctors />}/>
        <Route path='/enquiry' element={<EnquiryForm />} />
        {/* <Route path='/doctors/:specialty' element={<Doctors />}/> */}
        {/* <Route path='/appointment/:docId' element={<Appointment />}/> */}
        <Route path='/book-appointment/:doctorName' element={<BookAppointment />}/>
        <Route path='/departments' element={<Departments />}/>
        {/* <Route path='/testimonials' element={<Testimonials />}/> */}

        {/* services */}
        <Route path='/services/ipd' element={<Ipd />}/>
        <Route path='/services/opd' element={<Opd />}/>
        <Route path='/services/ot' element={<Ot />}/>
        <Route path='/services/others' element={<Others />}/>
        <Route path='/services/packages' element={<Packages />}/>
        <Route path='/services/pathology' element={<Pathology />}/>
        <Route path='/services/physiotherapy' element={<Physiotherapy />}/>
        <Route path='/services/radiology' element={<Radiology />}/>
        <Route path='/services/emergency' element={<Emergency />} />

        {/* departments */}
        <Route path='/departments/cardiology' element={<Cardiology />}/>
        <Route path='/departments/neurology' element={<Neurology/>}/>
        <Route path='departments/gynecology' element={<Gynecology />}/>
        <Route path='/departments/orthopaedics' element={<Orthopaedics />}/>
        <Route path='/departments/urology' element={<Departments />}/>
        <Route path='/departments/nephrology' element={<Departments />}/>
        <Route path='/departments/medicine' element={<Departments />}/>
        <Route path='/departments/surgery' element={<Departments />}/>
        <Route path='/departments/pediatrics' element={<Departments />}/>
        <Route path='/departments/oral-and-maxilloficial' element={<Departments />}/>
        <Route path='/departments/ophthalmology' element={<Departments />}/>
        <Route path='/departments/oncology' element={<Departments />}/>
        <Route path='/departments/gastroenterology' element={<Departments />}/>
        <Route path='/departments/ctvs' element={<Departments />}/>
        <Route path='/departments/psychiatry' element={<Departments />}/>
        <Route path='/departments/psychology' element={<Departments />}/>
        <Route path='/departments/ent' element={<Departments />}/>
        <Route path='/departments/dermatology' element={<Departments />}/>
        <Route path='/departments/endocrinology' element={<Departments />}/>
        <Route path='/departments/hematology' element={<Departments />}/>
        <Route path='/departments/allergology' element={<Departments />}/>
        <Route path='/departments/pulmonology' element={<Departments />}/>
        <Route path='/departments/' element={<Departments />}/>
        <Route path='/departments' element={<Departments />}/>
        <Route path='/departments/others' element={<Departments />}/>
        {/* <Route path='*' element= {<NotFound />} /> */}

      </Routes>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  )
}

export default App
