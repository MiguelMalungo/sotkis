import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Calendar, FileText, Download, Printer } from 'lucide-react';

const SotkisLevelCollections = () => {
  const [selectedDepartment, setSelectedDepartment] = React.useState('');

  // Mock data for departments
  const departments = [
    'Faro-PT 999990004',
    'Lisboa-PT 999990006',
    'Porto-PT 999990008',
    'Coimbra-PT 999990010',
    'Braga-PT 999990012'
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-white">Recolhas</h1>
          <p className="text-gray-300 mt-1">Gestão de recolhas e coleções do sistema</p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
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

      {/* Department Filter */}
      <Card className="card-glass">
        <CardContent className="p-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Departamento:</label>
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                              <SelectTrigger className="bg-white border-white text-black">
                <SelectValue placeholder="Selecione departamento" />
              </SelectTrigger>
              <SelectContent>
                {departments.map((dept) => (
                  <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Area */}
      <Card className="card-glass">
        <CardContent className="p-8">
          <div className="text-center space-y-4">
            {/* Icon */}
            <div className="w-16 h-16 bg-sotkis-green rounded-full flex items-center justify-center mx-auto">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            
            {/* Title */}
            <h2 className="text-2xl font-bold text-white">Recolhas</h2>
            
            {/* Instructions */}
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Por favor selecione o seu departamento para lhe serem apresentados os registos.
            </p>
            
            {/* Additional Info */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                  <Calendar className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-white font-medium">Agendamento</h3>
                <p className="text-gray-400 text-sm">Programe recolhas futuras</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                  <FileText className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-white font-medium">Relatórios</h3>
                <p className="text-gray-400 text-sm">Visualize histórico de recolhas</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto">
                  <Download className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="text-white font-medium">Exportar</h3>
                <p className="text-gray-400 text-sm">Exporte dados de recolhas</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      {selectedDepartment && (
        <Card className="card-glass">
          <CardHeader>
            <CardTitle className="text-white">Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button className="bg-sotkis-green text-black hover:bg-sotkis-green/90">
                <Calendar className="h-4 w-4 mr-2" />
                Nova Recolha
              </Button>
              <Button variant="outline" className="bg-white/10 border-white/20 text-white">
                <FileText className="h-4 w-4 mr-2" />
                Ver Relatórios
              </Button>
              <Button variant="outline" className="bg-white/10 border-white/20 text-white">
                <Download className="h-4 w-4 mr-2" />
                Exportar Dados
              </Button>
              <Button variant="outline" className="bg-white/10 border-white/20 text-white">
                <Printer className="h-4 w-4 mr-2" />
                Imprimir
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SotkisLevelCollections; 