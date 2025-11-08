import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';

const Insights = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const featuredPosts = [
    {
      id: 1,
      title: "The Future of AI in Digital Product Development",
      excerpt: "Explore how artificial intelligence is transforming the way we build and maintain digital products, from automated testing to intelligent user interfaces.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "AI & Technology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tags: ["AI", "Digital Products", "Innovation"]
    },
    {
      id: 2,
      title: "Building Scalable Design Systems: A Complete Guide",
      excerpt: "Learn the best practices for creating and maintaining design systems that scale with your product and team growth.",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "12 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      tags: ["Design Systems", "UX", "Scalability"]
    },
    {
      id: 3,
      title: "The Rise of Fintech: Trends and Opportunities in 2024",
      excerpt: "Discover the latest trends in financial technology and how they're reshaping the industry landscape.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "10 min read",
      category: "Fintech",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      tags: ["Fintech", "Trends", "Innovation"]
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: "Optimizing Mobile App Performance: Best Practices",
      excerpt: "Essential strategies for improving mobile app performance and user experience.",
      author: "David Kim",
      date: "March 8, 2024",
      readTime: "6 min read",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
      tags: ["Mobile", "Performance", "Development"]
    },
    {
      id: 5,
      title: "Sustainable Technology: Building Green Digital Solutions",
      excerpt: "How to create environmentally conscious digital products and reduce your carbon footprint.",
      author: "Lisa Wang",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop",
      tags: ["Sustainability", "Green Tech", "Environment"]
    },
    {
      id: 6,
      title: "The Psychology of User Experience Design",
      excerpt: "Understanding user behavior and psychology to create more engaging digital experiences.",
      author: "Alex Thompson",
      date: "March 3, 2024",
      readTime: "9 min read",
      category: "UX Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      tags: ["UX", "Psychology", "Design"]
    },
    {
      id: 7,
      title: "Cloud-Native Development: Benefits and Challenges",
      excerpt: "Exploring the advantages and potential pitfalls of cloud-native application development.",
      author: "Robert Lee",
      date: "March 1, 2024",
      readTime: "11 min read",
      category: "Cloud Computing",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      tags: ["Cloud", "Development", "Architecture"]
    },
    {
      id: 8,
      title: "Data Privacy in the Age of AI",
      excerpt: "Balancing innovation with privacy protection in AI-driven applications.",
      author: "Maria Garcia",
      date: "February 28, 2024",
      readTime: "8 min read",
      category: "Privacy & Security",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      tags: ["Privacy", "AI", "Security"]
    },
    {
      id: 9,
      title: "Agile Development: Beyond the Basics",
      excerpt: "Advanced agile methodologies and practices for modern software development teams.",
      author: "James Wilson",
      date: "February 25, 2024",
      readTime: "10 min read",
      category: "Agile",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      tags: ["Agile", "Development", "Methodology"]
    }
  ];

  const categories = [
    "All",
    "AI & Technology",
    "Design",
    "Development",
    "Fintech",
    "Mobile",
    "UX",
    "Cloud Computing",
    "Sustainability"
  ];

  const newsletters = [
    {
      title: "Tech Trends Weekly",
      description: "Stay updated with the latest technology trends and industry insights.",
      subscribers: "15,000+",
      frequency: "Weekly"
    },
    {
      title: "Design Insights",
      description: "Expert tips and best practices for digital product design.",
      subscribers: "8,500+",
      frequency: "Bi-weekly"
    },
    {
      title: "Development Deep Dive",
      description: "Technical articles and tutorials for developers.",
      subscribers: "12,000+",
      frequency: "Weekly"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              VedaViks Media <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Industry news, tips on digital marketing and app development, plus case studies to help you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="gradient-text">Post</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={featuredPosts[0].image}
                alt={featuredPosts[0].title}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {featuredPosts[0].category}
                </span>
                <h3 className="text-4xl font-bold text-white">
                  {featuredPosts[0].title}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <img src={featuredPosts[0].author.avatar} alt={featuredPosts[0].author.name} className="w-8 h-8 rounded-full" />
                    <span>{featuredPosts[0].author.name}</span>
                  </div>
                  <span>•</span>
                  <span>{featuredPosts[0].date}</span>
                  <span>•</span>
                  <span>{featuredPosts[0].readTime}</span>
                </div>
              </div>
              <p className="text-lg text-gray-300">{featuredPosts[0].excerpt}</p>
              <Link
                to={`/insights/${featuredPosts[0].id}`}
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Read more</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom">
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors
                  ${selectedCategory === category
                    ? 'bg-yellow-400 text-black'
                    : 'bg-black text-white hover:bg-gray-800'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-netguru-dark mb-6">
              Latest <span className="gradient-text">Articles</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <div key={post.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-netguru-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-4 text-sm text-netguru-gray">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-netguru-dark group-hover:text-netguru-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-netguru-gray text-sm">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-netguru-gray">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <Link 
                      to={`/insights/blog/${post.id}`}
                      className="text-netguru-blue hover:text-blue-600 font-semibold text-sm"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/insights/blog" className="btn-secondary inline-flex items-center space-x-2">
              <span>View all articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletters Section */}
      <section className="section-padding bg-netguru-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-netguru-dark mb-6">
              Stay <span className="gradient-text">Updated</span>
            </h2>
            <p className="text-xl text-netguru-gray max-w-3xl mx-auto">
              Subscribe to our newsletters and get the latest insights delivered to your inbox.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsletters.map((newsletter, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-netguru-dark mb-3">{newsletter.title}</h3>
                <p className="text-netguru-gray mb-4">{newsletter.description}</p>
                <div className="flex items-center justify-between text-sm text-netguru-gray mb-6">
                  <span>{newsletter.subscribers} subscribers</span>
                  <span>{newsletter.frequency}</span>
                </div>
                <button className="w-full btn-primary">
                  Subscribe
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-netguru-blue to-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Share your <span className="text-yellow-300">insights</span>
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Have a story to tell? We're always looking for guest contributors and thought leaders to share their expertise.
          </p>
          <Link to="/contact" className="btn-secondary bg-white text-netguru-blue hover:bg-gray-100 text-lg px-8 py-4">
            Write for us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Insights;