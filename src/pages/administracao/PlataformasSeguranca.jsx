import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Plus, Search, Edit, Trash2, Eye, MoreHorizontal, User, Mail, Phone, MapPin, Calendar, Shield, CheckCircle, XCircle, Clock, AlertTriangle, Image, ArrowUpDown, X } from 'lucide-react';
import SubmenuBar from '../../components/ui/SubmenuBar';

const PlataformasSeguranca = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newSafetyPlatformType, setNewSafetyPlatformType] = useState({
    descPT: '',
    descEN: '',
    descES: '',
    descFR: ''
  });

  // Mock data for safety platform types
  const mockSafetyPlatformTypes = [
    { 
      id: 1, 
      descPT: 'Plataforma de segurança contra pesos', 
      descEN: 'Safety platfom counterweights', 
      descES: 'Plataforma de seguridad contra pesos', 
      descFR: 'Platforme Sécurité Contrepoids' 
    },
    { 
      id: 2, 
      descPT: 'Plataforma de segurança dupla (compacto)', 
      descEN: 'Double Safety platfom (compact)', 
      descES: 'Plataforma de seguridad doble (compacto)', 
      descFR: 'Platforme Sécurité double (compacto)' 
    },
    { 
      id: 3, 
      descPT: 'Plataforma segurança standard', 
      descEN: 'Safety platfom standard', 
      descES: 'Plataforma de seguridad standard', 
      descFR: 'Platforme Sécurité standard' 
    },
    { 
      id: 4, 
      descPT: 'Sem plataforma de segurança', 
      descEN: 'without Safety platfom', 
      descES: 'Sin Plataforma de seguridad', 
      descFR: 'Avec Platforme Sécurité' 
    },
  ];

  const filteredSafetyPlatformTypes = mockSafetyPlatformTypes.filter(safetyPlatformType =>
    safetyPlatformType.descPT.toLowerCase().includes(searchTerm.toLowerCase()) ||
    safetyPlatformType.descEN.toLowerCase().includes(searchTerm.toLowerCase()) ||
    safetyPlatformType.descES.toLowerCase().includes(searchTerm.toLowerCase()) ||
    safetyPlatformType.descFR.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateSafetyPlatformType = () => {
    // Handle safety platform type creation logic here
    console.log('Creating safety platform type:', newSafetyPlatformType);
    setShowCreateModal(false);
    setNewSafetyPlatformType({ descPT: '', descEN: '', descES: '', descFR: '' });
  };

  const handleCancel = () => {
    setShowCreateModal(false);
    setNewSafetyPlatformType({ descPT: '', descEN: '', descES: '', descFR: '' });
  };

  const submenuLinks = [
    { label: 'Importações', to: '/administracao/importacoes' },
    { label: 'Ilhas', to: '/administracao/ilhas' },
    { label: 'Utilizadores', to: '/administracao/utilizadores' },
    { label: 'RFIDs', to: '/administracao/rfids' },
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
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header - AT THE VERY TOP */}
      <div className="page-header text-right">
        <h1 className="text-xl font-bold text-white">Plataformas de Segurança</h1>
        <p className="text-gray-300 mt-1">Gestão de plataformas de segurança do sistema</p>
      </div>

      {/* SubmenuBar */}
      <SubmenuBar items={submenuLinks} />



      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Pesquisar tipos de plataforma..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white/5 border-white/10 text-white placeholder-gray-400"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Button
            onClick={() => setShowCreateModal(true)}
            className="bg-sotkis-green hover:bg-sotkis-green/90 text-black font-semibold"
          >
            <Plus className="w-4 h-4 mr-2" />
            Novo Tipo de Plataforma de Segurança
          </Button>
        </div>
      </div>

      {/* Safety Platform Types Table */}
      <Card className="bg-white/20 backdrop-blur-lg border-0">
        <CardHeader>
          <CardTitle className="text-white">Tipos de Plataforma de Segurança</CardTitle>
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
              {filteredSafetyPlatformTypes.map((safetyPlatformType) => (
                <TableRow key={safetyPlatformType.id} className="border-white/20 hover:bg-sotkis-green/20 hover:border-sotkis-green/30 transition-colors duration-200">
                  <TableCell className="text-white">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-sotkis-green" />
                      {safetyPlatformType.descPT}
                    </div>
                  </TableCell>
                  <TableCell className="text-white">{safetyPlatformType.descEN}</TableCell>
                  <TableCell className="text-white">{safetyPlatformType.descES}</TableCell>
                  <TableCell className="text-white">{safetyPlatformType.descFR}</TableCell>
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

      {/* Create Safety Platform Type Modal */}
      {showCreateModal && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          onClick={() => setShowCreateModal(false)}
        >
          <div 
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl shadow-2xl p-4 sm:p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto mx-4 sm:mx-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Novo Tipo de Plataforma de Segurança</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Left Column - Form Fields */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Descrição PT:</label>
                  <Input
                    value={newSafetyPlatformType.descPT}
                    onChange={(e) => setNewSafetyPlatformType({...newSafetyPlatformType, descPT: e.target.value})}
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Descrição em Português"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Descrição EN:</label>
                  <Input
                    value={newSafetyPlatformType.descEN}
                    onChange={(e) => setNewSafetyPlatformType({...newSafetyPlatformType, descEN: e.target.value})}
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
                    value={newSafetyPlatformType.descES}
                    onChange={(e) => setNewSafetyPlatformType({...newSafetyPlatformType, descES: e.target.value})}
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Descripción en Español"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Descrição FR:</label>
                  <Input
                    value={newSafetyPlatformType.descFR}
                    onChange={(e) => setNewSafetyPlatformType({...newSafetyPlatformType, descFR: e.target.value})}
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
                onClick={handleCreateSafetyPlatformType}
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

export default PlataformasSeguranca;