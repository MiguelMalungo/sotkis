import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';

const Paises = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [newCountry, setNewCountry] = React.useState({
    nome: '',
    codigo: '',
    codigoISO: '',
    ativo: true
  });

  // Mock data for countries
  const mockCountries = [
    { id: 1, nome: 'Portugal', codigo: 'PT', codigoISO: 'PRT', ativo: true },
    { id: 2, nome: 'Espanha', codigo: 'ES', codigoISO: 'ESP', ativo: true },
    { id: 3, nome: 'França', codigo: 'FR', codigoISO: 'FRA', ativo: true },
    { id: 4, nome: 'Alemanha', codigo: 'DE', codigoISO: 'DEU', ativo: true },
    { id: 5, nome: 'Itália', codigo: 'IT', codigoISO: 'ITA', ativo: false },
  ];

  const filteredCountries = mockCountries.filter(country =>
    country.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.codigo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.codigoISO.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateCountry = () => {
    // Handle country creation logic here
    console.log('Creating country:', newCountry);
    setShowCreateModal(false);
    setNewCountry({ nome: '', codigo: '', codigoISO: '', ativo: true });
  };

  const handleCancel = () => {
    setShowCreateModal(false);
    setNewCountry({ nome: '', codigo: '', codigoISO: '', ativo: true });
  };

  return (
    <div className="p-6 space-y-6 administracao-page">
      {/* Page Header */}
      <div className="page-header text-left">
        <h1 className="text-xl font-bold text-white">Países</h1>
        <p className="text-gray-300 mt-1">Gestão de países e territórios</p>
      </div>

      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Pesquisar países..."
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
          Novo País
        </Button>
      </div>

      {/* Countries Table */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white">Lista de Países</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-white">Nome</TableHead>
                <TableHead className="text-white">Código</TableHead>
                <TableHead className="text-white">Código ISO</TableHead>
                <TableHead className="text-white">Status</TableHead>
                <TableHead className="text-white">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCountries.map((country) => (
                <TableRow key={country.id}>
                  <TableCell className="text-white">{country.nome}</TableCell>
                  <TableCell className="text-white">{country.codigo}</TableCell>
                  <TableCell className="text-white">{country.codigoISO}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      country.ativo 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {country.ativo ? 'Ativo' : 'Inativo'}
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

      {/* Create Country Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">
            <h2 className="text-xl font-bold text-white mb-4">Novo País</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Nome</label>
                <Input
                  value={newCountry.nome}
                  onChange={(e) => setNewCountry({...newCountry, nome: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Nome do país"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Código</label>
                <Input
                  value={newCountry.codigo}
                  onChange={(e) => setNewCountry({...newCountry, codigo: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Código do país (ex: PT)"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Código ISO</label>
                <Input
                  value={newCountry.codigoISO}
                  onChange={(e) => setNewCountry({...newCountry, codigoISO: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Código ISO (ex: PRT)"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleCreateCountry}
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

export default Paises; 