
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, role }) => {
  const isSignedIn = !!localStorage.getItem('token');  //if there is a token, then the user is signed in
  const userRole = localStorage.getItem('role'); // get the role from login page

  if (!isSignedIn) {
    return <Navigate to="/" />; //redirect to sign up page if the user is signed out
  }

  if (userRole != role) {                  
    return <Navigate to="/unauthorized" />; // Redirect to unauthorized page
  }

  return children;  //allow access to children
};

export default ProtectedRoute;
