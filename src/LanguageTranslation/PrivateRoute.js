import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../RoleBasedapproach/AuthContext';

const PrivateRoute = ({ role }) => {
    const { user } =useAuth()
  
    if (!user) {
      return <Navigate to="/login" />;
    }
  
    if (user!== role) {
      return <Navigate to='/' />;
    }
  
    return <Outlet/>
  };
  
export default PrivateRoute;