import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { MapPin, Package, Search, ArrowUpDown, Filter, Plus, Edit, Trash2, Map, Satellite, Maximize2, Layers } from 'lucide-react';
import SubmenuBar from '../components/ui/SubmenuBar';

const SotkisLevelLocationsContainers = () => {
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
  }, []);  const [recordsPerPage, setRecordsPerPage] = useState('10');
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsLightMode(document.body.classList.contains('light-theme'));
    };
    
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);  const [selectedType, setSelectedType] = useState('');
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsLightMode(document.body.classList.contains('light-theme'));
    };
    
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsLightMode(document.body.classList.contains('light-theme'));
    };
    
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);  const [mapView, setMapView] = useState('map'); // 'map' or 'satellite'
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsLightMode(document.body.classList.contains('light-theme'));
    };
    
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);  const [showMap, setShowMap] = useState(false);
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
  // Mock departments data
  const departments = [
    { id: 'dept1', name: 'Tagus Park Oeiras-Portugal', code: 'Tagus Park Oeiras-PT 999990001' },
    { id: 'dept2', name: 'Centro Colombo Lisboa-Portugal', code: 'Lisboa-PT 999990006' },
    { id: 'dept3', name: 'Mercado Bolhão Porto-Portugal', code: 'Porto-PT 999990008' },
    { id: 'dept4', name: 'Universidade Coimbra-Portugal', code: 'Coimbra-PT 999990010' }
  ];

  // Mock locations and containers data filtered by department
  const mockData = [
    {
      id: 'L-001',
      name: 'Centro Comercial Colombo',
      type: 'Localização',
      address: 'Av. Lusíada, 1500-392 Lisboa',
      containers: 8,
      status: 'Ativo',
      lastUpdate: '2024-01-15 14:30:00',
      department: 'Lisboa-PT 999990006',
      coordinates: { lat: 38.7223, lng: -9.1393 }
    },
    {
      id: 'C-001',
      name: 'Contentor Orgânico COL-001',
      type: 'Contentor',
      address: 'Centro Comercial Colombo',
      capacity: '240L',
      status: 'Operacional',
      lastUpdate: '2024-01-15 14:25:00',
      department: 'Lisboa-PT 999990006',
      coordinates: { lat: 38.7223, lng: -9.1393 }
    },
    {
      id: 'L-002',
      name: 'Mercado do Bolhão',
      type: 'Localização',
      address: 'R. Formosa, 4000-214 Porto',
      containers: 12,
      status: 'Ativo',
      lastUpdate: '2024-01-15 13:45:00',
      department: 'Porto-PT 999990008',
      coordinates: { lat: 41.1579, lng: -8.6291 }
    },
    {
      id: 'C-002',
      name: 'Contentor Reciclável POR-001',
      type: 'Contentor',
      address: 'Mercado do Bolhão',
      capacity: '360L',
      status: 'Operacional',
      lastUpdate: '2024-01-15 13:40:00',
      department: 'Porto-PT 999990008',
      coordinates: { lat: 41.1579, lng: -8.6291 }
    },
    {
      id: 'L-003',
      name: 'Universidade de Coimbra',
      type: 'Localização',
      address: 'R. da Universidade, 3000-455 Coimbra',
      containers: 15,
      status: 'Ativo',
      lastUpdate: '2024-01-15 12:15:00',
      department: 'Coimbra-PT 999990010',
      coordinates: { lat: 40.2033, lng: -8.4103 }
    },
    {
      id: 'C-003',
      name: 'Contentor Indiferenciado COI-001',
      type: 'Contentor',
      address: 'Universidade de Coimbra',
      capacity: '120L',
      status: 'Manutenção',
      lastUpdate: '2024-01-15 12:10:00',
      department: 'Coimbra-PT 999990010',
      coordinates: { lat: 40.2033, lng: -8.4103 }
    },
    // Tagus Park data
    {
      id: 'L-004',
      name: 'Taguspark Edifício Millennium BCP 9',
      type: 'Localização',
      address: 'Tagus Park, 2740-120 Porto Salvo',
      containers: 6,
      status: 'Ativo',
      lastUpdate: '2024-01-15 16:20:00',
      department: 'Tagus Park Oeiras-PT 999990001',
      coordinates: { lat: 38.7234, lng: -9.3034 }
    },
    {
      id: 'C-004',
      name: 'Contentor Orgânico TAG-001',
      type: 'Contentor',
      address: 'Taguspark Edifício Millennium BCP 9',
      capacity: '240L',
      status: 'Operacional',
      lastUpdate: '2024-01-15 16:15:00',
      department: 'Tagus Park Oeiras-PT 999990001',
      coordinates: { lat: 38.7234, lng: -9.3034 }
    },
    {
      id: 'L-005',
      name: 'ISQ Formação',
      type: 'Localização',
      address: 'Tagus Park, 2740-120 Porto Salvo',
      containers: 4,
      status: 'Ativo',
      lastUpdate: '2024-01-15 15:45:00',
      department: 'Tagus Park Oeiras-PT 999990001',
      coordinates: { lat: 38.7245, lng: -9.3021 }
    }
  ];

  // Filter data by selected department
  const filteredData = selectedDepartment 
    ? mockData.filter(item => item.department === selectedDepartment)
    : mockData;

  const getTypeColor = (type) => {
    switch (type) {
      case 'Localização':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Contentor':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Ativo':
      case 'Operacional':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Manutenção':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Inativo':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  const handleDepartmentChange = (deptId) => {
    setSelectedDepartment(deptId);
    setShowMap(true);
  };

  // Calculate statistics for selected department
  const getDepartmentStats = () => {
    if (!selectedDepartment) return { locations: 0, containers: 0, active: 0, maintenance: 0 };
    
    const deptData = mockData.filter(item => item.department === selectedDepartment);
    const locations = deptData.filter(item => item.type === 'Localização').length;
    const containers = deptData.filter(item => item.type === 'Contentor').length;
    const active = deptData.filter(item => ['Ativo', 'Operacional'].includes(item.status)).length;
    const maintenance = deptData.filter(item => item.status === 'Manutenção').length;
    
    return { locations, containers, active, maintenance };
  };

  const stats = getDepartmentStats();

  const submenuLinks = [
    { label: 'Alertas', to: '/sotkis-level/alerts' },
    { label: 'Recolhas', to: '/sotkis-level/pickups' },
    { label: 'Localizações e Contentores', to: '/sotkis-level/locations-containers' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header - AT THE VERY TOP */}
      <div className="page-header text-right">
        <h1 className="text-xl font-bold text-white">Localizações e Contentores</h1>
        <p className="text-gray-300 mt-1">Gestão de localizações e contentores do Sotkis Level</p>
      </div>

      {/* SubmenuBar */}
      <SubmenuBar items={submenuLinks} />

      {/* Department Selection */}
      <Card className="bg-white/20 backdrop-blur-lg border-0">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Departamento</h3>
            </div>
            
            <Select value={selectedDepartment} onValueChange={handleDepartmentChange}>
              <SelectTrigger className={`w-full sm:w-96 ${
                isLightMode 
                  ? 'bg-sotkis-green/20 border-sotkis-green/40 text-gray-900' 
                  : 'bg-white text-black'
              }`}>
                <SelectValue placeholder="Selecione um departamento para ver o mapa" />
              </SelectTrigger>
              <SelectContent>
                {departments.map((dept) => (
                  <SelectItem key={dept.id} value={dept.code}>
                    {dept.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Map Section - Only show when department is selected */}
      {showMap && selectedDepartment && (
        <Card className="bg-white/20 backdrop-blur-lg border-0">
          <CardContent className="p-0">
            <div className="relative">
              {/* Map Header */}
              <div className="flex justify-between items-center p-4 border-b border-white/10">
                <div className="flex items-center space-x-4">
                  <h3 className="text-lg font-semibold text-white">Locais</h3>
                  
                  {/* Map Type Tabs */}
                  <div className="flex bg-white/10 rounded-lg p-1">
                    <button
                      onClick={() => setMapView('map')}
                      className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                        mapView === 'map' 
                          ? 'bg-sotkis-green text-black' 
                          : 'text-white hover:bg-white/20'
                      }`}
                    >
                      <Map className="h-4 w-4 inline mr-1" />
                      Mapa
                    </button>
                    <button
                      onClick={() => setMapView('satellite')}
                      className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                        mapView === 'satellite' 
                          ? 'bg-sotkis-green text-black' 
                          : 'text-white hover:bg-white/20'
                      }`}
                    >
                      <Satellite className="h-4 w-4 inline mr-1" />
                      Satélite
                    </button>
                  </div>
                </div>
                
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <Maximize2 className="h-4 w-4" />
                </Button>
              </div>

              {/* Map Container */}
              <div className="h-96 bg-gradient-to-br from-blue-900/20 to-green-900/20 relative overflow-hidden">
                {/* Mock Map Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white/60">
                    <MapPin className="h-16 w-16 mx-auto mb-4 text-sotkis-green" />
                    <h4 className="text-lg font-semibold mb-2">Mapa Interativo</h4>
                    <p className="text-sm">
                      {departments.find(d => d.code === selectedDepartment)?.name}
                    </p>
                    <p className="text-xs mt-1">
                      {filteredData.filter(item => item.type === 'Localização').length} localizações • 
                      {filteredData.filter(item => item.type === 'Contentor').length} contentores
                    </p>
                  </div>
                </div>
                
                {/* Mock Map Markers */}
                {filteredData.filter(item => item.type === 'Localização').map((location, index) => (
                  <div
                    key={location.id}
                    className="absolute w-3 h-3 bg-sotkis-green rounded-full border-2 border-white shadow-lg animate-pulse"
                    style={{
                      left: `${20 + (index * 15)}%`,
                      top: `${30 + (index * 10)}%`
                    }}
                    title={location.name}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Department Statistics - Only show when department is selected */}
      {selectedDepartment && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-white/20 backdrop-blur-lg border-0">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Localizações</p>
                  <p className="text-2xl font-bold text-white">{stats.locations}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/20 backdrop-blur-lg border-0">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Package className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Contentores</p>
                  <p className="text-2xl font-bold text-white">{stats.containers}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/20 backdrop-blur-lg border-0">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Ativos</p>
                  <p className="text-2xl font-bold text-white">{stats.active}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/20 backdrop-blur-lg border-0">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Manutenção</p>
                  <p className="text-2xl font-bold text-white">{stats.maintenance}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Filters and Controls */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-white">Tipo:</span>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className={`w-40 ${
                isLightMode 
                  ? 'bg-sotkis-green/20 border-sotkis-green/40 text-gray-900' 
                  : 'bg-white text-black'
              }`}>
                <SelectValue placeholder="Todos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Todos</SelectItem>
                <SelectItem value="localizacao">Localizações</SelectItem>
                <SelectItem value="contentor">Contentores</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-white">Mostrar:</span>
            <Select value={recordsPerPage} onValueChange={setRecordsPerPage}>
              <SelectTrigger className={`w-20 ${
                isLightMode 
                  ? 'bg-sotkis-green/20 border-sotkis-green/40 text-gray-900' 
                  : 'bg-white text-black'
              }`}>
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
        </div>
        
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <span className="text-sm text-white">Procurar:</span>
          <Input
            placeholder="Pesquisar locais ou contentores..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-64 bg-white text-black placeholder-gray-600"
          />
          <Button onClick={handleSearch} className="bg-sotkis-green text-black hover:bg-sotkis-green/90">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Data Table */}
      <Card className="bg-white/20 backdrop-blur-lg border-0">
        <CardHeader>
          <CardTitle className="text-white">
            {selectedDepartment ? `Dados do Departamento: ${departments.find(d => d.code === selectedDepartment)?.name}` : 'Todos os Dados'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table className="locations-containers-table">
            <TableHeader>
              <TableRow>
                <TableHead className="text-white">ID</TableHead>
                <TableHead className="text-white">Nome</TableHead>
                <TableHead className="text-white">Tipo</TableHead>
                <TableHead className="text-white">Endereço</TableHead>
                <TableHead className="text-white">Status</TableHead>
                <TableHead className="text-white">Última Atualização</TableHead>
                <TableHead className="text-white">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((item) => (
                <TableRow key={item.id} className="border-white/20 hover:bg-sotkis-green/20 hover:border-sotkis-green/30 transition-colors duration-200">
                  <TableCell className="text-white font-mono">{item.id}</TableCell>
                  <TableCell className="text-white">{item.name}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs border ${getTypeColor(item.type)}`}>
                      {item.type}
                    </span>
                  </TableCell>
                  <TableCell className="text-white">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-sotkis-green" />
                      <span>{item.address}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-white text-sm">{item.lastUpdate}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2 justify-center">
                      <Button size="sm" variant="ghost" className="text-blue-400 hover:bg-blue-400/20">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-red-400 hover:bg-red-400/20">
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
    </div>
  );
};

export default SotkisLevelLocationsContainers;