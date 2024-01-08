import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { Dashboard } from '../components';


function ContentRoutes() {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
}

export default ContentRoutes