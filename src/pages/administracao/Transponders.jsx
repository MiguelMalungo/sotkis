import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Plus, Search, Edit, Trash2, Radio } from 'lucide-react';

const Transponders = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [newTransponder, setNewTransponder] = React.useState({
    descPT: '',
    descEN: '',
    descES: '',
    descFR: ''
  });

  // Mock data for transponders
  const mockTransponders = [
    { 
      id: 1, 
      descPT: 'CARTÃO', 
      descEN: 'CARD', 
      descES: 'TARJETA', 
      descFR: 'CARTE' 
    },
    { 
      id: 2, 
      descPT: 'TAG', 
      descEN: 'TAG', 
      descES: 'TAG', 
      descFR: 'TAG' 
    },
    { 
      id: 3, 
      descPT: 'CHIP RFID', 
      descEN: 'RFID CHIP', 
      descES: 'CHIP RFID', 
      descFR: 'PUCE RFID' 
    },
    { 
      id: 4, 
      descPT: 'SENSOR', 
      descEN: 'SENSOR', 
      descES: 'SENSOR', 
      descFR: 'CAPTEUR' 
    },
  ];

  const filteredTransponders = mockTransponders.filter(transponder =>
    transponder.descPT.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transponder.descEN.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transponder.descES.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transponder.descFR.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateTransponder = () => {
    // Handle transponder creation logic here
    console.log('Creating transponder:', newTransponder);
    setShowCreateModal(false);
    setNewTransponder({ descPT: '', descEN: '', descES: '', descFR: '' });
  };

  const handleCancel = () => {
    setShowCreateModal(false);
    setNewTransponder({ descPT: '', descEN: '', descES: '', descFR: '' });
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="page-header text-left">
        <h1 className="text-xl font-bold text-white">Transponders</h1>
        <p className="text-gray-300 mt-1">Gestão de tipos de transponder</p>
      </div>

      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Pesquisar transponders..."
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
          Novo Transponder
        </Button>
      </div>

      {/* Transponders Table */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white">Tipo de Transponder</CardTitle>
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
              {filteredTransponders.map((transponder) => (
                <TableRow key={transponder.id}>
                  <TableCell className="text-white">
                    <div className="flex items-center gap-2">
                      <Radio className="w-4 h-4 text-sotkis-green" />
                      {transponder.descPT}
                    </div>
                  </TableCell>
                  <TableCell className="text-white">{transponder.descEN}</TableCell>
                  <TableCell className="text-white">{transponder.descES}</TableCell>
                  <TableCell className="text-white">{transponder.descFR}</TableCell>
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

      {/* Create Transponder Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">
            <h2 className="text-xl font-bold text-white mb-4">Novo Transponder</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição PT</label>
                <Input
                  value={newTransponder.descPT}
                  onChange={(e) => setNewTransponder({...newTransponder, descPT: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Descrição em Português"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição EN</label>
                <Input
                  value={newTransponder.descEN}
                  onChange={(e) => setNewTransponder({...newTransponder, descEN: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Description in English"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição ES</label>
                <Input
                  value={newTransponder.descES}
                  onChange={(e) => setNewTransponder({...newTransponder, descES: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Descripción en Español"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição FR</label>
                <Input
                  value={newTransponder.descFR}
                  onChange={(e) => setNewTransponder({...newTransponder, descFR: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Description en Français"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleCreateTransponder}
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

export default Transponders; 