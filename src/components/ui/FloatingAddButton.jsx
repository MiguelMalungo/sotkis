import React from 'react';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

const FloatingAddButton = ({ onClick, className, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        // Base styles - responsive sizing
        "fixed z-50 bg-sotkis-green hover:bg-sotkis-green/90 text-white rounded-full shadow-lg hover:shadow-xl",
        "w-12 h-12 md:w-16 md:h-16", // Mobile: 20% bigger than original small size, Desktop: full size
        // Positioning - responsive
        "top-1 right-4 md:top-[46px] md:right-[40px]", // Mobile: 25px higher (top-1 = 4px), Desktop: moved 25px lower
        // Effects and transitions
        "transition-all duration-200 ease-in-out",
        "hover:scale-105 active:scale-95",
        "focus:outline-none focus:ring-2 focus:ring-sotkis-green focus:ring-offset-2 focus:ring-offset-background",
        // Glass morphism effect
        "backdrop-blur-sm",
        // Ensure it appears above other elements
        "flex items-center justify-center",
        className
      )}
      {...props}
    >
      <Plus className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />
    </button>
  );
};

export default FloatingAddButton;
