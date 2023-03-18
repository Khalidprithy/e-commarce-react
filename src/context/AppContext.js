import React, { createContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

// Step 1: Create a context object
const MyContext = createContext();

function MyContextProvider(props) {

    const navigate = useNavigate();
    const [user, setUser] = useState(() => localStorage.getItem('kinboUser') ? JSON.parse(localStorage.getItem('kinboUser')) : null);
    const [tempUser, setTempUser] = useState(() => localStorage.getItem('kinboUser') ? JSON.parse(localStorage.getItem('kinboUser')) : null);
    const [userToken, setUserToken] = useState(() => localStorage.getItem('userToken') ? JSON.parse(localStorage.getItem('userToken')) : null);


    const { data, isLoading, error } = useQuery('myData', () =>
        fetch('http://localhost:5000/api/products').then((res) =>
            res.json()
        )
    );

    // Login
    const handleLogin = async (data) => {

        const userInfo = {
            email: data.email,
            password: data.password,
        }
        console.log(userInfo)
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        const userData = await response.json();
        console.log(userData)
        if (response.status === 200) {
            setUserToken(userData.token)
            setUser(userData.userdetals)
            setTempUser(userData.userdetals)
            localStorage.setItem('kinboUser', JSON.stringify(userData.userdetals))
            localStorage.setItem('userToken', JSON.stringify(userData.token))
            navigate('/')
        } else {
            toast.error('Login Failed')
        }
    }

    // Sign Up

    const handleSignUp = async (data, e) => {

        const createUser = {
            name: data.name,
            email: data.email,
            password: data.password,
        }
        console.log(createUser)

        const response = await fetch('http://localhost:5000/api/auth/signup', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(createUser),
        })
        const userData = await response.json();
        console.log(userData);
        if (response.status === 201) {
            setUserToken(userData.token)
            setUser(userData.token)
            localStorage.setItem('userToken', JSON.stringify(userData.token))
            navigate('/')
        } else {
            toast(userData.message)
        }
        e.target.reset();
    }




    // Logout user function
    const handleLogout = async () => {
        setUser(null)
        setUserToken(null)
        localStorage.removeItem('userInfo');
        localStorage.removeItem('userToken');
        navigate('/');
    }





    const contextValue = {
        data,
        user,
        isLoading,
        handleLogin,
        handleSignUp,
        handleLogout,
    };

    return (
        <MyContext.Provider value={contextValue}>
            {props.children}
        </MyContext.Provider>
    );
}

export { MyContext, MyContextProvider };
