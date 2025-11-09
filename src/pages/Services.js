import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Megaphone, Target, Camera, ShoppingCart, Users, Lightbulb, Briefcase, Gift, Palette, Calendar, Scale, Heart, BarChart3, Wallet, FileText } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'app-development',
      icon: Code,
      title: 'App Development',
      description: 'Custom mobile and web apps built for industrial operations',
      features: [
        'iOS/Android and responsive web apps',
        'Robust APIs and integrations',
        'Scalable cloud architectures',
        'CI/CD and testing automation',
        'Security and compliance best practices',
      ],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    },
    {
      id: 'social-media-marketing',
      icon: Megaphone,
      title: 'Social Media Marketing',
      description: 'Content, scheduling, and account management for industrial brands',
      features: [
        'Account setup and daily management',
        'Content creation and calendars',
        'Hashtag research and audience growth',
        'Engagement workflows and moderation',
        'Monthly analytics reports',
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    },
    {
      id: 'meta-instagram-ads',
      icon: Target,
      title: 'Meta/Instagram Ads',
      description: 'Targeted campaigns that drive qualified leads and conversions',
      features: [
        'Audience targeting and lookalikes',
        'Creative production and testing',
        'Pixel setup and conversion tracking',
        'A/B testing and budget optimization',
        'Performance dashboards and insights',
      ],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
    },
    {
      id: 'instagram-virtual-avatars',
      icon: Users,
      title: 'Instagram Virtual Avatars',
      description: 'Engaging digital personas for campaigns and brand storytelling',
      features: [
        'Avatar concepting and design',
        'Behavior scripts and voice',
        'Content pipelines and scheduling',
        'Compliance and brand safety',
        'Performance tracking and iteration',
      ],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
    },
    {
      id: 'virtual-ai-product-photography',
      icon: Camera,
      title: 'Virtual AI Product Photography',
      description: 'Studio-grade product imagery generated and enhanced with AI',
      features: [
        'Lighting and scene presets',
        'Background removal and styling',
        'Bulk image pipelines',
        'Prompt engineering and QA',
        'Brand-guideline consistency',
      ],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    },
    {
      id: 'ecommerce',
      icon: ShoppingCart,
      title: 'Shopping Websites / E-commerce',
      description: 'High-converting storefronts tailored to industrial buyers',
      features: [
        'Storefront design and UX',
        'Catalogs, variants, and pricing',
        'Payments, logistics, and invoicing',
        'SEO and performance optimization',
        'Analytics and growth tactics',
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    },
    {
      id: 'idea-to-go-live',
      icon: Lightbulb,
      title: 'Idea to Go Live',
      description: 'Consulting and end-to-end project management from concept to launch',
      features: [
        'Discovery workshops and roadmaps',
        'MVP scoping and prioritization',
        'Vendor coordination and delivery',
        'Risk management and governance',
        'Launch planning and handover',
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    },
    // Added services
    {
      id: 'business-websites',
      icon: Briefcase,
      title: 'Business Websites',
      description: 'Professional websites tailored for your business growth',
      features: [
        'Conversion-focused design',
        'Clear information architecture',
        'Lead capture and analytics',
        'SEO and performance best practices',
        'Ongoing support and updates',
      ],
      image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400&fit=crop',
    },
    {
      id: 'digital-invitations',
      icon: Gift,
      title: 'Digital Invitations',
      description: 'Beautiful invitations for your special moments',
      features: [
        'Elegant designs and templates',
        'RSVP and guest management',
        'Shareable links and QR codes',
        'Email and social sharing',
        'Analytics and confirmations',
      ],
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=400&fit=crop',
    },
    {
      id: 'photographers',
      icon: Camera,
      title: 'Photographers',
      description: 'Showcase your photography portfolio with a stunning website',
      features: [
        'Responsive galleries and albums',
        'Client-proofing and downloads',
        'Booking inquiries and forms',
        'Watermarking and image optimization',
        'SEO-ready portfolio pages',
      ],
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=400&fit=crop',
    },
    {
      id: 'makeup-artists',
      icon: Palette,
      title: 'Makeup Artists',
      description: 'Exhibit your artistry and attract new clients',
      features: [
        'Portfolio showcases and lookbooks',
        'Service listings and pricing',
        'Testimonials and reviews',
        'Booking forms and calendars',
        'Instagram-friendly sharing',
      ],
      image: 'https://images.unsplash.com/photo-1512499617640-c2f999098c32?w=600&h=400&fit=crop',
    },
    {
      id: 'wedding-planners',
      icon: Calendar,
      title: 'Wedding Planners',
      description: 'Display your portfolio and wedding packages',
      features: [
        'Service packages and inclusions',
        'Event galleries and stories',
        'Inquiry pipelines and forms',
        'Vendor listings and partners',
        'Blog and planning resources',
      ],
      image: 'https://images.unsplash.com/photo-1511909525232-1829e6e6e3c0?w=600&h=400&fit=crop',
    },
    {
      id: 'event-planners',
      icon: Calendar,
      title: 'Event Planners',
      description: 'Promote your event planning services',
      features: [
        'Services and pricing tables',
        'Case studies and results',
        'Contact and discovery forms',
        'Timeline and checklist tools',
        'Blog and resources',
      ],
      image: 'https://images.unsplash.com/photo-1519671482749-f31cae0c1f4f?w=600&h=400&fit=crop',
    },
    {
      id: 'lawyers',
      icon: Scale,
      title: 'Lawyers',
      description: 'Build trust with a professional website that highlights your expertise',
      features: [
        'Practice areas and attorney bios',
        'Case results and testimonials',
        'Consultation and intake forms',
        'Secure document sharing',
        'Compliance and accessibility',
      ],
      image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&h=400&fit=crop',
    },
    {
      id: 'yoga-teachers',
      icon: Heart,
      title: 'Yoga Teachers',
      description: 'Connect with students and share your practice',
      features: [
        'Class schedules and booking',
        'Retreats and workshops',
        'Teacher bios and philosophy',
        'Blog and learning resources',
        'Newsletter and community',
      ],
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop',
    },
    {
      id: 'business-consultants',
      icon: BarChart3,
      title: 'Business Consultants',
      description: 'Present your expertise and consulting services',
      features: [
        'Service pillars and outcomes',
        'Lead magnets and CTAs',
        'Case studies and ROI stories',
        'Booking and contact flows',
        'Resource library and blog',
      ],
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop',
    },
    {
      id: 'investment-consultants',
      icon: Wallet,
      title: 'Investment Consultants',
      description: 'Share your financial advisory services',
      features: [
        'Service tiers and packages',
        'Compliance and disclosures',
        'Performance highlights and charts',
        'Secure contact and scheduling',
        'Newsletter and insights',
      ],
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=400&fit=crop',
    },
    {
      id: 'online-resume',
      icon: FileText,
      title: 'Online Resume',
      description: 'Stand out with a professional online resume',
      features: [
        'Skills, experience, and projects',
        'Case highlights and achievements',
        'Downloadable PDF export',
        'Contact and scheduling links',
        'SEO-friendly profile pages',
      ],
      image: 'https://images.unsplash.com/photo-1488998427799-e3362cec87c3?w=600&h=400&fit=crop',
    },
  ];

  const caseStudies = [
    {
      title: "AI-powered content creation for education",
      company: "EdTech Startup",
      result: "99% faster content creation",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop"
    },
    {
      title: "Mobile app redesign for real estate",
      company: "Keller Williams",
      result: "60% more user engagement",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop"
    },
    {
      title: "R&D process automation",
      company: "Merck",
      result: "From 6 months to 6 hours",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300&fit=crop"
    }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };
  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  };
  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section className="bg-gradient-to-br from-gray-900 to-black section-padding" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 className="text-5xl md:text-6xl font-bold text-white mb-6" variants={fadeInUp}>
              Our <span className="gradient-text">Services</span>
            </motion.h1>
            <motion.p className="text-xl md:text-2xl text-gray-300 mb-8" variants={fadeInUp}>
              We provide end-to-end digital product development services to help you scale, innovate, and get ahead of the competition.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            {services.map((service) => (
              <motion.div
                key={service.title}
                id={service.id}
                className="scroll-target group cursor-pointer bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-800"
                variants={cardVariant}
                whileHover={{ y: -4 }}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-gray-300 transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 bg-black flex items-center justify-between">
                  <Link to={`/services/${service.id}`} className="font-semibold text-white hover:text-gray-300 transition-colors inline-flex items-center space-x-2">
                    <span>View details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Request a quote</Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our agile and collaborative process ensures we deliver high-quality digital products on time and within budget.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-8 w-1 bg-gray-700 h-full"></div>
            
            <div className="space-y-16 lg:space-y-0">
              {[
                { phase: "Discovery", title: "Understand your needs and objectives", desc: "We start by understanding your business goals and objectives." },
                { phase: "Planning", title: "Define scope, timeline, and deliverables", desc: "We work with you to define the project scope, timeline, and deliverables." },
                { phase: "Design", title: "Create user-centered design solutions", desc: "We design solutions that are user-centered and meet your business needs." },
                { phase: "Development", title: "Build your product with best practices", desc: "We build your product using the latest technologies and best practices." },
                { phase: "Launch", title: "Deploy and maintain your solution", desc: "We deploy and maintain your solution to ensure it meets your business needs." }
              ].map((step, index) => (
                <div key={index} className="flex flex-col lg:flex-row items-center gap-8">
                  <div className={`lg:w-1/2 ${index % 2 !== 0 ? 'lg:order-2 lg:text-left' : 'lg:text-right'}`}>
                    <div className="lg:inline-block lg:max-w-md">
                      <span className="text-sm font-semibold text-yellow-400 mb-2 block">{step.phase}</span>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-300">{step.desc}</p>
                    </div>
                  </div>
                  <div className="relative lg:w-auto">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-0 z-10 relative border-4 border-gray-900">
                      {index % 2 === 0 ? <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xl">{index + 1}</span>
                      </div> : null}
                    </div>
                  </div>
                  <div className={`lg:w-1/2 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="gradient-text">Work</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Check out some of our recent projects to see the tangible results we've delivered for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.company} className="group cursor-pointer bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-800">
                <div className="relative overflow-hidden">
                  <img src={study.image} alt={study.title} className="w-full h-56 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-yellow-400 font-semibold mb-2">{study.company}</p>
                  <h3 className="text-2xl font-bold text-white group-hover:text-gray-300 transition-colors mb-3">
                    {study.title}
                  </h3>
                  <p className="text-4xl font-bold text-white mb-1">{study.result}</p>
                  <p className="text-gray-400">{study.resultDesc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/clients" className="btn-primary text-lg px-8 py-4">
              Explore more case studies
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's build something <span className="text-yellow-400">amazing</span> together
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ready to discuss your project? Get in touch with our experts for a free consultation.
          </p>
          <Link to="/contact" className="btn-secondary bg-white text-black hover:bg-gray-100 text-lg px-8 py-4">
            Start a project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;