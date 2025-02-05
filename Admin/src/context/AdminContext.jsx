import { createContext } from "react";
import { useState } from "react";

export const adminContext = createContext();

const adminContextProvider  = (props) => {

    const [aToken, setAToken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):'');
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const value = {
        aToken,setAToken,
        backendUrl
    };
    
    return (
        <adminContext.Provider value={value}>
        {props.children}
        </adminContext.Provider>
    );
}

export default adminContextProvider;