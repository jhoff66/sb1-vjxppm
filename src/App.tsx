import React from 'react';
import { Building2, Phone, MapPin, Clock, Users, CheckCircle2 } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Navbar />
      <Hero />
      <Projects />
      <Testimonials />
      <Contact />
      <footer className="bg-zinc-950 text-zinc-400 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-orange-500">BPMmix</h3>
              <p className="mt-2">Construindo sonhos em Sapopema</p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-orange-500 mr-2" />
                <span>Sapopema, PR</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-orange-500 mr-2" />
                <span>(43) 9999-9999</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-orange-500 mr-2" />
                <span>Seg - Sex: 8h às 18h</span>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            © 2024 BPMmix. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;