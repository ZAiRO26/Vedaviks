import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const trustedBy = [
    { name: 'ikea', logo: 'IKEA' },
    { name: 'ubs', logo: 'UBS' },
    { name: 'volkswagen', logo: 'Volkswagen' },
    { name: 'olx', logo: 'OLX' },
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Speeding up Merck's process from 6 months to 6 hours",
      subtitle: "An AI Assistant that boosts R&D delivered in five weeks and under budget",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300&fit=crop",
      category: "R&D productivity"
    },
    {
      id: 2,
      title: "60% more user engagement with hyper-personalization",
      subtitle: "AI PoC in under 6 weeks to test a hypothesis on hyper-localizing real estate content",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
      category: "AI for real estate"
    },
    {
      id: 3,
      title: "Team extension for mobile design revamp at speed",
      subtitle: "Seamless and consistent experience, unified payment flows, and easier in-app navigation",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
      category: "Mobile App Redesign"
    },
    {
      id: 4,
      title: "Mobile app MVP in 5 weeks for a New York fintech",
      subtitle: "New version of a financial predictions app, complete with a revamped user interface",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      category: "Mobile MVP"
    },
    {
      id: 5,
      title: "Increased engineering efficiency and more consistent design",
      subtitle: "Improved developer experience and more efficient engineering for the world's largest real estate franchise",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      category: "Design system"
    },
    {
      id: 6,
      title: "Boosting content creation with GenAI from hours to seconds",
      subtitle: "Content creation transformed into a streamlined process without compromising on quality",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      category: "Edtech AI"
    }
  ];

  const testimonials = [
    {
      name: "Mark Greiner",
      role: "Digital Innovation Manager",
      company: "Merck",
      quote: "Excellence and speed. It's rare to get both, and VedaViks Media delivers.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Adi Pavlovic",
      role: "Director of Innovation",
      company: "Keller Williams",
      quote: "VedaViks Media has been the best agency we've worked with so far.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Dally Singh",
      role: "Chief Product Officer",
      company: "Total Processing",
      quote: "It doesn't feel like an external team, it feels like we're just working together.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    }
  ];

  const stats = [
    { value: "99%", label: "faster teacher guide creation process – from 4 hours to 45 sec" },
    { value: "2x", label: "faster invoice approval process – cut down from 4 to 2 days" },
    { value: "60%", label: "more user engagement with hyper-personalization for a proptech" },
    { value: "77%", label: "faster page speed for a meal delivery app" }
  ];

  const clients = [
    { name: "Ikea", logo: "IKEA" },
    { name: "UBS", logo: "UBS" },
    { name: "Volkswagen", logo: "Volkswagen" },
    { name: "Zabka", logo: "Zabka" },
    { name: "OLX", logo: "OLX" },
    { name: "Spendesk", logo: "Spendesk" },
    { name: "Merck", logo: "Merck" },
    { name: "Careem", logo: "Careem" },
    { name: "Solaris", logo: "Solaris" },
    { name: "Moonfare", logo: "Moonfare" },
    { name: "Keller Williams", logo: "Keller Williams" },
    { name: "Salzburg AG", logo: "Salzburg AG" }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/assets/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
        <div className="container-custom relative z-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              One place for industrial business owners & service providers
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              From custom app development and social media marketing to Meta/Instagram ad campaigns, Instagram virtual avatars, virtual AI product photography, and high‑converting e‑commerce — we help you go from idea to live.
            </p>
            
            {/* Trusted By Section */}
            <div className="mb-12">
              <p className="text-sm text-gray-400 mb-4">Trusted by:</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {trustedBy.map((company) => (
                  <div key={company.name} className="text-2xl font-bold text-white">
                    {company.logo}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Request a quote
              </Link>
              <div className="flex items-center space-x-2 text-white hover:text-gray-300 cursor-pointer">
                <Play className="w-5 h-5" />
                <span className="font-semibold">Watch our story</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Overview */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">What we do</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Practical, outcome‑focused services tailored to industrial businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'App Development', href: '/services/app-development', blurb: 'Custom mobile/web apps built for operations.' },
              { name: 'Social Media Marketing', href: '/services/social-media-marketing', blurb: 'Account management, content, scheduling.' },
              { name: 'Meta/Instagram Ads', href: '/services/meta-instagram-ads', blurb: 'Targeted campaigns and optimization.' },
              { name: 'Instagram Virtual Avatars', href: '/services/instagram-virtual-avatars', blurb: 'Engaging personas for brand storytelling.' },
              { name: 'Virtual AI Product Photography', href: '/services/virtual-ai-product-photography', blurb: 'Studio‑grade imagery at scale.' },
              { name: 'Shopping Websites / E‑commerce', href: '/services/ecommerce', blurb: 'High‑converting storefronts and catalogs.' },
              { name: 'Idea to Go Live', href: '/services/idea-to-go-live', blurb: 'Consulting and end‑to‑end delivery.' },
            ].map((svc) => (
              <Link key={svc.name} to={svc.href} className="block bg-gray-900 border border-gray-800 rounded-xl p-6 hover:bg-gray-800 transition-colors">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-white">{svc.name}</h3>
                  <ArrowRight className="w-5 h-5 text-gray-500" />
                </div>
                <p className="text-gray-400 mt-2">{svc.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <motion.section 
        className="section-padding bg-black"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Design, engineering & <span className="gradient-text">applied AI</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-white font-semibold">{study.category}</p>
                  <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-400">{study.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/clients" className="btn-secondary inline-flex items-center space-x-2">
              <span>More case studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Services Process Section */}
      <motion.section 
        className="section-padding bg-gray-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Leverage our full digital <span className="gradient-text">product expertise</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you want to consult an idea, add missing capabilities, quickly expand your team, or hand over a project – we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { number: "01", title: "Ideate", desc: "Identify, shape and validate your product idea" },
              { number: "02", title: "Design", desc: "Craft beautiful digital experiences across platforms" },
              { number: "03", title: "Develop", desc: "Bring products to life with world-class engineering" },
              { number: "04", title: "Maintain", desc: "Safeguard your product's quality and reliability" },
              { number: "05", title: "Scale", desc: "Gain flexibility to adjust and expand on the fly" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-xl">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        className="section-padding bg-black"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Check out our <span className="gradient-text">clients' words</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-800">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-sm font-semibold text-white">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="section-padding bg-gray-900 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Enjoy <span className="gradient-text">tangible results</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Over the years we've created a unique process that delivers exceptional results with blazing-fast efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Clients Section */}
      <motion.section 
        className="section-padding bg-black"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Benefit from our <span className="gradient-text">cross-industry experience</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              With a wide range of services, and experience in multiple industries, such as finance, retail, proptech, or healthcare, we understand your challenges.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="text-center p-4 hover:bg-gray-900 rounded-lg transition-colors">
                <div className="text-2xl font-bold text-white opacity-60 hover:opacity-100 transition-opacity">
                  {client.logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="section-padding bg-gradient-to-r from-gray-900 to-black text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Build impactful products <span className="text-yellow-400">faster</span> than your competition
          </h2>
          <Link to="/contact" className="btn-secondary bg-white text-black hover:bg-gray-100 text-lg px-8 py-4">
            Estimate project
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;