import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Plus, Search, Edit, Trash2, FileText, Download } from 'lucide-react';
import SubmenuBar from '../components/ui/SubmenuBar';

const SotkisAccessRfids = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [showCreateForm, setShowCreateForm] = React.useState(false);
  const [filters, setFilters] = React.useState({
    utilizadores: 'Todos',
    departamento: 'Todos',
    rfids: '',
    estado: 'Todos'
  });

  // Mock data for RFIDs
  const mockRfids = [
    {
      id: 1,
      rfid: 'RFID-001',
      utilizador: 'João Silva',
      departamento: 'Faro',
      estado: 'Ativo',
      dataCriacao: '2024-01-15'
    },
    {
      id: 2,
      rfid: 'RFID-002',
      utilizador: 'Maria Santos',
      departamento: 'Lisboa',
      estado: 'Ativo',
      dataCriacao: '2024-01-20'
    },
    {
      id: 3,
      rfid: 'RFID-003',
      utilizador: 'Pedro Costa',
      departamento: 'Porto',
      estado: 'Inativo',
      dataCriacao: '2024-02-01'
    }
  ];

  const filteredRfids = mockRfids.filter(rfid =>
    rfid.rfid.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rfid.utilizador.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rfid.departamento.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    console.log('Searching with filters:', filters);
  };

  const submenuLinks = [
    { label: 'RFIDs', to: '/sotkis-access/rfids' },
    { label: 'Relatórios', to: '/sotkis-access/reports' },
    { label: 'Depósitos', to: '/sotkis-access/deposits' },
    { label: 'Baterias', to: '/sotkis-access/batteries' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-end md:justify-start items-start">
        <div className="space-y-2 text-right md:text-left">
          <h1 className="text-xl font-bold text-white">Lista de RFIDs</h1>
          <p className="text-gray-300 mt-1">Gestão de RFIDs do sistema</p>
        </div>
      </div>

      {/* SubmenuBar */}
      <SubmenuBar items={submenuLinks} />

      {/* Filters */}
      <div className="space-y-4">
        <div className="text-left mb-3">
          <h2 className="text-white text-lg font-semibold">Filtros</h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 items-start w-full filter-cards-container">
          {/* Utilizadores */}
          <Card className="bg-white/10 backdrop-blur-lg border-0 flex-1">
            <CardContent className="p-4">
              <div className="space-y-1">
                <label className="text-white text-sm font-semibold">Utilizadores</label>
                <Select value={filters.utilizadores} onValueChange={(value) => setFilters({...filters, utilizadores: value})}>
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
          
          {/* Departamento */}
          <Card className="bg-white/10 backdrop-blur-lg border-0 flex-1">
            <CardContent className="p-4">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-white">Departamento</label>
                <Select value={filters.departamento} onValueChange={(value) => setFilters({...filters, departamento: value})}>
                  <SelectTrigger className="bg-white text-black">
                    <SelectValue placeholder="Selecione departamento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Todos">Todos</SelectItem>
                    <SelectItem value="Faro">Faro</SelectItem>
                    <SelectItem value="Lisboa">Lisboa</SelectItem>
                    <SelectItem value="Porto">Porto</SelectItem>
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
          
          {/* Estado */}
          <Card className="bg-white/10 backdrop-blur-lg border-0 flex-1">
            <CardContent className="p-4">
              <div className="space-y-1">
                <label className="text-white text-sm font-semibold">Estado</label>
                <Select value={filters.estado} onValueChange={(value) => setFilters({...filters, estado: value})}>
                  <SelectTrigger className="bg-white text-black">
                    <SelectValue placeholder="Selecione estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Todos">Todos</SelectItem>
                    <SelectItem value="Ativo">Ativo</SelectItem>
                    <SelectItem value="Inativo">Inativo</SelectItem>
                    <SelectItem value="Bloqueado">Bloqueado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
          
          {/* Search Button */}
          <div className="flex items-start pt-6">
            <Button onClick={handleSearch} className="bg-sotkis-green text-black hover:bg-sotkis-green/90 h-10 px-4 transition-transform duration-200 hover:scale-105 sm:h-[66px] sm:w-[66px] sm:p-0 sm:hover:scale-110">
              <Search className="w-4 h-4 sm:w-9 sm:h-9 mr-2 sm:mr-0" />
              <span className="sm:hidden">Pesquisar</span>
            </Button>
          </div>
        </div>
        
        {/* New RFID Button */}
        <div className="flex justify-center">
          <Button 
            onClick={() => setShowCreateForm(true)}
            className="bg-sotkis-green text-black hover:bg-sotkis-green/90"
          >
            <Plus className="w-4 h-4 mr-2" />
            Nova RFID
          </Button>
        </div>
      </div>

      {/* Results Area */}
      <Card className="bg-white/20 backdrop-blur-lg border-0">
        <CardContent className="p-6">
          <div className="text-center text-gray-300 py-12">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <p>Nenhum resultado encontrado. Aplique os filtros para visualizar os RFIDs.</p>
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

export default SotkisAccessRfids;