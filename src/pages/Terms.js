import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-br from-black to-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-gray-400 mb-2">Last updated: {new Date().toLocaleDateString()}</p>
            <p className="text-gray-300">Please read these terms carefully. By using our site and services, you agree to these terms.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-black">
        <div className="container-custom max-w-4xl mx-auto space-y-8 text-gray-300">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Use of Services</h2>
            <p>You agree to use our services lawfully and responsibly. We may update features and policies from time to time.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Intellectual Property</h2>
            <p>All content, trademarks, and materials on this site are owned by VedaViks Media or licensed for our use. Do not copy or reuse without permission.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Limitation of Liability</h2>
            <p>We provide services "as is" and are not liable for indirect damages arising from site use. Some jurisdictions may not allow limitations; your rights may vary.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Changes</h2>
            <p>We may update these terms. Continued use after changes means you accept the updated terms.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Contact</h2>
            <p>Questions about these terms? Contact <a href="mailto:hello@vedaviksmedia.com" className="text-white underline">hello@vedaviksmedia.com</a>.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;