import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  Trash2, 
  Cross, 
  CreditCard, 
  Map, 
  TrendingUp, 
  FileText, 
  Calendar,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Key,
  Hand,
  Sun,
  User,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logoImage from '../../../assets/Logo.png';
import logoThinImage from '../../../assets/Logo_thin.png';

const menuItems = [
  {
    id: 'dashboard',
    label: 'Dashboards',
    icon: LayoutDashboard,
    path: '/dashboard/operacao',
    children: [
      { id: 'operacao', label: 'Operação e Performance', path: '/dashboard/operacao' }
    ]
  },
  {
    id: 'utilizadores',
    label: 'Utilizadores',
    icon: Users,
    path: '/utilizadores'
  },
  {
    id: 'administracao',
    label: 'Administração',
    icon: Settings,
    path: '/administracao',
    children: [
      { id: 'importacoes', label: 'Importações', path: '/administracao/importacoes' },
      { id: 'estados-faturacao', label: 'Estados da Faturação', path: '/administracao/estados-faturacao' },
      { id: 'paises', label: 'Países', path: '/administracao/paises' },
      { id: 'transponders', label: 'Transponders', path: '/administracao/transponders' },
      { id: 'contentores', label: 'Contentores', path: '/administracao/contentores' },
      { id: 'residuos', label: 'Resíduos', path: '/administracao/residuos' },
      { id: 'controlos-acesso', label: 'Controlos de Acesso', path: '/administracao/controlos-acesso' },
      { id: 'acabamentos', label: 'Acabamentos', path: '/administracao/acabamentos' },
      { id: 'kits', label: 'Kits', path: '/administracao/kits', icon: Cross },
      { id: 'volumes-kit', label: 'Volumes do Kit', path: '/administracao/volumes-kit' },
      { id: 'marcos', label: 'Marcos', path: '/administracao/marcos' },
      { id: 'intervencoes', label: 'Intervenções', path: '/administracao/intervencoes' },
      { id: 'plataformas-seguranca', label: 'Plat. de Segurança', path: '/administracao/plataformas-seguranca' },
      { id: 'sensores-enchimento', label: 'Sensores de Enchimento', path: '/administracao/sensores-enchimento' },
      { id: 'utilizadores-finais', label: 'Utilizadores Finais', path: '/administracao/utilizadores-finais', icon: Users },
      { id: 'estado-chaves-rfid', label: 'Estado chaves RFID', path: '/administracao/estado-chaves-rfid' },
      { id: 'rgpd-list', label: 'RGPDs', path: '/administracao/rgpd-list', icon: Hand }
    ]
  },
  {
    id: 'my-sotkon',
    label: 'My Sotkon',
    icon: Trash2,
    path: '/my-sotkon',
    children: [
      { id: 'ilhas', label: 'Ilhas', path: '/my-sotkon/ilhas' },
      { id: 'contentores', label: 'Contentores', path: '/my-sotkon/contentores' },
      { id: 'departamentos', label: 'Departamentos', path: '/my-sotkon/departamentos' },
      { id: 'manuais', label: 'Manuais', path: '/my-sotkon/manuais' }
    ]
  },
  {
    id: 'sotkis-access',
    label: 'Sotkis Access',
    icon: Key,
    path: '/sotkis-access',
    children: [
      { id: 'rfids-access', label: 'RFID\'s', path: '/sotkis-access/rfids' },
      { id: 'reports', label: 'Relatórios', path: '/sotkis-access/reports' },
      { id: 'deposits', label: 'Deposições', path: '/sotkis-access/deposits' },
      { id: 'batteries', label: 'Baterias', path: '/sotkis-access/batteries' }
    ]
  },
  {
    id: 'sotcare',
    label: 'Sotcare',
    icon: Hand,
    path: '/sotcare',
    children: [
      { id: 'corrective-interventions', label: 'Intervenções Corretivas', path: '/sotcare/corrective-interventions' },
      { id: 'preventive-interventions', label: 'Intervenções Preventivas', path: '/sotcare/preventive-interventions' },
      { id: 'problem-management', label: 'Gestão de Problemas', path: '/sotcare/problem-management' }
    ]
  },
  {
    id: 'sotkis-playt',
    label: 'Sotkis PLAYT',
    icon: CreditCard,
    path: '/sotkis-playt',
    children: [
      { id: 'contracts', label: 'Contratos', path: '/sotkis-playt/contracts' },
      { id: 'invoices', label: 'Faturas', path: '/sotkis-playt/invoices' },
      { id: 'pricing', label: 'Preços', path: '/sotkis-playt/pricing' },
      { id: 'points', label: 'Pontos', path: '/sotkis-playt/points' }
    ]
  },
  {
    id: 'sotkis-routes',
    label: 'Rotas Sotkis',
    icon: Map,
    path: '/sotkis-routes'
  },
  {
    id: 'sotkis-level',
    label: 'Nível Sotkis',
    icon: TrendingUp,
    path: '/sotkis-level',
    children: [
      { id: 'alerts', label: 'Alertas', path: '/sotkis-level/alerts' },
      { id: 'pickups', label: 'Recolhas', path: '/sotkis-level/pickups' },
      { id: 'locations-containers', label: 'Locais & Contentores', path: '/sotkis-level/locations-containers' }
    ]
  },
  {
    id: 'compliance',
    label: 'Conformidade',
    icon: FileText,
    path: '/compliance',
    children: [
      { id: 'clients', label: 'Clientes', path: '/compliance/clients' },
      { id: 'suppliers', label: 'Fornecedores', path: '/compliance/suppliers' },
      { id: 'compliance-dashboard', label: 'Dashboard', path: '/compliance/dashboard' }
    ]
  },
];

const Sidebar = ({ isCollapsed, setIsCollapsed, isMobile, isMobileMenuOpen, onMobileMenuClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [expandedItems, setExpandedItems] = useState(new Set());
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredBalloon, setHoveredBalloon] = useState(false);
  const [balloonPosition, setBalloonPosition] = useState({ top: 0 });

  // Add useEffect to handle balloon positioning
  useEffect(() => {
    if (!isMobile) {
      const updateBalloonPositions = () => {
        if (hoveredItem) {
          const buttonElement = document.querySelector(`[data-item-id="${hoveredItem.id}"]`);
          if (buttonElement) {
            const rect = buttonElement.getBoundingClientRect();
            // Align balloon content with button content by accounting for padding
            setBalloonPosition({ top: rect.top - 12 });
          }
        }
      };

      updateBalloonPositions();
      window.addEventListener('scroll', updateBalloonPositions);
      window.addEventListener('resize', updateBalloonPositions);

      return () => {
        window.removeEventListener('scroll', updateBalloonPositions);
        window.removeEventListener('resize', updateBalloonPositions);
      };
    }
  }, [isMobile, hoveredItem]);

  const toggleExpanded = (itemId) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const isActive = (item) => {
    if (item.path) {
      return location.pathname === item.path;
    }
    if (item.children) {
      return item.children.some(child => location.pathname === child.path);
    }
    return false;
  };

  const isChildActive = (item) => {
    return item.children?.some(child => location.pathname === child.path);
  };

  const handleItemClick = (item) => {
    if (isMobile) {
      onMobileMenuClose();
    }
    if (item.path) {
      navigate(item.path);
    }
  };

  const handleItemHover = (item) => {
    setHoveredItem(item);
  };

  const handleItemLeave = () => {
    // Only hide if not hovering the balloon content
    if (!hoveredBalloon) {
      setHoveredItem(null);
    }
  };

  const handleBalloonEnter = () => {
    setHoveredBalloon(true);
  };

  const handleBalloonLeave = () => {
    setHoveredBalloon(false);
    setHoveredItem(null);
  };

  return (
    <div className={cn(
      "sidebar-container h-full backdrop-blur-lg bg-white/10 border-0 text-white rounded-xl shadow-2xl",
      isMobile 
        ? "w-full" 
        : isCollapsed 
          ? "w-[90px]" 
          : "w-[290px]"
    )}>
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className={cn(
          "flex items-center justify-between",
          isMobile ? "h-20 px-4 pt-3" : "h-48 px-4 pt-2 border-b border-white/10"
        )}>
          {(!isCollapsed || isMobile) && (
            <Link 
              to="/" 
              className="flex flex-col items-start hover:opacity-80 transition-opacity cursor-pointer relative group"
              onClick={handleItemClick}
            >
              <img 
                src={logoImage} 
                alt="Sotkis Logo" 
                className={cn(
                  "w-auto object-contain",
                  isMobile ? "h-24 mt-6" : "h-40"
                )}
              />
              {/* Tooltip */}
              <div className="absolute left-0 ml-5 -mt-3 px-3 py-2 bg-black text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50" style={{backgroundColor: 'black !important', color: 'white !important'}}>
                ÚLTIMAS PAGINAS NAVEGADAS
                {/* Tooltip arrow */}
                <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-r-0 border-t-4 border-b-4 border-transparent border-r-black"></div>
              </div>
            </Link>
          )}
          
          {isCollapsed && !isMobile && (
            <div className="flex flex-col items-center justify-center h-full space-y-[17px] w-full">
              <div className="relative group">
                <img 
                  src={logoThinImage} 
                  alt="Sotkis Logo" 
                  className="h-12 w-auto object-contain"
                />
                {/* Tooltip for collapsed state */}
                <div className="absolute left-0 ml-10 -mt-8 px-3 py-2 bg-black text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50" style={{backgroundColor: 'black !important', color: 'white !important'}}>
                  ÚLTIMAS PAGINAS NAVEGADAS
                  {/* Tooltip arrow */}
                  <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-r-0 border-t-4 border-b-4 border-transparent border-r-black"></div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="bg-white/10 backdrop-blur-lg text-white border-0 hover:bg-white/20 rounded-xl shadow-2xl w-12 h-12 flex items-center justify-center"
              >
                <Menu size={24} />
              </Button>
            </div>
          )}

          {!isCollapsed && !isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="ml-auto"
            >
              <Menu size={20} />
            </Button>
          )}
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onMobileMenuClose}
              className="ml-auto"
            >
              <X size={20} />
            </Button>
          )}
        </div>

        {/* Navigation */}
        <nav className={cn(
          "h-full flex flex-col transition-all duration-300",
          isMobile && "mt-4 overflow-y-auto flex-1"
        )}>
          <ul className="space-y-1 px-3 relative pb-20">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const hasChildren = item.children && item.children.length > 0;
              const active = isActive(item);
              const childActive = isChildActive(item);
              const expanded = expandedItems.has(item.id);

              return (
                <li key={item.id} className="relative">
                  {hasChildren ? (
                    <div className="relative group">
                      <button
                        onClick={() => {
                          if (!isMobile) {
                            navigate(item.path || '#');
                          } else {
                            toggleExpanded(item.id);
                          }
                        }}
                        className={cn(
                          "sidebar-item w-full justify-between",
                          (active || childActive) && "active",
                          isCollapsed && !isMobile && "justify-center"
                        )}
                        onMouseEnter={() => handleItemHover(item)}
                        onMouseLeave={handleItemLeave}
                        data-item-id={item.id}
                      >
                        <div className={cn(
                          "flex items-center",
                          isCollapsed && !isMobile && "justify-center w-full"
                        )}>
                          <Icon size={24} className={cn("mr-3", isCollapsed && !isMobile && "mr-0")} />
                          {(!isCollapsed || isMobile) && <span className="text-base">{item.label}</span>}
                        </div>
                        {(!isCollapsed || isMobile) && (
                          expanded ? <ChevronDown size={18} className="text-white" /> : <ChevronRight size={18} className="text-white" />
                        )}
                      </button>
                      
                      {/* Hover balloon for collapsed state - show for unselected items */}
                      {!isMobile && !(active || childActive) && hoveredItem === item && (
                        <div 
                          className={`fixed bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl min-w-[200px] z-[9999] transition-all duration-300 ${
                            isCollapsed ? 'left-[calc(90px+16px)]' : 'left-[calc(280px+16px)]'
                          }`}
                          style={{ top: `${balloonPosition.top}px` }}
                          onMouseEnter={handleBalloonEnter}
                          onMouseLeave={handleBalloonLeave}
                        >
                          <div className="p-3 pointer-events-auto">
                            <h3 className="text-sm font-semibold text-gray-800 mb-2">{item.label}</h3>
                            <ul className="space-y-1">
                              {item.children.map((child) => {
                                const hasChildChildren = child.children && child.children.length > 0;
                                
                                return (
                                  <li key={child.id}>
                                    {hasChildChildren ? (
                                      <div className="relative group/sub">
                                        <div className="text-sm text-gray-700 py-1 px-2 rounded hover:bg-gray-100 transition-colors cursor-pointer">
                                          {child.label}
                                        </div>
                                        <div className="opacity-0 group-hover/sub:opacity-100 transition-all duration-300 delay-100 fixed left-[calc(90px+200px+16px)] top-[var(--balloon-top)] bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl min-w-[180px] z-[9998] pointer-events-none">
                                          <div className="p-3 pointer-events-auto">
                                            <h4 className="text-sm font-semibold text-gray-800 mb-2">{child.label}</h4>
                                            <ul className="space-y-1">
                                              {child.children.map((grandChild) => (
                                                <li key={grandChild.id}>
                                                  <Link
                                                    to={grandChild.path}
                                                    className="text-sm text-gray-700 py-1 px-2 rounded hover:bg-gray-100 transition-colors block"
                                                    onClick={() => handleItemClick(grandChild)}
                                                  >
                                                    {grandChild.label}
                                                  </Link>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    ) : (
                                      <Link
                                        to={child.path}
                                        className="text-sm text-gray-700 py-1 px-2 rounded hover:bg-gray-100 transition-colors block"
                                        onClick={() => handleItemClick(child)}
                                      >
                                        {child.label}
                                      </Link>
                                    )}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      )}
                      
                      {expanded && (isMobile) && (
                        <ul className="sidebar-submenu mt-1 space-y-1">
                          {item.children.map((child) => {
                            const hasChildChildren = child.children && child.children.length > 0;
                            const childExpanded = expandedItems.has(child.id);
                            const childActive = hasChildChildren ? 
                              child.children.some(grandChild => location.pathname === grandChild.path) :
                              location.pathname === child.path;

                            return (
                              <li key={child.id}>
                                {hasChildChildren ? (
                                  <div className="relative">
                                    <button
                                      onClick={() => toggleExpanded(child.id)}
                                      className={cn(
                                        "sidebar-item w-full justify-between py-2 pl-8",
                                        childActive && "active"
                                      )}
                                    >
                                      <span className="text-base">{child.label}</span>
                                      {childExpanded ? <ChevronDown size={16} className="text-white" /> : <ChevronRight size={16} className="text-white" />}
                                    </button>
                                    {childExpanded && (
                                      <ul className="sidebar-submenu mt-1 space-y-1">
                                        {child.children.map((grandChild) => (
                                          <li key={grandChild.id}>
                                            <Link
                                              to={grandChild.path}
                                              className={cn(
                                                "sidebar-item block py-2 pl-12",
                                                location.pathname === grandChild.path && "active"
                                              )}
                                              onClick={() => handleItemClick(grandChild)}
                                            >
                                              {grandChild.label}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </div>
                                ) : (
                                  <Link
                                    to={child.path}
                                    className={cn(
                                      "sidebar-item block py-2 pl-8",
                                      location.pathname === child.path && "active"
                                    )}
                                    onClick={() => handleItemClick(child)}
                                  >
                                    {child.label}
                                  </Link>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <div className="relative group">
                      <button
                        onClick={() => handleItemClick(item)}
                        className={cn(
                          "w-full flex items-center px-3 py-2 rounded-lg transition-colors group sidebar-item",
                          active
                            ? "bg-sotkis-green text-white"
                            : "text-white hover:bg-white/10"
                        )}
                        onMouseEnter={() => handleItemHover(item)}
                        onMouseLeave={handleItemLeave}
                        data-item-id={item.id}
                      >
                        <div className={cn(
                          "flex items-center",
                          isCollapsed && !isMobile && "justify-center w-full"
                        )}>
                          <Icon size={24} className={cn("mr-3", isCollapsed && !isMobile && "mr-0")} />
                          {(!isCollapsed || isMobile) && <span className="text-base">{item.label}</span>}
                        </div>
                      </button>
                      
                      {/* Hover balloon for collapsed state - show for unselected items without children */}
                      {!isMobile && !active && hoveredItem === item && (
                        <div 
                          className={`fixed bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl min-w-[150px] z-[9999] transition-all duration-300 ${
                            isCollapsed ? 'left-[calc(90px+16px)]' : 'left-[calc(280px+16px)]'
                          }`}
                          style={{ top: `${balloonPosition.top}px` }}
                          onMouseEnter={handleBalloonEnter}
                          onMouseLeave={handleBalloonLeave}
                        >
                          <div className="p-3 pointer-events-auto">
                            <h3 className="text-sm font-semibold text-gray-800">{item.label}</h3>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
            {/* Profile as last navigation item */}
            <li className="relative">
              <div className="relative group">
                <button
                  onClick={() => {
                    // Toggle profile menu visibility
                    setHoveredItem(hoveredItem?.id === 'profile' ? null : { id: 'profile', label: 'Profile' });
                  }}
                  className={cn(
                    "sidebar-item w-full justify-between",
                    isCollapsed && !isMobile && "justify-center"
                  )}
                  onMouseEnter={() => !isMobile && setHoveredItem({ id: 'profile', label: 'Profile' })}
                  onMouseLeave={() => {
                    // Don't hide immediately - let the balloon handle its own visibility
                  }}
                  data-item-id="profile"
                >
                  <div className={cn(
                    "flex items-center",
                    isCollapsed && !isMobile && "justify-center w-full"
                  )}>
                    <User size={24} className={cn("mr-3", isCollapsed && !isMobile && "mr-0")} />
                    {(!isCollapsed || isMobile) && <span className="text-base">Profile</span>}
                  </div>
                </button>
                
                {/* Profile Options Balloon */}
                {hoveredItem?.id === 'profile' && (
                  <div 
                    className={cn(
                      "absolute w-64 bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl z-[9999] transition-all duration-300 profile-balloon",
                      isMobile 
                        ? "top-full left-2 mt-0" // Mobile: below button, 10px to the right
                        : "left-full top-[-2px] ml-2" // Desktop: right side, 2px higher (from top-0)
                    )}
                    onMouseEnter={() => !isMobile && setHoveredItem({ id: 'profile', label: 'Profile' })}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="p-3">
                      <div className="text-sm text-gray-800 mb-1 text-center">
                        <span className="font-semibold">Miguel Guedes</span> • <span className="font-normal">Sotkon design</span>
                      </div>
                      <div className="space-y-[-1px]">
                        <button 
                          onClick={() => {
                            if (isMobile) {
                              onMobileMenuClose();
                            }
                            navigate('/definicoes');
                          }}
                          className="w-full flex items-center justify-between hover:bg-gray-100 rounded-lg px-3 py-2 transition-colors text-sm text-gray-700"
                        >
                          <span>Definições</span>
                          <Settings size={16} className="text-gray-700" />
                        </button>
                        <button className="w-full flex items-center justify-between hover:bg-gray-100 rounded-lg px-3 py-2 transition-colors text-sm text-gray-700">
                          <span>Logout</span>
                          <LogOut size={16} className="text-gray-700" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </nav>

        {/* Footer */}
        <div className="border-t border-white/10 p-4 pb-6">
          {(!isCollapsed || isMobile) && (
            <div className="flex items-center justify-between text-xs text-white/70">
              <div className="flex items-center space-x-2">
                <Settings size={18} />
                <Link 
                  to="/style-guide" 
                  className="hover:text-white transition-colors duration-200"
                  title="Style Guide"
                >
                  Style Guide
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 