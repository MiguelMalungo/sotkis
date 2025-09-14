import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Plus, Search, Edit, Trash2, FileText, Download, Printer, X, ChevronUp, ChevronDown } from 'lucide-react';
import SubmenuBar from '../components/ui/SubmenuBar';

const MySotkonManuais = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsLightMode(document.body.classList.contains('light-theme'));
    };
    
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

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

  const submenuLinks = [
    { label: 'Manuais', to: '/my-sotkon/manuais' },
    { label: 'Departamentos', to: '/my-sotkon/departamentos' },
    { label: 'Ilhas', to: '/my-sotkon/ilhas' },
    { label: 'Contentores', to: '/my-sotkon/contentores' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header - AT THE VERY TOP */}
      <div className="page-header text-right">
        <h1 className="text-xl font-bold text-white">Manuais</h1>
        <p className="text-gray-300 mt-1">Gestão de manuais do My Sotkon</p>
      </div>

      {/* SubmenuBar */}
      <SubmenuBar items={submenuLinks} />

      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Pesquisar manuais..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`pl-10 ${
              isLightMode 
                ? 'bg-sotkis-green/10 border-sotkis-green/30 text-gray-900 placeholder-gray-600' 
                : 'bg-white/5 border-white/10 text-white placeholder-gray-400'
            }`}
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
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
        
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <span className="text-sm text-white">Procurar:</span>
          <Input
            placeholder="Pesquisar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-64 bg-white/5 border-white/10 text-white placeholder-gray-400"
          />
        </div>
      </div>

      {/* Table */}
      <Card className="bg-white/20 backdrop-blur-lg border-0">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="cursor-pointer text-white">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Módulo</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Nome</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Versão</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  <div className="flex items-center justify-center space-x-2">
                    <span>Nível</span>
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
              {filteredManuais.map((manual) => (
                <TableRow key={manual.id} className="border-white/20 hover:bg-sotkis-green/20 hover:border-sotkis-green/30 transition-colors duration-200">
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
          </div>
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="space-y-4">
        {/* Pagination info text */}
        <div className="text-center">
          <div className="text-sm text-gray-300">
            A exibir 1-1 de 1 registos
          </div>
        </div>
        {/* Pagination buttons */}
        <div className="flex justify-center">
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
      
      {/* Create Manual Modal */}
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

            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Criar novo manual</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowCreateModal(false)}
                className="text-white hover:bg-white/10 p-2"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Section - Manual Details Form */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Nome:</label>
                  <Input
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Nome do manual"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Descrição:</label>
                  <textarea
                    className="w-full h-24 p-3 bg-white text-black placeholder-gray-600 rounded-md border border-gray-300 resize-none"
                    placeholder="Descrição do manual"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Versão:</label>
                  <Input
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Versão do manual"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Módulo:</label>
                  <Select>
                    <SelectTrigger className="bg-white text-black">
                      <SelectValue placeholder="Selecione módulo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="My Sotkon">My Sotkon</SelectItem>
                      <SelectItem value="Sotkis Access">Sotkis Access</SelectItem>
                      <SelectItem value="Sotkis Level">Sotkis Level</SelectItem>
                      <SelectItem value="Sotkis Playt">Sotkis Playt</SelectItem>
                      <SelectItem value="Sotcare">Sotcare</SelectItem>
                      <SelectItem value="Compliance">Compliance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Nível:</label>
                  <Select>
                    <SelectTrigger className="bg-white text-black">
                      <SelectValue placeholder="Selecione nível" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Básico">Básico</SelectItem>
                      <SelectItem value="Intermediário">Intermediário</SelectItem>
                      <SelectItem value="Avançado">Avançado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Ficheiro:</label>
                  <div className="flex gap-2">
                    <Input
                      className="bg-white text-black placeholder-gray-600"
                      placeholder="Selecionar ficheiro"
                      readOnly
                    />
                    <Button variant="outline" className="bg-white text-black border-gray-300">
                      Browse
                    </Button>
                  </div>
                  <p className="text-xs text-gray-400">Formato do ficheiro: .pdf</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Ativo:</label>
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

              {/* Right Section - Departments Selection */}
              <div className="space-y-4">
                <label className="text-sm font-medium text-white">Departamentos:</label>
                <div className="space-y-2 max-h-80 overflow-y-auto">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="dept1" className="w-4 h-4" />
                    <label htmlFor="dept1" className="text-white">Faro-PT 999990004</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="dept2" className="w-4 h-4" />
                    <label htmlFor="dept2" className="text-white">Lisboa-PT 999990006</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="dept3" className="w-4 h-4" />
                    <label htmlFor="dept3" className="text-white">Vilamoura</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="dept4" className="w-4 h-4" />
                    <label htmlFor="dept4" className="text-white">Funchal</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="dept5" className="w-4 h-4" />
                    <label htmlFor="dept5" className="text-white">Barcelos-PT 999990003</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="dept6" className="w-4 h-4" />
                    <label htmlFor="dept6" className="text-white">Entroncamento</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="dept7" className="w-4 h-4" />
                    <label htmlFor="dept7" className="text-white">Ponta Delgada</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="dept8" className="w-4 h-4" />
                    <label htmlFor="dept8" className="text-white">Oceano Atlântico Apartamentos - Portimão</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="dept9" className="w-4 h-4" />
                    <label htmlFor="dept9" className="text-white">Albergaria-a-Velha</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="dept10" className="w-4 h-4" />
                    <label htmlFor="dept10" className="text-white">Alcanena</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="dept11" className="w-4 h-4" />
                    <label htmlFor="dept11" className="text-white">Tomar</label>
                  </div>
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
                  // Handle create manual logic here
                  console.log('Creating new manual');
                  setShowCreateModal(false);
                }}
                className="bg-sotkis-green text-black hover:bg-sotkis-green/90 w-full sm:w-auto"
              >
                Criar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MySotkonManuais;