import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-zinc-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Entre em <span className="text-orange-500">Contato</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h3 className="text-white font-semibold text-lg">Localização</h3>
                <p className="text-zinc-300">Sapopema, PR</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h3 className="text-white font-semibold text-lg">Telefone</h3>
                <p className="text-zinc-300">(43) 9999-9999</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h3 className="text-white font-semibold text-lg">Email</h3>
                <p className="text-zinc-300">contato@bpmmix.com.br</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h3 className="text-white font-semibold text-lg">Horário</h3>
                <p className="text-zinc-300">Segunda a Sexta: 8h às 18h</p>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full px-4 py-3 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Seu email"
                className="w-full px-4 py-3 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Sua mensagem"
                className="w-full px-4 py-3 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;