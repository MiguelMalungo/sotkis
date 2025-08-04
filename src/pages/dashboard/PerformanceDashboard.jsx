import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectOption } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TrendingUp, TrendingDown, Calendar, Filter, Download, RefreshCw, Users, BarChart3, AlertTriangle, MapPin, Leaf } from 'lucide-react';
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area
} from 'recharts';
import { 
  performanceData, 
  monthlyPerformanceData, 
  zonePerformanceData, 
  weeklyTrendData,
  userActivityData,
  departments,
  timePresets
} from '@/data/mockData';

const PerformanceDashboard = () => {
  const [selectedTime, setSelectedTime] = useState('year');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-500';
      case 'inactive': return 'text-gray-500';
      default: return 'text-gray-500';
    }
  };

  const calculateGrowth = (current, previous) => {
    if (previous === 0) return 0;
    return ((current - previous) / previous) * 100;
  };

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
          <h1 className="text-2xl md:text-3xl font-bold text-white">PERFORMANCE</h1>
          <p className="text-gray-300 mt-1">Análise de performance e métricas do sistema</p>
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

      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 items-start sm:items-center">
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
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <Filter className="w-4 h-4 text-gray-400" />
          <Select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="w-full sm:w-48 bg-white/10 border-white/20 text-white/90"
          >
            {departments.map((dept) => (
              <SelectOption key={dept.value} value={dept.value}>
                {dept.label}
              </SelectOption>
            ))}
          </Select>
        </div>
      </div>

      {/* Annual Comparison Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm text-gray-300">Depósitos</p>
              <p className="text-2xl font-bold text-white">{performanceData.currentYear.deposits}</p>
              <div className="flex items-center justify-center mt-1">
                {performanceData.currentYear.deposits > performanceData.previousYear.deposits ? (
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                )}
                <span className={`text-sm ${
                  performanceData.currentYear.deposits > performanceData.previousYear.deposits 
                    ? 'text-green-500' 
                    : 'text-red-500'
                }`}>
                  {calculateGrowth(performanceData.currentYear.deposits, performanceData.previousYear.deposits).toFixed(1)}%
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-1">vs ano anterior</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm text-gray-300">Nível de Enchimento</p>
              <p className="text-2xl font-bold text-white">{performanceData.currentYear.fillLevel}%</p>
              <div className="flex items-center justify-center mt-1">
                {performanceData.currentYear.fillLevel > performanceData.previousYear.fillLevel ? (
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                )}
                <span className={`text-sm ${
                  performanceData.currentYear.fillLevel > performanceData.previousYear.fillLevel 
                    ? 'text-green-500' 
                    : 'text-red-500'
                }`}>
                  {calculateGrowth(performanceData.currentYear.fillLevel, performanceData.previousYear.fillLevel).toFixed(1)}%
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-1">vs ano anterior</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm text-gray-300">Manutenção</p>
              <p className="text-2xl font-bold text-white">{performanceData.currentYear.maintenance}</p>
              <div className="flex items-center justify-center mt-1">
                {performanceData.currentYear.maintenance < performanceData.previousYear.maintenance ? (
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                )}
                <span className={`text-sm ${
                  performanceData.currentYear.maintenance < performanceData.previousYear.maintenance 
                    ? 'text-green-500' 
                    : 'text-red-500'
                }`}>
                  {calculateGrowth(performanceData.currentYear.maintenance, performanceData.previousYear.maintenance).toFixed(1)}%
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-1">vs ano anterior</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm text-gray-300">Recompensas</p>
              <p className="text-2xl font-bold text-white">{performanceData.currentYear.rewards}</p>
              <div className="flex items-center justify-center mt-1">
                {performanceData.currentYear.rewards > performanceData.previousYear.rewards ? (
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                )}
                <span className={`text-sm ${
                  performanceData.currentYear.rewards > performanceData.previousYear.rewards 
                    ? 'text-green-500' 
                    : 'text-red-500'
                }`}>
                  {calculateGrowth(performanceData.currentYear.rewards, performanceData.previousYear.rewards).toFixed(1)}%
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-1">vs ano anterior</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm text-gray-300">Rotas</p>
              <p className="text-2xl font-bold text-white">{performanceData.currentYear.routes}</p>
              <div className="flex items-center justify-center mt-1">
                {performanceData.currentYear.routes > performanceData.previousYear.routes ? (
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                )}
                <span className={`text-sm ${
                  performanceData.currentYear.routes > performanceData.previousYear.routes 
                    ? 'text-green-500' 
                    : 'text-red-500'
                }`}>
                  {calculateGrowth(performanceData.currentYear.routes, performanceData.previousYear.routes).toFixed(1)}%
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-1">vs ano anterior</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* First Row - Regular Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Serviço */}
        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">SERVIÇO</p>
                <p className="text-2xl font-bold text-white">+15%</p>
                <div className="flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">vs ano anterior</span>
                </div>
              </div>
              <div className="p-3 bg-white/10 rounded-lg">
                <BarChart3 className="h-6 w-6 text-sotkis-green" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Engagement Comunitário */}
        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">ENGAGEMENT COMUNITÁRIO</p>
                <p className="text-2xl font-bold text-white">+23%</p>
                <div className="flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">vs ano anterior</span>
                </div>
              </div>
              <div className="p-3 bg-white/10 rounded-lg">
                <Users className="h-6 w-6 text-sotkis-green" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tx Reciclagem */}
        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">TX RECICLAGEM</p>
                <p className="text-2xl font-bold text-white">43.2%</p>
                <div className="flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">+7 pp vs ano</span>
                </div>
              </div>
              <div className="p-3 bg-white/10 rounded-lg">
                <BarChart3 className="h-6 w-6 text-sotkis-green" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Carbon Footprint */}
        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">Carbon Footprint</p>
                <p className="text-2xl font-bold text-white">100.2</p>
                <div className="flex items-center mt-1">
                  <TrendingDown className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">-29.4 toneladas</span>
                </div>
              </div>
              <div className="p-3 bg-white/10 rounded-lg">
                <Leaf className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Custos */}
        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">CUSTOS</p>
                <p className="text-2xl font-bold text-white">-102k€</p>
                <div className="flex items-center mt-1">
                  <TrendingDown className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">vs ano anterior</span>
                </div>
              </div>
              <div className="p-3 bg-white/10 rounded-lg">
                <BarChart3 className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Second Row - Gauge Charts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Utilizadores Ativos */}
        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">Utilizadores Ativos</p>
                <p className="text-2xl font-bold text-white">2,600</p>
                <div className="flex items-center mt-1">
                  <span className="text-sm text-gray-400">de 10,600 total</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {/* Gauge Chart */}
                <div className="relative w-20 h-12">
                  {/* Gauge Background */}
                  <div className="absolute inset-0 bg-gray-200 rounded-t-full"></div>
                  {/* Gauge Fill */}
                  <div className="absolute inset-0 bg-sotkis-green rounded-t-full" style={{ clipPath: 'polygon(0 100%, 25% 100%, 25% 0, 100% 0, 100% 100%)' }}></div>
                  {/* Numbers */}
                  <div className="absolute bottom-0 left-0 text-xs text-gray-600">2000</div>
                  <div className="absolute bottom-0 right-0 text-xs text-gray-600">10600</div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-gray-700">2600</div>
                </div>
                <Users className="h-5 w-5 text-sotkis-green" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Nº Km */}
        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">Nº Km</p>
                <p className="text-2xl font-bold text-white">349,600</p>
                <div className="flex items-center mt-1">
                  <span className="text-sm text-gray-400">de 424,000 total</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {/* Gauge Chart */}
                <div className="relative w-20 h-12">
                  {/* Gauge Background */}
                  <div className="absolute inset-0 bg-gray-200 rounded-t-full"></div>
                  {/* Gauge Fill */}
                  <div className="absolute inset-0 bg-sotkis-green rounded-t-full" style={{ clipPath: 'polygon(0 100%, 82% 100%, 82% 0, 100% 0, 100% 100%)' }}></div>
                  {/* Numbers */}
                  <div className="absolute bottom-0 left-0 text-xs text-gray-600">0</div>
                  <div className="absolute bottom-0 right-0 text-xs text-gray-600">424000</div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-gray-700">349600</div>
                </div>
                <MapPin className="h-5 w-5 text-sotkis-green" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Manutenção Não Programada */}
        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">Manutenção Não Programada</p>
                <p className="text-2xl font-bold text-white">29</p>
                <div className="flex items-center mt-1">
                  <span className="text-sm text-gray-400">de 33 total</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {/* Gauge Chart */}
                <div className="relative w-20 h-12">
                  {/* Gauge Background */}
                  <div className="absolute inset-0 bg-gray-200 rounded-t-full"></div>
                  {/* Gauge Fill */}
                  <div className="absolute inset-0 bg-sotkis-green rounded-t-full" style={{ clipPath: 'polygon(0 100%, 88% 100%, 88% 0, 100% 0, 100% 100%)' }}></div>
                  {/* Numbers */}
                  <div className="absolute bottom-0 left-0 text-xs text-gray-600">0</div>
                  <div className="absolute bottom-0 right-0 text-xs text-gray-600">33</div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-gray-700">29</div>
                </div>
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Nº Contentores Capacidade > 99% */}
        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">Contentores Capacidade &gt; 99%</p>
                <p className="text-2xl font-bold text-white">20</p>
                <div className="flex items-center mt-1">
                  <span className="text-sm text-gray-400">de 42 total</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {/* Gauge Chart */}
                <div className="relative w-20 h-12">
                  {/* Gauge Background */}
                  <div className="absolute inset-0 bg-gray-200 rounded-t-full"></div>
                  {/* Gauge Fill */}
                  <div className="absolute inset-0 bg-sotkis-green rounded-t-full" style={{ clipPath: 'polygon(0 100%, 48% 100%, 48% 0, 100% 0, 100% 100%)' }}></div>
                  {/* Numbers */}
                  <div className="absolute bottom-0 left-0 text-xs text-gray-600">0</div>
                  <div className="absolute bottom-0 right-0 text-xs text-gray-600">42</div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-gray-700">20</div>
                </div>
                <AlertTriangle className="h-5 w-5 text-red-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>




    </div>
  );
};

export default PerformanceDashboard; 