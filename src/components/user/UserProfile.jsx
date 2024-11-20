import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

const UserProfile = () => {
    // const location = useLocation();
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [user, setUser] = useState({});

    // console.log(state);
    useEffect(() => {
        const { user, isSignedIn } = JSON.parse(
            localStorage.getItem('userData')
        );
        // console.log('user', user);
        setIsSignedIn(isSignedIn);
        setUser(user);
    }, []);
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
                    User Profile
                </h2>
                {isSignedIn ? (
                    <>
                        <div className="space-y-3">
                            <p className="text-gray-700">
                                <strong className="font-semibold text-gray-900">
                                    User Name: {user.name}
                                </strong>{' '}
                            </p>
                            <p className="text-gray-700">
                                <strong className="font-semibold text-gray-900">
                                    User Email: {user.email}
                                </strong>{' '}
                            </p>
                            <p className="text-gray-700">
                                <strong className="font-semibold text-gray-900">
                                    User City: {user.city}
                                </strong>{' '}
                            </p>
                            <p className="text-gray-700">
                                <strong className="font-semibold text-gray-900">
                                    User Country: {user.country}
                                </strong>{' '}
                            </p>
                            <p className="text-gray-700">
                                <strong className="font-semibold text-gray-900">
                                    User Hobby: {user.hobby}
                                </strong>{' '}
                            </p>
                        </div>
                    </>
                ) : (
                    <p>No Profile Exit</p>
                )}
            </div>
        </div>
    );
};

export default UserProfile;
