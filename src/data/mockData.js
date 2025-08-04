// Mock data for Sotkis Dashboard

// KPI Summary Data
export const kpiData = {
  totalDeposits: {
    value: 1247,
    change: "+12.5%",
    trend: "up",
    period: "vs last month"
  },
  fillLevel: {
    value: "78.3%",
    change: "+5.2%",
    trend: "up",
    period: "vs last month"
  },
  maintenanceAlerts: {
    value: 23,
    change: "-8.1%",
    trend: "down",
    period: "vs last month"
  },
  rewardsIssued: {
    value: 456,
    change: "+15.7%",
    trend: "up",
    period: "vs last month"
  },
  activeRoutes: {
    value: 18,
    change: "+2",
    trend: "up",
    period: "vs last month"
  }
};

// Chart Data for Deposits Over Time
export const depositsChartData = [
  { date: "2025-01-01", deposits: 45, fillLevel: 72 },
  { date: "2025-01-02", deposits: 52, fillLevel: 68 },
  { date: "2025-01-03", deposits: 38, fillLevel: 75 },
  { date: "2025-01-04", deposits: 61, fillLevel: 81 },
  { date: "2025-01-05", deposits: 49, fillLevel: 76 },
  { date: "2025-01-06", deposits: 67, fillLevel: 84 },
  { date: "2025-01-07", deposits: 58, fillLevel: 79 },
  { date: "2025-01-08", deposits: 73, fillLevel: 87 },
  { date: "2025-01-09", deposits: 44, fillLevel: 71 },
  { date: "2025-01-10", deposits: 56, fillLevel: 78 },
  { date: "2025-01-11", deposits: 62, fillLevel: 82 },
  { date: "2025-01-12", deposits: 48, fillLevel: 74 },
  { date: "2025-01-13", deposits: 55, fillLevel: 77 },
  { date: "2025-01-14", deposits: 69, fillLevel: 85 }
];

// Performance Comparison Data
export const performanceData = {
  currentYear: {
    deposits: 1247,
    fillLevel: 78.3,
    maintenance: 23,
    rewards: 456,
    routes: 18
  },
  previousYear: {
    deposits: 1108,
    fillLevel: 73.1,
    maintenance: 31,
    rewards: 394,
    routes: 16
  }
};

// Monthly Performance Data
export const monthlyPerformanceData = [
  { month: "Jan", current: 1247, previous: 1108 },
  { month: "Feb", current: 1189, previous: 1056 },
  { month: "Mar", current: 1324, previous: 1198 },
  { month: "Apr", current: 1287, previous: 1123 },
  { month: "May", current: 1412, previous: 1256 },
  { month: "Jun", current: 1356, previous: 1189 },
  { month: "Jul", current: 1498, previous: 1324 },
  { month: "Aug", current: 1432, previous: 1287 },
  { month: "Sep", current: 1567, previous: 1412 },
  { month: "Oct", current: 1489, previous: 1356 },
  { month: "Nov", current: 1623, previous: 1498 },
  { month: "Dec", current: 1547, previous: 1432 }
];

// Container Data Table
export const containerData = [
  {
    id: "CTR-001",
    zone: "Centro",
    user: "João Silva",
    lastDeposit: "2025-01-14 14:30",
    fillLevel: "85%",
    status: "active"
  },
  {
    id: "CTR-002",
    zone: "Norte",
    user: "Maria Santos",
    lastDeposit: "2025-01-14 13:45",
    fillLevel: "72%",
    status: "active"
  },
  {
    id: "CTR-003",
    zone: "Sul",
    user: "Pedro Costa",
    lastDeposit: "2025-01-14 15:20",
    fillLevel: "91%",
    status: "maintenance"
  },
  {
    id: "CTR-004",
    zone: "Este",
    user: "Ana Oliveira",
    lastDeposit: "2025-01-14 12:15",
    fillLevel: "68%",
    status: "active"
  },
  {
    id: "CTR-005",
    zone: "Oeste",
    user: "Carlos Ferreira",
    lastDeposit: "2025-01-14 16:00",
    fillLevel: "79%",
    status: "active"
  },
  {
    id: "CTR-006",
    zone: "Centro",
    user: "Sofia Martins",
    lastDeposit: "2025-01-14 11:30",
    fillLevel: "94%",
    status: "full"
  },
  {
    id: "CTR-007",
    zone: "Norte",
    user: "Miguel Rodrigues",
    lastDeposit: "2025-01-14 17:15",
    fillLevel: "76%",
    status: "active"
  },
  {
    id: "CTR-008",
    zone: "Sul",
    user: "Inês Pereira",
    lastDeposit: "2025-01-14 10:45",
    fillLevel: "83%",
    status: "active"
  }
];

// Route Performance Data
export const routeData = [
  {
    id: "RTE-001",
    name: "Rota Centro Principal",
    containers: 12,
    efficiency: "94.2%",
    avgTime: "2h 15m",
    status: "active"
  },
  {
    id: "RTE-002",
    name: "Rota Norte Urbano",
    containers: 8,
    efficiency: "87.5%",
    avgTime: "1h 45m",
    status: "active"
  },
  {
    id: "RTE-003",
    name: "Rota Sul Industrial",
    containers: 15,
    efficiency: "91.8%",
    avgTime: "3h 20m",
    status: "active"
  },
  {
    id: "RTE-004",
    name: "Rota Este Residencial",
    containers: 10,
    efficiency: "89.3%",
    avgTime: "2h 05m",
    status: "maintenance"
  },
  {
    id: "RTE-005",
    name: "Rota Oeste Comercial",
    containers: 6,
    efficiency: "96.1%",
    avgTime: "1h 30m",
    status: "active"
  }
];

// Maintenance Alerts Data
export const maintenanceData = [
  {
    id: "ALT-001",
    container: "CTR-003",
    type: "Fill Level Critical",
    priority: "high",
    status: "pending",
    reported: "2025-01-14 15:20"
  },
  {
    id: "ALT-002",
    container: "CTR-006",
    type: "Sensor Malfunction",
    priority: "medium",
    status: "in-progress",
    reported: "2025-01-14 11:30"
  },
  {
    id: "ALT-003",
    container: "CTR-004",
    type: "Communication Error",
    priority: "low",
    status: "resolved",
    reported: "2025-01-14 12:15"
  },
  {
    id: "ALT-004",
    container: "CTR-007",
    type: "Battery Low",
    priority: "medium",
    status: "pending",
    reported: "2025-01-14 17:15"
  }
];

// Rewards Data
export const rewardsData = [
  {
    id: "RWD-001",
    user: "João Silva",
    type: "Eco Points",
    points: 150,
    date: "2025-01-14",
    status: "issued"
  },
  {
    id: "RWD-002",
    user: "Maria Santos",
    type: "Green Badge",
    points: 200,
    date: "2025-01-14",
    status: "issued"
  },
  {
    id: "RWD-003",
    user: "Pedro Costa",
    type: "Eco Points",
    points: 75,
    date: "2025-01-14",
    status: "pending"
  },
  {
    id: "RWD-004",
    user: "Ana Oliveira",
    type: "Sustainability Award",
    points: 300,
    date: "2025-01-13",
    status: "issued"
  },
  {
    id: "RWD-005",
    user: "Carlos Ferreira",
    type: "Eco Points",
    points: 120,
    date: "2025-01-13",
    status: "issued"
  }
];

// Department Filter Options
export const departments = [
  { value: "all", label: "Todos os Departamentos" },
  { value: "centro", label: "Centro" },
  { value: "norte", label: "Norte" },
  { value: "sul", label: "Sul" },
  { value: "este", label: "Este" },
  { value: "oeste", label: "Oeste" }
];

// Time Filter Presets
export const timePresets = [
  { value: "today", label: "Hoje" },
  { value: "week", label: "Esta Semana" },
  { value: "month", label: "Este Mês" },
  { value: "quarter", label: "Este Trimestre" },
  { value: "year", label: "Este Ano" }
];

// GESTÃO DE ROTAS Data
export const kilometersData = [
  { route: 'OX-55-DDDD', km: 135 },
  { route: 'XCR-000054', km: 95 },
  { route: 'DRF-013254', km: 100 },
  { route: 'XXCR-00214', km: 90 },
  { route: 'CDRR-22222', km: 80 }
];

export const planExecutedData = [
  { month: 'Aug 2024', value: 180 },
  { month: 'Sep 2024', value: 260 },
  { month: 'Oct 2024', value: 330 },
  { month: 'Nov 2024', value: 180 },
  { month: 'Dez 2024', value: 420 },
  { month: 'Jan 2025', value: 30 }
];

export const containersCollectedData = [
  { month: 'Apr 24', containers: 32 },
  { month: 'May 24', containers: 59 },
  { month: 'Jun 24', containers: 69 },
  { month: 'Jul 24', containers: 99 },
  { month: 'Aug 24', containers: 80 },
  { month: 'Sep 24', containers: 65 },
  { month: 'Oct 24', containers: 73 },
  { month: 'Nov 24', containers: 40 },
  { month: 'Dec 24', containers: 37 },
  { month: 'Jan 25', containers: 45 }
];

export const routeTimePresets = ['Ontem', 'Hoje', '1 semana', '1 mês', '3 meses', '6 meses', '1 ano', 'Início do ano até hoje'];

// Zone Performance Data for Charts
export const zonePerformanceData = [
  { zone: "Centro", deposits: 324, fillLevel: 82.5, efficiency: 94.2 },
  { zone: "Norte", deposits: 287, fillLevel: 78.3, efficiency: 87.5 },
  { zone: "Sul", deposits: 298, fillLevel: 85.1, efficiency: 91.8 },
  { zone: "Este", deposits: 156, fillLevel: 71.2, efficiency: 89.3 },
  { zone: "Oeste", deposits: 182, fillLevel: 76.8, efficiency: 96.1 }
];

// Weekly Trend Data
export const weeklyTrendData = [
  { week: "Semana 1", deposits: 245, fillLevel: 75.2 },
  { week: "Semana 2", deposits: 267, fillLevel: 78.1 },
  { week: "Semana 3", deposits: 289, fillLevel: 81.3 },
  { week: "Semana 4", deposits: 312, fillLevel: 83.7 },
  { week: "Semana 5", deposits: 298, fillLevel: 80.9 },
  { week: "Semana 6", deposits: 324, fillLevel: 84.2 }
];

// User Activity Data
export const userActivityData = [
  { user: "João Silva", deposits: 45, lastActivity: "2025-01-14 14:30", status: "active" },
  { user: "Maria Santos", deposits: 38, lastActivity: "2025-01-14 13:45", status: "active" },
  { user: "Pedro Costa", deposits: 52, lastActivity: "2025-01-14 15:20", status: "active" },
  { user: "Ana Oliveira", deposits: 29, lastActivity: "2025-01-14 12:15", status: "inactive" },
  { user: "Carlos Ferreira", deposits: 41, lastActivity: "2025-01-14 16:00", status: "active" },
  { user: "Sofia Martins", deposits: 33, lastActivity: "2025-01-14 11:30", status: "active" },
  { user: "Miguel Rodrigues", deposits: 47, lastActivity: "2025-01-14 17:15", status: "active" },
  { user: "Inês Pereira", deposits: 36, lastActivity: "2025-01-14 10:45", status: "active" }
]; 