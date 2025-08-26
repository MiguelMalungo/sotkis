import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sun } from 'lucide-react';
import sottImage from '../assets/sott(1).png';
import logo2Image from '../assets/Logo2.png';
import logoThin2Image from '../assets/Logo_thin2.png';
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
import Paises from './pages/administracao/Paises';
import AdministracaoHome from './pages/administracao/AdministracaoHome';
import RgpdList from './pages/administracao/RgpdList';
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
import MySotkonHome from './pages/MySotkonHome';

import SotkisAccessDepositions from './pages/SotkisAccessDepositions';
import SotkisAccessRfids from './pages/SotkisAccessRfids';
import SotkisAccessReports from './pages/SotkisAccessReports';
import SotkisAccessBatteries from './pages/SotkisAccessBatteries';
import SotkisAccessHome from './pages/SotkisAccessHome';
import SotkisRoutes from './pages/SotkisRoutes';
// Removed SotkisLevelCustomers and SotkisLevelCollections - replaced with new pages
import SotkisLevelAlerts from './pages/SotkisLevelAlerts';
import SotkisLevelPickups from './pages/SotkisLevelPickups';
import SotkisLevelLocationsContainers from './pages/SotkisLevelLocationsContainers';
import SotkisLevelHome from './pages/SotkisLevelHome';
import ComplianceSuppliers from './pages/ComplianceSuppliers';
import ComplianceClients from './pages/ComplianceClients';
import ComplianceDashboard from './pages/ComplianceDashboard';
import ComplianceHome from './pages/ComplianceHome';
import SotcareIntervencoesPreventivas from './pages/SotcareIntervencoesPreventivas';
import SotcareIntervencoesCorretivas from './pages/SotcareIntervencoesCorretivas';
import SotcareGestaoProblemas from './pages/SotcareGestaoProblemas';
import SotcareHome from './pages/SotcareHome';
import StyleGuide from './pages/StyleGuide';
import Settings from './pages/Settings';
import Definicoes from './pages/Definicoes';

// Landing page when no menu is selected
const LandingPage = () => {
  const navigate = useNavigate();
  const [recentPages, setRecentPages] = React.useState([]);
  const [pressedPath, setPressedPath] = React.useState(null);
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  React.useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('recentPages') || '[]');
      setRecentPages(Array.isArray(stored) ? stored : []);
    } catch {
      setRecentPages([]);
    }
  }, []);

  React.useEffect(() => {
    const mq = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
    if (mq && mq.addEventListener) {
      mq.addEventListener('change', update);
    } else if (mq && mq.addListener) {
      mq.addListener(update);
    }
    window.addEventListener('resize', update);
    return () => {
      if (mq && mq.removeEventListener) {
        mq.removeEventListener('change', update);
      } else if (mq && mq.removeListener) {
        mq.removeListener(update);
      }
      window.removeEventListener('resize', update);
    };
  }, []);

  const itemsToShow = isMobile ? 5 : 8;
  const visibleItems = recentPages.slice(0, itemsToShow);

  const handleNavigate = (path) => {
    setPressedPath(path);
    // small delay to let the press animation render on mobile before navigation
    setTimeout(() => {
      navigate(path);
    }, 120);
  };

  return (
    <div className="min-h-screen pt-[40px] md:pt-[40px]">
      {/* Top header aligned with logo (mobile right, desktop centered and larger) */}
      <div className="flex items-center pt-4 px-4 md:justify-center md:mt-[30px]">
        <div className="text-left md:text-center ml-auto md:ml-0">
          <h1 className="font-bold text-white text-3xl sm:text-4xl md:text-6xl">Bem-vindo ao Sotkis</h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-2xl">Selecione uma opção no menu lateral para começar</p>
        </div>
        
        {/* Theme Toggle Button */}
        <div className="fixed top-[21px] right-4 z-[60]">
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/10 backdrop-blur-lg text-white border-0 hover:bg-white/20 rounded-xl shadow-2xl w-12 h-12 flex items-center justify-center"
            onClick={() => {
              const isEnablingLight = !document.body.classList.contains('light-theme');
              const layoutElement = document.querySelector('.min-h-screen');

              if (layoutElement) {
                // Background image containers (including inline backgroundImage/background-image styles)
                const backgroundDivs = layoutElement.querySelectorAll(
                  'div[style*="backgroundImage"], div[style*="background-image"]'
                );
                backgroundDivs.forEach((div) => {
                  div.style.display = isEnablingLight ? 'none' : '';
                });

                // Overlays: match common overlay classes and inline rgba gradients
                const overlayDivs = layoutElement.querySelectorAll(
                  '.bg-overlay, .bg-overlay-light, div[style*="rgba(0, 0, 0, 0.8)"], div[style*="rgba(0,0,0,0.8)"], div[style*="rgba(0, 0, 0, 0.56)"], div[style*="rgba(0,0,0,0.56)"]'
                );
                overlayDivs.forEach((div) => {
                  div.style.display = isEnablingLight ? 'none' : '';
                });
              }

              // Toggle body class for light theme last, based on target state
              if (isEnablingLight) {
                document.body.classList.add('light-theme');
              } else {
                document.body.classList.remove('light-theme');
              }
            }}
            title="Toggle Theme"
          >
            <Sun size={20} />
          </Button>
        </div>
      </div>

      {/* Recent pages card */}
      <div className="p-4 sm:p-6 md:mt-[30px]">
        <Card className="card-dark-large">
          <CardHeader className="pb-2">
            <CardTitle className="text-sotkis-green text-[18px] md:text-2xl text-left">ÚLTIMAS PÁGINAS NAVEGADAS</CardTitle>
          </CardHeader>
          <CardContent>
            {visibleItems.length === 0 ? (
              <p className="text-gray-300 text-sm text-left !text-left">Ainda não existem páginas recentes.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {visibleItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleNavigate(item.path)}
                    onTouchStart={() => setPressedPath(item.path)}
                    onTouchEnd={() => setPressedPath(null)}
                    onPointerDown={() => setPressedPath(item.path)}
                    onPointerUp={() => setPressedPath(null)}
                    onPointerCancel={() => setPressedPath(null)}
                    className={`w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 text-white transform-gpu will-change-transform transition-colors transition-transform duration-150 ease-out hover:scale-105 active:scale-95 cursor-pointer select-none ${pressedPath === item.path ? 'scale-95' : 'scale-100'}`}
                  >
                    <div className="text-lg font-medium">{item.label}</div>
                    <div className="text-base text-gray-400 break-all">{item.path}</div>
                  </button>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

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
  const [showBotBalloon, setShowBotBalloon] = React.useState(false);

  // Set CSS custom properties for light theme assets
  React.useEffect(() => {
    document.documentElement.style.setProperty('--logo2-url', `url(${logo2Image})`);
    document.documentElement.style.setProperty('--logo-thin2-url', `url(${logoThin2Image})`);
  }, []);
  
  const toggleBotBalloon = () => {
    console.log('toggleBotBalloon called, current state:', showBotBalloon);
    setShowBotBalloon(!showBotBalloon);
    console.log('toggleBotBalloon: state will be set to:', !showBotBalloon);
  };
  
  console.log('App component - isAuthenticated:', isAuthenticated);
  console.log('App component - showBotBalloon state:', showBotBalloon);

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
                            <Route path="/administracao" element={<AdministracaoHome />} />
                    <Route path="/administracao/importacoes" element={<Importacoes />} />
                    <Route path="/administracao/contentores" element={<Contentores />} />
                    <Route path="/administracao/rgpd-list" element={<RgpdList />} />

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
        <Route path="/my-sotkon" element={<MySotkonHome />} />
        <Route path="/my-sotkon/ilhas" element={<MySotkonIlhas />} />
        <Route path="/my-sotkon/contentores" element={<MySotkonContentores />} />
        <Route path="/my-sotkon/departamentos" element={<MySotkonDepartamentos />} />
        <Route path="/my-sotkon/manuais" element={<MySotkonManuais />} />

        {/* Sotkis Access Routes */}
        <Route path="/sotkis-access" element={<SotkisAccessHome />} />
        <Route path="/sotkis-access/rfids" element={<SotkisAccessRfids />} />
        <Route path="/sotkis-access/reports" element={<SotkisAccessReports />} />
        <Route path="/sotkis-access/deposits" element={<SotkisAccessDepositions />} />
        <Route path="/sotkis-access/batteries" element={<SotkisAccessBatteries />} />
        <Route path="/sotkis-routes" element={<SotkisRoutes />} />

        {/* Sotkis Level Routes */}
        <Route path="/sotkis-level" element={<SotkisLevelHome />} />
        <Route path="/sotkis-level/alerts" element={<SotkisLevelAlerts />} />
        <Route path="/sotkis-level/pickups" element={<SotkisLevelPickups />} />
        <Route path="/sotkis-level/locations-containers" element={<SotkisLevelLocationsContainers />} />

        {/* Compliance Routes */}
        <Route path="/compliance" element={<ComplianceHome />} />
        <Route path="/compliance/clients" element={<ComplianceClients />} />
        <Route path="/compliance/suppliers" element={<ComplianceSuppliers />} />
        <Route path="/compliance/dashboard" element={<ComplianceDashboard />} />

        {/* Sotcare Routes */}
        <Route path="/sotcare" element={<SotcareHome />} />
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

        {/* Settings */}
        <Route path="/settings" element={<Settings />} />

        {/* Definições */}
        <Route path="/definicoes" element={<Definicoes />} />

        {/* Default redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      
      {/* Assistant Bot - Fixed in lower right corner with balloon */}
      <div className="assistant-bot-container">
        {/* Balloon - appears to the left */}
        {showBotBalloon && (
          <div className="assistant-bot-balloon">
            <div className="balloon-content">
              {/* Mobile microphone button - only shows on mobile */}
              <button className="microphone-btn-mobile">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="23"></line>
                  <line x1="8" y1="23" x2="16" y2="23"></line>
                </svg>
              </button>
              
              <div className="balloon-input-container">
                <div className="input-icons-left">
                  <button className="input-icon-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                  <button className="input-icon-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21,15 16,10 5,21"></polyline>
                    </svg>
                  </button>
                </div>
                <input 
                  type="text" 
                  className="balloon-input" 
                  placeholder="O que precisas?"
                />
                <button className="microphone-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" y1="19" x2="12" y2="23"></line>
                    <line x1="8" y1="23" x2="16" y2="23"></line>
                  </svg>
                </button>
              </div>
            </div>
            {/* Balloon arrow pointing right */}
            <div className="balloon-arrow"></div>
          </div>
        )}
        
        {/* Bot Icon - clickable */}
        <img 
          src={sottImage} 
          alt="Assistant Bot" 
          className="assistant-bot cursor-pointer hover:scale-110 transition-transform duration-200"
          onClick={toggleBotBalloon}
        />
      </div>
    </Layout>
  );
};

export default App; 