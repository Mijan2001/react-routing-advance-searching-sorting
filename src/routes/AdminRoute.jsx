import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SignIn from '../pages/SignIn';

const AdminRoute = () => {
    const [isSignedIn, setIsSignedId] = useState(true);
    const [isAdmin, setIsAdmin] = useState(true);

    return isSignedIn && isAdmin ? <Outlet /> : <SignIn />;
};

export default AdminRoute;
