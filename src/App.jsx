import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Layout from './components/layout/Layout';
import Login from './pages/Login';
import OperacaoDashboard from './pages/dashboard/OperacaoDashboard';
import DeposicoesDashboard from './pages/dashboard/DeposicoesDashboard';
import NivelEnchimentoDashboard from './pages/dashboard/NivelEnchimentoDashboard';
import GestaoManutencoesDashboard from './pages/dashboard/GestaoManutencoesDashboard';
import RecompensasDashboard from './pages/dashboard/RecompensasDashboard';
import GestaoRotasDashboard from './pages/dashboard/GestaoRotasDashboard';
import PerformanceDashboard from './pages/dashboard/PerformanceDashboard';
import Utilizadores from './pages/Utilizadores';

import Importacoes from './pages/administracao/Importacoes';
import Contentores from './pages/administracao/Contentores';
import Ilhas from './pages/administracao/Ilhas';
import Paises from './pages/administracao/Paises';
import Rfids from './pages/administracao/Rfids';
import Administracao from './pages/administracao/Administracao';
import EstadosFaturacao from './pages/administracao/EstadosFaturacao';
import Transponders from './pages/administracao/Transponders';
import Acabamentos from './pages/administracao/Acabamentos';
import TiposContentor from './pages/administracao/TiposContentor';
import ControlosAcesso from './pages/administracao/ControlosAcesso';
import Residuos from './pages/administracao/Residuos';
import Playt from './pages/Playt';
import PlaytContracts from './pages/PlaytContracts';
import PlaytInvoices from './pages/PlaytInvoices';
import PlaytPricing from './pages/PlaytPricing';
import PlaytPoints from './pages/PlaytPoints';
import Kits from './pages/administracao/Kits';
import VolumesKit from './pages/administracao/VolumesKit';
import Marcos from './pages/administracao/Marcos';
import Intervencoes from './pages/administracao/Intervencoes';
import PlataformasSeguranca from './pages/administracao/PlataformasSeguranca';
import SensoresEnchimento from './pages/administracao/SensoresEnchimento';
import UtilizadoresFinais from './pages/administracao/UtilizadoresFinais';
import EstadosChavesRfid from './pages/administracao/EstadosChavesRfid';
import MySotkonIlhas from './pages/MySotkonIlhas';
import MySotkonContentores from './pages/MySotkonContentores';
import MySotkonDepartamentos from './pages/MySotkonDepartamentos';
import MySotkonManuais from './pages/MySotkonManuais';

import SotkisAccessDepositions from './pages/SotkisAccessDepositions';
import SotkisAccessRfids from './pages/SotkisAccessRfids';
import SotkisAccessReports from './pages/SotkisAccessReports';
import SotkisAccessBatteries from './pages/SotkisAccessBatteries';
import SotkisRoutes from './pages/SotkisRoutes';
import SotkisLevelCustomers from './pages/SotkisLevelCustomers';
import SotkisLevelCollections from './pages/SotkisLevelCollections';
import ComplianceSuppliers from './pages/ComplianceSuppliers';
import ComplianceClients from './pages/ComplianceClients';
import ComplianceDashboard from './pages/ComplianceDashboard';
import SotcareIntervencoesPreventivas from './pages/SotcareIntervencoesPreventivas';
import SotcareIntervencoesCorretivas from './pages/SotcareIntervencoesCorretivas';
import SotcareGestaoProblemas from './pages/SotcareGestaoProblemas';
import StyleGuide from './pages/StyleGuide';

// Landing page when no menu is selected
const LandingPage = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-right sm:text-center text-white">
      <h1 className="welcome-title-mobile font-bold mb-4">Bem-vindo ao Sotkis</h1>
      <p className="text-xl text-gray-300">
        Selecione uma opção no menu lateral para começar
      </p>
    </div>
  </div>
);

// Placeholder components for other pages
const PlaceholderPage = ({ title, description }) => (
  <div className="p-6 space-y-6">
    <div className="text-right sm:text-left">
      <h1 className="text-xl sm:text-lg font-bold text-white">{title}</h1>
      <p className="text-gray-300 mt-1">{description}</p>
    </div>
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center text-gray-400">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-sotkis-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Em desenvolvimento</h3>
        <p>Esta página está em desenvolvimento e será implementada em breve.</p>
      </div>
    </div>
  </div>
);

const App = () => {
  const { isAuthenticated } = useAuth();
  
  console.log('App component - isAuthenticated:', isAuthenticated);

  if (!isAuthenticated) {
    console.log('Rendering Login component');
    return <Login />;
  }

  return (
    <Layout>
      <Routes>
        {/* Landing page when no menu is selected */}
        <Route path="/" element={<LandingPage />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<Navigate to="/dashboard/operacao" replace />} />
        <Route path="/dashboard/operacao" element={<OperacaoDashboard />} />
        <Route path="/dashboard/deposicoes" element={<DeposicoesDashboard />} />
        <Route path="/dashboard/nivel-enchimento" element={<NivelEnchimentoDashboard />} />
        <Route path="/dashboard/gestao-manutencoes" element={<GestaoManutencoesDashboard />} />
        <Route path="/dashboard/recompensas" element={<RecompensasDashboard />} />
        <Route path="/dashboard/gestao-rotas" element={<GestaoRotasDashboard />} />
        <Route path="/dashboard/performance" element={<PerformanceDashboard />} />

        {/* Main Module Routes */}
        <Route path="/utilizadores" element={<Utilizadores />} />

        {/* Administration Routes */}
        <Route path="/administracao" element={<Navigate to="/administracao/importacoes" replace />} />
        <Route path="/administracao/importacoes" element={<Importacoes />} />
        <Route path="/administracao/contentores" element={<Contentores />} />
        <Route path="/administracao/ilhas" element={<Ilhas />} />
        <Route path="/administracao/utilizadores" element={<Administracao />} />
        <Route path="/administracao/rfids" element={<Rfids />} />
        <Route path="/administracao/estados-faturacao" element={<EstadosFaturacao />} />
        <Route path="/administracao/paises" element={<Paises />} />
        <Route path="/administracao/tipos" element={<TiposContentor />} />

        <Route path="/administracao/transponders" element={<Transponders />} />
        <Route path="/administracao/acabamentos" element={<Acabamentos />} />
        <Route path="/administracao/controlos-acesso" element={<ControlosAcesso />} />
        <Route path="/administracao/residuos" element={<Residuos />} />
        <Route path="/administracao/kits" element={<Kits />} />
        <Route path="/administracao/volumes-kit" element={<VolumesKit />} />
        <Route path="/administracao/marcos" element={<Marcos />} />
        <Route path="/administracao/intervencoes" element={<Intervencoes />} />
        <Route path="/administracao/plataformas-seguranca" element={<PlataformasSeguranca />} />
        <Route path="/administracao/sensores-enchimento" element={<SensoresEnchimento />} />
        <Route path="/administracao/utilizadores-finais" element={<UtilizadoresFinais />} />
        <Route path="/administracao/estado-chaves-rfid" element={<EstadosChavesRfid />} />

        {/* My Sotkon Routes */}
        <Route path="/my-sotkon" element={<Navigate to="/my-sotkon/ilhas" replace />} />
        <Route path="/my-sotkon/ilhas" element={<MySotkonIlhas />} />
        <Route path="/my-sotkon/contentores" element={<MySotkonContentores />} />
        <Route path="/my-sotkon/departamentos" element={<MySotkonDepartamentos />} />
        <Route path="/my-sotkon/manuais" element={<MySotkonManuais />} />

        {/* Sotkis Access Routes */}
        <Route path="/sotkis-access" element={<Navigate to="/sotkis-access/rfids" replace />} />
        <Route path="/sotkis-access/rfids" element={<SotkisAccessRfids />} />
        <Route path="/sotkis-access/reports" element={<SotkisAccessReports />} />
        <Route path="/sotkis-access/deposits" element={<SotkisAccessDepositions />} />
        <Route path="/sotkis-access/batteries" element={<SotkisAccessBatteries />} />
        <Route path="/sotkis-routes" element={<SotkisRoutes />} />

        {/* Sotkis Level Routes */}
        <Route path="/sotkis-level" element={<Navigate to="/sotkis-level/alerts" replace />} />
        <Route path="/sotkis-level/alerts" element={<PlaceholderPage title="Alertas" description="Gestão de alertas" />} />
        <Route path="/sotkis-level/pickups" element={<PlaceholderPage title="Recolhas" description="Gestão de recolhas" />} />
        <Route path="/sotkis-level/containers" element={<PlaceholderPage title="Contentores" description="Gestão de contentores" />} />
        <Route path="/sotkis-level/customers" element={<SotkisLevelCustomers />} />
        <Route path="/sotkis-level/collections" element={<SotkisLevelCollections />} />

        {/* Compliance Routes */}
        <Route path="/compliance" element={<Navigate to="/compliance/clients" replace />} />
        <Route path="/compliance/clients" element={<ComplianceClients />} />
        <Route path="/compliance/suppliers" element={<ComplianceSuppliers />} />
        <Route path="/compliance/dashboard" element={<ComplianceDashboard />} />

        {/* Sotcare Routes */}
        <Route path="/sotcare" element={<Navigate to="/sotcare/corrective-interventions" replace />} />
        <Route path="/sotcare/corrective-interventions" element={<SotcareIntervencoesCorretivas />} />
        <Route path="/sotcare/preventive-interventions" element={<SotcareIntervencoesPreventivas />} />
        <Route path="/sotcare/problem-management" element={<SotcareGestaoProblemas />} />

        {/* Sotkis PLAYT Routes */}
        <Route path="/sotkis-playt" element={<Playt />} />
        <Route path="/sotkis-playt/contracts" element={<PlaytContracts />} />
        <Route path="/sotkis-playt/invoices" element={<PlaytInvoices />} />
        <Route path="/sotkis-playt/pricing" element={<PlaytPricing />} />
        <Route path="/sotkis-playt/points" element={<PlaytPoints />} />

        {/* Style Guide */}
        <Route path="/style-guide" element={<StyleGuide />} />

        {/* Default redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
};

export default App; 