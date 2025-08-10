import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { AlertTriangle, Bell, CheckCircle, XCircle, Search, ArrowUpDown, Filter } from 'lucide-react';

const SotkisLevelAlerts = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [recordsPerPage, setRecordsPerPage] = React.useState('10');
  const [selectedPriority, setSelectedPriority] = React.useState('');

  // Mock alerts data
  const mockAlerts = [
    {
      id: 1,
      title: 'Contentor com enchimento crítico',
      description: 'Contentor ID-1234 atingiu 95% de capacidade',
      priority: 'Alta',
      status: 'Ativo',
      location: 'Lisboa - Centro',
      timestamp: '2024-01-15 14:30:00',
      department: 'Gestão de Resíduos'
    },
    {
      id: 2,
      title: 'Sensor RFID offline',
      description: 'Sensor RFID-5678 não responde há 2 horas',
      priority: 'Média',
      status: 'Ativo',
      location: 'Porto - Norte',
      timestamp: '2024-01-15 13:45:00',
      department: 'Tecnologia'
    },
    {
      id: 3,
      title: 'Rota de recolha atrasada',
      description: 'Rota R-001 com atraso de 45 minutos',
      priority: 'Baixa',
      status: 'Resolvido',
      location: 'Coimbra - Centro',
      timestamp: '2024-01-15 12:15:00',
      department: 'Logística'
    },
    {
      id: 4,
      title: 'Bateria com baixo nível',
      description: 'Bateria B-9999 com apenas 15% de carga',
      priority: 'Média',
      status: 'Ativo',
      location: 'Braga - Norte',
      timestamp: '2024-01-15 11:20:00',
      department: 'Manutenção'
    },
    {
      id: 5,
      title: 'Acesso não autorizado',
      description: 'Tentativa de acesso ao contentor ID-5678',
      priority: 'Alta',
      status: 'Ativo',
      location: 'Faro - Sul',
      timestamp: '2024-01-15 10:30:00',
      department: 'Segurança'
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Alta':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'Média':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Baixa':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Ativo':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Resolvido':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-end sm:justify-start">
        <div className="space-y-2 text-right sm:text-left">
          <h1 className="text-xl font-bold text-white">Alertas</h1>
          <p className="text-gray-300 mt-1">Gestão de alertas e notificações do sistema</p>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-white">Prioridade:</span>
            <Select value={selectedPriority} onValueChange={setSelectedPriority}>
              <SelectTrigger className="w-32 bg-white text-black">
                <SelectValue placeholder="Todas" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Todas</SelectItem>
                <SelectItem value="alta">Alta</SelectItem>
                <SelectItem value="media">Média</SelectItem>
                <SelectItem value="baixa">Baixa</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-white">Mostrar:</span>
            <Select value={recordsPerPage} onValueChange={setRecordsPerPage}>
              <SelectTrigger className="w-20 bg-white text-black">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-sm text-white">registos</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <span className="text-sm text-white">Procurar:</span>
          <Input
            placeholder="Pesquisar alertas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-64 bg-white text-black placeholder-gray-600"
          />
          <Button onClick={handleSearch} className="bg-sotkis-green text-black hover:bg-sotkis-green/90">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Alerts Table */}
      <Card className="card-glass">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="cursor-pointer text-white w-20">
                  ID
                  <ArrowUpDown className="ml-1 inline h-4 w-4" />
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Título
                  <ArrowUpDown className="ml-1 inline h-4 w-4" />
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Descrição
                  <ArrowUpDown className="ml-1 inline h-4 w-4" />
                </TableHead>
                <TableHead className="cursor-pointer text-white w-24">
                  Prioridade
                  <ArrowUpDown className="ml-1 inline h-4 w-4" />
                </TableHead>
                <TableHead className="cursor-pointer text-white w-24">
                  Estado
                  <ArrowUpDown className="ml-1 inline h-4 w-4" />
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Localização
                  <ArrowUpDown className="ml-1 inline h-4 w-4" />
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Departamento
                  <ArrowUpDown className="ml-1 inline h-4 w-4" />
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Timestamp
                  <ArrowUpDown className="ml-1 inline h-4 w-4" />
                </TableHead>
                <TableHead className="text-white w-32">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockAlerts.map((alert) => (
                <TableRow key={alert.id}>
                  <TableCell className="text-white font-medium w-20">{alert.id}</TableCell>
                  <TableCell className="text-white font-medium">{alert.title}</TableCell>
                  <TableCell className="text-white max-w-xs truncate">{alert.description}</TableCell>
                  <TableCell className="w-24">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(alert.priority)}`}>
                      {alert.priority}
                    </span>
                  </TableCell>
                  <TableCell className="w-24">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(alert.status)}`}>
                      {alert.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-white">{alert.location}</TableCell>
                  <TableCell className="text-white">{alert.department}</TableCell>
                  <TableCell className="text-white text-sm">{alert.timestamp}</TableCell>
                  <TableCell className="w-32">
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="text-sotkis-green hover:text-sotkis-green/80">
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-orange-500 hover:text-orange-400">
                        <AlertTriangle className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-400">
                        <XCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-white">
          A exibir 1-5 de 5 registos
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white">
            Anterior
          </Button>
          <Button size="sm" className="bg-sotkis-green text-black hover:bg-sotkis-green/90">
            1
          </Button>
          <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white">
            Seguinte
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SotkisLevelAlerts; 