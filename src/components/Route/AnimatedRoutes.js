import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { SignIn, SignUp } from '../index';

import {AnimatePresence} from 'framer-motion'

function AnimatedRoutes() {
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

export default AnimatedRoutes
