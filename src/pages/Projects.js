import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
    {
        title: 'Módulo de Facturación y Guía de Remisión - Odoo 17',
        description: 'Desarrollo de módulo para actualizar facturación electrónica y guías de remisión del sistema nativo de Odoo v17, implementado como parte del back office empresarial',
        image: '/proyectoodoo1.png',
        technologies: ['Odoo 17', 'Python', 'XML', 'JavaScript', 'PostgreSQL']
    },
    {
        title: 'Sistema de Gestión de Incidencias',
        description: 'Aplicación móvil y backend para registrar, gestionar y dar seguimiento a incidencias. Incluye API REST, autenticación y documentación con Swagger.',
        image: 'https://opengraph.githubassets.com/portfolio-incidencias/dotir/SistemaIncidencias',
        links: [
            {
                label: 'Ver repositorio frontend de Sistema de Incidencias',
                href: 'https://github.com/dotir/SistemaIncidencias',
                type: 'repo',
            },
            {
                label: 'Ver repositorio backend de Sistema de Incidencias',
                href: 'https://github.com/dotir/SistemaIncidenciasBackEnd',
                type: 'repo',
            },
        ],
        technologies: ['React Native', 'Expo', 'NestJS', 'TypeScript', 'Prisma', 'Swagger']
    },
    {
        title: 'Sistema de Reconocimiento Facial',
        description: 'Sistema de reconocimiento facial para la toma de asistencia y evaluaciones utilizando FaceAPI.',
        image: '/project1.png',
        repositorio: 'https://github.com/dotir/Reconocimientov2',
        demo: 'https://reconocimientov2.vercel.app/',
        technologies: ['Angular', 'FaceAPI', 'TypeScript', 'Dockerfile']
    },
    {
        title: 'Aplicación de toma de asistencia por código QR',
        description: 'Aplicación en flutter para la toma de asistencia utilizando códigos QR',
        image: '/project4.jpg',
        technologies: ['Flutter', 'Dart',],
    },
    {
        title: 'Calculadora de Series de Fourier',
        description: 'Aplicación desarrollada en Python para calcular y graficar series de Fourier, orientada a cálculos matemáticos y visualización de resultados.',
        image: 'https://opengraph.githubassets.com/portfolio-fourier/dotir/CalculatorFourier',
        repositorio: 'https://github.com/dotir/CalculatorFourier',
        technologies: ['Python', 'Flet', 'Matplotlib']
    },
    {
        title: 'Bot de Música para Discord',
        description: 'Bot desarrollado en Python con reproducción de música en canales de voz e integración de chatbot para conversaciones interactivas.',
        image: '/project3.jpg',
        repositorio: 'https://github.com/dotir/BotMusic_Olympus',
        technologies: ['Python', 'discord.py', 'Docker']
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
