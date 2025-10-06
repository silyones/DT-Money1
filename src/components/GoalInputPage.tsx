import { useState } from 'react';
import { ArrowRight, Circle } from 'lucide-react';
import { Priority, Goal } from '../types';

interface GoalInputPageProps {
  category: 'personal' | 'financial' | 'social' | 'career';
  onNext: (goals: Goal[]) => void;
  initialGoals?: Goal[];
}

const categoryTitles = {
  personal: 'Personal Goals',
  financial: 'Financial Goals',
  social: 'Social Goals',
  career: 'Career Goals',
};

const categoryDescriptions = {
  personal: 'Define your personal aspirations and life goals',
  financial: 'Set your financial targets and saving objectives',
  social: 'Plan your social connections and community involvement',
  career: 'Outline your professional development and career path',
};

const priorityColors = {
  high: '#EF4444',
  medium: '#F59E0B',
  low: '#10B981',
};

const steps = ['personal', 'financial', 'social', 'career'];

export default function GoalInputPage({ category, onNext, initialGoals }: GoalInputPageProps) {
  const [goals, setGoals] = useState<Goal[]>(
    initialGoals || [
      { text: '', priority: 'medium' },
      { text: '', priority: 'medium' },
      { text: '', priority: 'medium' },
    ]
  );

  const handleGoalChange = (index: number, text: string) => {
    const newGoals = [...goals];
    newGoals[index].text = text;
    setGoals(newGoals);
  };

  const handlePriorityChange = (index: number, priority: Priority) => {
    const newGoals = [...goals];
    newGoals[index].priority = priority;
    setGoals(newGoals);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(goals);
  };

  const currentStep = steps.indexOf(category);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FDFBD4]/30 via-[#C1BFFF]/10 to-[#CF6DFC]/10 px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center flex-1">
                <div
                  className={`h-2 rounded-full flex-1 transition-all ${
                    index <= currentStep
                      ? 'bg-gradient-to-r from-[#CF6DFC] to-[#C1BFFF]'
                      : 'bg-gray-200'
                  }`}
                ></div>
                {index < steps.length - 1 && <div className="w-2"></div>}
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 text-center">
            Step {currentStep + 1} of {steps.length}
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">
              {categoryTitles[category]}
            </h2>
            <p className="text-gray-600 text-lg">{categoryDescriptions[category]}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {goals.map((goal, index) => (
              <div key={index} className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  Goal {index + 1}
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col gap-2">
                    {(['high', 'medium', 'low'] as Priority[]).map((priority) => (
                      <button
                        key={priority}
                        type="button"
                        onClick={() => handlePriorityChange(index, priority)}
                        className="group relative"
                        title={`${priority.charAt(0).toUpperCase() + priority.slice(1)} Priority`}
                      >
                        <Circle
                          className="w-6 h-6 transition-all"
                          style={{
                            fill: goal.priority === priority ? priorityColors[priority] : 'none',
                            stroke: priorityColors[priority],
                            strokeWidth: 2,
                          }}
                        />
                        <span className="absolute left-10 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                          {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
                        </span>
                      </button>
                    ))}
                  </div>

                  <input
                    type="text"
                    value={goal.text}
                    onChange={(e) => handleGoalChange(index, e.target.value)}
                    className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#CF6DFC] focus:outline-none transition-colors"
                    placeholder={`Enter your ${category} goal...`}
                  />
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-r from-[#FDFBD4]/50 to-[#C1BFFF]/10 rounded-xl p-4 mt-8">
              <p className="text-sm text-gray-700 flex items-start gap-2">
                <span className="font-semibold">Priority Guide:</span>
                <span>
                  <span className="inline-block w-3 h-3 rounded-full bg-[#EF4444] mr-1"></span>
                  High (Red)
                  <span className="mx-2">•</span>
                  <span className="inline-block w-3 h-3 rounded-full bg-[#F59E0B] mr-1"></span>
                  Medium (Yellow)
                  <span className="mx-2">•</span>
                  <span className="inline-block w-3 h-3 rounded-full bg-[#10B981] mr-1"></span>
                  Low (Green)
                </span>
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-[#CF6DFC] to-[#C1BFFF] text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 text-lg mt-8"
            >
              Next
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
