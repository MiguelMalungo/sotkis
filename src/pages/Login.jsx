import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import backgroundLoginImage from '../../assets/summer.png';
import logoImage from '../../assets/Logo.png';
import ptFlag from '../../assets/pt.png';
import enFlag from '../../assets/en.png';
import frFlag from '../../assets/france.png';
import spFlag from '../../assets/sp.png';
import croatiaFlag from '../../assets/croatia.png';
import greeceFlag from '../../assets/greece.png';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { language, changeLanguage, t } = useLanguage();
  const { login } = useAuth();
  
  // Add login-page class to body when component mounts
  useEffect(() => {
    document.body.classList.add('login-page');
    return () => {
      document.body.classList.remove('login-page');
    };
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login form submitted');
    console.log('Login function:', login);
    login();
    console.log('Login function called');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      login();
    }
  };

  const handleLanguageChange = (newLanguage, e) => {
    e.stopPropagation();
    changeLanguage(newLanguage);
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-start pt-8 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${backgroundLoginImage})`,
      }}
    >
      {/* 56% black overlay */}
      <div className="absolute inset-0 bg-black/[0.56]" />
      
      {/* Logo and Login Card Container */}
      <div className="relative z-10 flex flex-col items-center w-full px-4 space-y-8">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center w-full">
          <img 
            src={logoImage} 
            alt="Sotkis Logo" 
            className="w-full max-w-xs sm:max-w-sm md:max-w-md h-32 sm:h-48 md:h-64 object-contain"
          />
        </div>

        {/* Login Card */}
        <div className="w-full max-w-md">
        <Card 
          className="login-card bg-black/15 backdrop-blur-lg border-0 shadow-2xl rounded-xl cursor-pointer hover:bg-black/25 transition-colors duration-200 !bg-black/15 !border-0"
          onClick={() => {
            console.log('Card background clicked');
            login();
          }}
        >
          <CardContent className="px-6 py-8">
            {/* Welcome text inside card */}
            <div className="text-center mb-6">
              <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">{t('welcome')}</h1>
              <p className="text-lg sm:text-xl text-gray-300">{t('loginSubtitle')}</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              {/* Username/Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-base font-medium text-gray-200">
                  {t('emailUsername')}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="exemplo@sotkis.com"
                  className="login-input w-full !text-base !h-12"
                  onKeyPress={handleKeyPress}
                />
              </div>
              {/* Password */}
              <div className="space-y-2">
                <label htmlFor="password" className="text-base font-medium text-gray-200">
                  {t('password')}
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="login-input w-full pr-10 !text-base !h-12"
                    onKeyPress={handleKeyPress}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              {/* Remember Me */}
              <div className="flex items-center">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-sotkis-green focus:ring-sotkis-green"
                  />
                  <span className="text-base text-gray-300">{t('rememberMe')}</span>
                </label>
              </div>
              {/* Login Button */}
              <Button
                type="submit"
                className="login-button w-full h-12 text-lg font-semibold"
                onClick={() => console.log('Button clicked')}
              >
                {t('loginButton')}
              </Button>
              {/* Forgot Password - moved under button and centered */}
              <div className="text-center">
                <button
                  type="button"
                  className="text-base text-sotkis-green hover:underline"
                >
                  {t('forgotPassword')}
                </button>
              </div>
            </form>
            
            {/* Language Flags - Clean Implementation */}
            <div className="language-flags-container">
              <div className="flags-wrapper">
                <button
                  onClick={(e) => handleLanguageChange('pt', e)}
                  className={`flag-button ${language === 'pt' ? 'active' : ''}`}
                >
                  <img src={ptFlag} alt="Portuguese" />
                </button>
                <button
                  onClick={(e) => handleLanguageChange('en', e)}
                  className={`flag-button ${language === 'en' ? 'active' : ''}`}
                >
                  <img src={enFlag} alt="English" />
                </button>
                <button
                  onClick={(e) => handleLanguageChange('fr', e)}
                  className={`flag-button ${language === 'fr' ? 'active' : ''}`}
                >
                  <img src={frFlag} alt="French" />
                </button>
                <button
                  onClick={(e) => handleLanguageChange('es', e)}
                  className={`flag-button ${language === 'es' ? 'active' : ''}`}
                >
                  <img src={spFlag} alt="Spanish" />
                </button>
                <button
                  onClick={(e) => handleLanguageChange('hr', e)}
                  className={`flag-button ${language === 'hr' ? 'active' : ''}`}
                >
                  <img src={croatiaFlag} alt="Croatian" />
                </button>
                <button
                  onClick={(e) => handleLanguageChange('el', e)}
                  className={`flag-button ${language === 'el' ? 'active' : ''}`}
                >
                  <img src={greeceFlag} alt="Greek" />
                </button>
              </div>
              <p className="language-text">{t('selectLanguage')}</p>
            </div>
          </CardContent>
        </Card>
        
        {/* Footer */}
        <div className="text-center mt-6 text-white/80">
          <p className="text-sm">
            {t('copyright')}
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 