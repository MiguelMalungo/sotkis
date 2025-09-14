import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Settings = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [language, setLanguage] = useState('pt');

  return (
    <div className="p-6 space-y-6 mt-20 md:mt-28">
      <div className="page-header text-right">
        <h1 className="text-xl font-bold text-white">Definições de Conta</h1>
      </div>

      <Card className="bg-white/20 backdrop-blur-lg border-0">
        <CardHeader>
          <CardTitle className="text-white">Alterar Palavra-passe:</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nova password"
            className="bg-yellow-100 text-black placeholder-gray-600"
          />
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirmação da sua nova password"
            className="bg-white text-black placeholder-gray-600"
          />
          <Button className="bg-sotkis-green text-black hover:bg-sotkis-green/90 w-32">Submeter</Button>
        </CardContent>
      </Card>

      <Card className="bg-white/20 backdrop-blur-lg border-0">
        <CardHeader>
          <CardTitle className="text-white">Língua:</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className={`${
                      isLightMode 
                        ? 'bg-sotkis-green/20 border-sotkis-green/40 text-gray-900' 
                        : 'bg-white text-black'
                    }`}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pt">Portuguese</SelectItem>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Español</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-sotkis-green text-black hover:bg-sotkis-green/90 w-32">Submeter</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;


