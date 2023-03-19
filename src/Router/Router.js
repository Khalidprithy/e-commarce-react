import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MyContext } from '../context/AppContext';
import LoginModal from '../global/LoginModal';
import RequireAuth from '../global/RequireAuth';
import Foods from '../Pages/Foods/Foods';
import Home from '../Pages/Home/Home';
import Kids from '../Pages/Kids/Kids';
import Man from '../Pages/Man/Man';
import UserProfile from '../Pages/Profile/UserProfile';
import Woman from '../Pages/Woman/Woman';

const Router = () => {

    const { userToken } = useContext(MyContext);

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/man" element={<Man />}></Route>
                <Route path="/woman" element={<Woman />}></Route>
                <Route path="/kids" element={<Kids />}></Route>
                <Route path="/foods" element={<Foods />}></Route>

                <Route path='/*' element={<RequireAuth />}>
                    <Route path="profile" element={<UserProfile />}></Route>
                </Route>

            </Routes>
            {!userToken ? <LoginModal /> : ''}

        </>
    );
};

export default Router;