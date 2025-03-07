import React,{useContext, useState} from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import { adminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Admin/Dashboard';
import { Routes, Route } from'react-router-dom';
import AddDoctor from './pages/Admin/AddDoctor';
import AddHealthPackage from './pages/Admin/AddHealthPackage';
import AddOtPackage from './pages/Admin/AddOtPackage';
import AddStaff from './pages/Admin/AddStaff';
import AllAppointments from './pages/Admin/AllAppointments';
import DoctorList from './pages/Admin/DoctorList';
import HealthPackageList from './pages/Admin/HealthPackageList';
import OtPackageList from './pages/Admin/OtPackageList';
import StaffList from './pages/Admin/StaffList';
import AddNotice from './pages/Admin/AddNotice';
import { CgMenuRightAlt } from "react-icons/cg";
import ChangePassword from './pages/Admin/ChangePassword';
import NotFound from './pages/NotFound';
import NoticeList from './pages/Admin/NoticeList';


const App = () => {

  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const {aToken} = useContext(adminContext);
  return aToken ? (
    <div>
      <ToastContainer />
      <Navbar />
      <div className = 'flex items-start gap-x-3  h-screen '>
        
      {
        isOpen ? <Sidebar/> : null
      }
        
         <CgMenuRightAlt className='text-2xl ml-2 cursor-pointer' onClick={toggleMenu} />
      
      <Routes>
        <Route path='/' element= { <Dashboard />} />
        <Route path='/admin-dashboard' element= {<Dashboard />}/>
        <Route path='/add-doctor' element= {<AddDoctor />}/>
        <Route path='/add-health-package' element= {<AddHealthPackage />}/>
        <Route path='/add-ot-package' element= {<AddOtPackage />}/>
        <Route path='/add-staff' element= {<AddStaff />}/>
        <Route path='/all-appointments' element= {<AllAppointments />}/>
        <Route path='/doctor-list' element= {<DoctorList />}/>
        <Route path='/health-package-list' element= {<HealthPackageList />}/>
        <Route path='/ot-package-list' element= {<OtPackageList />}/>
        <Route path='/add-notice' element= {<AddNotice />}/>
        <Route path='/staff-list' element= {<StaffList />}/>
        <Route path='/notice-list' element= {<NoticeList />}/>
        <Route path='/change-password' element= {<ChangePassword />}/>
        <Route path='*' element= {<NotFound />} />
      </Routes>
      </div>
    </div>
  ): (
    <div>
      <Login /> 
      <ToastContainer />
    </div>
  )
}

export default App
