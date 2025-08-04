import React from 'react';
import playtLogo from '../../assets/PLAYT.png';
import periskopBackground from '../../assets/Periskop.jpg';

const Playt = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${periskopBackground})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* PLAYT Logo with half intensity stroke */}
        <div className="relative">
          <img 
            src={playtLogo} 
            alt="PLAYT Logo" 
            className="h-64 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.4)) drop-shadow(0 0 20px rgba(255,255,255,0.3))',
            }}
          />
        </div>
        
        {/* Optional: Add some text below the logo */}
        <div className="mt-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Sotkis PLAYT</h1>
          <p className="text-xl text-white/80">Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default Playt; 