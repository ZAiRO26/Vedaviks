import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Users } from 'lucide-react';

const Clients = () => {
  const featuredCaseStudies = [
    {
      id: 1,
      title: "Speeding up Merck's process from 6 months to 6 hours",
      subtitle: "An AI Assistant that boosts R&D delivered in five weeks and under budget",
      category: "R&D productivity",
      company: "Merck",
      industry: "Healthcare",
      duration: "5 weeks",
      team: "8 people",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&h=400&fit=crop",
      results: [
        "99% faster process completion",
        "Delivered under budget",
        "Improved team efficiency"
      ]
    },
    {
      id: 2,
      title: "60% more user engagement with hyper-personalization",
      subtitle: "AI PoC in under 6 weeks to test a hypothesis on hyper-localizing real estate content",
      category: "AI for real estate",
      company: "Keller Williams",
      industry: "Proptech",
      duration: "6 weeks",
      team: "6 people",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      results: [
        "60% increase in user engagement",
        "Faster content localization",
        "Improved user experience"
      ]
    },
    {
      id: 3,
      title: "Team extension for mobile design revamp at speed",
      subtitle: "Seamless and consistent experience, unified payment flows, and easier in-app navigation",
      category: "Mobile App Redesign",
      company: "Careem",
      industry: "Transportation",
      duration: "12 weeks",
      team: "12 people",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      results: [
        "Improved user experience",
        "Unified payment system",
        "Enhanced navigation"
      ]
    }
  ];

  const allCaseStudies = [
    {
      id: 4,
      title: "Mobile app MVP in 5 weeks for a New York fintech",
      subtitle: "New version of a financial predictions app, complete with a revamped user interface",
      category: "Mobile MVP",
      company: "FinTech Startup",
      industry: "Finance",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Increased engineering efficiency and more consistent design",
      subtitle: "Improved developer experience and more efficient engineering for the world's largest real estate franchise",
      category: "Design system",
      company: "Keller Williams",
      industry: "Proptech",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Boosting content creation with GenAI from hours to seconds",
      subtitle: "Content creation transformed into a streamlined process without compromising on quality",
      category: "Edtech AI",
      company: "Education Platform",
      industry: "Education",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop"
    },
    {
      id: 7,
      title: "E-commerce platform optimization",
      subtitle: "Performance improvements and user experience enhancements for a leading meal delivery service",
      category: "E-commerce",
      company: "Meal Delivery Service",
      industry: "Commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
    },
    {
      id: 8,
      title: "Healthcare data management system",
      subtitle: "Comprehensive patient data management and analytics platform for healthcare providers",
      category: "Healthcare",
      company: "Healthcare Network",
      industry: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop"
    },
    {
      id: 9,
      title: "Sustainability tracking platform",
      subtitle: "Environmental impact monitoring and sustainability reporting system",
      category: "Greentech",
      company: "Environmental Organization",
      industry: "Greentech",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop"
    }
  ];

  const testimonials = [
    {
      name: "Mark Greiner",
      role: "Digital Innovation Manager",
      company: "Merck",
      quote: "Excellence and speed. It's rare to get both, and VedaViks Media delivers.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Adi Pavlovic",
      role: "Director of Innovation",
      company: "Keller Williams",
      quote: "VedaViks Media has been the best agency we've worked with so far.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Dally Singh",
      role: "Chief Product Officer",
      company: "Total Processing",
      quote: "It doesn't feel like an external team, it feels like we're just working together.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    }
  ];

  const stats = [
    { value: "500+", label: "Projects completed" },
    { value: "50+", label: "Fortune 500 clients" },
    { value: "95%", label: "Client satisfaction" },
    { value: "15+", label: "Years of experience" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Apps, marketing campaigns, virtual product photography, and e‑commerce sites — real projects delivering measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
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
      </section>

      {/* Featured Case Studies */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="gradient-text">Case Studies</span>
            </h2>
          </div>

          <div className="space-y-16">
            {featuredCaseStudies.map((study) => (
              <div key={study.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm text-white font-semibold">{study.category}</p>
                    <h3 className="text-3xl font-bold text-white">{study.title}</h3>
                    <p className="text-lg text-gray-300">{study.subtitle}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                        <span className="text-black font-bold text-sm">{study.company.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-white">{study.company}</p>
                        <p className="text-sm text-gray-400">{study.industry}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-white" />
                      <div>
                        <p className="font-semibold text-white">{study.duration}</p>
                        <p className="text-sm text-gray-400">Duration</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-white" />
                      <div>
                        <p className="font-semibold text-white">{study.team}</p>
                        <p className="text-sm text-gray-400">Team size</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to={`/clients/case-study/${study.id}`}
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <span>Read full case study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies Grid */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              More <span className="gradient-text">Success Stories</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCaseStudies.map((study) => (
              <div key={study.id} className="group cursor-pointer bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-800">
                <div className="relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-white font-semibold">{study.category}</p>
                    <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-400">{study.subtitle}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                        <span className="text-black font-bold text-xs">{study.company.charAt(0)}</span>
                      </div>
                      <span className="text-sm font-semibold text-white">{study.company}</span>
                    </div>
                    <span className="text-sm text-gray-400">{study.industry}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Client <span className="gradient-text">Testimonials</span>
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
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to join our <span className="text-yellow-400">success stories</span>?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <Link to="/contact" className="btn-secondary bg-white text-black hover:bg-gray-100 text-lg px-8 py-4">
            Start your project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Clients;