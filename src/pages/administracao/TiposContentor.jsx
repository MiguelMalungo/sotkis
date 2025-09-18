import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Plus, Search, Edit, Trash2, Eye, MoreHorizontal, User, Mail, Phone, MapPin, Calendar, Shield, CheckCircle, XCircle, Clock, AlertTriangle, Image, ArrowUpDown, Package, X } from 'lucide-react';

const TiposContentor = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newContainerType, setNewContainerType] = useState({
    descPT: '',
    descEN: '',
    descES: '',
    descFR: ''
  });

  // Mock data for container types
  const mockContainerTypes = [
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
    },
    { 
      id: 7, 
      descPT: '3m3 compacto plástico palpeur', 
      descEN: '3m3 compact plastic palpeur', 
      descES: '3m3 compacto plastico palpeur', 
      descFR: '3m3 compact plastique palpeur' 
    },
  ];

  const filteredContainerTypes = mockContainerTypes.filter(containerType =>
    containerType.descPT.toLowerCase().includes(searchTerm.toLowerCase()) ||
    containerType.descEN.toLowerCase().includes(searchTerm.toLowerCase()) ||
    containerType.descES.toLowerCase().includes(searchTerm.toLowerCase()) ||
    containerType.descFR.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateContainerType = () => {
    // Handle container type creation logic here
    console.log('Creating container type:', newContainerType);
    setShowCreateModal(false);
    setNewContainerType({ descPT: '', descEN: '', descES: '', descFR: '' });
  };

  const handleCancel = () => {
    setShowCreateModal(false);
    setNewContainerType({ descPT: '', descEN: '', descES: '', descFR: '' });
  };


  return (
    <div className="p-6 space-y-6">
      {/* Page Header - AT THE VERY TOP */}
      <div className="page-header text-right">
        <h1 className="text-xl font-bold text-white">Tipos de Contentor</h1>
        <p className="text-gray-300 mt-1">Gestão dos tipos de contentor do sistema</p>
      </div>


      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Pesquisar tipos de contentor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white/10 border-white/20 text-white/90 placeholder-gray-400"
          />
        </div>
        <Button
          onClick={() => setShowCreateModal(true)}
          className="bg-sotkis-green hover:bg-sotkis-green/90 text-black font-semibold"
        >
          <Plus className="w-4 h-4 mr-2" />
          Novo Tipo de Contentor
        </Button>
      </div>

      {/* Container Types Table */}
      <Card className="bg-white/20 backdrop-blur-lg border-0">
        <CardHeader>
          <CardTitle className="text-white">Tipos de Contentor</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-white">DescPT</TableHead>
                <TableHead className="text-white">DescEN</TableHead>
                <TableHead className="text-white">DescES</TableHead>
                <TableHead className="text-white">DescFR</TableHead>
                                  <TableHead className="text-white text-center">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredContainerTypes.map((containerType) => (
                <TableRow key={containerType.id} className="border-white/20 hover:bg-sotkis-green/20 hover:border-sotkis-green/30 transition-colors duration-200">
                  <TableCell className="text-white">
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-sotkis-green" />
                      {containerType.descPT}
                    </div>
                  </TableCell>
                  <TableCell className="text-white">{containerType.descEN}</TableCell>
                  <TableCell className="text-white">{containerType.descES}</TableCell>
                  <TableCell className="text-white">{containerType.descFR}</TableCell>
                  <TableCell className="text-center">
                    <div className="flex gap-2 justify-center">
                      <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Create Container Type Modal */}
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
              <h2 className="text-xl sm:text-2xl font-bold text-white">Novo Tipo de Contentor</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Left Column - Form Fields */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Descrição PT:</label>
                  <Input
                    value={newContainerType.descPT}
                    onChange={(e) => setNewContainerType({...newContainerType, descPT: e.target.value})}
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Descrição em Português"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Descrição EN:</label>
                  <Input
                    value={newContainerType.descEN}
                    onChange={(e) => setNewContainerType({...newContainerType, descEN: e.target.value})}
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
                    value={newContainerType.descES}
                    onChange={(e) => setNewContainerType({...newContainerType, descES: e.target.value})}
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Descripción en Español"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Descrição FR:</label>
                  <Input
                    value={newContainerType.descFR}
                    onChange={(e) => setNewContainerType({...newContainerType, descFR: e.target.value})}
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
                onClick={handleCreateContainerType}
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

export default TiposContentor;