import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, Download } from 'lucide-react';

const Importacoes = () => {
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

  return (
    <div className="p-6 space-y-6 administracao-page">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-xl font-bold text-white">Importações</h1>
        <p className="text-gray-300 mt-1">Gestão de importações de ficheiros do sistema</p>
      </div>

      {/* Import Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {importTypes.map((importType) => (
          <Card key={importType.id} className="bg-black/50 backdrop-blur-lg border-0 shadow-2xl rounded-xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-sotkis-green text-lg font-semibold">
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
                    className="bg-black text-white hover:bg-gray-800 border-gray-600"
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
                  className="text-sotkis-green hover:text-sotkis-green/80 p-0 h-auto"
                  onClick={() => handleDownloadTemplate(importType.id)}
                >
                  <Download className="h-4 w-4 mr-2" />
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
        ))}
      </div>
    </div>
  );
};

export default Importacoes; 