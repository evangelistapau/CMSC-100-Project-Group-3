import React from 'react';
//page when a user tries to access routes for admin and vice versa
const UnauthorizedPage = () => {
  return (
    <div>
        <center>
      <h1>Unauthorized Access</h1>
      <p>You are not authorized to access this page.</p>
      </center>
    </div>
  );
};

export default UnauthorizedPage;