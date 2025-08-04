import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Battery, TrendingDown, TrendingUp } from 'lucide-react';

const SotkisAccessBatteries = () => {
  const [selectedDepartment, setSelectedDepartment] = React.useState('');

  const handleDepartmentChange = (value) => {
    setSelectedDepartment(value);
    console.log('Selected department:', value);
    // Handle department selection logic here
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="page-header text-left">
        <h1 className="text-3xl font-bold text-white">Nível das Baterias por departamento/contentor</h1>
        <p className="text-gray-300 mt-1">Monitorização do estado das baterias</p>
      </div>

      {/* Main Content */}
      <Card className="card-glass">
        <CardContent className="p-6">
          <div className="max-w-md space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Departamento</label>
              <Select value={selectedDepartment} onValueChange={handleDepartmentChange}>
                <SelectTrigger className="bg-white border-white text-black">
                  <SelectValue placeholder="Selecione um departamento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="faro">Faro</SelectItem>
                  <SelectItem value="lisboa">Lisboa</SelectItem>
                  <SelectItem value="porto">Porto</SelectItem>
                  <SelectItem value="coimbra">Coimbra</SelectItem>
                  <SelectItem value="braga">Braga</SelectItem>
                  <SelectItem value="aveiro">Aveiro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <p className="text-sm text-gray-300">
              Selecione um departamento.
            </p>
          </div>

          {/* Battery Status Display (when department is selected) */}
          {selectedDepartment && (
            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-semibold text-white">
                Status das Baterias - {selectedDepartment.charAt(0).toUpperCase() + selectedDepartment.slice(1)}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Sample Battery Status Cards */}
                <Card className="border-l-4 border-green-500 bg-white/10 border-white/20">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-white">Contentor 001</h4>
                        <p className="text-sm text-gray-300">Ilha Centro</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Battery className="h-5 w-5 text-green-500" />
                        <span className="text-sm font-medium text-green-400">85%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-yellow-500 bg-white/10 border-white/20">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-white">Contentor 002</h4>
                        <p className="text-sm text-gray-300">Ilha Jardim</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Battery className="h-5 w-5 text-yellow-500" />
                        <span className="text-sm font-medium text-yellow-400">45%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-red-500 bg-white/10 border-white/20">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-white">Contentor 003</h4>
                        <p className="text-sm text-gray-300">Ilha Parque</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Battery className="h-5 w-5 text-red-500" />
                        <span className="text-sm font-medium text-red-400">15%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-green-500 bg-white/10 border-white/20">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-white">Contentor 004</h4>
                        <p className="text-sm text-gray-300">Ilha Centro</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Battery className="h-5 w-5 text-green-500" />
                        <span className="text-sm font-medium text-green-400">92%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-yellow-500 bg-white/10 border-white/20">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-white">Contentor 005</h4>
                        <p className="text-sm text-gray-300">Ilha Jardim</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Battery className="h-5 w-5 text-yellow-500" />
                        <span className="text-sm font-medium text-yellow-400">38%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-green-500 bg-white/10 border-white/20">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-white">Contentor 006</h4>
                        <p className="text-sm text-gray-300">Ilha Parque</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Battery className="h-5 w-5 text-green-500" />
                        <span className="text-sm font-medium text-green-400">78%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Summary Stats */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-white/10 border-white/20">
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Battery className="h-5 w-5 text-green-500" />
                      <span className="text-lg font-semibold text-green-400">4</span>
                    </div>
                    <p className="text-sm text-gray-300">Baterias Boas (&gt;70%)</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20">
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Battery className="h-5 w-5 text-yellow-500" />
                      <span className="text-lg font-semibold text-yellow-400">2</span>
                    </div>
                    <p className="text-sm text-gray-300">Baterias Médias (20-70%)</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20">
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Battery className="h-5 w-5 text-red-500" />
                      <span className="text-lg font-semibold text-red-400">1</span>
                    </div>
                    <p className="text-sm text-gray-300">Baterias Baixas (&lt;20%)</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SotkisAccessBatteries; 