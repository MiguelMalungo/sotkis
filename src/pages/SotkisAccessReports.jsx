import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Plus, Search, Edit, Trash2, Eye, MoreHorizontal, User, Mail, Phone, MapPin, Calendar, Shield, CheckCircle, XCircle, Clock, AlertTriangle, Image, ArrowUpDown } from 'lucide-react';
import SubmenuBar from '../components/ui/SubmenuBar';

const SotkisAccessReports = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const submenuLinks = [
    { label: 'RFIDs', to: '/sotkis-access/rfids' },
    { label: 'Relatórios', to: '/sotkis-access/reports' },
    { label: 'Depósitos', to: '/sotkis-access/deposits' },
    { label: 'Baterias', to: '/sotkis-access/batteries' },
  ];

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
      {/* Page Header - AT THE VERY TOP */}
      <div className="page-header text-right">
        <h1 className="text-xl font-bold text-white">Relatórios</h1>
        <p className="text-gray-300 mt-1">Gestão de relatórios do Sotkis Access</p>
      </div>

      {/* SubmenuBar */}
      <SubmenuBar items={submenuLinks} />

      {/* Filters */}
      <div className="space-y-4">
        <div className="text-left mb-3">
          <h2 className="text-white text-lg font-semibold">Filtros</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start w-full filter-cards-container">
          {/* Início do Período */}
          <Card className="bg-white/10 backdrop-blur-lg border-0 flex-1">
            <CardContent className="p-4">
              <div className="space-y-1">
                <label className="text-white text-sm font-semibold">Início do Período</label>
                <Input
                  type="date"
                  value={filters.inicioPeriodo}
                  onChange={(e) => setFilters({...filters, inicioPeriodo: e.target.value})}
                  className="bg-white/10 border-white/20 text-white/90 placeholder-gray-400"
                  placeholder="dd/mm/yyyy"
                />
              </div>
            </CardContent>
          </Card>
          
          {/* Fim do Período */}
          <Card className="bg-white/10 backdrop-blur-lg border-0 flex-1">
            <CardContent className="p-4">
              <div className="space-y-1">
                <label className="text-white text-sm font-semibold">Fim do Período</label>
                <Input
                  type="date"
                  value={filters.fimPeriodo}
                  onChange={(e) => setFilters({...filters, fimPeriodo: e.target.value})}
                  className="bg-white/10 border-white/20 text-white/90 placeholder-gray-400"
                  placeholder="dd/mm/yyyy"
                />
              </div>
            </CardContent>
          </Card>
          
          {/* Departamento */}
          <Card className="bg-white/10 backdrop-blur-lg border-0 flex-1">
            <CardContent className="p-4">
              <div className="space-y-1">
                <label className="text-white text-sm font-semibold">Departamento</label>
                <Select value={filters.departamento} onValueChange={(value) => setFilters({...filters, departamento: value})}>
                  <SelectTrigger className="bg-white text-black">
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
          
          {/* Ilha */}
          <Card className="bg-white/10 backdrop-blur-lg border-0 flex-1">
            <CardContent className="p-4">
              <div className="space-y-1">
                <label className="text-white text-sm font-semibold">Ilha</label>
                <Select value={filters.ilha} onValueChange={(value) => setFilters({...filters, ilha: value})}>
                  <SelectTrigger className="bg-white text-black">
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
          
          {/* Contentor */}
          <Card className="bg-white/10 backdrop-blur-lg border-0 flex-1">
            <CardContent className="p-4">
              <div className="space-y-1">
                <label className="text-white text-sm font-semibold">Contentor</label>
                <Select value={filters.contentor} onValueChange={(value) => setFilters({...filters, contentor: value})}>
                  <SelectTrigger className="bg-white text-black">
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
          
          {/* Utilizador */}
          <Card className="bg-white/10 backdrop-blur-lg border-0 flex-1">
            <CardContent className="p-4">
              <div className="space-y-1">
                <label className="text-white text-sm font-semibold">Utilizador</label>
                <Select value={filters.utilizador} onValueChange={(value) => setFilters({...filters, utilizador: value})}>
                  <SelectTrigger className="bg-white text-black">
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
          
          {/* Rfids (Refª) */}
          <Card className="bg-white/10 backdrop-blur-lg border-0 flex-1">
            <CardContent className="p-4">
              <div className="space-y-1">
                <label className="text-white text-sm font-semibold">Rfids (Refª)</label>
                <Input
                  placeholder="Digite a referência"
                  value={filters.rfids}
                  onChange={(e) => setFilters({...filters, rfids: e.target.value})}
                  className="bg-white/10 border-white/20 text-white/90 placeholder-gray-400"
                />
              </div>
            </CardContent>
          </Card>
          
          {/* Tipo de Resíduo */}
          <Card className="bg-white/10 backdrop-blur-lg border-0 flex-1">
            <CardContent className="p-4">
              <div className="space-y-1">
                <label className="text-white text-sm font-semibold">Tipo de Resíduo</label>
                <Select value={filters.tipoResiduo} onValueChange={(value) => setFilters({...filters, tipoResiduo: value})}>
                  <SelectTrigger className="bg-white text-black">
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
      <Card className="bg-white/20 backdrop-blur-lg border-0">
        <CardContent className="p-6">
          <div className="text-center text-gray-300 py-12">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-gray-400" />
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