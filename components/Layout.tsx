import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Twitter, Skull, Flame, Book, Terminal } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-hell-black text-gray-300 font-terminal relative overflow-hidden selection:bg-term-purple selection:text-white bg-grid bg-[length:40px_40px]">
      
      {/* Side Terminal Nav */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-full w-64 flex-col justify-between py-8 px-6 border-r border-white/10 z-40 bg-hell-black/95 backdrop-blur-sm">
        <div className="text-xl tracking-widest border-b border-white/10 pb-4">
          <Link to="/" className="flex items-center">
            <span className="text-term-green">root</span>
            <span className="text-white">@</span>
            <span className="text-term-purple">D371L</span>
            <span className="text-white">:</span>
            <span className="text-term-blue">~</span>
            <span className="text-white animate-blink">#</span>
          </Link>
        </div>
        
        <div className="flex flex-col gap-4 text-xl">
          <Link 
            to="/" 
            className={`flex items-center gap-2 transition-colors group p-2 rounded hover:bg-white/5 ${
              isActive('/') ? 'text-term-cyan' : 'hover:text-term-cyan'
            }`}
          >
             <span className={`${isActive('/') ? 'text-term-cyan' : 'text-term-cyan opacity-50 group-hover:opacity-100'} font-bold`}>./</span> HOME
          </Link>
          <Link 
            to="/experience" 
            className={`flex items-center gap-2 transition-colors group p-2 rounded hover:bg-white/5 ${
              isActive('/experience') ? 'text-term-green' : 'hover:text-term-green'
            }`}
          >
             <span className={`${isActive('/experience') ? 'text-term-green' : 'text-term-green opacity-50 group-hover:opacity-100'} font-bold`}>./</span> EXPERIENCE
          </Link>
          <Link 
            to="/scriptures" 
            className={`flex items-center gap-2 transition-colors group p-2 rounded hover:bg-white/5 ${
              isActive('/scriptures') ? 'text-term-yellow' : 'hover:text-term-yellow'
            }`}
          >
             <span className={`${isActive('/scriptures') ? 'text-term-yellow' : 'text-term-yellow opacity-50 group-hover:opacity-100'} font-bold`}>./</span> SCRIPTURES
          </Link>
          <Link 
            to="/techstack" 
            className={`flex items-center gap-2 transition-colors group p-2 rounded hover:bg-white/5 ${
              isActive('/techstack') ? 'text-term-purple' : 'hover:text-term-purple'
            }`}
          >
             <span className={`${isActive('/techstack') ? 'text-term-purple' : 'text-term-purple opacity-50 group-hover:opacity-100'} font-bold`}>./</span> TECH_STACK
          </Link>
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
        {children}
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

export default Layout;

