import React, { useState,useContext } from 'react'
import {  useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom'; 

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth()
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await login({ username, password });
      if (username === 'admin') {
        navigate('/admin-dashboard');
      } else if (username === 'user') {
        navigate('/user-dashboard');
      }
    };
  return (
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
    <form onSubmit={handleSubmit} style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' ,height:'400px', width:'400px'}}>
      <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Login</h2>
      <div style={{ marginBottom: '30px' ,marginTop:'50px',marginRight:'30px'}}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc',height:'30px' }}
          required
        />
      </div>
      <div style={{ marginBottom: '30px' ,marginRight:'30px' }}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc',height:'30px' }}
          required
        />
      </div>
      <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '4px', backgroundColor: 'grey', color: '#fff', border: 'none',marginTop:'50px' }}>Login</button>
    </form>
  </div>
  )
}
