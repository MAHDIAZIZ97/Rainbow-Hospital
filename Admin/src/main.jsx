import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AdminContextProvider from './context/AdminContext';
import AppContextProvider from './context/AppContext';
import StaffContextProvider from './context/StaffContext';

// Wrap our app with our context providers

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AdminContextProvider>
       <StaffContextProvider>
         <AppContextProvider>
            <App />
          </AppContextProvider>
        </StaffContextProvider>
    </AdminContextProvider>
  </BrowserRouter>,
)
