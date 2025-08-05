import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  // Allow direct access to other pages even when not authenticated
  useEffect(() => {
    const isLoginPage = location.pathname === '/login' || location.pathname === '/';
    if (!isLoginPage && !isAuthenticated) {
      // Auto-authenticate for direct access to other pages
      setIsAuthenticated(true);
    }
  }, [location.pathname, isAuthenticated]);

  const login = () => {
    console.log('AuthContext login function called');
    console.log('Previous isAuthenticated:', isAuthenticated);
    setIsAuthenticated(true);
    console.log('isAuthenticated set to true');
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const value = {
    isAuthenticated,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 