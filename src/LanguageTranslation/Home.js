// src/components/Home.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f4f8', 
    padding: '2rem', 
  };

  const headingStyle = {
    fontWeight: 'bold',
    fontSize: '4rem', 
    color: '#333', 
    marginBottom: '1rem', 
  };

  const subheadingStyle = {
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#555', 
  };

  return (
    <div style={containerStyle}>
      <div style={headingStyle}>{t('home')}</div>
      <div style={subheadingStyle}>{t('welcomeHome')}</div>
    </div>
  );
};

export default Home;

