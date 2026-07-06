import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const getProjectLinks = (project) => {
    if (project.links) {
        return project.links;
    }

    return [
        project.repositorio && {
            label: `Ver repositorio de ${project.title}`,
            href: project.repositorio,
            type: 'repo',
        },
        project.demo && project.demo !== '#' && {
            label: `Ver demo de ${project.title}`,
            href: project.demo,
            type: 'demo',
        },
    ].filter(Boolean);
};

const ProjectCard = ({ project }) => {
    const links = getProjectLinks(project);
    const [caseOpen, setCaseOpen] = useState(false);

    return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
            <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-blue-600 opacity-0 hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex space-x-4">
                    {links.map((link) => (
                        <a 
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                            title={link.label}
                            className="text-white hover:text-blue-200 transition-colors"
                        >
                            {link.type === 'demo' ? <FaExternalLinkAlt size={24} /> : <FaGithub size={24} />}
                        </a>
                    ))}
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

            {project.caseStudy && (
                <div className="mt-4">
                    <button
                        onClick={() => setCaseOpen(!caseOpen)}
                        aria-expanded={caseOpen}
                        className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold hover:text-blue-800 transition-colors"
                    >
                        {caseOpen ? 'Ver menos' : 'Ver caso de estudio'}
                        {caseOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                    </button>
                    {caseOpen && (
                        <dl className="mt-3 space-y-3 text-sm border-t pt-3">
                            <div>
                                <dt className="font-semibold text-gray-800">Problema</dt>
                                <dd className="text-gray-600">{project.caseStudy.problema}</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-gray-800">Solución</dt>
                                <dd className="text-gray-600">{project.caseStudy.solucion}</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-gray-800">Resultado</dt>
                                <dd className="text-gray-600">{project.caseStudy.resultado}</dd>
                            </div>
                        </dl>
                    )}
                </div>
            )}
        </div>
    </div>
    );
};

export default ProjectCard;
