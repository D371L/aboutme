import React from 'react';
import { CERTIFICATIONS, SCRIPTURES_TEXT } from '../constants';
import { Book, Shield, FileCode } from 'lucide-react';

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

const Scriptures: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-hell-dark/50 relative border-y border-white/5 scroll-mt-10">
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
  );
};

export default Scriptures;

