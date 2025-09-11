import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Plus, Edit, Trash2, Eye, MoreHorizontal, User, Mail, Phone, MapPin, Calendar, Shield, CheckCircle, XCircle, Clock, AlertTriangle, Image, ArrowUpDown, KeyRound, X, ChevronUp, ChevronDown } from 'lucide-react';
import SubmenuBar from '../components/ui/SubmenuBar';

const SotcareIntervencoesCorretivas = () => {
  const [filters, setFilters] = useState({
    numeroIntervencoes: 'últimas 20',
    departamento: 'Todos',
    tipo: 'Todos',
    ilha: 'Todos',
    contentor: 'Todos'
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const submenuLinks = [
    { label: 'Intervenções Corretivas', to: '/sotcare/corrective-interventions' },
    { label: 'Intervenções Preventivas', to: '/sotcare/preventive-interventions' },
    { label: 'Gestão de Problemas', to: '/sotcare/problem-management' },
  ];

  // Mock data for corrective interventions
  const mockIntervencoes = [
    {
      id: 5232,
      departamento: 'Lisboa-PT 999990006',
      tipo: 'Troca de tambor',
      ilha: 'Av. Miguel Bombarda 88',
      contentor: 'L306,Av Conde Valbom,Indif',
      controloAcesso: '2AC7EA',
      dataHora: '2025-07-30',
      problemas: 0
    },
    {
      id: 5231,
      departamento: 'Lisboa-PT 999990006',
      tipo: 'Troca de asa de contentor',
      ilha: 'Rua Nossa Senhora Amparo',
      contentor: 'L.492_N S Amparo_papel',
      controloAcesso: '80729B',
      dataHora: '2025-07-28',
      problemas: 0
    },
    {
      id: 5230,
      departamento: 'Lisboa-PT 999990006',
      tipo: 'Troca de fecho de tampa',
      ilha: 'R Penha de França',
      contentor: '1 1000/18/11',
      controloAcesso: '805712',
      dataHora: '2025-07-28',
      problemas: 0
    }
  ];

  const handleSearch = () => {
    console.log('Searching with filters:', filters);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header - AT THE VERY TOP */}
      <div className="page-header text-right">
        <h1 className="text-xl font-bold text-white">Intervenções Corretivas</h1>
        <p className="text-gray-300 mt-1">Gestão de intervenções corretivas do sistema</p>
      </div>

      {/* SubmenuBar and Button */}
      <div className="flex flex-col space-y-8">
        <SubmenuBar items={submenuLinks} />
        <div className="flex items-center justify-center">
          <Button 
            onClick={() => setIsModalOpen(true)}
            className="bg-red-600 text-white hover:bg-red-500"
          >
            <Plus className="w-4 h-4 mr-2 text-white" />
            Nova intervenção corretiva
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="space-y-4">
        <div className="text-left mb-3">
          <h2 className="text-white text-lg font-semibold">Filtros</h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 items-start w-full filter-cards-container">
          {/* N° de intervenções */}
          <Card className="bg-white/10 backdrop-blur-lg border-0 flex-1">
            <CardContent className="p-4">
              <div className="space-y-1">
                <label className="text-white text-sm font-semibold">N° de intervenções</label>
                <Select value={filters.numeroIntervencoes} onValueChange={(value) => setFilters({...filters, numeroIntervencoes: value})}>
                  <SelectTrigger className={`${
                      isLightMode 
                        ? 'bg-sotkis-green/20 border-sotkis-green/40 text-gray-900' 
                        : 'bg-white text-black'
                    }`}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="últimas 10">últimas 10</SelectItem>
                    <SelectItem value="últimas 20">últimas 20</SelectItem>
                    <SelectItem value="últimas 50">últimas 50</SelectItem>
                    <SelectItem value="todas">todas</SelectItem>
                  </SelectContent>
                </Select>
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
                    <SelectItem value="Lisboa-PT 999990006">Lisboa-PT 999990006</SelectItem>
                    <SelectItem value="Faro-PT 999990004">Faro-PT 999990004</SelectItem>
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
                  <SelectTrigger className={`${
                      isLightMode 
                        ? 'bg-sotkis-green/20 border-sotkis-green/40 text-gray-900' 
                        : 'bg-white text-black'
                    }`}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Todos">Todos</SelectItem>
                    <SelectItem value="Troca de tambor">Troca de tambor</SelectItem>
                    <SelectItem value="Troca de asa de contentor">Troca de asa de contentor</SelectItem>
                    <SelectItem value="Troca de fecho de tampa">Troca de fecho de tampa</SelectItem>
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
                  <SelectTrigger className={`${
                      isLightMode 
                        ? 'bg-sotkis-green/20 border-sotkis-green/40 text-gray-900' 
                        : 'bg-white text-black'
                    }`}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Todos">Todos</SelectItem>
                    <SelectItem value="Av. Miguel Bombarda 88">Av. Miguel Bombarda 88</SelectItem>
                    <SelectItem value="Rua Nossa Senhora Amparo">Rua Nossa Senhora Amparo</SelectItem>
                    <SelectItem value="R Penha de França">R Penha de França</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
          
          {/* Contentor */}
          <Card className="bg-white/10 backdrop-blur-lg border-0 flex-1">
            <CardContent className="p-4">
              <div className="space-y-1">
                <label className="text-white text-sm font-semibold">Contentor</label>
                <Select value={filters.contentor} onValueChange={(value) => setFilters({...filters, contentor: value})}>
                  <SelectTrigger className={`${
                      isLightMode 
                        ? 'bg-sotkis-green/20 border-sotkis-green/40 text-gray-900' 
                        : 'bg-white text-black'
                    }`}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Todos">Todos</SelectItem>
                    <SelectItem value="L306,Av Conde Valbom,Indif">L306,Av Conde Valbom,Indif</SelectItem>
                    <SelectItem value="L.492_N S Amparo_papel">L.492_N S Amparo_papel</SelectItem>
                    <SelectItem value="1 1000/18/11">1 1000/18/11</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Additional controls */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
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
      </div>

      {/* Table */}
      <Card className="bg-white/20 backdrop-blur-lg border-0">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="cursor-pointer text-white">
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
                    <span>Departamento</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Tipo</span>
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
                <TableHead className="cursor-pointer text-white">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Contentor</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Controlo de acesso</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Data e hora</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Problemas</span>
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
              {mockIntervencoes.map((intervencao) => (
                <TableRow key={intervencao.id} className="border-white/20 hover:bg-sotkis-green/20 hover:border-sotkis-green/30 transition-colors duration-200">
                  <TableCell className="text-white">{intervencao.id}</TableCell>
                  <TableCell className="text-white">{intervencao.departamento}</TableCell>
                  <TableCell className="text-white">{intervencao.tipo}</TableCell>
                  <TableCell className="text-white">
                    <div className="flex items-center justify-center space-x-2">
                      <MapPin className="h-4 w-4 text-sotkis-green" />
                      <span>{intervencao.ilha}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-white">{intervencao.contentor}</TableCell>
                  <TableCell className="text-white">
                    <div className="flex items-center justify-center space-x-2">
                      <KeyRound className="h-4 w-4 text-green-400" />
                      <span>{intervencao.controloAcesso}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-white">{intervencao.dataHora}</TableCell>
                  <TableCell className="text-white">
                    <div className="flex items-center justify-center space-x-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-400" />
                      <span>{intervencao.problemas}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                        <Image className="h-4 w-4" />
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

      {/* Export Images Section */}
      <Card className="bg-white/10 backdrop-blur-lg border-0">
        <CardHeader>
                          <CardTitle className="text-lg text-white">Exportar Imagens</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Departamento:</label>
              <Select defaultValue="Todos" onValueChange={(value) => console.log('Department changed to:', value)}>
                    <SelectTrigger className={`${
                      isLightMode 
                        ? 'bg-sotkis-green/20 border-sotkis-green/40 text-gray-900' 
                        : 'bg-white text-black'
                    }`}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Todos">Todos</SelectItem>
                  <SelectItem value="Lisboa-PT 999990006">Lisboa-PT 999990006</SelectItem>
                  <SelectItem value="Faro-PT 999990004">Faro-PT 999990004</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">N° de intervenção mínima:</label>
              <Select defaultValue="Todos" onValueChange={(value) => console.log('Min intervention changed to:', value)}>
                    <SelectTrigger className={`${
                      isLightMode 
                        ? 'bg-sotkis-green/20 border-sotkis-green/40 text-gray-900' 
                        : 'bg-white text-black'
                    }`}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Todos">Todos</SelectItem>
                  <SelectItem value="5200">5200</SelectItem>
                  <SelectItem value="5230">5230</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">N° de intervenção máxima:</label>
              <Select defaultValue="Todos" onValueChange={(value) => console.log('Max intervention changed to:', value)}>
                    <SelectTrigger className={`${
                      isLightMode 
                        ? 'bg-sotkis-green/20 border-sotkis-green/40 text-gray-900' 
                        : 'bg-white text-black'
                    }`}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Todos">Todos</SelectItem>
                  <SelectItem value="5240">5240</SelectItem>
                  <SelectItem value="5250">5250</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="mt-4 flex justify-start">
            <Button className="bg-sotkis-green text-black hover:bg-sotkis-green/90 px-8 py-2">
              Exportar
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Modal for Nova Intervenção Corretiva */}
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
              <h2 className="text-xl sm:text-2xl font-bold text-red-500">Nova intervenção corretiva</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Left Column - Form Fields */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Tipo:</label>
                  <Select>
                    <SelectTrigger className={`${
                      isLightMode 
                        ? 'bg-sotkis-green/20 border-sotkis-green/40 text-gray-900' 
                        : 'bg-white text-black'
                    }`}>
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="troca-tambor">Troca de tambor</SelectItem>
                      <SelectItem value="troca-asa">Troca de asa de contentor</SelectItem>
                      <SelectItem value="troca-fecho">Troca de fecho de tampa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Departamento:</label>
                  <Select>
                    <SelectTrigger className={`${
                      isLightMode 
                        ? 'bg-sotkis-green/20 border-sotkis-green/40 text-gray-900' 
                        : 'bg-white text-black'
                    }`}>
                      <SelectValue placeholder="Escolha um departamento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lisboa">Lisboa-PT 999990006</SelectItem>
                      <SelectItem value="faro">Faro-PT 999990004</SelectItem>
                      <SelectItem value="porto">Porto-PT 999990008</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Ilha:</label>
                  <Select>
                    <SelectTrigger className={`${
                      isLightMode 
                        ? 'bg-sotkis-green/20 border-sotkis-green/40 text-gray-900' 
                        : 'bg-white text-black'
                    }`}>
                      <SelectValue placeholder="Selecione a ilha" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bombarda">Av. Miguel Bombarda 88</SelectItem>
                      <SelectItem value="amparo">Rua Nossa Senhora Amparo</SelectItem>
                      <SelectItem value="penha">R Penha de França</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Contentor:</label>
                  <Select>
                    <SelectTrigger className={`${
                      isLightMode 
                        ? 'bg-sotkis-green/20 border-sotkis-green/40 text-gray-900' 
                        : 'bg-white text-black'
                    }`}>
                      <SelectValue placeholder="Selecione o contentor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="l306">L306,Av Conde Valbom,Indif</SelectItem>
                      <SelectItem value="l492">L.492_N S Amparo_papel</SelectItem>
                      <SelectItem value="1000">1 1000/18/11</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Data e hora:</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input 
                      type="date" 
                      placeholder="dd/mm/yyyy"
                      className="bg-white/10 border-white/20 text-white/90 placeholder-gray-400"
                    />
                    <Input 
                      type="time" 
                      placeholder="--:--"
                      className="bg-white/10 border-white/20 text-white/90 placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Tempo de intervenção:</label>
                  <Input 
                    type="number" 
                    placeholder="Minutos"
                    className="bg-white/10 border-white/20 text-white/90 placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Right Column - Additional Fields */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Prioridade:</label>
                  <Select>
                    <SelectTrigger className={`${
                      isLightMode 
                        ? 'bg-sotkis-green/20 border-sotkis-green/40 text-gray-900' 
                        : 'bg-white text-black'
                    }`}>
                      <SelectValue placeholder="Selecione a prioridade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="baixa">Baixa</SelectItem>
                      <SelectItem value="media">Média</SelectItem>
                      <SelectItem value="alta">Alta</SelectItem>
                      <SelectItem value="urgente">Urgente</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Responsável:</label>
                  <Select>
                    <SelectTrigger className={`${
                      isLightMode 
                        ? 'bg-sotkis-green/20 border-sotkis-green/40 text-gray-900' 
                        : 'bg-white text-black'
                    }`}>
                      <SelectValue placeholder="Selecione o responsável" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="equipa1">Equipa de Manutenção 1</SelectItem>
                      <SelectItem value="equipa2">Equipa de Manutenção 2</SelectItem>
                      <SelectItem value="equipa3">Equipa de Manutenção 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Estado:</label>
                  <Select>
                    <SelectTrigger className={`${
                      isLightMode 
                        ? 'bg-sotkis-green/20 border-sotkis-green/40 text-gray-900' 
                        : 'bg-white text-black'
                    }`}>
                      <SelectValue placeholder="Selecione o estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pendente">Pendente</SelectItem>
                      <SelectItem value="em-curso">Em Curso</SelectItem>
                      <SelectItem value="concluida">Concluída</SelectItem>
                      <SelectItem value="cancelada">Cancelada</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Observações:</label>
                  <textarea
                    placeholder="Observações adicionais"
                    className="w-full h-24 p-3 bg-white/10 border border-white/20 text-white/90 placeholder-gray-400 rounded-md resize-none"
                  />
                </div>
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
    </div>
  );
};

export default SotcareIntervencoesCorretivas;