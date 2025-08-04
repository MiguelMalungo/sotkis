import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, FileText, Download, AlertCircle } from 'lucide-react';

const Contentores = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      alert('Por favor, selecione um ficheiro primeiro.');
      return;
    }

    if (!selectedFile.name.toLowerCase().endsWith('.csv')) {
      alert('Por favor, selecione um ficheiro CSV.');
      return;
    }

    setIsUploading(true);
    
    // Simulate file upload
    setTimeout(() => {
      console.log('Uploading containers file:', selectedFile.name);
      setIsUploading(false);
      setSelectedFile(null);
      alert('Ficheiro enviado com sucesso!');
    }, 2000);
  };

  const handleDownloadTemplate = () => {
    // Simulate template download
    console.log('Downloading containers template');
    alert('Download do template iniciado...');
  };

  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
        <div className="text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-white">Upload de Ficheiro - Contentores</h1>
          <p className="text-gray-300 mt-1">Importar ficheiros de contentores para o sistema</p>
        </div>
      </div>

      {/* Main Upload Card */}
      <Card className="bg-white/10 backdrop-blur-lg border-0 shadow-2xl">
        <CardContent className="p-8">
          <div className="max-w-2xl mx-auto space-y-6">
            {/* File Selection Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Upload className="w-6 h-6 text-sotkis-green" />
                <h3 className="text-lg font-semibold text-white">Selecionar ficheiro</h3>
              </div>
              
              <div className="flex items-center space-x-3">
                <Input
                  type="text"
                  value={selectedFile ? selectedFile.name : ''}
                  placeholder="Nenhum ficheiro selecionado"
                  readOnly
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder-gray-400"
                />
                <label className="cursor-pointer">
                  <input
                    type="file"
                    accept=".csv"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  <Button
                    className="text-white bg-black border border-black hover:bg-white/10 hover:border-white/50"
                    style={{
                      backgroundColor: 'black',
                      borderColor: 'black',
                      color: 'white'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'black';
                      e.target.style.borderColor = 'black';
                    }}
                  >
                    Browse
                  </Button>
                </label>
              </div>

              {/* File Format Info */}
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <FileText className="w-4 h-4" />
                <span>Formato do ficheiro: .csv</span>
              </div>

              {/* Download Template Link */}
              <div className="pt-2">
                <button
                  onClick={handleDownloadTemplate}
                  className="text-sotkis-green hover:text-sotkis-green/80 underline flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download do Template</span>
                </button>
              </div>

              {/* File Requirements */}
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
                  <div className="space-y-2">
                    <h4 className="font-medium text-white">Requisitos do ficheiro:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Formato CSV obrigatório</li>
                      <li>• Codificação UTF-8</li>
                      <li>• Separador: vírgula (,)</li>
                      <li>• Tamanho máximo: 10MB</li>
                      <li>• Colunas obrigatórias: ID, Localização, Tipo, Capacidade, Estado</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                onClick={handleSubmit}
                disabled={!selectedFile || isUploading}
                className="w-full bg-sotkis-green hover:bg-sotkis-green/90 text-black font-semibold h-12 text-lg"
              >
                {isUploading ? 'A enviar...' : 'Submeter'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Uploads */}
        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardHeader>
            <CardTitle className="text-white">Uploads Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div>
                  <p className="text-white font-medium">contentores_jan_2025.csv</p>
                  <p className="text-sm text-gray-400">15/01/2025 14:30</p>
                </div>
                <span className="text-green-400 text-sm">✓ Processado</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div>
                  <p className="text-white font-medium">contentores_dez_2024.csv</p>
                  <p className="text-sm text-gray-400">31/12/2024 16:45</p>
                </div>
                <span className="text-green-400 text-sm">✓ Processado</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Upload Statistics */}
        <Card className="bg-white/10 backdrop-blur-lg border-0">
          <CardHeader>
            <CardTitle className="text-white">Estatísticas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Total de uploads</span>
                <span className="text-white font-semibold">18</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Último upload</span>
                <span className="text-white font-semibold">15/01/2025</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Ficheiros processados</span>
                <span className="text-green-400 font-semibold">16</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Ficheiros com erro</span>
                <span className="text-red-400 font-semibold">2</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contentores; 