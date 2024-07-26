import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
  
    const toggleNav = () => {
      setNavOpen(!navOpen);
    };
  
    return (
      <header className="bg-white shadow-md">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Mi Portafolio</div>
          <nav className="hidden md:flex space-x-4">
            <ul className="flex space-x-4">
              <li><Link to="/" className="text-gray-800 hover:text-blue-600">Inicio</Link></li>
              <li><a href="#about" className="text-gray-800 hover:text-blue-600">Sobre mi</a></li>
              <li><a href="#languages" className="text-gray-800 hover:text-blue-600">Lenguajes</a></li>
              <li><a href="#projects" className="text-gray-800 hover:text-blue-600">Proyectos</a></li>
              <li><a href="#experience" className="text-gray-800 hover:text-blue-600">Experiencia</a></li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleNav} className="text-gray-800 focus:outline-none">
              {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        <div className={`md:hidden ${navOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col space-y-2 p-4 bg-gray-100">
            <li><Link to="/" className="text-gray-800 hover:text-blue-600" onClick={toggleNav}>Inicio</Link></li>
            <li><a href="#about" className="text-gray-800 hover:text-blue-600" onClick={toggleNav}>Sobre mi</a></li>
            <li><a href="#languages" className="text-gray-800 hover:text-blue-600" onClick={toggleNav}>Lenguajes</a></li>
            <li><a href="#projects" className="text-gray-800 hover:text-blue-600" onClick={toggleNav}>Proyectos</a></li>
            <li><a href="#experience" className="text-gray-800 hover:text-blue-600" onClick={toggleNav}>Experiencia</a></li>
          </ul>
        </div>
      </header>
    );
  };

export default Header;