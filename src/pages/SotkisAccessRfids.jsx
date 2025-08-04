import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Plus, Search, Edit, Trash2, FileText, Download, Printer, ChevronDown } from 'lucide-react';

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

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-semibold text-white">Criar novo RFID</h2>
            <ChevronDown className="h-4 w-4 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white">Lista de RFIDs</h1>
          <p className="text-gray-300 mt-1">Gestão de RFIDs do sistema</p>
        </div>
        
        {/* Export/Print Icon */}
        <Button 
          variant="sotkis"
          size="icon" 
          className="hover:bg-white hover:text-sotkis-green hover:border-sotkis-green group"
        >
          <Printer className="h-4 w-4 group-hover:text-sotkis-green" />
        </Button>
      </div>

      {/* Filters */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Filtros</h3>
        
        {/* All 4 filters in one line */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="card-glass">
            <CardContent className="p-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Utilizadores</label>
                <Select value={filters.utilizadores} onValueChange={(value) => setFilters({...filters, utilizadores: value})}>
                  <SelectTrigger className="bg-white border-white text-black">
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
                <label className="text-sm font-medium text-white">Departamento</label>
                <Select value={filters.departamento} onValueChange={(value) => setFilters({...filters, departamento: value})}>
                  <SelectTrigger className="bg-white border-white text-black">
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
          
          <Card className="card-glass">
            <CardContent className="p-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Rfids (Refª)</label>
                <Input
                  placeholder="Digite a referência"
                  value={filters.rfids}
                  onChange={(e) => setFilters({...filters, rfids: e.target.value})}
                  className="bg-white border-white text-black placeholder-gray-600"
                />
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-glass">
            <CardContent className="p-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Estado</label>
                <Select value={filters.estado} onValueChange={(value) => setFilters({...filters, estado: value})}>
                  <SelectTrigger className="bg-white border-white text-black">
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
        </div>
        
        {/* Pesquisar button aligned to the right */}
        <div className="flex justify-end">
          <Button onClick={handleSearch} className="bg-sotkis-green text-black hover:bg-sotkis-green/90">
            Pesquisar
          </Button>
        </div>
      </div>

      {/* Results Area */}
      <Card className="card-glass">
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