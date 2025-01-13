import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  Crown, 
  Rocket, 
  Diamond,
  X,
  Check,
  ArrowRight
} from 'lucide-react';
import PaymentForm from '../payment/PaymentForm';

interface PlansPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

const plans = [
  {
    name: "Starter",
    icon: <Rocket className="h-8 w-8" />,
    price: "Free",
    description: "Perfect for beginners starting their trading journey",
    features: [
      "Access to community forums",
      "Basic trading resources",
      "Weekly market updates",
      "Public chat access"
    ]
  },
  {
    name: "Pro Trader",
    icon: <Crown className="h-8 w-8" />,
    price: "$97/month",
    description: "For serious traders ready to scale their success",
    features: [
      "Everything in Starter",
      "Live trading sessions",
      "Private mentorship group",
      "Advanced strategy access",
      "Priority support"
    ],
    popular: true
  },
  {
    name: "Elite",
    icon: <Diamond className="h-8 w-8" />,
    price: "$197/month",
    description: "Ultimate package for professional traders",
    features: [
      "Everything in Pro Trader",
      "1-on-1 coaching sessions",
      "Custom strategy development",
      "VIP community access",
      "Early access to new features",
      "Exclusive investment opportunities"
    ]
  }
];

const PlansPortal: React.FC<PlansPortalProps> = ({ isOpen, onClose }) => {
  const { isDarkMode } = useTheme();
  const [selectedPlan, setSelectedPlan] = React.useState<typeof plans[0] | null>(null);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={`relative w-full max-w-6xl rounded-2xl ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      } shadow-2xl overflow-hidden`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Choose Your Path to Success
            </h2>
            <p className={`text-xl ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Select the membership tier that best fits your trading goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                } rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-gold shadow-[0_0_20px_rgba(255,215,0,0.2)]' 
                    : 'border-gold/10'
                } hover:border-gold/30 transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gold text-royal-dark px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`p-3 rounded-xl ${
                  isDarkMode ? 'bg-gray-600' : 'bg-white'
                } mb-6`}>
                  {React.cloneElement(plan.icon, {
                    className: `h-8 w-8 ${
                      plan.name === 'Starter' ? 'text-emerald-500' :
                      plan.name === 'Pro Trader' ? 'text-gold' :
                      'text-purple-500'
                    }`
                  })}
                </div>

                <h3 className={`text-2xl font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {plan.name}
                </h3>
                <div className="text-3xl font-bold text-gold mb-4">{plan.price}</div>
                <p className={`text-sm mb-6 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {plan.description}
                </p>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-gold mr-2" />
                      <span className={`text-sm ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => setSelectedPlan(plan)}
                  className={`w-full py-3 rounded-lg font-bold transition-all transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gold hover:bg-gold-light text-royal-dark'
                      : isDarkMode
                      ? 'bg-gray-600 hover:bg-gray-500 text-white'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {selectedPlan && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-[60]"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedPlan(null);
          }}
        >
          <div className="max-w-md w-full">
            <PaymentForm
              amount={parseInt(selectedPlan.price.replace('$', '').replace('/month', '')) || 0}
              planName={selectedPlan.name}
              onSuccess={() => {
                setSelectedPlan(null);
                onClose();
              }}
              onCancel={() => setSelectedPlan(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PlansPortal;