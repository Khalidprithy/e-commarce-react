import { useEffect, useState } from "react";
import { createContext } from "react";
import { useQuery } from "react-query";

const AppContext = createContext();

export default AppContext;

export const AppProvider = ({ children }) => {


    let contextData = {

    }

    return (
        <AppContext.Provider value={contextData}>
            {children}
        </AppContext.Provider >
    )
}