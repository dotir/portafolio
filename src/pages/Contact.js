import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const contactLinks = [
  {
    label: 'Email',
    value: 'irvingllerena@gmail.com',
    href: 'mailto:irvingllerena@gmail.com',
    icon: <FaEnvelope size={28} />,
  },
  {
    label: 'WhatsApp',
    value: '+51 980 252 537',
    href: 'https://wa.me/51980252537',
    icon: <FaWhatsapp size={28} />,
  },
  {
    label: 'LinkedIn',
    value: 'Irving Llerena Bejarano',
    href: 'https://www.linkedin.com/in/irving-hector-llerena-bejarano-4b90aa210/',
    icon: <FaLinkedin size={28} />,
  },
  {
    label: 'GitHub',
    value: 'github.com/dotir',
    href: 'https://github.com/dotir',
    icon: <FaGithub size={28} />,
  },
];

const Contact = () => (
  <section id="contact" className="bg-white dark:bg-gray-900 py-16">
    <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-gray-200">Contáctame</h2>
    <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
      Si deseas conversar sobre oportunidades laborales, proyectos de software o soluciones empresariales,
      puedes escribirme por cualquiera de estos medios.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {contactLinks.map((contact) => (
        <a
          key={contact.label}
          href={contact.href}
          target={contact.href.startsWith('http') ? '_blank' : undefined}
          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="flex items-center gap-4 p-5 rounded-xl bg-gray-50 dark:bg-gray-800 shadow hover:shadow-lg transition-shadow"
        >
          <span className="text-blue-600 dark:text-blue-400">{contact.icon}</span>
          <span>
            <span className="block font-semibold text-gray-800 dark:text-gray-200">{contact.label}</span>
            <span className="block text-gray-600 dark:text-gray-400 break-all">{contact.value}</span>
          </span>
        </a>
      ))}

      <div className="flex items-center gap-4 p-5 rounded-xl bg-gray-50 dark:bg-gray-800 shadow md:col-span-2">
        <FaMapMarkerAlt size={28} className="text-blue-600 dark:text-blue-400" />
        <span>
          <span className="block font-semibold text-gray-800 dark:text-gray-200">Ubicación</span>
          <span className="block text-gray-600 dark:text-gray-400">Arequipa, Perú</span>
        </span>
      </div>
    </div>
    </div>
  </section>
);

export default Contact;
