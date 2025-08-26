import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { AlertTriangle, Truck, MapPin } from 'lucide-react';

const SotkisLevelHome = () => {
  const menuItems = [
    {
      title: 'Alertas',
      description: 'Gestão de alertas e notificações',
      icon: <AlertTriangle className="h-8 w-8" />,
      path: '/sotkis-level/alerts',
      bgColor: 'bg-red-500/20',
      iconColor: 'text-red-400'
    },
    {
      title: 'Recolhas',
      description: 'Planeamento e execução de recolhas',
      icon: <Truck className="h-8 w-8" />,
      path: '/sotkis-level/pickups',
      bgColor: 'bg-blue-500/20',
      iconColor: 'text-blue-400'
    },
    {
      title: 'Localizações e Contentores',
      description: 'Gestão de localizações e contentores',
      icon: <MapPin className="h-8 w-8" />,
      path: '/sotkis-level/locations-containers',
      bgColor: 'bg-green-500/20',
      iconColor: 'text-green-400'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-white">Sotkis Level</h1>
        <p className="text-gray-300">Monitorização de níveis e gestão de contentores</p>
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

export default SotkisLevelHome;
