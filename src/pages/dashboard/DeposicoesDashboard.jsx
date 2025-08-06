import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Calendar, Download, RefreshCw, Search, MapPin, Users, AlertTriangle, ArrowLeft } from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';

const DeposicoesDashboard = () => {
  const navigate = useNavigate();
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
          <h1 className="text-xl md:text-2xl font-bold text-white">Dashboard - Deposições</h1>
          <p className="text-gray-300 mt-1">Visão geral das deposições do sistema</p>
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

      {/* Back Button and Date Filter */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0">
        <div className="flex items-center space-x-4">
          <Button 
            onClick={() => navigate('/dashboard/operacao')}
            className="bg-sotkis-green hover:bg-sotkis-green/90 text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <div className="text-white text-sm font-medium">Filtro geral do dashboard</div>
        </div>
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
    </div>
  );
};

export default DeposicoesDashboard; 