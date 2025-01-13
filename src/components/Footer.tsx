import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { 
  GraduationCap, 
  Send, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    setEmail('');
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Community', path: '/community' },
    { name: 'Market Samurai', path: '/market-samurai' },
    { name: '5-Pillar Coaching™', path: '/five-pillar-coaching' },
    { name: 'Balancer Blueprint™', path: '/balancer-blueprint' }
  ];

  const resourceLinks = [
    { name: 'Trading LAB', path: '/market-samurai-platform' },
    { name: 'Market Analysis', path: '/courses' },
    { name: 'Risk Management', path: '/courses' },
    { name: 'Trading Psychology', path: '/courses' },
    { name: 'Technical Analysis', path: '/courses' },
    { name: 'Success Stories', path: '/community' }
  ];

  return (
    <footer className={`${isDarkMode ? 'bg-royal-dark' : 'bg-royal'} pt-20 pb-10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Founder Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-8 w-8 text-gold" />
              <span className="text-2xl font-bold text-white">LionsEdgeX</span>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80"
                alt="John Smith"
                className="w-16 h-16 rounded-full border-2 border-gold object-cover"
              />
              <div>
                <h3 className="text-white font-bold">John Smith</h3>
                <p className="text-royal-light text-sm">Founder & Lead Trader</p>
              </div>
            </div>
            <p className="text-royal-light">
              "Our mission is to empower traders with the knowledge and tools they need to achieve financial freedom."
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gold hover:text-gold-light transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gold hover:text-gold-light transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gold hover:text-gold-light transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-royal-light hover:text-gold transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-royal-light hover:text-gold transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-6">Stay Updated</h3>
            <p className="text-royal-light mb-4">
              Get the latest trading insights and market updates directly in your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-white/10 text-white placeholder-royal-light border border-gold/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold/30"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gold hover:text-gold-light transition-colors"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-royal-light text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} LionsEdgeX. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-royal-light hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-royal-light hover:text-gold transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-royal-light hover:text-gold transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;