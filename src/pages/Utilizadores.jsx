import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectOption } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  Search, 
  Filter, 
  Download, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  MoreHorizontal,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Shield,
  CheckCircle,
  XCircle,
  Clock,
  X,
  ChevronDown
} from 'lucide-react';

// Mock user data
const mockUsers = [
  {
    id: 1,
    name: "João Silva",
    email: "joao.silva@sotkis.com",
    phone: "+351 912 345 678",
    role: "Administrador",
    department: "Centro",
    status: "active",
    lastLogin: "2025-01-14 14:30",
    createdAt: "2024-03-15",
    deposits: 45,
    zone: "Lisboa"
  },
  {
    id: 2,
    name: "Maria Santos",
    email: "maria.santos@sotkis.com",
    phone: "+351 923 456 789",
    role: "Operador",
    department: "Norte",
    status: "active",
    lastLogin: "2025-01-14 13:45",
    createdAt: "2024-06-20",
    deposits: 38,
    zone: "Porto"
  },
  {
    id: 3,
    name: "Pedro Costa",
    email: "pedro.costa@sotkis.com",
    phone: "+351 934 567 890",
    role: "Supervisor",
    department: "Sul",
    status: "inactive",
    lastLogin: "2025-01-10 09:15",
    createdAt: "2024-01-10",
    deposits: 52,
    zone: "Faro"
  },
  {
    id: 4,
    name: "Ana Oliveira",
    email: "ana.oliveira@sotkis.com",
    phone: "+351 945 678 901",
    role: "Operador",
    department: "Este",
    status: "active",
    lastLogin: "2025-01-14 12:15",
    createdAt: "2024-08-05",
    deposits: 29,
    zone: "Coimbra"
  },
  {
    id: 5,
    name: "Carlos Ferreira",
    email: "carlos.ferreira@sotkis.com",
    phone: "+351 956 789 012",
    role: "Administrador",
    department: "Oeste",
    status: "active",
    lastLogin: "2025-01-14 16:00",
    createdAt: "2024-02-28",
    deposits: 41,
    zone: "Leiria"
  },
  {
    id: 6,
    name: "Sofia Martins",
    email: "sofia.martins@sotkis.com",
    phone: "+351 967 890 123",
    role: "Operador",
    department: "Centro",
    status: "pending",
    lastLogin: "2025-01-14 11:30",
    createdAt: "2024-11-12",
    deposits: 33,
    zone: "Lisboa"
  },
  {
    id: 7,
    name: "Miguel Rodrigues",
    email: "miguel.rodrigues@sotkis.com",
    phone: "+351 978 901 234",
    role: "Supervisor",
    department: "Norte",
    status: "active",
    lastLogin: "2025-01-14 17:15",
    createdAt: "2024-04-18",
    deposits: 47,
    zone: "Porto"
  },
  {
    id: 8,
    name: "Inês Pereira",
    email: "ines.pereira@sotkis.com",
    phone: "+351 989 012 345",
    role: "Operador",
    department: "Sul",
    status: "active",
    lastLogin: "2025-01-14 10:45",
    createdAt: "2024-09-30",
    deposits: 36,
    zone: "Faro"
  }
];

const Utilizadores = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [showCreateUserModal, setShowCreateUserModal] = useState(false);
  const itemsPerPage = 6;

  // Form state for new user
  const [newUser, setNewUser] = useState({
    nome: '',
    username: 'mguedes',
    password: '••••••••',
    confirmPassword: '',
    email: '',
    estado: 'Ativo',
    grupo: '',
    lingua: '',
    departamento: '',
    telefone: '',
    rua: '',
    numeroPredio: '',
    freguesia: '',
    codigoPostal: '',
    cidade: '',
    chaveAtivacao: ''
  });

  // Filter options
  const roles = [
    { value: "all", label: "Todos os Roles" },
    { value: "Administrador", label: "Administrador" },
    { value: "Supervisor", label: "Supervisor" },
    { value: "Operador", label: "Operador" }
  ];

  const departments = [
    { value: "all", label: "Todos os Departamentos" },
    { value: "Centro", label: "Centro" },
    { value: "Norte", label: "Norte" },
    { value: "Sul", label: "Sul" },
    { value: "Este", label: "Este" },
    { value: "Oeste", label: "Oeste" }
  ];

  const statuses = [
    { value: "all", label: "Todos os Status" },
    { value: "active", label: "Ativo" },
    { value: "inactive", label: "Inativo" },
    { value: "pending", label: "Pendente" }
  ];

  // Filter and search users
  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.phone.includes(searchTerm);
    const matchesRole = selectedRole === 'all' || user.role === selectedRole;
    const matchesDepartment = selectedDepartment === 'all' || user.department === selectedDepartment;
    const matchesStatus = selectedStatus === 'all' || user.status === selectedStatus;

    return matchesSearch && matchesRole && matchesDepartment && matchesStatus;
  });

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

  // Status colors and icons
  const getStatusInfo = (status) => {
    switch (status) {
      case 'active':
        return { color: 'text-green-500', icon: CheckCircle, label: 'Ativo' };
      case 'inactive':
        return { color: 'text-red-500', icon: XCircle, label: 'Inativo' };
      case 'pending':
        return { color: 'text-yellow-500', icon: Clock, label: 'Pendente' };
      default:
        return { color: 'text-gray-500', icon: Clock, label: 'Desconhecido' };
    }
  };

  // Role colors
  const getRoleColor = (role) => {
    switch (role) {
      case 'Administrador':
        return 'text-sotkis-green';
      case 'Supervisor':
        return 'text-sotkis-green';
      case 'Operador':
        return 'text-sotkis-green';
      default:
        return 'text-gray-500';
    }
  };

  const handleCreateUser = () => {
    // Handle form submission
    console.log('Creating new user:', newUser);
    setShowCreateUserModal(false);
    // Reset form
    setNewUser({
      nome: '',
      username: 'mguedes',
      password: '••••••••',
      confirmPassword: '',
      email: '',
      estado: 'Ativo',
      grupo: '',
      lingua: '',
      departamento: '',
      telefone: '',
      rua: '',
      numeroPredio: '',
      freguesia: '',
      codigoPostal: '',
      cidade: '',
      chaveAtivacao: ''
    });
  };

  const handleCancel = () => {
    setShowCreateUserModal(false);
    // Reset form
    setNewUser({
      nome: '',
      username: 'mguedes',
      password: '••••••••',
      confirmPassword: '',
      email: '',
      estado: 'Ativo',
      grupo: '',
      lingua: '',
      departamento: '',
      telefone: '',
      rua: '',
      numeroPredio: '',
      freguesia: '',
      codigoPostal: '',
      cidade: '',
      chaveAtivacao: ''
    });
  };

  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
        <div className="text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-white">Utilizadores</h1>
          <p className="text-gray-300 mt-1">Gestão de utilizadores do sistema</p>
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <Button variant="outline" className="text-white border-white/20">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
          <Button 
            className="bg-sotkis-green hover:bg-sotkis-green/90 text-black font-semibold"
            onClick={() => setShowCreateUserModal(true)}
          >
            <Plus className="w-4 h-4 mr-2" />
            Novo Utilizador
          </Button>
        </div>
      </div>

      {/* Create User Modal */}
      {showCreateUserModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-white">Criar novo utilizador</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCancel}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Nome
                      </label>
                      <Input
                        type="text"
                        value={newUser.nome}
                        onChange={(e) => setNewUser({...newUser, nome: e.target.value})}
                        className="w-full"
                        placeholder="Nome completo"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Username
                      </label>
                      <Input
                        type="text"
                        value={newUser.username}
                        onChange={(e) => setNewUser({...newUser, username: e.target.value})}
                        className="w-full bg-yellow-50 border-yellow-200"
                        placeholder="Username"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Palavra-passe
                      </label>
                      <Input
                        type="password"
                        value={newUser.password}
                        onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                        className="w-full bg-yellow-50 border-yellow-200"
                        placeholder="••••••••"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Confirmar palavra-passe
                      </label>
                      <Input
                        type="password"
                        value={newUser.confirmPassword}
                        onChange={(e) => setNewUser({...newUser, confirmPassword: e.target.value})}
                        className="w-full"
                        placeholder="Confirmar palavra-passe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        value={newUser.email}
                        onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                        className="w-full"
                        placeholder="exemplo@sotkis.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Estado
                      </label>
                      <Select
                        value={newUser.estado}
                        onChange={(e) => setNewUser({...newUser, estado: e.target.value})}
                        className="w-full"
                      >
                        <SelectOption value="Ativo">Ativo</SelectOption>
                        <SelectOption value="Inativo">Inativo</SelectOption>
                        <SelectOption value="Pendente">Pendente</SelectOption>
                      </Select>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Grupo
                      </label>
                      <Select
                        value={newUser.grupo}
                        onChange={(e) => setNewUser({...newUser, grupo: e.target.value})}
                        className="w-full"
                      >
                        <SelectOption value="">Selecionar grupo</SelectOption>
                        <SelectOption value="Administradores">Administradores</SelectOption>
                        <SelectOption value="Supervisores">Supervisores</SelectOption>
                        <SelectOption value="Operadores">Operadores</SelectOption>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Língua
                      </label>
                      <Select
                        value={newUser.lingua}
                        onChange={(e) => setNewUser({...newUser, lingua: e.target.value})}
                        className="w-full"
                      >
                        <SelectOption value="">Selecionar língua</SelectOption>
                        <SelectOption value="Português">Português</SelectOption>
                        <SelectOption value="English">English</SelectOption>
                        <SelectOption value="Español">Español</SelectOption>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Departamento
                      </label>
                      <Input
                        type="text"
                        value={newUser.departamento}
                        onChange={(e) => setNewUser({...newUser, departamento: e.target.value})}
                        className="w-full"
                        placeholder="Departamento"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Telefone
                      </label>
                      <Input
                        type="tel"
                        value={newUser.telefone}
                        onChange={(e) => setNewUser({...newUser, telefone: e.target.value})}
                        className="w-full"
                        placeholder="+351 912 345 678"
                      />
                    </div>

                    {/* Address Section */}
                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-white">
                        Morada
                      </label>
                      
                      <div>
                        <label className="block text-xs text-white mb-1">
                          Rua/Avenida/Travessa
                        </label>
                        <Input
                          type="text"
                          value={newUser.rua}
                          onChange={(e) => setNewUser({...newUser, rua: e.target.value})}
                          className="w-full"
                          placeholder="Rua das Flores"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-white mb-1">
                          Número do prédio
                        </label>
                        <Input
                          type="text"
                          value={newUser.numeroPredio}
                          onChange={(e) => setNewUser({...newUser, numeroPredio: e.target.value})}
                          className="w-full"
                          placeholder="123"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-white mb-1">
                          Freguesia
                        </label>
                        <Input
                          type="text"
                          value={newUser.freguesia}
                          onChange={(e) => setNewUser({...newUser, freguesia: e.target.value})}
                          className="w-full"
                          placeholder="Freguesia"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-white mb-1">
                          Código-Postal
                        </label>
                        <Input
                          type="text"
                          value={newUser.codigoPostal}
                          onChange={(e) => setNewUser({...newUser, codigoPostal: e.target.value})}
                          className="w-full"
                          placeholder="1000-000"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-white mb-1">
                          Cidade
                        </label>
                        <Input
                          type="text"
                          value={newUser.cidade}
                          onChange={(e) => setNewUser({...newUser, cidade: e.target.value})}
                          className="w-full"
                          placeholder="Lisboa"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        CHAVE_ATIVACAO
                      </label>
                      <Input
                        type="text"
                        value={newUser.chaveAtivacao}
                        onChange={(e) => setNewUser({...newUser, chaveAtivacao: e.target.value})}
                        className="w-full"
                        placeholder="Chave de ativação"
                      />
                    </div>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleCancel}
                    className="text-gray-700 border-gray-300 hover:bg-gray-50"
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="button"
                    onClick={handleCreateUser}
                    className="bg-sotkis-green hover:bg-sotkis-green/90 text-black font-semibold"
                  >
                    Criar Utilizador
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">Total Utilizadores</p>
                <p className="text-2xl font-bold text-white">{mockUsers.length}</p>
              </div>
              <div className="p-3 bg-white/10 rounded-lg">
                <User className="h-6 w-6 text-sotkis-green" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">Utilizadores Ativos</p>
                <p className="text-2xl font-bold text-white">
                  {mockUsers.filter(u => u.status === 'active').length}
                </p>
              </div>
              <div className="p-3 bg-white/10 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">Administradores</p>
                <p className="text-2xl font-bold text-white">
                  {mockUsers.filter(u => u.role === 'Administrador').length}
                </p>
              </div>
              <div className="p-3 bg-white/10 rounded-lg">
                <Shield className="h-6 w-6 text-sotkis-green" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">Novos Este Mês</p>
                <p className="text-2xl font-bold text-white">
                  {mockUsers.filter(u => {
                    const createdDate = new Date(u.createdAt);
                    const now = new Date();
                    return createdDate.getMonth() === now.getMonth() && 
                           createdDate.getFullYear() === now.getFullYear();
                  }).length}
                </p>
              </div>
              <div className="p-3 bg-white/10 rounded-lg">
                <Calendar className="h-6 w-6 text-sotkis-green" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="bg-white/10 backdrop-blur-lg border-0">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Procurar utilizadores..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    // The search is already live, so just focus on the input
                    e.target.blur();
                  }
                }}
                className="pl-10 bg-white/10 border-white/20 text-white/90 placeholder-gray-400"
              />
            </div>

            {/* Role Filter */}
            <Select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="bg-white/10 border-white/20 text-white/90"
            >
              {roles.map((role) => (
                <SelectOption key={role.value} value={role.value}>
                  {role.label}
                </SelectOption>
              ))}
            </Select>

            {/* Department Filter */}
            <Select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="bg-white/10 border-white/20 text-white/90"
            >
              {departments.map((dept) => (
                <SelectOption key={dept.value} value={dept.value}>
                  {dept.label}
                </SelectOption>
              ))}
            </Select>

            {/* Status Filter */}
            <Select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-white/10 border-white/20 text-white/90"
            >
              {statuses.map((status) => (
                <SelectOption key={status.value} value={status.value}>
                  {status.label}
                </SelectOption>
              ))}
            </Select>

            {/* Clear Filters */}
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm('');
                setSelectedRole('all');
                setSelectedDepartment('all');
                setSelectedStatus('all');
              }}
              className="text-white border-white/20 hover:bg-white/10"
            >
              <Filter className="w-4 h-4 mr-2" />
              Limpar Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card className="bg-white/10 backdrop-blur-lg border-0">
        <CardHeader>
          <CardTitle className="text-white">
            Lista de Utilizadores ({filteredUsers.length} resultados)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="responsive-table">
            <Table>
            <TableHeader>
              <TableRow className="border-white/10">
                <TableHead className="text-white">Utilizador</TableHead>
                <TableHead className="text-white">Contacto</TableHead>
                <TableHead className="text-white">Role</TableHead>
                <TableHead className="text-white">Departamento</TableHead>
                <TableHead className="text-white">Status</TableHead>
                <TableHead className="text-white">Último Login</TableHead>
                <TableHead className="text-white">Depósitos</TableHead>
                <TableHead className="text-white">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedUsers.map((user) => {
                const statusInfo = getStatusInfo(user.status);
                const StatusIcon = statusInfo.icon;
                
                return (
                  <TableRow key={user.id} className="border-white/10 hover:bg-white/5">
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-sotkis-green/20 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-sotkis-green" />
                        </div>
                        <div>
                          <p className="font-medium text-white">{user.name}</p>
                          <p className="text-sm text-gray-400">ID: {user.id}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <span className="text-white">{user.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-300">{user.phone}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className={`font-medium ${getRoleColor(user.role)}`}>
                        {user.role}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-white">{user.department}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <StatusIcon className={`w-4 h-4 ${statusInfo.color}`} />
                        <span className={statusInfo.color}>{statusInfo.label}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm text-gray-300">
                        {new Date(user.lastLogin).toLocaleDateString('pt-BR')}
                        <br />
                        <span className="text-xs text-gray-400">
                          {new Date(user.lastLogin).toLocaleTimeString('pt-BR', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-white font-medium">{user.deposits}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 space-y-4 sm:space-y-0">
              <div className="text-sm text-gray-300">
                Mostrando {startIndex + 1} a {Math.min(startIndex + itemsPerPage, filteredUsers.length)} de {filteredUsers.length} utilizadores
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="text-white border-white/20"
                >
                  Anterior
                </Button>
                <div className="flex flex-wrap gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className={currentPage === page ? "bg-sotkis-green" : "text-white border-white/20"}
                    >
                      {page}
                    </Button>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="text-white border-white/20"
                >
                  Próximo
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Utilizadores; 