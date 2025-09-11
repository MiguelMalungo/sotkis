import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectOption } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Map as MapIcon, Download, Upload, Plus } from 'lucide-react';

const SotkisRoutes = () => {
  const [filters, setFilters] = useState({
    rota: '',
    estado: '',
    dataInicio: '',
    dataFim: ''
  });

  const handleSearch = () => {
    console.log('Searching with filters:', filters);
  };

  const mockRoutes = [
    {
      id: 1,
      nome: 'Rota A1',
      estado: 'Ativa',
      dataInicio: '2024-01-15',
      dataFim: '2024-12-31',
      contentores: 25,
      distancia: '45.2 km',
      coordinates: [
        [38.7223, -9.1393],
        [38.7323, -9.1493],
        [38.7423, -9.1593]
      ]
    },
    {
      id: 2,
      nome: 'Rota B2',
      estado: 'Inativa',
      dataInicio: '2024-02-01',
      dataFim: '2024-11-30',
      contentores: 18,
      distancia: '32.8 km',
      coordinates: [
        [38.7123, -9.1293],
        [38.7023, -9.1193],
        [38.6923, -9.1093]
      ]
    },
    {
      id: 3,
      nome: 'Rota C3',
      estado: 'Ativa',
      dataInicio: '2024-01-20',
      dataFim: '2024-12-31',
      contentores: 30,
      distancia: '52.1 km',
      coordinates: [
        [38.7323, -9.1593],
        [38.7423, -9.1693],
        [38.7523, -9.1793]
      ]
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header - AT THE VERY TOP */}
      <div className="page-header text-right">
        <h1 className="text-xl font-bold text-white">Rotas Sotkis</h1>
        <p className="text-gray-300 mt-1">Gestão de rotas do sistema Sotkis</p>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-white/20 backdrop-blur-lg border-0 p-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Rota</label>
            <Input
              placeholder="Nome da rota"
              value={filters.rota}
              onChange={(e) => setFilters({ ...filters, rota: e.target.value })}
              className="bg-white/20 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>
        </Card>

        <Card className="bg-white/20 backdrop-blur-lg border-0 p-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Motorista</label>
              <Select
                value={filters.motorista}
                onChange={(e) => setFilters({ ...filters, motorista: e.target.value })}
                className="bg-white/20 border-white/20 text-white"
            >
              <SelectOption value="">Selecionar estado</SelectOption>
              <SelectOption value="ativa">Ativa</SelectOption>
              <SelectOption value="inativa">Inativa</SelectOption>
              <SelectOption value="pendente">Pendente</SelectOption>
            </Select>
          </div>
        </Card>

        <Card className="bg-white/20 backdrop-blur-lg border-0 p-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Data Início</label>
            <Input
              type="date"
              value={filters.dataInicio}
              onChange={(e) => setFilters({ ...filters, dataInicio: e.target.value })}
              className="bg-white/20 border-white/20 text-white"
            />
          </div>
        </Card>

        <Card className="bg-white/20 backdrop-blur-lg border-0 p-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Data Fim</label>
            <Input
              type="date"
              value={filters.dataFim}
              onChange={(e) => setFilters({ ...filters, dataFim: e.target.value })}
              className="bg-white/20 border-white/20 text-white"
            />
          </div>
        </Card>
      </div>

      {/* Search Button */}
      <div className="flex justify-end">
        <Button onClick={handleSearch} className="bg-sotkis-green text-black hover:bg-sotkis-green/90">
          <Search className="h-4 w-4 mr-2" />
          Pesquisar
        </Button>
      </div>

      {/* Table */}
      <Card className="bg-white/20 backdrop-blur-lg border-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-white/10">
                <TableHead className="text-white">ID</TableHead>
                <TableHead className="text-white">Nome da Rota</TableHead>
                <TableHead className="text-white">Estado</TableHead>
                <TableHead className="text-white hidden md:table-cell">Data Início</TableHead>
                <TableHead className="text-white hidden md:table-cell">Data Fim</TableHead>
                <TableHead className="text-white hidden sm:table-cell">Contentores</TableHead>
                <TableHead className="text-white hidden sm:table-cell">Distância</TableHead>
                <TableHead className="text-white">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockRoutes.map((route) => (
                <TableRow key={route.id} className="border-white/10 hover:bg-sotkis-green/20 hover:border-sotkis-green/30 transition-colors duration-200">
                  <TableCell className="text-white">{route.id}</TableCell>
                  <TableCell className="text-white">{route.nome}</TableCell>
                  <TableCell className="text-white">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      route.estado === 'Ativa' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {route.estado}
                    </span>
                  </TableCell>
                  <TableCell className="text-white hidden md:table-cell">{route.dataInicio}</TableCell>
                  <TableCell className="text-white hidden md:table-cell">{route.dataFim}</TableCell>
                  <TableCell className="text-white hidden sm:table-cell">{route.contentores}</TableCell>
                  <TableCell className="text-white hidden sm:table-cell">{route.distancia}</TableCell>
                  <TableCell className="text-white">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button size="sm" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                        Editar
                      </Button>
                      <Button size="sm" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                        Ver
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Map Section */}
      <Card className="bg-white/20 backdrop-blur-lg border-0 p-4">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h3 className="text-xl font-semibold text-white">Visualização de Mapa</h3>
            <div className="flex flex-wrap gap-2">
              <Button 
                size="sm" 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-black"
              >
                <Download className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Exportar Mapa</span>
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-black"
              >
                <Plus className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Adicionar Rota</span>
              </Button>
            </div>
          </div>
          <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg border border-white/10 bg-white/20 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <MapIcon className="w-16 h-16 mx-auto mb-4 text-sotkis-green" />
              <h3 className="text-xl font-semibold text-white mb-2">Mapa de Rotas</h3>
              <p className="mb-4">Visualização do mapa de rotas do sistema</p>
              <div className="w-full max-w-2xl h-60 sm:h-80 bg-gray-800 rounded-lg border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-sotkis-green/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapIcon className="w-6 h-6 text-sotkis-green" />
                  </div>
                  <p className="text-sm text-gray-400">Mapa interativo em desenvolvimento</p>
                  <p className="text-xs text-gray-500 mt-1">3 rotas ativas • 2 rotas inativas</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-gray-300">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-1 bg-green-500 rounded"></div>
              <span>Rotas Ativas</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-1 bg-red-500 rounded"></div>
              <span>Rotas Inativas</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Add New Route Button */}
      <div className="flex justify-center">
        <Button className="bg-sotkis-green text-black hover:bg-sotkis-green/90">
          <Plus className="h-4 w-4 mr-2" />
          Nova Rota
        </Button>
      </div>
    </div>
  );
};

export default SotkisRoutes;