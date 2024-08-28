// src/components/Navigation.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../RoleBasedapproach/AuthContext'; 
const Navigation = () => {
  const { t } = useTranslation();
  const { user ,logout} =useAuth();

  const navigate = useNavigate()
 const handleLogout=()=>{
logout();
navigate('/login')
 }
  if (!user) return null;

  const navStyle = {
    backgroundColor: '#333', 
    padding: '1rem 2rem', 
    display: 'flex',
    justifyContent: 'center',
  };

  const ulStyle = {
    listStyleType: 'none', 
    padding: 0,
    margin: 0,
    display: 'flex', 
  };

  const liStyle = {
    margin: '0 1rem', 
  };

  const linkStyle = {
    color: '#ffffff', 
    textDecoration: 'none', 
    fontSize: '1rem', 
    transition: 'color 0.3s ease', 
  };

  const linkHoverStyle = {
    color: '#f39c12', 
  };

  return (
    <nav style={navStyle} aria-label="Main Navigation">
      <ul style={ulStyle}>
            <li style={liStyle}>
              <Link
                to="/dashboards"
                style={linkStyle}
                onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
                onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
              >
                {t('dashboards')} 
              </Link>
            </li>
       
        {user === 'admin' ? (
          <>
            <li style={liStyle}>
              <Link
                to="/about"
                style={linkStyle}
                onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
                onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
              >
                {t('about')}
              </Link>
            </li>
          </>
        ) : (
          <>
          {/* <li style={liStyle}> */}
            {/* <Link
              to="/dashboards"
              style={linkStyle}
              onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
              onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
              >
              {t('dashboards')}
            </Link> */}
          {/* </li> */}
           <li style={liStyle}>
           <Link
             to="/home"
             style={linkStyle}
             onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
             onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
             >
             {t('home')}
           </Link>
         </li>
             </>
        )}
        <li style={liStyle}>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: '#dc3545', // Red background
              color: '#ffffff', // White text color
              border: 'none',
              padding: '10px 20px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#c82333')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#dc3545')}
          >
            {t('logout')}
          </button>
        </li>
      
      </ul>
    </nav>
  );
};

export default Navigation;
