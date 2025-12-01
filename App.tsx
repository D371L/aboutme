import React from 'react';
import GlitchHeader from './components/GlitchHeader';
import ProjectCard from './components/ProjectCard';
import { PROJECTS, CERTIFICATIONS, TECH_STACK, HERO_TITLE, HERO_SUBTITLE, MANIFESTO_TEXT, EXPERIENCE_TEXT, SCRIPTURES_TEXT } from './constants';
import { Github, Twitter, Terminal, Shield, Book, FileCode, Skull, Flame } from 'lucide-react';

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

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-hell-black text-gray-300 font-terminal relative overflow-hidden selection:bg-term-purple selection:text-white bg-grid bg-[length:40px_40px]">
      
      {/* Side Terminal Nav */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-full w-64 flex-col justify-between py-8 px-6 border-r border-white/10 z-40 bg-hell-black/95 backdrop-blur-sm">
        <div className="text-xl tracking-widest border-b border-white/10 pb-4">
          <span className="text-term-green">root</span>
          <span className="text-white">@</span>
          <span className="text-term-purple">D371L</span>
          <span className="text-white">:</span>
          <span className="text-term-blue">~</span>
          <span className="text-white animate-blink">#</span>
        </div>
        
        <div className="flex flex-col gap-4 text-xl">
          <a href="#manifesto" className="flex items-center gap-2 hover:text-term-cyan transition-colors group p-2 rounded hover:bg-white/5">
             <span className="text-term-cyan opacity-50 group-hover:opacity-100 font-bold">./</span> MANIFESTO
          </a>
          <a href="#experience" className="flex items-center gap-2 hover:text-term-green transition-colors group p-2 rounded hover:bg-white/5">
             <span className="text-term-green opacity-50 group-hover:opacity-100 font-bold">./</span> EXPERIENCE
          </a>
          <a href="#scriptures" className="flex items-center gap-2 hover:text-term-yellow transition-colors group p-2 rounded hover:bg-white/5">
             <span className="text-term-yellow opacity-50 group-hover:opacity-100 font-bold">./</span> SCRIPTURES
          </a>
          <a href="#techstack" className="flex items-center gap-2 hover:text-term-purple transition-colors group p-2 rounded hover:bg-white/5">
             <span className="text-term-purple opacity-50 group-hover:opacity-100 font-bold">./</span> TECH_STACK
          </a>
        </div>

        <div className="text-xs font-mono space-y-2">
           <div className="flex justify-between">
             <span className="text-gray-500">MEM_USAGE:</span>
             <span className="text-term-green">666MB</span>
           </div>
           <div className="flex justify-between">
             <span className="text-gray-500">CPU_TEMP:</span>
             <span className="text-ember-red">99°C</span>
           </div>
           <div className="flex justify-between">
             <span className="text-gray-500">UPTIME:</span>
             <span className="text-term-blue">∞</span>
           </div>
           <div className="mt-4 border-t border-white/10 pt-2 text-center text-term-yellow animate-pulse">
             ⚠ SYSTEM_CRITICAL
           </div>
        </div>
      </nav>

      <main className="relative z-10 w-full lg:pl-64">
        
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
                     <span className="text-term-cyan mr-2">>></span>
                     {paragraph}
                   </p>
                 ))}
              </div>
           </div>
        </section>

        {/* Section 2: INFERNAL EXPERIENCE (Green Theme) */}
        <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/5 scroll-mt-10">
          <SectionHeader title="Infernal Experience" icon={Flame} id="experience" colorClass="text-term-green" borderClass="border-term-green" />
          
          <div className="bg-term-green/5 border-l-2 border-term-green p-4 mb-16 max-w-3xl rounded-r">
             <h4 className="text-term-green mb-2 uppercase tracking-widest text-sm font-bold">// SYSTEM_NARRATIVE</h4>
             <div className="text-xl text-gray-200 italic leading-relaxed whitespace-pre-line">
               {EXPERIENCE_TEXT.map((txt, i) => (
                 <p key={i}>{txt}</p>
               ))}
             </div>
          </div>

          <div className="space-y-20">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Section 3: DARK SCRIPTURES (Yellow Theme) */}
        <section id="scriptures" className="py-24 px-6 md:px-12 bg-hell-dark/50 relative border-y border-white/5 scroll-mt-10">
          <div className="max-w-7xl mx-auto">
             <SectionHeader title="Dark Scriptures" icon={Book} id="scriptures" colorClass="text-term-yellow" borderClass="border-term-yellow" />

             <div className="text-left max-w-2xl mb-12 text-lg text-term-yellow/80 whitespace-pre-line border border-term-yellow/30 border-dashed p-4 bg-term-yellow/5">
                {`/* ${SCRIPTURES_TEXT} */`}
             </div>
             
             <div className="grid md:grid-cols-3 gap-6">
                {CERTIFICATIONS.map((cert, idx) => (
                  <div key={idx} className="bg-hell-black border border-white/10 p-6 hover:border-term-yellow/50 hover:bg-term-yellow/5 transition-all group relative">
                     <div className="absolute top-2 right-2 text-gray-700 group-hover:text-term-yellow transition-colors">
                        {cert.icon === 'shield' ? <Shield size={24} /> : cert.icon === 'book' ? <Book size={24} /> : <FileCode size={24} />}
                     </div>
                     
                     <div className="text-xs text-term-yellow mb-4 uppercase tracking-widest border-b border-white/10 pb-2">
                        SEAL_0{idx + 1} // {cert.date}
                     </div>
                     
                     <h3 className="text-white text-2xl mb-2 group-hover:text-term-yellow transition-colors">{cert.title}</h3>
                     <div className="text-sm text-gray-500 mb-4">ISSUED_BY: <span className="text-white">{cert.issuer}</span></div>
                     <p className="text-gray-400 text-lg leading-tight">{cert.description}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* Section 4: CURSED TECHSTACK (Multi-Color Theme) */}
        <section id="techstack" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-10">
           <SectionHeader title="Cursed Techstack" icon={Terminal} id="techstack" colorClass="text-term-purple" borderClass="border-term-purple" />
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TECH_STACK.map((category, idx) => {
                 // Determine color based on category index or name for variety
                 const colors = [
                   { border: 'border-term-blue', text: 'text-term-blue', bg: 'bg-term-blue' },
                   { border: 'border-term-yellow', text: 'text-term-yellow', bg: 'bg-term-yellow' },
                   { border: 'border-ember-red', text: 'text-ember-red', bg: 'bg-ember-red' },
                   { border: 'border-term-purple', text: 'text-term-purple', bg: 'bg-term-purple' },
                 ];
                 const theme = colors[idx % colors.length];

                 return (
                   <div key={category.name} className={`border ${theme.border} bg-hell-black p-0 h-full`}>
                      <div className={`${theme.bg}/10 p-2 border-b ${theme.border} flex items-center gap-2`}>
                         <div className={`w-3 h-3 ${theme.bg} rounded-full animate-pulse`}></div>
                         <h3 className={`${theme.text} text-xl uppercase tracking-widest font-bold`}>
                           {category.name}
                         </h3>
                      </div>
                      <div className="p-4 flex flex-wrap gap-2">
                         {category.skills.map(skill => (
                            <span key={skill} className={`px-2 py-1 bg-white/5 text-base text-gray-300 border border-white/10 hover:${theme.border} hover:${theme.text} cursor-help transition-colors`}>
                               {skill}
                            </span>
                         ))}
                      </div>
                   </div>
                 );
              })}
           </div>
        </section>

      </main>

      <footer className="py-12 border-t border-white/10 bg-hell-black relative z-10 flex flex-col items-center gap-6">
        <div className="text-lg md:text-xl tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-term-green via-term-cyan to-term-purple uppercase animate-pulse border-y border-white/10 py-2 px-8">
           Bound by Code ⛧ Fueled by Chaos ⛧ Forged in Void
        </div>
        
        <div className="flex flex-col items-center gap-2 text-gray-500 text-sm font-mono">
           <p>D371L // SYSTEM_ID: <span className="text-term-yellow">MMXXV</span></p>
           <p>CONNECTION: <span className="text-term-green">SECURE</span></p>
        </div>
        
        <div className="flex justify-center gap-8 text-white/50">
           <div className="hover:text-term-purple transition-colors cursor-pointer transform hover:scale-110">
              <Github size={24} />
           </div>
           <div className="hover:text-term-cyan transition-colors cursor-pointer transform hover:scale-110">
              <Twitter size={24} />
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;