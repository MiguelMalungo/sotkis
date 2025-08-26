import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const SubmenuBar = ({ items = [] }) => {
  const location = useLocation();

  if (!items.length) return null;

  const isAdministracao = location.pathname.startsWith('/administracao');
  const isDashboard = location.pathname.startsWith('/dashboard');

  // Normalize submenu for administração pages:
  // - remove Ilhas / Utilizadores / RFIDs
  // - ensure RGPDs exists (added at the end to sit beside other links)
  let processedItems = items;
  if (isAdministracao) {
    processedItems = items.filter(
      (item) => !['Ilhas', 'Utilizadores', 'RFIDs'].includes(item.label)
    );

    const hasRgpd = processedItems.some((i) => i.to === '/administracao/rgpd-list');
    if (!hasRgpd) {
      processedItems = [
        ...processedItems,
        { label: 'RGPDs', to: '/administracao/rgpd-list' },
      ];
    }
  }

  return (
    <div className={
      (isAdministracao && !isDashboard)
        ? "hidden md:grid grid-flow-col grid-rows-2 auto-cols-max gap-2 w-full"
        : "hidden md:flex flex-wrap gap-2 w-full max-w-4xl"
    }>
      {processedItems.map((item) => {
        const active = location.pathname === item.to;
        return (
          <Link
            key={item.to}
            to={item.to}
            className={cn(
              'px-3 py-2 rounded-lg font-bold transition-colors whitespace-nowrap text-center',
              'text-base',
              active
                ? 'bg-sotkis-green text-white'
                : 'bg-sotkis-green hover:bg-sotkis-green/90 text-white'
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};

export default SubmenuBar;


