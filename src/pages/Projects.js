import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        title: 'Sistema de Reconocimiento Facial',
        description: 'Sistema de reconocimiento del rostro para la toma de asistencia utilizando el api de Faceapi',
        image: '/project1.png',
        repositorio: 'https://github.com/dotir/Reconocimientov2',
        demo: '#',
        technologies: ['Angular', 'FaceAPI', 'TypeScript', 'Dockerfile']
    },
    {
        title: 'Sistema Almacenar Contraseñas',
        description: 'Extensión de Chrome para almacenar las contraseñas de redes sociales usando FaceApi',
        image: '/project2.png',
        repositorio: 'https://github.com/dotir/ProxExtension',
        demo: '#',
        technologies: ['Chrome Extension', 'FaceAPI', 'JavaScript']
    },
    {
        title: 'Aplicacion toma de asistencia por código QR',
        description: 'Aplicación en flutter para la toma de asistencia utilizando códigos QR',
        image: '/project4.jpg',
        technologies: ['Flutter', 'Dart',],
    },
    {
        title: 'Aplicacion anotar tareas',
        description: 'Aplicación en React.js para anotar tareas pendientes',
        image: '/project5.png',
        demo: 'https://to-do-list-azure-one.vercel.app/',
        technologies: ['React.js', 'JavaScript', 'CSS'],
    },
    // projecto juego tres en raya
    {
        title: 'Juego Tres en Raya',
        description: 'Juego de tres en raya desarrollado con React.js y Tailwind CSS',
        image: '/project6.png',
        demo: 'https://tic-tac-toe-psi-smoky.vercel.app/',
        technologies: ['React.js', 'Tailwind CSS', 'JavaScript'],
    },
];

const Projects = () => (
<section id="projects" className="bg-gray-100 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
<h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-gray-200">Mis Proyectos</h2>
<p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                Aquí hay una selección de los proyectos en los que he trabajado. 
                Cada uno representa diferentes desafíos y soluciones tecnológicas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    </section>
);

export default Projects;
