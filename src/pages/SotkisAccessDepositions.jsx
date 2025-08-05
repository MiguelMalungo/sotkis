import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Calendar } from 'lucide-react';

const SotkisAccessDepositions = () => {
  const [formData, setFormData] = React.useState({
    inicioPeriodo: '2025-07-15',
    fimPeriodo: '2025-07-30',
    departamento: '',
    ilha: '',
    contentor: '',
    utilizador: '',
    rfids: '',
    tipoResiduo: 'Todos'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting form data:', formData);
    // Handle form submission logic here
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="page-header text-left">
        <h1 className="text-xl font-bold text-white">Visualizar Deposições</h1>
        <p className="text-gray-300 mt-1">Consulta e filtragem de deposições</p>
      </div>

      {/* Form */}
      <Card className="card-glass">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Inicio do periodo:</label>
                                  <Input
                  type="date"
                  value={formData.inicioPeriodo}
                  onChange={(e) => handleInputChange('inicioPeriodo', e.target.value)}
                  className="bg-white/5 border-white/10 text-white"
                />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Fim do periodo:</label>
                                  <Input
                  type="date"
                  value={formData.fimPeriodo}
                  onChange={(e) => handleInputChange('fimPeriodo', e.target.value)}
                  className="bg-white/5 border-white/10 text-white"
                />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Departamento:</label>
                  <Select value={formData.departamento} onValueChange={(value) => handleInputChange('departamento', value)}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder="Escolha um departamento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="faro">Faro</SelectItem>
                      <SelectItem value="lisboa">Lisboa</SelectItem>
                      <SelectItem value="porto">Porto</SelectItem>
                      <SelectItem value="coimbra">Coimbra</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Ilha:</label>
                  <Select value={formData.ilha} onValueChange={(value) => handleInputChange('ilha', value)}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder="Selecione uma ilha" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ilha1">Ilha 1 - Centro da Cidade</SelectItem>
                      <SelectItem value="ilha2">Ilha 2 - Jardim Municipal</SelectItem>
                      <SelectItem value="ilha3">Ilha 3 - Parque Industrial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Contentor:</label>
                  <Select value={formData.contentor} onValueChange={(value) => handleInputChange('contentor', value)}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder="Selecione um contentor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="contentor1">Contentor 001 - Plástico</SelectItem>
                      <SelectItem value="contentor2">Contentor 002 - Papel</SelectItem>
                      <SelectItem value="contentor3">Contentor 003 - Vidro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Utilizador:</label>
                  <Select value={formData.utilizador} onValueChange={(value) => handleInputChange('utilizador', value)}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder="Selecione um utilizador" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="user1">João Silva</SelectItem>
                      <SelectItem value="user2">Maria Santos</SelectItem>
                      <SelectItem value="user3">Pedro Costa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Rfids:</label>
                  <Select value={formData.rfids} onValueChange={(value) => handleInputChange('rfids', value)}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder="Selecione um RFID" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rfid1">RFID-001</SelectItem>
                      <SelectItem value="rfid2">RFID-002</SelectItem>
                      <SelectItem value="rfid3">RFID-003</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Tipo de resíduo:</label>
                  <Select value={formData.tipoResiduo} onValueChange={(value) => handleInputChange('tipoResiduo', value)}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Todos">Todos</SelectItem>
                      <SelectItem value="Plastico">Plástico</SelectItem>
                      <SelectItem value="Papel">Papel</SelectItem>
                      <SelectItem value="Vidro">Vidro</SelectItem>
                      <SelectItem value="Metal">Metal</SelectItem>
                      <SelectItem value="Organico">Orgânico</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <Button 
                type="submit" 
                className="bg-sotkis-green text-black hover:bg-sotkis-green/90 px-8 py-2"
              >
                Visualizar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SotkisAccessDepositions; 