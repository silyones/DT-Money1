import { useState } from 'react';
import { User, Calendar, DollarSign, AlertCircle, CheckCircle2, Loader2, Target, Circle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { UserGoals } from '../types';

const priorityColors = {
  high: '#EF4444',
  medium: '#F59E0B',
  low: '#10B981',
};

const categoryTitles = {
  personal: 'Personal Goals',
  financial: 'Financial Goals',
  social: 'Social Goals',
  career: 'Career Goals',
};

const categoryColors = {
  personal: '#CF6DFC',
  financial: '#C1BFFF',
  social: '#BDB96A',
  career: '#FDFBD4',
};

interface FinalDetailsPageProps {
  goals: UserGoals;
}

export default function FinalDetailsPage({ goals }: FinalDetailsPageProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    monthlyIncome: '',
    hasDebts: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setError('User not authenticated');
        setLoading(false);
        return;
      }

      const goalsToSave = [
        ...goals.personal.map((g) => ({ ...g, category: 'personal' })),
        ...goals.financial.map((g) => ({ ...g, category: 'financial' })),
        ...goals.social.map((g) => ({ ...g, category: 'social' })),
        ...goals.career.map((g) => ({ ...g, category: 'career' })),
      ].filter((g) => g.text.trim() !== '');

      setSuccess(true);
    } catch (err) {
      setError('Failed to save your details. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FDFBD4]/30 via-[#C1BFFF]/10 to-[#CF6DFC]/10 flex items-center justify-center px-6 py-12">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#10B981] to-[#10B981]/70 rounded-full mb-6">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Your details have been saved. DT Money will now build your personalized plan.
          </p>
          <div className="bg-gradient-to-r from-[#FDFBD4]/50 to-[#C1BFFF]/20 rounded-xl p-6">
            <p className="text-gray-700 font-medium">
              Our AI is analyzing your goals and financial situation to create the perfect
              allocation strategy for you.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const allGoals = [
    ...goals.personal.map((g) => ({ ...g, category: 'personal' as const })),
    ...goals.financial.map((g) => ({ ...g, category: 'financial' as const })),
    ...goals.social.map((g) => ({ ...g, category: 'social' as const })),
    ...goals.career.map((g) => ({ ...g, category: 'career' as const })),
  ].filter((g) => g.text.trim() !== '');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FDFBD4]/30 via-[#C1BFFF]/10 to-[#CF6DFC]/10 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">Tell Us About Yourself</h2>
            <p className="text-gray-600 text-lg">
              Help us personalize your financial journey
            </p>
          </div>

          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-[#CF6DFC]" />
              <h3 className="text-2xl font-bold text-gray-800">Your Goals Summary</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {(['personal', 'financial', 'social', 'career'] as const).map((category) => (
                <div
                  key={category}
                  className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-6"
                >
                  <h4
                    className="text-lg font-bold mb-4 flex items-center gap-2"
                    style={{ color: categoryColors[category] }}
                  >
                    {categoryTitles[category]}
                  </h4>
                  <div className="space-y-3">
                    {goals[category].filter((g) => g.text.trim() !== '').length > 0 ? (
                      goals[category]
                        .filter((g) => g.text.trim() !== '')
                        .map((goal, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <Circle
                              className="w-4 h-4 flex-shrink-0 mt-0.5"
                              style={{
                                fill: priorityColors[goal.priority],
                                stroke: priorityColors[goal.priority],
                              }}
                            />
                            <span className="text-gray-700 text-sm leading-relaxed">
                              {goal.text}
                            </span>
                          </div>
                        ))
                    ) : (
                      <p className="text-gray-400 text-sm italic">No goals set</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {allGoals.length > 0 && (
              <div className="mt-4 bg-gradient-to-r from-[#FDFBD4]/30 to-[#C1BFFF]/10 rounded-xl p-4">
                <p className="text-sm text-gray-700 text-center">
                  <span className="font-semibold">Total Goals Set:</span> {allGoals.length}
                </p>
              </div>
            )}
          </div>

          <div className="border-t-2 border-gray-100 pt-10 mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Personal Information</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#CF6DFC] focus:outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#CF6DFC] focus:outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  min="18"
                  max="100"
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#CF6DFC] focus:outline-none transition-colors"
                  placeholder="25"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Income
              </label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  name="monthlyIncome"
                  value={formData.monthlyIncome}
                  onChange={handleChange}
                  required
                  min="0"
                  step="0.01"
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#CF6DFC] focus:outline-none transition-colors"
                  placeholder="5000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Do you have any existing loans or debts?
              </label>
              <div className="relative">
                <AlertCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  name="hasDebts"
                  value={formData.hasDebts}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#CF6DFC] focus:outline-none transition-colors appearance-none bg-white"
                >
                  <option value="">Select an option</option>
                  <option value="no">No, I don't have any debts</option>
                  <option value="yes">Yes, I have some debts</option>
                </select>
              </div>
            </div>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm flex items-start gap-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-[#CF6DFC] to-[#C1BFFF] text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg mt-8"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Saving...
                </>
              ) : (
                'Update'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
