import React from 'react';
import { FaReact,FaAngular , FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaJava, FaVuejs,FaPhp,FaBootstrap  } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql,SiPostgresql,SiNuxtdotjs,SiDjango,SiFlutter  } from "react-icons/si";

const technologies = {
  frontend: [
    { name: 'JavaScript', icon: <FaJsSquare size={48} className="text-yellow-500" />, level: 'Intermedio' },
    { name: 'React', icon: <FaReact size={48} className="text-blue-500" />, level: 'Intermedio' },
    // angular
    { name: 'Angular', icon: <FaAngular size={48} className="text-red-600" />, level: 'Intermedio' },
    { name: 'HTML5', icon: <FaHtml5 size={48} className="text-orange-600" />, level: 'Intermedio' },
    { name: 'Tailwind CSS', icon: <RiTailwindCssFill size={48} className="text-blue-400" />, level: 'Intermedio' },
    { name: 'Vue.js', icon: <FaVuejs size={48} className="text-green-700" />, level: 'Intermedio' },
    { name: 'CSS', icon: <FaCss3Alt size={48} className="text-blue-500" />, level: 'Intermedio' },
    { name: 'Bootstrap', icon: <FaBootstrap size={48} className="text-purple-700" />, level: 'Intermedio' },
    { name: 'Nuxt.js', icon: <SiNuxtdotjs size={48} className="text-green-500" />, level: 'Básico' },
    { name: 'Django', icon: <SiDjango size={48} className="text-green-500" />, level: 'Básico' },
    //flutter
    { name: 'Flutter', icon: <SiFlutter size={48} className="text-blue-400" />, level: 'Básico' },
  ],
  backend: [
    { name: 'Node.js', icon: <FaNodeJs size={48} className="text-green-500" />, level: 'Intermedio' },
    { name: 'Java', icon: <FaJava size={48} className="text-blue-400" />, level: 'Intermedio' },
    { name: 'Python', icon: <FaPython size={48} className="text-blue-400" />, level: 'Intermedio' },
    { name: 'Odoo', icon: <FaPython size={48} className="text-amber-600" />, level: 'Intermedio' },
    { name: 'MySQL', icon: <SiMysql size={48} className="text-blue-400" />, level: 'Intermedio' },
    { name: 'PostgreSQL', icon: <SiPostgresql size={48} className="text-blue-400" />, level: 'Intermedio' },
    { name: 'PHP', icon: <FaPhp size={48} className="text-blue-400" />, level: 'Básico' },
  ]
};

const TechnologyCard = ({ title, technologies }) => (
<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
<h3 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">{title}</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
      {technologies.map((tech, index) => (
        <div key={index} className="flex flex-col items-center">
          {tech.icon}
<span className="mt-2 text-lg font-semibold text-gray-800 dark:text-gray-200">{tech.name}</span>
          <span className={`mt-1 px-3 py-1 rounded-full text-sm ${
            tech.level === 'Avanzado' ? 'bg-green-100 text-green-800' :
            tech.level === 'Intermedio' ? 'bg-blue-100 text-blue-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {tech.level}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const Languages = () => (
  <section id="languages" className="container mx-auto p-8">
    <h2 className="text-4xl font-bold text-center mb-8">Tecnologías</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <TechnologyCard title="Frontend" technologies={technologies.frontend} />
      <TechnologyCard title="Backend" technologies={technologies.backend} />
    </div>
  </section>
);

export default Languages;
