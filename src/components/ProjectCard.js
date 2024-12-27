import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
            <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-blue-600 opacity-0 hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex space-x-4">
                    <a 
                        href={project.repositorio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-200 transition-colors"
                    >
                        <FaGithub size={24} />
                    </a>
                    {project.demo !== '#' && (
                        <a 
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-200 transition-colors"
                        >
                            <FaExternalLinkAlt size={24} />
                        </a>
                    )}
                </div>
            </div>
        </div>
        
        <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                    <span 
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

export default ProjectCard;