import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&q=80"
          alt="Modern construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 to-zinc-900/70" />
      </div>
      
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Construindo o
          <span className="text-orange-500"> Futuro</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-300 mb-12 max-w-2xl mx-auto">
          Transformando sonhos em realidade com excelência em construção civil em Sapopema
        </p>
        <a
          href="#projetos"
          className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors"
        >
          Conheça Nossos Projetos
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white" />
      </div>
    </section>
  );
};

export default Hero;