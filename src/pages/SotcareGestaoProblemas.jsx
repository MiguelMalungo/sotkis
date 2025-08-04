import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Plus, Search, Edit, Trash2, FileText, Download, Printer, X, AlertTriangle, ArrowUpDown } from 'lucide-react';

const SotcareGestaoProblemas = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filters, setFilters] = React.useState({
    departamento: 'Todos',
    tipo: 'Todos',
    responsavel: 'Todos',
    estado: 'Todos'
  });
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Mock data for problems
  const mockProblemas = [
    {
      id: 1001,
      assunto: 'Contentor danificado',
      localizacao: 'R. Madre Teresa de Calcutá, Faro',
      departamento: 'Faro-PT 999990004',
      criadoPor: 'João Silva',
      atualizadoPor: 'Maria Santos',
      responsavel: 'Equipa Técnica Faro',
      estado: 'Em análise'
    },
    {
      id: 1002,
      assunto: 'Sensor de enchimento avariado',
      localizacao: 'Av. Miguel Bombarda 88, Lisboa',
      departamento: 'Lisboa-PT 999990006',
      criadoPor: 'Pedro Costa',
      atualizadoPor: 'Ana Oliveira',
      responsavel: 'Equipa Técnica Lisboa',
      estado: 'Em progresso'
    },
    {
      id: 1003,
      assunto: 'Problema de acesso RFID',
      localizacao: 'Rua Nossa Senhora Amparo, Lisboa',
      departamento: 'Lisboa-PT 999990006',
      criadoPor: 'Carlos Ferreira',
      atualizadoPor: 'Carlos Ferreira',
      responsavel: 'Equipa IT',
      estado: 'Resolvido'
    },
    {
      id: 1004,
      assunto: 'Contentor com tampa partida',
      localizacao: 'Largo de São Francisco 45, Faro',
      departamento: 'Faro-PT 999990004',
      criadoPor: 'Sofia Martins',
      atualizadoPor: 'Equipa Técnica Faro',
      responsavel: 'Equipa Técnica Faro',
      estado: 'Pendente'
    }
  ];

  const handleSearch = () => {
    console.log('Searching with filters:', filters);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-4 lg:space-y-0">
        <div className="space-y-2">
          <h1 className="text-xl font-bold text-white">Lista de problemas</h1>
          <p className="text-gray-300 mt-1">Gestão de problemas e incidentes do sistema</p>
          <div className="flex items-center space-x-3">
            <h2 className="text-xl font-semibold text-white">Reportar Problema</h2>
            <Button
              onClick={() => setIsModalOpen(true)}
              size="icon"
              className="w-8 h-8 bg-sotkis-green hover:bg-sotkis-green/90 rounded-full"
            >
              <Plus className="h-4 w-4 text-white font-bold" />
            </Button>
          </div>
        </div>
        
        {/* Export Icons */}
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" className="bg-white/10 border-white/20 text-white">
            <X className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="bg-white/10 border-white/20 text-white">
            <FileText className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="bg-white/10 border-white/20 text-white">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="bg-white/10 border-white/20 text-white">
            <Printer className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Filters - Divided into separate cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Card 1: Department */}
        <Card className="card-glass p-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Departamento</label>
            <Select value={filters.departamento} onValueChange={(value) => setFilters({...filters, departamento: value})}>
              <SelectTrigger className="bg-white text-black">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Todos">Todos</SelectItem>
                <SelectItem value="Faro-PT 999990004">Faro-PT 999990004</SelectItem>
                <SelectItem value="Lisboa-PT 999990006">Lisboa-PT 999990006</SelectItem>
                <SelectItem value="Porto-PT 999990008">Porto-PT 999990008</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>
        
        {/* Card 2: Type */}
        <Card className="card-glass p-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Tipo</label>
            <Select value={filters.tipo} onValueChange={(value) => setFilters({...filters, tipo: value})}>
              <SelectTrigger className="bg-white text-black">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Todos">Todos</SelectItem>
                <SelectItem value="Contentor danificado">Contentor danificado</SelectItem>
                <SelectItem value="Sensor avariado">Sensor avariado</SelectItem>
                <SelectItem value="Problema RFID">Problema RFID</SelectItem>
                <SelectItem value="Tampa partida">Tampa partida</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>
        
        {/* Card 3: Responsible */}
        <Card className="card-glass p-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Responsável</label>
            <Select value={filters.responsavel} onValueChange={(value) => setFilters({...filters, responsavel: value})}>
              <SelectTrigger className="bg-white text-black">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Todos">Todos</SelectItem>
                <SelectItem value="Equipa Técnica Faro">Equipa Técnica Faro</SelectItem>
                <SelectItem value="Equipa Técnica Lisboa">Equipa Técnica Lisboa</SelectItem>
                <SelectItem value="Equipa IT">Equipa IT</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>
        
        {/* Card 4: Status */}
        <Card className="card-glass p-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Estado</label>
            <Select value={filters.estado} onValueChange={(value) => setFilters({...filters, estado: value})}>
              <SelectTrigger className="bg-white text-black">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Todos">Todos</SelectItem>
                <SelectItem value="Pendente">Pendente</SelectItem>
                <SelectItem value="Em análise">Em análise</SelectItem>
                <SelectItem value="Em progresso">Em progresso</SelectItem>
                <SelectItem value="Resolvido">Resolvido</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>
        
        {/* Card 5: Search */}
        <Card className="card-glass p-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Procurar</label>
            <Input
              placeholder="Pesquisar problemas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white text-black placeholder-gray-600"
            />
          </div>
        </Card>
      </div>

      {/* Table Controls */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-white">Mostrar</span>
          <Select defaultValue="10">
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
        
        <Button
          onClick={() => console.log('Report new problem')}
          className="bg-sotkis-green hover:bg-sotkis-green/90 text-black font-semibold"
        >
          <Plus className="w-4 h-4 mr-2" />
          Reportar Problema
        </Button>
      </div>

      {/* Table */}
      <Card className="card-glass">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="cursor-pointer text-white">
                  Número
                  <ArrowUpDown className="ml-1 inline h-4 w-4" />
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Assunto
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
                  Criado por
                  <ArrowUpDown className="ml-1 inline h-4 w-4" />
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Atualizado por
                  <ArrowUpDown className="ml-1 inline h-4 w-4" />
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Responsável
                  <ArrowUpDown className="ml-1 inline h-4 w-4" />
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Estado
                  <ArrowUpDown className="ml-1 inline h-4 w-4" />
                </TableHead>
                <TableHead className="text-white">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockProblemas.map((problema) => (
                <TableRow key={problema.id}>
                  <TableCell className="text-white">{problema.id}</TableCell>
                  <TableCell className="text-white">{problema.assunto}</TableCell>
                  <TableCell className="text-white">{problema.localizacao}</TableCell>
                  <TableCell className="text-white">{problema.departamento}</TableCell>
                  <TableCell className="text-white">{problema.criadoPor}</TableCell>
                  <TableCell className="text-white">{problema.atualizadoPor}</TableCell>
                  <TableCell className="text-white">{problema.responsavel}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      problema.estado === 'Resolvido' ? 'bg-green-500/20 text-green-400' :
                      problema.estado === 'Em progresso' ? 'bg-blue-500/20 text-blue-400' :
                      problema.estado === 'Em análise' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {problema.estado}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="text-sotkis-green hover:text-sotkis-green/80">
                        <AlertTriangle className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-sotkis-green hover:text-sotkis-green/80">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-sotkis-green hover:text-sotkis-green/80">
                        <Trash2 className="h-4 w-4" />
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
          A exibir 1-10 de 20 registos
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white">
            Anterior
          </Button>
          <Button size="sm" className="bg-sotkis-green text-black hover:bg-sotkis-green/90">
            1
          </Button>
          <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white">
            2
          </Button>
          <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white">
            Seguinte
          </Button>
        </div>
      </div>

      {/* Modal for Reportar Problema */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-black rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-end mb-6">
              <Button
                onClick={() => setIsModalOpen(false)}
                variant="ghost"
                size="icon"
                className="text-white hover:text-gray-300"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="text-right mb-6">
              <h2 className="text-2xl font-bold text-sotkis-green">Reportar Problema</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Departamento */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Departamento:</label>
                <Select defaultValue="Faro-PT 999990004">
                  <SelectTrigger className="bg-white text-black">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Faro-PT 999990004">Faro-PT 999990004</SelectItem>
                    <SelectItem value="Lisboa-PT 999990006">Lisboa-PT 999990006</SelectItem>
                    <SelectItem value="Porto-PT 999990008">Porto-PT 999990008</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Assunto */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Assunto:</label>
                <Input
                  placeholder="Digite o assunto do problema"
                  className="bg-white text-black placeholder-gray-600"
                />
              </div>

              {/* Localização */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Localização:</label>
                <Input
                  placeholder="Digite a localização"
                  className="bg-white text-black placeholder-gray-600"
                />
              </div>

              {/* Tipo de intervenção prevista */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Tipo de intervenção prevista:</label>
                <Select>
                  <SelectTrigger className="bg-white text-black">
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="corretiva">Intervenção Corretiva</SelectItem>
                    <SelectItem value="preventiva">Intervenção Preventiva</SelectItem>
                    <SelectItem value="manutencao">Manutenção</SelectItem>
                    <SelectItem value="substituicao">Substituição</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Mensagem - Full width */}
              <div className="lg:col-span-2 space-y-2">
                <label className="text-sm font-medium text-white">Mensagem:</label>
                <textarea
                  placeholder="Descreva o problema detalhadamente"
                  className="w-full h-32 p-3 bg-white text-black placeholder-gray-600 rounded-md resize-none"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 mt-8">
              <Button
                onClick={() => setIsModalOpen(false)}
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Cancelar
              </Button>
              <Button className="bg-sotkis-green text-black hover:bg-sotkis-green/90">
                Submeter
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SotcareGestaoProblemas; 