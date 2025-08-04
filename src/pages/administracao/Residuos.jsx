import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Plus, Search, Edit, Trash2, Recycle } from 'lucide-react';

const Residuos = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [newWasteType, setNewWasteType] = React.useState({
    descPT: '',
    descEN: '',
    descES: '',
    descFR: ''
  });

  // Mock data for waste types
  const mockWasteTypes = [
    { 
      id: 1, 
      descPT: 'Eletronico', 
      descEN: 'Electronic', 
      descES: 'Electronica', 
      descFR: 'Electronique' 
    },
    { 
      id: 2, 
      descPT: 'Indiferenciado', 
      descEN: 'General Waste', 
      descES: 'Indiferenciado', 
      descFR: 'Ordures menageres' 
    },
    { 
      id: 3, 
      descPT: 'Oleo alimentar', 
      descEN: 'Used cooking oil', 
      descES: 'Aceite de cocina', 
      descFR: 'Huille de cuisine' 
    },
    { 
      id: 4, 
      descPT: 'Organico (biorresiduos)', 
      descEN: 'Organic', 
      descES: 'Materia Organica', 
      descFR: 'Bio-Dechets' 
    },
    { 
      id: 5, 
      descPT: 'Papel/cartao', 
      descEN: 'Paper/Cardboard', 
      descES: 'Papel/Carton', 
      descFR: 'Papiers' 
    },
    { 
      id: 6, 
      descPT: 'Plastico/Embalagens', 
      descEN: 'Pastic', 
      descES: 'Envases', 
      descFR: 'Emballages' 
    },
    { 
      id: 7, 
      descPT: 'Reciclavel', 
      descEN: 'Recycling', 
      descES: 'Reciclado', 
      descFR: 'Recyclables' 
    },
    { 
      id: 8, 
      descPT: 'Vidro', 
      descEN: 'Glass', 
      descES: 'Vidrio', 
      descFR: 'Verre' 
    },
  ];

  const filteredWasteTypes = mockWasteTypes.filter(wasteType =>
    wasteType.descPT.toLowerCase().includes(searchTerm.toLowerCase()) ||
    wasteType.descEN.toLowerCase().includes(searchTerm.toLowerCase()) ||
    wasteType.descES.toLowerCase().includes(searchTerm.toLowerCase()) ||
    wasteType.descFR.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateWasteType = () => {
    // Handle waste type creation logic here
    console.log('Creating waste type:', newWasteType);
    setShowCreateModal(false);
    setNewWasteType({ descPT: '', descEN: '', descES: '', descFR: '' });
  };

  const handleCancel = () => {
    setShowCreateModal(false);
    setNewWasteType({ descPT: '', descEN: '', descES: '', descFR: '' });
  };

  return (
    <div className="p-6 space-y-6 administracao-page">
      {/* Page Header */}
      <div className="page-header text-left">
        <h1 className="text-xl font-bold text-white">Tipos de Resíduo</h1>
        <p className="text-gray-300 mt-1">Gestão de tipos de resíduo</p>
      </div>

      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Pesquisar tipos de resíduo..."
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
          Novo Resíduo
        </Button>
      </div>

      {/* Waste Types Table */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white">Tipos de Resíduo</CardTitle>
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
              {filteredWasteTypes.map((wasteType) => (
                <TableRow key={wasteType.id}>
                  <TableCell className="text-white">
                    <div className="flex items-center gap-2">
                      <Recycle className="w-4 h-4 text-sotkis-green" />
                      {wasteType.descPT}
                    </div>
                  </TableCell>
                  <TableCell className="text-white">{wasteType.descEN}</TableCell>
                  <TableCell className="text-white">{wasteType.descES}</TableCell>
                  <TableCell className="text-white">{wasteType.descFR}</TableCell>
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

      {/* Create Waste Type Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">
            <h2 className="text-xl font-bold text-white mb-4">Novo Tipo de Resíduo</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição PT</label>
                <Input
                  value={newWasteType.descPT}
                  onChange={(e) => setNewWasteType({...newWasteType, descPT: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Descrição em Português"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição EN</label>
                <Input
                  value={newWasteType.descEN}
                  onChange={(e) => setNewWasteType({...newWasteType, descEN: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Description in English"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição ES</label>
                <Input
                  value={newWasteType.descES}
                  onChange={(e) => setNewWasteType({...newWasteType, descES: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Descripción en Español"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição FR</label>
                <Input
                  value={newWasteType.descFR}
                  onChange={(e) => setNewWasteType({...newWasteType, descFR: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Description en Français"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleCreateWasteType}
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

export default Residuos; 