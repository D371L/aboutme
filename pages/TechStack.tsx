import React from 'react';
import { TECH_STACK } from '../constants';
import { Terminal } from 'lucide-react';

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

const TechStack: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-10">
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
  );
};

export default TechStack;

