import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import Users from '../components/Users';
import Listings from '../components/Listings';
import Fulfillment from '../components/Fulfillment';
import Sales from '../components/Sales';

export default function Root() {
  return (
    <Router>
      <div>
        {/* Navigation Menu */}
        <nav>
          <ul>
            <li>
              <Link to="/">Admin Dashboard</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/listings">Listings</Link>
            </li>
            <li>
              <Link to="/fulfillment">Fulfillment</Link>
            </li>
            <li>
              <Link to="/sales">Sales</Link>
            </li>
          </ul>
        </nav>

        {/* Main Content (Routes) */}
        <div className="content">
          <Routes> 
            <Route exact path="/" element={<AdminDashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/fulfillment" element={<Fulfillment />} />
            <Route path="/sales" element={<Sales />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
