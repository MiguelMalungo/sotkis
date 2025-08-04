import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Plus, Search, Edit, Trash2, Package, Box } from 'lucide-react';

const VolumesKit = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [newKitVolumeType, setNewKitVolumeType] = React.useState({
    descPT: '',
    descEN: '',
    descES: '',
    descFR: ''
  });

  // Mock data for kit volume types
  const mockKitVolumeTypes = [
    { 
      id: 1, 
      descPT: '1,3m3', 
      descEN: '1,3m3', 
      descES: '1,3m3', 
      descFR: '1,3m3' 
    },
    { 
      id: 2, 
      descPT: '120 litros', 
      descEN: '120 liters', 
      descES: '120 litros', 
      descFR: '120 litre' 
    },
    { 
      id: 3, 
      descPT: '20m3', 
      descEN: '20m3', 
      descES: '20m3', 
      descFR: '20m3' 
    },
    { 
      id: 4, 
      descPT: '240 litros', 
      descEN: '240 liters', 
      descES: '240 litros', 
      descFR: '240 litre' 
    },
    { 
      id: 5, 
      descPT: '360 litros', 
      descEN: '360 liters', 
      descES: '360 litros', 
      descFR: '360 litre' 
    },
    { 
      id: 6, 
      descPT: '3m3', 
      descEN: '3m3', 
      descES: '3m3', 
      descFR: '3m3' 
    },
    { 
      id: 7, 
      descPT: '450 litros', 
      descEN: '450 liters', 
      descES: '450 litros', 
      descFR: '450 litre' 
    },
    { 
      id: 8, 
      descPT: '4m3', 
      descEN: '4m3', 
      descES: '4m3', 
      descFR: '4m3' 
    },
    { 
      id: 9, 
      descPT: '5m3', 
      descEN: '5m3', 
      descES: '5m3', 
      descFR: '5m3' 
    },
  ];

  const filteredKitVolumeTypes = mockKitVolumeTypes.filter(kitVolumeType =>
    kitVolumeType.descPT.toLowerCase().includes(searchTerm.toLowerCase()) ||
    kitVolumeType.descEN.toLowerCase().includes(searchTerm.toLowerCase()) ||
    kitVolumeType.descES.toLowerCase().includes(searchTerm.toLowerCase()) ||
    kitVolumeType.descFR.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateKitVolumeType = () => {
    // Handle kit volume type creation logic here
    console.log('Creating kit volume type:', newKitVolumeType);
    setShowCreateModal(false);
    setNewKitVolumeType({ descPT: '', descEN: '', descES: '', descFR: '' });
  };

  const handleCancel = () => {
    setShowCreateModal(false);
    setNewKitVolumeType({ descPT: '', descEN: '', descES: '', descFR: '' });
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="page-header text-left">
        <h1 className="text-xl font-bold text-white">Tipos de Volume de Kit</h1>
        <p className="text-gray-300 mt-1">Gestão de tipos de volume de kit</p>
      </div>

      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Pesquisar tipos de volume..."
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
          Novo Tipo de Volume de Kit
        </Button>
      </div>

      {/* Kit Volume Types Table */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white">Tipos de Volume de Kit</CardTitle>
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
              {filteredKitVolumeTypes.map((kitVolumeType) => (
                <TableRow key={kitVolumeType.id}>
                  <TableCell className="text-white">
                    <div className="flex items-center gap-2">
                      <Box className="w-4 h-4 text-sotkis-green" />
                      {kitVolumeType.descPT}
                    </div>
                  </TableCell>
                  <TableCell className="text-white">{kitVolumeType.descEN}</TableCell>
                  <TableCell className="text-white">{kitVolumeType.descES}</TableCell>
                  <TableCell className="text-white">{kitVolumeType.descFR}</TableCell>
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

      {/* Create Kit Volume Type Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">
            <h2 className="text-xl font-bold text-white mb-4">Novo Tipo de Volume de Kit</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição PT</label>
                <Input
                  value={newKitVolumeType.descPT}
                  onChange={(e) => setNewKitVolumeType({...newKitVolumeType, descPT: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Descrição em Português"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição EN</label>
                <Input
                  value={newKitVolumeType.descEN}
                  onChange={(e) => setNewKitVolumeType({...newKitVolumeType, descEN: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Description in English"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição ES</label>
                <Input
                  value={newKitVolumeType.descES}
                  onChange={(e) => setNewKitVolumeType({...newKitVolumeType, descES: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Descripción en Español"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição FR</label>
                <Input
                  value={newKitVolumeType.descFR}
                  onChange={(e) => setNewKitVolumeType({...newKitVolumeType, descFR: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Description en Français"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleCreateKitVolumeType}
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

export default VolumesKit; 