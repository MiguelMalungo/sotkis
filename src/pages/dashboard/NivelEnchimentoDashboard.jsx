import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectOption } from '@/components/ui/select';
import { TrendingUp, TrendingDown, Filter, BarChart3, ArrowLeft } from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line
} from 'recharts';
import { timePresets, departments } from '@/data/mockData';

const NivelEnchimentoDashboard = () => {
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState('month');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  // Mock data for charts
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
          <h1 className="text-xl md:text-2xl font-bold text-white">Dashboard - Nível de Enchimento</h1>
          <p className="text-gray-300 mt-1">Visão geral do nível de enchimento dos contentores</p>
        </div>
      </div>

      {/* Back Button and Filters */}
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-4 items-start lg:items-center">
        <div className="flex items-center space-x-4">
          <Button 
            onClick={() => navigate('/dashboard/operacao')}
            className="bg-sotkis-green hover:bg-sotkis-green/90 text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
        </div>
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

      {/* Charts - Second Row - One per row */}
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
              <Bar dataKey="indiferenciado" fill="#9EC043" name="Zona Norte" radius={[4, 4, 0, 0]} />
              <Bar dataKey="papelCartao" fill="#4FA9F7" name="Zona Sul" radius={[4, 4, 0, 0]} />
              <Bar dataKey="plasticoEmbalagens" fill="#FFD700" name="Zona Este" radius={[4, 4, 0, 0]} />
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
  );
};

export default NivelEnchimentoDashboard; 