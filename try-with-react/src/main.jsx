import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import './stylesheets/customer.css';
import './stylesheets/admin.css';
import './stylesheets/signup-login.css';

import Signup from './pages/Signup';
import Login from './pages/Login';
import AdminLogin from './pages/AdminLogin';
import Root from './pages/Root';
import Shop from './pages/Shop';
import OrderSummary from './pages/OrderSummary';
import Orders from './pages/Orders';
import AdminDashboard from './pages/AdminDashboard';
import RootAdmin from './pages/RootAdmin';
import Profile from './pages/Profile';
import Users from './pages/Users';
import Listings from './pages/Listings';
import Fulfillment from './pages/Fulfillment';
import Sales from './pages/Sales';
import ProtectedRoute from './authentication/ProtectedRoute';
import UnauthorizedPage from './authentication/Unauthorized';

const router = createBrowserRouter([

  { path: '/', element: <Signup /> },
  { path: '/login', element: <Login /> },
  { path: '/login-admin', element: <AdminLogin /> },

  {
    path: '/root',
    element: (
      <ProtectedRoute role="user">
        <Root />
      </ProtectedRoute>
    ),
    children: [
      { path: 'shop', element: <Shop /> },
      { path: 'order-summary', element: <OrderSummary /> },
      { path: 'orders', element: <Orders /> },
      { path: 'profile', element: <Profile /> },
    ],
  },

  {
    path: '/admin-dashboard',
    element: (
      <ProtectedRoute role="admin">
        <AdminDashboard />
      </ProtectedRoute>
    ),
  },

  {
    path: '/root-admin',
    element: (
      <ProtectedRoute role="admin">
        <RootAdmin />
      </ProtectedRoute>
    ),
    children: [
      { path: 'users', element: <Users /> },
      { path: 'listings', element: <Listings /> },
      { path: 'fulfillment', element: <Fulfillment /> },
      { path: 'sales', element: <Sales /> },
    ],
  },
  //redirect here if a certain role tried accessing other role
  { path: '/unauthorized', element: <UnauthorizedPage /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
