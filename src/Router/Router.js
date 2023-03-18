import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginModal from '../global/LoginModal';
import Foods from '../Pages/Foods/Foods';
import Home from '../Pages/Home/Home';
import Kids from '../Pages/Kids/Kids';
import Man from '../Pages/Man/Man';
import Woman from '../Pages/Woman/Woman';

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/man" element={<Man />}></Route>
                <Route path="/woman" element={<Woman />}></Route>
                <Route path="/kids" element={<Kids />}></Route>
                <Route path="/foods" element={<Foods />}></Route>
            </Routes>

            <LoginModal />
        </>
    );
};

export default Router;