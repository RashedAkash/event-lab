import React, { useContext } from 'react';
import { FirebaseContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  
  const { user } = useContext(FirebaseContext);
  if (user) {
    return children
  }
  return <Navigate state={location.pathname} to='/login' />
}
export default PrivateRoutes;