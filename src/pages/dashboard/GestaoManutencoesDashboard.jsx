import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import DashboardNav from '@/components/ui/DashboardNav';
import { Input } from '@/components/ui/input';
import { Select, SelectOption } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  Wrench, Calendar, AlertTriangle, CheckCircle, Clock, Search, Filter, ArrowLeft,
  TrendingUp, TrendingDown, BarChart3
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';
import { timePresets, departments, maintenanceData } from '@/data/mockData';

const GestaoManutencoesDashboard = () => {
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState('month');
  const [selectedDepartment, setSelectedDepartment] = useState('all');


  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-gray-500';
    }
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
        <h1 className="text-xl font-bold text-white">Dashboard de Gestão de Manutenções</h1>
        <p className="text-gray-300 mt-1">Monitorização de manutenções do sistema</p>
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
        <Card className="bg-white/20 backdrop-blur-lg border-0">
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

        <Card className="bg-white/20 backdrop-blur-lg border-0">
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

        <Card className="bg-white/20 backdrop-blur-lg border-0">
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

        <Card className="bg-white/20 backdrop-blur-lg border-0">
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
        <Card className="bg-white/20 backdrop-blur-lg border-0 lg:col-span-2">
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
                  <TableRow key={alert.id} className="border-white/10 hover:bg-sotkis-green/20 hover:border-sotkis-green/30 transition-colors duration-200">
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
        <Card className="bg-white/20 backdrop-blur-lg border-0">
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
          <Card className="bg-white/20 backdrop-blur-lg border-0">
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
                  <TableRow className="border-white/10 hover:bg-sotkis-green/20 hover:border-sotkis-green/30 transition-colors duration-200">
                    <TableCell className="text-white">Troca de amortecedor de tampa do kit enterrado</TableCell>
                    <TableCell className="text-white">Rua Cidade Bolama</TableCell>
                    <TableCell className="text-white">Bolama</TableCell>
                    <TableCell className="text-white">3/14/2025 12:00:00 AM</TableCell>
                  </TableRow>
                  <TableRow className="border-white/10 hover:bg-sotkis-green/20 hover:border-sotkis-green/30 transition-colors duration-200">
                    <TableCell className="text-white">Problema com amortecedor</TableCell>
                    <TableCell className="text-white">Rua Nova do Desterro</TableCell>
                    <TableCell className="text-white">NovaDesterro</TableCell>
                    <TableCell className="text-white">3/13/2025 12:00:00 AM</TableCell>
                  </TableRow>
                  <TableRow className="border-white/10 hover:bg-sotkis-green/20 hover:border-sotkis-green/30 transition-colors duration-200">
                    <TableCell className="text-white">Troca de fecho de tampa</TableCell>
                    <TableCell className="text-white">Rua Nova do Desterro</TableCell>
                    <TableCell className="text-white">NovaDesterro</TableCell>
                    <TableCell className="text-white">3/12/2025 12:00:00 AM</TableCell>
                  </TableRow>
                  <TableRow className="border-white/10 hover:bg-sotkis-green/20 hover:border-sotkis-green/30 transition-colors duration-200">
                    <TableCell className="text-white">Troca de amortecedor de tampa</TableCell>
                    <TableCell className="text-white">Rua Nova do Desterro</TableCell>
                    <TableCell className="text-white">NovaDesterro</TableCell>
                    <TableCell className="text-white">3/10/2025 12:00:00 AM</TableCell>
                  </TableRow>
                  <TableRow className="border-white/10 hover:bg-sotkis-green/20 hover:border-sotkis-green/30 transition-colors duration-200">
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
          <Card className="bg-white/20 backdrop-blur-lg border-0">
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
                  <TableRow className="border-white/10 hover:bg-sotkis-green/20 hover:border-sotkis-green/30 transition-colors duration-200">
                    <TableCell className="text-white">Rua Cidade Bolama</TableCell>
                    <TableCell className="text-white">4</TableCell>
                    <TableCell className="text-white">3/14/2025 12:00:00 AM</TableCell>
                  </TableRow>
                  <TableRow className="border-white/10 hover:bg-sotkis-green/20 hover:border-sotkis-green/30 transition-colors duration-200">
                    <TableCell className="text-white">Rua Nova do Desterro</TableCell>
                    <TableCell className="text-white">5</TableCell>
                    <TableCell className="text-white">3/14/2025 12:00:00 AM</TableCell>
                  </TableRow>
                  <TableRow className="border-white/10 hover:bg-sotkis-green/20 hover:border-sotkis-green/30 transition-colors duration-200">
                    <TableCell className="text-white">Rua Cidade Bolama</TableCell>
                    <TableCell className="text-white">3</TableCell>
                    <TableCell className="text-white">3/13/2025 12:00:00 AM</TableCell>
                  </TableRow>
                  <TableRow className="border-white/10 hover:bg-sotkis-green/20 hover:border-sotkis-green/30 transition-colors duration-200">
                    <TableCell className="text-white">Rua Nova do Desterro</TableCell>
                    <TableCell className="text-white">4</TableCell>
                    <TableCell className="text-white">3/13/2025 12:00:00 AM</TableCell>
                  </TableRow>
                  <TableRow className="border-white/10 hover:bg-sotkis-green/20 hover:border-sotkis-green/30 transition-colors duration-200">
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
    </div>
  );
};

export default GestaoManutencoesDashboard;