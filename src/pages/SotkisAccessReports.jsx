import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Calendar, ChevronDown, Printer } from 'lucide-react';

const SotkisAccessReports = () => {
  const [filters, setFilters] = React.useState({
    inicioPeriodo: '',
    fimPeriodo: '',
    departamento: 'Todos',
    ilha: 'Todos',
    contentor: 'Todos',
    utilizador: 'Todos',
    rfids: '',
    tipoResiduo: 'Todos'
  });

  const handleSubmit = () => {
    console.log('Submitting report form data:', filters);
    // Handle report generation logic here
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-xl font-bold text-white">Relatórios</h1>
        <p className="text-gray-300 mt-1">Geração de relatórios do sistema</p>
      </div>

      {/* Filters */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Filtros</h3>
        
        {/* All 8 filters in a grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="card-glass">
            <CardContent className="p-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Início do Período</label>
                <div className="relative">
                  <Input
                    type="date"
                    value={filters.inicioPeriodo}
                    onChange={(e) => setFilters({...filters, inicioPeriodo: e.target.value})}
                    className="bg-white/5 border-white/10 text-white placeholder-gray-400 pr-10"
                    placeholder="dd/mm/yyyy"
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-sotkis-green" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-glass">
            <CardContent className="p-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Fim do Período</label>
                <div className="relative">
                  <Input
                    type="date"
                    value={filters.fimPeriodo}
                    onChange={(e) => setFilters({...filters, fimPeriodo: e.target.value})}
                    className="bg-white/5 border-white/10 text-white placeholder-gray-400 pr-10"
                    placeholder="dd/mm/yyyy"
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-sotkis-green" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-glass">
            <CardContent className="p-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Departamento</label>
                <Select value={filters.departamento} onValueChange={(value) => setFilters({...filters, departamento: value})}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white">
                    <SelectValue placeholder="Selecione departamento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Todos">Todos</SelectItem>
                    <SelectItem value="Faro">Faro</SelectItem>
                    <SelectItem value="Lisboa">Lisboa</SelectItem>
                    <SelectItem value="Porto">Porto</SelectItem>
                    <SelectItem value="Coimbra">Coimbra</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-glass">
            <CardContent className="p-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Ilha</label>
                <Select value={filters.ilha} onValueChange={(value) => setFilters({...filters, ilha: value})}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white">
                    <SelectValue placeholder="Selecione ilha" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Todos">Todos</SelectItem>
                    <SelectItem value="Ilha 1">Ilha 1 - Centro da Cidade</SelectItem>
                    <SelectItem value="Ilha 2">Ilha 2 - Jardim Municipal</SelectItem>
                    <SelectItem value="Ilha 3">Ilha 3 - Parque Industrial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-glass">
            <CardContent className="p-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Contentor</label>
                <Select value={filters.contentor} onValueChange={(value) => setFilters({...filters, contentor: value})}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white">
                    <SelectValue placeholder="Selecione contentor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Todos">Todos</SelectItem>
                    <SelectItem value="Contentor 001">Contentor 001 - Plástico</SelectItem>
                    <SelectItem value="Contentor 002">Contentor 002 - Papel</SelectItem>
                    <SelectItem value="Contentor 003">Contentor 003 - Vidro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-glass">
            <CardContent className="p-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Utilizador</label>
                <Select value={filters.utilizador} onValueChange={(value) => setFilters({...filters, utilizador: value})}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white">
                    <SelectValue placeholder="Selecione utilizador" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Todos">Todos</SelectItem>
                    <SelectItem value="João Silva">João Silva</SelectItem>
                    <SelectItem value="Maria Santos">Maria Santos</SelectItem>
                    <SelectItem value="Pedro Costa">Pedro Costa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-glass">
            <CardContent className="p-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Rfids (Refª)</label>
                <Input
                  placeholder="Digite a referência"
                  value={filters.rfids}
                  onChange={(e) => setFilters({...filters, rfids: e.target.value})}
                  className="bg-white/5 border-white/10 text-white placeholder-gray-400"
                />
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-glass">
            <CardContent className="p-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Tipo de Resíduo</label>
                <Select value={filters.tipoResiduo} onValueChange={(value) => setFilters({...filters, tipoResiduo: value})}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white">
                    <SelectValue placeholder="Selecione tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Todos">Todos</SelectItem>
                    <SelectItem value="Plastico">Plástico</SelectItem>
                    <SelectItem value="Papel">Papel</SelectItem>
                    <SelectItem value="Vidro">Vidro</SelectItem>
                    <SelectItem value="Metal">Metal</SelectItem>
                    <SelectItem value="Organico">Orgânico</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Submeter button aligned to the right */}
        <div className="flex justify-end">
          <Button onClick={handleSubmit} className="bg-sotkis-green text-black hover:bg-sotkis-green/90">
            Submeter
          </Button>
        </div>
      </div>

      {/* Results Area */}
      <Card className="card-glass">
        <CardContent className="p-6">
          <div className="text-center text-gray-300 py-12">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-sotkis-green" />
            </div>
            <p>Nenhum relatório gerado. Aplique os filtros para gerar um relatório.</p>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center text-sm text-gray-300">
        Copyright © Sotkis 2025
      </div>
    </div>
  );
};

export default SotkisAccessReports; 