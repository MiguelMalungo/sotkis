import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { Search, Edit, Trash2, ChevronUp, ChevronDown, X } from 'lucide-react';
import FloatingAddButton from '@/components/ui/FloatingAddButton';

const Contentores = () => {
  const [searchTerm, setSearchTerm] = useState('');
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
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newContainer, setNewContainer] = useState({
    descPT: '',
    descEN: '',
    descES: '',
    descFR: ''
  });


  const handleCreateContainer = () => {
    // Handle container creation logic here
    console.log('Creating container:', newContainer);
    setShowCreateModal(false);
    setNewContainer({ descPT: '', descEN: '', descES: '', descFR: '' });
  };

  const handleCancel = () => {
    setShowCreateModal(false);
    setNewContainer({ descPT: '', descEN: '', descES: '', descFR: '' });
  };

  // Mock data for containers
  const containers = [
    {
      id: 1,
      descPT: '1m3 fundo fechado koncept',
      descEN: '1m3 closed bottom koncept',
      descES: '1m3 fondo cerrado koncept',
      descFR: '1m3 fond fermé koncept'
    },
    {
      id: 2,
      descPT: '3m3 compacto metálico cogumelo',
      descEN: '3m3 compact metallic mushroom',
      descES: '3m3 compacto metálico seta',
      descFR: '3m3 compact Métallique Champignon'
    },
    {
      id: 3,
      descPT: '3m3 compacto metálico dupla argola',
      descEN: '3m3 compact metallic Double hook',
      descES: '3m3 compacto metálico doble gancho',
      descFR: '3m3 compact Métallique Doble Crochet'
    },
    {
      id: 4,
      descPT: '3m3 compacto metálico palpeur',
      descEN: '3m3 compact metalic palpeur',
      descES: '3m3 compacto metálico palpeur',
      descFR: '3m3 compact méttalique palpeur'
    },
    {
      id: 5,
      descPT: '3m3 compacto plastico Cog Bilateral',
      descEN: '3m3 compact plastic Mush Bilateral',
      descES: '3m3 compacto plastico seta Bilateral',
      descFR: '3m3 compact plastique cham bilateral'
    },
    {
      id: 6,
      descPT: '3m3 compacto plastico dupla argola',
      descEN: '3m3 compact plastic double hook',
      descES: '3m3 compacto plastico doble gancho',
      descFR: '3m3 compact plastique doble crochet'
    }
  ];

  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
      {/* Page Header - AT THE VERY TOP */}
      <div className="page-header text-right">
        <h1 className="text-xl font-bold text-white">Contentores</h1>
        <p className="text-gray-300 mt-1">Gestão de contentores do sistema</p>
      </div>


      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Pesquisar contentores..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`pl-10 ${
              isLightMode 
                ? 'bg-sotkis-green/10 border-sotkis-green/30 text-gray-900 placeholder-gray-600' 
                : 'bg-white/5 border-white/10 text-white placeholder-gray-400'
            }`}
          />
        </div>
        
      </div>

      {/* Contentores Table */}
      <Card className="bg-white/20 backdrop-blur-lg border-0">
        <CardHeader>
          <CardTitle className="text-white">Tipos de Contentor</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
            <TableHeader>
              <TableRow className="border-white/20">
                <TableHead className="text-white font-semibold text-center">
                  <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                    <span className="text-xs sm:text-sm">DescPT</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="text-white font-semibold text-center">
                  <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                    <span className="text-xs sm:text-sm">DescEN</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="text-white font-semibold text-center">
                  <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                    <span className="text-xs sm:text-sm">DescES</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="text-white font-semibold text-center">
                  <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                    <span className="text-xs sm:text-sm">DescFR</span>
                    <div className="flex flex-col">
                      <ChevronUp className="h-3 w-3" />
                      <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                </TableHead>
                <TableHead className="text-white font-semibold w-20 text-center"></TableHead>
                <TableHead className="text-white font-semibold w-20 text-center"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {containers.map((container) => (
                <TableRow key={container.id} className="border-white/20 hover:bg-sotkis-green/20 hover:border-sotkis-green/30 transition-colors duration-200">
                  <TableCell className="text-white text-left">{container.descPT}</TableCell>
                  <TableCell className="text-white text-left">{container.descEN}</TableCell>
                  <TableCell className="text-white text-left">{container.descES}</TableCell>
                  <TableCell className="text-white text-left">{container.descFR}</TableCell>
                  <TableCell className="w-20 text-center">
                    <Button variant="ghost" size="icon" className="text-sotkis-green hover:bg-sotkis-green/20">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </TableCell>
                  <TableCell className="w-20 text-center">
                    <Button variant="ghost" size="icon" className="text-sotkis-green hover:bg-sotkis-green/20">
                      <Trash2 className="h-4 w-4" />
                    </Button>
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
          <div className="text-sm text-white">
            A exibir 1-6 de 6 registos
          </div>
        </div>
        {/* Pagination buttons */}
        <div className="flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white text-xs sm:text-sm px-2 sm:px-3">
              Anterior
            </Button>
            <Button size="sm" className="bg-sotkis-green text-black hover:bg-sotkis-green/90 text-xs sm:text-sm px-2 sm:px-3">
              1
            </Button>
            <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white text-xs sm:text-sm px-2 sm:px-3">
              2
            </Button>
            <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white text-xs sm:text-sm px-2 sm:px-3">
              3
            </Button>
            <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white text-xs sm:text-sm px-2 sm:px-3">
              4
            </Button>
            <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white text-xs sm:text-sm px-2 sm:px-3">
              Seguinte
            </Button>
          </div>
        </div>
      </div>

      {/* Create Container Modal */}
      {showCreateModal && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          onClick={() => setShowCreateModal(false)}
        >
          <div 
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl shadow-2xl p-4 sm:p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto mx-4 sm:mx-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Novo Contentor</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Left Column - Form Fields */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Descrição PT:</label>
                  <Input
                    value={newContainer.descPT}
                    onChange={(e) => setNewContainer({...newContainer, descPT: e.target.value})}
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Descrição em Português"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Descrição EN:</label>
                  <Input
                    value={newContainer.descEN}
                    onChange={(e) => setNewContainer({...newContainer, descEN: e.target.value})}
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Description in English"
                  />
                </div>
              </div>

              {/* Right Column - Additional Fields */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Descrição ES:</label>
                  <Input
                    value={newContainer.descES}
                    onChange={(e) => setNewContainer({...newContainer, descES: e.target.value})}
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Descripción en Español"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Descrição FR:</label>
                  <Input
                    value={newContainer.descFR}
                    onChange={(e) => setNewContainer({...newContainer, descFR: e.target.value})}
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Description en Français"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4 mt-6 sm:mt-8">
              <Button
                onClick={handleCancel}
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 w-full sm:w-auto"
              >
                Cancelar
              </Button>
              <Button 
                onClick={handleCreateContainer}
                className="bg-sotkis-green text-black hover:bg-sotkis-green/90 w-full sm:w-auto"
              >
                Criar
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Add Button */}
      <FloatingAddButton onClick={() => setShowCreateModal(true)} />
    </div>
  );
};

export default Contentores;