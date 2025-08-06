import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectOption } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TrendingUp, TrendingDown, Calendar, Filter, Download, BarChart3, ArrowLeft, Search, MapPin, Users, AlertTriangle, RefreshCw, Gift } from 'lucide-react';
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import { 
  kpiData, 
  depositsChartData, 
  containerData, 
  routeData, 
  maintenanceData, 
  rewardsData,
  departments,
  timePresets,
  kilometersData,
  planExecutedData,
  containersCollectedData,
  routeTimePresets
} from '@/data/mockData';

const OperacaoDashboard = () => {
  const [selectedTime, setSelectedTime] = useState('month');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [activeTab, setActiveTab] = useState('deposicoes');
  const [startDate, setStartDate] = useState('2025-07-21');
  const [endDate, setEndDate] = useState('2025-07-28');
  const [searchIsland, setSearchIsland] = useState('');

  // Mock data for islands
  const islandsData = [
    { name: 'Ilha do Norte', containers: 3 },
    { name: 'Ilha Azul', containers: 5 },
    { name: 'Ilha Verde', containers: 2 },
    { name: 'Ilha do Sul', containers: 7 },
    { name: 'Ilha das Flores', containers: 4 },
    { name: 'Ilha Central', containers: 6 },
    { name: 'Ilha Leste', containers: 3 },
    { name: 'Ilha Oeste', containers: 5 }
  ];

  // Mock data for top containers
  const topContainersData = [
    { id: '808D84', description: '5289/20/06 MotaVeiga Papel', deposits: 500 },
    { id: '808D94', description: '5290/20/06_MotaVeiga', deposits: 425 },
    { id: '808D11', description: '4279/20/12_MotaVeiga_Indif', deposits: 382 },
    { id: '808D8D', description: '3281/31/08_MotaVeiga_Emb', deposits: 325 },
    { id: '808D92', description: '5291/20/06_MotaVeiga_Plast', deposits: 298 }
  ];

  // Mock data for charts - using new chart colors
  const recyclingData = [
    { name: 'Reciclagem', value: 75, color: '#038703' },
    { name: 'Não Reciclagem', value: 25, color: '#4CB151' }
  ];

  const packingTypesData = [
    { name: 'Tipo A', value: 7.8, color: '#038703' },
    { name: 'Tipo B', value: 9.2, color: '#4CB151' },
    { name: 'Tipo C', value: 31.6, color: '#5EA65F' },
    { name: 'Tipo D', value: 51.3, color: '#568864' }
  ];

  const connectionTypeData = [
    { name: 'Tipo 1', value: 85, color: '#038703' },
    { name: 'Tipo 2', value: 15, color: '#4CB151' }
  ];

  const depositMethodData = [
    { name: 'Método A', value: 70, color: '#038703' },
    { name: 'Método B', value: 30, color: '#4CB151' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-500';
      case 'maintenance': return 'text-yellow-500';
      case 'full': return 'text-red-500';
      case 'inactive': return 'text-gray-500';
      default: return 'text-gray-500';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  // Prepare data for container status pie chart
  const containerStatusData = containerData.reduce((acc, container) => {
    const status = container.status;
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  const pieChartData = Object.entries(containerStatusData).map(([status, count]) => ({
    name: status,
    value: count
  }));

  const COLORS = ['#038703', '#4CB151', '#5EA65F', '#568864', '#20a91e'];

  // Mock data for deposições charts
  const depositosPorMesData = [
    { mes: 'Janeiro', indiferenciado: 55, papelCartao: 25, plasticoEmbalagens: 20 },
    { mes: 'Fevereiro', indiferenciado: 70, papelCartao: 40, plasticoEmbalagens: 55 },
    { mes: 'Março', indiferenciado: 45, papelCartao: 20, plasticoEmbalagens: 30 },
    { mes: 'Abril', indiferenciado: 20, papelCartao: 25, plasticoEmbalagens: 30 },
    { mes: 'Maio', indiferenciado: 85, papelCartao: 30, plasticoEmbalagens: 15 },
    { mes: 'Junho', indiferenciado: 50, papelCartao: 35, plasticoEmbalagens: 30 },
    { mes: 'Julho', indiferenciado: 65, papelCartao: 45, plasticoEmbalagens: 35 },
    { mes: 'Agosto', indiferenciado: 35, papelCartao: 40, plasticoEmbalagens: 45 }
  ];

  const evolutionByPackageData = [
    { mes: 'Janeiro', indiferenciado: 55, papelCartao: 80, plasticoEmbalagens: 100 },
    { mes: 'Fevereiro', indiferenciado: 125, papelCartao: 165, plasticoEmbalagens: 220 },
    { mes: 'Março', indiferenciado: 170, papelCartao: 190, plasticoEmbalagens: 220 },
    { mes: 'Abril', indiferenciado: 190, papelCartao: 215, plasticoEmbalagens: 245 },
    { mes: 'Maio', indiferenciado: 275, papelCartao: 305, plasticoEmbalagens: 320 },
    { mes: 'Junho', indiferenciado: 325, papelCartao: 360, plasticoEmbalagens: 380 },
    { mes: 'Julho', indiferenciado: 390, papelCartao: 435, plasticoEmbalagens: 470 },
    { mes: 'Agosto', indiferenciado: 425, papelCartao: 475, plasticoEmbalagens: 520 }
  ];

  // Custom tooltip for charts
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black/90 backdrop-blur-lg border border-white/20 rounded-lg p-3 text-white">
          <p className="font-medium">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
        <div className="text-left">
          <h1 className="text-xl md:text-2xl font-bold text-white">Dashboard - Operação</h1>
          <p className="text-gray-300 mt-1">Visão geral das operações do sistema</p>
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <Button variant="outline" className="text-white border-white/20">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
          <Button className="bg-sotkis-green hover:bg-sotkis-green/90">
            <RefreshCw className="w-4 h-4 mr-2" />
            Atualizar
          </Button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-1 bg-white/10 backdrop-blur-lg rounded-lg p-1">
        <button
          onClick={() => setActiveTab('deposicoes')}
          className={`px-3 md:px-4 py-2 rounded-md text-xs md:text-sm font-medium transition-all duration-200 ${
            activeTab === 'deposicoes'
              ? 'bg-sotkis-green text-white shadow-lg'
              : 'text-gray-300 hover:text-white hover:bg-white/10'
          }`}
        >
          DEPOSIÇÕES
        </button>
        <button
          onClick={() => setActiveTab('nivel-enchimento')}
          className={`px-3 md:px-4 py-2 rounded-md text-xs md:text-sm font-medium transition-all duration-200 ${
            activeTab === 'nivel-enchimento'
              ? 'bg-sotkis-green text-white shadow-lg'
              : 'text-gray-300 hover:text-white hover:bg-white/10'
          }`}
        >
          NÍVEL DE ENCHIMENTO
        </button>
        <button
          onClick={() => setActiveTab('gestao-manutencoes')}
          className={`px-3 md:px-4 py-2 rounded-md text-xs md:text-sm font-medium transition-all duration-200 ${
            activeTab === 'gestao-manutencoes'
              ? 'bg-sotkis-green text-white shadow-lg'
              : 'text-gray-300 hover:text-white hover:bg-white/10'
          }`}
        >
          GESTÃO DE MANUTENÇÕES
        </button>
        <button
          onClick={() => setActiveTab('recompensas')}
          className={`px-3 md:px-4 py-2 rounded-md text-xs md:text-sm font-medium transition-all duration-200 ${
            activeTab === 'recompensas'
              ? 'bg-sotkis-green text-white shadow-lg'
              : 'text-gray-300 hover:text-white hover:bg-white/10'
          }`}
        >
          RECOMPENSAS
        </button>
        <button
          onClick={() => setActiveTab('gestao-rotas')}
          className={`px-3 md:px-4 py-2 rounded-md text-xs md:text-sm font-medium transition-all duration-200 ${
            activeTab === 'gestao-rotas'
              ? 'bg-sotkis-green text-white shadow-lg'
              : 'text-gray-300 hover:text-white hover:bg-white/10'
          }`}
        >
          GESTÃO DE ROTAS
        </button>
      </div>

      {/* Conditional Content Based on Active Tab */}
      {activeTab === 'deposicoes' && (
        <>
          {/* Back Button and Date Filter */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0">
            
            <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
              <div className="text-white text-sm font-medium">Filtro geral do dashboard</div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                <div className="flex items-center space-x-2">
                  <span className="text-white text-sm">Início</span>
                  <Input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-32 bg-white/10 border-white/20 text-white/90"
                  />
                  <Calendar className="w-4 h-4 text-gray-400" />
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-white text-sm">Fim</span>
                  <Input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-32 bg-white/10 border-white/20 text-white/90"
                  />
                  <Calendar className="w-4 h-4 text-gray-400" />
                </div>
                <Button className="bg-sotkis-green text-white">
                  ATUALIZAR
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Date Presets */}
          <div className="flex flex-wrap gap-2">
            {['Ontem', 'Hoje', '1 semana', '1 mês', '3 meses', '6 meses', '1 ano', 'Início do ano até hoje'].map((preset) => (
              <Button
                key={preset}
                variant="outline"
                size="sm"
                className="text-white border-white/20 hover:bg-white/10 text-xs"
              >
                {preset}
              </Button>
            ))}
          </div>

          {/* Top Section - Statistics and Charts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Recycling Pie Chart */}
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardHeader>
                <CardTitle className="text-white text-sm">DEPOSIÇÕES - RECICLAGEM</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={120}>
                  <PieChart>
                    <Pie
                      data={recyclingData}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={50}
                      dataKey="value"
                    >
                      {recyclingData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Packing Types Donut Chart */}
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardHeader>
                <CardTitle className="text-white text-sm">Packing Types</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={120}>
                  <PieChart>
                    <Pie
                      data={packingTypesData}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={50}
                      dataKey="value"
                    >
                      {packingTypesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-2 text-xs text-gray-300">
                  {packingTypesData.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{item.name}</span>
                      <span>{item.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Connection Type Pie Chart */}
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardHeader>
                <CardTitle className="text-white text-sm">Connection Type</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={120}>
                  <PieChart>
                    <Pie
                      data={connectionTypeData}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={50}
                      dataKey="value"
                    >
                      {connectionTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Deposit Method Pie Chart */}
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardHeader>
                <CardTitle className="text-white text-sm">DEPOSIÇÕES - MÉTODO</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={120}>
                  <PieChart>
                    <Pie
                      data={depositMethodData}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={50}
                      dataKey="value"
                    >
                      {depositMethodData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Top Containers - Full Width */}
          <Card className="bg-white/10 backdrop-blur-lg border-0">
            <CardHeader>
              <CardTitle className="text-white text-sm">TOP CONTENTORES COM MAIS DEPÓSITOS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {topContainersData.map((container, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-4">
                    <div className="text-white font-medium text-lg mb-1">{container.id}</div>
                    <div className="text-gray-400 text-sm mb-2 line-clamp-2">{container.description}</div>
                    <div className="text-sotkis-green font-bold text-xl">{container.deposits}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Bottom Section - User Stats and Top Containers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Total Deposits Card */}
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-300">TOTAL DE DEPÓSITOS DO PERÍODO</p>
                    <p className="text-xl font-bold text-white">3279</p>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <div className="w-6 h-6 bg-sotkis-green rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Active Users Card */}
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-300">UTILIZADORES ATIVOS</p>
                    <p className="text-xl font-bold text-white">8000</p>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Users className="h-6 w-6 text-sotkis-green" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Total Users Card */}
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-300">UTILIZADORES</p>
                    <p className="text-xl font-bold text-white">91000</p>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                                         <Users className="h-6 w-6 text-sotkis-green" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alerts Card */}
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-orange-500 font-medium">ALERTAS</p>
                    <p className="text-sm text-sotkis-green">alertas ativos</p>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <AlertTriangle className="h-6 w-6 text-orange-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* DEPOSIÇÕES Chart - Second Row */}
          <Card className="bg-white/10 backdrop-blur-lg border-0">
            <CardHeader>
              <CardTitle className="text-white">DEPOSIÇÕES</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={depositosPorMesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="mes" 
                    stroke="rgba(255,255,255,0.7)"
                    fontSize={12}
                  />
                  <YAxis stroke="rgba(255,255,255,0.7)" fontSize={12} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="indiferenciado" fill="#9EC043" name="Indiferenciado" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="papelCartao" fill="#4FA9F7" name="Papel/Cartão" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="plasticoEmbalagens" fill="#FFD700" name="Plástico/Embalagens" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* NÍVEL DE ENCHIMENTO Chart - Second Row */}
          <Card className="bg-white/10 backdrop-blur-lg border-0">
            <CardHeader>
              <CardTitle className="text-white">NÍVEL DE ENCHIMENTO</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={evolutionByPackageData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="mes" 
                    stroke="rgba(255,255,255,0.7)"
                    fontSize={12}
                  />
                  <YAxis stroke="rgba(255,255,255,0.7)" fontSize={12} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area 
                    type="monotone" 
                    dataKey="indiferenciado" 
                    stackId="1"
                    stroke="#9EC043" 
                    fill="#9EC043" 
                    name="Indiferenciado"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="papelCartao" 
                    stackId="1"
                    stroke="#4FA9F7" 
                    fill="#4FA9F7" 
                    name="Papel/Cartão"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="plasticoEmbalagens" 
                    stackId="1"
                    stroke="#FFD700" 
                    fill="#FFD700" 
                    name="Plástico/Embalagens"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Map Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Island Search and List */}
            <div className="space-y-4">
              {/* Search */}
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <Input
                  placeholder="Pesquise por ilha..."
                  value={searchIsland}
                  onChange={(e) => setSearchIsland(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      console.log('Searching for:', searchIsland);
                    }
                  }}
                  className="flex-1 bg-white/10 border-white/20 text-white/90 placeholder-gray-400"
                />
                <Button 
                  className="bg-black text-white px-4"
                  onClick={() => {
                    // Handle search functionality
                    console.log('Searching for:', searchIsland);
                  }}
                >
                  <Search className="w-4 h-4 mr-2" />
                  PESQUISAR
                </Button>
              </div>

              {/* Island List */}
              <Card className="bg-white/10 backdrop-blur-lg border-0">
                <CardHeader>
                  <CardTitle className="text-white text-sm">Ilhas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {islandsData.map((island, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-white">{island.name}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-400 text-sm">{island.containers} Contentores</span>
                          <MapPin className="w-4 h-4 text-sotkis-green" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div className="lg:col-span-2">
              <Card className="bg-white/10 backdrop-blur-lg border-0 h-96">
                <CardContent className="p-0 h-full">
                                     <div className="relative h-full bg-gradient-to-br from-green-900 to-green-700 rounded-lg">
                    {/* Map Controls */}
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-white/20 backdrop-blur-lg rounded-lg p-1">
                        <button className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded text-white text-lg font-bold mb-1">+</button>
                        <button className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded text-white text-lg font-bold">-</button>
                      </div>
                    </div>

                    {/* Map Content - Simplified representation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white/70">
                        <MapPin className="w-16 h-16 mx-auto mb-4 text-sotkis-green" />
                        <h3 className="text-xl font-semibold mb-2">Mapa de Localização</h3>
                        <p className="text-sm">Visualização dos contentores e ilhas</p>
                        <div className="mt-4 flex justify-center space-x-4">
                                                     {[1, 2, 3, 4].map((marker) => (
                             <div key={marker} className="w-3 h-3 bg-sotkis-green rounded-full"></div>
                           ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </>
      )}

      {activeTab === 'nivel-enchimento' && (
        <>
          {/* Filters */}
          <div className="flex flex-col lg:flex-row lg:flex-wrap gap-4 items-start lg:items-center">
            <div className="flex flex-wrap gap-2">
              {timePresets.map((preset) => (
                <Button
                  key={preset.value}
                  variant={selectedTime === preset.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTime(preset.value)}
                  className={selectedTime === preset.value ? "bg-sotkis-green" : "text-white border-white/20"}
                >
                  {preset.label}
                </Button>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <Select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-48"
              >
                {departments.map((dept) => (
                  <SelectOption key={dept.value} value={dept.value}>
                    {dept.label}
                  </SelectOption>
                ))}
              </Select>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-300">Nível Médio</p>
                    <p className="text-xl font-bold text-white">78%</p>
                    <div className="flex items-center mt-1">
                      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-500">+5.2%</span>
                    </div>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-sotkis-green" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-300">Contentores Cheios</p>
                    <p className="text-xl font-bold text-white">23</p>
                    <div className="flex items-center mt-1">
                      <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                      <span className="text-sm text-red-500">-2.1%</span>
                    </div>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-red-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardContent className="p-4">
                                   <div className="flex items-center justify-between">
                     <div>
                       <p className="text-sm text-gray-300">Eficiência</p>
                       <p className="text-xl font-bold text-white">92%</p>
                       <div className="flex items-center mt-1">
                         <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                         <span className="text-sm text-green-500">+8.7%</span>
                       </div>
                     </div>
                     <div className="p-3 bg-white/10 rounded-lg">
                       <BarChart3 className="h-6 w-6 text-sotkis-green" />
                     </div>
                   </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-300">Alertas</p>
                    <p className="text-xl font-bold text-white">7</p>
                    <div className="flex items-center mt-1">
                      <TrendingDown className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-500">-12.5%</span>
                    </div>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-yellow-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardHeader>
                <CardTitle className="text-white">Nível de Enchimento por Zona</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={depositosPorMesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis 
                      dataKey="mes" 
                      stroke="rgba(255,255,255,0.7)"
                      fontSize={12}
                    />
                    <YAxis stroke="rgba(255,255,255,0.7)" fontSize={12} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="indiferenciado" fill="#9EC043" name="Zona Norte" />
                                    <Bar dataKey="papelCartao" fill="#4FA9F7" name="Zona Sul" />
                <Bar dataKey="plasticoEmbalagens" fill="#FFD700" name="Zona Este" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardHeader>
                <CardTitle className="text-white">Evolução do Enchimento</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={evolutionByPackageData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis 
                      dataKey="mes" 
                      stroke="rgba(255,255,255,0.7)"
                      fontSize={12}
                    />
                    <YAxis stroke="rgba(255,255,255,0.7)" fontSize={12} />
                    <Tooltip content={<CustomTooltip />} />
                    <Line 
                      type="monotone" 
                      dataKey="indiferenciado" 
                      stroke="#9EC043" 
                      strokeWidth={3}
                      name="Nível Médio"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="papelCartao" 
                      stroke="#8bb03a" 
                      strokeWidth={2}
                      name="Meta"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </>
      )}

      {activeTab === 'gestao-manutencoes' && (
        <>
          {/* Filters */}
          <div className="flex flex-col lg:flex-row lg:flex-wrap gap-4 items-start lg:items-center">
            <div className="flex flex-wrap gap-2">
              {timePresets.map((preset) => (
                <Button
                  key={preset.value}
                  variant={selectedTime === preset.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTime(preset.value)}
                  className={selectedTime === preset.value ? "bg-sotkis-green" : "text-white border-white/20"}
                >
                  {preset.label}
                </Button>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <Select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-48"
              >
                {departments.map((dept) => (
                  <SelectOption key={dept.value} value={dept.value}>
                    {dept.label}
                  </SelectOption>
                ))}
              </Select>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-300">Manutenções Pendentes</p>
                    <p className="text-xl font-bold text-white">15</p>
                    <div className="flex items-center mt-1">
                      <TrendingUp className="w-4 h-4 text-red-500 mr-1" />
                      <span className="text-sm text-red-500">+3.2%</span>
                    </div>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-red-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-300">Manutenções Concluídas</p>
                    <p className="text-xl font-bold text-white">42</p>
                    <div className="flex items-center mt-1">
                      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-500">+18.5%</span>
                    </div>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-green-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-300">Tempo Médio</p>
                    <p className="text-xl font-bold text-white">2.3h</p>
                    <div className="flex items-center mt-1">
                      <TrendingDown className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-500">-12.1%</span>
                    </div>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-sotkis-green" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-300">Custo Total</p>
                    <p className="text-xl font-bold text-white">€12.5K</p>
                    <div className="flex items-center mt-1">
                      <TrendingDown className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-500">-8.7%</span>
                    </div>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-yellow-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Maintenance Table and Chart Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Maintenance Table - Narrower */}
            <Card className="bg-white/10 backdrop-blur-lg border-0 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-white">Manutenções Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10">
                    <TableHead className="text-white">Contentor</TableHead>
                    <TableHead className="text-white">Tipo</TableHead>
                    <TableHead className="text-white">Prioridade</TableHead>
                    <TableHead className="text-white">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {maintenanceData.map((alert) => (
                    <TableRow key={alert.id} className="border-white/10">
                      <TableCell className="text-white">{alert.container}</TableCell>
                      <TableCell className="text-white">{alert.type}</TableCell>
                      <TableCell className={getPriorityColor(alert.priority)}>
                        {alert.priority}
                      </TableCell>
                      <TableCell className="text-white">{alert.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

            {/* SOTCARE Chart */}
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardHeader>
                <CardTitle className="text-white uppercase-title">SOTCARE - GESTÃO DE INTERVENÇÕES</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center space-y-4">
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={[
                          { name: 'Corretivas', value: 65, color: '#dc2626' },
                          { name: 'Preventivas', value: 35, color: '#eab308' }
                        ]}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {[
                          { name: 'Corretivas', value: 65, color: '#dc2626' },
                          { name: 'Preventivas', value: 35, color: '#eab308' }
                        ].map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                  
                  {/* Legend */}
                  <div className="flex flex-col space-y-2 w-full">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-600"></div>
                      <span className="text-white text-sm">Corretivas</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <span className="text-white text-sm">Preventivas</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* ÚLTIMAS INTERVENÇÕES Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white text-center uppercase-title">ÚLTIMAS INTERVENÇÕES</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* CORRETIVAS Table */}
              <Card className="bg-white/10 backdrop-blur-lg border-0">
                <CardHeader>
                  <CardTitle className="text-red-500 font-bold uppercase-title">CORRETIVAS</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-white/10">
                        <TableHead className="text-white">Tipo</TableHead>
                        <TableHead className="text-white">Ilha</TableHead>
                        <TableHead className="text-white">Contentor</TableHead>
                        <TableHead className="text-white">Data</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="border-white/10">
                        <TableCell className="text-white">Troca de amortecedor de tampa do kit enterrado</TableCell>
                        <TableCell className="text-white">Rua Cidade Bolama</TableCell>
                        <TableCell className="text-white">Bolama</TableCell>
                        <TableCell className="text-white">3/14/2025 12:00:00 AM</TableCell>
                      </TableRow>
                      <TableRow className="border-white/10">
                        <TableCell className="text-white">Problema com amortecedor</TableCell>
                        <TableCell className="text-white">Rua Nova do Desterro</TableCell>
                        <TableCell className="text-white">NovaDesterro</TableCell>
                        <TableCell className="text-white">3/13/2025 12:00:00 AM</TableCell>
                      </TableRow>
                      <TableRow className="border-white/10">
                        <TableCell className="text-white">Troca de fecho de tampa</TableCell>
                        <TableCell className="text-white">Rua Nova do Desterro</TableCell>
                        <TableCell className="text-white">NovaDesterro</TableCell>
                        <TableCell className="text-white">3/12/2025 12:00:00 AM</TableCell>
                      </TableRow>
                      <TableRow className="border-white/10">
                        <TableCell className="text-white">Troca de amortecedor de tampa</TableCell>
                        <TableCell className="text-white">Rua Nova do Desterro</TableCell>
                        <TableCell className="text-white">NovaDesterro</TableCell>
                        <TableCell className="text-white">3/10/2025 12:00:00 AM</TableCell>
                      </TableRow>
                      <TableRow className="border-white/10">
                        <TableCell className="text-white">Troca de amortecedor de tampa do kit enterrado</TableCell>
                        <TableCell className="text-white">Largo do Barao Quintela</TableCell>
                        <TableCell className="text-white">Barao Quintela</TableCell>
                        <TableCell className="text-white">3/10/2025 12:00:00 AM</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* PREVENTIVAS Table */}
              <Card className="bg-white/10 backdrop-blur-lg border-0">
                <CardHeader>
                  <CardTitle className="text-yellow-400 font-bold uppercase-title">PREVENTIVAS</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-white/10">
                        <TableHead className="text-white">Ilha</TableHead>
                        <TableHead className="text-white">Contentores</TableHead>
                        <TableHead className="text-white">Data</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="border-white/10">
                        <TableCell className="text-white">Rua Cidade Bolama</TableCell>
                        <TableCell className="text-white">4</TableCell>
                        <TableCell className="text-white">3/14/2025 12:00:00 AM</TableCell>
                      </TableRow>
                      <TableRow className="border-white/10">
                        <TableCell className="text-white">Rua Nova do Desterro</TableCell>
                        <TableCell className="text-white">5</TableCell>
                        <TableCell className="text-white">3/14/2025 12:00:00 AM</TableCell>
                      </TableRow>
                      <TableRow className="border-white/10">
                        <TableCell className="text-white">Rua Cidade Bolama</TableCell>
                        <TableCell className="text-white">3</TableCell>
                        <TableCell className="text-white">3/13/2025 12:00:00 AM</TableCell>
                      </TableRow>
                      <TableRow className="border-white/10">
                        <TableCell className="text-white">Rua Nova do Desterro</TableCell>
                        <TableCell className="text-white">4</TableCell>
                        <TableCell className="text-white">3/13/2025 12:00:00 AM</TableCell>
                      </TableRow>
                      <TableRow className="border-white/10">
                        <TableCell className="text-white">Rua Cidade Bolama</TableCell>
                        <TableCell className="text-white">4</TableCell>
                        <TableCell className="text-white">3/12/2025 12:00:00 AM</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </>
      )}

      {activeTab === 'recompensas' && (
        <>
          {/* Header with Date Range */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">Filtro geral do dashboard</h2>
            
            {/* Date Range and Update Button */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <Input 
                    type="date" 
                    value="2025-07-28" 
                    className="w-40 bg-white/10 border-white/20 text-white"
                  />
                  <span className="text-white">Início</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <Input 
                    type="date" 
                    value="2025-08-04" 
                    className="w-40 bg-white/10 border-white/20 text-white"
                  />
                  <span className="text-white">Fim</span>
                </div>
              </div>
              <Button className="bg-sotkis-green hover:bg-sotkis-green/90">
                ATUALIZAR
              </Button>
            </div>

            {/* Time Preset Buttons */}
            <div className="flex flex-wrap gap-2">
              {['Ontem', 'Hoje', '1 semana', '1 mês', '3 meses', '6 meses', '1 ano', 'Início do ano até hoje'].map((preset) => (
                <Button
                  key={preset}
                  variant="outline"
                  size="sm"
                  className="text-white border-white/20 hover:bg-white/10"
                >
                  {preset}
                </Button>
              ))}
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardContent className="p-4 text-center">
                <p className="text-sm text-gray-300 mb-2">Total</p>
                <p className="text-xl font-bold text-white">326</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardContent className="p-4 text-center">
                <p className="text-sm text-gray-300 mb-2">Converted</p>
                <p className="text-xl font-bold text-white">215</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardContent className="p-4 text-center">
                <p className="text-sm text-gray-300 mb-2">Wrong</p>
                <p className="text-xl font-bold text-white">110</p>
              </CardContent>
            </Card>
                    </div>

          {/* Line Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* RECOMPENSAS ATRIBUIDAS Chart */}
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardHeader>
                <CardTitle className="text-white">RECOMPENSAS ATRIBUIDAS</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                                     <LineChart data={[
                     { month: 'Janeiro', value: 4 },
                     { month: 'Fevereiro', value: 11 },
                     { month: 'Março', value: 3 },
                     { month: 'Abril', value: 5 },
                     { month: 'Maio', value: 8 },
                     { month: 'Junho', value: 1 },
                     { month: 'Julho', value: 12 },
                     { month: 'Agosto', value: 6 }
                   ]}>
                     <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                     <XAxis dataKey="month" stroke="white" />
                     <YAxis stroke="white" domain={[0, 12]} />
                     <Tooltip content={<CustomTooltip />} />
                     <Line type="monotone" dataKey="value" stroke="#9EC043" strokeWidth={2} />
                   </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* RECOMPENSAS CONVERTIDAS Chart */}
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardHeader>
                <CardTitle className="text-white">RECOMPENSAS CONVERTIDAS</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                                     <LineChart data={[
                     { month: 'Janeiro', value: 4 },
                     { month: 'Fevereiro', value: 11 },
                     { month: 'Março', value: 3 },
                     { month: 'Abril', value: 3 },
                     { month: 'Maio', value: 5 },
                     { month: 'Junho', value: 1 },
                     { month: 'Julho', value: 14 },
                     { month: 'Agosto', value: 3 }
                   ]}>
                     <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                     <XAxis dataKey="month" stroke="white" />
                     <YAxis stroke="white" domain={[0, 15]} />
                     <Tooltip content={<CustomTooltip />} />
                     <Line type="monotone" dataKey="value" stroke="#9EC043" strokeWidth={2} />
                   </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Bar Chart - RECOMPENSAS ATRIBUIDAS POR TIPO DE RESÍDUO */}
          <Card className="bg-white/10 backdrop-blur-lg border-0">
            <CardHeader>
              <CardTitle className="text-white">RECOMPENSAS ATRIBUIDAS POR TIPO DE RESÍDUO</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={[
                  { month: 'Jan', Indiferenciado: 50, 'Papel/Cartão': 25, 'Plástico/Embalagens': 20 },
                  { month: 'Feb', Indiferenciado: 70, 'Papel/Cartão': 40, 'Plástico/Embalagens': 55 },
                  { month: 'Mar', Indiferenciado: 40, 'Papel/Cartão': 15, 'Plástico/Embalagens': 30 },
                  { month: 'Apr', Indiferenciado: 20, 'Papel/Cartão': 30, 'Plástico/Embalagens': 35 },
                  { month: 'May', Indiferenciado: 85, 'Papel/Cartão': 35, 'Plástico/Embalagens': 15 },
                  { month: 'Jun', Indiferenciado: 50, 'Papel/Cartão': 30, 'Plástico/Embalagens': 35 }
                ]}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="month" stroke="white" />
                  <YAxis stroke="white" domain={[0, 90]} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="Indiferenciado" fill="#9EC043" fillOpacity={0.5} radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Papel/Cartão" fill="#4FA9F7" fillOpacity={0.5} radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Plástico/Embalagens" fill="#FFD700" fillOpacity={0.5} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Area Chart - RECOMPENSAS ATRIBUIDAS POR TIPO DE EMBALAGEM DRS */}
          <Card className="bg-white/10 backdrop-blur-lg border-0">
            <CardHeader>
              <CardTitle className="text-white">RECOMPENSAS ATRIBUIDAS POR TIPO DE EMBALAGEM DRS</CardTitle>
              <p className="text-gray-300 text-sm">Evolution by package type (weekly)</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={[
                  { month: 'Janeiro', Indiferenciado: 5, 'Papel/Cartão': 3, 'Plástico/Embalagens': 2 },
                  { month: 'Fevereiro', Indiferenciado: 8, 'Papel/Cartão': 5, 'Plástico/Embalagens': 2 },
                  { month: 'Março', Indiferenciado: 15, 'Papel/Cartão': 25, 'Plástico/Embalagens': 50 },
                  { month: 'Abril', Indiferenciado: 10, 'Papel/Cartão': 10, 'Plástico/Embalagens': 10 },
                  { month: 'Maio', Indiferenciado: 8, 'Papel/Cartão': 12, 'Plástico/Embalagens': 10 },
                  { month: 'Junho', Indiferenciado: 20, 'Papel/Cartão': 25, 'Plástico/Embalagens': 35 },
                  { month: 'Julho', Indiferenciado: 5, 'Papel/Cartão': 8, 'Plástico/Embalagens': 7 },
                  { month: 'Agosto', Indiferenciado: 15, 'Papel/Cartão': 20, 'Plástico/Embalagens': 25 }
                ]}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="month" stroke="white" />
                  <YAxis stroke="white" domain={[0, 100]} />
                  <Tooltip content={<CustomTooltip />} />
                                     <Area type="monotone" dataKey="Indiferenciado" stackId="1" fill="#9EC043" stroke="#9EC043" />
                   <Area type="monotone" dataKey="Papel/Cartão" stackId="1" fill="#4FA9F7" stroke="#4FA9F7" />
                   <Area type="monotone" dataKey="Plástico/Embalagens" stackId="1" fill="#FFD700" stroke="#FFD700" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Stacked Bar Chart - DEPOSIÇÕES CORRETAS VS INCORRETAS */}
          <Card className="bg-white/10 backdrop-blur-lg border-0">
            <CardHeader>
              <CardTitle className="text-white">DEPOSIÇÕES CORRETAS VS INCORRETAS</CardTitle>
              <p className="text-gray-300 text-sm">Correct vs wrong packaging evolution (weekly)</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={[
                  { month: 'Dez 2024', Correct: 85, Wrong: 15 },
                  { month: 'Jan 2025', Correct: 70, Wrong: 30 },
                  { month: 'Fev 2025', Correct: 30, Wrong: 70 },
                  { month: 'Mar 2025', Correct: 50, Wrong: 50 },
                  { month: 'Abr 2025', Correct: 65, Wrong: 35 },
                  { month: 'May 2025', Correct: 40, Wrong: 60 },
                  { month: 'Jun 2025', Correct: 45, Wrong: 55 },
                  { month: 'Jul 2025', Correct: 75, Wrong: 25 }
                ]}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="month" stroke="white" />
                  <YAxis stroke="white" domain={[0, 120]} />
                  <Tooltip content={<CustomTooltip />} />
                                                       <Bar dataKey="Correct" stackId="1" fill="#22C55E" fillOpacity={0.6} radius={[0, 0, 8, 8]} />
                  <Bar dataKey="Wrong" stackId="1" fill="#DC2626" fillOpacity={0.6} radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* TOP DE RECOMPENSAS CONVERTIDAS */}
          <Card className="bg-white/10 backdrop-blur-lg border-0">
            <CardHeader>
              <CardTitle className="text-white">TOP DE RECOMPENSAS CONVERTIDAS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
                  <CardContent className="p-4 text-center">
                    <Gift className="h-8 w-8 text-white mx-auto mb-2" />
                    <p className="font-bold text-white">Netflix</p>
                    <p className="text-xl font-bold text-white">2500</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
                  <CardContent className="p-4 text-center">
                    <Gift className="h-8 w-8 text-white mx-auto mb-2" />
                    <p className="font-bold text-white">Riot</p>
                    <p className="text-xl font-bold text-white">1000</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
                  <CardContent className="p-4 text-center">
                    <Gift className="h-8 w-8 text-white mx-auto mb-2" />
                    <p className="font-bold text-white">Spotify</p>
                    <p className="text-xl font-bold text-white">700</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-lg border border-white/10">
                  <CardContent className="p-4 text-center">
                    <Gift className="h-8 w-8 text-white mx-auto mb-2" />
                    <p className="font-bold text-white">Bolt</p>
                    <p className="text-xl font-bold text-white">300</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </>
      )}

      {activeTab === 'gestao-rotas' && (
        <>
          {/* Date Range Filters */}
          <Card className="bg-white/10 backdrop-blur-lg border-0">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                    <label className="text-white font-medium text-sm">Início:</label>
                    <Input
                      type="date"
                      value="2025-07-28"
                      className="bg-white/10 border-white/20 text-white w-full sm:w-40"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                    <label className="text-white font-medium text-sm">Fim:</label>
                    <Input
                      type="date"
                      value="2025-08-04"
                      className="bg-white/10 border-white/20 text-white w-full sm:w-40"
                    />
                  </div>
                  <Button className="bg-sotkis-green hover:bg-sotkis-green/90 text-black w-full sm:w-auto">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">ATUALIZAR</span>
                    <span className="sm:hidden">ATUALIZAR</span>
                  </Button>
                </div>
              </div>
              
              {/* Time Preset Buttons */}
              <div className="flex flex-wrap gap-2 mt-4">
                {routeTimePresets.map((preset) => (
                <Button
                    key={preset}
                    variant="outline"
                  size="sm"
                    className="bg-white text-black border-white hover:bg-gray-100 text-xs sm:text-sm"
                >
                    {preset}
                </Button>
              ))}
            </div>
            </CardContent>
          </Card>

          {/* First Row - KPI Cards with Alerts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-300">Today</p>
                    <p className="text-xl font-bold text-white">40</p>
                    <div className="flex items-center mt-1">
                      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-500">+8.2%</span>
                    </div>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-sotkis-green" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardContent className="p-4">
                                   <div className="flex items-center justify-between">
                     <div>
                    <p className="text-sm text-gray-300">Tomorrow</p>
                    <p className="text-xl font-bold text-white">40</p>
                       <div className="flex items-center mt-1">
                      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-500">+5.1%</span>
                       </div>
                     </div>
                     <div className="p-3 bg-white/10 rounded-lg">
                       <BarChart3 className="h-6 w-6 text-sotkis-green" />
                     </div>
                   </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-300">In 2 Days</p>
                    <p className="text-xl font-bold text-white">40</p>
                    <div className="flex items-center mt-1">
                      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-500">+3.8%</span>
                    </div>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-sotkis-green" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardContent className="p-4">
                                   <div className="flex items-center justify-between">
                     <div>
                    <p className="text-sm text-gray-300">ALERTAS</p>
                    <p className="text-xl font-bold text-white">alertas ativos</p>
                       <div className="flex items-center mt-1">
                      <AlertTriangle className="w-4 h-4 text-red-500 mr-1" />
                      <span className="text-sm text-red-500">3 ativos</span>
                       </div>
                     </div>
                     <div className="p-3 bg-white/10 rounded-lg">
                    <AlertTriangle className="h-6 w-6 text-red-500" />
                     </div>
                   </div>
              </CardContent>
            </Card>
          </div>

          {/* QUILÓMETROS PERCORRIDOS Chart */}
          <Card className="bg-white/10 backdrop-blur-lg border-0">
            <CardHeader>
              <CardTitle className="text-white text-sm sm:text-base">QUILÓMETROS PERCORRIDOS</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={360} className="sm:h-[400px]">
                <BarChart data={kilometersData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="route" stroke="white" fontSize={12} />
                  <YAxis stroke="white" domain={[0, 140]} fontSize={12} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="km" fill="#9EC043" fillOpacity={0.5} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* CONTENTORES RECOLHIDOS Chart */}
          <Card className="bg-white/10 backdrop-blur-lg border-0">
            <CardHeader>
              <CardTitle className="text-white text-sm sm:text-base">CONTENTORES RECOLHIDOS</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={360} className="sm:h-[400px]">
                <BarChart data={containersCollectedData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="month" stroke="white" fontSize={12} />
                  <YAxis stroke="white" domain={[0, 100]} fontSize={12} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="containers" fill="#038703" fillOpacity={0.5} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* PLANO EXECUTADO Chart */}
          <Card className="bg-white/10 backdrop-blur-lg border-0">
            <CardHeader>
              <CardTitle className="text-white text-sm sm:text-base">PLANO EXECUTADO</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={360} className="sm:h-[400px]">
                <BarChart data={planExecutedData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="month" stroke="white" fontSize={12} />
                  <YAxis stroke="white" domain={[0, 450]} fontSize={12} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="value" fill="#4CB151" fillOpacity={0.5} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default OperacaoDashboard; 