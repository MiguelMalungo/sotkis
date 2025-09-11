import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Plus, Search, Edit, Trash2, FileText, Download, Printer, X, ChevronUp, ChevronDown, MapPin } from 'lucide-react';
import SubmenuBar from '../components/ui/SubmenuBar';

const MySotkonContentores = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [filters, setFilters] = React.useState({
    numero: '',
    departamento: '',
    ilha: ''
  });

  const submenuLinks = [
    { label: 'Manuais', to: '/my-sotkon/manuais' },
    { label: 'Departamentos', to: '/my-sotkon/departamentos' },
    { label: 'Ilhas', to: '/my-sotkon/ilhas' },
    { label: 'Contentores', to: '/my-sotkon/contentores' },
  ];

  // Mock data for containers
  const mockContentores = [
    {
      id: 1,
      departamento: 'Aguiar da Beira',
      ilha: 'Av. dos Combatentes do Ultramar 96,',
      numero: '001',
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
      numero: '002',
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
      {/* Page Header - AT THE VERY TOP */}
      <div className="page-header text-right">
        <h1 className="text-xl font-bold text-white">Contentores</h1>
        <p className="text-gray-300 mt-1">Gestão de contentores do My Sotkon</p>
      </div>

      {/* SubmenuBar */}
      <SubmenuBar items={submenuLinks} />

      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Pesquisar contentores..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white/10 border-white/20 text-white/90 placeholder-gray-400"
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
      <div className="space-y-4">
        <div className="text-left mb-3">
          <h2 className="text-white text-lg font-semibold">Filtros</h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 items-start w-full filter-cards-container">
          {/* Número */}
          <Card className="bg-white/10 backdrop-blur-lg border-0 flex-1">
            <CardContent className="p-4">
              <div className="space-y-1">
                <label className="text-white text-sm font-semibold">Número</label>
                <Input
                  placeholder="Digite o número"
                  value={filters.numero}
                  onChange={(e) => setFilters({...filters, numero: e.target.value})}
                  className="bg-white/10 border-white/20 text-white/90 placeholder-gray-400"
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
                    <SelectItem value="Aguiar da Beira">Aguiar da Beira</SelectItem>
                    <SelectItem value="Faro">Faro</SelectItem>
                    <SelectItem value="Lisboa">Lisboa</SelectItem>
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
                    <SelectItem value="Av. dos Combatentes do Ultramar 96,">Av. dos Combatentes do Ultramar 96,</SelectItem>
                    <SelectItem value="Av. dos Combatentes do Ultramar">Av. dos Combatentes do Ultramar</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
          
          {/* Pesquisar Button */}
          <div className="flex items-start pt-6">
            <Button onClick={handleSearch} className="bg-sotkis-green text-black hover:bg-sotkis-green/90 h-10 px-4 transition-transform duration-200 hover:scale-105 sm:h-[66px] sm:w-[66px] sm:p-0 sm:hover:scale-110">
              <Search className="w-4 h-4 sm:w-9 sm:h-9 mr-2 sm:mr-0" />
              <span className="sm:hidden">Pesquisar</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Table Controls */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-white">Mostrar</span>
          <Select defaultValue="10">
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
        
        <div className="flex items-center space-x-2">
          <span className="text-sm text-white">Procurar:</span>
          <Input
            placeholder="Pesquisar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64 bg-white/10 border-white/20 text-white/90 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Table */}
      <Card className="bg-white/20 backdrop-blur-lg border-0">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="cursor-pointer text-white">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Departamento</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Ilha</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer text-white w-16">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Número</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Tipo de resíduo</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer text-white w-60">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Tipo de contentor</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  <div className="flex items-center justify-center space-x-2">
                    <span>ID Controlo</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  <div className="flex items-center justify-center space-x-2">
                    <span>ID Sensor</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer text-white w-32">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Tipo de marco</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Ene Id</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredContentores.map((contentor) => (
                <TableRow key={contentor.id} className="border-white/20 hover:bg-sotkis-green/20 hover:border-sotkis-green/30 transition-colors duration-200">
                  <TableCell className="text-white">{contentor.departamento}</TableCell>
                  <TableCell className="text-white !text-left w-96">
                    <div className="flex items-center justify-start space-x-2">
                      <MapPin className="h-4 w-4 text-blue-400" />
                      <span className="truncate">{contentor.ilha}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-white w-16 whitespace-nowrap">{contentor.numero}</TableCell>
                  <TableCell className="text-white">{contentor.tipoResiduo}</TableCell>
                  <TableCell className="text-white w-60">{contentor.tipoContentor}</TableCell>
                  <TableCell className="text-white">{contentor.idControloAcesso || '-'}</TableCell>
                  <TableCell className="text-white">{contentor.idSensorEnchimento || '-'}</TableCell>
                  <TableCell className="text-white w-32">{contentor.tipoMarco}</TableCell>
                  <TableCell className="text-white">{contentor.eneId || '-'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      {/* Create Container Modal */}
      {showCreateModal && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          onClick={() => setShowCreateModal(false)}
        >
          <div 
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl shadow-2xl p-4 sm:p-6 w-full max-w-7xl max-h-[90vh] overflow-y-auto mx-4 sm:mx-0"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Criar novo contentor</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Departamento:</label>
                  <Select>
                    <SelectTrigger className="bg-white text-black">
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
                  <label className="text-sm font-medium text-white">Ilha:</label>
                  <Select>
                    <SelectTrigger className="bg-white text-black">
                      <SelectValue placeholder="Selecione ilha" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Ilha 1">Ilha 1</SelectItem>
                      <SelectItem value="Ilha 2">Ilha 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Número:</label>
                  <Input
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Número do contentor"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">ID Controlo de Acesso:</label>
                  <Input
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="ID do controlo de acesso"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">ID Sensor de Enchimento:</label>
                  <Input
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="ID do sensor de enchimento"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Tipo de contentor:</label>
                  <Select>
                    <SelectTrigger className="bg-white text-black">
                      <SelectValue placeholder="Selecione tipo de contentor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3m3 dupla argola fundo 180L koncept">3m3 dupla argola fundo 180L koncept</SelectItem>
                      <SelectItem value="3m3 dupla argola fundo 180L">3m3 dupla argola fundo 180L</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Middle Column */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Tipo de Sensor de Enchimento:</label>
                  <Select>
                    <SelectTrigger className="bg-white text-black">
                      <SelectValue placeholder="Selecione tipo de sensor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Tipo 1">Tipo 1</SelectItem>
                      <SelectItem value="Tipo 2">Tipo 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Tipo de resíduo:</label>
                  <Select>
                    <SelectTrigger className="bg-white text-black">
                      <SelectValue placeholder="Selecione tipo de resíduo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Plastico/Embalagens">Plastico/Embalagens</SelectItem>
                      <SelectItem value="Papel/cartao">Papel/cartao</SelectItem>
                      <SelectItem value="Vidro">Vidro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Tipo de Controlo de Acesso:</label>
                  <Select>
                    <SelectTrigger className="bg-white text-black">
                      <SelectValue placeholder="Selecione tipo de controlo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Tipo A">Tipo A</SelectItem>
                      <SelectItem value="Tipo B">Tipo B</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Tipo de Plataforma de Segurança:</label>
                  <Select>
                    <SelectTrigger className="bg-white text-black">
                      <SelectValue placeholder="Selecione tipo de plataforma" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Plataforma 1">Plataforma 1</SelectItem>
                      <SelectItem value="Plataforma 2">Plataforma 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Tipo de marco:</label>
                  <Select>
                    <SelectTrigger className="bg-white text-black">
                      <SelectValue placeholder="Selecione tipo de marco" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Ikon (standard) 510 simples">Ikon (standard) 510 simples</SelectItem>
                      <SelectItem value="Ikon (standard) 510">Ikon (standard) 510</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Tipo de kit:</label>
                  <Select>
                    <SelectTrigger className="bg-white text-black">
                      <SelectValue placeholder="Selecione tipo de kit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Kit A">Kit A</SelectItem>
                      <SelectItem value="Kit B">Kit B</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Tipo de volume de kit:</label>
                  <Select>
                    <SelectTrigger className="bg-white text-black">
                      <SelectValue placeholder="Selecione volume de kit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Volume 1">Volume 1</SelectItem>
                      <SelectItem value="Volume 2">Volume 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Tipo de acabamento:</label>
                  <Select>
                    <SelectTrigger className="bg-white text-black">
                      <SelectValue placeholder="Selecione tipo de acabamento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Acabamento 1">Acabamento 1</SelectItem>
                      <SelectItem value="Acabamento 2">Acabamento 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">eGate Digi Container Id:</label>
                  <Input
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="eGate Digi Container ID"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Container Content Id (Enevo api):</label>
                  <Input
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Container Content ID Enevo"
                  />
                </div>
              </div>
            </div>

            {/* Additional Fields Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Proprietário:</label>
                  <Input
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Nome do proprietário"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Controlo final:</label>
                  <Select defaultValue="Sim">
                    <SelectTrigger className="bg-white text-black">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Sim">Sim</SelectItem>
                      <SelectItem value="Não">Não</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Local Content Id (Enevo api):</label>
                  <Input
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Local Content ID Enevo"
                  />
                </div>
              </div>
            </div>

            {/* Observations Field - Full Width */}
            <div className="mb-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Obs.:</label>
                <textarea
                  className="w-full h-24 p-3 bg-white text-black placeholder-gray-600 rounded-md border border-gray-300 resize-none"
                  placeholder="Observações sobre o contentor"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4 mt-6 sm:mt-8">
              <Button
                onClick={() => setShowCreateModal(false)}
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 w-full sm:w-auto"
              >
                Cancelar
              </Button>
              <Button 
                onClick={() => {
                  // Handle create container logic here
                  console.log('Creating new container');
                  setShowCreateModal(false);
                }}
                className="bg-sotkis-green text-black hover:bg-sotkis-green/90 w-full sm:w-auto"
              >
                Submeter
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MySotkonContentores;