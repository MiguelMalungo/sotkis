import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Plus, Edit, Trash2, FileText, Download, Printer, X, ChevronDown } from 'lucide-react';

const ComplianceClients = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [recordsPerPage, setRecordsPerPage] = React.useState('10');
  const [isCreateFormExpanded, setIsCreateFormExpanded] = React.useState(false);

  // Mock non-conformities data for clients
  const mockNonConformities = [
    {
      id: 25,
      client: 'Empresa ABC',
      sigla: 'C',
      subject: 'Não conformidade na entrega',
      description: 'Material entregue não corresponde às especificações contratadas',
      type: 'Grave',
      status: 'Pendente'
    },
    {
      id: 26,
      client: 'Comercial XYZ',
      sigla: 'C',
      subject: 'Atraso no serviço',
      description: 'Serviço realizado com atraso de 5 dias em relação ao prazo acordado',
      type: 'Pouco grave',
      status: 'Em análise'
    },
    {
      id: 27,
      client: 'Indústria DEF',
      sigla: 'C',
      subject: 'Qualidade inferior',
      description: 'Produto recebido apresenta qualidade inferior ao especificado no contrato',
      type: 'Grave',
      status: 'Resolvida'
    },
    {
      id: 28,
      client: 'Serviços GHI',
      sigla: 'C',
      subject: 'Documentação incompleta',
      description: 'Documentação de entrega apresentada sem todos os documentos obrigatórios',
      type: 'Pouco grave',
      status: 'Resolvida'
    },
    {
      id: 29,
      client: 'Logística JKL',
      sigla: 'C',
      subject: 'Problema de comunicação',
      description: 'Falha na comunicação durante o processo de entrega',
      type: 'Pouco grave',
      status: 'Em análise'
    }
  ];

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Resolvida':
        return 'bg-green-500/20 text-green-400';
      case 'Em análise':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'Pendente':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Grave':
        return 'bg-red-500/20 text-red-400';
      case 'Pouco grave':
        return 'bg-yellow-500/20 text-yellow-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-white">Lista de não-conformidades</h1>
          <p className="text-gray-300 mt-1">Gestão de não-conformidades com clientes</p>
        </div>
        
        {/* Export Icons */}
        <div className="flex items-center justify-end space-x-2">
          <Button variant="outline" size="icon" className="bg-white/10 border-white/20 text-white">
            <X className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="bg-white/10 border-white/20 text-white">
            <FileText className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="bg-white/10 border-white/20 text-white">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="bg-white/10 border-white/20 text-white">
            <Printer className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Create New Non-conformity Filter */}
      <div className="bg-sotkis-green text-white px-4 py-2 rounded-lg flex items-center justify-between">
        <h2 className="text-lg font-semibold">Clientes | Criar nova não-conformidade</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-white hover:text-white/80"
          onClick={() => setIsCreateFormExpanded(!isCreateFormExpanded)}
        >
          <ChevronDown className={`h-4 w-4 transition-transform ${isCreateFormExpanded ? 'rotate-180' : ''}`} />
        </Button>
      </div>

      {/* Create New Non-conformity Form (Expandable) */}
      {isCreateFormExpanded && (
        <Card className="card-glass">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Criar Nova Não-conformidade</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Cliente</label>
                <Select defaultValue="">
                  <SelectTrigger className="bg-white border-white text-black">
                    <SelectValue placeholder="Selecione um cliente" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="empresa-abc">Empresa ABC</SelectItem>
                    <SelectItem value="comercial-xyz">Comercial XYZ</SelectItem>
                    <SelectItem value="industria-def">Indústria DEF</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Tipo</label>
                <Select defaultValue="">
                  <SelectTrigger className="bg-white border-white text-black">
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grave">Grave</SelectItem>
                    <SelectItem value="pouco-grave">Pouco grave</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-white">Assunto</label>
                <Input 
                  placeholder="Digite o assunto da não-conformidade"
                  className="bg-white text-black placeholder-gray-600"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-white">Descrição</label>
                <textarea 
                  placeholder="Descreva detalhadamente a não-conformidade"
                  className="w-full h-24 p-3 bg-white text-black placeholder-gray-600 rounded-md border border-gray-300 resize-none"
                />
              </div>
              <div className="md:col-span-2 flex justify-end space-x-2">
                <Button 
                  variant="outline" 
                  onClick={() => setIsCreateFormExpanded(false)}
                  className="bg-white/10 border-white/20 text-white"
                >
                  Cancelar
                </Button>
                <Button className="bg-sotkis-green text-black hover:bg-sotkis-green/90">
                  Criar Não-conformidade
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Table Controls */}
      <div className="space-y-4 md:space-y-0 md:flex md:justify-between md:items-center">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-white">Mostrar</span>
          <Select value={recordsPerPage} onValueChange={setRecordsPerPage}>
            <SelectTrigger className="w-20 bg-white border-white text-black">
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
            placeholder="Pesquisar não-conformidades..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-64 bg-white text-black placeholder-gray-600"
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
                  Número
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Cliente
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  SIGLA
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Assunto
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Descrição
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Tipo
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Estado
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="text-white">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockNonConformities.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="text-white font-medium">{item.id}</TableCell>
                  <TableCell className="text-white">{item.client}</TableCell>
                  <TableCell className="text-white">{item.sigla}</TableCell>
                  <TableCell className="text-white max-w-xs truncate">{item.subject}</TableCell>
                  <TableCell className="text-white max-w-md">
                    <div className="truncate" title={item.description}>
                      {item.description}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                      {item.type}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="text-sotkis-green hover:text-sotkis-green/80">
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-sotkis-green hover:text-sotkis-green/80">
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
          A exibir 1-5 de 5 registos
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

      {/* Create New Button */}
      <div className="flex justify-center">
        <Button 
          className="bg-sotkis-green text-black hover:bg-sotkis-green/90 px-8 py-3"
          onClick={() => setIsCreateFormExpanded(!isCreateFormExpanded)}
        >
          <Plus className="h-5 w-5 mr-2" />
          Criar Nova Não-conformidade
        </Button>
      </div>
    </div>
  );
};

export default ComplianceClients; 