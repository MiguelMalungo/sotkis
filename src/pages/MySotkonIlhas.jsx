import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Plus, Search, Edit, Trash2, Info, FileText, Download, Printer, X } from 'lucide-react';

const MySotkonIlhas = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [filters, setFilters] = React.useState({
    descricaoGeografica: '',
    departamento: 'Faro-PT 999990004'
  });

  // Mock data for islands
  const mockIlhas = [
    {
      id: 1,
      departamento: 'Faro-PT 999990004',
      descricaoGeografica: '10001 - Prç Alex Herculano Jrd da Alagoa',
      numero: '10001 - Prç Alex Herculano Jrd da Alagoa',
      morada: 'Praça Alexandre Herculano, Jardim da Alagoa',
      dataInstalacao: '2024-01-15',
      controloFinal: 0
    },
    {
      id: 2,
      departamento: 'Faro-PT 999990004',
      descricaoGeografica: '10002 - Prç Alex Herculano Jrd da Alagoa Quiosque',
      numero: '10002 - Prç Alex Herculano Jrd da Alagoa Quiosque',
      morada: 'Praça Alexandre Herculano, Jardim da Alagoa Quiosque',
      dataInstalacao: '2024-01-20',
      controloFinal: 0
    },
    {
      id: 3,
      departamento: 'Faro-PT 999990004',
      descricaoGeografica: '10003 - Rua do Albergue jt à muralha',
      numero: '10003 - Rua do Albergue jt à muralha',
      morada: 'R. do Albergue, jt à muralha',
      dataInstalacao: '2024-02-01',
      controloFinal: 0
    }
  ];

  const filteredIlhas = mockIlhas.filter(ilha =>
    ilha.descricaoGeografica.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ilha.numero.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ilha.morada.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    // Handle search with filters
    console.log('Searching with filters:', filters);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="page-header text-left">
        <h1 className="text-3xl font-bold text-white">Ilhas</h1>
        <p className="text-gray-300 mt-1">Gestão de ilhas do My Sotkon</p>
      </div>

      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Pesquisar ilhas..."
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
          Nova Ilha
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
              <label className="text-sm font-medium text-white">Descrição geográfica</label>
              <Input
                placeholder="Digite a descrição geográfica"
                value={filters.descricaoGeografica}
                onChange={(e) => setFilters({...filters, descricaoGeografica: e.target.value})}
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
                  <SelectItem value="Faro-PT 999990004">Faro-PT 999990004</SelectItem>
                  <SelectItem value="Lisboa-PT 999990001">Lisboa-PT 999990001</SelectItem>
                  <SelectItem value="Porto-PT 999990002">Porto-PT 999990002</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleSearch} className="bg-sotkis-green text-black hover:bg-sotkis-green/90">
              Pesquisar
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Islands Table */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white">Lista de Ilhas</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-white">Departamento</TableHead>
                <TableHead className="text-white">Descrição geográfica</TableHead>
                <TableHead className="text-white">Número</TableHead>
                <TableHead className="text-white">Morada</TableHead>
                <TableHead className="text-white">Data da instalação</TableHead>
                <TableHead className="text-white">Controlo final</TableHead>
                <TableHead className="text-white">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredIlhas.map((ilha) => (
                <TableRow key={ilha.id}>
                  <TableCell className="text-white">{ilha.departamento}</TableCell>
                  <TableCell className="text-white">{ilha.descricaoGeografica}</TableCell>
                  <TableCell className="text-white">{ilha.numero}</TableCell>
                  <TableCell className="text-white">{ilha.morada}</TableCell>
                  <TableCell className="text-white">{ilha.dataInstalacao}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-white">{ilha.controloFinal}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300">
                        <Trash2 className="w-4 h-4" />
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

export default MySotkonIlhas; 