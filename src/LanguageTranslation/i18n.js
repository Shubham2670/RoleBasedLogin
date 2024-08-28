// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        about: "About Us",
        dashboards: "Dashboards",
        welcomeHome: "Welcome to the Home Page",
        aboutText: "This is the About Page",
        dashboardText: "Here are your Dashboards.",
      },
    },
    fr: {
      translation: {
        home: "Accueil",
        about: "À propos de nous",
        dashboards: "Tableaux de bord",
        welcomeHome: "Bienvenue sur la page d'accueil",
        aboutText: "Ceci est la page À propos de nous.",
        dashboardText: "Voici vos tableaux de bord.",
      },
    },
    es: {
      translation: {
        home: "Bienvenido",
        about: "Sobre nosotros",
        dashboards: "Paneles",
        welcomeHome: "Bienvenido a la página de inicio",
        aboutText: "Esta es la página Sobre nosotros.",
        dashboardText: "Aquí están tus paneles.",
      },
    },
    hi: {
      translation: {
        home: "घर",
        about: "हमारे बारे में",
        dashboards: "डैशबोर्ड्स",
        welcomeHome: "होम पेज पर आपका स्वागत है",
        aboutText: "यह हमारे बारे में पेज है।",
        dashboardText: "यहां आपके डैशबोर्ड्स हैं।",
      },
    },
  },
  lng: 'en', // Default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
