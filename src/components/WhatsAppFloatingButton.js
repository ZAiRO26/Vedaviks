import React from 'react';

const WhatsAppFloatingButton = () => {
  const whatsappNumber = '919354785960';
  const href = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 left-4 z-50 bg-black border border-gray-700 hover:bg-gray-800 rounded-full shadow-lg p-4 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-600"
    >
      <img src="/assets/whatsapp-logo-bw.svg" alt="" className="w-6 h-6" aria-hidden="true" />
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  );
};

export default WhatsAppFloatingButton;