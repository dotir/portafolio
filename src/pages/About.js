import React from 'react';
import { FaGraduationCap, FaMapMarkerAlt, FaCode, FaLaptopCode, FaTrophy, FaExternalLinkAlt } from 'react-icons/fa';

const About = () => (
<section id="about" className="bg-white dark:bg-gray-900 py-16">
    <div className="container mx-auto px-4">
<h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">Sobre mí</h2>
        <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
                <div className="text-lg">
                    <p className="mb-4 text-gray-800 dark:text-gray-200">
                        Soy desarrollador de software con experiencia en sistemas empresariales, desarrollo web y soporte de sistemas. He trabajado en personalización de módulos Odoo, facturación electrónica integrada con SUNAT, desarrollo frontend con React y Vue.js, y backend con Python/Django.
                    </p>
                    <p className="mb-4 text-gray-800 dark:text-gray-200">
                        Me enfoco en crear soluciones funcionales, mantenibles y orientadas a optimizar procesos empresariales.
                    </p>
                </div>

                {/* Detalles personales */}
                <div className="space-y-4">
                    <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                            <FaGraduationCap className="text-blue-600 text-xl" />
<span className="dark:text-gray-200">Full Stack - Egg Live</span>
                        </div>
                        <div className="flex items-center space-x-3 pl-7">
<span className="text-sm text-gray-600 dark:text-gray-200">Febrero 2024 - Diciembre 2024</span>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                            <FaGraduationCap className="text-blue-600 text-xl" />
<span className="dark:text-gray-200">Ingeniería de Sistemas - Universidad Tecnológica del Perú</span>
                        </div>
                        <div className="flex items-center space-x-3 pl-7">
<span className="text-sm text-gray-600 dark:text-gray-200">Agosto 2017 - Agosto 2023</span>
                        </div>
                    </div>
                    
                    <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                            <FaGraduationCap className="text-blue-600 text-xl" />
<span className="dark:text-gray-200">Computación e Informática - Instituto del Sur</span>
                        </div>
                        <div className="flex items-center space-x-3 pl-7">
<span className="text-sm text-gray-600 dark:text-gray-200">Mayo 2013 - Diciembre 2016</span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3">
                        <FaMapMarkerAlt className="text-blue-600 text-xl" />
<span className="dark:text-gray-200">Arequipa, Perú</span>
                    </div>
                </div>

                {/* Reconocimientos */}
                <div className="border-t dark:border-gray-700 pt-4">
<h3 className="text-xl font-semibold mb-3 dark:text-gray-200">Reconocimientos</h3>
                    <div className="flex items-start space-x-3">
                        <FaTrophy className="text-yellow-500 text-xl mt-1 flex-shrink-0" />
                        <div>
<p className="dark:text-gray-200 font-medium">1er puesto — Hackathon UTP · El Comercio (2021)</p>
<p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                Con el equipo Atipax desarrollamos ÑanSuyai, una app vinculada a una pulsera inteligente para enviar alertas de emergencia ante situaciones de violencia de género, con soporte en español y quechua. Ganamos el primer lugar entre 17 equipos en una jornada de 48 horas.
                            </p>
                            <a
                                href="https://www.utp.edu.pe/noticias/sites/default/files/documentos/2021-12/BoletinUTPChiclayoDiciembre.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-1 text-sm text-blue-600 hover:underline mt-1"
                            >
                                <span>Ver publicación oficial de la UTP</span>
                                <FaExternalLinkAlt className="text-xs" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Intereses */}
                <div className="border-t dark:border-gray-700 pt-4">
<h3 className="text-xl font-semibold mb-3 dark:text-gray-200">Intereses</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                            <FaCode className="text-blue-600" />
<span className="dark:text-gray-200">Desarrollo Web</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaLaptopCode className="text-blue-600" />
<span className="dark:text-gray-200">Nuevas Tecnologías</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
);

export default About;
