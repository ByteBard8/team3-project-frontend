import React from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';
import auth from '../helpers/auth';

const PrivateRoute = ({ children, ...rest }) => {
  const location = useLocation();

  return auth.isAuthenticated() && auth.isAdmin() ? (
    children
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
