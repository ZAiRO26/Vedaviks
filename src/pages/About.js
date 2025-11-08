import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Heart, Award, Globe, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering the highest quality solutions to our clients."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We're passionate about technology and innovation, always eager to learn and push boundaries."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and collaboration, both within our team and with our clients."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We work with clients worldwide to create solutions that make a positive impact on society."
    }
  ];

  const teamStats = [
    { value: "800+", label: "Team members", icon: Users },
    { value: "15+", label: "Years of experience", icon: Clock },
    { value: "50+", label: "Countries served", icon: Globe },
    { value: "500+", label: "Projects completed", icon: Award }
  ];

  const culture = [
    {
      title: "Remote-first culture",
      description: "We embrace remote work and flexible schedules, allowing our team to work from anywhere in the world.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
    },
    {
      title: "Continuous learning",
      description: "We invest in our team's growth through training, conferences, and knowledge sharing sessions.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
    },
    {
      title: "Innovation focus",
      description: "We stay at the forefront of technology trends and always explore new ways to solve problems.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
    }
  ];

  const awards = [
    { year: "2023", title: "Best Digital Agency", organization: "Clutch.co" },
    { year: "2023", title: "Top Development Company", organization: "GoodFirms" },
    { year: "2022", title: "Excellence in Innovation", organization: "TechCrunch" },
    { year: "2022", title: "Best Workplace", organization: "Great Place to Work" }
  ];

  const testimonials = [
    {
      name: "Anna Kowalski",
      role: "Senior Developer",
      quote: "Working at VedaViks Media has been an incredible journey. The culture of innovation and continuous learning keeps me motivated every day.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Piotr Nowak",
      role: "Product Designer",
      quote: "The collaborative environment and focus on user-centered design make every project exciting and rewarding.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Maria Garcia",
      role: "Project Manager",
      quote: "VedaViks Media's commitment to excellence and client success is what makes this company truly special.",
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
            About <span className="gradient-text">VedaViks Media</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              We're a team of passionate technologists, designers, and innovators dedicated to helping businesses succeed in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-netguru-dark mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-lg text-netguru-gray mb-6">
                We accelerate digital transformation by providing cutting-edge technology solutions that help businesses innovate, grow, and succeed in an ever-changing digital landscape.
              </p>
              <p className="text-lg text-netguru-gray mb-8">
                Our team of experts combines deep technical knowledge with creative problem-solving to deliver solutions that not only meet today's needs but also prepare our clients for tomorrow's challenges.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Work with us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Netguru team"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-netguru-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-netguru-dark mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-netguru-gray max-w-3xl mx-auto">
              These core values guide everything we do and shape our culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-netguru-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-netguru-dark mb-3">{value.title}</h3>
                <p className="text-netguru-gray">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="section-padding bg-netguru-dark text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-netguru-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-netguru-blue mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-netguru-dark mb-6">
              Our <span className="gradient-text">Culture</span>
            </h2>
          </div>

          <div className="space-y-16">
            {culture.map((item, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="text-3xl font-bold text-netguru-dark mb-4">{item.title}</h3>
                  <p className="text-lg text-netguru-gray">{item.description}</p>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="section-padding bg-netguru-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-netguru-dark mb-6">
              Awards & <span className="gradient-text">Recognition</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center">
                <div className="text-2xl font-bold text-netguru-blue mb-2">{award.year}</div>
                <h3 className="font-semibold text-netguru-dark mb-2">{award.title}</h3>
                <p className="text-netguru-gray">{award.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-netguru-dark mb-6">
              Meet our <span className="gradient-text">Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-netguru-light p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-netguru-dark">{testimonial.name}</h4>
                    <p className="text-sm text-netguru-gray">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-netguru-dark italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-netguru-blue to-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join our <span className="text-yellow-300">team</span>
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals who share our passion for technology and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about/careers" className="btn-secondary bg-white text-netguru-blue hover:bg-gray-100 text-lg px-8 py-4">
              View careers
            </Link>
            <Link to="/contact" className="btn-secondary bg-white text-netguru-blue hover:bg-gray-100 text-lg px-8 py-4">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;