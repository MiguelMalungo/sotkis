import React, { useState, useEffect } from 'react';
import { Sun } from 'lucide-react';
import { Button } from '../components/ui/button';
import playtLogo from '../../assets/PLAYT.png';
import periskopBackground from '../../assets/Periskop.jpg';

const PlaytSubpage = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    // Check initial theme state
    setIsLightMode(document.body.classList.contains('light-theme'));
    
    // Listen for theme changes from other parts of the app
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          setIsLightMode(document.body.classList.contains('light-theme'));
        }
      });
    });
    
    observer.observe(document.body, { attributes: true });
    
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const newLightMode = !isLightMode;
    setIsLightMode(newLightMode);
    
    // Toggle body class for light theme
    if (newLightMode) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${periskopBackground})` }}
      >
        {/* Overlay - only show in dark mode */}
        {!isLightMode && (
          <div className="absolute inset-0 bg-black/[0.56] backdrop-blur-sm" />
        )}
      </div>
      
      {/* Theme Toggle Button */}
      <div className="fixed top-[21px] right-4 z-[60]">
        <Button
          variant="ghost"
          size="icon"
          className="bg-white/10 backdrop-blur-lg text-white border-0 hover:bg-white/20 rounded-xl shadow-2xl w-12 h-12 flex items-center justify-center"
          onClick={toggleTheme}
          title="Toggle Theme"
        >
          <Sun size={20} />
        </Button>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* PLAYT Logo with half intensity stroke */}
        <div className="relative mb-8">
          <img 
            src={playtLogo} 
            alt="PLAYT Logo" 
            className="h-64 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.4)) drop-shadow(0 0 20px rgba(255,255,255,0.3))',
            }}
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default PlaytSubpage; 