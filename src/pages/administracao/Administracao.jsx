import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Plus, Search, Edit, Trash2, User, Shield } from 'lucide-react';

const Administracao = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [newUser, setNewUser] = React.useState({
    nome: '',
    email: '',
    username: '',
    role: '',
    ativo: true
  });

  // Mock data for admin users
  const mockAdminUsers = [
    { id: 1, nome: 'João Silva', email: 'joao.silva@sotkis.pt', username: 'joao.silva', role: 'Administrador', ativo: true },
    { id: 2, nome: 'Maria Santos', email: 'maria.santos@sotkis.pt', username: 'maria.santos', role: 'Supervisor', ativo: true },
    { id: 3, nome: 'Pedro Costa', email: 'pedro.costa@sotkis.pt', username: 'pedro.costa', role: 'Gestor', ativo: true },
    { id: 4, nome: 'Ana Ferreira', email: 'ana.ferreira@sotkis.pt', username: 'ana.ferreira', role: 'Administrador', ativo: false },
    { id: 5, nome: 'Carlos Oliveira', email: 'carlos.oliveira@sotkis.pt', username: 'carlos.oliveira', role: 'Supervisor', ativo: true },
  ];

  const filteredUsers = mockAdminUsers.filter(user =>
    user.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateUser = () => {
    // Handle user creation logic here
    console.log('Creating admin user:', newUser);
    setShowCreateModal(false);
    setNewUser({ nome: '', email: '', username: '', role: '', ativo: true });
  };

  const handleCancel = () => {
    setShowCreateModal(false);
    setNewUser({ nome: '', email: '', username: '', role: '', ativo: true });
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case 'Administrador':
        return <Shield className="w-4 h-4 text-red-400" />;
      case 'Supervisor':
        return <Shield className="w-4 h-4 text-yellow-400" />;
      case 'Gestor':
        return <Shield className="w-4 h-4 text-blue-400" />;
      default:
        return <User className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="p-6 space-y-6 administracao-page">
      {/* Page Header */}
      <div className="page-header text-left">
        <h1 className="text-xl font-bold text-white">Utilizadores Admin</h1>
        <p className="text-gray-300 mt-1">Administração de utilizadores do sistema</p>
      </div>

      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Pesquisar utilizadores..."
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
          Novo Utilizador
        </Button>
      </div>

      {/* Users Table */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white">Lista de Utilizadores Administrativos</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-white">Nome</TableHead>
                <TableHead className="text-white">Email</TableHead>
                <TableHead className="text-white">Username</TableHead>
                <TableHead className="text-white">Função</TableHead>
                <TableHead className="text-white">Status</TableHead>
                <TableHead className="text-white">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="text-white">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-sotkis-green" />
                      {user.nome}
                    </div>
                  </TableCell>
                  <TableCell className="text-white">{user.email}</TableCell>
                  <TableCell className="text-white">{user.username}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getRoleIcon(user.role)}
                      <span className="text-white">{user.role}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      user.ativo 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {user.ativo ? 'Ativo' : 'Inativo'}
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

      {/* Create User Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">
            <h2 className="text-xl font-bold text-white mb-4">Novo Utilizador Admin</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Nome Completo</label>
                <Input
                  value={newUser.nome}
                  onChange={(e) => setNewUser({...newUser, nome: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="Nome completo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <Input
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="email@sotkis.pt"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Username</label>
                <Input
                  value={newUser.username}
                  onChange={(e) => setNewUser({...newUser, username: e.target.value})}
                  className="bg-white/5 border-white/10 text-white"
                  placeholder="username"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Função</label>
                <select
                  value={newUser.role}
                  onChange={(e) => setNewUser({...newUser, role: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sotkis-green"
                >
                  <option value="">Selecionar função</option>
                  <option value="Administrador">Administrador</option>
                  <option value="Supervisor">Supervisor</option>
                  <option value="Gestor">Gestor</option>
                  <option value="Operador">Operador</option>
                </select>
              </div>
              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleCreateUser}
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

export default Administracao; 