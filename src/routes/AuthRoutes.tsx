import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';

const AuthRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<Login />} />
                <Route path='/sign-in' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AuthRoutes;
