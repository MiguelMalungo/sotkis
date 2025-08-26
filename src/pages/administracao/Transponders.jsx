import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Plus, Search, Edit, Trash2, Eye, MoreHorizontal, User, Mail, Phone, MapPin, Calendar, Shield, CheckCircle, XCircle, Clock, AlertTriangle, Image, ArrowUpDown, X } from 'lucide-react';
import SubmenuBar from '../../components/ui/SubmenuBar';

const Transponders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newTransponder, setNewTransponder] = useState({
    descPT: '',
    descEN: '',
    descES: '',
    descFR: ''
  });

  // Mock data for transponders
  const mockTransponders = [
    { 
      id: 1, 
      descPT: 'CARTÃO', 
      descEN: 'CARD', 
      descES: 'TARJETA', 
      descFR: 'CARTE' 
    },
    { 
      id: 2, 
      descPT: 'TAG', 
      descEN: 'TAG', 
      descES: 'TAG', 
      descFR: 'TAG' 
    },
    { 
      id: 3, 
      descPT: 'CHIP RFID', 
      descEN: 'RFID CHIP', 
      descES: 'CHIP RFID', 
      descFR: 'PUCE RFID' 
    },
    { 
      id: 4, 
      descPT: 'SENSOR', 
      descEN: 'SENSOR', 
      descES: 'SENSOR', 
      descFR: 'CAPTEUR' 
    },
  ];

  const filteredTransponders = mockTransponders.filter(transponder =>
    transponder.descPT.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transponder.descEN.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transponder.descES.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transponder.descFR.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateTransponder = () => {
    // Handle transponder creation logic here
    console.log('Creating transponder:', newTransponder);
    setShowCreateModal(false);
    setNewTransponder({ descPT: '', descEN: '', descES: '', descFR: '' });
  };

  const handleCancel = () => {
    setShowCreateModal(false);
    setNewTransponder({ descPT: '', descEN: '', descES: '', descFR: '' });
  };

  const submenuLinks = [
    { label: 'Importações', to: '/administracao/importacoes' },
    { label: 'Estados da Faturação', to: '/administracao/estados-faturacao' },
    { label: 'Países', to: '/administracao/paises' },
    { label: 'Transponders', to: '/administracao/transponders' },
    { label: 'Contentores', to: '/administracao/contentores' },
    { label: 'Resíduos', to: '/administracao/residuos' },
    { label: 'Controlos de Acesso', to: '/administracao/controlos-acesso' },
    { label: 'Acabamentos', to: '/administracao/acabamentos' },
    { label: 'Kits', to: '/administracao/kits' },
    { label: 'Volumes do Kit', to: '/administracao/volumes-kit' },
    { label: 'Marcos', to: '/administracao/marcos' },
    { label: 'Intervenções', to: '/administracao/intervencoes' },
    { label: 'Plat. de Segurança', to: '/administracao/plataformas-seguranca' },
    { label: 'Sensores de Enchimento', to: '/administracao/sensores-enchimento' },
    { label: 'Utilizadores Finais', to: '/administracao/utilizadores-finais' },
    { label: 'Estado chaves RFID', to: '/administracao/estado-chaves-rfid' },
    { label: 'RGPDs', to: '/administracao/rgpd-list' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header - AT THE VERY TOP */}
      <div className="page-header text-right">
        <h1 className="text-xl font-bold text-white">Transponders</h1>
        <p className="text-gray-300 mt-1">Gestão de transponders do sistema</p>
      </div>

      {/* SubmenuBar */}
      <SubmenuBar items={submenuLinks} />

      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Pesquisar transponders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white/5 border-white/10 text-white placeholder-gray-400"
          />
        </div>
        <Button
          onClick={() => setShowCreateModal(true)}
          className="bg-sotkis-green hover:bg-sotkis-green/90 text-black font-semibold"
        >
          <Plus className="w-4 h-4 mr-2" />
          Novo Transponder
        </Button>
      </div>

      {/* Transponders Table */}
      <Card className="card-glass">
        <CardHeader>
          <CardTitle className="text-white">Tipo de Transponder</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-white">DescPT</TableHead>
                <TableHead className="text-white">DescEN</TableHead>
                <TableHead className="text-white">DescES</TableHead>
                <TableHead className="text-white">DescFR</TableHead>
                                  <TableHead className="text-white text-center">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTransponders.map((transponder) => (
                <TableRow key={transponder.id}>
                  <TableCell className="text-white">
                    <div className="flex items-center gap-2">
                      {/* <Radio className="w-4 h-4 text-sotkis-green" /> */}
                      {transponder.descPT}
                    </div>
                  </TableCell>
                  <TableCell className="text-white">{transponder.descEN}</TableCell>
                  <TableCell className="text-white">{transponder.descES}</TableCell>
                  <TableCell className="text-white">{transponder.descFR}</TableCell>
                  <TableCell className="text-center">
                    <div className="flex gap-2 justify-center">
                      <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Create Transponder Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="card-glass rounded-lg p-4 sm:p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto mx-4 sm:mx-0">
            <div className="flex justify-end mb-4 sm:mb-6">
              <Button
                onClick={() => setShowCreateModal(false)}
                variant="ghost"
                size="icon"
                className="text-white hover:text-gray-300"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="text-left mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-sotkis-green">Novo Transponder</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Left Column - Form Fields */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Descrição PT:</label>
                  <Input
                    value={newTransponder.descPT}
                    onChange={(e) => setNewTransponder({...newTransponder, descPT: e.target.value})}
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Descrição em Português"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Descrição EN:</label>
                  <Input
                    value={newTransponder.descEN}
                    onChange={(e) => setNewTransponder({...newTransponder, descEN: e.target.value})}
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Description in English"
                  />
                </div>
              </div>

              {/* Right Column - Additional Fields */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Descrição ES:</label>
                  <Input
                    value={newTransponder.descES}
                    onChange={(e) => setNewTransponder({...newTransponder, descES: e.target.value})}
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Descripción en Español"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Descrição FR:</label>
                  <Input
                    value={newTransponder.descFR}
                    onChange={(e) => setNewTransponder({...newTransponder, descFR: e.target.value})}
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Description en Français"
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
                onClick={handleCreateTransponder}
                className="bg-sotkis-green text-black hover:bg-sotkis-green/90 w-full sm:w-auto"
              >
                Criar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transponders; 