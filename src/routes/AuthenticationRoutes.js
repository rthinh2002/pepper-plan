import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { SignIn, SignUp } from '../components/index'

import {AnimatePresence} from 'framer-motion'

function AuthenticationRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AuthenticationRoutes
