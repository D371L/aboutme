import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS, EXPERIENCE_TEXT } from '../constants';
import { Flame } from 'lucide-react';

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

const Experience: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/5 scroll-mt-10">
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
  );
};

export default Experience;

