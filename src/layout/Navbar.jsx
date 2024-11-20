import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';

const Navbar = () => {
    const [isSignedIn, setIsSignedId] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        const sign =
            localStorage.getItem('isSignedIn') &&
            JSON.parse(localStorage.getItem('isSignedIn'));

        setIsSignedId(true);
    }, []);

    return (
        <>
            <nav className="bg-blue-600 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex-shrink-0">
                            <NavLink
                                to="/"
                                className="text-white text-2xl font-bold"
                            >
                                BrandLogo
                            </NavLink>
                        </div>
                        <div className="hidden md:block">
                            <ul className="flex space-x-4">
                                <li>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'text-white bg-blue-700 px-3 py-2 rounded-md text-sm font-medium'
                                                : 'text-white hover:bg-blue-500 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium'
                                        }
                                        to="/"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                {isSignedIn ? (
                                    <li>
                                        <NavLink
                                            onClick={() => setIsSignedId(false)}
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'text-white bg-blue-700 px-3 py-2 rounded-md text-sm font-medium'
                                                    : 'text-white hover:bg-blue-500 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium'
                                            }
                                            to="/signin"
                                        >
                                            SignOut
                                        </NavLink>
                                    </li>
                                ) : (
                                    <li>
                                        <NavLink
                                            onClick={() => setIsSignedId(true)}
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'text-white bg-blue-700 px-3 py-2 rounded-md text-sm font-medium'
                                                    : 'text-white hover:bg-blue-500 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium'
                                            }
                                            to="/signin"
                                        >
                                            Signin
                                        </NavLink>
                                    </li>
                                )}

                                <li>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'text-white bg-blue-700 px-3 py-2 rounded-md text-sm font-medium'
                                                : 'text-white hover:bg-blue-500 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium'
                                        }
                                        to="/about"
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'text-white bg-blue-700 px-3 py-2 rounded-md text-sm font-medium'
                                                : 'text-white hover:bg-blue-500 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium'
                                        }
                                        to="/contact"
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        {/* Mobile menu */}
                        <div className="md:hidden">
                            <button
                                type="button"
                                className="text-white focus:outline-none hover:text-gray-300"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            </button>
                        </div>
                        {isMenuOpen && (
                            <div
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden relative  flex justify-center h-auto top-28 right-0 bg-blue-700/70  border"
                            >
                                <ul className="flex flex-col space-y-4 mt-4">
                                    <li>
                                        <NavLink
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'text-white bg-blue-700 px-3 py-2 rounded-md text-sm font-medium'
                                                    : 'text-white hover:bg-blue-500 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium'
                                            }
                                            to="/"
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    {isSignedIn ? (
                                        <li>
                                            <NavLink
                                                onClick={() =>
                                                    setIsSignedId(false)
                                                }
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? 'text-white bg-blue-700 px-3 py-2 rounded-md text-sm font-medium'
                                                        : 'text-white hover:bg-blue-500 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium'
                                                }
                                                to="/signin"
                                            >
                                                SignOut
                                            </NavLink>
                                        </li>
                                    ) : (
                                        <li>
                                            <NavLink
                                                onClick={() =>
                                                    setIsSignedId(true)
                                                }
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? 'text-white bg-blue-700 px-3 py-2 rounded-md text-sm font-medium'
                                                        : 'text-white hover:bg-blue-500 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium'
                                                }
                                                to="/signin"
                                            >
                                                Signin
                                            </NavLink>
                                        </li>
                                    )}
                                    <li>
                                        <NavLink
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'text-white bg-blue-700 px-3 py-2 rounded-md text-sm font-medium'
                                                    : 'text-white hover:bg-blue-500 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium'
                                            }
                                            to="/about"
                                        >
                                            About
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'text-white bg-blue-700 px-3 py-2 rounded-md text-sm font-medium'
                                                    : 'text-white hover:bg-blue-500 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium'
                                            }
                                            to="/contact"
                                        >
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            <ToastContainer />
            <Outlet />
            <Footer />
        </>
    );
};

export default Navbar;
