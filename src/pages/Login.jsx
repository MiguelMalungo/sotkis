import React, { useState } from 'react';
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
import spFlag from '../../assets/sp.png';
import croatiaFlag from '../../assets/croatia.png';
import greeceFlag from '../../assets/greece.png';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { language, changeLanguage, t } = useLanguage();
  const { login } = useAuth();

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
      {/* 70% black overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
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
          className="bg-black/15 backdrop-blur-lg border-0 shadow-2xl rounded-xl cursor-pointer hover:bg-black/25 transition-colors duration-200"
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

            {/* Language Flags */}
            <div className="mt-6 text-center">
              <div className="flex justify-center space-x-4 mb-3">
                <button
                  onClick={(e) => handleLanguageChange('pt', e)}
                  className={`w-12 h-12 rounded-full shadow-lg overflow-hidden transition-transform hover:scale-110 border-2 border-white ${
                    language === 'pt' ? 'ring-2 ring-sotkis-green' : ''
                  }`}
                >
                  <img 
                    src={ptFlag}
                    alt="Portuguese"
                    className="w-full h-full object-cover"
                  />
                </button>
                <button
                  onClick={(e) => handleLanguageChange('en', e)}
                  className={`w-12 h-12 rounded-full shadow-lg overflow-hidden transition-transform hover:scale-110 border-2 border-white ${
                    language === 'en' ? 'ring-2 ring-sotkis-green' : ''
                  }`}
                >
                  <img 
                    src={enFlag}
                    alt="English"
                    className="w-full h-full object-cover"
                  />
                </button>
                <button
                  onClick={(e) => handleLanguageChange('es', e)}
                  className={`w-12 h-12 rounded-full shadow-lg overflow-hidden transition-transform hover:scale-110 border-2 border-white ${
                    language === 'es' ? 'ring-2 ring-sotkis-green' : ''
                  }`}
                >
                  <img 
                    src={spFlag}
                    alt="Spanish"
                    className="w-full h-full object-cover"
                  />
                </button>
                <button
                  onClick={(e) => handleLanguageChange('hr', e)}
                  className={`w-12 h-12 rounded-full shadow-lg overflow-hidden transition-transform hover:scale-110 border-2 border-white ${
                    language === 'hr' ? 'ring-2 ring-sotkis-green' : ''
                  }`}
                >
                  <img 
                    src={croatiaFlag}
                    alt="Croatian"
                    className="w-full h-full object-cover"
                  />
                </button>
                <button
                  onClick={(e) => handleLanguageChange('el', e)}
                  className={`w-12 h-12 rounded-full shadow-lg overflow-hidden transition-transform hover:scale-110 border-2 border-white ${
                    language === 'el' ? 'ring-2 ring-sotkis-green' : ''
                  }`}
                >
                  <img 
                    src={greeceFlag}
                    alt="Greek"
                    className="w-full h-full object-cover"
                  />
                </button>
              </div>
              {/* Select Language text moved under flags */}
              <p className="text-sm text-gray-300">{t('selectLanguage')}</p>
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