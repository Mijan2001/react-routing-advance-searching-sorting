import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    // setInputChangedValue
    const setInputChangedValue = event => {
        const { name, value } = event.target;

        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (email === 'mijan.cse19@gmail.com' && password === '123456') {
            console.log('Login Success');
            const user = {
                name: 'Mijanur Rahman',
                email: email,
                password: password,
                city: 'Pabna',
                country: 'Bangladesh',
                hobby: 'Programming',
                isAdmin: false
            };
            localStorage.setItem(
                'userData',
                JSON.stringify({ user, isSignedIn: true })
            );
            const path = user.isAdmin
                ? '/dashboard/admin/profile'
                : '/dashboard/user/profile';
            console.log('path', path);
            navigate(path, { state: user });
        } else {
            toast.error('Invalid email or password');
            navigate('/signin');
        }
    };

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">
                        Sign In
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                onChange={setInputChangedValue}
                                name="email"
                                type="email"
                                id="email"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                onChange={setInputChangedValue}
                                name="password"
                                type="password"
                                id="password"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
