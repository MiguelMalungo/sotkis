import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { MapPin, Package, Search, ArrowUpDown, Filter, Plus, Edit, Trash2 } from 'lucide-react';

const SotkisLevelLocationsContainers = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [recordsPerPage, setRecordsPerPage] = React.useState('10');
  const [selectedType, setSelectedType] = React.useState('');

  // Mock locations and containers data
  const mockData = [
    {
      id: 'L-001',
      name: 'Centro Comercial Colombo',
      type: 'Localização',
      address: 'Av. Lusíada, 1500-392 Lisboa',
      containers: 8,
      status: 'Ativo',
      lastUpdate: '2024-01-15 14:30:00',
      department: 'Lisboa-PT 999990006'
    },
    {
      id: 'C-001',
      name: 'Contentor Orgânico COL-001',
      type: 'Contentor',
      address: 'Centro Comercial Colombo',
      capacity: '240L',
      status: 'Operacional',
      lastUpdate: '2024-01-15 14:25:00',
      department: 'Lisboa-PT 999990006'
    },
    {
      id: 'L-002',
      name: 'Mercado do Bolhão',
      type: 'Localização',
      address: 'R. Formosa, 4000-214 Porto',
      containers: 12,
      status: 'Ativo',
      lastUpdate: '2024-01-15 13:45:00',
      department: 'Porto-PT 999990008'
    },
    {
      id: 'C-002',
      name: 'Contentor Reciclável POR-001',
      type: 'Contentor',
      address: 'Mercado do Bolhão',
      capacity: '360L',
      status: 'Operacional',
      lastUpdate: '2024-01-15 13:40:00',
      department: 'Porto-PT 999990008'
    },
    {
      id: 'L-003',
      name: 'Universidade de Coimbra',
      type: 'Localização',
      address: 'R. da Universidade, 3000-455 Coimbra',
      containers: 15,
      status: 'Ativo',
      lastUpdate: '2024-01-15 12:15:00',
      department: 'Coimbra-PT 999990010'
    },
    {
      id: 'C-003',
      name: 'Contentor Indiferenciado COI-001',
      type: 'Contentor',
      address: 'Universidade de Coimbra',
      capacity: '120L',
      status: 'Manutenção',
      lastUpdate: '2024-01-15 12:10:00',
      department: 'Coimbra-PT 999990010'
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Localização':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Contentor':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Ativo':
      case 'Operacional':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Manutenção':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Inativo':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <h1 className="text-xl font-bold text-white">Locais & Contentores</h1>
          <p className="text-gray-300 mt-1">Gestão de localizações e contentores do sistema</p>
        </div>
        
        <Button className="bg-sotkis-green text-black hover:bg-sotkis-green/90">
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Novo
        </Button>
      </div>

      {/* Filters and Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-white">Tipo:</span>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-40 bg-white text-black">
                <SelectValue placeholder="Todos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Todos</SelectItem>
                <SelectItem value="localizacao">Localizações</SelectItem>
                <SelectItem value="contentor">Contentores</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-white">Mostrar:</span>
            <Select value={recordsPerPage} onValueChange={setRecordsPerPage}>
              <SelectTrigger className="w-20 bg-white text-black">
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
        </div>
        
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <span className="text-sm text-white">Procurar:</span>
          <Input
            placeholder="Pesquisar locais ou contentores..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-64 bg-white text-black placeholder-gray-600"
          />
          <Button onClick={handleSearch} className="bg-sotkis-green text-black hover:bg-sotkis-green/90">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Localizações</p>
                <p className="text-2xl font-bold text-white">156</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <Package className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Contentores</p>
                <p className="text-2xl font-bold text-white">1,247</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <Package className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Operacionais</p>
                <p className="text-2xl font-bold text-white">1,189</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-glass">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <Package className="h-6 w-6 text-yellow-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Em Manutenção</p>
                <p className="text-2xl font-bold text-white">58</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data Table */}
      <Card className="card-glass">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="cursor-pointer text-white w-24">
                  ID
                  <ArrowUpDown className="ml-1 inline h-4 w-4" />
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Nome
                  <ArrowUpDown className="ml-1 inline h-4 w-4" />
                </TableHead>
                <TableHead className="cursor-pointer text-white w-32">
                  Tipo
                  <ArrowUpDown className="ml-1 inline h-4 w-4" />
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Endereço/Localização
                  <ArrowUpDown className="ml-1 inline h-4 w-4" />
                </TableHead>
                <TableHead className="cursor-pointer text-white w-24">
                  Capacidade/Contentores
                  <ArrowUpDown className="ml-1 inline h-4 w-4" />
                </TableHead>
                <TableHead className="cursor-pointer text-white w-32">
                  Estado
                  <ArrowUpDown className="ml-1 inline h-4 w-4" />
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Departamento
                  <ArrowUpDown className="ml-1 inline h-4 w-4" />
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Última Atualização
                  <ArrowUpDown className="ml-1 inline h-4 w-4" />
                </TableHead>
                <TableHead className="text-white w-32">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="text-white font-medium w-24">{item.id}</TableCell>
                  <TableCell className="text-white font-medium">{item.name}</TableCell>
                  <TableCell className="w-32">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(item.type)}`}>
                      {item.type}
                    </span>
                  </TableCell>
                  <TableCell className="text-white">{item.address}</TableCell>
                  <TableCell className="text-white w-24">
                    {item.type === 'Contentor' ? item.capacity : `${item.containers} contentores`}
                  </TableCell>
                  <TableCell className="w-32">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-white">{item.department}</TableCell>
                  <TableCell className="text-white text-sm">{item.lastUpdate}</TableCell>
                  <TableCell className="w-32">
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-400">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-400">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-white">
          A exibir 1-6 de 6 registos
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white">
            Anterior
          </Button>
          <Button size="sm" className="bg-sotkis-green text-black hover:bg-sotkis-green/90">
            1
          </Button>
          <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white">
            Seguinte
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SotkisLevelLocationsContainers; 