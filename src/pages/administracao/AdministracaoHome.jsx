import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import {
  Upload, FileText, Globe, Radio, Package,
  Recycle, Lock, Eye, Gift, Box, Tag, Wrench, Shield, Gauge, Key, Users, Cross, ThumbsUp
} from 'lucide-react';

const AdministracaoHome = () => {
  const navigate = useNavigate();

  const links = [
    { 
      label: 'Importações', 
      to: '/administracao/importacoes',
      icon: <Upload className="h-8 w-8" />,
      bgColor: 'bg-blue-500/20',
      iconColor: 'text-blue-400'
    },

    { 
      label: 'Estados da Faturação', 
      to: '/administracao/estados-faturacao',
      icon: <FileText className="h-8 w-8" />,
      bgColor: 'bg-red-500/20',
      iconColor: 'text-red-400'
    },
    { 
      label: 'Países', 
      to: '/administracao/paises',
      icon: <Globe className="h-8 w-8" />,
      bgColor: 'bg-indigo-500/20',
      iconColor: 'text-indigo-400'
    },
    { 
      label: 'Transponders', 
      to: '/administracao/transponders',
      icon: <Radio className="h-8 w-8" />,
      bgColor: 'bg-pink-500/20',
      iconColor: 'text-pink-400'
    },
    { 
      label: 'Contentores', 
      to: '/administracao/contentores',
      icon: <Package className="h-8 w-8" />,
      bgColor: 'bg-teal-500/20',
      iconColor: 'text-teal-400'
    },
    { 
      label: 'Resíduos', 
      to: '/administracao/residuos',
      icon: <Recycle className="h-8 w-8" />,
      bgColor: 'bg-emerald-500/20',
      iconColor: 'text-emerald-400'
    },
    { 
      label: 'Controlos de Acesso', 
      to: '/administracao/controlos-acesso',
      icon: <Lock className="h-8 w-8" />,
      bgColor: 'bg-amber-500/20',
      iconColor: 'text-amber-400'
    },
    { 
      label: 'Acabamentos', 
      to: '/administracao/acabamentos',
      icon: <Eye className="h-8 w-8" />,
      bgColor: 'bg-cyan-500/20',
      iconColor: 'text-cyan-400'
    },
    { 
      label: 'Kits', 
      to: '/administracao/kits',
      icon: <Cross className="h-8 w-8" />,
      bgColor: 'bg-rose-500/20',
      iconColor: 'text-rose-400'
    },
    { 
      label: 'Volumes do Kit', 
      to: '/administracao/volumes-kit',
      icon: <Box className="h-8 w-8" />,
      bgColor: 'bg-slate-500/20',
      iconColor: 'text-slate-400'
    },
    { 
      label: 'Marcos', 
      to: '/administracao/marcos',
      icon: <Tag className="h-8 w-8" />,
      bgColor: 'bg-violet-500/20',
      iconColor: 'text-violet-400'
    },
    { 
      label: 'Intervenções', 
      to: '/administracao/intervencoes',
      icon: <Wrench className="h-8 w-8" />,
      bgColor: 'bg-yellow-500/20',
      iconColor: 'text-yellow-400'
    },
    { 
      label: 'Plat. de Segurança', 
      to: '/administracao/plataformas-seguranca',
      icon: <Shield className="h-8 w-8" />,
      bgColor: 'bg-lime-500/20',
      iconColor: 'text-lime-400'
    },
    { 
      label: 'Sensores de Enchimento', 
      to: '/administracao/sensores-enchimento',
      icon: <Gauge className="h-8 w-8" />,
      bgColor: 'bg-sky-500/20',
      iconColor: 'text-sky-400'
    },
    { 
      label: 'Utilizadores Finais', 
      to: '/administracao/utilizadores-finais',
      icon: <Users className="h-8 w-8" />,
      bgColor: 'bg-fuchsia-500/20',
      iconColor: 'text-fuchsia-400'
    },
                    {
                  label: 'Estado chaves RFID',
                  to: '/administracao/estado-chaves-rfid',
                  icon: <Key className="h-8 w-8" />,
                  bgColor: 'bg-orange-500/20',
                  iconColor: 'text-orange-400'
                },
                {
                  label: 'RGPDs',
                  to: '/administracao/rgpd-list',
                  icon: <ThumbsUp className="h-8 w-8" />,
                  bgColor: 'bg-indigo-500/20',
                  iconColor: 'text-indigo-400'
                },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="text-left">
        <h1 className="text-xl font-bold text-white">Administração</h1>
        <p className="text-gray-300 mt-1">Escolha uma área</p>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {links.map((item) => (
          <Card
            key={item.to}
            className="bg-white/10 backdrop-blur-lg border-0 cursor-pointer hover:bg-white/20 transition-all duration-200"
            onClick={() => navigate(item.to)}
          >
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center hover:scale-110 transition-transform flex-shrink-0`}>
                  <div className={item.iconColor}>
                    {item.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="dashboard-card-title text-lg font-bold text-white mb-1">{item.label}</h3>
                  <p className="text-gray-300 text-sm">Abrir {item.label.toLowerCase()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdministracaoHome;


