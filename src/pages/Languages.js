import React from 'react';
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaPython,FaJava, FaVuejs } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";

const languages = [
    { name: 'JavaScript', icon: <FaJsSquare size={48} className="text-yellow-500" /> },
    { name: 'React', icon: <FaReact size={48} className="text-blue-500" /> },
    { name: 'HTML5', icon: <FaHtml5 size={48} className="text-orange-600" /> },
    { name: 'Tailwind CSS', icon: <RiTailwindCssFill size={48} className="text-blue-400" /> },
    { name: 'Node.js', icon: <FaNodeJs size={48} className="text-green-500" /> },
    //vuejs
    { name: 'Vue.js', icon: <FaVuejs size={48} className='text-green-700' /> },
    { name: 'Java', icon: <FaJava size={48} className="text-blue-400" /> },
    { name: 'Python', icon: <FaPython size={48} className="text-blue-400" /> },
];

const Languages = () => (
    <section id="languages" className="container mx-auto p-8 bg-white shadow-2xl rounded-lg">
        <h2 className="text-4xl font-bold text-center mb-8">Lenguajes</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            {languages.map((language, index) => (
                <div key={index} className="flex flex-col items-center">
                    {language.icon}
                    <span className="mt-2 text-xl font-semibold">{language.name}</span>
                </div>
            ))}
        </div>
    </section>
);

export default Languages;
