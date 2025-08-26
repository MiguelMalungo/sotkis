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
  },
  hr: {
    // Login page
    welcome: 'Dobrodošli u Sotkis',
    loginSubtitle: 'Prijavite se na svoj račun',
    emailUsername: 'Email ili korisničko ime',
    password: 'Lozinka',
    rememberMe: 'Zapamti me',
    forgotPassword: 'Zaboravili ste lozinku?',
    loginButton: 'Prijavi se',
    selectLanguage: 'Odaberite jezik',
    testLogin: 'Test Login (Bypass)',
    copyright: '© 2025 Sotkis Intelligent Systems. Sva prava pridržana.',
    
    // Sidebar
    dashboard: 'Nadzorna ploča',
    operation: 'Operacija',
    performance: 'Učinkovitost',
    users: 'Korisnici',
    administration: 'Administracija',
    imports: 'Uvozi',
    lots: 'Serije',
    importFile: 'Uvezi datoteku',
    containers: 'Kontejneri',
    islands: 'Otoci',
    adminUsers: 'Korisnici',
    rfids: 'Rfids',
    billingStates: 'Stanja naplate',
    countries: 'Zemlje',
    types: 'Tipovi',
    rgpds: 'Rgpd\'s',
    mySotkon: 'My Sotkon',
    sotkisAccess: 'Sotkis Access',
    sotcare: 'Sotcare',
    sotkisPaylt: 'Sotkis PAYLT',
    sotkisRoutes: 'Sotkis Routes',
    sotkisLevel: 'Sotkis Level',
    compliance: 'Sukladnost',
    planning: 'Planiranje',
  },
  fr: {
    // Login page
    welcome: 'Bienvenue sur Sotkis',
    loginSubtitle: 'Connectez-vous à votre compte',
    emailUsername: 'Email ou nom d\'utilisateur',
    password: 'Mot de passe',
    rememberMe: 'Se souvenir de moi',
    forgotPassword: 'Mot de passe oublié ?',
    loginButton: 'Se connecter',
    selectLanguage: 'Sélectionner la langue',
    testLogin: 'Test Login (Bypass)',
    copyright: '© 2025 Sotkis Intelligent Systems. Tous droits réservés.',
    
    // Sidebar
    dashboard: 'Tableau de bord',
    operation: 'Opération',
    performance: 'Performance',
    users: 'Utilisateurs',
    administration: 'Administration',
    imports: 'Importations',
    lots: 'Lots',
    importFile: 'Importer un fichier',
    containers: 'Conteneurs',
    islands: 'Îles',
    adminUsers: 'Utilisateurs',
    rfids: 'Rfids',
    billingStates: 'États de facturation',
    countries: 'Pays',
    types: 'Types',
    rgpds: 'Rgpd\'s',
    mySotkon: 'My Sotkon',
    sotkisAccess: 'Sotkis Access',
    sotcare: 'Sotcare',
    sotkisPaylt: 'Sotkis PAYLT',
    sotkisRoutes: 'Sotkis Routes',
    sotkisLevel: 'Sotkis Level',
    compliance: 'Conformité',
    planning: 'Planification',
  },
  el: {
    // Login page
    welcome: 'Καλώς ήρθατε στο Sotkis',
    loginSubtitle: 'Συνδεθείτε στον λογαριασμό σας',
    emailUsername: 'Email ή όνομα χρήστη',
    password: 'Κωδικός πρόσβασης',
    rememberMe: 'Να με θυμάσαι',
    forgotPassword: 'Ξεχάσατε τον κωδικό;',
    loginButton: 'Σύνδεση',
    selectLanguage: 'Επιλέξτε γλώσσα',
    testLogin: 'Test Login (Bypass)',
    copyright: '© 2025 Sotkis Intelligent Systems. Με επιφύλαξη παντός δικαιώματος.',
    
    // Sidebar
    dashboard: 'Πίνακας ελέγχου',
    operation: 'Λειτουργία',
    performance: 'Απόδοση',
    users: 'Χρήστες',
    administration: 'Διαχείριση',
    imports: 'Εισαγωγές',
    lots: 'Παρτίδες',
    importFile: 'Εισαγωγή αρχείου',
    containers: 'Δοχεία',
    islands: 'Νησιά',
    adminUsers: 'Χρήστες',
    rfids: 'Rfids',
    billingStates: 'Καταστάσεις χρέωσης',
    countries: 'Χώρες',
    types: 'Τύποι',
    rgpds: 'Rgpd\'s',
    mySotkon: 'My Sotkon',
    sotkisAccess: 'Sotkis Access',
    sotcare: 'Sotcare',
    sotkisPaylt: 'Sotkis PAYLT',
    sotkisRoutes: 'Sotkis Routes',
    sotkisLevel: 'Sotkis Level',
    compliance: 'Συμμόρφωση',
    planning: 'Σχεδιασμός',
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