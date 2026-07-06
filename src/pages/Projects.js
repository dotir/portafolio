import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
    {
        title: 'Módulo de Facturación y Guía de Remisión - Odoo 17',
        description: 'Desarrollo de módulo para actualizar facturación electrónica y guías de remisión del sistema nativo de Odoo v17, implementado como parte del back office empresarial',
        image: '/proyectoodoo1.png',
        technologies: ['Odoo 17', 'Python', 'XML', 'JavaScript', 'PostgreSQL'],
        caseStudy: {
            problema: 'La facturación electrónica y las guías de remisión nativas de Odoo 17 no cubrían los requisitos de SUNAT para la operación diaria del back office de la empresa.',
            solucion: 'Desarrollé un módulo personalizado en Python y XML que extiende el flujo nativo de Odoo para emitir comprobantes y guías de remisión electrónicas conforme a la normativa de SUNAT, con validaciones y seguimiento del estado de envío.',
            resultado: 'El área contable emite comprobantes válidos ante SUNAT directamente desde Odoo, sin depender de procesos manuales ni sistemas externos.',
        },
    },
    {
        title: 'Sistema de Reconocimiento Facial',
        description: 'Sistema de reconocimiento facial para la toma de asistencia y evaluaciones utilizando FaceAPI.',
        image: '/project1.png',
        repositorio: 'https://github.com/dotir/Reconocimientov2',
        demo: 'https://reconocimientov2.vercel.app/',
        technologies: ['Angular', 'FaceAPI', 'TypeScript', 'Dockerfile'],
        caseStudy: {
            problema: 'La toma de asistencia manual en clases y evaluaciones era lenta y vulnerable a suplantación de identidad.',
            solucion: 'Construí una aplicación web en Angular con FaceAPI que identifica a cada persona por reconocimiento facial en tiempo real y registra su asistencia, empaquetada con Docker para su despliegue.',
            resultado: 'La asistencia se registra en segundos desde una cámara web, con una demo pública desplegada en Vercel.',
        },
    },
    {
        title: 'Aplicación de toma de asistencia por código QR',
        description: 'Aplicación en flutter para la toma de asistencia utilizando códigos QR',
        image: '/project4.jpg',
        technologies: ['Flutter', 'Dart',],
        caseStudy: {
            problema: 'El registro de asistencia en aula dependía de listas en papel, un proceso lento y propenso a errores de transcripción.',
            solucion: 'Desarrollé una aplicación móvil en Flutter que escanea códigos QR generados por sesión para registrar la asistencia de cada participante.',
            resultado: 'El registro de asistencia pasó a ser instantáneo y centralizado, directamente desde el celular.',
        },
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
