import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter,FaFacebook } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gray-800 text-white text-center p-4">
    <div className="container mx-auto">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://github.com/dotir" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/irving-hector-llerena-bejarano-4b90aa210/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.facebook.com/Irvingll9" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <FaFacebook size={24} />
        </a>
      </div>
      <p>© 2024 Irving Llerena. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;
