import React from 'react';
import { FaBriefcase, FaCalendar, FaBuilding } from 'react-icons/fa';

const experiences = [
  {
    title: 'Desarrollo de Software',
    company: 'Veox',
    location: 'Arequipa, Perú',
    duration: 'Oct 2022 - Ene 2023',
    description: 'Desarrollo de aplicaciones web utilizando tecnologías modernas.',
    responsibilities: [
      'Desarrollo de aplicaciones web con Angular y React',
      'Implementación de APIs RESTful con Node.js',
      'Trabajo en equipo usando metodologías ágiles',
      'Mantenimiento y mejora de aplicaciones existentes'
    ]
  },
  {
    title: 'Soporte Técnico',
    company: 'Ugel La Joya',
    location: 'Arequipa, Perú',
    duration: 'Ene 2017 - Jul 2017',
    description: 'Soporte técnico y mantenimiento de sistemas informáticos.',
    responsibilities: [
      'Mantenimiento de equipos de cómputo',
      'Soporte técnico a usuarios',
      'Administración de redes',
      'Implementación de soluciones tecnológicas'
    ]
  }
];

const Experience = () => (
  <section id="experience" className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Mi Experiencia</h2>
      <div className="max-w-4xl mx-auto">
        {experiences.map((experience, index) => (
          <div key={index} className="relative mb-8 transform hover:scale-102 transition-transform duration-200">
            {/* Timeline line */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-blue-200" />
            )}
            
            <div className="bg-white rounded-xl shadow-lg p-6 ml-16">
              <div className="absolute left-0 top-6 bg-blue-500 rounded-full p-3">
                <FaBriefcase className="text-white text-xl" />
              </div>
              
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-800">{experience.title}</h3>
                <div className="flex items-center space-x-2 text-gray-600 mt-2">
                  <FaBuilding />
                  <span>{experience.company}</span>
                  <span>•</span>
                  <span>{experience.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500 mt-1">
                  <FaCalendar />
                  <span>{experience.duration}</span>
                </div>
              </div>
              
              {/* <p className="text-gray-600 mb-4">{experience.description}</p> */}
              
              {/* <div className="space-y-2">
                <h4 className="font-semibold text-gray-700">Responsabilidades principales:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
