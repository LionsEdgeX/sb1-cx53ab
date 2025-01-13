import React, { useState } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Cross, Users, Coins, Heart, Star, ArrowRight, FileText, History, Target } from 'lucide-react';
import EvaluationIntro from './EvaluationIntro';
import PillarEvaluation from './PillarEvaluation';
import EvaluationResults from './EvaluationResults';
import EvaluationGoals from './EvaluationGoals';
import EvaluationHistory from './EvaluationHistory';
import GoalSetting from './GoalSetting';

export type EvaluationStep = 'history' | 'intro' | 'faith' | 'family' | 'finance' | 'fitness' | 'freedom' | 'results' | 'goals' | 'goal-setting';

export interface EvaluationAnswer {
  pillar: string;
  score: number;
  answers: Record<string, string | number>;
  date?: string;
}

const SelfEvaluationSection = () => {
  const { isDarkMode } = useTheme();
  const [currentStep, setCurrentStep] = useState<EvaluationStep>('history');
  const [showHistory, setShowHistory] = useState(false);
  const [evaluationAnswers, setEvaluationAnswers] = useState<EvaluationAnswer[]>([]);
  const [pastEvaluations, setPastEvaluations] = useState<Array<{
    date: string;
    answers: EvaluationAnswer[];
  }>>([]);

  const handlePillarComplete = (pillarData: EvaluationAnswer) => {
    setEvaluationAnswers(prev => [...prev.filter(a => a.pillar !== pillarData.pillar), pillarData]);
    
    // Determine next step
    const steps: EvaluationStep[] = ['history', 'intro', 'faith', 'family', 'finance', 'fitness', 'freedom', 'results', 'goals'];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const handleStartNewEvaluation = () => {
    setEvaluationAnswers([]);
    setCurrentStep('intro');
  };

  const handleSaveEvaluation = () => {
    const newEvaluation = {
      date: new Date().toISOString(),
      answers: evaluationAnswers
    };
    setPastEvaluations(prev => [...prev, newEvaluation]);
    setCurrentStep('history');
  };

  // Render the appropriate step content
  const renderStep = () => {
    switch (currentStep) {
      case 'history':
        return (
          <EvaluationHistory
            pastEvaluations={pastEvaluations}
            onStartNew={handleStartNewEvaluation}
            onViewEvaluation={(evaluation) => {
              setEvaluationAnswers(evaluation.answers);
              setCurrentStep('results');
            }}
          />
        );
      case 'intro':
        return <EvaluationIntro onStart={() => setCurrentStep('faith')} />;
      case 'faith':
      case 'family':
      case 'finance':
      case 'fitness':
      case 'freedom':
        return (
          <PillarEvaluation
            pillar={currentStep}
            onComplete={handlePillarComplete}
            previousAnswers={evaluationAnswers.find(a => a.pillar === currentStep)}
          />
        );
      case 'results':
        return (
          <EvaluationResults
            answers={evaluationAnswers}
            onContinue={() => setCurrentStep('goals')}
            onSave={handleSaveEvaluation}
          />
        );
      case 'goals':
        return <EvaluationGoals answers={evaluationAnswers} />;
      case 'goal-setting':
        return <GoalSetting />;
      default:
        return null;
    }
  };

  const getPillarIcon = (pillar: string) => {
    switch (pillar) {
      case 'faith': return <Cross className="h-5 w-5" />;
      case 'family': return <Users className="h-5 w-5" />;
      case 'finance': return <Coins className="h-5 w-5" />;
      case 'fitness': return <Heart className="h-5 w-5" />;
      case 'freedom': return <Star className="h-5 w-5" />;
      default: return <FileText className="h-5 w-5" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className={`p-6 rounded-2xl ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      } border border-gray-200 dark:border-gray-700`}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className={`text-2xl font-bold mb-2 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Self-Evaluation
            </h1>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Track your growth journey and set new goals
            </p>
          </div>
          {currentStep !== 'intro' && (
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCurrentStep('history')}
                className="px-4 py-2 text-gold hover:text-gold-light transition-colors"
              >
                Back to History
              </button>
              <button
                onClick={() => setCurrentStep('goal-setting')}
                className={`flex items-center space-x-2 px-4 py-2 ${
                  currentStep === 'goal-setting'
                    ? 'bg-gold text-royal-dark'
                    : 'text-gold hover:text-gold-light'
                } rounded-lg transition-colors`}
              >
                <Target className="h-4 w-4" />
                <span>Goal Setting</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 text-gold hover:text-gold-light transition-colors">
                <History className="h-4 w-4" /> <span>My History</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gold hover:bg-gold-light text-royal-dark rounded-lg transition-colors">
                <FileText className="h-4 w-4" />
                <span>Export Report</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Progress Steps */}
      {currentStep !== 'intro' && currentStep !== 'history' && currentStep !== 'goal-setting' && (
        <div className={`p-4 rounded-xl ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        } border border-gray-200 dark:border-gray-700`}>
          <div className="flex items-center justify-between">
            {['faith', 'family', 'finance', 'fitness', 'freedom', 'results', 'goals'].map((step, index) => (
              <div key={step} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  currentStep === step
                    ? 'bg-gold text-royal-dark'
                    : evaluationAnswers.some(a => a.pillar === step)
                    ? 'bg-emerald-500 text-white'
                    : isDarkMode
                    ? 'bg-gray-700 text-gray-400'
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {getPillarIcon(step)}
                </div>
                {index < 6 && (
                  <div className={`w-full h-1 mx-2 ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <div
                      className="h-full bg-gold transition-all duration-300"
                      style={{
                        width: evaluationAnswers.some(a => a.pillar === step) ? '100%' : '0%'
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`p-6 rounded-2xl ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      } border border-gray-200 dark:border-gray-700`}>
        {renderStep()}
      </div>
    </div>
  );
};

export default SelfEvaluationSection;