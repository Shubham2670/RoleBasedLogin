import React from 'react';
import { useTranslation } from 'react-i18next';

const Dashboards = () => {
  const { t } = useTranslation();

  return (
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f7f7f7',
    }}
  >
    <h1
      style={{
        fontSize: '4rem',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '1rem',
      }}
    >
      {t('dashboardText')}
    </h1>
    <p
      style={{
        fontSize: '1.5rem',
        color: '#666',
        textAlign: 'center',
        maxWidth: '600px',
      }}
    >
      {t('dashboardText')}
    </p>
  </div>
  );
};

export default Dashboards;
