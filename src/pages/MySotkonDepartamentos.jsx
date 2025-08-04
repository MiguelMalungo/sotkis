import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Plus, Search, Edit, Trash2, FileText, Download, Printer, X } from 'lucide-react';

const MySotkonDepartamentos = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [filters, setFilters] = React.useState({
    nome: '',
    departamento: 'Todos'
  });

  // Mock data for departments
  const mockDepartamentos = [
    {
      id: 1,
      nome: 'Aguiar da Beira',
      nif: '506 809 307',
      email: 'geral@cm-aguiardabeira.pt',
      codigoRegiao: '3570',
      estado: 'Ativo',
      customerIdEnevo: '',
      customerIdDigi: ''
    },
    {
      id: 2,
      nome: 'Albergaria-a-Velha',
      nif: '0',
      email: 'info@cm-albergaria.pt',
      codigoRegiao: '',
      estado: 'Ativo',
      customerIdEnevo: '',
      customerIdDigi: ''
    },
    {
      id: 3,
      nome: 'Albufeira',
      nif: '000',
      email: 'filipe.andre@cm-albufeira.pt',
      codigoRegiao: '1234567',
      estado: 'Ativo',
      customerIdEnevo: '153300',
      customerIdDigi: ''
    },
    {
      id: 4,
      nome: 'Albufeira - Eden Resort',
      nif: '510486193',
      email: 'info@edenresort.pt',
      codigoRegiao: '8200',
      estado: 'Ativo',
      customerIdEnevo: '0',
      customerIdDigi: '0'
    }
  ];

  const filteredDepartamentos = mockDepartamentos.filter(departamento =>
    departamento.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    departamento.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    departamento.nif.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    // Handle search with filters
    console.log('Searching with filters:', filters);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="page-header text-left">
        <h1 className="text-xl font-bold text-white">Departamentos</h1>
        <p className="text-gray-300 mt-1">Gestão de departamentos do My Sotkon</p>
      </div>

      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Pesquisar departamentos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white/5 border-white/10 text-white placeholder-gray-400"
          />
        </div>
        <Button
          onClick={() => setShowCreateModal(true)}
          className="bg-sotkis-green hover:bg-sotkis-green/90 text-black font-semibold"
        >
          <Plus className="w-4 h-4 mr-2" />
          Novo Departamento
        </Button>
      </div>

      {/* Filters */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white">Filtros</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Nome</label>
              <Input
                placeholder="Digite o nome"
                value={filters.nome}
                onChange={(e) => setFilters({...filters, nome: e.target.value})}
                className="bg-white/5 border-white/10 text-white placeholder-gray-400"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Departamento</label>
              <Select value={filters.departamento} onValueChange={(value) => setFilters({...filters, departamento: value})}>
                <SelectTrigger className="bg-white/5 border-white text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Todos">Todos</SelectItem>
                  <SelectItem value="Aguiar da Beira">Aguiar da Beira</SelectItem>
                  <SelectItem value="Albergaria-a-Velha">Albergaria-a-Velha</SelectItem>
                  <SelectItem value="Albufeira">Albufeira</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleSearch} className="bg-sotkis-green text-black hover:bg-sotkis-green/90">
              Pesquisar
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Table Controls */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-white">Mostrar</span>
          <Select defaultValue="10">
            <SelectTrigger className="w-20 bg-white/5 border-white text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-sm text-white">registos</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm text-white">Procurar:</span>
          <Input
            placeholder="Pesquisar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64 bg-white/5 border-white/10 text-white placeholder-gray-400"
          />
        </div>
      </div>

      {/* Table */}
      <Card className="card-glass">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="cursor-pointer text-white">
                  Nome
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  NIF
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Email
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Código de região
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Estado
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Customer Id (Enevo Api)
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Customer Id (Digi eGate Api)
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="w-20 text-white">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDepartamentos.map((departamento) => (
                <TableRow key={departamento.id}>
                  <TableCell className="text-white">{departamento.nome}</TableCell>
                  <TableCell className="text-white">{departamento.nif}</TableCell>
                  <TableCell className="text-white">{departamento.email}</TableCell>
                  <TableCell className="text-white">{departamento.codigoRegiao || '-'}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-white">{departamento.estado}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-white">{departamento.customerIdEnevo || '-'}</TableCell>
                  <TableCell className="text-white">{departamento.customerIdDigi || '-'}</TableCell>
                  <TableCell>
                    <div className="flex space-x-1">
                      <Button variant="outline" size="icon" className="h-8 w-8 border-white/20 text-white hover:bg-white/10">
                        <Plus className="h-4 w-4 text-sotkis-green" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8 border-white/20 text-white hover:bg-white/10">
                        <Edit className="h-4 w-4 text-sotkis-green" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default MySotkonDepartamentos; 