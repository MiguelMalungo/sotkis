import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { Wifi, Battery, FileText, ArrowDownCircle } from 'lucide-react';

const SotkisAccessHome = () => {
  const menuItems = [
    {
      title: 'RFIDs',
      description: 'Gestão de RFIDs e controlos de acesso',
      icon: <Wifi className="h-8 w-8" />,
      path: '/sotkis-access/rfids',
      bgColor: 'bg-blue-500/20',
      iconColor: 'text-blue-400'
    },
    {
      title: 'Baterias',
      description: 'Monitorização de níveis de bateria',
      icon: <Battery className="h-8 w-8" />,
      path: '/sotkis-access/batteries',
      bgColor: 'bg-green-500/20',
      iconColor: 'text-green-400'
    },
    {
      title: 'Deposições',
      description: 'Controlo de deposições e acessos',
      icon: <ArrowDownCircle className="h-8 w-8" />,
      path: '/sotkis-access/deposits',
      bgColor: 'bg-purple-500/20',
      iconColor: 'text-purple-400'
    },
    {
      title: 'Relatórios',
      description: 'Relatórios de acesso e atividade',
      icon: <FileText className="h-8 w-8" />,
      path: '/sotkis-access/reports',
      bgColor: 'bg-orange-500/20',
      iconColor: 'text-orange-400'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-white">Sotkis Access</h1>
        <p className="text-gray-300">Gestão de acessos e controlos</p>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

export default SotkisAccessHome;
