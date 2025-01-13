import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Full-time Trader",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    content: "LionsEdgeX transformed my life. I went from struggling with a 9-5 to consistently profitable trading. The community support is incredible!",
    rating: 5,
    achievement: "+127% Portfolio Growth"
  },
  {
    name: "Marcus Thompson",
    role: "Investment Analyst",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    content: "The structured approach to trading psychology and risk management helped me overcome my biggest trading challenges.",
    rating: 5,
    achievement: "Consistent 6-Figure Months"
  },
  {
    name: "Elena Rodriguez",
    role: "Crypto Trader",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    content: "From market analysis to execution, LionsEdgeX provided me with the tools and confidence to succeed in crypto trading.",
    rating: 5,
    achievement: "3x ROI in 6 Months"
  }
];

const TestimonialsSection = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`py-20 ${isDarkMode ? 'bg-royal-dark' : 'bg-gradient-to-br from-royal/5 to-royal/10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-royal-dark'} mb-4`}>
            Trader Success Stories
          </h2>
          <p className={`text-xl ${isDarkMode ? 'text-royal-light' : 'text-royal/70'}`}>
            Join thousands of successful traders who transformed their lives with LionsEdgeX
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
                isDarkMode 
                  ? 'bg-royal border border-gold/10 hover:border-gold/30' 
                  : 'bg-white hover:shadow-xl'
              }`}
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-gold/20" />
              
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gold"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-gold text-royal-dark text-xs font-bold px-2 py-1 rounded-full">
                    Verified
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-royal-dark'}`}>
                    {testimonial.name}
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-royal-light' : 'text-royal/70'}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold fill-current" />
                  ))}
                </div>
                <p className={`text-sm ${isDarkMode ? 'text-royal-light' : 'text-royal/70'}`}>
                  "{testimonial.content}"
                </p>
              </div>

              <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                isDarkMode 
                  ? 'bg-gold/20 text-gold' 
                  : 'bg-royal/10 text-royal'
              }`}>
                {testimonial.achievement}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className={`text-center ${isDarkMode ? 'text-white' : 'text-royal-dark'}`}>
              <div className="text-4xl font-bold text-gold">10,000+</div>
              <div className="text-sm mt-1">Active Traders</div>
            </div>
            <div className={`text-center ${isDarkMode ? 'text-white' : 'text-royal-dark'}`}>
              <div className="text-4xl font-bold text-gold">95%</div>
              <div className="text-sm mt-1">Success Rate</div>
            </div>
            <div className={`text-center ${isDarkMode ? 'text-white' : 'text-royal-dark'}`}>
              <div className="text-4xl font-bold text-gold">$2.5M+</div>
              <div className="text-sm mt-1">Profit Generated</div>
            </div>
          </div>
          
          <button 
            onClick={() => document.getElementById('login-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gold hover:bg-gold-light text-royal-dark px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start Your Success Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;