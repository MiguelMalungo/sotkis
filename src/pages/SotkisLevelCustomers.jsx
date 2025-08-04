import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { ChevronRight, Search, ArrowUpDown } from 'lucide-react';

const SotkisLevelCustomers = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [recordsPerPage, setRecordsPerPage] = React.useState('10');

  // Mock customer data
  const mockCustomers = [
    {
      id: 152944,
      name: 'Sotkon Group Test Account',
      country: 'Portugal'
    },
    {
      id: 152970,
      name: 'Funchal - Portugal',
      country: 'Portugal'
    },
    {
      id: 152971,
      name: 'Porec-Croatia',
      country: 'Croatia'
    },
    {
      id: 152972,
      name: 'Lisboa - Portugal',
      country: 'Portugal'
    },
    {
      id: 152973,
      name: 'Porto - Portugal',
      country: 'Portugal'
    },
    {
      id: 152974,
      name: 'Coimbra - Portugal',
      country: 'Portugal'
    },
    {
      id: 152975,
      name: 'Braga - Portugal',
      country: 'Portugal'
    },
    {
      id: 152976,
      name: 'Aveiro - Portugal',
      country: 'Portugal'
    },
    {
      id: 152977,
      name: 'Viseu - Portugal',
      country: 'Portugal'
    },
    {
      id: 152978,
      name: 'Castelo Branco - Portugal',
      country: 'Portugal'
    }
  ];

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-end sm:justify-start">
        <div className="space-y-2 text-right sm:text-left">
          <h1 className="text-xl font-bold text-white">Customers List</h1>
          <p className="text-gray-300 mt-1">Gestão de clientes do sistema</p>
        </div>
      </div>

      {/* Table Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-white">Mostrar</span>
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
        
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <span className="text-sm text-white">Procurar:</span>
          <Input
            placeholder="Pesquisar clientes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 sm:w-64 bg-white text-black placeholder-gray-600"
          />
        </div>
      </div>

      {/* Table */}
      <Card className="card-glass">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="cursor-pointer text-white">
                    Id de cliente
                    <ArrowUpDown className="ml-1 inline h-4 w-4" />
                  </TableHead>
                  <TableHead className="cursor-pointer text-white">
                    Nome
                    <ArrowUpDown className="ml-1 inline h-4 w-4" />
                  </TableHead>
                  <TableHead className="cursor-pointer text-white">
                    País
                    <ArrowUpDown className="ml-1 inline h-4 w-4" />
                  </TableHead>
                  <TableHead className="text-white">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockCustomers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell className="text-white">{customer.id}</TableCell>
                    <TableCell className="text-white">{customer.name}</TableCell>
                    <TableCell className="text-white">{customer.country}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="text-sotkis-green hover:text-sotkis-green/80">
                        <ChevronRight className="h-4 w-4 text-white" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-sm text-white text-center sm:text-left">
          A exibir 1-10 de 18 registos
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white">
            Anterior
          </Button>
          <Button size="sm" className="bg-sotkis-green text-black hover:bg-sotkis-green/90 w-8">
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
    </div>
  );
};

export default SotkisLevelCustomers; 