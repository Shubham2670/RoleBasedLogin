// src/components/About.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f9f9f9',
        padding: '0 20px',
      }}
    >
      <h1
        style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          color: '#222',
          marginBottom: '1rem',
          textAlign: 'center',
        }}
      >
        {t('about')}
      </h1>
      <p
        style={{
          fontSize: '1.5rem',
          color: '#555',
          textAlign: 'center',
          maxWidth: '800px',
          lineHeight: '1.6',
        }}
      >
        {t('aboutText')}
      </p>
    </div>
  );
};

export default About;

