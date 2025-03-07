import { createContext, useState } from "react";

export const StaffContext = createContext();

const StaffContextProvider = (props) => {
    const [sToken,setSToken] = useState(localStorage.getItem(sToken)? localStorage.getItem(setSToken):'');
    const value = {

    };
    
    return (
        <StaffContext.Provider value={value}>
              {props.children}
        </StaffContext.Provider>
    );
}

export default StaffContextProvider;