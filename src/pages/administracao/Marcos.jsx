import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Plus, Search, Edit, Trash2, Tag } from 'lucide-react';

const Marcos = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [newMarkType, setNewMarkType] = React.useState({
    descPT: '',
    descEN: '',
    descES: '',
    descFR: ''
  });

  // Mock data for mark types
  const mockMarkTypes = [
    { 
      id: 1, 
      descPT: 'Diamond alçapão, porta comercial', 
      descEN: 'Diamond trapdoor, comercial door', 
      descES: 'Diamond trampilla, puerta comercial', 
      descFR: 'Diamond trappe, porte' 
    },
    { 
      id: 2, 
      descPT: 'Diamond vidro, porta comercial', 
      descEN: 'Diamond glass, commercial door', 
      descES: 'Diamond vidrio, puerta comercial', 
      descFR: 'Diamond verre, porte' 
    },
    { 
      id: 3, 
      descPT: 'Ikon (standard) 510 com pedal', 
      descEN: 'Ikon 510 with pedal', 
      descES: 'Ikon 510 con pedal', 
      descFR: 'Ikon 510 avec pédale' 
    },
    { 
      id: 4, 
      descPT: 'Ikon (standard) 510 lim. inox vidro, c/ pedal', 
      descEN: 'Ikon 510 glass inox reduction with pedal', 
      descES: 'Ikon 510 vidrio reductor inox con pedal', 
      descFR: 'Ikon 510 verre réducteur inox avec pédale' 
    },
    { 
      id: 5, 
      descPT: 'Ikon (standard) 510 lim.fibra vidro', 
      descEN: 'Ikon 510 glass fiber reduction', 
      descES: 'Ikon 510 vidrio reductor fibra', 
      descFR: 'Ikon 510 verre réducteur fibre' 
    },
    { 
      id: 6, 
      descPT: 'Ikon (standard) 510 lim.fibra vidro c/ tampa polietileno', 
      descEN: 'Ikon 510 glass fiber reduction, polyethylene lid', 
      descES: 'Ikon 510 vidrio reductor fibra, tapa polietileno', 
      descFR: 'Ikon 510 verre réducteur fibre, polyéthylène couverture' 
    },
    { 
      id: 7, 
      descPT: 'Ikon (standard) 510 lim.fibra vidro, c/ pedal', 
      descEN: 'Ikon 510 glass fiber reduction with pedal', 
      descES: 'Ikon 510 vidrio reductor fibra con pedal', 
      descFR: 'Ikon 510 verre réducteur fibre avec pédale' 
    },
  ];

  const filteredMarkTypes = mockMarkTypes.filter(markType =>
    markType.descPT.toLowerCase().includes(searchTerm.toLowerCase()) ||
    markType.descEN.toLowerCase().includes(searchTerm.toLowerCase()) ||
    markType.descES.toLowerCase().includes(searchTerm.toLowerCase()) ||
    markType.descFR.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateMarkType = () => {
    // Handle mark type creation logic here
    console.log('Creating mark type:', newMarkType);
    setShowCreateModal(false);
    setNewMarkType({ descPT: '', descEN: '', descES: '', descFR: '' });
  };

  const handleCancel = () => {
    setShowCreateModal(false);
    setNewMarkType({ descPT: '', descEN: '', descES: '', descFR: '' });
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="page-header text-left">
        <h1 className="text-xl font-bold text-white">Marcos</h1>
        <p className="text-gray-300 mt-1">Gestão de tipos de marco</p>
      </div>

      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Pesquisar tipos de marco..."
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
          Novo Tipo de Marco
        </Button>
      </div>

      {/* Mark Types Table */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white">Tipos de Marco</CardTitle>
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
              {filteredMarkTypes.map((markType) => (
                <TableRow key={markType.id}>
                  <TableCell className="text-white">
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-sotkis-green" />
                      {markType.descPT}
                    </div>
                  </TableCell>
                  <TableCell className="text-white">{markType.descEN}</TableCell>
                  <TableCell className="text-white">{markType.descES}</TableCell>
                  <TableCell className="text-white">{markType.descFR}</TableCell>
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

      {/* Create Mark Type Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">
            <h2 className="text-xl font-bold text-white mb-4">Novo Tipo de Marco</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição PT</label>
                <Input
                  value={newMarkType.descPT}
                  onChange={(e) => setNewMarkType({...newMarkType, descPT: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Descrição em Português"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição EN</label>
                <Input
                  value={newMarkType.descEN}
                  onChange={(e) => setNewMarkType({...newMarkType, descEN: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Description in English"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição ES</label>
                <Input
                  value={newMarkType.descES}
                  onChange={(e) => setNewMarkType({...newMarkType, descES: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Descripción en Español"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Descrição FR</label>
                <Input
                  value={newMarkType.descFR}
                  onChange={(e) => setNewMarkType({...newMarkType, descFR: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Description en Français"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleCreateMarkType}
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

export default Marcos; 