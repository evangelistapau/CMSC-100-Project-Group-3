import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import Root from './pages/Root';
import Shop from './pages/Shop';
import AdminRoot from './admin_pages/Admin_Root';
import AdminOrders from './admin_pages/Admin_Orders';
import AdminUsers from './admin_pages/Admin_Users';
import AdminProducts from './admin_pages/Admin_Products';
import AdminSales from './admin_pages/Admin_Sales';


const router = createBrowserRouter([
  { path: '/', element: <Root />, children: [
    { path: '/', element: <Shop /> }
  ]},
  { path: '/admin', element: <AdminRoot />, children: [
    { path: '/admin/accounts', element: <AdminUsers /> },
    { path: '/admin/products', element: <AdminProducts /> },
    { path: '/admin/orders', element: <AdminOrders /> },
    { path: '/admin/sales', element: <AdminSales /> },
  ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
