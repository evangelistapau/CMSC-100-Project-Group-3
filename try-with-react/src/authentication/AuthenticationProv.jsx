// import React, { createContext, useState, useEffect, useContext } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem('authToken');
//     const admin = localStorage.getItem('isAdmin') === 'true';
//     if (token) {
//       setIsAuthenticated(true);
//       setIsAdmin(admin);
//     }
//   }, []);

//   const login = (token, admin = false) => {
//     localStorage.setItem('authToken', token);
//     localStorage.setItem('isAdmin', admin);
//     setIsAuthenticated(true);
//     setIsAdmin(admin);
//   };

//   const logout = () => {
//     localStorage.removeItem('authToken');
//     localStorage.removeItem('isAdmin');
//     setIsAuthenticated(false);
//     setIsAdmin(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, isAdmin, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
