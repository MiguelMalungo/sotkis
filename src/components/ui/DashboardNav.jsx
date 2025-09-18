import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/dashboard/deposicoes', label: 'Deposições' },
  { to: '/dashboard/nivel-enchimento', label: 'Nível de Enchimento' },
  { to: '/dashboard/gestao-manutencoes', label: 'Gestão de Manutenções' },
  { to: '/dashboard/recompensas', label: 'Recompensas' },
  { to: '/dashboard/gestao-rotas', label: 'Gestão de Rotas' },
  { to: '/dashboard/performance', label: 'Performance' }
];

const DashboardNav = () => {
  const location = useLocation();
  const [isLightTheme, setIsLightTheme] = useState(false);

  useEffect(() => {
    const getIsLight = () => typeof document !== 'undefined' && document.body.classList.contains('light-theme');
    setIsLightTheme(getIsLight());

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          setIsLightTheme(getIsLight());
        }
      });
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden md:block mt-3 mb-2">
      <div className="flex flex-wrap gap-2">
        {links.map(({ to, label }) => {
          const isActive = location.pathname === to;
          const baseClasses = 'px-3 py-1.5 rounded-md text-sm font-semibold transition-colors duration-150 border';
          const activeClasses = 'bg-sotkis-green text-white border-sotkis-green hover:bg-sotkis-green/80';
          const inactiveClasses = isLightTheme
            ? 'bg-transparent text-black border-black hover:bg-sotkis-green/80 hover:text-white'
            : 'bg-sotkis-green/10 text-sotkis-green border-sotkis-green hover:bg-sotkis-green/80 hover:text-white';
          return (
            <Link key={to} to={to} className="inline-block">
              <button
                type="button"
                className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
              >
                {label}
              </button>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default DashboardNav;


