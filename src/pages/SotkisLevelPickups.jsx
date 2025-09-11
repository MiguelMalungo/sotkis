import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Calendar, FileText, Download, Printer, Truck, Clock, MapPin } from 'lucide-react';
import SubmenuBar from '../components/ui/SubmenuBar';

const SotkisLevelPickups = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('');

  // Mock data for departments
  const departments = [
    'Faro-PT 999990004',
    'Lisboa-PT 999990006',
    'Porto-PT 999990008',
    'Coimbra-PT 999990010',
    'Braga-PT 999990012'
  ];

  // Mock pickup data
  const mockPickups = [
    {
      id: 'P-001',
      department: 'Lisboa-PT 999990006',
      location: 'Centro Comercial Colombo',
      scheduledTime: '2024-01-15 09:00',
      status: 'Agendado',
      containerCount: 12,
      priority: 'Normal'
    },
    {
      id: 'P-002',
      department: 'Porto-PT 999990008',
      location: 'Mercado do Bolhão',
      scheduledTime: '2024-01-15 10:30',
      status: 'Em Curso',
      containerCount: 8,
      priority: 'Urgente'
    },
    {
      id: 'P-003',
      department: 'Coimbra-PT 999990010',
      location: 'Universidade de Coimbra',
      scheduledTime: '2024-01-15 14:00',
      status: 'Concluído',
      containerCount: 15,
      priority: 'Normal'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Agendado':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Em Curso':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Concluído':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Urgente':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'Normal':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const submenuLinks = [
    { label: 'Alertas', to: '/sotkis-level/alerts' },
    { label: 'Recolhas', to: '/sotkis-level/pickups' },
    { label: 'Localizações e Contentores', to: '/sotkis-level/locations-containers' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header - AT THE VERY TOP */}
      <div className="page-header text-right">
        <h1 className="text-xl font-bold text-white">Recolhas</h1>
        <p className="text-gray-300 mt-1">Gestão de recolhas do Sotkis Level</p>
      </div>

      {/* SubmenuBar */}
      <SubmenuBar items={submenuLinks} />

      {/* Department Filter */}
      <Card className="bg-white/20 backdrop-blur-lg border-0">
        <CardContent className="p-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Departamento:</label>
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger className="bg-white border-white text-black">
                <SelectValue placeholder="Selecione departamento" />
              </SelectTrigger>
              <SelectContent>
                {departments.map((dept) => (
                  <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Pickups Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white/20 backdrop-blur-lg border-0">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Calendar className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Agendadas Hoje</p>
                <p className="text-2xl font-bold text-white">8</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/20 backdrop-blur-lg border-0">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                <Truck className="h-6 w-6 text-orange-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Em Curso</p>
                <p className="text-2xl font-bold text-white">3</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/20 backdrop-blur-lg border-0">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Concluídas</p>
                <p className="text-2xl font-bold text-white">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pickups List */}
      <Card className="bg-white/20 backdrop-blur-lg border-0">
        <CardHeader>
          <CardTitle className="text-white">Recolhas Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockPickups.map((pickup) => (
              <div key={pickup.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-sotkis-green/20 rounded-full flex items-center justify-center">
                    <Truck className="h-5 w-5 text-sotkis-green" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{pickup.id}</h3>
                    <p className="text-gray-400 text-sm">{pickup.department}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <p className="text-white text-sm font-medium">{pickup.location}</p>
                    <p className="text-gray-400 text-xs">{pickup.scheduledTime}</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(pickup.status)}`}>
                      {pickup.status}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(pickup.priority)}`}>
                      {pickup.priority}
                    </span>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-white text-sm font-medium">{pickup.containerCount}</p>
                    <p className="text-gray-400 text-xs">Contentores</p>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="bg-sotkis-green/20 border-sotkis-green/30 text-sotkis-green hover:bg-sotkis-green/30">
                  Ver Detalhes
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="bg-white/20 backdrop-blur-lg border-0">
        <CardHeader>
          <CardTitle className="text-white">Ações Rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                <Calendar className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-white font-medium">Agendamento</h3>
              <p className="text-gray-400 text-sm">Programe recolhas futuras</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                <FileText className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-white font-medium">Relatórios</h3>
              <p className="text-gray-400 text-sm">Visualize histórico de recolhas</p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto">
                <Download className="h-6 w-6 text-yellow-400" />
              </div>
              <h3 className="text-white font-medium">Exportar</h3>
              <p className="text-gray-400 text-sm">Exporte dados para análise</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SotkisLevelPickups;