import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Plus, Search, Edit, Trash2, Activity } from 'lucide-react';

const SensoresEnchimento = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [newFillSensorType, setNewFillSensorType] = React.useState({
    descPT: '',
    descEN: '',
    descES: '',
    descFR: ''
  });

  // Mock data for fill sensor types
  const mockFillSensorTypes = [
    { 
      id: 1, 
      descPT: 'Enevo WE', 
      descEN: 'Enevo WE', 
      descES: 'Enevo WE', 
      descFR: 'Enevo WE' 
    },
    { 
      id: 2, 
      descPT: 'Nenhum sensor instalado', 
      descEN: 'No sensor installed', 
      descES: 'Ningun sensor instalado', 
      descFR: 'Aucun capteur installé' 
    },
    { 
      id: 3, 
      descPT: 'SmartBin metro', 
      descEN: 'SmartBin metro', 
      descES: 'SmartBin metro', 
      descFR: 'SmartBin metro' 
    },
    { 
      id: 4, 
      descPT: 'SmartBin Ubi C', 
      descEN: 'SmartBin Ubi C', 
      descES: 'SmartBin Ubi C', 
      descFR: 'SmartBin Ubi C' 
    },
    { 
      id: 5, 
      descPT: 'Tst Compta', 
      descEN: 'Tst Compta', 
      descES: 'Tst Compta', 
      descFR: 'Tst Compta' 
    },
  ];

  const filteredFillSensorTypes = mockFillSensorTypes.filter(fillSensorType =>
    fillSensorType.descPT.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fillSensorType.descEN.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fillSensorType.descES.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fillSensorType.descFR.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateFillSensorType = () => {
    // Handle fill sensor type creation logic here
    console.log('Creating fill sensor type:', newFillSensorType);
    setShowCreateModal(false);
    setNewFillSensorType({ descPT: '', descEN: '', descES: '', descFR: '' });
  };

  const handleCancel = () => {
    setShowCreateModal(false);
    setNewFillSensorType({ descPT: '', descEN: '', descES: '', descFR: '' });
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="page-header text-left">
        <h1 className="text-xl font-bold text-white">Tipos de Sensor de Enchimento</h1>
        <p className="text-gray-300 mt-1">Gestão de tipos de sensor de enchimento</p>
      </div>

      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Pesquisar tipos de sensor..."
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
          Novo Tipo de Sensor de Enchimento
        </Button>
      </div>

      {/* Fill Sensor Types Table */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white">Tipos de Sensor de Enchimento</CardTitle>
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
              {filteredFillSensorTypes.map((fillSensorType) => (
                <TableRow key={fillSensorType.id}>
                  <TableCell className="text-white">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-sotkis-green" />
                      {fillSensorType.descPT}
                    </div>
                  </TableCell>
                  <TableCell className="text-white">{fillSensorType.descEN}</TableCell>
                  <TableCell className="text-white">{fillSensorType.descES}</TableCell>
                  <TableCell className="text-white">{fillSensorType.descFR}</TableCell>
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

      {/* Create Fill Sensor Type Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">
            <h2 className="text-xl font-bold text-white mb-4">Novo Tipo de Sensor de Enchimento</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição PT</label>
                <Input
                  value={newFillSensorType.descPT}
                  onChange={(e) => setNewFillSensorType({...newFillSensorType, descPT: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Descrição em Português"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição EN</label>
                <Input
                  value={newFillSensorType.descEN}
                  onChange={(e) => setNewFillSensorType({...newFillSensorType, descEN: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Description in English"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição ES</label>
                <Input
                  value={newFillSensorType.descES}
                  onChange={(e) => setNewFillSensorType({...newFillSensorType, descES: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Descripción en Español"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição FR</label>
                <Input
                  value={newFillSensorType.descFR}
                  onChange={(e) => setNewFillSensorType({...newFillSensorType, descFR: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Description en Français"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleCreateFillSensorType}
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

export default SensoresEnchimento; 