import React from 'react';

const Cookies = () => {
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-br from-black to-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cookie Policy</h1>
            <p className="text-gray-400 mb-2">Last updated: {new Date().toLocaleDateString()}</p>
            <p className="text-gray-300">This policy explains how we use cookies and similar technologies on our website.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-black">
        <div className="container-custom max-w-4xl mx-auto space-y-8 text-gray-300">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">What Are Cookies?</h2>
            <p>Cookies are small text files stored on your device to help websites function and understand usage.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Types of Cookies We Use</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Essential: Required for core site functionality.</li>
              <li>Analytics: Help us understand performance and improve the experience.</li>
              <li>Preference: Remember your settings to personalize your experience.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Managing Cookies</h2>
            <p>You can control cookies via your browser settings. Disabling some cookies may impact site features.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Contact</h2>
            <p>Questions about this policy? Contact <a href="mailto:hello@vedaviksmedia.com" className="text-white underline">hello@vedaviksmedia.com</a>.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cookies;