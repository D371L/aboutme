import React from 'react';

interface GlitchHeaderProps {
  text: string;
}

const GlitchHeader: React.FC<GlitchHeaderProps> = ({ text }) => {
  return (
    <div className="relative inline-block select-none py-4">
      {/* Main Text Gradient */}
      <h1 className="text-7xl md:text-[9rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-term-purple via-term-cyan to-term-yellow relative z-10 leading-none tracking-tight animate-pulse drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]">
        {text}
      </h1>
      
      {/* Cyan Ghost */}
      <h1 className="absolute top-0 left-1 text-7xl md:text-[9rem] text-term-cyan blur-[2px] z-0 leading-none opacity-60 mix-blend-screen tracking-tight animate-glitch clip-text">
        {text}
      </h1>
      
      {/* Purple Ghost */}
      <h1 className="absolute top-0 -left-1 text-7xl md:text-[9rem] text-term-purple blur-[2px] z-0 leading-none opacity-60 mix-blend-screen tracking-tight animate-glitch delay-75">
        {text}
      </h1>
    </div>
  );
};

export default GlitchHeader;