import React from 'react';

const experiences = [
  {
    title: 'Desarrollo de Software',
    company: 'Veox',
    duration: 'Oct 2022 - Ene 2023',
  },
  {
    title: 'Soporte Técnico',
    company: 'Ugel La Joya',
    duration: 'Ene 2017 - Jul.2017'
  }
];

const Experience = () => (
  <section id="experience" className="container mx-auto p-8 bg-white shadow-2xl rounded-lg">
    <h2 className="text-4xl font-bold text-center mb-8">Mi Experiencia</h2>
    <div className="space-y-6">
      {experiences.map((experience, index) => (
        <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold">{experience.title}</h3>
          <p className="text-xl">{experience.company}</p>
          <p className="text-sm text-gray-600">{experience.duration}</p>
          <p className="mt-2">{experience.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
