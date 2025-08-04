import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Plus, Search, Edit, Trash2, Key } from 'lucide-react';

const EstadosChavesRfid = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [newRfidKeyState, setNewRfidKeyState] = React.useState({
    descPT: '',
    descEN: '',
    descES: '',
    descFR: ''
  });

  // Mock data for RFID key states
  const mockRfidKeyStates = [
    { 
      id: 1, 
      descPT: 'Ativo', 
      descEN: 'Active', 
      descES: 'Activo', 
      descFR: 'Active' 
    },
    { 
      id: 2, 
      descPT: 'Inativo', 
      descEN: 'Inactive', 
      descES: 'Inactivo', 
      descFR: 'Inactive' 
    },
    { 
      id: 3, 
      descPT: 'Perdido', 
      descEN: 'Lost', 
      descES: 'Extraviado', 
      descFR: 'Perdu' 
    },
    { 
      id: 4, 
      descPT: 'Danificado', 
      descEN: 'Damaged', 
      descES: 'Dañado', 
      descFR: 'Endommagé' 
    },
  ];

  const filteredRfidKeyStates = mockRfidKeyStates.filter(rfidKeyState =>
    rfidKeyState.descPT.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rfidKeyState.descEN.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rfidKeyState.descES.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rfidKeyState.descFR.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateRfidKeyState = () => {
    // Handle RFID key state creation logic here
    console.log('Creating RFID key state:', newRfidKeyState);
    setShowCreateModal(false);
    setNewRfidKeyState({ descPT: '', descEN: '', descES: '', descFR: '' });
  };

  const handleCancel = () => {
    setShowCreateModal(false);
    setNewRfidKeyState({ descPT: '', descEN: '', descES: '', descFR: '' });
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="page-header text-left">
        <h1 className="text-xl font-bold text-white">Estados das Chaves RFID</h1>
        <p className="text-gray-300 mt-1">Gestão de estados das chaves RFID</p>
      </div>

      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Pesquisar estados das chaves..."
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
          Novo Estado das Chaves RFID
        </Button>
      </div>

      {/* RFID Key States Table */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white">Tipos de Estado das Chaves RFID</CardTitle>
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
              {filteredRfidKeyStates.map((rfidKeyState) => (
                <TableRow key={rfidKeyState.id}>
                  <TableCell className="text-white">
                    <div className="flex items-center gap-2">
                      <Key className="w-4 h-4 text-sotkis-green" />
                      {rfidKeyState.descPT}
                    </div>
                  </TableCell>
                  <TableCell className="text-white">{rfidKeyState.descEN}</TableCell>
                  <TableCell className="text-white">{rfidKeyState.descES}</TableCell>
                  <TableCell className="text-white">{rfidKeyState.descFR}</TableCell>
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

      {/* Create RFID Key State Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">
            <h2 className="text-xl font-bold text-white mb-4">Novo Estado das Chaves RFID</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição PT</label>
                <Input
                  value={newRfidKeyState.descPT}
                  onChange={(e) => setNewRfidKeyState({...newRfidKeyState, descPT: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Descrição em Português"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição EN</label>
                <Input
                  value={newRfidKeyState.descEN}
                  onChange={(e) => setNewRfidKeyState({...newRfidKeyState, descEN: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Description in English"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição ES</label>
                <Input
                  value={newRfidKeyState.descES}
                  onChange={(e) => setNewRfidKeyState({...newRfidKeyState, descES: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Descripción en Español"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição FR</label>
                <Input
                  value={newRfidKeyState.descFR}
                  onChange={(e) => setNewRfidKeyState({...newRfidKeyState, descFR: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Description en Français"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleCreateRfidKeyState}
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

export default EstadosChavesRfid; 