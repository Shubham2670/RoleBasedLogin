// src/components/LanguageSwitcher.js
import React from 'react';
import i18n from 'i18next';

const LanguageSwitcher = () => {
  
  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  const containerStyle = {
    display: 'flex',
    padding: '1rem',
  };

  const labelStyle = {
    marginRight: '0.5rem',
    fontSize: '1rem',
    color: '#4a5568', // Gray color
  };

  const selectStyle = {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0', // Light gray border
    borderRadius: '0.375rem',
    padding: '0.5rem 1rem',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
    fontSize: '1rem',
    color: '#1a202c', // Dark gray text color
    transition: 'border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  };

  const selectFocusStyle = {
    outline: 'none',
    borderColor: '#3182ce', // Blue border on focus
    boxShadow: '0 0 0 2px rgba(66, 153, 225, 0.5)',
  };
  
  const optionStyle = {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    color: '#1a202c', // Dark gray text color
    backgroundColor: '#ffffff', // White background
  };

  return (
    <div style={containerStyle}>
    <label htmlFor="language-select" style={labelStyle}>
      Select Language:
    </label>
    <select
        id="language-select"
        onChange={changeLanguage}
        style={selectStyle}
      >
        <option value="en" style={optionStyle}>English</option>
        <option value="fr" style={optionStyle}>French</option>
        <option value="es" style={optionStyle}>Spanish</option>
        <option value="hi" style={optionStyle}>Hindi</option>
      </select>
  </div>
  );
};

export default LanguageSwitcher;
