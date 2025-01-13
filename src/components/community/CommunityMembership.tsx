import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Check, Crown, Rocket, Diamond } from 'lucide-react';
import PaymentForm from '../payment/PaymentForm';
import { PaymentTransaction } from '../../types/user';
import toast from 'react-hot-toast';

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

const CommunityMembership = () => {
  const { isDarkMode } = useTheme();
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);

  const handlePaymentSuccess = (transaction: PaymentTransaction) => {
    setSelectedPlan(null);
    toast.success('Welcome to the community! Check your email for access details.');
  };

  return (
    <div className="py-20 bg-royal-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Choose Your Path to Success
          </h2>
          <p className="text-royal-light text-xl">
            Select the membership tier that best fits your trading goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-royal rounded-xl p-8 border ${
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

              <div className="text-gold mb-6">{plan.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-gold mb-4">{plan.price}</div>
              <p className="text-royal-light mb-6">{plan.description}</p>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-gold mr-2" />
                    <span className="text-royal-light">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setSelectedPlan(plan)}
                className={`w-full py-3 rounded-lg font-bold transition-all transform hover:scale-105 ${
                plan.popular
                  ? 'bg-gold hover:bg-gold-light text-royal-dark'
                  : 'bg-royal-dark hover:bg-royal text-gold border border-gold'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Payment Modal */}
        {selectedPlan && (
          <div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedPlan(null);
            }}
          >
            <div className="max-w-md w-full">
              <PaymentForm
                amount={parseInt(selectedPlan.price.replace('$', '').replace('/month', ''))}
                planName={selectedPlan.name}
                onSuccess={handlePaymentSuccess}
                onCancel={() => setSelectedPlan(null)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityMembership;