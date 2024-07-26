import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
    { title: 'Sistema de Reconocimiento Facial', description: 'Sistema de reconociento del rostro para la toma de asistencia utilizando el api de Faceapi',repositorio:'https://github.com/dotir/Reconocimientov2' },
    { title: 'Sistema Almacenar Contraseñas', description: 'Se creo una extension de chrome para almacenar las contraseñas de las redes sociales usando la api FaceApi', repositorio:'https://github.com/dotir/ProxExtension' },
    { title: 'Bot de Musica Discord', description: 'Codigo de un bot de musica que esta dockerisado.', repositorio:'https://github.com/dotir/BotMusic_Olympus'}
];

const Projects = () => (
    <section id="projects" className="bg-gray-100 p-8">
        <h2 className="text-4xl font-bold text-center mb-8">Mis Proyectos</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    </section>
);

export default Projects;