import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Plus, Edit, Trash2, FileText, Download, Printer, X } from 'lucide-react';

const ComplianceSuppliers = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [recordsPerPage, setRecordsPerPage] = React.useState('10');

  // Mock non-conformities data
  const mockNonConformities = [
    {
      id: 30,
      client: 'Sibland',
      sigla: 'F',
      subject: 'entrega de Smilin errado',
      description: 'Foi encomendado smilin LIOZ (que é um branco sujo / beje) e o fornecedor enviou um mármore de Estremoz (que é mesmo branco), diferente da nossa encomenda n.° 954/2020',
      type: 'Pouco grave',
      status: 'Resolvida'
    },
    {
      id: 52,
      client: 'Josilnox',
      sigla: 'F',
      subject: 'Marcos com danos - transporte',
      description: 'Os marcos Y chegaram com alguns danos',
      type: 'Pouco grave',
      status: 'Resolvida'
    },
    {
      id: 53,
      client: 'DHL',
      sigla: 'F',
      subject: 'volume danificado e falta de material',
      description: 'entregue um volume que vinha danificado e com nova fita de embalagem. Após conferencia estavam em falta 2 amortecedores.',
      type: 'Pouco grave',
      status: 'Resolvida'
    },
    {
      id: 54,
      client: 'TMM',
      sigla: 'F',
      subject: 'Transferência e acondicionamento de cargas incorreto',
      description: 'BCF.098.2021 - FPV.266.2020 O transportador depois de carregar 6 camiões nas nossas instalações para França, alterou as cargas nas instalações dele, e acondicionou tudo em 5 camiões, indo os mesmos a exceder o limite de altura no camião.',
      type: 'Grave',
      status: 'Resolvida'
    },
    {
      id: 55,
      client: 'LogiTrans',
      sigla: 'F',
      subject: 'Atraso na entrega',
      description: 'Entrega com atraso de 3 dias em relação ao prazo acordado',
      type: 'Pouco grave',
      status: 'Em análise'
    },
    {
      id: 56,
      client: 'MateriaisPro',
      sigla: 'F',
      subject: 'Qualidade inferior ao especificado',
      description: 'Material recebido não atende às especificações técnicas contratadas',
      type: 'Grave',
      status: 'Pendente'
    }
  ];

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Resolvida':
        return 'bg-green-500/20 text-green-400';
      case 'Em análise':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'Pendente':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Grave':
        return 'bg-red-500/20 text-red-400';
      case 'Pouco grave':
        return 'bg-yellow-500/20 text-yellow-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-white">Lista de não-conformidades</h1>
          <p className="text-gray-300 mt-1">Gestão de não-conformidades com fornecedores</p>
        </div>
        
        {/* Export Icons */}
        <div className="flex items-center justify-end space-x-2">
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

      {/* Table Controls */}
      <div className="space-y-4 md:space-y-0 md:flex md:justify-between md:items-center">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-white">Mostrar</span>
          <Select value={recordsPerPage} onValueChange={setRecordsPerPage}>
            <SelectTrigger className="w-20 bg-white border-white text-black">
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
            placeholder="Pesquisar não-conformidades..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-64 bg-white text-black placeholder-gray-600"
          />
        </div>
      </div>

      {/* Table */}
      <Card className="card-glass">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="cursor-pointer text-white text-center w-20">
                  Número
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Cliente
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white text-center w-16">
                  SIGLA
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Assunto
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white">
                  Descrição
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white text-center w-36">
                  Tipo
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="cursor-pointer text-white text-center w-36">
                  Estado
                  <span className="ml-1">↕</span>
                </TableHead>
                <TableHead className="text-white">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockNonConformities.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="text-white font-medium text-center">{item.id}</TableCell>
                  <TableCell className="text-white">{item.client}</TableCell>
                  <TableCell className="text-white text-center">{item.sigla}</TableCell>
                  <TableCell className="text-white max-w-xs truncate">{item.subject}</TableCell>
                  <TableCell className="text-white max-w-md">
                    <div className="truncate" title={item.description}>
                      {item.description}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                      {item.type}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="text-sotkis-green hover:text-sotkis-green/80">
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-sotkis-green hover:text-sotkis-green/80">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-400">
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
          A exibir 1-6 de 6 registos
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

      {/* Create New Button */}
      <div className="flex justify-center">
        <Button className="bg-sotkis-green text-black hover:bg-sotkis-green/90 px-8 py-3">
          <Plus className="h-5 w-5 mr-2" />
          Criar Nova Não-conformidade
        </Button>
      </div>
    </div>
  );
};

export default ComplianceSuppliers; 