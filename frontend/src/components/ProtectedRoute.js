import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, allowedRoles, ...rest }) => {
  const { userInfo, isLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    console.log('User Info:', userInfo);
    console.log('Is Logged In:', isLoggedIn);
    console.log('Allowed Roles:', allowedRoles);
    console.log('User Role:', userInfo?.quyen); // Log the correct role key
  }, [userInfo, isLoggedIn, allowedRoles]);

  if (!isLoggedIn) {
    console.log('Not logged in, redirecting to login page');
    return <Navigate to="/dang_nhap" />;
  }

  if (allowedRoles && !allowedRoles.includes(userInfo.quyen)) { // Use 'quyen' instead of 'role'
    console.log(`User role ${userInfo.quyen} not in allowed roles, redirecting to home`);
    return <Navigate to="/" />;
  }

  console.log('Access granted, rendering component');
  return <Component {...rest} />;
};

export default ProtectedRoute;