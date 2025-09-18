import React from 'react';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

const FloatingAddButton = ({ onClick, className, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        // Base styles
        "fixed z-50 w-16 h-16 bg-sotkis-green hover:bg-sotkis-green/90 text-white rounded-full shadow-lg hover:shadow-xl",
        // Positioning - responsive
        "top-[46px] right-[40px] md:top-[46px] md:right-[40px]", // Desktop: moved 25px lower, 40px from right
        "max-md:top-auto max-md:bottom-6 max-md:left-1/2 max-md:-translate-x-1/2", // Mobile: center bottom
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
      <Plus className="w-7 h-7" strokeWidth={2.5} />
    </button>
  );
};

export default FloatingAddButton;
