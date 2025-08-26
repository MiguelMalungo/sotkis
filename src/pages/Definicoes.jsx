import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectOption } from '@/components/ui/select';
import { Lock, Globe, Sun } from 'lucide-react';

const Definicoes = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('portuguese');

  const languages = [
    { value: 'portuguese', label: 'Portuguese' },
    { value: 'english', label: 'English' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'french', label: 'French' }
  ];

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // TODO: Implement password change logic
    console.log('Password change submitted');
  };

  const handleLanguageChange = (e) => {
    e.preventDefault();
    // TODO: Implement language change logic
    console.log('Language change submitted');
  };

  return (
    <div className="min-h-screen p-4 md:p-6 relative">
      {/* Theme Toggle Button */}
      <div className="fixed top-4 right-4 z-[60]">
        <Button
          variant="ghost"
          size="icon"
          className="bg-white/10 backdrop-blur-lg text-white border-0 hover:bg-white/20 rounded-xl shadow-2xl w-12 h-12 flex items-center justify-center"
          onClick={() => {
            const isEnablingLight = !document.body.classList.contains('light-theme');
            const layoutElement = document.querySelector('.min-h-screen');

            if (layoutElement) {
              // Background image containers (including inline backgroundImage/background-image styles)
              const backgroundDivs = layoutElement.querySelectorAll(
                'div[style*="backgroundImage"], div[style*="background-image"]'
              );
              backgroundDivs.forEach((div) => {
                div.style.display = isEnablingLight ? 'none' : '';
              });

              // Overlays: match common overlay classes and inline rgba gradients
              const overlayDivs = layoutElement.querySelectorAll(
                '.bg-overlay, .bg-overlay-light, div[style*="rgba(0, 0, 0, 0.8)"], div[style*="rgba(0,0,0,0.8)"], div[style*="rgba(0, 0, 0, 0.56)"], div[style*="rgba(0,0,0,0.56)"]'
              );
              overlayDivs.forEach((div) => {
                div.style.display = isEnablingLight ? 'none' : '';
              });
            }

            // Toggle body class for light theme last, based on target state
            if (isEnablingLight) {
              document.body.classList.add('light-theme');
            } else {
              document.body.classList.remove('light-theme');
            }
          }}
          title="Toggle Theme"
        >
          <Sun size={20} />
        </Button>
      </div>

      <div className="max-w-2xl mx-auto pt-8">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-sotkis-green mb-8 text-center">
          Definições de Conta
        </h1>

        {/* Password Change Section */}
        <Card className="card-dark-large mb-8">
          <CardHeader>
            <CardTitle className="text-white text-xl flex items-center gap-2">
              <Lock className="w-5 h-5 text-sotkis-green" />
              Alterar Palavra-passe:
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div className="space-y-2">
                <label className="text-white font-medium text-sm">
                  Palavra-passe Atual
                </label>
                <Input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Sua palavra-passe atual"
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-sotkis-green focus:ring-sotkis-green"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-white font-medium text-sm">
                  Nova Palavra-passe
                </label>
                <Input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Sua nova palavra-passe"
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-sotkis-green focus:ring-sotkis-green"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-white font-medium text-sm">
                  Confirmar Nova Palavra-passe
                </label>
                <Input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirmação da sua nova password"
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-sotkis-green focus:ring-sotkis-green"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-sotkis-green hover:bg-sotkis-green/90 text-black py-3 rounded-lg font-medium"
              >
                Submeter
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Language Selection Section */}
        <Card className="card-dark-large">
          <CardHeader>
            <CardTitle className="text-white text-xl flex items-center gap-2">
              <Globe className="w-5 h-5 text-sotkis-green" />
              Língua:
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLanguageChange} className="space-y-4">
              <div className="space-y-2">
                <label className="text-white font-medium text-sm">
                  Selecione a sua língua preferida
                </label>
                <Select
                  value={selectedLanguage}
                  onChange={(value) => setSelectedLanguage(value)}
                >
                  <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-sotkis-green focus:ring-sotkis-green">
                    <SelectValue placeholder="Selecione uma língua" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((language) => (
                      <SelectItem key={language.value} value={language.value}>
                        {language.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-sotkis-green hover:bg-sotkis-green/90 text-black py-3 rounded-lg font-medium"
              >
                Submeter
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Definicoes;
