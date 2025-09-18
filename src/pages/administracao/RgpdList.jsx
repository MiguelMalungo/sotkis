import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileSpreadsheet, FileText, FileDown, Printer, ChevronUp, ChevronDown, Mail } from 'lucide-react';

const RgpdList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    // Check if light theme is active
    const checkTheme = () => {
      setIsLightMode(document.body.classList.contains('light-theme'));
    };
    
    checkTheme();
    
    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  // Force green color in light mode, white in dark mode
  const iconStyle = {
    color: '#9EC043 !important',
    stroke: '#9EC043 !important',
    fill: 'none !important'
  };
  
  const iconStyleDark = {
    color: 'white !important',
    stroke: 'white !important', 
    fill: 'none !important'
  };


  // Mock data for RGPD users
  const mockRgpdUsers = [
    {
      id: 1,
      nome: 'Jorge Manuel Abrantes Ribeiro',
      email: 'seia@sotkon.com',
      dataAceitacao: '2024-05-06 12:43'
    },
    {
      id: 2,
      nome: 'Paulo Sergio Amaral Silva',
      email: 'seia@sotkon.com',
      dataAceitacao: '2024-05-06 12:43'
    },
    {
      id: 3,
      nome: '101084',
      email: 'seia@sotkon.com',
      dataAceitacao: '2024-05-06 12:43'
    },
    {
      id: 4,
      nome: 'Abílio Oliveira Lages',
      email: 'seia@sotkon.com',
      dataAceitacao: '2024-05-06 12:43'
    },
    {
      id: 5,
      nome: 'Acácio Nogueira Borges',
      email: 'seia@sotkon.com',
      dataAceitacao: '2024-05-06 12:43'
    },
    {
      id: 6,
      nome: 'Adelino Garcia Martins',
      email: 'seia@sotkon.com',
      dataAceitacao: '2024-05-06 12:43'
    },
    {
      id: 7,
      nome: 'Administração do Condomínio Bombeiros Voluntários',
      email: 'seia@sotkon.com',
      dataAceitacao: '2024-05-06 12:43'
    },
    {
      id: 8,
      nome: 'Adriana Sofia Batista Garcia',
      email: 'seia@sotkon.com',
      dataAceitacao: '2024-05-06 12:43'
    },
    {
      id: 9,
      nome: 'Adriano Almeida Rodrigues',
      email: 'seia@sotkon.com',
      dataAceitacao: '2024-05-06 12:43'
    },
    {
      id: 10,
      nome: 'Adriano Gaspar Ribeiro',
      email: 'seia@sotkon.com',
      dataAceitacao: '2024-05-06 12:43'
    }
  ];

  const filteredUsers = mockRgpdUsers.filter(user =>
    user.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
      {/* Page Header */}
      <div className="page-header text-right">
        <h1 className="text-xl font-bold text-white">RGPDs</h1>
        <p className="text-gray-300 mt-1">Gestão de utilizadores RGPD do sistema</p>
      </div>




      {/* Table Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
        <div className="flex items-center space-x-2">
          <span className="text-white">Mostrar</span>
          <Select value={recordsPerPage.toString()} onValueChange={(value) => setRecordsPerPage(parseInt(value))}>
            <SelectTrigger className="w-20 bg-white text-black">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-white">registos</span>
        </div>
        
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <span className="text-white">Procurar:</span>
          <Input
            type="text"
            placeholder=""
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-48 bg-white/10 border-white/20 text-white placeholder-gray-400"
          />
        </div>
      </div>

      {/* Main Table */}
      <Card className={isLightMode ? "card-dark-large" : "bg-white/20 backdrop-blur-lg border-0 shadow-2xl rgpd-card"}>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-white text-xl font-semibold">
            Utilizadores que já aceitaram o documento RGPD
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <FileSpreadsheet className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <FileText className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <FileDown className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Printer className="h-5 w-5" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table className="rgpd-table">
              <TableHeader>
                <TableRow className="border-white/20">
                  <TableHead className="text-white font-semibold text-center">
                    <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                      <span className="text-white text-xs sm:text-sm">Nome</span>
                      <div className="flex flex-col">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </TableHead>
                  <TableHead className="text-white font-semibold text-center">
                    <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                      <span className="text-white text-xs sm:text-sm">Email</span>
                      <div className="flex flex-col">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </TableHead>
                  <TableHead className="text-white font-semibold text-center">
                    <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                      <span className="text-white text-xs sm:text-sm">Data da Aceitação</span>
                      <div className="flex flex-col">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id} className="border-white/20 hover:bg-sotkis-green/20 hover:border-sotkis-green/30 transition-colors duration-200">
                    <TableCell className="text-white text-left">{user.nome}</TableCell>
                    <TableCell className="text-white text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Mail className="w-4 h-4 text-sotkis-green" />
                        {user.email}
                      </div>
                    </TableCell>
                    <TableCell className="text-white text-center">{user.dataAceitacao}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-between items-center">
        <div className="text-sm text-white text-center sm:text-left">
          A exibir 1-10 de 10 registos
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white text-xs sm:text-sm px-2 sm:px-3">
            Anterior
          </Button>
          <Button size="sm" className="bg-sotkis-green text-black hover:bg-sotkis-green/90 text-xs sm:text-sm px-2 sm:px-3">
            1
          </Button>
          <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white text-xs sm:text-sm px-2 sm:px-3">
            Seguinte
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RgpdList;
