import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Sidebar from './Sidebar';
import ConcentricCircles from '@/components/ui/ConcentricCircles';
import backgroundImage from '/assets/background.png';
import logoThinImage from '/assets/Logo_thin.png';

const contentRoutes = [
  '/dashboard', '/utilizadores', '/administracao', '/my-sotkon', '/sotkis-access', '/sotcare', '/sotkis-paylt', '/sotkis-routes', '/sotkis-level', '/compliance', '/planning'
];

const Layout = ({ children }) => {
  const location = useLocation();
  const [hasContent, setHasContent] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  useEffect(() => {
    // Check if current route has content
    const isContent = contentRoutes.some(route => location.pathname.startsWith(route));
    setHasContent(isContent);
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

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className={`fixed inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500 ${
          hasContent ? 'blur-sm' : ''
        }`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Overlay - 80% black for all pages */}
        <div 
          className="absolute inset-0 transition-all duration-500 z-0" 
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }} 
        />
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