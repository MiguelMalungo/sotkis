import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, TrendingUp, Users, AlertTriangle } from 'lucide-react';

const OperacaoDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
        <div className="text-left">
          <h1 className="text-xl md:text-2xl font-bold text-white">Dashboard - Operação</h1>
          <p className="text-gray-300 mt-1">Selecione uma área para visualizar</p>
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* DEPOSIÇÕES */}
        <Card 
          className="bg-white/10 backdrop-blur-lg border-0 cursor-pointer hover:bg-white/20 transition-all duration-200"
          onClick={() => navigate('/dashboard/deposicoes')}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-sotkis-green/20 rounded-lg">
                <BarChart3 className="h-8 w-8 text-sotkis-green" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">DEPOSIÇÕES</h3>
            <p className="text-gray-300 text-sm">Visão geral das deposições do sistema</p>
          </CardContent>
        </Card>

        {/* NÍVEL DE ENCHIMENTO */}
        <Card 
          className="bg-white/10 backdrop-blur-lg border-0 cursor-pointer hover:bg-white/20 transition-all duration-200"
          onClick={() => navigate('/dashboard/nivel-enchimento')}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <TrendingUp className="h-8 w-8 text-blue-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">NÍVEL DE ENCHIMENTO</h3>
            <p className="text-gray-300 text-sm">Monitorização do nível de enchimento</p>
          </CardContent>
        </Card>

        {/* GESTÃO DE MANUTENÇÕES */}
        <Card 
          className="bg-white/10 backdrop-blur-lg border-0 cursor-pointer hover:bg-white/20 transition-all duration-200"
          onClick={() => navigate('/dashboard/gestao-manutencoes')}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-yellow-500/20 rounded-lg">
                <AlertTriangle className="h-8 w-8 text-yellow-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">GESTÃO DE MANUTENÇÕES</h3>
            <p className="text-gray-300 text-sm">Controlo de manutenções e intervenções</p>
          </CardContent>
        </Card>

        {/* RECOMPENSAS */}
        <Card 
          className="bg-white/10 backdrop-blur-lg border-0 cursor-pointer hover:bg-white/20 transition-all duration-200"
          onClick={() => navigate('/dashboard/recompensas')}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <Users className="h-8 w-8 text-purple-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">RECOMPENSAS</h3>
            <p className="text-gray-300 text-sm">Sistema de recompensas e gamificação</p>
          </CardContent>
        </Card>

        {/* GESTÃO DE ROTAS */}
        <Card 
          className="bg-white/10 backdrop-blur-lg border-0 cursor-pointer hover:bg-white/20 transition-all duration-200"
          onClick={() => navigate('/dashboard/gestao-rotas')}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-500/20 rounded-lg">
                <BarChart3 className="h-8 w-8 text-green-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">GESTÃO DE ROTAS</h3>
            <p className="text-gray-300 text-sm">Planeamento e execução de rotas</p>
          </CardContent>
        </Card>

        {/* PERFORMANCE */}
        <Card 
          className="bg-white/10 backdrop-blur-lg border-0 cursor-pointer hover:bg-white/20 transition-all duration-200"
          onClick={() => navigate('/dashboard/performance')}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-red-500/20 rounded-lg">
                <TrendingUp className="h-8 w-8 text-red-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">PERFORMANCE</h3>
            <p className="text-gray-300 text-sm">Métricas de performance e indicadores</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OperacaoDashboard; 