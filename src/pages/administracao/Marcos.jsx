import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Plus, Search, Edit, Trash2, Eye, MoreHorizontal, User, Mail, Phone, MapPin, Calendar, Shield, CheckCircle, XCircle, Clock, AlertTriangle, Image, ArrowUpDown, Tag, X } from 'lucide-react';
import SubmenuBar from '../../components/ui/SubmenuBar';

const Marcos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsLightMode(document.body.classList.contains('light-theme'));
    };
    
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newMarkType, setNewMarkType] = useState({
    descPT: '',
    descEN: '',
    descES: '',
    descFR: ''
  });

  // Mock data for mark types
  const mockMarkTypes = [
    { 
      id: 1, 
      descPT: 'Diamond alçapão, porta comercial', 
      descEN: 'Diamond trapdoor, comercial door', 
      descES: 'Diamond trampilla, puerta comercial', 
      descFR: 'Diamond trappe, porte' 
    },
    { 
      id: 2, 
      descPT: 'Diamond vidro, porta comercial', 
      descEN: 'Diamond glass, commercial door', 
      descES: 'Diamond vidrio, puerta comercial', 
      descFR: 'Diamond verre, porte' 
    },
    { 
      id: 3, 
      descPT: 'Ikon (standard) 510 com pedal', 
      descEN: 'Ikon 510 with pedal', 
      descES: 'Ikon 510 con pedal', 
      descFR: 'Ikon 510 avec pédale' 
    },
    { 
      id: 4, 
      descPT: 'Ikon (standard) 510 lim. inox vidro, c/ pedal', 
      descEN: 'Ikon 510 glass inox reduction with pedal', 
      descES: 'Ikon 510 vidrio reductor inox con pedal', 
      descFR: 'Ikon 510 verre réducteur inox avec pédale' 
    },
    { 
      id: 5, 
      descPT: 'Ikon (standard) 510 lim.fibra vidro', 
      descEN: 'Ikon 510 glass fiber reduction', 
      descES: 'Ikon 510 vidrio reductor fibra', 
      descFR: 'Ikon 510 verre réducteur fibre' 
    },
    { 
      id: 6, 
      descPT: 'Ikon (standard) 510 lim.fibra vidro c/ tampa polietileno', 
      descEN: 'Ikon 510 glass fiber reduction, polyethylene lid', 
      descES: 'Ikon 510 vidrio reductor fibra, tapa polietileno', 
      descFR: 'Ikon 510 verre réducteur fibre, polyéthylène couverture' 
    },
    { 
      id: 7, 
      descPT: 'Ikon (standard) 510 lim.fibra vidro, c/ pedal', 
      descEN: 'Ikon 510 glass fiber reduction with pedal', 
      descES: 'Ikon 510 vidrio reductor fibra con pedal', 
      descFR: 'Ikon 510 verre réducteur fibre avec pédale' 
    },
  ];

  const filteredMarkTypes = mockMarkTypes.filter(markType =>
    markType.descPT.toLowerCase().includes(searchTerm.toLowerCase()) ||
    markType.descEN.toLowerCase().includes(searchTerm.toLowerCase()) ||
    markType.descES.toLowerCase().includes(searchTerm.toLowerCase()) ||
    markType.descFR.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateMarkType = () => {
    // Handle mark type creation logic here
    console.log('Creating mark type:', newMarkType);
    setShowCreateModal(false);
    setNewMarkType({ descPT: '', descEN: '', descES: '', descFR: '' });
  };

  const handleCancel = () => {
    setShowCreateModal(false);
    setNewMarkType({ descPT: '', descEN: '', descES: '', descFR: '' });
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
        <h1 className="text-xl font-bold text-white">Marcos</h1>
        <p className="text-gray-300 mt-1">Gestão de marcos do sistema</p>
      </div>

      {/* SubmenuBar */}
      <SubmenuBar items={submenuLinks} />

      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Pesquisar tipos de marco..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`pl-10 ${
              isLightMode 
                ? 'bg-sotkis-green/10 border-sotkis-green/30 text-gray-900 placeholder-gray-600' 
                : 'bg-white/5 border-white/10 text-white placeholder-gray-400'
            }`}
          />
        </div>
        <Button
          onClick={() => setShowCreateModal(true)}
          className="bg-sotkis-green hover:bg-sotkis-green/90 text-black font-semibold"
        >
          <Plus className="w-4 h-4 mr-2" />
          Novo Tipo de Marco
        </Button>
      </div>

      {/* Mark Types Table */}
      <Card className="bg-white/20 backdrop-blur-lg border-0">
        <CardHeader>
          <CardTitle className="text-white">Tipos de Marco</CardTitle>
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
              {filteredMarkTypes.map((markType) => (
                <TableRow key={markType.id} className="border-white/20 hover:bg-sotkis-green/20 hover:border-sotkis-green/30 transition-colors duration-200">
                  <TableCell className="text-white">
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-sotkis-green" />
                      {markType.descPT}
                    </div>
                  </TableCell>
                  <TableCell className="text-white">{markType.descEN}</TableCell>
                  <TableCell className="text-white">{markType.descES}</TableCell>
                  <TableCell className="text-white">{markType.descFR}</TableCell>
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

      {/* Create Mark Type Modal */}
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
              <h2 className="text-xl sm:text-2xl font-bold text-white">Novo Tipo de Marco</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Left Column - Form Fields */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Descrição PT:</label>
                  <Input
                    value={newMarkType.descPT}
                    onChange={(e) => setNewMarkType({...newMarkType, descPT: e.target.value})}
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Descrição em Português"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Descrição EN:</label>
                  <Input
                    value={newMarkType.descEN}
                    onChange={(e) => setNewMarkType({...newMarkType, descEN: e.target.value})}
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
                    value={newMarkType.descES}
                    onChange={(e) => setNewMarkType({...newMarkType, descES: e.target.value})}
                    className="bg-white text-black placeholder-gray-600"
                    placeholder="Descripción en Español"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Descrição FR:</label>
                  <Input
                    value={newMarkType.descFR}
                    onChange={(e) => setNewMarkType({...newMarkType, descFR: e.target.value})}
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
                onClick={handleCreateMarkType}
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

export default Marcos;