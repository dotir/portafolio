import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => (
  <a
    href="https://wa.me/+51980252537"
    className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaWhatsapp size={24} />
  </a>
);

export default WhatsAppButton;
