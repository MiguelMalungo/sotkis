import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Plus, Search, Edit, Trash2, FileText, Download, Printer, X } from 'lucide-react';

const MySotkonContentores = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [filters, setFilters] = React.useState({
    numero: '',
    departamento: '',
    ilha: ''
  });

  // Mock data for containers
  const mockContentores = [
    {
      id: 1,
      departamento: 'Aguiar da Beira',
      ilha: 'Av. dos Combatentes do Ultramar 96,',
      numero: 'AgBeira_AvCombatentesUltramar_Embal.',
      tipoResiduo: 'Plastico/Embalagens',
      tipoContentor: '3m3 dupla argola fundo 180L koncept',
      idControloAcesso: '',
      idSensorEnchimento: '',
      tipoMarco: 'Ikon (standard) 510 simples',
      eneId: ''
    },
    {
      id: 2,
      departamento: 'Aguiar da Beira',
      ilha: 'Av. dos Combatentes do Ultramar',
      numero: 'AgBeira_AvCombatentesUltramar_Papel',
      tipoResiduo: 'Papel/cartao',
      tipoContentor: '3m3 dupla argola fundo 180L',
      idControloAcesso: '',
      idSensorEnchimento: '',
      tipoMarco: 'Ikon (standard) 510',
      eneId: ''
    }
  ];

  const filteredContentores = mockContentores.filter(contentor =>
    contentor.numero.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contentor.departamento.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contentor.ilha.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    // Handle search with filters
    console.log('Searching with filters:', filters);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="page-header text-left">
        <h1 className="text-3xl font-bold text-white">Contentores</h1>
        <p className="text-gray-300 mt-1">Gestão de contentores do My Sotkon</p>
      </div>

      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Pesquisar contentores..."
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
          Novo Contentor
        </Button>
      </div>

      {/* Filters */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white">Filtros</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Número</label>
              <Input
                placeholder="Digite o número"
                value={filters.numero}
                onChange={(e) => setFilters({...filters, numero: e.target.value})}
                className="bg-white/5 border-white/10 text-white placeholder-gray-400"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Departamento</label>
              <Select value={filters.departamento} onValueChange={(value) => setFilters({...filters, departamento: value})}>
                <SelectTrigger className="bg-white/5 border-white text-white">
                  <SelectValue placeholder="Selecione departamento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Aguiar da Beira">Aguiar da Beira</SelectItem>
                  <SelectItem value="Faro">Faro</SelectItem>
                  <SelectItem value="Lisboa">Lisboa</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Ilha</label>
              <Select value={filters.ilha} onValueChange={(value) => setFilters({...filters, ilha: value})}>
                <SelectTrigger className="bg-white/5 border-white text-white">
                  <SelectValue placeholder="Selecione ilha" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Av. dos Combatentes do Ultramar 96,">Av. dos Combatentes do Ultramar 96,</SelectItem>
                  <SelectItem value="Av. dos Combatentes do Ultramar">Av. dos Combatentes do Ultramar</SelectItem>
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
                  Departamento
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Ilha
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Número
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Tipo de resíduo
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Tipo de contentor
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  ID Controlo de Acesso
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  ID Sensor de Enchimento
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Tipo de marco
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Ene Id
                  <span className="ml-1">↕</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredContentores.map((contentor) => (
                <TableRow key={contentor.id}>
                  <TableCell className="text-white">{contentor.departamento}</TableCell>
                  <TableCell className="text-white">{contentor.ilha}</TableCell>
                  <TableCell className="text-white">{contentor.numero}</TableCell>
                  <TableCell className="text-white">{contentor.tipoResiduo}</TableCell>
                  <TableCell className="text-white">{contentor.tipoContentor}</TableCell>
                  <TableCell className="text-white">{contentor.idControloAcesso || '-'}</TableCell>
                  <TableCell className="text-white">{contentor.idSensorEnchimento || '-'}</TableCell>
                  <TableCell className="text-white">{contentor.tipoMarco}</TableCell>
                  <TableCell className="text-white">{contentor.eneId || '-'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default MySotkonContentores; 