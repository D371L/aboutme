import React from 'react';
import { Project } from '../types';
import { ArrowRight, Binary } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  // Cycle through themes based on index
  const themes = [
    { main: 'term-green', border: 'border-term-green', text: 'text-term-green', bg: 'bg-term-green' },
    { main: 'term-cyan', border: 'border-term-cyan', text: 'text-term-cyan', bg: 'bg-term-cyan' },
    { main: 'term-purple', border: 'border-term-purple', text: 'text-term-purple', bg: 'bg-term-purple' },
    { main: 'term-blue', border: 'border-term-blue', text: 'text-term-blue', bg: 'bg-term-blue' },
  ];
  const theme = themes[index % themes.length];

  return (
    <div className={`border ${theme.border} bg-hell-black p-1 relative hover:bg-white/5 transition-colors group shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
      {/* Top Bar Decoration */}
      <div className={`absolute top-0 left-0 w-full h-1 ${theme.bg}/20`}></div>
      <div className={`absolute top-0 left-0 w-[100px] h-1 ${theme.bg}`}></div>

      <div className="flex flex-col lg:flex-row gap-8 p-6">
        
        {/* Visual Data Block */}
        <div className={`w-full lg:w-1/3 relative border border-white/20 overflow-hidden h-64 group-hover:${theme.border} transition-colors`}>
           {/* Color Filter on Image */}
           <div className={`absolute inset-0 ${theme.bg}/10 z-10 mix-blend-overlay pointer-events-none`}></div>
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20 z-20 pointer-events-none"></div>
           
           <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
          />
          
          <div className={`absolute bottom-2 right-2 bg-black border ${theme.border} ${theme.text} text-xs px-2 py-0.5 z-30 font-bold`}>
            IMG_REF_{project.id}
          </div>
        </div>

        {/* Text Data Block */}
        <div className="w-full lg:w-2/3 flex flex-col justify-between">
           <div>
              <div className="flex items-center gap-4 mb-4 border-b border-white/10 pb-2">
                 <span className="text-3xl font-bold text-white tracking-wider">{project.title}</span>
                 <span className={`text-sm ml-auto ${theme.text}`}>UID: 0x00{project.id}F</span>
              </div>

              <div className="text-lg text-gray-300 font-terminal leading-relaxed mb-6">
                 <span className={`${theme.text} mr-2`}>$</span>
                 {project.description}
              </div>

              <div className="mb-6">
                 <div className="text-xs text-gray-500 mb-2 uppercase font-bold">[ DEPENDENCIES ]</div>
                 <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span key={tech} className={`text-white border border-white/20 px-2 py-1 text-sm bg-white/5 uppercase hover:${theme.border} hover:${theme.text} transition-colors cursor-default`}>
                        {tech}
                      </span>
                    ))}
                 </div>
              </div>
           </div>

           <div className="flex justify-end">
             <a 
               href={project.link}
               target={project.link !== '#' ? "_blank" : undefined}
               rel={project.link !== '#' ? "noopener noreferrer" : undefined}
               className={`flex items-center gap-2 ${theme.bg} text-black px-6 py-2 hover:bg-white hover:text-black font-bold tracking-widest transition-all hover:scale-105`}
             >
               <Binary size={16} />
               <span>EXECUTE</span>
               <ArrowRight size={16} />
             </a>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;