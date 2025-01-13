import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Michael Chen",
    role: "Professional Trader",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    content: "LionsEdgeX community transformed my trading journey. The support and knowledge sharing here is unmatched.",
    rating: 5
  },
  {
    name: "Sarah Williams",
    role: "Investment Analyst",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    content: "The community's real-time insights and expert guidance helped me achieve consistent profitability.",
    rating: 5
  },
  {
    name: "David Thompson",
    role: "Full-time Trader",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    content: "Being part of this community has given me the confidence to trade professionally. Best investment ever!",
    rating: 5
  }
];

const CommunityTestimonials = () => {
  return (
    <div className="py-20 bg-royal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Success Stories
          </h2>
          <p className="text-royal-light text-xl">
            Hear from our community members who have achieved remarkable success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-royal-dark rounded-xl p-8 relative border border-gold/10 hover:border-gold/30 transition-all"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-gold/20" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gold"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                  <p className="text-royal-light">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-royal-light mb-4">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gold fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityTestimonials;