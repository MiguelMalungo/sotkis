import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Calendar, BarChart3, TrendingUp, AlertTriangle, CheckCircle, Clock, XCircle } from 'lucide-react';
import SubmenuBar from '../components/ui/SubmenuBar';

const ComplianceDashboard = () => {
  const [startDate, setStartDate] = useState('2025-01-01');
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsLightMode(document.body.classList.contains('light-theme'));
    };
    
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);
  const [endDate, setEndDate] = useState('2025-07-30');

  // Mock statistics data
  const clientStats = {
    todas: 5,
    novas: 0,
    emCurso: 1,
    resolvidas: 4,
    pendentes: 0,
    eficazes: 0,
    semEficacia: 0
  };

  const supplierStats = {
    todas: 2,
    novas: 0,
    emCurso: 1,
    resolvidas: 1,
    pendentes: 0,
    eficazes: 0,
    semEficacia: 0
  };

  const handleDateUpdate = () => {
    console.log('Updating dashboard with date range:', startDate, 'to', endDate);
  };

  const handleQuickDate = (range) => {
    console.log('Quick date selected:', range);
    // Here you would implement the logic to set the appropriate date range
  };

  const submenuLinks = [
    { label: 'Clientes', to: '/compliance/clients' },
    { label: 'Fornecedores', to: '/compliance/suppliers' },
    { label: 'Dashboard', to: '/compliance/dashboard' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header - AT THE VERY TOP */}
      <div className="page-header text-right">
        <h1 className="text-xl font-bold text-white">Dashboard de Conformidade</h1>
        <p className="text-gray-300 mt-1">Visão geral da conformidade do sistema</p>
      </div>

      {/* SubmenuBar */}
      <SubmenuBar items={submenuLinks} />

      {/* Filters */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Filtros</h3>
        
        {/* Date filters in a grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-white/10 backdrop-blur-lg border-0">
            <CardContent className="p-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Início do Período</label>
                <Input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="bg-white/10 border-white/20 text-white/90 placeholder-gray-400"
                  placeholder="dd/mm/yyyy"
                />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border-0">
            <CardContent className="p-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Fim do Período</label>
                <Input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="bg-white/10 border-white/20 text-white/90 placeholder-gray-400"
                  placeholder="dd/mm/yyyy"
                />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border-0">
            <CardContent className="p-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Atualizar</label>
                <Button 
                  onClick={handleDateUpdate}
                  className="bg-sotkis-green text-black hover:bg-sotkis-green/90 w-full"
                >
                  Atualizar
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border-0">
            <CardContent className="p-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Períodos Rápidos</label>
                <div className="flex flex-wrap gap-2">
                  <Button 
                    onClick={() => handleQuickDate('today')}
                    variant="outline" 
                    size="sm"
                    className="text-xs bg-white/10 border-white/20 text-white/90 hover:bg-white/20"
                  >
                    Hoje
                  </Button>
                  <Button 
                    onClick={() => handleQuickDate('week')}
                    variant="outline" 
                    size="sm"
                    className="text-xs bg-white/10 border-white/20 text-white/90 hover:bg-white/20"
                  >
                    Esta Semana
                  </Button>
                  <Button 
                    onClick={() => handleQuickDate('month')}
                    variant="outline" 
                    size="sm"
                    className="text-xs bg-white/10 border-white/20 text-white/90 hover:bg-white/20"
                  >
                    Este Mês
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Statistics Cards */}
      
      {/* Main Dashboard Content */}
      <Card className="bg-white/10 backdrop-blur-lg border-0">
        <CardHeader>
          <CardTitle className="text-white">Visão Geral da Conformidade</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Clientes</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Total de casos:</span>
                  <span className="text-white font-medium">{clientStats.todas}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Em curso:</span>
                  <span className="text-yellow-400 font-medium">{clientStats.emCurso}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Resolvidos:</span>
                  <span className="text-green-400 font-medium">{clientStats.resolvidas}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Fornecedores</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Total de casos:</span>
                  <span className="text-white font-medium">{supplierStats.todas}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Em curso:</span>
                  <span className="text-yellow-400 font-medium">{supplierStats.emCurso}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Resolvidos:</span>
                  <span className="text-green-400 font-medium">{supplierStats.resolvidas}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Client Non-Conformity Management Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">
          GESTÃO DE NÃO-CONFORMIDADES DE CLIENTES
        </h3>
        
        {/* Client Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          <Card className="bg-white/10 backdrop-blur-lg border-0 relative overflow-hidden">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-white">{clientStats.todas}</div>
              <div className="text-sm text-gray-300">Total</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border-0 relative overflow-hidden">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-white">{clientStats.novas}</div>
              <div className="text-sm text-gray-300">Novas</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border-0 relative overflow-hidden">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-white">{clientStats.emCurso}</div>
              <div className="text-sm text-gray-300">Em Curso</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border-0 relative overflow-hidden">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-white">{clientStats.resolvidas}</div>
              <div className="text-sm text-gray-300">Resolvidas</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border-0 relative overflow-hidden">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-white">{clientStats.pendentes}</div>
              <div className="text-sm text-gray-300">Pendentes</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border-0 relative overflow-hidden">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-white">{clientStats.eficazes}</div>
              <div className="text-sm text-gray-300">Eficazes</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border-0 relative overflow-hidden">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-white">{clientStats.semEficacia}</div>
              <div className="text-sm text-gray-300">Sem Eficácia</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Supplier Non-Conformity Management Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">
          GESTÃO DE NÃO-CONFORMIDADES DE FORNECEDORES
        </h3>
        
        {/* Supplier Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          <Card className="bg-white/10 backdrop-blur-lg border-0 relative overflow-hidden">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-white">{supplierStats.todas}</div>
              <div className="text-sm text-gray-300">Total</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border-0 relative overflow-hidden">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-white">{supplierStats.novas}</div>
              <div className="text-sm text-gray-300">Novas</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border-0 relative overflow-hidden">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-white">{supplierStats.emCurso}</div>
              <div className="text-sm text-gray-300">Em Curso</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border-0 relative overflow-hidden">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-white">{supplierStats.resolvidas}</div>
              <div className="text-sm text-gray-300">Resolvidas</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border-0 relative overflow-hidden">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-white">{supplierStats.pendentes}</div>
              <div className="text-sm text-gray-300">Pendentes</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border-0 relative overflow-hidden">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-white">{supplierStats.eficazes}</div>
              <div className="text-sm text-gray-300">Eficazes</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border-0 relative overflow-hidden">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-white">{supplierStats.semEficacia}</div>
              <div className="text-sm text-gray-300">Sem Eficácia</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Filters Section */}
      <Card className="bg-white/20 backdrop-blur-lg border-0">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Filtros</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Não-conformidades de</label>
              <Select defaultValue="clientes-fornecedores">
                    <SelectTrigger className={`${
                      isLightMode 
                        ? 'bg-sotkis-green/20 border-sotkis-green/40 text-gray-900' 
                        : 'bg-white text-black'
                    }`}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="clientes-fornecedores">Clientes/Fornecedore</SelectItem>
                  <SelectItem value="clientes">Clientes</SelectItem>
                  <SelectItem value="fornecedores">Fornecedores</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Ano</label>
              <Select defaultValue="todos">
                    <SelectTrigger className={`${
                      isLightMode 
                        ? 'bg-sotkis-green/20 border-sotkis-green/40 text-gray-900' 
                        : 'bg-white text-black'
                    }`}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos</SelectItem>
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Tipo</label>
              <Select defaultValue="todos">
                    <SelectTrigger className={`${
                      isLightMode 
                        ? 'bg-sotkis-green/20 border-sotkis-green/40 text-gray-900' 
                        : 'bg-white text-black'
                    }`}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos</SelectItem>
                  <SelectItem value="grave">Grave</SelectItem>
                  <SelectItem value="pouco-grave">Pouco grave</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Estado</label>
              <Select defaultValue="todos">
                    <SelectTrigger className={`${
                      isLightMode 
                        ? 'bg-sotkis-green/20 border-sotkis-green/40 text-gray-900' 
                        : 'bg-white text-black'
                    }`}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos</SelectItem>
                  <SelectItem value="resolvida">Resolvida</SelectItem>
                  <SelectItem value="em-curso">Em curso</SelectItem>
                  <SelectItem value="pendente">Pendente</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Responsável</label>
              <Select defaultValue="todos">
                    <SelectTrigger className={`${
                      isLightMode 
                        ? 'bg-sotkis-green/20 border-sotkis-green/40 text-gray-900' 
                        : 'bg-white text-black'
                    }`}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos</SelectItem>
                  <SelectItem value="nuno-silva">Nuno Silva</SelectItem>
                  <SelectItem value="ana-rita">Ana Rita Saraiva</SelectItem>
                  <SelectItem value="nelson-simao">Nelson Simão</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Avaliação de Eficácia</label>
              <Select defaultValue="todos">
                    <SelectTrigger className={`${
                      isLightMode 
                        ? 'bg-sotkis-green/20 border-sotkis-green/40 text-gray-900' 
                        : 'bg-white text-black'
                    }`}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos</SelectItem>
                  <SelectItem value="eficaz">Eficaz</SelectItem>
                  <SelectItem value="sem-eficacia">Sem eficácia</SelectItem>
                  <SelectItem value="em-avaliacao">Em avaliação</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComplianceDashboard;