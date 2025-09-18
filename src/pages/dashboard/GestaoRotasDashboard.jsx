import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import DashboardNav from '@/components/ui/DashboardNav';
import { Input } from '@/components/ui/input';
import { Select, SelectOption } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  Map, Truck, Calendar, Clock, TrendingUp, TrendingDown, Search, Filter, ArrowLeft,
  BarChart3, RefreshCw, AlertTriangle
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line
} from 'recharts';
import { kilometersData, containersCollectedData, planExecutedData, routeTimePresets } from '@/data/mockData';

const GestaoRotasDashboard = () => {
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState('month');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [startDate, setStartDate] = useState('2025-07-28');
  const [endDate, setEndDate] = useState('2025-08-04');


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
        <h1 className="text-xl font-bold text-white">Dashboard de Gestão de Rotas</h1>
        <p className="text-gray-300 mt-1">Monitorização e gestão de rotas do sistema</p>
      </div>

      <DashboardNav />

      {/* Voltar Button - Mobile Only */}
      <div className="flex justify-start md:hidden">
        <Button 
          onClick={() => window.history.back()}
          className="bg-sotkis-green hover:bg-sotkis-green/90 text-white font-semibold"
        >
          Voltar
        </Button>
      </div>

      <div className="hidden md:block">
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-4 items-start lg:items-center">
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <label className="text-white font-medium text-sm">Início:</label>
            <Input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="bg-white/10 border-white/20 text-white w-full sm:w-40"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <label className="text-white font-medium text-sm">Fim:</label>
            <Input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="bg-white/10 border-white/20 text-white w-full sm:w-40"
            />
          </div>
          <Button className="bg-sotkis-green hover:bg-sotkis-green/90 text-black">
            ATUALIZAR
          </Button>
        </div>
        
        {/* Time Preset Buttons */}
        <div className="flex flex-wrap gap-2">
          {routeTimePresets.map((preset) => (
            <Button
              key={preset}
              variant="outline"
              size="sm"
              className="text-white border-white/20 hover:bg-white/10 time-preset-btn"
            >
              {preset}
            </Button>
          ))}
        </div>
      </div>

      {/* First Row - KPI Cards with Alerts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-white/20 backdrop-blur-lg border-0">
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

        <Card className="bg-white/20 backdrop-blur-lg border-0">
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

        <Card className="bg-white/20 backdrop-blur-lg border-0">
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

        <Card className="bg-white/20 backdrop-blur-lg border-0">
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
      <Card className="bg-white/20 backdrop-blur-lg border-0">
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
              <Bar dataKey="km" fill="#9EC043" fillOpacity={0.7} radius={[8, 8, 0, 0]} zIndex={10} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* CONTENTORES RECOLHIDOS Chart */}
      <Card className="bg-white/20 backdrop-blur-lg border-0">
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
              <Bar dataKey="containers" fill="#038703" fillOpacity={0.7} radius={[8, 8, 0, 0]} zIndex={10} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* PLANO EXECUTADO Chart */}
      <Card className="bg-white/20 backdrop-blur-lg border-0">
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
              <Bar dataKey="value" fill="#4CB151" fillOpacity={0.7} radius={[8, 8, 0, 0]} zIndex={10} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default GestaoRotasDashboard;