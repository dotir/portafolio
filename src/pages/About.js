import React from 'react';
import { FaGraduationCap, FaMapMarkerAlt, FaCode, FaLaptopCode } from 'react-icons/fa';

const About = () => (
<section id="about" className="container mx-auto p-8 bg-white dark:bg-gray-900">
<h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">Sobre mi</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Columna de imagen */}
            <div className="flex justify-center items-center">
                <img 
                    src="/fotoirving.jpg" 
                    alt="Irving Llerena" 
                    className="rounded-full w-64 h-64 object-cover shadow-lg"
                />
            </div>

            {/* Columna de información */}
            <div className="space-y-6">
                <div className="text-lg">
<p className="mb-4 text-gray-800 dark:text-gray-200">
                        Soy un desarrollador de software apasionado por crear aplicaciones web.
                        Tengo experiencia en diversas tecnologías y me encanta aprender cosas nuevas.
                    </p>
                    <p className="mb-4 text-gray-800 dark:text-gray-200">
                        Mi objetivo es crear soluciones innovadoras que ayuden a resolver problemas reales
                        y mejoren la experiencia del usuario.
                    </p>
                </div>

                {/* Detalles personales */}
                <div className="space-y-4">
                    <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                            <FaGraduationCap className="text-blue-600 text-xl" />
<span className="dark:text-gray-200">Ingeniero de Sistemas - Universidad Tecnologica del Peru</span>
                        </div>
                        <div className="flex items-center space-x-3 pl-7">
<span className="text-sm text-gray-600 dark:text-gray-200">2018 - 2023</span>
                        </div>
                    </div>
                    
                    <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                            <FaGraduationCap className="text-blue-600 text-xl" />
<span className="dark:text-gray-200">Computación e Informática - Instituto del Sur</span>
                        </div>
                        <div className="flex items-center space-x-3 pl-7">
<span className="text-sm text-gray-600 dark:text-gray-200">2013 - 2016</span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3">
                        <FaMapMarkerAlt className="text-blue-600 text-xl" />
<span className="dark:text-gray-200">Arequipa, Perú</span>
                    </div>
                </div>

                {/* Intereses */}
                <div className="border-t pt-4">
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
    </section>
);

export default About;
