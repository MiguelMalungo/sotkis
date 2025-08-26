import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Menu, X, LogOut, Settings as SettingsIcon, User, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Sidebar from './Sidebar';
import ConcentricCircles from '@/components/ui/ConcentricCircles';
import summerImage from '/assets/summer.png';
import backgroundImage from '/assets/background.png';
import logoThinImage from '/assets/Logo_thin.png';

const contentRoutes = [
  '/dashboard', '/utilizadores', '/administracao', '/my-sotkon', '/sotkis-access', '/sotcare', '/sotkis-paylt', '/sotkis-routes', '/sotkis-level', '/compliance', '/planning'
];

const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [hasContent, setHasContent] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  useEffect(() => {
    // Check if current route has content
    const isContent = contentRoutes.some(route => location.pathname.startsWith(route));
    setHasContent(isContent);
  }, [location.pathname]);

  // Track recent pages visited for landing page shortcuts
  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === '/') return;

    const toTitleCase = (text) => text
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');

    const getRouteLabel = (path) => {
      const routeLabels = {
        '/dashboard/operacao': 'Dashboard Operação',
        '/dashboard/deposicoes': 'Deposições',
        '/dashboard/nivel-enchimento': 'Nível de Enchimento',
        '/dashboard/gestao-manutencoes': 'Gestão de Manutenções',
        '/dashboard/recompensas': 'Recompensas',
        '/dashboard/gestao-rotas': 'Gestão de Rotas',
        '/dashboard/performance': 'Performance',
        '/utilizadores': 'Utilizadores',
        '/administracao': 'Administração',
        '/my-sotkon': 'My Sotkon',
        '/sotkis-access': 'Sotkis Access',
        '/sotkis-access/rfids': "Sotkis Access - RFID's",
        '/sotkis-access/reports': 'Sotkis Access - Relatórios',
        '/sotkis-access/deposits': 'Sotkis Access - Deposições',
        '/sotkis-access/batteries': 'Sotkis Access - Baterias',
        '/sotcare': 'Sotcare',
        '/sotkis-playt': 'Sotkis PLAYT',
        '/sotkis-routes': 'Rotas Sotkis',
        '/sotkis-level': 'Nível Sotkis',
        '/sotkis-level/alerts': 'Nível Sotkis - Alertas',
        '/sotkis-level/pickups': 'Nível Sotkis - Recolhas',
        '/sotkis-level/locations-containers': 'Nível Sotkis - Locais & Contentores',
        '/compliance': 'Conformidade',
        '/compliance/clients': 'Conformidade - Clientes',
        '/compliance/suppliers': 'Conformidade - Fornecedores',
        '/compliance/dashboard': 'Conformidade - Dashboard',
        '/style-guide': 'Style Guide'
      };

      if (routeLabels[path]) return routeLabels[path];

      // Handle Administração and other nested routes generically
      if (path.startsWith('/administracao/')) {
        const tail = path.replace('/administracao/', '');
        return `Administração - ${toTitleCase(tail)}`;
      }

      if (path.startsWith('/my-sotkon/')) {
        const tail = path.replace('/my-sotkon/', '');
        return `My Sotkon - ${toTitleCase(tail)}`;
      }

      // Fallback to last segment
      const segments = path.split('/').filter(Boolean);
      const last = segments[segments.length - 1] || '';
      return toTitleCase(last || 'Página');
    };

    try {
      const label = getRouteLabel(currentPath);
      let recent = [];
      try {
        recent = JSON.parse(localStorage.getItem('recentPages') || '[]');
      } catch {}
      recent = Array.isArray(recent) ? recent : [];
      recent = recent.filter((p) => p && p.path !== currentPath);
      recent.unshift({ path: currentPath, label });
      recent = recent.slice(0, 20);
      localStorage.setItem('recentPages', JSON.stringify(recent));
    } catch {}
  }, [location.pathname]);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileView = window.innerWidth < 768;
      console.log('Window width:', window.innerWidth, 'Is mobile:', isMobileView);
      setIsMobile(isMobileView);
      if (isMobileView) {
        setIsCollapsed(true);
        setIsMobileMenuOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMobileMenu = () => {
    console.log('Mobile menu button clicked!');
    console.log('Current isMobileMenuOpen:', isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Check if we're on the landing page (root path)
  const isLandingPage = location.pathname === '/';

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image Container */}
      <div className="fixed inset-0 overflow-hidden">
        <div 
          className={`absolute bg-cover bg-center bg-no-repeat transition-all duration-500 ${
            hasContent ? 'blur-md' : ''
          }`}
          style={{
            backgroundImage: `url(${isLandingPage ? backgroundImage : summerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            width: '110%',
            height: '110%',
            top: '-5%',
            left: '-5%'
          }}
        >
          {/* Overlay - 80% black for all pages */}
          <div 
            className="absolute inset-0 transition-all duration-500 z-0" 
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }} 
          />
        </div>
      </div>

      {/* Concentric Circles Overlay */}
      <ConcentricCircles />

      {/* Mobile Menu Button */}
      {isMobile && !isMobileMenuOpen && (
        <div className="fixed top-4 left-4 z-[9999] flex flex-col items-center space-y-3">
          {/* Logo above burger */}
          <img 
            src={logoThinImage} 
            alt="Sotkis Logo" 
            className="h-12 w-auto object-contain pointer-events-none"
          />
          {/* Burger menu button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="bg-white/10 backdrop-blur-lg text-white border-0 hover:bg-white/20 rounded-xl shadow-2xl w-12 h-12 flex items-center justify-center cursor-pointer z-[9999]"
          >
            <Menu size={24} />
          </Button>
        </div>
      )}

      {/* Sidebar - responsive behavior */}
      <div className={`
        ${isMobile ? 'fixed left-0 top-0 h-full w-80 z-50' : 'fixed left-4 top-4 z-50 h-[calc(100vh-2rem)]'}
        ${isMobile && !isMobileMenuOpen ? 'pointer-events-none transform -translate-x-full' : ''}
      `}>
        <Sidebar 
          isCollapsed={isCollapsed} 
          setIsCollapsed={setIsCollapsed}
          isMobile={isMobile}
          isMobileMenuOpen={isMobileMenuOpen}
          onMobileMenuClose={() => setIsMobileMenuOpen(false)}
        />
      </div>

      {/* Mobile overlay */}
      {isMobile && isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Top-right theme toggle */}
      {hasContent && (
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
      )}

      {/* Main Content */}
      <main className={`
        min-h-screen transition-all duration-300
        ${isMobile 
          ? 'ml-0 pt-16' 
          : isCollapsed 
            ? 'ml-20' 
            : 'ml-72'
        }
      `}>
        <div className="relative z-20 p-4 md:p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout; 