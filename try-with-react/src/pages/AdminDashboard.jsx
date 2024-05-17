import React from 'react';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="category-cards">
        {/* card for Users */}
        <Link to="/users" className="category-card">
          <h2>Users</h2>
          <p>Manage user accounts</p>
        </Link>

        {/* card for Listings */}
        <Link to="/listings" className="category-card">

        {/* card for Fulfillment */}
        <Link to="/fulfillment" className="category-card">

        {/* card for Sales */}
        <Link to="/sales" className="category-card">
          <h2>Sales</h2>
          <p>View sales reports</p>
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;
