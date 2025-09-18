import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Plus, Search, Edit, Trash2, Eye, MoreHorizontal, User, Mail, Phone, MapPin, Calendar, Shield, CheckCircle, XCircle, Clock, AlertTriangle, Image, ArrowUpDown, X, ChevronUp, ChevronDown } from 'lucide-react';
import FloatingAddButton from '@/components/ui/FloatingAddButton';

const SotcareGestaoProblemas = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    departamento: 'Todos',
    tipo: 'Todos',
    responsavel: 'Todos',
    estado: 'Todos'
  });
  const [isModalOpen, setIsModalOpen] = useState(false);


  // Mock data for problems
  const mockProblemas = [
    {
      id: 1001,
      assunto: 'Contentor danificado',
      localizacao: 'R. Madre Teresa de Calcutá, Faro',
      departamento: 'Faro-PT 999990004',
      criadoPor: 'João Silva',
      atualizadoPor: 'Maria Santos',
      responsavel: 'Equipa Técnica Faro',
      estado: 'Em análise'
    },
    {
      id: 1002,
      assunto: 'Sensor de enchimento avariado',
      localizacao: 'Av. Miguel Bombarda 88, Lisboa',
      departamento: 'Lisboa-PT 999990006',
      criadoPor: 'Pedro Costa',
      atualizadoPor: 'Ana Oliveira',
      responsavel: 'Equipa Técnica Lisboa',
      estado: 'Em progresso'
    },
    {
      id: 1003,
      assunto: 'Problema de acesso RFID',
      localizacao: 'Rua Nossa Senhora Amparo, Lisboa',
      departamento: 'Lisboa-PT 999990006',
      criadoPor: 'Carlos Ferreira',
      atualizadoPor: 'Carlos Ferreira',
      responsavel: 'Equipa IT',
      estado: 'Resolvido'
    },
    {
      id: 1004,
      assunto: 'Contentor com tampa partida',
      localizacao: 'Largo de São Francisco 45, Faro',
      departamento: 'Faro-PT 999990004',
      criadoPor: 'Sofia Martins',
      atualizadoPor: 'Equipa Técnica Faro',
      responsavel: 'Equipa Técnica Faro',
      estado: 'Pendente'
    }
  ];

  const handleSearch = () => {
    console.log('Searching with filters:', filters);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header - AT THE VERY TOP */}
      <div className="page-header text-right">
        <h1 className="text-xl font-bold text-white">Gestão de Problemas</h1>
        <p className="text-gray-300 mt-1">Gestão de problemas do sistema</p>
      </div>

      <div className="flex flex-col space-y-8">
        <div className="flex items-center justify-center">
        </div>
      </div>

      {/* Filters */}
      <div className="space-y-4">
        <div className="text-left mb-3">
          <h2 className="text-white text-lg font-semibold">Filtros</h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 items-start w-full filter-cards-container">
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
                    <SelectItem value="Todos">Todos</SelectItem>
                    <SelectItem value="Faro-PT 999990004">Faro-PT 999990004</SelectItem>
                    <SelectItem value="Lisboa-PT 999990006">Lisboa-PT 999990006</SelectItem>
                    <SelectItem value="Porto-PT 999990008">Porto-PT 999990008</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
          
          {/* Tipo */}
          <Card className="bg-white/10 backdrop-blur-lg border-0 flex-1">
            <CardContent className="p-4">
              <div className="space-y-1">
                <label className="text-white text-sm font-semibold">Tipo</label>
                <Select value={filters.tipo} onValueChange={(value) => setFilters({...filters, tipo: value})}>
                  <SelectTrigger className="bg-white text-black">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Todos">Todos</SelectItem>
                    <SelectItem value="Contentor danificado">Contentor danificado</SelectItem>
                    <SelectItem value="Sensor avariado">Sensor avariado</SelectItem>
                    <SelectItem value="Problema RFID">Problema RFID</SelectItem>
                    <SelectItem value="Tampa partida">Tampa partida</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
          
          {/* Responsável */}
          <Card className="bg-white/10 backdrop-blur-lg border-0 flex-1">
            <CardContent className="p-4">
              <div className="space-y-1">
                <label className="text-white text-sm font-semibold">Responsável</label>
                <Select value={filters.responsavel} onValueChange={(value) => setFilters({...filters, responsavel: value})}>
                  <SelectTrigger className="bg-white text-black">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Todos">Todos</SelectItem>
                    <SelectItem value="Equipa Técnica Faro">Equipa Técnica Faro</SelectItem>
                    <SelectItem value="Equipa Técnica Lisboa">Equipa Técnica Lisboa</SelectItem>
                    <SelectItem value="Equipa IT">Equipa IT</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
          
          {/* Estado */}
          <Card className="bg-white/10 backdrop-blur-lg border-0 flex-1">
            <CardContent className="p-4">
              <div className="space-y-1">
                <label className="text-white text-sm font-semibold">Estado</label>
                <Select value={filters.estado} onValueChange={(value) => setFilters({...filters, estado: value})}>
                  <SelectTrigger className="bg-white text-black">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Todos">Todos</SelectItem>
                    <SelectItem value="Pendente">Pendente</SelectItem>
                    <SelectItem value="Em análise">Em análise</SelectItem>
                    <SelectItem value="Em progresso">Em progresso</SelectItem>
                    <SelectItem value="Resolvido">Resolvido</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
          
          {/* Procurar */}
          <Card className="bg-white/10 backdrop-blur-lg border-0 flex-1">
            <CardContent className="p-4">
              <div className="space-y-1">
                <label className="text-white text-sm font-semibold">Procurar</label>
                <Input
                  placeholder="Pesquisar problemas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-white/10 border-white/20 text-white/90 placeholder-gray-400"
                />
              </div>
            </CardContent>
          </Card>
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
        
      </div>

      {/* Table */}
      <Card className="bg-white/20 backdrop-blur-lg border-0">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="cursor-pointer text-white w-20">
                  <div className="flex items-center justify-center space-x-2">
                    <span>ID</span>
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
                    <span>Localização</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Departamento</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer text-white w-32">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Criado por</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer text-white w-32">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Atualizado por</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Responsável</span>
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
                <TableHead className="text-white">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockProblemas.map((problema) => (
                <TableRow key={problema.id} className="border-white/20 hover:bg-sotkis-green/20 hover:border-sotkis-green/30 transition-colors duration-200">
                  <TableCell className="text-white w-20">{problema.id}</TableCell>
                  <TableCell className="text-white">{problema.assunto}</TableCell>
                  <TableCell className="text-white">
                    <div className="flex items-center justify-center space-x-2">
                      <MapPin className="h-4 w-4 text-blue-400" />
                      <span>{problema.localizacao}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-white">{problema.departamento}</TableCell>
                  <TableCell className="text-white w-32">{problema.criadoPor}</TableCell>
                  <TableCell className="text-white w-32">{problema.atualizadoPor}</TableCell>
                  <TableCell className="text-white">{problema.responsavel}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      problema.estado === 'Resolvido' ? 'bg-green-500/20 text-green-400' :
                      problema.estado === 'Em progresso' ? 'bg-blue-500/20 text-blue-400' :
                      problema.estado === 'Em análise' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {problema.estado}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="text-yellow-400 hover:text-yellow-300">
                        <AlertTriangle className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-yellow-400 hover:text-yellow-300">
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
            A exibir 1-10 de 20 registos
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
              2
            </Button>
            <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white">
              Seguinte
            </Button>
          </div>
        </div>
      </div>

      {/* Modal for Reportar Problema */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl shadow-2xl p-4 sm:p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto mx-4 sm:mx-0 sotcare-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="text-center mb-4 sm:mb-6 sotcare-modal-header">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Reportar Problema</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Departamento */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Departamento:</label>
                <Select defaultValue="Faro-PT 999990004">
                  <SelectTrigger className="bg-white text-black">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Faro-PT 999990004">Faro-PT 999990004</SelectItem>
                    <SelectItem value="Lisboa-PT 999990006">Lisboa-PT 999990006</SelectItem>
                    <SelectItem value="Porto-PT 999990008">Porto-PT 999990008</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Assunto */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Assunto:</label>
                <Input
                  placeholder="Digite o assunto do problema"
                  className="bg-white text-black placeholder-gray-600"
                />
              </div>

              {/* Localização */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Localização:</label>
                <Input
                  placeholder="Digite a localização"
                  className="bg-white text-black placeholder-gray-600"
                />
              </div>

              {/* Tipo de intervenção prevista */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Tipo de intervenção prevista:</label>
                <Select>
                  <SelectTrigger className="bg-white text-black">
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="corretiva">Intervenção Corretiva</SelectItem>
                    <SelectItem value="preventiva">Intervenção Preventiva</SelectItem>
                    <SelectItem value="manutencao">Manutenção</SelectItem>
                    <SelectItem value="substituicao">Substituição</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Mensagem - Full width */}
              <div className="lg:col-span-2 space-y-2">
                <label className="text-sm font-medium text-white">Mensagem:</label>
                <textarea
                  placeholder="Descreva o problema detalhadamente"
                  className="w-full h-32 p-3 bg-white text-black placeholder-gray-600 rounded-md resize-none"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4 mt-6 sm:mt-8">
              <Button
                onClick={() => setIsModalOpen(false)}
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 w-full sm:w-auto"
              >
                Cancelar
              </Button>
              <Button className="bg-sotkis-green text-black hover:bg-sotkis-green/90 w-full sm:w-auto">
                Submeter
              </Button>
            </div>
          </div>
        </div>
      )}
    
      {/* Floating Add Button */}
      <FloatingAddButton onClick={() => setIsModalOpen(true)} />
    </div>
  );
};

export default SotcareGestaoProblemas;