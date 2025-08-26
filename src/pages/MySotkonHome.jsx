import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Building2, MapPin, Package } from 'lucide-react';

const MySotkonHome = () => {
  const navigate = useNavigate();

  const links = [
    { 
      label: 'Manuais', 
      to: '/my-sotkon/manuais',
      icon: <FileText className="h-8 w-8" />,
      bgColor: 'bg-blue-500/20',
      iconColor: 'text-blue-400'
    },
    { 
      label: 'Departamentos', 
      to: '/my-sotkon/departamentos',
      icon: <Building2 className="h-8 w-8" />,
      bgColor: 'bg-green-500/20',
      iconColor: 'text-green-400'
    },
    { 
      label: 'Ilhas', 
      to: '/my-sotkon/ilhas',
      icon: <MapPin className="h-8 w-8" />,
      bgColor: 'bg-purple-500/20',
      iconColor: 'text-purple-400'
    },
    { 
      label: 'Contentores', 
      to: '/my-sotkon/contentores',
      icon: <Package className="h-8 w-8" />,
      bgColor: 'bg-orange-500/20',
      iconColor: 'text-orange-400'
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div className="page-header text-right">
            <h1 className="text-xl font-bold text-white">My Sotkon</h1>
            <p className="text-gray-300 mt-1">Gestão do sistema My Sotkon</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {links.map((item) => (
          <Card
            key={item.to}
            className="bg-white/10 backdrop-blur-lg border-0 cursor-pointer hover:bg-white/20 transition-all duration-200"
            onClick={() => navigate(item.to)}
          >
            <CardContent className="p-6">
              <div className={`w-12 h-12 ${item.bgColor} rounded-lg mb-3 flex items-center justify-center hover:scale-110 transition-transform`}>
                <div className={item.iconColor}>
                  {item.icon}
                </div>
              </div>
              <h3 className="dashboard-card-title text-xl font-bold text-white mb-2">{item.label}</h3>
              <p className="text-gray-300 text-sm">Abrir {item.label.toLowerCase()}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MySotkonHome;


