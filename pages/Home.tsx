import React from 'react';
import GlitchHeader from '../components/GlitchHeader';
import { HERO_TITLE, HERO_SUBTITLE, MANIFESTO_TEXT } from '../constants';
import { Skull } from 'lucide-react';

const SectionHeader = ({ title, icon: Icon, id, colorClass = "text-ember-red", borderClass = "border-ember-red" }: { title: string, icon: any, id: string, colorClass?: string, borderClass?: string }) => (
  <div className={`flex flex-col items-start justify-center gap-2 mb-12 w-full border-b ${borderClass}/30 pb-4`}>
     <div className={`flex items-center gap-3 ${colorClass} animate-pulse`}>
        <Icon size={24} />
        <span className="text-xl tracking-widest uppercase">./{id}.exe</span>
     </div>
     <h2 className={`text-4xl md:text-5xl text-white bg-${borderClass.split('-')[1]}/5 px-2 py-1 uppercase tracking-widest border-l-4 ${borderClass}`}>
       {title}
     </h2>
  </div>
);

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative border-b border-white/5">
        <div className="absolute top-6 right-6 flex flex-col items-end text-xs md:text-sm font-mono space-y-1">
           <div className="flex gap-4">
              <span className="text-gray-500">PROTOCOL:</span>
              <span className="text-term-purple">INFERNO_V2</span>
           </div>
           <div className="flex gap-4">
              <span className="text-gray-500">PORT:</span>
              <span className="text-term-cyan">666</span>
           </div>
           <div className="flex gap-4">
              <span className="text-gray-500">STATUS:</span>
              <span className="text-term-green">UNSTABLE</span>
           </div>
        </div>

        <div className="mb-8 border border-term-yellow text-term-yellow px-4 py-1 tracking-[0.5em] text-lg uppercase bg-term-yellow/5 animate-pulse">
          ROOT ACCESS GRANTED
        </div>
        
        <GlitchHeader text={HERO_TITLE} />
        
        <div className="mt-8 text-xl md:text-2xl text-white max-w-lg leading-relaxed whitespace-pre-line border-l-4 border-term-purple pl-6 text-left bg-gradient-to-r from-term-purple/10 to-transparent p-4 w-full md:w-auto rounded-r-lg">
          <span className="text-term-green mr-2">➜</span>
          {HERO_SUBTITLE}
          <span className="animate-blink inline-block w-3 h-6 bg-term-green ml-1 align-middle"></span>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm tracking-widest font-bold">
           <div className="border border-ember-red text-ember-red px-6 py-3 hover:bg-ember-red hover:text-white transition-all cursor-pointer shadow-[0_0_10px_rgba(255,0,51,0.2)] hover:shadow-[0_0_20px_rgba(255,0,51,0.6)]">
              HELL_MODE
           </div>
           <div className="border border-term-cyan text-term-cyan px-6 py-3 hover:bg-term-cyan hover:text-black transition-all cursor-pointer shadow-[0_0_10px_rgba(0,243,255,0.2)] hover:shadow-[0_0_20px_rgba(0,243,255,0.6)]">
              CHAOS_ENGINE
           </div>
           <div className="border border-term-purple text-term-purple px-6 py-3 hover:bg-term-purple hover:text-white transition-all cursor-pointer shadow-[0_0_10px_rgba(189,0,255,0.2)] hover:shadow-[0_0_20px_rgba(189,0,255,0.6)]">
              MEMENTO_MORI
           </div>
           <div className="border border-term-green text-term-green px-6 py-3 hover:bg-term-green hover:text-black transition-all cursor-pointer shadow-[0_0_10px_rgba(0,255,65,0.2)] hover:shadow-[0_0_20px_rgba(0,255,65,0.6)]">
              INFERNO_OS
           </div>
        </div>
      </header>

      {/* Section 1: MANIFESTO (Cyan Theme) */}
      <section id="manifesto" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-b border-white/5 scroll-mt-10">
         <SectionHeader title="Manifesto" icon={Skull} id="manifesto" colorClass="text-term-cyan" borderClass="border-term-cyan" />

         <div className="relative p-6 md:p-10 border border-term-cyan/30 bg-hell-dark/80 shadow-[0_0_20px_rgba(0,243,255,0.05)]">
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-term-cyan"></div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-term-cyan"></div>
            
            <div className="text-xl md:text-2xl leading-relaxed text-gray-300 space-y-6 text-left font-terminal">
               {MANIFESTO_TEXT.map((paragraph, i) => (
                 <p key={i}>
                   <span className="text-term-cyan/50 mr-2">{`[LOG_${i}]:`}</span>
                   <span className="text-term-cyan mr-2">{">>"}</span>
                   {paragraph}
                 </p>
               ))}
            </div>
         </div>
      </section>
    </>
  );
};

export default Home;

