import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { Wrench, Shield, AlertTriangle } from 'lucide-react';

const SotcareHome = () => {
  const menuItems = [
    {
      title: 'Intervenções Corretivas',
      description: 'Gestão de intervenções corretivas e reparações',
      icon: <Wrench className="h-8 w-8" />,
      path: '/sotcare/corrective-interventions',
      bgColor: 'bg-red-500/20',
      iconColor: 'text-red-400'
    },
    {
      title: 'Intervenções Preventivas',
      description: 'Planeamento e execução de manutenções preventivas',
      icon: <Shield className="h-8 w-8" />,
      path: '/sotcare/preventive-interventions',
      bgColor: 'bg-yellow-500/20',
      iconColor: 'text-yellow-400'
    },
    {
      title: 'Gestão de Problemas',
      description: 'Identificação e resolução de problemas',
      icon: <AlertTriangle className="h-8 w-8" />,
      path: '/sotcare/problem-management',
      bgColor: 'bg-green-500/20',
      iconColor: 'text-green-400'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-white">Sotcare</h1>
        <p className="text-gray-300">Gestão de intervenções e manutenções</p>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <Link key={index} to={item.path}>
            <Card className="bg-white/10 backdrop-blur-lg border-0 hover:bg-white/20 transition-all duration-200 cursor-pointer group">
              <CardHeader className="pb-3">
                <div className={`w-12 h-12 ${item.bgColor} rounded-lg mb-3 flex items-center justify-center hover:scale-110 transition-transform`}>
                  <div className={item.iconColor}>
                    {item.icon}
                  </div>
                </div>
                <CardTitle className="text-lg text-white">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SotcareHome;
