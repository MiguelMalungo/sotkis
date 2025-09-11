import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectOption } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  Search, 
  Filter, 
  Download, 
  Plus, 
  Eye, 
  Edit, 
  Trash2,
  MapPin,
  Calendar,
  Clock,
  Truck,
  Route,
  Navigation,
  Play,
  Pause,
  CheckCircle,
  AlertTriangle,
  XCircle,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  Activity,
  Thermometer,
  Scale,
  Gauge,
  Zap,
  Fuel,
  Users,
  Target,
  Timer,
  Wrench,
  HelpCircle
} from 'lucide-react';

// Mock route data
const mockRoutes = [
  {
    id: "ROTA001",
    name: "Rota Lisboa Norte",
    driver: "João Silva",
    vehicle: "Camião 001 - Mercedes Actros",
    status: "active",
    startTime: "08:00",
    endTime: "17:30",
    totalDistance: 85.5,
    totalStops: 12,
    completedStops: 8,
    fuelConsumption: 45.2,
    efficiency: 92.5,
    currentLocation: "Parque das Nações",
    nextStop: "Alfama",
    estimatedArrival: "15:45",
    priority: "high",
    zone: "Lisboa"
  },
  {
    id: "ROTA002",
    name: "Rota Porto Sul",
    driver: "Maria Santos",
    vehicle: "Camião 002 - Volvo FH",
    status: "active",
    startTime: "07:30",
    endTime: "16:45",
    totalDistance: 72.3,
    totalStops: 10,
    completedStops: 6,
    fuelConsumption: 38.7,
    efficiency: 88.2,
    currentLocation: "Matosinhos",
    nextStop: "Foz",
    estimatedArrival: "16:20",
    priority: "medium",
    zone: "Porto"
  },
  {
    id: "ROTA003",
    name: "Rota Algarve",
    driver: "Pedro Costa",
    vehicle: "Camião 003 - Scania R",
    status: "paused",
    startTime: "08:15",
    endTime: "18:00",
    totalDistance: 120.8,
    totalStops: 15,
    completedStops: 9,
    fuelConsumption: 65.4,
    efficiency: 85.7,
    currentLocation: "Faro Marina",
    nextStop: "Albufeira",
    estimatedArrival: "17:30",
    priority: "low",
    zone: "Faro"
  },
  {
    id: "ROTA004",
    name: "Rota Centro",
    driver: "Ana Oliveira",
    vehicle: "Camião 004 - MAN TGX",
    status: "completed",
    startTime: "07:45",
    endTime: "16:15",
    totalDistance: 95.2,
    totalStops: 14,
    completedStops: 14,
    fuelConsumption: 52.1,
    efficiency: 96.8,
    currentLocation: "Coimbra",
    nextStop: "N/A",
    estimatedArrival: "16:15",
    priority: "medium",
    zone: "Coimbra"
  },
  {
    id: "ROTA005",
    name: "Rota Braga",
    driver: "Carlos Ferreira",
    vehicle: "Camião 005 - Iveco Stralis",
    status: "error",
    startTime: "08:30",
    endTime: "17:45",
    totalDistance: 68.7,
    totalStops: 11,
    completedStops: 3,
    fuelConsumption: 28.9,
    efficiency: 45.2,
    currentLocation: "Centro Histórico",
    nextStop: "Bom Jesus",
    estimatedArrival: "18:30",
    priority: "high",
    zone: "Braga"
  },
  {
    id: "ROTA006",
    name: "Rota Aveiro",
    driver: "Sofia Martins",
    vehicle: "Camião 006 - DAF XF",
    status: "scheduled",
    startTime: "09:00",
    endTime: "18:30",
    totalDistance: 78.9,
    totalStops: 13,
    completedStops: 0,
    fuelConsumption: 0,
    efficiency: 0,
    currentLocation: "Base",
    nextStop: "Ria de Aveiro",
    estimatedArrival: "09:00",
    priority: "medium",
    zone: "Aveiro"
  }
];

const GestaoRotas = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedZone, setSelectedZone] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter options
  const statuses = [
    { value: "all", label: "Todos os Status" },
    { value: "active", label: "Ativo" },
    { value: "paused", label: "Pausado" },
    { value: "completed", label: "Concluído" },
    { value: "scheduled", label: "Agendado" },
    { value: "error", label: "Erro" }
  ];

  const zones = [
    { value: "all", label: "Todas as Zonas" },
    { value: "Lisboa", label: "Lisboa" },
    { value: "Porto", label: "Porto" },
    { value: "Faro", label: "Faro" },
    { value: "Coimbra", label: "Coimbra" },
    { value: "Braga", label: "Braga" },
    { value: "Aveiro", label: "Aveiro" }
  ];

  const priorities = [
    { value: "all", label: "Todas as Prioridades" },
    { value: "high", label: "Alta" },
    { value: "medium", label: "Média" },
    { value: "low", label: "Baixa" }
  ];

  // Filter routes
  const filteredRoutes = mockRoutes.filter(route => {
    const matchesSearch = route.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         route.driver.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || route.status === selectedStatus;
    const matchesZone = selectedZone === 'all' || route.zone === selectedZone;
    const matchesPriority = selectedPriority === 'all' || route.priority === selectedPriority;

    return matchesSearch && matchesStatus && matchesZone && matchesPriority;
  });

  // Pagination
  const totalPages = Math.ceil(filteredRoutes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedRoutes = filteredRoutes.slice(startIndex, startIndex + itemsPerPage);

  // Status colors and icons
  const getStatusInfo = (status) => {
    switch (status) {
      case 'active':
        return { color: 'text-green-500', icon: CheckCircle, label: 'Ativa', bg: 'bg-green-500/10' };
      case 'completed':
        return { color: 'text-sotkis-green', icon: CheckCircle, label: 'Concluído', bg: 'bg-sotkis-green/10' };
      case 'scheduled':
        return { color: 'text-sotkis-green', icon: Calendar, label: 'Agendado', bg: 'bg-sotkis-green/10' };
      case 'maintenance':
        return { color: 'text-yellow-500', icon: Wrench, label: 'Manutenção', bg: 'bg-yellow-500/10' };
      case 'cancelled':
        return { color: 'text-red-500', icon: XCircle, label: 'Cancelada', bg: 'bg-red-500/10' };
      default:
        return { color: 'text-gray-500', icon: HelpCircle, label: 'Desconhecido', bg: 'bg-gray-500/10' };
    }
  };

  // Priority colors
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'text-red-500';
      case 'medium':
        return 'text-yellow-500';
      case 'low':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  // Calculate statistics
  const activeRoutes = mockRoutes.filter(r => r.status === 'active').length;
  const totalDistance = mockRoutes.reduce((sum, route) => sum + route.totalDistance, 0);
  const totalFuelConsumption = mockRoutes.reduce((sum, route) => sum + route.fuelConsumption, 0);
  const averageEfficiency = mockRoutes.reduce((sum, route) => sum + route.efficiency, 0) / mockRoutes.length;

  return (
    <div className="p-6 space-y-6">
      {/* Page Header - AT THE VERY TOP */}
      <div className="page-header text-right">
        <h1 className="text-xl font-bold text-white">Gestão de Rotas</h1>
        <p className="text-gray-300 mt-1">Gestão e monitorização de rotas do sistema</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">Rotas Ativas</p>
                <p className="text-xl font-bold text-white">{activeRoutes}</p>
                <p className="text-xs text-sotkis-green flex items-center mt-1">
                  <BarChart3 className="w-3 h-3 mr-1" />
                  +12.5% vs semana anterior
                </p>
              </div>
              <div className="p-3 bg-white/10 rounded-lg">
                <Route className="h-6 w-6 text-sotkis-green" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">Distância Total (km)</p>
                <p className="text-xl font-bold text-white">{totalDistance.toFixed(1)}</p>
                <p className="text-xs text-sotkis-green flex items-center mt-1">
                  <Navigation className="w-3 h-3 mr-1" />
                  +15.2% vs ontem
                </p>
              </div>
              <div className="p-3 bg-white/10 rounded-lg">
                <Navigation className="h-6 w-6 text-sotkis-green" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">Consumo Combustível (L)</p>
                <p className="text-xl font-bold text-white">{totalFuelConsumption.toFixed(1)}</p>
                <p className="text-xs text-orange-400 flex items-center mt-1">
                  <Fuel className="w-3 h-3 mr-1" />
                  -8.5% vs ontem
                </p>
              </div>
              <div className="p-3 bg-white/10 rounded-lg">
                <Fuel className="h-6 w-6 text-orange-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">Eficiência Média</p>
                <p className="text-xl font-bold text-white">{averageEfficiency.toFixed(1)}%</p>
                <p className="text-xs text-green-400 flex items-center mt-1">
                  <Target className="w-3 h-3 mr-1" />
                  +2.1% vs ontem
                </p>
              </div>
              <div className="p-3 bg-white/10 rounded-lg">
                <Target className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="bg-white/10 backdrop-blur-lg border-0">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Procurar rotas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white/90 placeholder-gray-400"
              />
            </div>

            {/* Status Filter */}
            <Select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-white/10 border-white/20 text-white/90"
            >
              {statuses.map((status) => (
                <SelectOption key={status.value} value={status.value}>
                  {status.label}
                </SelectOption>
              ))}
            </Select>

            {/* Zone Filter */}
            <Select
              value={selectedZone}
              onChange={(e) => setSelectedZone(e.target.value)}
              className="bg-white/10 border-white/20 text-white/90"
            >
              {zones.map((zone) => (
                <SelectOption key={zone.value} value={zone.value}>
                  {zone.label}
                </SelectOption>
              ))}
            </Select>

            {/* Priority Filter */}
            <Select
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
              className="bg-white/10 border-white/20 text-white/90"
            >
              {priorities.map((priority) => (
                <SelectOption key={priority.value} value={priority.value}>
                  {priority.label}
                </SelectOption>
              ))}
            </Select>

            {/* Clear Filters */}
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm('');
                setSelectedStatus('all');
                setSelectedZone('all');
                setSelectedPriority('all');
              }}
              className="text-white border-white/20 hover:bg-white/10"
            >
              <Filter className="w-4 h-4 mr-2" />
              Limpar Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Routes Table */}
      <Card className="bg-white/10 backdrop-blur-lg border-0">
        <CardHeader>
          <CardTitle className="text-white">
            Rotas ({filteredRoutes.length} resultados)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-white/10">
                <TableHead className="text-white">ID</TableHead>
                <TableHead className="text-white">Nome da Rota</TableHead>
                <TableHead className="text-white">Condutor</TableHead>
                <TableHead className="text-white">Veículo</TableHead>
                <TableHead className="text-white">Status</TableHead>
                <TableHead className="text-white">Progresso</TableHead>
                <TableHead className="text-white">Localização Atual</TableHead>
                <TableHead className="text-white">Próxima Paragem</TableHead>
                <TableHead className="text-white">Eficiência</TableHead>
                <TableHead className="text-white">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedRoutes.map((route) => {
                const statusInfo = getStatusInfo(route.status);
                const StatusIcon = statusInfo.icon;
                const progressPercentage = (route.completedStops / route.totalStops) * 100;
                
                return (
                  <TableRow key={route.id} className="border-white/10 hover:bg-sotkis-green/20 hover:border-sotkis-green/30 transition-colors duration-200">
                    <TableCell>
                      <span className="font-mono text-white font-medium">{route.id}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Route className="w-4 h-4 text-sotkis-green" />
                        <div>
                          <span className="text-white font-medium">{route.name}</span>
                          <br />
                          <span className="text-xs text-gray-400">{route.zone}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-white">{route.driver}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Truck className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300 text-sm">{route.vehicle}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className={`flex items-center space-x-2 px-2 py-1 rounded-full ${statusInfo.bg}`}>
                        <StatusIcon className={`w-4 h-4 ${statusInfo.color}`} />
                        <span className={`text-sm ${statusInfo.color}`}>{statusInfo.label}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-300">{route.completedStops}/{route.totalStops}</span>
                          <span className="text-gray-400">{progressPercentage.toFixed(0)}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-sotkis-green h-2 rounded-full transition-all duration-300"
                            style={{ width: `${progressPercentage}%` }}
                          ></div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300 text-sm">{route.currentLocation}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <Target className="w-4 h-4 text-gray-400" />
                          <span className="text-white text-sm">{route.nextStop}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Timer className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-400">{route.estimatedArrival}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Gauge className="w-4 h-4 text-gray-400" />
                        <span className={`font-medium ${route.efficiency > 90 ? 'text-green-500' : route.efficiency > 70 ? 'text-yellow-500' : 'text-red-500'}`}>
                          {route.efficiency.toFixed(1)}%
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                          <Activity className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="space-y-4 mt-6">
              {/* Pagination info text */}
              <div className="text-center">
                <div className="text-sm text-gray-300">
                  Mostrando {startIndex + 1} a {Math.min(startIndex + itemsPerPage, filteredRoutes.length)} de {filteredRoutes.length} rotas
                </div>
              </div>
              {/* Pagination buttons */}
              <div className="flex justify-center">
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="text-white border-white/20"
                  >
                    Anterior
                  </Button>
                  <div className="flex space-x-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                        className={currentPage === page ? "bg-sotkis-green" : "text-white border-white/20"}
                      >
                        {page}
                      </Button>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="text-white border-white/20"
                  >
                    Próximo
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default GestaoRotas;