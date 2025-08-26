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
  RefreshCw,
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
  Clock,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Play,
  Pause,
  StopCircle,
  Cpu,
  HardDrive,
  Wifi,
  Database,
  Server,
  Monitor,
  Smartphone,
  Tablet,
  Globe,
  MapPin,
  Calendar,
  Settings,
  HelpCircle,
  AlertCircle
} from 'lucide-react';

// Mock performance data
const mockPerformanceData = [
  {
    id: "PERF001",
    metric: "Taxa de Recolha",
    value: 94.2,
    unit: "%",
    status: "excellent",
    trend: "up",
    change: "+2.1%",
    target: 90,
    zone: "Lisboa",
    lastUpdate: "2025-01-14 15:30",
    description: "Percentagem de resíduos recolhidos com sucesso"
  },
  {
    id: "PERF002",
    metric: "Eficiência de Rotas",
    value: 87.5,
    unit: "%",
    status: "good",
    trend: "up",
    change: "+1.8%",
    target: 85,
    zone: "Porto",
    lastUpdate: "2025-01-14 15:25",
    description: "Otimização das rotas de recolha"
  },
  {
    id: "PERF003",
    metric: "Tempo Médio de Resposta",
    value: 12.3,
    unit: "min",
    status: "warning",
    trend: "down",
    change: "-0.5%",
    target: 10,
    zone: "Faro",
    lastUpdate: "2025-01-14 15:20",
    description: "Tempo médio de resposta a incidentes"
  },
  {
    id: "PERF004",
    metric: "Satisfação do Cliente",
    value: 91.8,
    unit: "%",
    status: "excellent",
    trend: "up",
    change: "+3.2%",
    target: 88,
    zone: "Coimbra",
    lastUpdate: "2025-01-14 15:15",
    description: "Avaliação média dos clientes"
  },
  {
    id: "PERF005",
    metric: "Consumo de Combustível",
    value: 42.7,
    unit: "L/100km",
    status: "good",
    trend: "down",
    change: "-1.2%",
    target: 45,
    zone: "Braga",
    lastUpdate: "2025-01-14 15:10",
    description: "Consumo médio de combustível por 100km"
  },
  {
    id: "PERF006",
    metric: "Taxa de Reciclagem",
    value: 78.9,
    unit: "%",
    status: "warning",
    trend: "up",
    change: "+0.8%",
    target: 80,
    zone: "Aveiro",
    lastUpdate: "2025-01-14 15:05",
    description: "Percentagem de resíduos reciclados"
  }
];

// Mock system metrics
const mockSystemMetrics = [
  {
    name: "CPU Usage",
    value: 68,
    status: "normal",
    icon: Cpu,
    color: "text-blue-500"
  },
  {
    name: "Memory Usage",
    value: 72,
    status: "warning",
    icon: HardDrive,
    color: "text-orange-500"
  },
  {
    name: "Network",
    value: 45,
    status: "excellent",
    icon: Wifi,
    color: "text-green-500"
  },
  {
    name: "Database",
    value: 89,
    status: "critical",
    icon: Database,
    color: "text-red-500"
  }
];

// Mock alerts
const mockAlerts = [
  {
    id: 1,
    type: "warning",
    message: "Alto consumo de memória no servidor principal",
    time: "2 min atrás",
    priority: "medium"
  },
  {
    id: 2,
    type: "error",
    message: "Falha na conexão com o banco de dados",
    time: "5 min atrás",
    priority: "high"
  },
  {
    id: 3,
    type: "info",
    message: "Atualização do sistema concluída",
    time: "15 min atrás",
    priority: "low"
  }
];

const Performance = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedZone, setSelectedZone] = useState('all');
  const [timeRange, setTimeRange] = useState('today');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter options
  const statuses = [
    { value: "all", label: "Todos os Status" },
    { value: "excellent", label: "Excelente" },
    { value: "good", label: "Bom" },
    { value: "warning", label: "Atenção" },
    { value: "critical", label: "Crítico" }
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

  const timeRanges = [
    { value: "today", label: "Hoje" },
    { value: "week", label: "Esta Semana" },
    { value: "month", label: "Este Mês" },
    { value: "quarter", label: "Este Trimestre" }
  ];

  // Filter performance data
  const filteredPerformanceData = mockPerformanceData.filter(item => {
    const matchesSearch = item.metric.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.zone.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || item.status === selectedStatus;
    const matchesZone = selectedZone === 'all' || item.zone === selectedZone;

    return matchesSearch && matchesStatus && matchesZone;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPerformanceData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredPerformanceData.slice(startIndex, startIndex + itemsPerPage);

  // Status colors and icons
  const getStatusInfo = (status) => {
    switch (status) {
      case 'excellent':
        return { color: 'text-green-500', icon: CheckCircle, label: 'Excelente', bg: 'bg-green-500/10' };
      case 'good':
        return { color: 'text-sotkis-green', icon: CheckCircle, label: 'Bom', bg: 'bg-sotkis-green/10' };
      case 'average':
        return { color: 'text-yellow-500', icon: AlertCircle, label: 'Médio', bg: 'bg-yellow-500/10' };
      case 'poor':
        return { color: 'text-red-500', icon: XCircle, label: 'Mau', bg: 'bg-red-500/10' };
      default:
        return { color: 'text-gray-500', icon: HelpCircle, label: 'Desconhecido', bg: 'bg-gray-500/10' };
    }
  };

  // System status colors
  const getSystemStatusColor = (value) => {
    if (value >= 90) return 'text-red-500';
    if (value >= 75) return 'text-yellow-500';
    if (value >= 50) return 'text-blue-500';
    return 'text-green-500';
  };

  // Calculate overall performance
  const overallPerformance = mockPerformanceData.reduce((sum, item) => sum + item.value, 0) / mockPerformanceData.length;
  const excellentMetrics = mockPerformanceData.filter(item => item.status === 'excellent').length;
  const criticalMetrics = mockPerformanceData.filter(item => item.status === 'critical').length;

  const getPerformanceColor = (value) => {
    if (value >= 80) return 'text-green-500';
    if (value >= 60) return 'text-sotkis-green';
    if (value >= 40) return 'text-yellow-500';
    if (value >= 20) return 'text-orange-500';
    return 'text-red-500';
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header - AT THE VERY TOP */}
      <div className="page-header text-right">
        <h1 className="text-xl font-bold text-white">Performance</h1>
        <p className="text-gray-300 mt-1">Monitorização de performance do sistema</p>
      </div>

      {/* Overall Performance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">Performance Geral</p>
                <p className="text-xl font-bold text-white">{overallPerformance.toFixed(1)}%</p>
                <p className="text-xs text-green-400 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +1.8% vs ontem
                </p>
              </div>
              <div className="p-3 bg-white/10 rounded-lg">
                <Gauge className="h-6 w-6 text-sotkis-green" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">Métricas Excelentes</p>
                <p className="text-xl font-bold text-white">{excellentMetrics}</p>
                <p className="text-xs text-green-400 flex items-center mt-1">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {((excellentMetrics / mockPerformanceData.length) * 100).toFixed(1)}% do total
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
                <p className="text-sm text-gray-300">Alertas Críticos</p>
                <p className="text-xl font-bold text-white">{criticalMetrics}</p>
                <p className="text-xs text-red-400 flex items-center mt-1">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  Requer atenção imediata
                </p>
              </div>
              <div className="p-3 bg-white/10 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-red-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">Uptime Sistema</p>
                <p className="text-xl font-bold text-white">99.8%</p>
                <p className="text-xs text-green-400 flex items-center mt-1">
                  <Server className="w-3 h-3 mr-1" />
                  Últimos 30 dias
                </p>
              </div>
              <div className="p-3 bg-white/10 rounded-lg">
                <Server className="h-6 w-6 text-sotkis-green" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* System Health */}
        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardHeader>
            <CardTitle className="text-white">Estado do Sistema</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockSystemMetrics.map((metric) => {
                const MetricIcon = metric.icon;
                return (
                  <div key={metric.name} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <MetricIcon className={`w-5 h-5 ${metric.color}`} />
                      <span className="text-white">{metric.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${getSystemStatusColor(metric.value).replace('text-', 'bg-')}`}
                          style={{ width: `${metric.value}%` }}
                        ></div>
                      </div>
                      <span className={`text-sm font-medium ${getSystemStatusColor(metric.value)}`}>
                        {metric.value}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Recent Alerts */}
        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardHeader>
            <CardTitle className="text-white">Alertas Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockAlerts.map((alert) => {
                const getAlertIcon = (type) => {
                  switch (type) {
                    case 'error': return XCircle;
                    case 'warning': return AlertTriangle;
                    case 'info': return CheckCircle;
                    default: return Clock;
                  }
                };
                const getAlertColor = (type) => {
                  switch (type) {
                    case 'error': return 'text-red-500';
                    case 'warning': return 'text-yellow-500';
                    case 'info': return 'text-sotkis-green';
                    case 'success': return 'text-green-500';
                    default: return 'text-gray-500';
                  }
                };
                const AlertIcon = getAlertIcon(alert.type);
                
                return (
                  <div key={alert.id} className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
                    <AlertIcon className={`w-4 h-4 mt-0.5 ${getAlertColor(alert.type)}`} />
                    <div className="flex-1">
                      <p className="text-white text-sm">{alert.message}</p>
                      <p className="text-gray-400 text-xs">{alert.time}</p>
                    </div>
                  </div>
                );
              })}
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
                placeholder="Procurar métricas..."
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

            {/* Time Range Filter */}
            <Select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-white/10 border-white/20 text-white/90"
            >
              {timeRanges.map((range) => (
                <SelectOption key={range.value} value={range.value}>
                  {range.label}
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
                setTimeRange('today');
              }}
              className="text-white border-white/20 hover:bg-white/10"
            >
              <Filter className="w-4 h-4 mr-2" />
              Limpar Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Performance Metrics Table */}
      <Card className="bg-white/10 backdrop-blur-lg border-0">
        <CardHeader>
          <CardTitle className="text-white">
            Métricas de Performance ({filteredPerformanceData.length} resultados)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-white/10">
                <TableHead className="text-white">Métrica</TableHead>
                <TableHead className="text-white">Valor</TableHead>
                <TableHead className="text-white">Status</TableHead>
                <TableHead className="text-white">Tendência</TableHead>
                <TableHead className="text-white">Zona</TableHead>
                <TableHead className="text-white">Meta</TableHead>
                <TableHead className="text-white">Última Atualização</TableHead>
                <TableHead className="text-white">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.map((item) => {
                const statusInfo = getStatusInfo(item.status);
                const StatusIcon = statusInfo.icon;
                const TrendIcon = item.trend === 'up' ? TrendingUp : TrendingDown;
                const trendColor = item.trend === 'up' ? 'text-green-500' : 'text-red-500';
                
                return (
                  <TableRow key={item.id} className="border-white/10 hover:bg-white/5">
                    <TableCell>
                      <div>
                        <span className="text-white font-medium">{item.metric}</span>
                        <br />
                        <span className="text-xs text-gray-400">{item.description}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-xl font-bold text-white">
                        {item.value}{item.unit}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className={`flex items-center space-x-2 px-2 py-1 rounded-full ${statusInfo.bg}`}>
                        <StatusIcon className={`w-4 h-4 ${statusInfo.color}`} />
                        <span className={`text-sm ${statusInfo.color}`}>{statusInfo.label}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <TrendIcon className={`w-4 h-4 ${trendColor}`} />
                        <span className={`text-sm ${trendColor}`}>{item.change}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-white">{item.zone}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-gray-300">{item.target}{item.unit}</span>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm text-gray-300">
                        {new Date(item.lastUpdate).toLocaleDateString('pt-BR')}
                        <br />
                        <span className="text-xs text-gray-400">
                          {new Date(item.lastUpdate).toLocaleTimeString('pt-BR', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                          <Activity className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                          <BarChart3 className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                          <Settings className="w-4 h-4" />
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
                  Mostrando {startIndex + 1} a {Math.min(startIndex + itemsPerPage, filteredPerformanceData.length)} de {filteredPerformanceData.length} métricas
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

export default Performance; 