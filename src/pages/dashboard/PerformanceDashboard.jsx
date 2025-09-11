import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectOption } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  BarChart3, TrendingUp, TrendingDown, Search, Filter, ArrowLeft,
  Target, Award, Zap, Activity, Users, MapPin, Wrench, Package
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area, RadialBarChart, RadialBar, PolarRadiusAxis, Label
} from 'recharts';
import SubmenuBar from '../../components/ui/SubmenuBar';
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
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState('month');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const submenuLinks = [
    { label: 'Deposições', to: '/dashboard/deposicoes' },
    { label: 'Nível de Enchimento', to: '/dashboard/nivel-enchimento' },
    { label: 'Gestão de Manutenções', to: '/dashboard/gestao-manutencoes' },
    { label: 'Recompensas', to: '/dashboard/recompensas' },
    { label: 'Gestão de Rotas', to: '/dashboard/gestao-rotas' },
    { label: 'Performance', to: '/dashboard/performance' },
  ];

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
    <div className="p-6 space-y-6">
      {/* Page Header - AT THE VERY TOP */}
      <div className="page-header text-right">
        <h1 className="text-xl font-bold text-white">Dashboard de Performance</h1>
        <p className="text-gray-300 mt-1">Análise de performance e métricas do sistema</p>
      </div>

      {/* Voltar Button - Mobile Only */}
      <div className="flex justify-start md:hidden">
        <Button 
          onClick={() => window.history.back()}
          className="bg-sotkis-green hover:bg-sotkis-green/90 text-white font-semibold text-sm"
        >
          Voltar
        </Button>
      </div>

      {/* SubmenuBar - Desktop Only */}
      <div className="hidden md:block">
        <SubmenuBar items={submenuLinks} />
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-4 items-start lg:items-center">
        <div className="flex flex-wrap gap-2">
          {timePresets.map((preset) => (
            <Button
              key={preset.value}
              variant={selectedTime === preset.value ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTime(preset.value)}
              className={selectedTime === preset.value ? "bg-sotkis-green hover:bg-sotkis-green/90 text-black" : "text-white border-white/20 hover:bg-white/10"}
            >
              {preset.label}
            </Button>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Select value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)}>
            <SelectOption value="all">Todos os Departamentos</SelectOption>
            {departments.map((dept) => (
              <SelectOption key={dept.value} value={dept.value}>
                {dept.label}
              </SelectOption>
            ))}
          </Select>
        </div>
      </div>

      {/* Annual Comparison Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card className="bg-white/20 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm text-gray-300">Depósitos</p>
              <p className="text-xl font-bold text-white">{performanceData.currentYear.deposits}</p>
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

        <Card className="bg-white/20 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm text-gray-300">Nível de Enchimento</p>
              <p className="text-xl font-bold text-white">{performanceData.currentYear.fillLevel}%</p>
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

        <Card className="bg-white/20 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm text-gray-300">Manutenção</p>
              <p className="text-xl font-bold text-white">{performanceData.currentYear.maintenance}</p>
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

        <Card className="bg-white/20 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">Carbon Footprint</p>
                <p className="text-xl font-bold text-white">100.2</p>
                <div className="flex items-center mt-1">
                  <TrendingDown className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-500">-29.4 toneladas</span>
                </div>
              </div>
              <div className="p-3 bg-white/10 rounded-lg">
                <Zap className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/20 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">CUSTOS</p>
                <p className="text-xl font-bold text-white">-102k€</p>
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
        <Card className="bg-white/20 backdrop-blur-lg border-0 min-h-[300px] sm:min-h-[400px]">
          <CardContent className="p-6">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-center mb-4">
                <p className="text-sm text-white font-bold">Utilizadores Ativos</p>
                <p className="text-xs text-gray-400">de 10,600 total</p>
              </div>
              
              {/* Responsive Radial Gauge Chart */}
              <div className="w-full flex justify-center">
                <ResponsiveContainer width="100%" height={200} className="sm:h-[300px]">
                  <RadialBarChart
                    data={[
                      { value: 2600, max: 10600, fill: "#9EC043" },
                      { value: 8000, max: 10600, fill: "rgba(255,255,255,0.2)" }
                    ]}
                    startAngle={180}
                    endAngle={0}
                    innerRadius={40}
                    outerRadius={80}
                  >
                    <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                      <Label
                        content={({ viewBox }) => {
                          if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                            return (
                              <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                                <tspan
                                  x={viewBox.cx}
                                  y={(viewBox.cy || 0) + 8}
                                  className="fill-white text-xl font-bold"
                                >
                                  2600
                                </tspan>
                                <tspan
                                  x={viewBox.cx}
                                  y={(viewBox.cy || 0) + 25}
                                  className="fill-gray-400 text-sm"
                                >
                                  Utilizadores
                                </tspan>
                              </text>
                            )
                          }
                        }}
                      />
                    </PolarRadiusAxis>
                    <RadialBar
                      dataKey="value"
                      cornerRadius={20}
                      fill="#9EC043"
                      strokeWidth={25}
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
              
              <Users className="h-8 w-8 text-sotkis-green mt-2" />
            </div>
          </CardContent>
        </Card>

        {/* Nº Km */}
        <Card className="bg-white/20 backdrop-blur-lg border-0 min-h-[300px] sm:min-h-[400px]">
          <CardContent className="p-6">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-center mb-4">
                <p className="text-sm text-white font-bold">Nº Km</p>
                <p className="text-xs text-gray-400">de 15,000 total</p>
              </div>
              
              <div className="w-full flex justify-center">
                <ResponsiveContainer width="100%" height={200} className="sm:h-[300px]">
                  <RadialBarChart
                    data={[
                      { value: 12000, max: 15000, fill: "#9EC043" },
                      { value: 3000, max: 15000, fill: "rgba(255,255,255,0.2)" }
                    ]}
                    startAngle={180}
                    endAngle={0}
                    innerRadius={40}
                    outerRadius={80}
                  >
                    <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                      <Label
                        content={({ viewBox }) => {
                          if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                            return (
                              <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                                <tspan
                                  x={viewBox.cx}
                                  y={(viewBox.cy || 0) + 8}
                                  className="fill-white text-xl font-bold"
                                >
                                  12,000
                                </tspan>
                                <tspan
                                  x={viewBox.cx}
                                  y={(viewBox.cy || 0) + 25}
                                  className="fill-gray-400 text-sm"
                                >
                                  Km
                                </tspan>
                              </text>
                            )
                          }
                        }}
                      />
                    </PolarRadiusAxis>
                    <RadialBar
                      dataKey="value"
                      cornerRadius={20}
                      fill="#9EC043"
                      strokeWidth={25}
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
              
              <MapPin className="h-8 w-8 text-sotkis-green mt-2" />
            </div>
          </CardContent>
        </Card>

        {/* Manutenção */}
        <Card className="bg-white/20 backdrop-blur-lg border-0 min-h-[300px] sm:min-h-[400px]">
          <CardContent className="p-6">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-center mb-4">
                <p className="text-sm text-white font-bold">Manutenção</p>
                <p className="text-xs text-gray-400">de 100 total</p>
              </div>
              
              <div className="w-full flex justify-center">
                <ResponsiveContainer width="100%" height={200} className="sm:h-[300px]">
                  <RadialBarChart
                    data={[
                      { value: 85, max: 100, fill: "#9EC043" },
                      { value: 15, max: 100, fill: "rgba(255,255,255,0.2)" }
                    ]}
                    startAngle={180}
                    endAngle={0}
                    innerRadius={40}
                    outerRadius={80}
                  >
                    <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                      <Label
                        content={({ viewBox }) => {
                          if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                            return (
                              <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                                <tspan
                                  x={viewBox.cx}
                                  y={(viewBox.cy || 0) + 8}
                                  className="fill-white text-xl font-bold"
                                >
                                  85
                                </tspan>
                                <tspan
                                  x={viewBox.cx}
                                  y={(viewBox.cy || 0) + 25}
                                  className="fill-gray-400 text-sm"
                                >
                                  Manutenções
                                </tspan>
                              </text>
                            )
                          }
                        }}
                      />
                    </PolarRadiusAxis>
                    <RadialBar
                      dataKey="value"
                      cornerRadius={20}
                      fill="#9EC043"
                      strokeWidth={25}
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
              
              <Wrench className="h-8 w-8 text-sotkis-green mt-2" />
            </div>
          </CardContent>
        </Card>

        {/* Capacidade > 99% */}
        <Card className="bg-white/20 backdrop-blur-lg border-0 min-h-[300px] sm:min-h-[400px]">
          <CardContent className="p-6">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-center mb-4">
                <p className="text-sm text-white font-bold">Capacidade &gt; 99%</p>
                <p className="text-xs text-gray-400">de 500 total</p>
              </div>
              
              <div className="w-full flex justify-center">
                <ResponsiveContainer width="100%" height={200} className="sm:h-[300px]">
                  <RadialBarChart
                    data={[
                      { value: 480, max: 500, fill: "#9EC043" },
                      { value: 20, max: 500, fill: "rgba(255,255,255,0.2)" }
                    ]}
                    startAngle={180}
                    endAngle={0}
                    innerRadius={40}
                    outerRadius={80}
                  >
                    <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                      <Label
                        content={({ viewBox }) => {
                          if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                            return (
                              <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                                <tspan
                                  x={viewBox.cx}
                                  y={(viewBox.cy || 0) + 8}
                                  className="fill-white text-xl font-bold"
                                >
                                  480
                                </tspan>
                                <tspan
                                  x={viewBox.cx}
                                  y={(viewBox.cy || 0) + 25}
                                  className="fill-gray-400 text-sm"
                                >
                                  Contentores
                                </tspan>
                              </text>
                            )
                          }
                        }}
                      />
                    </PolarRadiusAxis>
                    <RadialBar
                      dataKey="value"
                      cornerRadius={20}
                      fill="#9EC043"
                      strokeWidth={25}
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>
              
              <Package className="h-8 w-8 text-sotkis-green mt-2" />
            </div>
          </CardContent>
        </Card>
      </div>




    </div>
  );
};

export default PerformanceDashboard; 