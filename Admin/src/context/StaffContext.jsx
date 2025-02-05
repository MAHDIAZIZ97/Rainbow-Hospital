import { createContext } from "react";

export const staffContext = createContext();

const StaffContextProvider = (props) => {
    const value = {

    };
    
    return (
        <staffContext.Provider value={value}>
        {props.children}
        </staffContext.Provider>
    );
}

export default StaffContextProvider;