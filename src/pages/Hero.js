import React from 'react';
import { FaGithub, FaLinkedin, FaArrowDown, FaCode,FaFacebook } from 'react-icons/fa';

const Hero = () => (
  <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white min-h-screen flex items-center justify-center relative">
    <div className="container mx-auto px-4">
      {/* Centered Content */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <h2 className="text-xl mb-2">👋 Bienvenido a mi portafolio</h2>
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">
          Hola, Soy Irving Llerena
        </h1>
        <p className="text-2xl mb-8">
          Full Stack Developer
          <span className="block text-blue-200 text-xl mt-2">
            Apasionado por crear soluciones web innovadoras
          </span>
        </p>
        
        {/* Buttons */}
        <div className="space-x-4">
          <a 
            href="https://wa.me/+51980252537" 
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold inline-block hover:bg-blue-100 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contáctame
          </a>
          <a 
            href="#projects"
            className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold inline-block hover:bg-white hover:text-blue-600 transition-colors"
          >
            Ver Proyectos
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mt-8">
          <a 
            href="https://github.com/dotir" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-200 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/irving-hector-llerena-bejarano-4b90aa210/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-200 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          {/* facebook */}
          <a 
            href="https://www.facebook.com/Irvingll9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-200 transition-colors"
          >
            <FaFacebook size={24} />
          </a>
        </div>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <a href="#about" className="text-white">
        <FaArrowDown size={24} />
      </a>
    </div>
  </section>
);

export default Hero;
