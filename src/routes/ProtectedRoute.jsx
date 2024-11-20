import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SignIn from '../pages/SignIn';

const ProtectedRoute = () => {
    const { user, isSignedIn } = JSON.parse(localStorage.getItem('userData'));
    // const { isSignedIn } =
    //     localStorage.getItem('userData') &&
    //     JSON.parse(localStorage.getItem('userData'));
    console.log('isSignedIn', user, isSignedIn);
    return user ? <Outlet /> : <SignIn />;
};

export default ProtectedRoute;
