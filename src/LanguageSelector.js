// src/LanguageSelector.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <select onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="fr">French</option>
      <option value="es">Spanish</option>
      <option value="hi">Hindi</option>
    </select>
  );
}

export default LanguageSelector;
