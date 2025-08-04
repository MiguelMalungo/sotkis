import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  pt: {
    // Login page
    welcome: 'Bem-vindo ao Sotkis',
    loginSubtitle: 'Faça login na sua conta',
    emailUsername: 'Email ou Username',
    password: 'Palavra-passe',
    rememberMe: 'Lembrar-me',
    forgotPassword: 'Esqueceu a palavra-passe?',
    loginButton: 'Entrar',
    selectLanguage: 'Selecionar idioma',
    testLogin: 'Test Login (Bypass)',
    copyright: '© 2025 Sotkis Intelligent Systems. Todos os direitos reservados.',
    
    // Sidebar
    dashboard: 'Dashboard',
    operation: 'Operação',
    performance: 'Performance',
    users: 'Utilizadores',
    administration: 'Administração',
    imports: 'Importações',
    lots: 'Lotes',
    importFile: 'Importar ficheiro',
    containers: 'Contentores',
    islands: 'Ilhas',
    adminUsers: 'Utilizadores',
    rfids: 'Rfids',
    billingStates: 'Estados da Faturação',
    countries: 'Países',
    types: 'Tipos',
    rgpds: 'Rgpd\'s',
    mySotkon: 'My Sotkon',
    sotkisAccess: 'Sotkis Access',
    sotcare: 'Sotcare',
    sotkisPaylt: 'Sotkis PAYLT',
    sotkisRoutes: 'Sotkis Routes',
    sotkisLevel: 'Sotkis Level',
    compliance: 'Compliance',
    planning: 'Planning',
  },
  en: {
    // Login page
    welcome: 'Welcome to Sotkis',
    loginSubtitle: 'Sign in to your account',
    emailUsername: 'Email or Username',
    password: 'Password',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password?',
    loginButton: 'Sign In',
    selectLanguage: 'Select language',
    testLogin: 'Test Login (Bypass)',
    copyright: '© 2025 Sotkis Intelligent Systems. All rights reserved.',
    
    // Sidebar
    dashboard: 'Dashboard',
    operation: 'Operation',
    performance: 'Performance',
    users: 'Users',
    administration: 'Administration',
    imports: 'Imports',
    lots: 'Lots',
    importFile: 'Import file',
    containers: 'Containers',
    islands: 'Islands',
    adminUsers: 'Users',
    rfids: 'Rfids',
    billingStates: 'Billing States',
    countries: 'Countries',
    types: 'Types',
    rgpds: 'Rgpd\'s',
    mySotkon: 'My Sotkon',
    sotkisAccess: 'Sotkis Access',
    sotcare: 'Sotcare',
    sotkisPaylt: 'Sotkis PAYLT',
    sotkisRoutes: 'Sotkis Routes',
    sotkisLevel: 'Sotkis Level',
    compliance: 'Compliance',
    planning: 'Planning',
  },
  es: {
    // Login page
    welcome: 'Bienvenido a Sotkis',
    loginSubtitle: 'Inicia sesión en tu cuenta',
    emailUsername: 'Email o Usuario',
    password: 'Contraseña',
    rememberMe: 'Recordarme',
    forgotPassword: '¿Olvidaste tu contraseña?',
    loginButton: 'Iniciar Sesión',
    selectLanguage: 'Seleccionar idioma',
    testLogin: 'Test Login (Bypass)',
    copyright: '© 2025 Sotkis Intelligent Systems. Todos los derechos reservados.',
    
    // Sidebar
    dashboard: 'Panel',
    operation: 'Operación',
    performance: 'Rendimiento',
    users: 'Usuarios',
    administration: 'Administración',
    imports: 'Importaciones',
    lots: 'Lotes',
    importFile: 'Importar archivo',
    containers: 'Contenedores',
    islands: 'Islas',
    adminUsers: 'Usuarios',
    rfids: 'Rfids',
    billingStates: 'Estados de Facturación',
    countries: 'Países',
    types: 'Tipos',
    rgpds: 'Rgpd\'s',
    mySotkon: 'My Sotkon',
    sotkisAccess: 'Sotkis Access',
    sotcare: 'Sotcare',
    sotkisPaylt: 'Sotkis PAYLT',
    sotkisRoutes: 'Sotkis Routes',
    sotkisLevel: 'Sotkis Level',
    compliance: 'Cumplimiento',
    planning: 'Planificación',
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');

  const t = (key) => {
    return translations[language][key] || key;
  };

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const value = {
    language,
    changeLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}; 