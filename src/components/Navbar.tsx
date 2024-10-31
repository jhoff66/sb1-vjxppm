import React, { useState, useEffect } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-zinc-900/95 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Building2 className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-2xl font-bold text-white">BPMmix</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-zinc-300 hover:text-orange-500 transition-colors">Início</a>
            <a href="#projetos" className="text-zinc-300 hover:text-orange-500 transition-colors">Projetos</a>
            <a href="#depoimentos" className="text-zinc-300 hover:text-orange-500 transition-colors">Depoimentos</a>
            <a href="#contato" className="text-zinc-300 hover:text-orange-500 transition-colors">Contato</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#inicio" className="block px-3 py-2 text-white hover:bg-orange-500 rounded-md">Início</a>
              <a href="#projetos" className="block px-3 py-2 text-white hover:bg-orange-500 rounded-md">Projetos</a>
              <a href="#depoimentos" className="block px-3 py-2 text-white hover:bg-orange-500 rounded-md">Depoimentos</a>
              <a href="#contato" className="block px-3 py-2 text-white hover:bg-orange-500 rounded-md">Contato</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;