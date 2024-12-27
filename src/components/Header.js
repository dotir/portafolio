import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className={`font-bold text-xl transition-colors duration-300 ${
            scrolled ? 'text-blue-600' : 'text-white'
          }`}>
            Irving<span className={scrolled ? 'text-gray-800' : 'text-blue-200'}>.dev</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {[
                { name: 'Inicio', path: '/' },
                { name: 'Sobre mi', path: '#about' },
                { name: 'Lenguajes', path: '#languages' },
                { name: 'Proyectos', path: '#projects' },
                { name: 'Experiencia', path: '#experience' }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className={`transition-colors duration-300 hover:text-blue-400 ${
                      scrolled ? 'text-gray-700' : 'text-white'
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleNav}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none"
            >
              {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transform transition-transform duration-300 ease-in-out ${
          navOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } absolute top-16 left-0 right-0 bg-white shadow-lg`}>
          <ul className="flex flex-col p-4">
            {[
              { name: 'Inicio', path: '/' },
              { name: 'Sobre mi', path: '#about' },
              { name: 'Lenguajes', path: '#languages' },
              { name: 'Proyectos', path: '#projects' },
              { name: 'Experiencia', path: '#experience' }
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  className="block py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4 rounded transition-colors"
                  onClick={toggleNav}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;