import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Plus, Search, Edit, Trash2, FileText, Download, Printer, X, AlertTriangle, Image } from 'lucide-react';

const SotcareIntervencoesCorretivas = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filters, setFilters] = React.useState({
    numeroIntervencoes: 'últimas 20',
    departamento: 'Todos',
    tipo: 'Todos',
    ilha: 'Todos',
    contentor: 'Todos'
  });
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Mock data for corrective interventions
  const mockIntervencoes = [
    {
      id: 5232,
      departamento: 'Lisboa-PT 999990006',
      tipo: 'Troca de tambor',
      ilha: 'Av. Miguel Bombarda 88',
      contentor: 'L306,Av Conde Valbom,Indif',
      controloAcesso: '2AC7EA',
      dataHora: '2025-07-30',
      problemas: 0
    },
    {
      id: 5231,
      departamento: 'Lisboa-PT 999990006',
      tipo: 'Troca de asa de contentor',
      ilha: 'Rua Nossa Senhora Amparo',
      contentor: 'L.492_N S Amparo_papel',
      controloAcesso: '80729B',
      dataHora: '2025-07-28',
      problemas: 0
    },
    {
      id: 5230,
      departamento: 'Lisboa-PT 999990006',
      tipo: 'Troca de fecho de tampa',
      ilha: 'R Penha de França',
      contentor: '1 1000/18/11',
      controloAcesso: '805712',
      dataHora: '2025-07-28',
      problemas: 0
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
          <h1 className="text-xl font-bold text-white">Intervenções corretivas</h1>
          <p className="text-gray-300 mt-1">Gestão de intervenções corretivas do sistema</p>
          <div className="flex items-center space-x-3">
            <h2 className="text-xl font-semibold text-white">Nova intervenção corretiva</h2>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {/* Card 1: Number of interventions */}
        <Card className="card-glass p-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">N° de intervenções a visualizar</label>
            <Select value={filters.numeroIntervencoes} onValueChange={(value) => setFilters({...filters, numeroIntervencoes: value})}>
              <SelectTrigger className="bg-white text-black">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="últimas 10">últimas 10</SelectItem>
                <SelectItem value="últimas 20">últimas 20</SelectItem>
                <SelectItem value="últimas 50">últimas 50</SelectItem>
                <SelectItem value="todas">todas</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>
        
        {/* Card 2: Department */}
        <Card className="card-glass p-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Departamento</label>
            <Select value={filters.departamento} onValueChange={(value) => setFilters({...filters, departamento: value})}>
              <SelectTrigger className="bg-white text-black">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Todos">Todos</SelectItem>
                <SelectItem value="Lisboa-PT 999990006">Lisboa-PT 999990006</SelectItem>
                <SelectItem value="Faro-PT 999990004">Faro-PT 999990004</SelectItem>
                <SelectItem value="Porto-PT 999990008">Porto-PT 999990008</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>
        
        {/* Card 3: Type */}
        <Card className="card-glass p-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Tipo</label>
            <Select value={filters.tipo} onValueChange={(value) => setFilters({...filters, tipo: value})}>
              <SelectTrigger className="bg-white text-black">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Todos">Todos</SelectItem>
                <SelectItem value="Troca de tambor">Troca de tambor</SelectItem>
                <SelectItem value="Troca de asa de contentor">Troca de asa de contentor</SelectItem>
                <SelectItem value="Troca de fecho de tampa">Troca de fecho de tampa</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>
        
        {/* Card 4: Island */}
        <Card className="card-glass p-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Ilha</label>
            <Select value={filters.ilha} onValueChange={(value) => setFilters({...filters, ilha: value})}>
              <SelectTrigger className="bg-white text-black">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Todos">Todos</SelectItem>
                <SelectItem value="Av. Miguel Bombarda 88">Av. Miguel Bombarda 88</SelectItem>
                <SelectItem value="Rua Nossa Senhora Amparo">Rua Nossa Senhora Amparo</SelectItem>
                <SelectItem value="R Penha de França">R Penha de França</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>
        
        {/* Card 5: Container */}
        <Card className="card-glass p-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Contentor</label>
            <Select value={filters.contentor} onValueChange={(value) => setFilters({...filters, contentor: value})}>
              <SelectTrigger className="bg-white text-black">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Todos">Todos</SelectItem>
                <SelectItem value="L306,Av Conde Valbom,Indif">L306,Av Conde Valbom,Indif</SelectItem>
                <SelectItem value="L.492_N S Amparo_papel">L.492_N S Amparo_papel</SelectItem>
                <SelectItem value="1 1000/18/11">1 1000/18/11</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>
      </div>

      {/* Additional controls */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
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
        
        <div className="flex items-center space-x-2">
          <span className="text-sm text-white">Procurar:</span>
          <Input
            placeholder="Pesquisar intervenções..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-64 bg-white text-black placeholder-gray-600"
          />
        </div>
      </div>

      {/* Table */}
      <Card className="card-glass">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="cursor-pointer text-white">
                  Número
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Departamento
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Tipo
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Ilha
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Contentor
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Controlo de acesso
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Data e hora
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Problemas
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="text-white">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockIntervencoes.map((intervencao) => (
                <TableRow key={intervencao.id}>
                  <TableCell className="text-white">{intervencao.id}</TableCell>
                  <TableCell className="text-white">{intervencao.departamento}</TableCell>
                  <TableCell className="text-white">{intervencao.tipo}</TableCell>
                  <TableCell className="text-white">{intervencao.ilha}</TableCell>
                  <TableCell className="text-white">{intervencao.contentor}</TableCell>
                  <TableCell className="text-white">{intervencao.controloAcesso}</TableCell>
                  <TableCell className="text-white">{intervencao.dataHora}</TableCell>
                  <TableCell className="text-white">{intervencao.problemas}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="text-sotkis-green hover:text-sotkis-green/80">
                        <AlertTriangle className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-sotkis-green hover:text-sotkis-green/80">
                        <Image className="h-4 w-4" />
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

      {/* Export Images Section */}
      <Card className="card-glass">
        <CardHeader>
                          <CardTitle className="text-lg text-white">Exportar Imagens</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Departamento:</label>
              <Select defaultValue="Todos" onValueChange={(value) => console.log('Department changed to:', value)}>
                <SelectTrigger className="bg-white text-black">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Todos">Todos</SelectItem>
                  <SelectItem value="Lisboa-PT 999990006">Lisboa-PT 999990006</SelectItem>
                  <SelectItem value="Faro-PT 999990004">Faro-PT 999990004</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">N° de intervenção mínima:</label>
              <Select defaultValue="Todos" onValueChange={(value) => console.log('Min intervention changed to:', value)}>
                <SelectTrigger className="bg-white text-black">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Todos">Todos</SelectItem>
                  <SelectItem value="5200">5200</SelectItem>
                  <SelectItem value="5230">5230</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">N° de intervenção máxima:</label>
              <Select defaultValue="Todos" onValueChange={(value) => console.log('Max intervention changed to:', value)}>
                <SelectTrigger className="bg-white text-black">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Todos">Todos</SelectItem>
                  <SelectItem value="5240">5240</SelectItem>
                  <SelectItem value="5250">5250</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="mt-4 flex justify-end">
            <Button className="bg-sotkis-green text-black hover:bg-sotkis-green/90 px-8 py-2">
              Exportar
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Modal for Nova Intervenção Corretiva */}
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
              <h2 className="text-2xl font-bold text-sotkis-green">Nova intervenção corretiva</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column - Form Fields */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Tipo:</label>
                  <Select>
                    <SelectTrigger className="bg-white text-black">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="troca-tambor">Troca de tambor</SelectItem>
                      <SelectItem value="troca-asa">Troca de asa de contentor</SelectItem>
                      <SelectItem value="troca-fecho">Troca de fecho de tampa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Departamento:</label>
                  <Select>
                    <SelectTrigger className="bg-white text-black">
                      <SelectValue placeholder="Escolha um departamento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lisboa">Lisboa-PT 999990006</SelectItem>
                      <SelectItem value="faro">Faro-PT 999990004</SelectItem>
                      <SelectItem value="porto">Porto-PT 999990008</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Ilha:</label>
                  <Select>
                    <SelectTrigger className="bg-white text-black">
                      <SelectValue placeholder="Selecione a ilha" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bombarda">Av. Miguel Bombarda 88</SelectItem>
                      <SelectItem value="amparo">Rua Nossa Senhora Amparo</SelectItem>
                      <SelectItem value="penha">R Penha de França</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Contentor:</label>
                  <Select>
                    <SelectTrigger className="bg-white text-black">
                      <SelectValue placeholder="Selecione o contentor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="l306">L306,Av Conde Valbom,Indif</SelectItem>
                      <SelectItem value="l492">L.492_N S Amparo_papel</SelectItem>
                      <SelectItem value="1000">1 1000/18/11</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Data e hora:</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input 
                      type="date" 
                      placeholder="dd/mm/yyyy"
                      className="bg-white text-black"
                    />
                    <Input 
                      type="time" 
                      placeholder="--:--"
                      className="bg-white text-black"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Tempo de intervenção:</label>
                  <Input 
                    type="number" 
                    placeholder="Minutos"
                    className="bg-white text-black"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Nº de kilómetros efetuados:</label>
                  <Input 
                    type="number" 
                    placeholder="0"
                    className="bg-white text-black"
                  />
                </div>
              </div>

              {/* Right Column - Text Areas */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Relatório do trabalho:</label>
                  <textarea 
                    placeholder="Insira o texto SEM PARÁGRAFOS e SEM ENTERS."
                    className="w-full h-48 p-3 bg-white text-black placeholder-gray-600 rounded-md border border-gray-300 resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Material Utilizado:</label>
                  <textarea 
                    placeholder="Insira o texto SEM PARÁGRAFOS e SEM ENTERS."
                    className="w-full h-48 p-3 bg-white text-black placeholder-gray-600 rounded-md border border-gray-300 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 mt-6">
              <Button 
                variant="outline" 
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-600 text-white hover:bg-gray-700"
              >
                Cancelar
              </Button>
              <Button className="bg-sotkis-green text-white hover:bg-sotkis-green/90">
                Submeter
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SotcareIntervencoesCorretivas; 