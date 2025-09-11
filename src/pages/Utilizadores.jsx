import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectOption } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  Search, 
  Filter, 
  Download, 
  Plus, 
  Edit, 
  Trash2, 
  User,
  Mail,
  KeyRound,
  ChevronsRight,
  PenSquare,
  CheckCircle2,
  Shield,
  Calendar,
  X
} from 'lucide-react';

// Mock user data adjusted to screenshot fields
const mockUsers = [
  { id: 1000481, name: '1000481', username: '1000481', email: 'fagar@sotkon.com', department: 'Faro-PT 999990004', group: 'FrontEndUser', language: 'Portuguese', status: 'active' },
  { id: 1001309, name: '1001309', username: '1001309', email: 'fagar@sotkon.com', department: 'Faro-PT 999990004', group: 'FrontEndUser', language: 'Portuguese', status: 'active' },
  { id: 1003562, name: '1003562', username: '1003562', email: 'fagar@sotkon.com', department: 'Faro-PT 999990004', group: 'FrontEndUser', language: 'Portuguese', status: 'active' },
  { id: 1031518, name: '1031518', username: '1031518', email: 'fagar@sotkon.com', department: 'Faro-PT 999990004', group: 'FrontEndUser', language: 'Portuguese', status: 'active' },
  { id: 1031822, name: '1031822', username: '1031822', email: 'fagar@sotkon.com', department: 'Faro-PT 999990004,Faro-PT 999990004', group: 'FrontEndUser', language: 'Portuguese', status: 'inactive' },
  { id: 1031909, name: '1031909', username: '1031909', email: 'fagar@sotkon.com', department: 'Faro-PT 999990004', group: 'FrontEndUser', language: 'Portuguese', status: 'active' },
];

const Utilizadores = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsLightMode(document.body.classList.contains('light-theme'));
    };
    
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [showCreateUserModal, setShowCreateUserModal] = useState(false);
  const itemsPerPage = 6;

  // Filters form state (for "Pesquisar" apply)
  const [formName, setFormName] = useState('');
  const [formDepartment, setFormDepartment] = useState('all');
  const [formGroup, setFormGroup] = useState('all');

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
    { value: 'all', label: 'Todos' },
    { value: 'FrontEndUser', label: 'FrontEndUser' },
  ];

  const departments = [
    { value: 'all', label: 'Todos os Departamentos' },
    { value: 'Faro-PT 999990004', label: 'Faro-PT 999990004' },
  ];

  const statuses = [
    { value: 'all', label: 'Todos os Status' },
    { value: 'active', label: 'Ativo' },
    { value: 'inactive', label: 'Inativo' }
  ];

  // Apply filter values when pressing "Pesquisar"
  const handleSearch = () => {
    setSearchTerm(formName);
    setSelectedDepartment(formDepartment);
    setSelectedRole(formGroup);
    setCurrentPage(1);
  };

  // Export filtered users as CSV
  const handleExport = () => {
    const headers = [
      'ID','Nome','Email','Telefone','Role','Departamento','Status','Último Login','Criado Em','Depósitos','Zona'
    ];
    const rows = filteredUsers.map(u => [
      u.id, u.name, u.email, u.phone, u.role, u.department, u.status, u.lastLogin, u.createdAt, u.deposits, u.zone
    ]);
    const csv = [headers, ...rows].map(r => r.map(String).map(v => `"${v.replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'utilizadores.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  // Filter and search users
  const filteredUsers = mockUsers.filter(user => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      (user.name && user.name.toLowerCase().includes(term)) ||
      (user.username && user.username.toLowerCase().includes(term)) ||
      (user.email && user.email.toLowerCase().includes(term));
    const matchesRole = selectedRole === 'all' || user.group === selectedRole;
    const matchesDepartment = selectedDepartment === 'all' || (user.department && user.department.includes(selectedDepartment));
    const matchesStatus = selectedStatus === 'all' || user.status === selectedStatus;
    return matchesSearch && matchesRole && matchesDepartment && matchesStatus;
  });

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

  const getStatusDot = (status) => (status === 'active' ? 'bg-green-600' : 'bg-red-600');

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
    <div className="p-6 space-y-6">
      {/* Page Header - AT THE VERY TOP */}
      <div className="page-header text-right">
        <h1 className="text-xl font-bold text-white">Utilizadores</h1>
        <p className="text-gray-300 mt-1">Gestão de utilizadores do sistema</p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 justify-center">
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

      {/* Create User Modal */}
      {showCreateUserModal && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          onClick={() => setShowCreateUserModal(false)}
        >
          <div 
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl shadow-2xl p-4 sm:p-6 w-full max-w-6xl max-h-[90vh] overflow-y-auto mx-4 sm:mx-0"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Criar novo utilizador</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Nome:</label>
                  <Input
                    type="text"
                    value={newUser.nome}
                    onChange={(e) => setNewUser({...newUser, nome: e.target.value})}
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Nome completo"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Username:</label>
                  <Input
                    type="text"
                    value={newUser.username}
                    onChange={(e) => setNewUser({...newUser, username: e.target.value})}
                    className="bg-yellow-50 text-black placeholder-gray-600 border-yellow-200"
                    placeholder="mguedes"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Palavra-passe:</label>
                  <Input
                    type="password"
                    value={newUser.password}
                    onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                    className="bg-yellow-50 text-black placeholder-gray-600 border-yellow-200"
                    placeholder="••••••••"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Confirmar palavra-passe:</label>
                  <Input
                    type="password"
                    value={newUser.confirmPassword}
                    onChange={(e) => setNewUser({...newUser, confirmPassword: e.target.value})}
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Confirmar palavra-passe"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Email:</label>
                  <Input
                    type="email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="exemplo@sotkis.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Estado:</label>
                  <Select
                    value={newUser.estado}
                    onValueChange={(value) => setNewUser({...newUser, estado: value})}
                  >
                    <SelectTrigger className={`${
                      isLightMode 
                        ? 'bg-sotkis-green/20 border-sotkis-green/40 text-gray-900 placeholder-gray-600' 
                        : 'bg-white text-black placeholder-gray-600'
                    }`}>
                      <SelectValue placeholder="Selecionar estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Ativo">Ativo</SelectItem>
                      <SelectItem value="Inativo">Inativo</SelectItem>
                      <SelectItem value="Pendente">Pendente</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Grupo:</label>
                  <Select
                    value={newUser.grupo}
                    onValueChange={(value) => setNewUser({...newUser, grupo: value})}
                  >
                    <SelectTrigger className={`${
                      isLightMode 
                        ? 'bg-sotkis-green/20 border-sotkis-green/40 text-gray-900 placeholder-gray-600' 
                        : 'bg-white text-black placeholder-gray-600'
                    }`}>
                      <SelectValue placeholder="Selecionar grupo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Selecionar grupo</SelectItem>
                      <SelectItem value="Administradores">Administradores</SelectItem>
                      <SelectItem value="Supervisores">Supervisores</SelectItem>
                      <SelectItem value="Operadores">Operadores</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Lingua:</label>
                  <Select
                    value={newUser.lingua}
                    onValueChange={(value) => setNewUser({...newUser, lingua: value})}
                  >
                    <SelectTrigger className={`${
                      isLightMode 
                        ? 'bg-sotkis-green/20 border-sotkis-green/40 text-gray-900 placeholder-gray-600' 
                        : 'bg-white text-black placeholder-gray-600'
                    }`}>
                      <SelectValue placeholder="Selecionar língua" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Selecionar língua</SelectItem>
                      <SelectItem value="Português">Português</SelectItem>
                      <SelectItem value="English">English</SelectItem>
                      <SelectItem value="Español">Español</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Departamento:</label>
                  <Input
                    type="text"
                    value={newUser.departamento}
                    onChange={(e) => setNewUser({...newUser, departamento: e.target.value})}
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Departamento"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Telefone:</label>
                  <Input
                    type="tel"
                    value={newUser.telefone}
                    onChange={(e) => setNewUser({...newUser, telefone: e.target.value})}
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="+351 912 345 678"
                  />
                </div>

                {/* Address Section */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-white">Morada:</label>
                  
                  <div className="space-y-2">
                    <label className="text-xs text-white">Rua/Avenida/Travessa:</label>
                    <Input
                      type="text"
                      value={newUser.rua}
                      onChange={(e) => setNewUser({...newUser, rua: e.target.value})}
                      className="bg-white text-black placeholder-gray-600"
                      placeholder="Rua das Flores"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-white">Número do prédio:</label>
                    <Input
                      type="text"
                      value={newUser.numeroPredio}
                      onChange={(e) => setNewUser({...newUser, numeroPredio: e.target.value})}
                      className="bg-white text-black placeholder-gray-600"
                      placeholder="123"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-white">Freguesia:</label>
                    <Input
                      type="text"
                      value={newUser.freguesia}
                      onChange={(e) => setNewUser({...newUser, freguesia: e.target.value})}
                      className="bg-white text-black placeholder-gray-600"
                      placeholder="Freguesia"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-white">Código-Postal:</label>
                    <Input
                      type="text"
                      value={newUser.codigoPostal}
                      onChange={(e) => setNewUser({...newUser, codigoPostal: e.target.value})}
                      className="bg-white text-black placeholder-gray-600"
                      placeholder="1000-000"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-white">Cidade:</label>
                    <Input
                      type="text"
                      value={newUser.cidade}
                      onChange={(e) => setNewUser({...newUser, cidade: e.target.value})}
                      className="bg-white text-black placeholder-gray-600"
                      placeholder="Lisboa"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">CHAVE_ATIVACAO:</label>
                  <Input
                    type="text"
                    value={newUser.chaveAtivacao}
                    onChange={(e) => setNewUser({...newUser, chaveAtivacao: e.target.value})}
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Chave de ativação"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4 mt-6 sm:mt-8">
              <Button
                onClick={handleCancel}
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 w-full sm:w-auto"
              >
                Cancelar
              </Button>
              <Button
                onClick={handleCreateUser}
                className="bg-sotkis-green text-black hover:bg-sotkis-green/90 w-full sm:w-auto"
              >
                Criar novo
              </Button>
              <Button
                onClick={handleCreateUser}
                className="bg-sotkis-green text-black hover:bg-sotkis-green/90 w-full sm:w-auto"
              >
                Submeter
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-white/20 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">Total Utilizadores</p>
                <p className="text-xl font-bold text-white">{mockUsers.length}</p>
              </div>
              <div className="p-3 bg-white/10 rounded-lg">
                <User className="h-6 w-6 text-sotkis-green" style={{ aspectRatio: '1', flexShrink: 0, width: '24px', height: '24px' }} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/20 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">Utilizadores Ativos</p>
                <p className="text-xl font-bold text-white">
                  {mockUsers.filter(u => u.status === 'active').length}
                </p>
              </div>
              <div className="p-3 bg-white/10 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/20 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">Administradores</p>
                <p className="text-xl font-bold text-white">
                  {mockUsers.filter(u => u.role === 'Administrador').length}
                </p>
              </div>
              <div className="p-3 bg-white/10 rounded-lg">
                <Shield className="h-6 w-6 text-sotkis-green" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/20 backdrop-blur-lg border-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">Novos Este Mês</p>
                <p className="text-xl font-bold text-white">
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
      <div className="space-y-4">
        <div className="text-left mb-3">
          <h2 className="text-white text-lg font-semibold">Filtros</h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 items-start w-full filter-cards-container">
          {/* Nome */}
          <Card className="bg-white/20 backdrop-blur-lg border-0 flex-1">
            <CardContent className="p-4">
              <div className="space-y-1">
                <label className="text-white text-sm font-semibold">Nome</label>
                <Input
                  placeholder="Nome"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="bg-white/10 border-white/20 text-white/90 placeholder-gray-400"
                />
              </div>
            </CardContent>
          </Card>

          {/* Departamento */}
          <Card className="bg-white/20 backdrop-blur-lg border-0 flex-1">
            <CardContent className="p-4">
              <div className="space-y-1">
                <label className="text-white text-sm font-semibold">Departamento</label>
                <Select
                  value={formDepartment}
                  onChange={(e) => setFormDepartment(e.target.value)}
                  className="bg-white/10 border-white/20 text-white/90"
                >
                  {departments.map((dept) => (
                    <SelectOption key={dept.value} value={dept.value}>{dept.label}</SelectOption>
                  ))}
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Grupo (Role) */}
          <Card className="bg-white/20 backdrop-blur-lg border-0 flex-1">
            <CardContent className="p-4">
              <div className="space-y-1">
                <label className="text-white text-sm font-semibold">Grupo</label>
                <Select
                  value={formGroup}
                  onChange={(e) => setFormGroup(e.target.value)}
                  className="bg-white/10 border-white/20 text-white/90"
                >
                  {roles.map((role) => (
                    <SelectOption key={role.value} value={role.value}>{role.label}</SelectOption>
                  ))}
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Pesquisar Button - Responsive */}
          <div className="flex items-start pt-6">
            <Button onClick={handleSearch} className="bg-sotkis-green hover:bg-sotkis-green/90 text-black hover:text-white h-10 px-4 transition-transform duration-200 hover:scale-105 sm:h-[66px] sm:w-[66px] sm:p-0 sm:hover:scale-110">
              <Search className="w-4 h-4 sm:w-9 sm:h-9 mr-2 sm:mr-0" />
              <span className="sm:hidden">Pesquisar</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <Card className="bg-white/20 backdrop-blur-lg border-0">
        <CardHeader>
          <CardTitle className="text-white">
            Lista de Utilizadores ({filteredUsers.length} resultados)
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Counter above table */}
          <div className="text-sm text-gray-300 mb-3">
            A exibir {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredUsers.length)} de {filteredUsers.length} Itens.
          </div>
          <div className="responsive-table">
            <Table>
            <TableHeader>
              <TableRow className="border-white/10">
                <TableHead className="text-white">Nome</TableHead>
                <TableHead className="text-white">Username</TableHead>
                <TableHead className="text-white">Email</TableHead>
                <TableHead className="text-white">Departamento</TableHead>
                <TableHead className="text-white">Grupo</TableHead>
                <TableHead className="text-white">Lingua</TableHead>
                <TableHead className="text-white">Estado</TableHead>
                <TableHead className="text-white"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedUsers.map((user) => (
                <TableRow key={user.id} className="border-white/10 hover:bg-sotkis-green/20 hover:border-sotkis-green/30 transition-colors duration-200">
                  <TableCell className="text-white">{user.name}</TableCell>
                  <TableCell className="text-white">{user.username}</TableCell>
                  <TableCell className="text-white">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-sotkis-green" />
                      {user.email}
                    </div>
                  </TableCell>
                  <TableCell className="text-white">{user.department}</TableCell>
                  <TableCell className="text-white">{user.group}</TableCell>
                  <TableCell className="text-white">{user.language}</TableCell>
                  <TableCell>
                    <div className={`w-3 h-3 rounded-full ${getStatusDot(user.status)}`} />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3 text-sotkis-green">
                      <KeyRound className="w-4 h-4" />
                      <ChevronsRight className="w-4 h-4" />
                      <PenSquare className="w-4 h-4" />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </div>

          {/* Page number selector */}
          {totalPages > 1 && (
            <div className="flex items-center gap-3 mt-6">
              <span className="text-gray-300">Página nº</span>
              <Select
                value={String(currentPage)}
                onChange={(e) => setCurrentPage(parseInt(e.target.value, 10))}
                className="bg-white text-black w-24"
              >
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <SelectOption key={page} value={String(page)}>{page}</SelectOption>
                ))}
              </Select>
            </div>
          )}
        </CardContent>
      </Card>

      {/* eGate API section */}
      <div className="mt-6 flex justify-start">
        <div className="text-white font-semibold">eGate Api - Atualizar Utilizadores/Rfids</div>
      </div>
      <div className="mt-4 flex justify-center sm:justify-start">
        <Button className="bg-sotkis-green hover:bg-sotkis-green/90 text-white px-6 py-6">
          INICIAR PROCESSO
        </Button>
      </div>
    </div>
  );
};

export default Utilizadores;