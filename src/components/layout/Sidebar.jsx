import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  Trash2, 
  Globe, 
  Cross, 
  CreditCard, 
  Map, 
  TrendingUp, 
  FileText, 
  Calendar,
  ChevronDown,
  ChevronRight,
  Menu,
  X
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
    children: [
      { id: 'importacoes', label: 'Importações', path: '/administracao/importacoes' },
      { id: 'ilhas', label: 'Ilhas', path: '/administracao/ilhas' },
      { id: 'utilizadores-admin', label: 'Utilizadores', path: '/administracao/utilizadores' },
      { id: 'rfids', label: 'Rfids', path: '/administracao/rfids' },
      { id: 'estados-faturacao', label: 'Estados da Faturação', path: '/administracao/estados-faturacao' },
      { id: 'paises', label: 'Países', path: '/administracao/paises' },
      { 
        id: 'tipos', 
        label: 'Tipos', 
        children: [
          { id: 'transponders', label: 'Transponders', path: '/administracao/transponders' },
          { id: 'contentores', label: 'Contentores', path: '/administracao/contentores' },
          { id: 'residuos', label: 'Resíduos', path: '/administracao/residuos' },
          { id: 'controlos-acesso', label: 'Controlos de Acesso', path: '/administracao/controlos-acesso' },
          { id: 'acabamentos', label: 'Acabamentos', path: '/administracao/acabamentos' },
          { id: 'kits', label: 'Kits', path: '/administracao/kits' },
          { id: 'volumes-kit', label: 'Volumes do Kit', path: '/administracao/volumes-kit' },
          { id: 'marcos', label: 'Marcos', path: '/administracao/marcos' },
          { id: 'intervencoes', label: 'Intervenções', path: '/administracao/intervencoes' },
          { id: 'plataformas-seguranca', label: 'Plat. de Segurança', path: '/administracao/plataformas-seguranca' },
          { id: 'sensores-enchimento', label: 'Sensores de Enchimento', path: '/administracao/sensores-enchimento' },
          { id: 'utilizadores-finais', label: 'Utilizadores Finais', path: '/administracao/utilizadores-finais' },
          { id: 'estado-chaves-rfid', label: 'Estado chaves RFID', path: '/administracao/estado-chaves-rfid' }
        ]
      }
    ]
  },
  {
    id: 'my-sotkon',
    label: 'My Sotkon',
    icon: Trash2,
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
    icon: Globe,
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
    icon: Cross,
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
    children: [
      { id: 'alerts', label: 'Alertas', path: '/sotkis-level/alerts' },
      { id: 'pickups', label: 'Recolhas', path: '/sotkis-level/pickups' },
      { id: 'containers', label: 'Contentores', path: '/sotkis-level/containers' },
      { id: 'customers', label: 'Clientes', path: '/sotkis-level/customers' },
      { id: 'locations', label: 'Localizações', path: '/sotkis-level/locations' },
      { id: 'collections', label: 'Coleções', path: '/sotkis-level/collections' }
    ]
  },
  {
    id: 'compliance',
    label: 'Conformidade',
    icon: FileText,
    children: [
      { id: 'clients', label: 'Clientes', path: '/compliance/clients' },
      { id: 'suppliers', label: 'Fornecedores', path: '/compliance/suppliers' },
      { id: 'compliance-dashboard', label: 'Dashboard', path: '/compliance/dashboard' }
    ]
  },
];

const Sidebar = ({ isCollapsed, setIsCollapsed, isMobile, isMobileMenuOpen, onMobileMenuClose }) => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState(new Set());

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
  };

  return (
    <div className={cn(
      "h-full backdrop-blur-lg bg-white/10 border-0 text-white transition-all duration-300 ease-in-out rounded-xl shadow-2xl",
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
              className="flex flex-col items-start hover:opacity-80 transition-opacity cursor-pointer"
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
            </Link>
          )}
          
          {isCollapsed && !isMobile && (
            <div className="flex flex-col items-center justify-center h-full space-y-[17px] w-full">
              <img 
                src={logoThinImage} 
                alt="Sotkis Logo" 
                className="h-12 w-auto object-contain"
              />
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
          "flex-1 overflow-y-auto py-4",
          isMobile && "mt-4"
        )}>
          <ul className="space-y-1 px-3">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const hasChildren = item.children && item.children.length > 0;
              const active = isActive(item);
              const childActive = isChildActive(item);
              const expanded = expandedItems.has(item.id);

              return (
                <li key={item.id}>
                  {hasChildren ? (
                    <div className="relative group">
                      <button
                        onClick={() => toggleExpanded(item.id)}
                        className={cn(
                          "sidebar-item w-full justify-between",
                          (active || childActive) && "active",
                          isCollapsed && !isMobile && "justify-center"
                        )}
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
                      {expanded && (!isCollapsed || isMobile) && (
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
                      {/* Hover submenu for collapsed state */}
                      {isCollapsed && !isMobile && (
                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-200 max-h-0 group-hover:max-h-96 overflow-hidden">
                          <ul className="mt-1 space-y-1">
                            {item.children.map((child) => {
                              const hasChildChildren = child.children && child.children.length > 0;
                              
                              return (
                                <li key={child.id}>
                                  {hasChildChildren ? (
                                    <div className="relative group/sub">
                                      <div className="sidebar-item block justify-center text-center w-[90%] mx-auto">
                                        <span className="text-xs">{child.label}</span>
                                      </div>
                                      <div className="opacity-0 group-hover/sub:opacity-100 transition-all duration-200 max-h-0 group-hover/sub:max-h-96 overflow-hidden absolute left-full top-0 ml-2 bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl min-w-[200px]">
                                        <ul className="p-2 space-y-1">
                                          {child.children.map((grandChild) => (
                                            <li key={grandChild.id}>
                                              <Link
                                                to={grandChild.path}
                                                className={cn(
                                                  "sidebar-item block py-1 px-2 text-xs rounded-lg",
                                                  location.pathname === grandChild.path && "active"
                                                )}
                                                onClick={() => handleItemClick(grandChild)}
                                              >
                                                {grandChild.label}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  ) : (
                                    <Link
                                      to={child.path}
                                      className={cn(
                                        "sidebar-item block justify-center text-center w-[90%] mx-auto",
                                        location.pathname === child.path && "active"
                                      )}
                                      onClick={() => handleItemClick(child)}
                                    >
                                      <span className="text-xs">{child.label}</span>
                                    </Link>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={cn(
                        "sidebar-item block",
                        active && "active",
                        isCollapsed && !isMobile && "justify-center"
                      )}
                      onClick={() => handleItemClick(item)}
                    >
                      <div className={cn(
                        "flex items-center",
                        isCollapsed && !isMobile && "justify-center w-full"
                      )}>
                        <Icon size={24} className={cn("mr-3", isCollapsed && !isMobile && "mr-0")} />
                        {(!isCollapsed || isMobile) && <span className="text-base">{item.label}</span>}
                      </div>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="border-t border-white/10 p-4 pb-6">
          {(!isCollapsed || isMobile) && (
            <div className="flex items-center justify-between text-xs text-white/70">
              <div className="flex items-center space-x-2">
                <Settings size={18} />
                <span>sotkis.com</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 