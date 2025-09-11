import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Plus, Search, Edit, Trash2, FileText, Download, Printer, X, ArrowUpDown, Mail, ChevronUp, ChevronDown } from 'lucide-react';
import SubmenuBar from '../components/ui/SubmenuBar';

const MySotkonDepartamentos = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [isLightMode, setIsLightMode] = React.useState(false);

  React.useEffect(() => {
    const checkTheme = () => {
      setIsLightMode(document.body.classList.contains('light-theme'));
    };
    
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [filters, setFilters] = React.useState({
    nome: '',
    departamento: 'Todos'
  });

  const submenuLinks = [
    { label: 'Manuais', to: '/my-sotkon/manuais' },
    { label: 'Departamentos', to: '/my-sotkon/departamentos' },
    { label: 'Ilhas', to: '/my-sotkon/ilhas' },
    { label: 'Contentores', to: '/my-sotkon/contentores' },
  ];

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
      {/* Page Header - AT THE VERY TOP */}
      <div className="page-header text-right">
        <h1 className="text-xl font-bold text-white">Departamentos</h1>
        <p className="text-gray-300 mt-1">Gestão de departamentos do My Sotkon</p>
      </div>

      {/* SubmenuBar */}
      <SubmenuBar items={submenuLinks} />

      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Pesquisar departamentos..."
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
          Novo Departamento
        </Button>
      </div>

      {/* Filters */}
      <div className="space-y-4">
        <div className="text-left mb-3">
          <h2 className="text-white text-lg font-semibold">Filtros</h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 items-start w-full filter-cards-container">
          {/* Nome */}
          <Card className="bg-white/10 backdrop-blur-lg border-0 flex-1">
            <CardContent className="p-4">
              <div className="space-y-1">
                <label className="text-white text-sm font-semibold">Nome</label>
                <Input
                  placeholder="Digite o nome"
                  value={filters.nome}
                  onChange={(e) => setFilters({...filters, nome: e.target.value})}
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
                  <SelectTrigger className={`${
                      isLightMode 
                        ? 'bg-sotkis-green/20 border-sotkis-green/40 text-gray-900' 
                        : 'bg-white text-black'
                    }`}>
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
            <SelectTrigger className={`w-20 ${
              isLightMode 
                ? 'bg-sotkis-green/20 border-sotkis-green/40 text-gray-900' 
                : 'bg-white text-black'
            }`}>
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
                    <span>Nome</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer text-white w-24">
                  <div className="flex items-center justify-center space-x-2">
                    <span>NIF</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Email</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer text-white w-32">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Código de região</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Estado</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Customer Id (Enevo Api)</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Customer Id (Digi eGate Api)</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="w-20 text-white">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDepartamentos.map((departamento) => (
                <TableRow key={departamento.id} className="border-white/20 hover:bg-sotkis-green/20 hover:border-sotkis-green/30 transition-colors duration-200">
                  <TableCell className="text-white">{departamento.nome}</TableCell>
                  <TableCell className="text-white w-24 whitespace-nowrap">{departamento.nif}</TableCell>
                  <TableCell className="text-white !text-left">
                    <div className="flex items-center justify-start space-x-2">
                      <Mail className="h-4 w-4 text-sotkis-green" />
                      <span className="truncate">{departamento.email}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-white w-32 whitespace-nowrap">{departamento.codigoRegiao || '-'}</TableCell>
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
      
      {/* Create Department Modal */}
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
              <h2 className="text-xl sm:text-2xl font-bold text-white">Criar novo departamento</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column - Basic Information */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Nome:</label>
                  <Input
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Nome do departamento"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">NIF:</label>
                  <Input
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Número de identificação fiscal"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Código de região:</label>
                  <Input
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Código da região"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Morada:</label>
                  <Input
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Endereço completo"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Código-Postal:</label>
                  <Input
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Código postal"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Cidade:</label>
                  <Input
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Nome da cidade"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">País:</label>
                  <Input
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Nome do país"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Iva:</label>
                  <Select>
                    <SelectTrigger className={`${
                      isLightMode 
                        ? 'bg-sotkis-green/20 border-sotkis-green/40 text-gray-900' 
                        : 'bg-white text-black'
                    }`}>
                      <SelectValue placeholder="Selecione IVA" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0%">0%</SelectItem>
                      <SelectItem value="6%">6%</SelectItem>
                      <SelectItem value="13%">13%</SelectItem>
                      <SelectItem value="23%">23%</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Right Column - Contact & API Information */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Email:</label>
                  <Input
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Email de contacto"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Telefone:</label>
                  <Input
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Número de telefone"
                    type="tel"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Url:</label>
                  <Input
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="URL do departamento"
                    type="url"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Ativo:</label>
                  <Select defaultValue="Sim">
                    <SelectTrigger className={`${
                      isLightMode 
                        ? 'bg-sotkis-green/20 border-sotkis-green/40 text-gray-900' 
                        : 'bg-white text-black'
                    }`}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Sim">Sim</SelectItem>
                      <SelectItem value="Não">Não</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Customer Content Id (Enevo api):</label>
                  <Input
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="ID do cliente na API Enevo"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Customer Content Id (Digi eGate api):</label>
                  <Input
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="ID do cliente na API Digi eGate"
                  />
                </div>
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
                  // Handle create department logic here
                  console.log('Creating new department');
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

export default MySotkonDepartamentos;