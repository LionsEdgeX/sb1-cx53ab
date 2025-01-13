import React, { useState } from 'react';
import { ChevronDown, Compass, Book, Users, Building } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import ProductMenuItem from './ProductMenuItem';

const ProductMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const products = [
    {
      title: "5-Pillar Coaching™",
      description: "Master the art of trading with our signature coaching program",
      icon: <Compass className="w-8 h-8 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
      path: "/five-pillar-coaching"
    },
    {
      title: "The Balancer BluePrint™",
      description: "The Strategy for an Amazingly Successful Life",
      icon: <Book className="w-8 h-8 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      path: "/balancer-blueprint"
    },
    {
      title: "Market Samurai Trading School",
      description: "Advanced technical analysis and market mastery",
      icon: <Users className="w-8 h-8 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80",
      path: "/market-samurai"
    },
    {
      title: "LionsEdgeX Ventures",
      description: "Exclusive investment opportunities and partnerships",
      icon: <Building className="w-8 h-8 text-blue-500" />,
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
      >
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        <span className="text-sm font-medium">Discover LNX</span>
      </button>

      {isOpen && (
        <div 
          className={`absolute left-0 mt-2 w-[600px] ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50`}
        >
          <div className="grid grid-cols-2 gap-4 p-6">
            {products.map((product, index) => (
              <ProductMenuItem 
                key={index} 
                {...product} 
                onClick={() => {
                  if (product.path) {
                    navigate(product.path);
                    setIsOpen(false);
                  }
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductMenu;