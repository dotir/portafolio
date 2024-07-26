import React from 'react';

const ProjectCard = ({ project }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
    <p>{project.description}</p>
    {/* <a href={project.repositorio} className="text-blue-500 mt-4 block">Ver Repositorio</a> */}
  </div>
);

export default ProjectCard;