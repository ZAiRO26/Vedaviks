import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-br from-black to-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-gray-400 mb-2">Last updated: {new Date().toLocaleDateString()}</p>
            <p className="text-gray-300">Your privacy is important to us. This policy explains what information we collect, how we use it, and your rights.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-black">
        <div className="container-custom max-w-4xl mx-auto space-y-8 text-gray-300">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Information We Collect</h2>
            <p>We collect information you provide (like name, email, phone) through forms and inquiries, and technical data (like device, browser, IP address) via analytics to improve our services.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">How We Use Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and deliver requested services.</li>
              <li>Improve site performance, security, and user experience.</li>
              <li>Send relevant updates and communications (you can opt out anytime).</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Cookies & Tracking</h2>
            <p>We use essential and analytics cookies to operate the site and understand usage. You can control cookies through your browser settings.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Data Sharing</h2>
            <p>We do not sell your data. We may share with trusted providers solely to deliver and improve our services, and when required by law.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Your Rights</h2>
            <p>You can request access, correction, or deletion of your data. Contact us at <a href="mailto:hello@vedaviksmedia.com" className="text-white underline">hello@vedaviksmedia.com</a>.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Contact</h2>
            <p>For privacy questions, reach us at <a href="mailto:hello@vedaviksmedia.com" className="text-white underline">hello@vedaviksmedia.com</a>.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;