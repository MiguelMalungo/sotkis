import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectOption } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  Gift, Users, TrendingUp, TrendingDown, Search, Filter, ArrowLeft,
  BarChart3, Star, Award, Target, Calendar
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area
} from 'recharts';
import SubmenuBar from '../../components/ui/SubmenuBar';

const RecompensasDashboard = () => {
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState('month');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [startDate, setStartDate] = useState('2025-07-28');
  const [endDate, setEndDate] = useState('2025-08-04');

  const submenuLinks = [
    { label: 'Deposições', to: '/dashboard/deposicoes' },
    { label: 'Nível de Enchimento', to: '/dashboard/nivel-enchimento' },
    { label: 'Gestão de Manutenções', to: '/dashboard/gestao-manutencoes' },
    { label: 'Recompensas', to: '/dashboard/recompensas' },
    { label: 'Gestão de Rotas', to: '/dashboard/gestao-rotas' },
    { label: 'Performance', to: '/dashboard/performance' },
  ];

  // Custom tooltip for charts
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div 
          className="bg-black/90 backdrop-blur-lg border border-white/20 rounded-lg p-3 text-white"
          style={{ zIndex: 1 }}
        >
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
        <h1 className="text-xl font-bold text-white">Dashboard de Recompensas</h1>
        <p className="text-gray-300 mt-1">Sistema de recompensas e gamificação</p>
      </div>

      {/* Voltar Button - Mobile Only */}
      <div className="flex justify-start md:hidden">
                  <Button 
            onClick={() => window.history.back()}
            className="bg-sotkis-green hover:bg-sotkis-green/90 text-white font-semibold"
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
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-bold text-white">Filtro geral do dashboard</h2>
        </div>
        
        {/* Date Range and Update Button */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <label className="text-white font-medium text-sm">Início:</label>
            <Input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="bg-white/10 border-white/20 text-white w-full sm:w-40 text-left"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <label className="text-white font-medium text-sm">Fim:</label>
            <Input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="bg-white/10 border-white/20 text-white w-full sm:w-40 text-left"
            />
          </div>
          <Button className="bg-sotkis-green hover:bg-sotkis-green/90 text-black">
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
        <Card className="bg-white/20 backdrop-blur-lg border-0">
          <CardContent className="p-4 text-center">
            <p className="text-sm text-gray-300 mb-2">Total</p>
            <p className="text-xl font-bold text-white">326</p>
          </CardContent>
        </Card>

        <Card className="bg-white/20 backdrop-blur-lg border-0">
          <CardContent className="p-4 text-center">
            <p className="text-sm text-gray-300 mb-2">Converted</p>
            <p className="text-xl font-bold text-white">215</p>
          </CardContent>
        </Card>

        <Card className="bg-white/20 backdrop-blur-lg border-0">
          <CardContent className="p-4 text-center">
            <p className="text-sm text-gray-300 mb-2">Wrong</p>
            <p className="text-xl font-bold text-white">110</p>
          </CardContent>
        </Card>
      </div>

      {/* Line Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* RECOMPENSAS ATRIBUIDAS Chart */}
        <Card className="bg-white/20 backdrop-blur-lg border-0">
          <CardHeader>
            <CardTitle className="text-white">Recompensas Atribuídas</CardTitle>
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
        <Card className="bg-white/20 backdrop-blur-lg border-0">
          <CardHeader>
            <CardTitle className="text-white">Recompensas Convertidas</CardTitle>
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
      <Card className="bg-white/20 backdrop-blur-lg border-0">
        <CardHeader>
          <CardTitle className="text-white">Recompensas Atribuídas por Tipo de Resíduo</CardTitle>
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
              <Bar dataKey="Indiferenciado" fill="#9EC043" name="Indiferenciado" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Papel/Cartão" fill="#4FA9F7" name="Papel/Cartão" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Plástico/Embalagens" fill="#FFD700" name="Plástico/Embalagens" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Area Chart - RECOMPENSAS ATRIBUIDAS POR TIPO DE EMBALAGEM DRS */}
      <Card className="bg-white/20 backdrop-blur-lg border-0">
        <CardHeader>
          <CardTitle className="text-white">Recompensas Atribuídas por Tipo de Embalagem DRS</CardTitle>
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
      <Card className="bg-white/20 backdrop-blur-lg border-0">
        <CardHeader>
          <CardTitle className="text-white">Deposições Corretas vs Incorretas</CardTitle>
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
              <Bar dataKey="Correct" stackId="1" fill="#22C55E" fillOpacity={0.6} radius={[0, 0, 8, 8]} zIndex={10} />
              <Bar dataKey="Wrong" stackId="1" fill="#DC2626" fillOpacity={0.6} radius={[8, 8, 0, 0]} zIndex={10} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* TOP DE RECOMPENSAS CONVERTIDAS */}
      <Card className="bg-white/20 backdrop-blur-lg border-0">
        <CardHeader>
          <CardTitle className="text-white">Top de Recompensas Convertidas</CardTitle>
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
    </div>
  );
};

export default RecompensasDashboard;