import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleNav = () => setNavOpen(!navOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white dark:bg-gray-800 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className={`font-bold text-xl transition-colors duration-300 ${
            scrolled ? 'text-blue-600 dark:text-blue-400' : 'text-white'
          }`}>
            Irving<span className={scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-blue-200'}>.dev</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Inicio', path: '/' },
              { name: 'Sobre mi', path: '#about' },
              { name: 'Lenguajes', path: '#languages' },
              { name: 'Proyectos', path: '#projects' },
              { name: 'Experiencia', path: '#experience' }
            ].map((item) => (
              <a
                key={item.name}
                href={item.path}
                className={`transition-colors duration-300 hover:text-blue-400 ${
                  scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
                }`}
              >
                {item.name}
              </a>
            ))}

            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                scrolled 
                  ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700' 
                  : 'text-white hover:text-blue-200'
              }`}
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu and Dark Mode Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                scrolled 
                  ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700' 
                  : 'text-white hover:text-blue-200'
              }`}
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <button 
              onClick={toggleNav}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                scrolled 
                  ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700' 
                  : 'text-white hover:text-blue-200'
              }`}
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