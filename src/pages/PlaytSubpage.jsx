import React from 'react';
import playtLogo from '../../assets/PLAYT.png';
import periskopBackground from '../../assets/Periskop.jpg';

const PlaytSubpage = ({ children }) => (
  <div className="min-h-screen relative flex items-center justify-center">
    {/* Background Image */}
    <div 
      className="fixed inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${periskopBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
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

export default PlaytSubpage; 