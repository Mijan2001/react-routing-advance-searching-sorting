import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';

import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Products from './pages/Products.jsx';
import Navbar from './layout/Navbar.jsx';
import SignIn from './pages/SignIn.jsx';

import ProductDetails from './components/ProductDetails.jsx';
import NotFound from './pages/NotFound';
import UserProfile from './components/user/UserProfile.jsx';
import UserOrder from './components/user/UserOrder.jsx';
import ProtectedRoute from './routes/ProtectedRoute.jsx';
import AdminProfile from './components/admin/AdminProfile.jsx';
import AdminProducts from './components/admin/AdminProducts.jsx';
import AdminManageUser from './components/admin/AdminManageUser.jsx';
import AdminCategories from './components/admin/AdminCategories.jsx';
import AdminRoute from './routes/AdminRoute.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navbar />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Products />
            },
            {
                path: '/about',
                element: <About />
            },

            {
                path: 'signin',
                element: <SignIn />
            },
            {
                path: 'signout',
                element: <SignIn />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/product/:id',
                element: <ProductDetails />
            },
            {
                path: '/dashboard/user',
                element: <ProtectedRoute />,
                children: [
                    {
                        path: 'profile',
                        element: <UserProfile />
                    },
                    {
                        path: 'orders',
                        element: <UserOrder />
                    }
                ]
            },
            {
                path: '/dashboard/admin',
                element: <AdminRoute />,
                children: [
                    {
                        path: 'profile',
                        element: <AdminProfile />
                    },
                    {
                        path: 'products',
                        element: <AdminProducts />
                    },
                    {
                        path: 'users',
                        element: <AdminManageUser />
                    },
                    {
                        path: 'orders',
                        element: <AdminCategories />
                    }
                ]
            }
        ]
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
