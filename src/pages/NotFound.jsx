import React from 'react';
import { useRouteError } from 'react-router-dom';

const NotFound = () => {
    const error = useRouteError();
    return (
        <>
            <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    404 Not Found
                </h2>
                <p className="text-center text-red-500">{error.statusText}</p>
            </div>
        </>
    );
};

export default NotFound;
