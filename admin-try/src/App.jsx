import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes instead of Switch
import AdminDashboard from './pages/AdminDashboard';
import Users from './components/Users';
import Listings from './components/Listings';
import Fulfillment from './components/Fulfillment';
import Sales from './components/Sales';
import './App.css';

function App() {
  return (
    <Router>
      <Routes> 
        <Route exact path="/" element={<AdminDashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/fulfillment" element={<Fulfillment />} />
        <Route path="/sales" element={<Sales />} />
      </Routes>
    </Router>
  );
}

export default App;
