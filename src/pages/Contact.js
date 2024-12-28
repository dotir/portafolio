import React from 'react';

const Contact = () => (
<section id="contact" className="container mx-auto p-8 bg-white dark:bg-gray-900">
<h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">Contactame</h2>
    <form className="max-w-xl mx-auto">
      <div className="mb-4">
<label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="name">Nombre</label>
<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Tu nombre" />
      </div>
      <div className="mb-4">
<label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="email">Email</label>
<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Tu Email" />
      </div>
      <div className="mb-4">
<label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="message">Mensaje</label>
<textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="4" placeholder="Tu mensaje"></textarea>
      </div>
      <div className="text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">Enviar</button>
      </div>
    </form>
  </section>
);

export default Contact;
