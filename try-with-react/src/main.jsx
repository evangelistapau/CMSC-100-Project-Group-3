import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';

import Signup from './pages/Signup';
import Root from './pages/Root';
import Shop from './pages/Shop';
import Login from './pages/Login';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import Users from './components/Users';
import Listings from './components/Listings';
import Fulfillment from './components/Fulfillment';
import Sales from './components/Sales';

const isUserSignedIn = !!localStorage.getItem('token')
// Define the routes
const router = createBrowserRouter([
  { path: '/', element: <Signup />},
  { path: '/root', element: <Root />, children: [
    { path: 'shop', element: <Shop /> },
    // Add other children routes of Root if needed
  ]},
  { path: '/login', element: <Login /> }, // route for the login page
  { path: '/login-admin', element: <AdminLogin /> },
  { path: '/admin-dashboard', element: <AdminDashboard /> }, // route for the admin dashboard
  { path: '/users', element: <Users /> }, // route for user management
  { path: '/listings', element: <Listings /> }, // route for product listings
  { path: '/fulfillment', element: <Fulfillment /> }, // route for order fulfillment
  { path: '/sales', element: <Sales /> },
//{isUserSignedIn && <Route path='/root' element={<Root/>}/>}
]);
//ituloy nasa last part ng vid

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Routes />
    </RouterProvider>
  </React.StrictMode>
);
