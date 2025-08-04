import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Plus, Search, Edit, Trash2, Package } from 'lucide-react';

const Kits = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [newKitType, setNewKitType] = React.useState({
    descPT: '',
    descEN: '',
    descES: '',
    descFR: ''
  });

  // Mock data for kit types
  const mockKitTypes = [
    { 
      id: 1, 
      descPT: 'Apto (compacto metálico)', 
      descEN: 'Apto (Metal Compact)', 
      descES: 'Apto (compacto metálico)', 
      descFR: 'Apto (Compact Metallique)' 
    },
    { 
      id: 2, 
      descPT: 'Compactador Enterrado', 
      descEN: 'Underground Compacteur', 
      descES: 'Compactador soterrado', 
      descFR: 'Compacteur enterré' 
    },
    { 
      id: 3, 
      descPT: 'Compostor de superficie', 
      descEN: 'Surface compostor', 
      descES: 'compostador de superficie', 
      descFR: 'composteur de surface' 
    },
    { 
      id: 4, 
      descPT: 'Evos (compacto de plastico)', 
      descEN: 'Evos (compact plastic)', 
      descES: 'Evos (compacto de plastico)', 
      descFR: 'Evos (compact plastique)' 
    },
    { 
      id: 5, 
      descPT: 'Integra (carga lateral)', 
      descEN: 'Integra (side loading)', 
      descES: 'Integra (carga lateral)', 
      descFR: 'Integra (chargement latéral)' 
    },
    { 
      id: 6, 
      descPT: 'Koncept (Standard) com amortecedores', 
      descEN: 'Koncept (Standard) with gas springs', 
      descES: 'Koncept (Standard) con amortiguadores', 
      descFR: 'Koncept (Standard) avec ressort' 
    },
    { 
      id: 7, 
      descPT: 'Koncept (standard) tampa automática', 
      descEN: 'Koncept (standard) automatic lid', 
      descES: 'Koncept (standard) tapa automática', 
      descFR: 'Koncept (standard) Automatique' 
    },
    { 
      id: 8, 
      descPT: 'Koncept 1m3 com amortecedores', 
      descEN: 'Koncept 1m3 with gas springs', 
      descES: 'Koncept 1m3 con amortiguadores', 
      descFR: 'Koncept 1m3 avec ressort' 
    },
  ];

  const filteredKitTypes = mockKitTypes.filter(kitType =>
    kitType.descPT.toLowerCase().includes(searchTerm.toLowerCase()) ||
    kitType.descEN.toLowerCase().includes(searchTerm.toLowerCase()) ||
    kitType.descES.toLowerCase().includes(searchTerm.toLowerCase()) ||
    kitType.descFR.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateKitType = () => {
    // Handle kit type creation logic here
    console.log('Creating kit type:', newKitType);
    setShowCreateModal(false);
    setNewKitType({ descPT: '', descEN: '', descES: '', descFR: '' });
  };

  const handleCancel = () => {
    setShowCreateModal(false);
    setNewKitType({ descPT: '', descEN: '', descES: '', descFR: '' });
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="page-header text-left">
        <h1 className="text-xl font-bold text-white">Tipos de Kit</h1>
        <p className="text-gray-300 mt-1">Gestão de tipos de kit</p>
      </div>

      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Pesquisar tipos de kit..."
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
          Novo Tipo de Kit
        </Button>
      </div>

      {/* Kit Types Table */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white">Tipos de Kit</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-white">DescPT</TableHead>
                <TableHead className="text-white">DescEN</TableHead>
                <TableHead className="text-white">DescES</TableHead>
                <TableHead className="text-white">DescFR</TableHead>
                <TableHead className="text-white">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredKitTypes.map((kitType) => (
                <TableRow key={kitType.id}>
                  <TableCell className="text-white">
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-sotkis-green" />
                      {kitType.descPT}
                    </div>
                  </TableCell>
                  <TableCell className="text-white">{kitType.descEN}</TableCell>
                  <TableCell className="text-white">{kitType.descES}</TableCell>
                  <TableCell className="text-white">{kitType.descFR}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
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

      {/* Create Kit Type Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">
            <h2 className="text-xl font-bold text-white mb-4">Novo Tipo de Kit</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição PT</label>
                <Input
                  value={newKitType.descPT}
                  onChange={(e) => setNewKitType({...newKitType, descPT: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Descrição em Português"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição EN</label>
                <Input
                  value={newKitType.descEN}
                  onChange={(e) => setNewKitType({...newKitType, descEN: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Description in English"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição ES</label>
                <Input
                  value={newKitType.descES}
                  onChange={(e) => setNewKitType({...newKitType, descES: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Descripción en Español"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição FR</label>
                <Input
                  value={newKitType.descFR}
                  onChange={(e) => setNewKitType({...newKitType, descFR: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Description en Français"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleCreateKitType}
                  className="bg-sotkis-green hover:bg-sotkis-green/90 text-black font-semibold flex-1"
                >
                  Criar
                </Button>
                <Button
                  onClick={handleCancel}
                  variant="outline"
                  className="flex-1 border-white/20 text-white hover:bg-white/10"
                >
                  Cancelar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Kits; 