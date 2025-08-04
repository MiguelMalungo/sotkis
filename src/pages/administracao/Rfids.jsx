import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Plus, Search, Edit, Trash2, Wifi } from 'lucide-react';

const Rfids = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [newRfid, setNewRfid] = React.useState({
    codigo: '',
    tipo: '',
    localizacao: '',
    ativo: true
  });

  // Mock data for RFIDs
  const mockRfids = [
    { id: 1, codigo: 'RFID001', tipo: 'Container', localizacao: 'Porto Santo', ativo: true },
    { id: 2, codigo: 'RFID002', tipo: 'Container', localizacao: 'Madeira', ativo: true },
    { id: 3, codigo: 'RFID003', tipo: 'Depósito', localizacao: 'São Miguel', ativo: true },
    { id: 4, codigo: 'RFID004', tipo: 'Container', localizacao: 'Terceira', ativo: false },
    { id: 5, codigo: 'RFID005', tipo: 'Depósito', localizacao: 'Porto Santo', ativo: true },
  ];

  const filteredRfids = mockRfids.filter(rfid =>
    rfid.codigo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rfid.tipo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rfid.localizacao.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateRfid = () => {
    // Handle RFID creation logic here
    console.log('Creating RFID:', newRfid);
    setShowCreateModal(false);
    setNewRfid({ codigo: '', tipo: '', localizacao: '', ativo: true });
  };

  const handleCancel = () => {
    setShowCreateModal(false);
    setNewRfid({ codigo: '', tipo: '', localizacao: '', ativo: true });
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="page-header text-left">
        <h1 className="text-3xl font-bold text-white">RFIDs</h1>
        <p className="text-gray-300 mt-1">Gestão de dispositivos RFID</p>
      </div>

      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Pesquisar RFIDs..."
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
          Novo RFID
        </Button>
      </div>

      {/* RFIDs Table */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white">Lista de RFIDs</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-white">Código</TableHead>
                <TableHead className="text-white">Tipo</TableHead>
                <TableHead className="text-white">Localização</TableHead>
                <TableHead className="text-white">Status</TableHead>
                <TableHead className="text-white">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRfids.map((rfid) => (
                <TableRow key={rfid.id}>
                  <TableCell className="text-white">
                    <div className="flex items-center gap-2">
                      <Wifi className="w-4 h-4 text-sotkis-green" />
                      {rfid.codigo}
                    </div>
                  </TableCell>
                  <TableCell className="text-white">{rfid.tipo}</TableCell>
                  <TableCell className="text-white">{rfid.localizacao}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      rfid.ativo 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {rfid.ativo ? 'Ativo' : 'Inativo'}
                    </span>
                  </TableCell>
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

      {/* Create RFID Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">
            <h2 className="text-xl font-bold text-white mb-4">Novo RFID</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Código</label>
                <Input
                  value={newRfid.codigo}
                  onChange={(e) => setNewRfid({...newRfid, codigo: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Código do RFID"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Tipo</label>
                <select
                  value={newRfid.tipo}
                  onChange={(e) => setNewRfid({...newRfid, tipo: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sotkis-green"
                >
                  <option value="">Selecionar tipo</option>
                  <option value="Container">Container</option>
                  <option value="Depósito">Depósito</option>
                  <option value="Veículo">Veículo</option>
                  <option value="Equipamento">Equipamento</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Localização</label>
                <Input
                  value={newRfid.localizacao}
                  onChange={(e) => setNewRfid({...newRfid, localizacao: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Localização do RFID"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleCreateRfid}
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

export default Rfids; 