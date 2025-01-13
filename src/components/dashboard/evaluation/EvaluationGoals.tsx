import React, { useState } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Cross, Users, Coins, Heart, Star, Plus, Save } from 'lucide-react';
import { EvaluationAnswer } from './SelfEvaluationSection';
import toast from 'react-hot-toast';

interface EvaluationGoalsProps {
  answers: EvaluationAnswer[];
}

interface Goal {
  pillar: string;
  objective: string;
  timeline: string;
  actionSteps: string[];
}

const EvaluationGoals: React.FC<EvaluationGoalsProps> = ({ answers }) => {
  const { isDarkMode } = useTheme();
  const [goals, setGoals] = useState<Goal[]>([]);
  const [currentGoal, setCurrentGoal] = useState<Partial<Goal>>({});
  const [showGoalForm, setShowGoalForm] = useState(false);

  const getPillarIcon = (pillar: string) => {
    switch (pillar) {
      case 'faith': return <Cross className="h-6 w-6" />;
      case 'family': return <Users className="h-6 w-6" />;
      case 'finance': return <Coins className="h-6 w-6" />;
      case 'fitness': return <Heart className="h-6 w-6" />;
      case 'freedom': return <Star className="h-6 w-6" />;
      default: return null;
    }
  };

  const handleAddGoal = () => {
    if (!currentGoal.pillar || !currentGoal.objective || !currentGoal.timeline) {
      toast.error('Please fill in all required fields');
      return;
    }

    setGoals(prev => [...prev, currentGoal as Goal]);
    setCurrentGoal({});
    setShowGoalForm(false);
    toast.success('Goal added successfully');
  };

  const handleSaveAllGoals = () => {
    // Here you would typically save to your backend
    console.log('Saving goals:', goals);
    toast.success('Goals saved successfully');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className={`text-3xl font-bold mb-4 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Set Your Growth Goals
        </h2>
        <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Based on your evaluation results, let's create actionable goals for each pillar
        </p>
      </div>

      {/* Goals List */}
      <div className="space-y-6 mb-8">
        {goals.map((goal, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${
                  isDarkMode ? 'bg-gray-600' : 'bg-white'
                }`}>
                  {getPillarIcon(goal.pillar)}
                </div>
                <h3 className={`text-xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {goal.pillar.charAt(0).toUpperCase() + goal.pillar.slice(1)} Goal
                </h3>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                isDarkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'
              }`}>
                {goal.timeline}
              </span>
            </div>

            <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {goal.objective}
            </p>

            <div className="space-y-2">
              {goal.actionSteps.map((step, stepIndex) => (
                <div
                  key={stepIndex}
                  className={`p-3 rounded-lg ${
                    isDarkMode ? 'bg-gray-600' : 'bg-white'
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Add Goal Form */}
      {showGoalForm ? (
        <div className={`p-6 rounded-xl ${
          isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
        } mb-8`}>
          <h3 className={`text-xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Add New Goal
          </h3>

          <div className="space-y-6">
            <div>
              <label className={`block mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Select Pillar
              </label>
              <select
                value={currentGoal.pillar || ''}
                onChange={(e) => setCurrentGoal(prev => ({ ...prev, pillar: e.target.value }))}
                className={`w-full p-3 rounded-lg ${
                  isDarkMode
                    ? 'bg-gray-600 text-white border-gray-500'
                    : 'bg-white text-gray-900 border-gray-300'
                } border focus:ring-2 focus:ring-gold`}
              >
                <option value="">Select a pillar</option>
                {answers.map(answer => (
                  <option key={answer.pillar} value={answer.pillar}>
                    {answer.pillar.charAt(0).toUpperCase() + answer.pillar.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className={`block mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Goal Objective
              </label>
              <textarea
                value={currentGoal.objective || ''}
                onChange={(e) => setCurrentGoal(prev => ({ ...prev, objective: e.target.value }))}
                placeholder="What do you want to achieve?"
                className={`w-full p-3 rounded-lg ${
                  isDarkMode
                    ? 'bg-gray-600 text-white border-gray-500'
                    : 'bg-white text-gray-900 border-gray-300'
                } border focus:ring-2 focus:ring-gold`}
                rows={3}
              />
            </div>

            <div>
              <label className={`block mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Timeline
              </label>
              <select
                value={currentGoal.timeline || ''}
                onChange={(e) => setCurrentGoal(prev => ({ ...prev, timeline: e.target.value }))}
                className={`w-full p-3 rounded-lg ${
                  isDarkMode
                    ? 'bg-gray-600 text-white border-gray-500'
                    : 'bg-white text-gray-900 border-gray-300'
                } border focus:ring-2 focus:ring-gold`}
              >
                <option value="">Select timeline</option>
                <option value="1 month">1 Month</option>
                <option value="3 months">3 Months</option>
                <option value="6 months">6 Months</option>
                <option value="1 year">1 Year</option>
              </select>
            </div>

            <div>
              <label className={`block mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Action Steps
              </label>
              <div className="space-y-2">
                {(currentGoal.actionSteps || []).map((step, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={step}
                      onChange={(e) => {
                        const newSteps = [...(currentGoal.actionSteps || [])];
                        newSteps[index] = e.target.value;
                        setCurrentGoal(prev => ({ ...prev, actionSteps: newSteps }));
                      }}
                      className={`flex-1 p-3 rounded-lg ${
                        isDarkMode
                          ? 'bg-gray-600 text-white border-gray-500'
                          : 'bg-white text-gray-900 border-gray-300'
                      } border focus:ring-2 focus:ring-gold`}
                    />
                    <button
                      onClick={() => {
                        const newSteps = (currentGoal.actionSteps || []).filter((_, i) => i !== index);
                        setCurrentGoal(prev => ({ ...prev, actionSteps: newSteps }));
                      }}
                      className="text-red-500 hover:text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => setCurrentGoal(prev => ({
                    ...prev,
                    actionSteps: [...(prev.actionSteps || []), '']
                  }))}
                  className="text-gold hover:text-gold-light"
                >
                  + Add Step
                </button>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => {
                  setCurrentGoal({});
                  setShowGoalForm(false);
                }}
                className="px-6 py-3 text-gray-400 hover:text-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleAddGoal}
                className="flex items-center space-x-2 px-6 py-3 bg-gold hover:bg-gold-light text-royal-dark rounded-lg transition-colors"
              >
                <Plus className="h-5 w-5" />
                <span>Add Goal</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setShowGoalForm(true)}
          className="w-full flex items-center justify-center space-x-2 p-6 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-gold transition-colors mb-8"
        >
          <Plus className="h-5 w-5" />
          <span>Add New Goal</span>
        </button>
      )}

      {goals.length > 0 && (
        <div className="flex justify-center">
          <button
            onClick={handleSaveAllGoals}
            className="flex items-center space-x-2 px-8 py-4 bg-gold hover:bg-gold-light text-royal-dark rounded-lg transition-colors"
          >
            <Save className="h-5 w-5" />
            <span>Save All Goals</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default EvaluationGoals;