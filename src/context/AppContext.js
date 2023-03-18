import React, { createContext, useState } from 'react';
import { useQuery } from 'react-query';

// Step 1: Create a context object
const MyContext = createContext();

function MyContextProvider(props) {


    const { data, isLoading, error } = useQuery('myData', () =>
        fetch('http://localhost:5000/api/products').then((res) =>
            res.json()
        )
    );

    // Step 4: Pass the state and any functions or data as a value to the context object
    const contextValue = {
        data,
        isLoading,
    };

    // Step 5: Render the provider component with the context value
    return (
        <MyContext.Provider value={contextValue}>
            {props.children}
        </MyContext.Provider>
    );
}

export { MyContext, MyContextProvider };
