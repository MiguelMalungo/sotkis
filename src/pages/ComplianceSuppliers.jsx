import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Plus, Search, Edit, Trash2, Eye, MoreHorizontal, User, Mail, Phone, MapPin, Calendar, Shield, CheckCircle, XCircle, Clock, AlertTriangle, Image, ChevronUp, ChevronDown } from 'lucide-react';

const ComplianceSuppliers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [filters, setFilters] = useState({
    status: 'Todos',
    type: 'Todos',
    region: 'Todas'
  });
  const [isCreateFormExpanded, setIsCreateFormExpanded] = useState(false);


  // Mock non-conformities data
  const mockNonConformities = [
    {
      id: 30,
      client: 'Sibland',
      sigla: 'F',
      subject: 'entrega de Smilin errado',
      description: 'Foi encomendado smilin LIOZ (que é um branco sujo / beje) e o fornecedor enviou um mármore de Estremoz (que é mesmo branco), diferente da nossa encomenda n.° 954/2020',
      type: 'Pouco grave',
      status: 'Resolvida'
    },
    {
      id: 52,
      client: 'Josilnox',
      sigla: 'F',
      subject: 'Marcos com danos - transporte',
      description: 'Os marcos Y chegaram com alguns danos',
      type: 'Pouco grave',
      status: 'Resolvida'
    },
    {
      id: 53,
      client: 'DHL',
      sigla: 'F',
      subject: 'volume danificado e falta de material',
      description: 'entregue um volume que vinha danificado e com nova fita de embalagem. Após conferencia estavam em falta 2 amortecedores.',
      type: 'Pouco grave',
      status: 'Resolvida'
    },
    {
      id: 54,
      client: 'TMM',
      sigla: 'F',
      subject: 'Transferência e acondicionamento de cargas incorreto',
      description: 'BCF.098.2021 - FPV.266.2020 O transportador depois de carregar 6 camiões nas nossas instalações para França, alterou as cargas nas instalações dele, e acondicionou tudo em 5 camiões, indo os mesmos a exceder o limite de altura no camião.',
      type: 'Grave',
      status: 'Resolvida'
    },
    {
      id: 55,
      client: 'LogiTrans',
      sigla: 'F',
      subject: 'Atraso na entrega',
      description: 'Entrega com atraso de 3 dias em relação ao prazo acordado',
      type: 'Pouco grave',
      status: 'Em análise'
    },
    {
      id: 56,
      client: 'MateriaisPro',
      sigla: 'F',
      subject: 'Qualidade inferior ao especificado',
      description: 'Material recebido não atende às especificações técnicas contratadas',
      type: 'Grave',
      status: 'Pendente'
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
      {/* Page Header - AT THE VERY TOP */}
      <div className="page-header text-right">
        <h1 className="text-xl font-bold text-white">Fornecedores</h1>
        <p className="text-gray-300 mt-1">Gestão de conformidade de fornecedores</p>
      </div>


      {/* Create New Non-conformity Filter */}
      <div className="bg-sotkis-green text-black px-4 py-2 rounded-lg flex items-center justify-between">
        <h2 className="text-lg font-semibold">Fornecedores | Criar nova não-conformidade</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-black hover:text-black/80"
          onClick={() => setIsCreateFormExpanded(!isCreateFormExpanded)}
        >
          <ChevronDown className={`h-4 w-4 transition-transform ${isCreateFormExpanded ? 'rotate-180' : ''}`} />
        </Button>
      </div>

      {/* Create New Non-conformity Form (Expandable) */}
      {isCreateFormExpanded && (
        <Card className="bg-white/20 backdrop-blur-lg border-0">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Criar Nova Não-conformidade</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Fornecedor</label>
                <Select defaultValue="">
                  <SelectTrigger className="bg-white border-white text-black">
                    <SelectValue placeholder="Selecione um fornecedor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fornecedor-abc">Fornecedor ABC</SelectItem>
                    <SelectItem value="fornecedor-xyz">Fornecedor XYZ</SelectItem>
                    <SelectItem value="fornecedor-def">Fornecedor DEF</SelectItem>
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
            </div>
            <div className="mt-4 space-y-2">
              <label className="text-sm font-medium text-white">Assunto</label>
              <Input 
                placeholder="Digite o assunto da não-conformidade"
                className="bg-white border-white text-black"
              />
            </div>
            <div className="mt-4 space-y-2">
              <label className="text-sm font-medium text-white">Descrição</label>
              <textarea 
                placeholder="Descreva detalhadamente a não-conformidade"
                className="w-full h-32 p-3 bg-white text-black placeholder-gray-600 rounded-md border border-gray-300 resize-none"
              />
            </div>
            <div className="mt-6 flex justify-end">
              <Button className="bg-sotkis-green text-black hover:bg-sotkis-green/90">
                Criar Não-conformidade
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Table Controls */}
      <div className="space-y-4 md:space-y-0 md:flex md:justify-between md:items-center">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-white">Mostrar</span>
          <Select value={filters.recordsPerPage} onValueChange={(value) => setFilters({ ...filters, recordsPerPage: value })}>
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
      <Card className="bg-white/20 backdrop-blur-lg border-0">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="cursor-pointer text-white text-center w-20">
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
                    <span>Cliente</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer text-white text-center w-16">
                  <div className="flex items-center justify-center space-x-2">
                    <span>SIGLA</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Assunto</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Descrição</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer text-white text-center w-36">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Tipo</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer text-white text-center w-36">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Estado</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="text-white">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockNonConformities.map((item) => (
                <TableRow key={item.id} className="border-white/20 hover:bg-sotkis-green/20 hover:border-sotkis-green/30 transition-colors duration-200">
                  <TableCell className="text-white font-medium text-center">{item.id}</TableCell>
                  <TableCell className="text-white">{item.client}</TableCell>
                  <TableCell className="text-white text-center">{item.sigla}</TableCell>
                  <TableCell className="text-white max-w-xs truncate">{item.subject}</TableCell>
                  <TableCell className="text-white max-w-md">
                    <div className="truncate" title={item.description}>
                      {item.description}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                      {item.type}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
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
      <div className="space-y-4">
        {/* Pagination info text */}
        <div className="text-center">
          <div className="text-sm text-white">
            A exibir 1-6 de 6 registos
          </div>
        </div>
        {/* Pagination buttons */}
        <div className="flex justify-center">
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
    </div>
  );
};

export default ComplianceSuppliers;