import React from 'react';
import ellipseImage from '/assets/Ellipse.png';

const ConcentricCircles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {/* First (largest) circle */}
      <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
        <img 
          src={ellipseImage} 
          alt="Concentric Circle 1" 
          className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] opacity-20"
        />
      </div>
      
      {/* Second (medium) circle */}
      <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
        <img 
          src={ellipseImage} 
          alt="Concentric Circle 2" 
          className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] opacity-20"
        />
      </div>
      
      {/* Third (smallest) circle - 30% smaller */}
      <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
        <img 
          src={ellipseImage} 
          alt="Concentric Circle 3" 
          className="w-[144px] h-[144px] md:w-[216px] md:h-[216px] lg:w-[288px] lg:h-[288px] opacity-20"
        />
      </div>
    </div>
  );
};

export default ConcentricCircles; 