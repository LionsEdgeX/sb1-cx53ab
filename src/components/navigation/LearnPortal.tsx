import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { 
  GraduationCap, 
  BarChart2, 
  Users,
  X,
  ArrowLeft,
  ArrowRight,
  Lock,
  Loader2
} from 'lucide-react';
import toast from 'react-hot-toast';

interface LearnPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LearnPortal: React.FC<LearnPortalProps> = ({ isOpen, onClose }) => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [selectedPlatform, setSelectedPlatform] = useState<string>('');
  const [accessCode, setAccessCode] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [showAccessForm, setShowAccessForm] = useState(false);

  const handlePlatformSelect = (title: string) => {
    setSelectedPlatform(title);
    setShowAccessForm(true);
    setAccessCode('');
  };

  const handleBack = () => {
    setShowAccessForm(false);
    setSelectedPlatform('');
    setAccessCode('');
  };

  const handleAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      switch (accessCode.toUpperCase()) {
        case 'LNX-BBP':
          toast.success('Welcome to Market Samurai Trading LAB');
          navigate('/market-samurai-platform');
          break;
        case 'LNX-CLIENT':
          toast.success('Welcome to LionsEdgeX LAB');
          navigate('/dashboard');
          break;
        case 'LNX-UNI':
          toast.success('Welcome to LionsEdgeX University');
          navigate('/courses');
          break;
        default:
          toast.error('Invalid access code');
      }
    } finally {
      setLoading(false);
      setAccessCode('');
    }
  };

  if (!isOpen) return null;

  const platforms = [
    {
      title: "Market Samurai Trading LAB",
      description: "Advanced trading platform with real-time analysis",
      icon: <BarChart2 className="h-8 w-8 text-emerald-500" />
    },
    {
      title: "LionsEdgeX LAB",
      description: "Personal development and life mastery platform",
      icon: <Users className="h-8 w-8 text-blue-500" />
    },
    {
      title: "LionsEdgeX University",
      description: "Comprehensive educational resources and courses",
      icon: <GraduationCap className="h-8 w-8 text-purple-500" />
    }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={`relative w-full max-w-4xl rounded-2xl ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      } shadow-2xl overflow-hidden transform transition-all duration-300`}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Left Side - Platform Selection */}
          <div className="p-8 border-r border-gray-200 dark:border-gray-700">
            <h2 className={`text-2xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Choose Your Platform
            </h2>

            <div className="space-y-4">
              {platforms.map((platform, index) => (
                <button
                  key={index}
                  onClick={() => handlePlatformSelect(platform.title)}
                  className={`w-full flex items-start space-x-4 p-4 rounded-xl transition-colors ${
                    platform.title === selectedPlatform
                      ? 'bg-gold/20 border-2 border-gold'
                      : isDarkMode
                      ? 'bg-gray-700 hover:bg-gray-600 border-2 border-transparent'
                      : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${
                    isDarkMode ? 'bg-gray-600' : 'bg-white'
                  }`}>
                    {platform.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className={`font-bold mb-1 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {platform.title}
                    </h3>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {platform.description}
                    </p>
                  </div>
                  <div className={`transform transition-all duration-300 ${
                    platform.title === selectedPlatform ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}>
                    <ArrowRight className="h-5 w-5 text-gold" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Access Form */}
          <div className={`p-8 ${
            isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
          }`}>
            <div className="flex justify-center mb-6">
              <div className={`p-3 rounded-xl ${
                isDarkMode ? 'bg-gray-600' : 'bg-white'
              }`}>
                <Lock className="h-8 w-8 text-gold" />
              </div>
            </div>

            <h3 className={`text-xl font-bold text-center mb-2 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Enter Access Code
            </h3>
            <p className={`text-center mb-8 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {selectedPlatform 
                ? `Use your access code to enter ${selectedPlatform}` 
                : 'Select a platform and enter your access code'}
            </p>

            <form onSubmit={handleAccess} className="space-y-6">
              <input
                type="text"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value.toUpperCase())}
                placeholder="Enter your access code"
                className={`w-full px-4 py-3 rounded-lg text-center tracking-widest ${
                  isDarkMode
                    ? 'bg-gray-600 text-white placeholder-gray-400 border-gray-500'
                    : 'bg-white text-gray-900 placeholder-gray-500 border-gray-300'
                } border focus:outline-none focus:ring-2 focus:ring-gold`}
                required
              />

              <button
                type="submit"
                disabled={loading || !accessCode}
                className="w-full flex items-center justify-center space-x-2 bg-gold hover:bg-gold-light text-royal-dark py-3 rounded-lg transition-colors disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <span>Access Platform</span>
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Need an access code?{' '}
                <button className="text-gold hover:text-gold-light">
                  Contact Support
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnPortal;