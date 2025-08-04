import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { X, FileText, Printer, Download, ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const MySotkonRgpdList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recordsPerPage, setRecordsPerPage] = useState('10');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState('nome');
  const [sortDirection, setSortDirection] = useState('asc');

  // Mock data for RGPD users
  const mockRgpdUsers = [
    { id: 1, nome: 'Jorge Manuel Abrantes Ribeiro', email: 'seia@sotkon.com', dataAceitacao: '2024-05-06 12:43' },
    { id: 2, nome: 'Paulo Sergio Amaral Silva', email: 'seia@sotkon.com', dataAceitacao: '2024-05-06 12:43' },
    { id: 3, nome: '101084', email: 'seia@sotkon.com', dataAceitacao: '2024-05-06 12:43' },
    { id: 4, nome: 'Abílio Oliveira Lages', email: 'seia@sotkon.com', dataAceitacao: '2024-05-06 12:43' },
    { id: 5, nome: 'Acácio Nogueira Borges', email: 'seia@sotkon.com', dataAceitacao: '2024-05-06 12:43' },
    { id: 6, nome: 'Adelino Garcia Martins', email: 'seia@sotkon.com', dataAceitacao: '2024-05-06 12:43' },
    { id: 7, nome: 'Administração do Condomínio Bombeiros Voluntários', email: 'seia@sotkon.com', dataAceitacao: '2024-05-06 12:43' },
    { id: 8, nome: 'Adriana Sofia Batista Garcia', email: 'seia@sotkon.com', dataAceitacao: '2024-05-06 12:43' },
    { id: 9, nome: 'Adriano Almeida Rodrigues', email: 'seia@sotkon.com', dataAceitacao: '2024-05-06 12:43' },
    { id: 10, nome: 'Adriano Gaspar Ribeiro', email: 'seia@sotkon.com', dataAceitacao: '2024-05-06 12:43' },
  ];

  const totalRecords = 612;
  const recordsPerPageNum = parseInt(recordsPerPage);
  const totalPages = Math.ceil(totalRecords / recordsPerPageNum);
  const startRecord = (currentPage - 1) * recordsPerPageNum + 1;
  const endRecord = Math.min(currentPage * recordsPerPageNum, totalRecords);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (field) => {
    if (sortField !== field) {
      return <ChevronUp className="h-4 w-4 text-gray-400" />;
    }
    return sortDirection === 'asc' 
      ? <ChevronUp className="h-4 w-4 text-sotkis-green" />
      : <ChevronDown className="h-4 w-4 text-sotkis-green" />;
  };

  const filteredUsers = mockRgpdUsers.filter(user =>
    user.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExport = (type) => {
    console.log(`Exporting as ${type}`);
    // Here you would implement the actual export logic
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-4 md:space-y-0">
        <div className="space-y-2">
          <h1 className="text-xl font-bold text-white">Utilizadores que já aceitaram o documento RGPD</h1>
        </div>
        
        {/* Export Icons */}
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" className="bg-white/10 border-white/20 text-white">
            <X className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="bg-white/10 border-white/20 text-white">
            <FileText className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="bg-white/10 border-white/20 text-white">
            <Printer className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="bg-white/10 border-white/20 text-white">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Table Controls */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-white">Mostrar</span>
          <Select value={recordsPerPage} onValueChange={(value) => setRecordsPerPage(value)}>
            <SelectTrigger className="w-20 bg-white text-black border-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-sm text-white">registos</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm text-white">Procurar:</span>
          <Input
            placeholder="Pesquisar utilizadores..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64 bg-white text-black placeholder-gray-600"
          />
        </div>
      </div>

      {/* Table */}
      <Card className="bg-black/50 backdrop-blur-lg border-0 shadow-2xl rounded-xl">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-white/10">
                <TableHead 
                  className="text-white cursor-pointer hover:text-sotkis-green transition-colors"
                  onClick={() => handleSort('nome')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Nome</span>
                    {getSortIcon('nome')}
                  </div>
                </TableHead>
                <TableHead 
                  className="text-white cursor-pointer hover:text-sotkis-green transition-colors"
                  onClick={() => handleSort('email')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Email</span>
                    {getSortIcon('email')}
                  </div>
                </TableHead>
                <TableHead 
                  className="text-white cursor-pointer hover:text-sotkis-green transition-colors"
                  onClick={() => handleSort('dataAceitacao')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Data da Aceitação</span>
                    {getSortIcon('dataAceitacao')}
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id} className="border-white/10 hover:bg-white/5">
                  <TableCell className="text-white">{user.nome}</TableCell>
                  <TableCell className="text-white">{user.email}</TableCell>
                  <TableCell className="text-white">{user.dataAceitacao}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-white">
          A exibir {startRecord}-{endRecord} de {totalRecords} registos
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Anterior
          </Button>
          
          {/* Page Numbers */}
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((page) => (
              <Button
                key={page}
                variant={page === currentPage ? "default" : "outline"}
                size="sm"
                className={`w-8 h-8 ${
                  page === currentPage 
                    ? 'bg-sotkis-green text-white' 
                    : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
            
            <span className="text-white mx-1">...</span>
            
            <Button
              variant="outline"
              size="sm"
              className="w-8 h-8 bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => setCurrentPage(totalPages)}
            >
              {totalPages}
            </Button>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
          >
            Seguinte
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MySotkonRgpdList; 