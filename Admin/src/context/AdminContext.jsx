import axios from "axios";
import { createContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

export const adminContext = createContext();

const adminContextProvider  = (props) => {

    const [aToken, setAToken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):'');
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [staffs,setStaffs] = useState([]);
    const [doctors,setDoctors] = useState([]);
    const [notices, setNotices] = useState([]);
    const [otPackages, setOtPackages] = useState([]);
    const [healthPackages, setHealthPackages] = useState([]);
    
    //console.log(backendUrl); // for testing backendUrl
    const getAllStaffs = async () =>{
        try {
            const { data } = await axios.post(backendUrl + '/api/admin/all-staffs', {} , {headers: {aToken}});
            if(data.success){
                setStaffs(data.staffs); //staffs is the name of the collection as well as state variable
                // console.log(data.staffs);
            }
            else{
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error.message);
            toast.error("Failed to get staffs");
        }

    }

    const getAllDoctors = async () =>{
        try {
            const { data } = await axios.post(backendUrl + '/api/admin/all-doctors',{}, {headers: {aToken}});
            if(data.success){
                setDoctors(data.doctors); //doctors is the name of the collection as well as state variable
            }
            else{
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error.message);
            toast.error("Failed to get doctors");
        }
    }

    const getAllNotices = async () => {
            try {
                const { data } = await axios.post(backendUrl + '/api/admin/all-notices',{}, {headers: {aToken}});
                if(data.success){
                    setNotices(data.notices);
                }
                else{
                    toast.error(data.message);
                }
                
            } catch (error) {
                console.log(error.message);
                toast.error("Failed to get notices");
            }
    }

    const getAllHealthPackages = async () =>{
        try {
            const { data } = await axios.post(backendUrl + '/api/admin/all-health-packages', {}, {headers: {aToken}});
            if(data.success){
                setHealthPackages(data.healthPackages); 
            }
            else{
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error.message);
            toast.error("Failed to get health packages");
        }

    }

    const getAllOtPackages = async () =>{
        try {
            const { data } = await axios.post(backendUrl + '/api/admin/all-ot-packages', {}, {headers: {aToken}});
            if(data.success){
                setOtPackages(data.otPackages);
            }
            else{
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error.message);
            toast.error("Failed to get OT packages");
        }

    }

    const value = {
        aToken,setAToken,
        backendUrl,
        staffs,getAllStaffs,
        doctors,getAllDoctors,
        notices,getAllNotices,
        getAllHealthPackages,
        getAllOtPackages,
        otPackages,healthPackages
    };

    // console.log(value);
    
    return (
        <adminContext.Provider value={value}>
            {props.children}
        </adminContext.Provider>
    );
}

export default adminContextProvider;