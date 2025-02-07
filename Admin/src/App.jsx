import React,{useContext} from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import { adminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Admin/Dashboard';
import { Routes, Route } from'react-router-dom';
import AddDailyDocList from './pages/Admin/AddDailyDocList';
import AddDoctor from './pages/Admin/AddDoctor';
import AddHealthPackage from './pages/Admin/AddHealthPackage';
import AddOtPackage from './pages/Admin/AddOtPackage';
import AddStaff from './pages/Admin/AddStaff';
import AllAppointments from './pages/Admin/AllAppointments';
import DailyDocList from './pages/Admin/DailyDocList';
import DoctorList from './pages/Admin/DoctorList';
import HealthPackageList from './pages/Admin/HealthPackageList';
import OtPackageList from './pages/Admin/OtPackageList';


const App = () => {

  const {aToken} = useContext(adminContext);
  return aToken ? (
    <div>
      <ToastContainer />
      <Navbar />
      <div className = 'flex items-start'>
        <Sidebar />
      </div>
      <Routes>
        <Route path='/' element= {<></>}/>
        <Route path='/admin-dashboard' element= {<Dashboard />}/>
        <Route path='/add-daily-doc-list' element= {<AddDailyDocList />}/>
        <Route path='/add-doctor' element= {<AddDoctor />}/>
        <Route path='/add-health-package' element= {<AddHealthPackage />}/>
        <Route path='/add-ot-package' element= {<AddOtPackage />}/>
        <Route path='/add-staff' element= {<AddStaff />}/>
        <Route path='/all-appointments' element= {<AllAppointments />}/>
        <Route path='/daily-doc-list' element= {<DailyDocList />}/>
        <Route path='/doctor-list' element= {<DoctorList />}/>
        <Route path='/health-package-list' element= {<HealthPackageList />}/>
        <Route path='/ot-package-list' element= {<OtPackageList />}/>
        <Route path='/add-notice' element= {<HealthPackageList />}/>
        <Route path='/notice-list' element= {<OtPackageList />}/>
      </Routes>
    </div>
  ): (
    <div>
      <Login /> 
      <ToastContainer />
    </div>
  )
}

export default App
