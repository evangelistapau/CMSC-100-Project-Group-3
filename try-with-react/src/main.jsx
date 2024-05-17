import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';

import Root from './pages/Root';
import Shop from './pages/Shop';
import OrderSummary from './pages/OrderSummary';
import Orders from './pages/Orders';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import Profile from './pages/Profile';
import Users from './pages/Users';
import Listings from './pages/Listings';
import Fulfillment from './pages/Fulfillment';
import Sales from './pages/Sales';


// const router = createBrowserRouter([
//   { path: '/', element: <Root />, children: [
//     { path: '/', element: <Shop /> },
//     { path: '/order-summary', element: <OrderSummary /> },
//     { path: '/orders', element: <Orders /> }
//   ]}
// ])



const router = createBrowserRouter([
  { path: '/', element: <Signup />},
  { path: '/login', element: <Login /> }, // route for the login page
  { path: '/login-admin', element: <AdminLogin /> },
  { path: '/root', element: <Root />, children: [
    { path: 'shop', element: <Shop /> },
    { path: 'orders', element: <Orders />},
    { path: 'profile', element: <Profile />},
    // Add other children routes of Root if needed
  ]},
  { path: '/order-summary', element: <OrderSummary />},
  // admin
  { path: '/admin-dashboard', element: <AdminDashboard /> }, // route for the admin dashboard
  // { path: '/root-admin', element: <RootAdmin />, children: [
  //   { path: 'users', element: <Users /> }, // route for user management
  //   { path: 'listings', element: <Listings /> }, // route for product listings
  //   { path: 'fulfillment', element: <Fulfillment /> }, // route for order fulfillment
  //   { path: 'sales', element: <Sales /> },
  //   // { path: 'profile', element: <Profile />},
  //   // Add other children routes of Root if needed
  // ]},
import AdminRoot from './admin_pages/Admin_Root';
import AdminOrders from './admin_pages/Admin_Orders';
import AdminUsers from './admin_pages/Admin_Users';
import AdminProducts from './admin_pages/Admin_Products';
import AdminSales from './admin_pages/Admin_Sales';
>>>>>>> admin-jethro

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
