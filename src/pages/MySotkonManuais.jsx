import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Plus, Search, Edit, Trash2, FileText, Download, Printer, X } from 'lucide-react';

const MySotkonManuais = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  // Mock data for manuals
  const mockManuais = [
    {
      id: 1,
      modulo: '1',
      nome: 'Instruções de Instalação 3m3',
      versao: 'V3',
      nivel: '1'
    }
  ];

  const filteredManuais = mockManuais.filter(manual =>
    manual.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    manual.modulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    manual.versao.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="page-header text-left">
        <h1 className="text-xl font-bold text-white">Manuais</h1>
        <p className="text-gray-300 mt-1">Gestão de manuais do My Sotkon</p>
      </div>

      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Pesquisar manuais..."
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
          Novo Manual
        </Button>
      </div>

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
                  Módulo
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Nome
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Versão
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Nível
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="w-20 text-white">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredManuais.map((manual) => (
                <TableRow key={manual.id}>
                  <TableCell className="text-white">{manual.modulo}</TableCell>
                  <TableCell className="text-white">{manual.nome}</TableCell>
                  <TableCell className="text-white">{manual.versao}</TableCell>
                  <TableCell className="text-white">{manual.nivel}</TableCell>
                  <TableCell>
                    <div className="flex space-x-1">
                      <Button variant="outline" size="icon" className="h-8 w-8 border-white/20 text-white hover:bg-white/10">
                        <Download className="h-4 w-4 text-sotkis-green" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8 border-white/20 text-white hover:bg-white/10">
                        <Trash2 className="h-4 w-4 text-red-500" />
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
        <div className="text-sm text-gray-300">
          A exibir 1-1 de 1 registos
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" disabled className="border-white/20 text-white">
            Anterior
          </Button>
          <Button className="bg-sotkis-green text-black hover:bg-sotkis-green/90" size="sm">
            1
          </Button>
          <Button variant="outline" size="sm" disabled className="border-white/20 text-white">
            Seguinte
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MySotkonManuais; 