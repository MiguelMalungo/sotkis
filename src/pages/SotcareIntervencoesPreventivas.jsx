import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Plus, Search, Edit, Trash2, FileText, Download, Printer, X, ChevronDown } from 'lucide-react';

const SotcareIntervencoesPreventivas = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filters, setFilters] = React.useState({
    numeroIntervencoes: 'últimas 20',
    departamento: 'Todos',
    ilha: 'Todos'
  });
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Mock data for preventive interventions
  const mockIntervencoes = [
    {
      id: 13623,
      departamento: 'Faro-PT 999990004',
      ilha: 'R. Madre Teresa de Calcutá',
      contentores: 2,
      data: '2025-07-25'
    },
    {
      id: 13622,
      departamento: 'Faro-PT 999990004',
      ilha: 'Rua Raul de Matos, R. Alm. António Ramalho Ortigão',
      contentores: 1,
      data: '2025-07-25'
    },
    {
      id: 13621,
      departamento: 'Faro-PT 999990004',
      ilha: 'R. José Rosário da Silva',
      contentores: 2,
      data: '2025-07-25'
    },
    {
      id: 13620,
      departamento: 'Faro-PT 999990004',
      ilha: 'Largo de São Francisco 45',
      contentores: 1,
      data: '2025-07-25'
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
          <h1 className="text-3xl font-bold text-white">Intervenções preventivas</h1>
          <p className="text-gray-300 mt-1">Gestão de intervenções preventivas do sistema</p>
          <div className="flex items-center space-x-3">
            <h2 className="text-xl font-semibold text-white">Nova intervenção preventiva</h2>
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
                <SelectItem value="Faro-PT 999990004">Faro-PT 999990004</SelectItem>
                <SelectItem value="Lisboa-PT 999990006">Lisboa-PT 999990006</SelectItem>
                <SelectItem value="Porto-PT 999990008">Porto-PT 999990008</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>
        
        {/* Card 3: Island */}
        <Card className="card-glass p-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Ilha</label>
            <Select value={filters.ilha} onValueChange={(value) => setFilters({...filters, ilha: value})}>
              <SelectTrigger className="bg-white text-black">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Todos">Todos</SelectItem>
                <SelectItem value="R. Madre Teresa de Calcutá">R. Madre Teresa de Calcutá</SelectItem>
                <SelectItem value="Rua Raul de Matos">Rua Raul de Matos</SelectItem>
                <SelectItem value="R. José Rosário da Silva">R. José Rosário da Silva</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>
        
        {/* Card 4: Search */}
        <Card className="card-glass p-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Procurar</label>
            <Input
              placeholder="Pesquisar intervenções..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white text-black placeholder-gray-600"
            />
          </div>
        </Card>
        
        {/* Card 5: Records per page */}
        <Card className="card-glass p-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Mostrar registos</label>
            <Select defaultValue="10" onValueChange={(value) => console.log('Records per page changed to:', value)}>
              <SelectTrigger className="bg-white text-black">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>
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
                  Ilha
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Contentores
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Data
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
                  <TableCell className="text-white">{intervencao.ilha}</TableCell>
                  <TableCell className="text-white">{intervencao.contentores}</TableCell>
                  <TableCell className="text-white">{intervencao.data}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="text-sotkis-green hover:text-sotkis-green/80">
                        <Plus className="h-4 w-4" />
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

      {/* Modal for Nova Intervenção Preventiva */}
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
              <h2 className="text-2xl font-bold text-sotkis-green">Nova intervenção preventiva</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column - Form Fields */}
              <div className="space-y-4">
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
                  <label className="text-sm font-medium text-white">Data da intervenção:</label>
                  <Input 
                    type="date" 
                    placeholder="dd/mm/yyyy"
                    className="bg-white text-black"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Relatório:</label>
                  <textarea 
                    placeholder="Insira o texto SEM PARÁGRAFOS e SEM ENTERS."
                    className="w-full h-48 p-3 bg-white text-black placeholder-gray-600 rounded-md border border-gray-300 resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Observações/diagnósticos verificadas:</label>
                  <textarea 
                    placeholder="Insira o texto SEM PARÁGRAFOS e SEM ENTERS."
                    className="w-full h-48 p-3 bg-white text-black placeholder-gray-600 rounded-md border border-gray-300 resize-none"
                  />
                </div>
              </div>

              {/* Right Column - Checkbox Sections */}
              <div className="space-y-6">
                {/* Verificação Section */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">Verificação:</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-white">
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-sotkis-green bg-white border-gray-300 rounded focus:ring-sotkis-green" />
                      <span>Abertura/fecho da tampa/tambor marco</span>
                    </label>
                    <label className="flex items-center space-x-2 text-white">
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-sotkis-green bg-white border-gray-300 rounded focus:ring-sotkis-green" />
                      <span>Abertura da Porta comercial</span>
                    </label>
                    <label className="flex items-center space-x-2 text-white">
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-sotkis-green bg-white border-gray-300 rounded focus:ring-sotkis-green" />
                      <span>Controlo de acesso</span>
                    </label>
                    <label className="flex items-center space-x-2 text-white">
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-sotkis-green bg-white border-gray-300 rounded focus:ring-sotkis-green" />
                      <span>Abertura/Fecho e Trinco da tampa (simples/elétrica)</span>
                    </label>
                    <label className="flex items-center space-x-2 text-white">
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-sotkis-green bg-white border-gray-300 rounded focus:ring-sotkis-green" />
                      <span>Tampa da cuba-acabamentos</span>
                    </label>
                  </div>
                </div>

                {/* Lubrificação Section */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">Lubrificação:</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-white">
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-sotkis-green bg-white border-gray-300 rounded focus:ring-sotkis-green" />
                      <span>Dobradiças da tampa da cuba</span>
                    </label>
                    <label className="flex items-center space-x-2 text-white">
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-sotkis-green bg-white border-gray-300 rounded focus:ring-sotkis-green" />
                      <span>Fecho/suportes da tampa</span>
                    </label>
                    <label className="flex items-center space-x-2 text-white">
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-sotkis-green bg-white border-gray-300 rounded focus:ring-sotkis-green" />
                      <span>Amortecedores</span>
                    </label>
                    <label className="flex items-center space-x-2 text-white">
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-sotkis-green bg-white border-gray-300 rounded focus:ring-sotkis-green" />
                      <span>Eixos da porta comercial</span>
                    </label>
                  </div>
                </div>

                {/* Outros Section */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">Outros:</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-white">
                      <input type="checkbox" className="w-4 h-4 text-sotkis-green bg-white border-gray-300 rounded focus:ring-sotkis-green" />
                      <span>Limpeza de caleiras</span>
                    </label>
                    <label className="flex items-center space-x-2 text-white">
                      <input type="checkbox" className="w-4 h-4 text-sotkis-green bg-white border-gray-300 rounded focus:ring-sotkis-green" />
                      <span>Aplicar primário e/ou tinta em pontos ferrugem</span>
                    </label>
                    <label className="flex items-center space-x-2 text-white">
                      <input type="checkbox" className="w-4 h-4 text-sotkis-green bg-white border-gray-300 rounded focus:ring-sotkis-green" />
                      <span>Aplicar desengorduramento e lavagem da tampa</span>
                    </label>
                    <label className="flex items-center space-x-2 text-white">
                      <input type="checkbox" className="w-4 h-4 text-sotkis-green bg-white border-gray-300 rounded focus:ring-sotkis-green" />
                      <span>Aplicação de impermeabilizante na tampa</span>
                    </label>
                    <label className="flex items-center space-x-2 text-white">
                      <input type="checkbox" className="w-4 h-4 text-sotkis-green bg-white border-gray-300 rounded focus:ring-sotkis-green" />
                      <span>Troca de borracha da tampa</span>
                    </label>
                    <label className="flex items-center space-x-2 text-white">
                      <input type="checkbox" className="w-4 h-4 text-sotkis-green bg-white border-gray-300 rounded focus:ring-sotkis-green" />
                      <span>Troca de borracha do marco</span>
                    </label>
                    <label className="flex items-center space-x-2 text-white">
                      <input type="checkbox" className="w-4 h-4 text-sotkis-green bg-white border-gray-300 rounded focus:ring-sotkis-green" />
                      <span>Troca de sinaléticas de marco</span>
                    </label>
                  </div>
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
                Refresh
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

export default SotcareIntervencoesPreventivas; 