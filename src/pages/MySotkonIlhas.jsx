import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Plus, Search, Edit, Trash2, Info, FileText, Download, Printer, X } from 'lucide-react';
import SubmenuBar from '../components/ui/SubmenuBar';

const MySotkonIlhas = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [filters, setFilters] = React.useState({
    descricaoGeografica: '',
    departamento: 'Faro-PT 999990004'
  });

  const submenuLinks = [
    { label: 'Manuais', to: '/my-sotkon/manuais' },
    { label: 'Departamentos', to: '/my-sotkon/departamentos' },
    { label: 'Ilhas', to: '/my-sotkon/ilhas' },
    { label: 'Contentores', to: '/my-sotkon/contentores' },
  ];

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
      {/* Page Header - AT THE VERY TOP */}
      <div className="page-header text-right">
        <h1 className="text-xl font-bold text-white">Ilhas</h1>
        <p className="text-gray-300 mt-1">Gestão de ilhas do My Sotkon</p>
      </div>

      {/* SubmenuBar */}
      <SubmenuBar items={submenuLinks} />

      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Pesquisar ilhas..."
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
          Nova Ilha
        </Button>
      </div>

      {/* Filters */}
      <div className="space-y-4">
        <div className="text-left mb-3">
          <h2 className="text-white text-lg font-semibold">Filtros</h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 items-start w-full filter-cards-container">
          {/* Descrição geográfica */}
          <Card className="bg-white/10 backdrop-blur-lg border-0 flex-1">
            <CardContent className="p-4">
              <div className="space-y-1">
                <label className="text-white text-sm font-semibold">Descrição geográfica</label>
                <Input
                  placeholder="Digite a descrição geográfica"
                  value={filters.descricaoGeografica}
                  onChange={(e) => setFilters({...filters, descricaoGeografica: e.target.value})}
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
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Faro-PT 999990004">Faro-PT 999990004</SelectItem>
                    <SelectItem value="Lisboa-PT 999990001">Lisboa-PT 999990001</SelectItem>
                    <SelectItem value="Porto-PT 999990002">Porto-PT 999990002</SelectItem>
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

      {/* Islands Table */}
      <Card className="bg-white/20 backdrop-blur-lg border-0">
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
                <TableRow key={ilha.id} className="border-white/20 hover:bg-sotkis-green/20 hover:border-sotkis-green/30 transition-colors duration-200">
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
      
      {/* Create Island Modal */}
      {showCreateModal && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          onClick={() => setShowCreateModal(false)}
        >
          <div 
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl shadow-2xl p-4 sm:p-6 w-full max-w-6xl max-h-[90vh] overflow-y-auto mx-4 sm:mx-0"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Criar nova ilha</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Left Column - Basic Information */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Departamento:</label>
                  <Select>
                    <SelectTrigger className="bg-white text-black">
                      <SelectValue placeholder="Selecione departamento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Faro-PT 999990004">Faro-PT 999990004</SelectItem>
                      <SelectItem value="Lisboa-PT 999990001">Lisboa-PT 999990001</SelectItem>
                      <SelectItem value="Porto-PT 999990002">Porto-PT 999990002</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Descrição geográfica:</label>
                  <Input
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Descrição geográfica da ilha"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Número:</label>
                  <Input
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Número da ilha"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Data de instalação:</label>
                  <Input
                    className="bg-white text-black placeholder-gray-600"
                    type="date"
                    placeholder="dd/mm/yyyy"
                  />
                </div>
              </div>

              {/* Right Column - Additional Information */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Data de fim de garantia:</label>
                  <Input
                    className="bg-white text-black placeholder-gray-600"
                    type="date"
                    placeholder="dd/mm/yyyy"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Latitude:</label>
                  <Input
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Coordenada de latitude"
                    type="number"
                    step="any"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Longitude:</label>
                  <Input
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Coordenada de longitude"
                    type="number"
                    step="any"
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
                  placeholder="Observações sobre a ilha"
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
                  // Handle create island logic here
                  console.log('Creating new island');
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

export default MySotkonIlhas;