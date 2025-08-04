import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Plus, Search, Edit, Trash2, Lock } from 'lucide-react';

const ControlosAcesso = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [newAccessControl, setNewAccessControl] = React.useState({
    descPT: '',
    descEN: '',
    descES: '',
    descFR: ''
  });

  // Mock data for access controls
  const mockAccessControls = [
    { 
      id: 1, 
      descPT: 'Digi Bluetooth (EMZ)', 
      descEN: 'Digi Bluetooth (EMZ)', 
      descES: 'Digi Bluetooth (EMZ)', 
      descFR: 'Digi Bluetooth (EMZ)' 
    },
    { 
      id: 2, 
      descPT: 'Flex Basic (EMZ)', 
      descEN: 'Flex Basic (EMZ)', 
      descES: 'Flex Basic (EMZ)', 
      descFR: 'Flex Basic (EMZ)' 
    },
    { 
      id: 3, 
      descPT: 'Flex com fecho quadro (EMZ)', 
      descEN: 'Flex with quadro lock (EMZ)', 
      descES: 'Flex con cierre quadro (EMZ)', 
      descFR: 'Flex avec quadro loquet (EMZ)' 
    },
    { 
      id: 4, 
      descPT: 'Flex FXA (EMZ)', 
      descEN: 'Flex FXA (EMZ)', 
      descES: 'Flex FXA (EMZ)', 
      descFR: 'Flex FXA (EMZ)' 
    },
    { 
      id: 5, 
      descPT: 'Flex standard (EMZ)', 
      descEN: 'Flex standard (EMZ)', 
      descES: 'Flex standard (EMZ)', 
      descFR: 'Flex standard (EMZ)' 
    },
    { 
      id: 6, 
      descPT: 'Quadro E Box (EMZ)', 
      descEN: 'Quadro E Box (EMZ)', 
      descES: 'Quadro E Box (EMZ)', 
      descFR: 'Quadro E Box (EMZ)' 
    },
    { 
      id: 7, 
      descPT: 'Sem controlo de acesso instalado', 
      descEN: 'Without acess control', 
      descES: 'Sin controlo de accesso', 
      descFR: 'pas de contrôle d\'accès' 
    },
    { 
      id: 8, 
      descPT: 'Tambor NFC 30L (EMZ)', 
      descEN: 'Tambor NFC 30L (EMZ)', 
      descES: 'Tambor NFC 30L (EMZ)', 
      descFR: 'Tambor NFC 30L (EMZ)' 
    },
  ];

  const filteredAccessControls = mockAccessControls.filter(accessControl =>
    accessControl.descPT.toLowerCase().includes(searchTerm.toLowerCase()) ||
    accessControl.descEN.toLowerCase().includes(searchTerm.toLowerCase()) ||
    accessControl.descES.toLowerCase().includes(searchTerm.toLowerCase()) ||
    accessControl.descFR.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateAccessControl = () => {
    // Handle access control creation logic here
    console.log('Creating access control:', newAccessControl);
    setShowCreateModal(false);
    setNewAccessControl({ descPT: '', descEN: '', descES: '', descFR: '' });
  };

  const handleCancel = () => {
    setShowCreateModal(false);
    setNewAccessControl({ descPT: '', descEN: '', descES: '', descFR: '' });
  };

  return (
    <div className="p-6 space-y-6 administracao-page">
      {/* Page Header */}
      <div className="page-header text-left">
        <h1 className="text-xl font-bold text-white">Controlos de Acesso</h1>
        <p className="text-gray-300 mt-1">Gestão de tipos de controlo de acesso</p>
      </div>

      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Pesquisar controlos de acesso..."
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
          Novo Controlo de Acesso
        </Button>
      </div>

      {/* Access Controls Table */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white">Tipos de Controlo de Acesso</CardTitle>
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
              {filteredAccessControls.map((accessControl) => (
                <TableRow key={accessControl.id}>
                  <TableCell className="text-white">
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-sotkis-green" />
                      {accessControl.descPT}
                    </div>
                  </TableCell>
                  <TableCell className="text-white">{accessControl.descEN}</TableCell>
                  <TableCell className="text-white">{accessControl.descES}</TableCell>
                  <TableCell className="text-white">{accessControl.descFR}</TableCell>
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

      {/* Create Access Control Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">
            <h2 className="text-xl font-bold text-white mb-4">Novo Controlo de Acesso</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição PT</label>
                <Input
                  value={newAccessControl.descPT}
                  onChange={(e) => setNewAccessControl({...newAccessControl, descPT: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Descrição em Português"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição EN</label>
                <Input
                  value={newAccessControl.descEN}
                  onChange={(e) => setNewAccessControl({...newAccessControl, descEN: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Description in English"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição ES</label>
                <Input
                  value={newAccessControl.descES}
                  onChange={(e) => setNewAccessControl({...newAccessControl, descES: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Descripción en Español"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição FR</label>
                <Input
                  value={newAccessControl.descFR}
                  onChange={(e) => setNewAccessControl({...newAccessControl, descFR: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Description en Français"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleCreateAccessControl}
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

export default ControlosAcesso; 