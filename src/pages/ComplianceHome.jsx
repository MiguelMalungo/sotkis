import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { Users, Building2, BarChart3 } from 'lucide-react';

const ComplianceHome = () => {
  const menuItems = [
    {
      title: 'Clientes',
      description: 'Gestão de não-conformidades de clientes',
      icon: <Users className="h-8 w-8" />,
      path: '/compliance/clients',
      bgColor: 'bg-blue-500/20',
      iconColor: 'text-blue-400'
    },
    {
      title: 'Fornecedores',
      description: 'Gestão de não-conformidades de fornecedores',
      icon: <Building2 className="h-8 w-8" />,
      path: '/compliance/suppliers',
      bgColor: 'bg-green-500/20',
      iconColor: 'text-green-400'
    },
    {
      title: 'Dashboard',
      description: 'Visão geral de compliance e métricas',
      icon: <BarChart3 className="h-8 w-8" />,
      path: '/compliance/dashboard',
      bgColor: 'bg-purple-500/20',
      iconColor: 'text-purple-400'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-white">Compliance</h1>
        <p className="text-gray-300">Gestão de não-conformidades e qualidade</p>
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

export default ComplianceHome;
