import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    services: [
      { name: 'App Development', href: '/services/app-development' },
      { name: 'Social Media Marketing', href: '/services/social-media-marketing' },
      { name: 'Meta/Instagram Ads', href: '/services/meta-instagram-ads' },
      { name: 'Instagram Virtual Avatars', href: '/services/instagram-virtual-avatars' },
      { name: 'Virtual AI Product Photography', href: '/services/virtual-ai-product-photography' },
      { name: 'Shopping Websites / E-commerce', href: '/services/ecommerce' },
      { name: 'Idea to Go Live', href: '/services/idea-to-go-live' },
    ],
    industries: [
      { name: 'Finance', href: '/industries/finance' },
      { name: 'Commerce', href: '/industries/commerce' },
      { name: 'Healthcare', href: '/industries/healthcare' },
      { name: 'Education', href: '/industries/education' },
      { name: 'Proptech', href: '/industries/proptech' },
      { name: 'Greentech', href: '/industries/greentech' },
    ],
    about: [
      { name: 'How we work', href: '/about/how-we-work' },
      { name: 'Sustainability', href: '/about/sustainability' },
      { name: 'Working at VedaViks Media', href: '/about/careers' },
      { name: 'Job opportunities', href: '/about/jobs' },
      { name: 'Contact us', href: '/contact' },
      { name: 'Press Office', href: '/about/press' },
      { name: 'Refer VedaViks Media', href: '/about/refer' },
    ],
    insights: [
      { name: 'Blog', href: '/insights/blog' },
      { name: 'Newsletters and originals', href: '/insights/newsletters' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/vedaviks-media', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/vedaviksmedia', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com/vedaviksmedia', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/vedaviksmedia', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@vedaviksmedia', label: 'YouTube' },
  ];

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container-custom section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="font-logo text-black text-lg">V</span>
              </div>
              <span className="font-logo text-xl">VedaViks Media</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              We speed up AI adoption and ramp up engineering and design teams to help you lead your industry.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Subscribe to our newsletter</h4>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  className="flex-1 bg-gray-900 border border-gray-800 rounded-md px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-700"
                />
                <button type="submit" className="btn-secondary px-4 py-2">Subscribe</button>
              </form>
              <p className="text-xs text-gray-400 mt-2">We’ll send occasional updates. Unsubscribe anytime.</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About & Insights */}
          <div>
            <h3 className="font-semibold mb-4">About us</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-semibold mb-4">Insights</h3>
            <ul className="space-y-2">
              {footerLinks.insights.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
              <span>&copy; 2024 VedaViks Media. All rights reserved.</span>
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
            <div className="text-sm text-gray-400">
              Made with ❤️ in India
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;