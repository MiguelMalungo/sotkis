import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, Download } from 'lucide-react';
import SubmenuBar from '../../components/ui/SubmenuBar';

const Importacoes = () => {
  // Track light mode state
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    setIsLightMode(document.body.classList.contains('light-theme'));
    
    const observer = new MutationObserver(() => {
      setIsLightMode(document.body.classList.contains('light-theme'));
    });
    
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  const [selectedFiles, setSelectedFiles] = useState({
    importarFicheiro: null,
    contentores: null,
    ilhas: null,
    utilizadores: null,
    rfids: null
  });

  const handleFileSelect = (type, file) => {
    setSelectedFiles(prev => ({
      ...prev,
      [type]: file
    }));
  };

  const handleSubmit = (type) => {
    console.log(`Submitting ${type}:`, selectedFiles[type]);
    // Here you would implement the actual file upload logic
  };

  const handleDownloadTemplate = (type) => {
    console.log(`Downloading template for ${type}`);
    // Here you would implement the template download logic
  };

  const importTypes = [
    {
      id: 'importarFicheiro',
      title: 'Importar Ficheiro',
      description: 'Upload de ficheiros gerais do sistema'
    },
    {
      id: 'contentores',
      title: 'Contentores',
      description: 'Upload de ficheiro - Contentores'
    },
    {
      id: 'ilhas',
      title: 'Ilhas',
      description: 'Upload de ficheiro - Ilhas'
    },
    {
      id: 'utilizadores',
      title: 'Utilizadores',
      description: 'Upload de ficheiro - Utilizadores'
    },
    {
      id: 'rfids',
      title: 'Rfids',
      description: 'Upload de ficheiro - RFIDs'
    }
  ];

  // Mock per-type info to display underneath each import card
  const recentUploadsByType = {
    importarFicheiro: [
      { name: 'geral_2025_01.csv', dateTime: '15/01/2025 14:30' },
      { name: 'geral_2024_12.csv', dateTime: '31/12/2024 16:45' },
    ],
    contentores: [
      { name: 'contentores_jan_2025.csv', dateTime: '15/01/2025 14:30' },
      { name: 'contentores_dez_2024.csv', dateTime: '31/12/2024 16:45' },
    ],
    ilhas: [
      { name: 'ilhas_jan_2025.csv', dateTime: '14/01/2025 11:10' },
      { name: 'ilhas_dez_2024.csv', dateTime: '28/12/2024 09:22' },
    ],
    utilizadores: [
      { name: 'utilizadores_2025_01.csv', dateTime: '10/01/2025 08:40' },
      { name: 'utilizadores_2024_12.csv', dateTime: '30/12/2024 17:05' },
    ],
    rfids: [
      { name: 'rfids_2025_01.csv', dateTime: '12/01/2025 13:05' },
      { name: 'rfids_2024_12.csv', dateTime: '29/12/2024 15:18' },
    ],
  };

  const statsByType = {
    importarFicheiro: { totalUploads: 8, lastUpload: '15/01/2025', processed: 7, errors: 1 },
    contentores: { totalUploads: 18, lastUpload: '15/01/2025', processed: 16, errors: 2 },
    ilhas: { totalUploads: 9, lastUpload: '14/01/2025', processed: 9, errors: 0 },
    utilizadores: { totalUploads: 6, lastUpload: '10/01/2025', processed: 6, errors: 0 },
    rfids: { totalUploads: 11, lastUpload: '12/01/2025', processed: 10, errors: 1 },
  };

  const [searchTerm, setSearchTerm] = React.useState('');
  const [showCreateModal, setShowCreateModal] = React.useState(false);

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
        <h1 className="text-xl font-bold text-white">Importações</h1>
        <p className="text-gray-300 mt-1">Gestão de importações do sistema</p>
      </div>

      {/* SubmenuBar */}
      <SubmenuBar items={submenuLinks} />

      {/* Import Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {importTypes.map((importType) => {
          const recent = recentUploadsByType[importType.id] || [];
          const stats = statsByType[importType.id] || { totalUploads: 0, lastUpload: '-', processed: 0, errors: 0 };

          return (
            <div key={importType.id} className="space-y-6">
              <Card className="bg-white/20 backdrop-blur-lg border-0 shadow-2xl rounded-xl">
                <CardHeader className="pb-4">
                  <CardTitle className="text-black text-lg font-semibold">
                    {importType.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* File Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Selecionar ficheiro</label>
                    <div className="flex space-x-2">
                      <Input
                        type="text"
                        placeholder="Nenhum ficheiro selecionado"
                        value={selectedFiles[importType.id]?.name || ''}
                        readOnly
                        className="flex-1 bg-white text-black placeholder-gray-600"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        className="!bg-black !text-white hover:!bg-gray-800 !border-gray-600 importacoes-browse-btn"
                        onClick={() => {
                          const input = document.createElement('input');
                          input.type = 'file';
                          input.accept = '.csv';
                          input.onchange = (e) => {
                            const file = e.target.files[0];
                            if (file) {
                              handleFileSelect(importType.id, file);
                            }
                          };
                          input.click();
                        }}
                      >
                        Browse
                      </Button>
                    </div>
                    <p className="text-xs text-gray-300">Formato do ficheiro: .csv</p>
                  </div>

                  {/* Template Download */}
                  <div className="flex justify-center">
                    <Button
                      variant="link"
                      className={`group p-0 h-auto importacoes-download-btn ${
                        isLightMode 
                          ? '!text-black hover:!text-sotkis-green' 
                          : '!text-white hover:!text-white'
                      }`}
                      onClick={() => handleDownloadTemplate(importType.id)}
                    >
                      <Download className={`h-4 w-4 mr-2 ${
                        isLightMode 
                          ? '!text-black group-hover:!text-sotkis-green' 
                          : '!text-white group-hover:!text-white'
                      }`} />
                      Download do Template
                    </Button>
                  </div>

                  {/* Submit Button */}
                  <Button
                    className="w-full bg-sotkis-green hover:bg-sotkis-green/90 text-white"
                    onClick={() => handleSubmit(importType.id)}
                    disabled={!selectedFiles[importType.id]}
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Submeter
                  </Button>
                </CardContent>
              </Card>

              {/* Per-type info cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Uploads */}
                <Card className="bg-white/20 backdrop-blur-lg border-0">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Uploads Recentes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recent.map((f, idx) => (
                      <div key={idx} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 flex items-center justify-between gap-3 overflow-hidden">
                        <div className="min-w-0">
                          <div className="text-white font-semibold truncate max-w-[60ch]">{f.name}</div>
                          <div className="text-gray-300 text-sm mt-1">{f.dateTime}</div>
                        </div>
                        <div className="shrink-0" aria-label="Processado">
                          <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-400"></span>
                        </div>
                      </div>
                    ))}
                    {recent.length === 0 && (
                      <div className="text-gray-300">Sem uploads recentes.</div>
                    )}
                  </CardContent>
                </Card>

                {/* Stats */}
                <Card className="bg-white/20 backdrop-blur-lg border-0">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Estatísticas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-lg">Total de uploads</span>
                      <span className="text-2xl font-bold">{stats.totalUploads}</span>
                    </div>
                    <div className="flex items-center justify-between text-white">
                      <span className="text-lg">Último upload</span>
                      <span className="text-base font-semibold text-yellow-300">{stats.lastUpload}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white text-lg">Ficheiros processados</span>
                      <span className="text-2xl font-bold text-green-400">{stats.processed}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white text-lg">Ficheiros com erro</span>
                      <span className="text-2xl font-bold text-red-400">{stats.errors}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Importacoes;