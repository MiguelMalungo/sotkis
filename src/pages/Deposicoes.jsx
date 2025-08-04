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
  Package,
  AlertTriangle,
  CheckCircle,
  XCircle,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  Activity,
  Thermometer,
  Scale,
  Gauge,
  HelpCircle,
  AlertCircle
} from 'lucide-react';

// Mock deposit data
const mockDeposits = [
  {
    id: "DEP001",
    location: "Lisboa - Parque das Nações",
    type: "Resíduos Sólidos Urbanos",
    weight: 1250.5,
    volume: 8.5,
    status: "completed",
    date: "2025-01-14",
    time: "14:30",
    route: "Rota Lisboa Norte",
    operator: "João Silva",
    temperature: 18.5,
    humidity: 65,
    notes: "Depósito normal, sem incidentes"
  },
  {
    id: "DEP002", 
    location: "Porto - Matosinhos",
    type: "Resíduos Orgânicos",
    weight: 890.2,
    volume: 6.2,
    status: "in_progress",
    date: "2025-01-14",
    time: "15:45",
    route: "Rota Porto Sul",
    operator: "Maria Santos",
    temperature: 22.1,
    humidity: 58,
    notes: "Em processo de descarga"
  },
  {
    id: "DEP003",
    location: "Faro - Marina",
    type: "Resíduos Sólidos Urbanos", 
    weight: 2100.8,
    volume: 12.8,
    status: "scheduled",
    date: "2025-01-14",
    time: "16:20",
    route: "Rota Algarve",
    operator: "Pedro Costa",
    temperature: 24.3,
    humidity: 72,
    notes: "Agendado para hoje"
  },
  {
    id: "DEP004",
    location: "Coimbra - Baixa",
    type: "Resíduos Recicláveis",
    weight: 750.3,
    volume: 4.1,
    status: "completed",
    date: "2025-01-14",
    time: "13:15",
    route: "Rota Centro",
    operator: "Ana Oliveira",
    temperature: 19.8,
    humidity: 61,
    notes: "Reciclagem processada com sucesso"
  },
  {
    id: "DEP005",
    location: "Braga - Centro Histórico",
    type: "Resíduos Sólidos Urbanos",
    weight: 1680.7,
    volume: 9.3,
    status: "error",
    date: "2025-01-14",
    time: "12:30",
    route: "Rota Braga",
    operator: "Carlos Ferreira",
    temperature: 20.5,
    humidity: 68,
    notes: "Erro no sistema de pesagem"
  },
  {
    id: "DEP006",
    location: "Aveiro - Ria",
    type: "Resíduos Orgânicos",
    weight: 950.1,
    volume: 5.8,
    status: "completed",
    date: "2025-01-14",
    time: "11:45",
    route: "Rota Aveiro",
    operator: "Sofia Martins",
    temperature: 21.2,
    humidity: 70,
    notes: "Depósito concluído sem problemas"
  }
];

const Deposicoes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedRoute, setSelectedRoute] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter options
  const wasteTypes = [
    { value: "all", label: "Todos os Tipos" },
    { value: "Resíduos Sólidos Urbanos", label: "Resíduos Sólidos Urbanos" },
    { value: "Resíduos Orgânicos", label: "Resíduos Orgânicos" },
    { value: "Resíduos Recicláveis", label: "Resíduos Recicláveis" },
    { value: "Resíduos Perigosos", label: "Resíduos Perigosos" }
  ];

  const statuses = [
    { value: "all", label: "Todos os Status" },
    { value: "completed", label: "Concluído" },
    { value: "in_progress", label: "Em Progresso" },
    { value: "scheduled", label: "Agendado" },
    { value: "error", label: "Erro" }
  ];

  const routes = [
    { value: "all", label: "Todas as Rotas" },
    { value: "Rota Lisboa Norte", label: "Rota Lisboa Norte" },
    { value: "Rota Porto Sul", label: "Rota Porto Sul" },
    { value: "Rota Algarve", label: "Rota Algarve" },
    { value: "Rota Centro", label: "Rota Centro" },
    { value: "Rota Braga", label: "Rota Braga" },
    { value: "Rota Aveiro", label: "Rota Aveiro" }
  ];

  // Filter deposits
  const filteredDeposits = mockDeposits.filter(deposit => {
    const matchesSearch = deposit.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         deposit.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         deposit.operator.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || deposit.type === selectedType;
    const matchesStatus = selectedStatus === 'all' || deposit.status === selectedStatus;
    const matchesRoute = selectedRoute === 'all' || deposit.route === selectedRoute;

    return matchesSearch && matchesType && matchesStatus && matchesRoute;
  });

  // Pagination
  const totalPages = Math.ceil(filteredDeposits.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedDeposits = filteredDeposits.slice(startIndex, startIndex + itemsPerPage);

  // Status colors and icons
  const getStatusInfo = (status) => {
    switch (status) {
      case 'completed':
        return { color: 'text-green-500', icon: CheckCircle, label: 'Concluído', bg: 'bg-green-500/10' };
      case 'in_progress':
        return { color: 'text-sotkis-green', icon: Clock, label: 'Em Progresso', bg: 'bg-sotkis-green/10' };
      case 'scheduled':
        return { color: 'text-yellow-500', icon: Calendar, label: 'Agendado', bg: 'bg-yellow-500/10' };
      case 'error':
        return { color: 'text-red-500', icon: AlertTriangle, label: 'Erro', bg: 'bg-red-500/10' };
      default:
        return { color: 'text-gray-500', icon: Clock, label: 'Desconhecido', bg: 'bg-gray-500/10' };
    }
  };

  // Calculate statistics
  const totalWeight = mockDeposits.reduce((sum, deposit) => sum + deposit.weight, 0);
  const totalVolume = mockDeposits.reduce((sum, deposit) => sum + deposit.volume, 0);
  const completedDeposits = mockDeposits.filter(d => d.status === 'completed').length;
  const averageTemperature = mockDeposits.reduce((sum, deposit) => sum + deposit.temperature, 0) / mockDeposits.length;

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Deposições</h1>
          <p className="text-gray-300 mt-1">Gestão e monitorização de depósitos de resíduos</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="text-white border-white/20">
            <Download className="w-4 h-4 mr-2" />
            Exportar Relatório
          </Button>
          <Button className="bg-sotkis-green hover:bg-sotkis-green/90">
            <Plus className="w-4 h-4 mr-2" />
            Novo Depósito
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">Total Peso (kg)</p>
                <p className="text-2xl font-bold text-white">{totalWeight.toFixed(1)}</p>
                <p className="text-xs text-green-400 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +12.5% vs ontem
                </p>
              </div>
              <div className="p-3 bg-white/10 rounded-lg">
                <Scale className="h-6 w-6 text-sotkis-green" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">Volume Total (m³)</p>
                <p className="text-2xl font-bold text-white">{totalVolume.toFixed(1)}</p>
                <p className="text-xs text-sotkis-green flex items-center mt-1">
                  <BarChart3 className="w-3 h-3 mr-1" />
                  Última atualização: há 2 horas
                </p>
                <Package className="h-6 w-6 text-sotkis-green" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">Depósitos Concluídos</p>
                <p className="text-2xl font-bold text-white">{completedDeposits}/{mockDeposits.length}</p>
                <p className="text-xs text-green-400 flex items-center mt-1">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {((completedDeposits / mockDeposits.length) * 100).toFixed(1)}% taxa de sucesso
                </p>
              </div>
              <div className="p-3 bg-white/10 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">Temperatura Média</p>
                <p className="text-2xl font-bold text-white">{averageTemperature.toFixed(1)}°C</p>
                <p className="text-xs text-orange-400 flex items-center mt-1">
                  <Thermometer className="w-3 h-3 mr-1" />
                  Dentro do normal
                </p>
              </div>
              <div className="p-3 bg-white/10 rounded-lg">
                <Thermometer className="h-6 w-6 text-orange-500" />
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
                placeholder="Procurar depósitos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white/90 placeholder-gray-400"
              />
            </div>

            {/* Type Filter */}
            <Select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-white/10 border-white/20 text-white/90"
            >
              {wasteTypes.map((type) => (
                <SelectOption key={type.value} value={type.value}>
                  {type.label}
                </SelectOption>
              ))}
            </Select>

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

            {/* Route Filter */}
            <Select
              value={selectedRoute}
              onChange={(e) => setSelectedRoute(e.target.value)}
              className="bg-white/10 border-white/20 text-white/90"
            >
              {routes.map((route) => (
                <SelectOption key={route.value} value={route.value}>
                  {route.label}
                </SelectOption>
              ))}
            </Select>

            {/* Clear Filters */}
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm('');
                setSelectedType('all');
                setSelectedStatus('all');
                setSelectedRoute('all');
              }}
              className="text-white border-white/20 hover:bg-white/10"
            >
              <Filter className="w-4 h-4 mr-2" />
              Limpar Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Deposits Table */}
      <Card className="bg-white/10 backdrop-blur-lg border-0">
        <CardHeader>
          <CardTitle className="text-white">
            Depósitos ({filteredDeposits.length} resultados)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-white/10">
                <TableHead className="text-white">ID</TableHead>
                <TableHead className="text-white">Localização</TableHead>
                <TableHead className="text-white">Tipo</TableHead>
                <TableHead className="text-white">Peso (kg)</TableHead>
                <TableHead className="text-white">Volume (m³)</TableHead>
                <TableHead className="text-white">Status</TableHead>
                <TableHead className="text-white">Data/Hora</TableHead>
                <TableHead className="text-white">Rota</TableHead>
                <TableHead className="text-white">Operador</TableHead>
                <TableHead className="text-white">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedDeposits.map((deposit) => {
                const statusInfo = getStatusInfo(deposit.status);
                const StatusIcon = statusInfo.icon;
                
                return (
                  <TableRow key={deposit.id} className="border-white/10 hover:bg-white/5">
                    <TableCell>
                      <span className="font-mono text-white font-medium">{deposit.id}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-white">{deposit.location}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-gray-300">{deposit.type}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-white font-medium">{deposit.weight.toFixed(1)}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-white font-medium">{deposit.volume.toFixed(1)}</span>
                    </TableCell>
                    <TableCell>
                      <div className={`flex items-center space-x-2 px-2 py-1 rounded-full ${statusInfo.bg}`}>
                        <StatusIcon className={`w-4 h-4 ${statusInfo.color}`} />
                        <span className={`text-sm ${statusInfo.color}`}>{statusInfo.label}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm text-gray-300">
                        {new Date(deposit.date).toLocaleDateString('pt-BR')}
                        <br />
                        <span className="text-xs text-gray-400">{deposit.time}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Truck className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-300">{deposit.route}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-white">{deposit.operator}</span>
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
            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-gray-300">
                Mostrando {startIndex + 1} a {Math.min(startIndex + itemsPerPage, filteredDeposits.length)} de {filteredDeposits.length} depósitos
              </div>
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
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Deposicoes; 