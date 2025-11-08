import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, ShoppingCart, Heart, GraduationCap, Home, Leaf } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: TrendingUp,
      title: "Finance",
      description: "Digital transformation for financial services",
      features: [
        "Fintech solutions",
        "Payment systems",
        "Risk management",
        "Compliance automation",
        "Customer experience"
      ],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      caseStudy: {
        title: "Mobile app MVP in 5 weeks for a New York fintech",
        result: "New version of a financial predictions app"
      }
    },
    {
      icon: ShoppingCart,
      title: "Commerce",
      description: "E-commerce and retail digital solutions",
      features: [
        "E-commerce platforms",
        "Marketplace solutions",
        "Inventory management",
        "Customer analytics",
        "Mobile commerce"
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      caseStudy: {
        title: "E-commerce platform optimization",
        result: "77% faster page speed for a meal delivery app"
      }
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Digital health and medical technology",
      features: [
        "Telemedicine platforms",
        "Health monitoring apps",
        "Medical device software",
        "Patient management systems",
        "Healthcare analytics"
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      caseStudy: {
        title: "Healthcare data management system",
        result: "Streamlined patient care processes"
      }
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "EdTech and learning platforms",
      features: [
        "Learning management systems",
        "Educational apps",
        "Content creation tools",
        "Student analytics",
        "Virtual classrooms"
      ],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      caseStudy: {
        title: "AI-powered content creation for education",
        result: "99% faster teacher guide creation process"
      }
    },
    {
      icon: Home,
      title: "Proptech",
      description: "Real estate technology solutions",
      features: [
        "Property management platforms",
        "Real estate marketplaces",
        "Virtual tours",
        "Property analytics",
        "Tenant portals"
      ],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      caseStudy: {
        title: "60% more user engagement with hyper-personalization",
        result: "AI PoC for hyper-localizing real estate content"
      }
    },
    {
      icon: Leaf,
      title: "Greentech",
      description: "Sustainable technology solutions",
      features: [
        "Energy management systems",
        "Sustainability tracking",
        "Carbon footprint apps",
        "Renewable energy platforms",
        "Environmental monitoring"
      ],
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
      caseStudy: {
        title: "Sustainability tracking platform",
        result: "Environmental impact monitoring system"
      }
    }
  ];

  const stats = [
    { value: "500+", label: "Projects delivered across industries" },
    { value: "50+", label: "Fortune 500 companies served" },
    { value: "15+", label: "Years of industry experience" },
    { value: "95%", label: "Client satisfaction rate" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "FinTech Startup",
      quote: "Netguru's expertise in financial technology helped us launch our product ahead of schedule.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Head of Digital",
      company: "Retail Chain",
      quote: "Their e-commerce solutions transformed our online presence and boosted sales significantly.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Medical Director",
      company: "Healthcare Network",
      quote: "The telemedicine platform they built improved patient care and operational efficiency.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Industries We <span className="gradient-text">Serve</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              We leverage our deep industry knowledge to deliver tailored digital solutions that drive growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-netguru-dark text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-netguru-blue mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div key={industry.title} className="group cursor-pointer bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-800">
                <div className="relative overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{industry.title}</h3>
                  <p className="text-gray-400 mb-4">{industry.description}</p>
                  <Link to={`/industries/${industry.title.toLowerCase().replace(/ /g, '-')}`} className="font-semibold text-white hover:text-gray-300 transition-colors inline-flex items-center space-x-2">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-netguru-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-netguru-dark mb-6">
              What our <span className="gradient-text">clients say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-netguru-dark">{testimonial.name}</h4>
                    <p className="text-sm text-netguru-gray">{testimonial.role}</p>
                    <p className="text-sm font-semibold text-netguru-blue">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-netguru-dark italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry <span className="gradient-text">Success Stories</span>
            </h2>
          </div>

          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`relative overflow-hidden rounded-xl ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>
                
                <div className={`space-y-6 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-2">
                    <p className="text-sm text-white font-semibold">{industry.title}</p>
                    <h3 className="text-3xl font-bold text-white">{industry.caseStudy.title}</h3>
                    <p className="text-lg text-gray-300">{industry.caseStudy.result}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black p-4 rounded-lg">
                      <p className="text-2xl font-bold text-white">{industry.features.length}</p>
                      <p className="text-sm text-gray-400">Features</p>
                    </div>
                    <div className="bg-black p-4 rounded-lg">
                      <p className="text-2xl font-bold text-white">{industry.features[0]}</p>
                      <p className="text-sm text-gray-400">Main Feature</p>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/clients/case-study/${industry.title.toLowerCase().replace(/ /g, '-')}`}
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

      {/* Why Choose Us Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="gradient-text">VedaViks Media</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-800">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{industry.title}</h3>
                <p className="text-gray-400">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's build the future of your industry, <span className="text-yellow-400">together</span>.
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us to learn how our industry expertise can benefit your business.
          </p>
          <Link to="/contact" className="btn-get-in-touch">
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Industries;