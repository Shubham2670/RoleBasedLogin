import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const UserDashboard = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <h1>User Dashboard</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default UserDashboard;