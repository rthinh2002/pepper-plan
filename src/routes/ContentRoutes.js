import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import DashBoard from '../components/Content/DashBoard/DashBoard';


function ContentRoutes() {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
    )
}

export default ContentRoutes