import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Calendar, BarChart3, TrendingUp, AlertTriangle, CheckCircle, Clock, XCircle } from 'lucide-react';

const ComplianceDashboard = () => {
  const [startDate, setStartDate] = React.useState('2025-01-01');
  const [endDate, setEndDate] = React.useState('2025-07-30');

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

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-end sm:justify-between items-start">
        <div className="space-y-2 text-right sm:text-left">
          <h1 className="text-xl font-bold text-white compliance-dashboard-title">Dashboard Compliance</h1>
          <p className="text-gray-300 mt-1">Visão geral de não-conformidades</p>
        </div>
      </div>

      {/* General Dashboard Filter */}
      <Card className="card-glass">
        <CardContent className="p-6">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-sotkis-green">Filtro geral do dashboard</h2>
            
            {/* Date Range Selection */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-white">Inicio:</label>
                <div className="relative">
                  <Input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="bg-white text-black w-40"
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-white">Fim:</label>
                <div className="relative">
                  <Input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="bg-white text-black w-40"
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>
              
              <Button 
                onClick={handleDateUpdate}
                className="bg-sotkis-green text-black hover:bg-sotkis-green/90"
              >
                Atualizar
              </Button>
            </div>

            {/* Quick Date Range Buttons */}
            <div className="flex flex-wrap gap-2">
              {[
                'Ontem', 'Hoje', '1 semana', '1 mês', 
                '3 meses', '6 meses', '1 ano', 'Inicio do ano até hoje'
              ].map((range) => (
                <Button
                  key={range}
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickDate(range)}
                  className="bg-gray-200 text-gray-700 hover:bg-gray-300 border-gray-300 text-xs sm:text-sm"
                >
                  {range}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Statistics Cards */}
      
      {/* Client Non-Conformity Management Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">
          GESTÃO DE NÃO-CONFORMIDADES DE CLIENTES
        </h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          <Card className="card-glass relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold text-white mb-1">{clientStats.todas}</div>
              <div className="text-sm text-gray-300">Todas</div>
            </CardContent>
          </Card>
          
          <Card className="card-glass relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold text-blue-400 mb-1">{clientStats.novas}</div>
              <div className="text-sm text-gray-300">Novas</div>
            </CardContent>
          </Card>
          
          <Card className="card-glass relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500"></div>
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold text-yellow-400 mb-1">{clientStats.emCurso}</div>
              <div className="text-sm text-gray-300">Em curso</div>
            </CardContent>
          </Card>
          
          <Card className="card-glass relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold text-green-400 mb-1">{clientStats.resolvidas}</div>
              <div className="text-sm text-gray-300">Resolvidas</div>
            </CardContent>
          </Card>
          
          <Card className="card-glass relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold text-red-400 mb-1">{clientStats.pendentes}</div>
              <div className="text-sm text-gray-300">Pendentes</div>
            </CardContent>
          </Card>
          
          <Card className="card-glass relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold text-green-500 mb-1">{clientStats.eficazes}</div>
              <div className="text-sm text-gray-300">Eficazes</div>
            </CardContent>
          </Card>
          
          <Card className="card-glass relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold text-red-500 mb-1">{clientStats.semEficacia}</div>
              <div className="text-sm text-gray-300">Sem eficácia</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Supplier Non-Conformity Management Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">
          GESTÃO DE NÃO-CONFORMIDADES DE FORNECEDORES
        </h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          <Card className="card-glass relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold text-white mb-1">{supplierStats.todas}</div>
              <div className="text-sm text-gray-300">Todas</div>
            </CardContent>
          </Card>
          
          <Card className="card-glass relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold text-blue-400 mb-1">{supplierStats.novas}</div>
              <div className="text-sm text-gray-300">Novas</div>
            </CardContent>
          </Card>
          
          <Card className="card-glass relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500"></div>
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold text-yellow-400 mb-1">{supplierStats.emCurso}</div>
              <div className="text-sm text-gray-300">Em curso</div>
            </CardContent>
          </Card>
          
          <Card className="card-glass relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold text-green-400 mb-1">{supplierStats.resolvidas}</div>
              <div className="text-sm text-gray-300">Resolvidas</div>
            </CardContent>
          </Card>
          
          <Card className="card-glass relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold text-red-400 mb-1">{supplierStats.pendentes}</div>
              <div className="text-sm text-gray-300">Pendentes</div>
            </CardContent>
          </Card>
          
          <Card className="card-glass relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold text-green-500 mb-1">{supplierStats.eficazes}</div>
              <div className="text-sm text-gray-300">Eficazes</div>
            </CardContent>
          </Card>
          
          <Card className="card-glass relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
            <CardContent className="p-4 text-center">
              <div className="text-xl font-bold text-red-500 mb-1">{supplierStats.semEficacia}</div>
              <div className="text-sm text-gray-300">Sem eficácia</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Filters Section */}
      <Card className="card-glass">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Filtros</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Não-conformidades de</label>
              <Select defaultValue="clientes-fornecedores">
                <SelectTrigger className="bg-white border-white text-black">
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
                <SelectTrigger className="bg-white border-white text-black">
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
                <SelectTrigger className="bg-white border-white text-black">
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
                <SelectTrigger className="bg-white border-white text-black">
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
                <SelectTrigger className="bg-white border-white text-black">
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
                <SelectTrigger className="bg-white border-white text-black">
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