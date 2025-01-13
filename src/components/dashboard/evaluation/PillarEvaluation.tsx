import React, { useState } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Cross, Users, Coins, Heart, Star, ArrowRight } from 'lucide-react';
import { EvaluationAnswer } from './SelfEvaluationSection';

interface PillarEvaluationProps {
  pillar: string;
  onComplete: (data: EvaluationAnswer) => void;
  previousAnswers?: EvaluationAnswer;
}

const questions = {
  faith: [
    {
      id: 'alignment',
      type: 'scale',
      question: 'How aligned do you feel with your core values and beliefs?',
      description: 'Consider your daily actions and decisions in relation to your values'
    },
    {
      id: 'experience',
      type: 'text',
      question: 'Describe a recent experience that strengthened your faith',
      description: 'This could be any meaningful spiritual or personal growth moment'
    },
    {
      id: 'practice',
      type: 'select',
      question: 'How regularly do you engage in spiritual practices?',
      options: ['Daily', 'Weekly', 'Monthly', 'Rarely', 'Never']
    },
    {
      id: 'challenges',
      type: 'text',
      question: 'What challenges do you face in maintaining your spiritual growth?',
      description: 'Be honest about your struggles and obstacles'
    }
  ],
  family: [
    {
      id: 'relationships',
      type: 'scale',
      question: 'How would you rate the quality of your relationships with close family members?',
      description: 'Consider communication, trust, and emotional connection'
    },
    {
      id: 'time',
      type: 'select',
      question: 'How often do you spend quality time with your family?',
      options: ['Daily', 'Several times a week', 'Weekly', 'Monthly', 'Rarely']
    },
    {
      id: 'improvement',
      type: 'text',
      question: 'What is one thing you wish to improve in your family relationships?',
      description: 'Focus on specific aspects you can actively work on'
    },
    {
      id: 'joy',
      type: 'text',
      question: 'Describe a recent family activity that brought you joy',
      description: 'Reflect on what made this moment special'
    }
  ],
  finance: [
    {
      id: 'confidence',
      type: 'scale',
      question: 'How confident are you in your financial planning and budgeting?',
      description: 'Consider your ability to manage and grow your wealth'
    },
    {
      id: 'goals',
      type: 'text',
      question: 'What are your primary financial goals for the next 5 years?',
      description: 'Be specific about numbers and timelines'
    },
    {
      id: 'review',
      type: 'select',
      question: 'How often do you review and adjust your financial plans?',
      options: ['Weekly', 'Monthly', 'Quarterly', 'Yearly', 'Rarely']
    },
    {
      id: 'challenges',
      type: 'text',
      question: 'What financial challenges are you currently facing?',
      description: 'Include both immediate and long-term concerns'
    }
  ],
  fitness: [
    {
      id: 'health',
      type: 'scale',
      question: 'How would you rate your overall physical health and fitness level?',
      description: 'Consider energy levels, strength, and endurance'
    },
    {
      id: 'exercise',
      type: 'select',
      question: 'How frequently do you engage in physical exercise?',
      options: ['Daily', '3-4 times/week', '1-2 times/week', 'Monthly', 'Rarely']
    },
    {
      id: 'nutrition',
      type: 'text',
      question: 'Describe your current approach to nutrition and diet',
      description: 'Include eating habits and any dietary restrictions'
    },
    {
      id: 'goals',
      type: 'text',
      question: 'What fitness goals do you want to achieve in the next six months?',
      description: 'Be specific about measurable outcomes'
    }
  ],
  freedom: [
    {
      id: 'balance',
      type: 'scale',
      question: 'How satisfied are you with your work-life balance?',
      description: 'Consider time allocation between work and personal life'
    },
    {
      id: 'control',
      type: 'scale',
      question: 'How much control do you feel you have over your time and decisions?',
      description: 'Think about your ability to make choices freely'
    },
    {
      id: 'activities',
      type: 'text',
      question: 'What activities or hobbies bring you the most sense of freedom and joy?',
      description: 'List activities that make you feel truly alive'
    },
    {
      id: 'steps',
      type: 'text',
      question: 'What steps could you take to increase your personal freedom?',
      description: 'Consider both short-term and long-term actions'
    }
  ]
};

const PillarEvaluation: React.FC<PillarEvaluationProps> = ({
  pillar,
  onComplete,
  previousAnswers
}) => {
  const { isDarkMode } = useTheme();
  const [answers, setAnswers] = useState<Record<string, string | number>>(
    previousAnswers?.answers || {}
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const pillarQuestions = questions[pillar as keyof typeof questions];
  const currentQ = pillarQuestions[currentQuestion];

  const getPillarIcon = () => {
    switch (pillar) {
      case 'faith': return <Cross className="h-8 w-8 text-purple-500" />;
      case 'family': return <Users className="h-8 w-8 text-blue-500" />;
      case 'finance': return <Coins className="h-8 w-8 text-gold" />;
      case 'fitness': return <Heart className="h-8 w-8 text-red-500" />;
      case 'freedom': return <Star className="h-8 w-8 text-emerald-500" />;
      default: return null;
    }
  };

  const handleAnswer = (value: string | number) => {
    setAnswers(prev => ({
      ...prev,
      [currentQ.id]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestion < pillarQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Calculate average score from scale questions
      const scaleAnswers = Object.entries(answers)
        .filter(([id]) => 
          pillarQuestions.find(q => q.id === id && q.type === 'scale')
        )
        .map(([, value]) => Number(value));
      
      const averageScore = scaleAnswers.length
        ? scaleAnswers.reduce((a, b) => a + b, 0) / scaleAnswers.length
        : 0;

      onComplete({
        pillar,
        score: averageScore,
        answers
      });
    }
  };

  const renderQuestion = () => {
    switch (currentQ.type) {
      case 'scale':
        return (
          <div className="space-y-4">
            <div className="flex justify-between text-sm text-gray-400">
              <span>Not at all</span>
              <span>Very much</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={answers[currentQ.id] || 5}
              onChange={(e) => handleAnswer(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <button
                  key={num}
                  onClick={() => handleAnswer(num)}
                  className={`w-8 h-8 rounded-full ${
                    Number(answers[currentQ.id]) === num
                      ? 'bg-gold text-royal-dark'
                      : isDarkMode
                      ? 'bg-gray-700 text-gray-400'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        );
      
      case 'select':
        return (
          <div className="grid grid-cols-1 gap-3">
            {currentQ.options?.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className={`p-4 rounded-lg text-left transition-colors ${
                  answers[currentQ.id] === option
                    ? 'bg-gold text-royal-dark'
                    : isDarkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        );
      
      case 'text':
        return (
          <textarea
            value={answers[currentQ.id] || ''}
            onChange={(e) => handleAnswer(e.target.value)}
            placeholder="Type your answer here..."
            className={`w-full h-32 p-4 rounded-lg ${
              isDarkMode
                ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600'
                : 'bg-gray-100 text-gray-900 placeholder-gray-500 border-gray-200'
            } border focus:outline-none focus:ring-2 focus:ring-gold`}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-center mb-8">
        {getPillarIcon()}
        <h2 className={`text-2xl font-bold ml-3 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          {pillar.charAt(0).toUpperCase() + pillar.slice(1)} Evaluation
        </h2>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className={`text-xl font-bold mb-2 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {currentQ.question}
          </h3>
          {currentQ.description && (
            <p className={`text-sm ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {currentQ.description}
            </p>
          )}
        </div>

        <div className="space-y-8">
          {renderQuestion()}

          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-400">
              Question {currentQuestion + 1} of {pillarQuestions.length}
            </div>
            <button
              onClick={handleNext}
              disabled={!answers[currentQ.id]}
              className="flex items-center space-x-2 px-6 py-3 bg-gold hover:bg-gold-light text-royal-dark rounded-lg transition-colors disabled:opacity-50"
            >
              <span>{currentQuestion === pillarQuestions.length - 1 ? 'Complete' : 'Next'}</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PillarEvaluation;