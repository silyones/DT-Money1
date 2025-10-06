import { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import SignUpPage from './components/SignUpPage';
import GoalInputPage from './components/GoalInputPage';
import FinalDetailsPage from './components/FinalDetailsPage';
import { UserGoals, Goal } from './types';

type Page =
  | 'home'
  | 'signup'
  | 'goals-personal'
  | 'goals-financial'
  | 'goals-social'
  | 'goals-career'
  | 'final-details';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [userGoals, setUserGoals] = useState<UserGoals>({
    personal: [],
    financial: [],
    social: [],
    career: [],
  });

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const handleGoalsSubmit = (category: 'personal' | 'financial' | 'social' | 'career', goals: Goal[]) => {
    setUserGoals((prev) => ({
      ...prev,
      [category]: goals,
    }));

    const nextPages: Record<string, Page> = {
      personal: 'goals-financial',
      financial: 'goals-social',
      social: 'goals-career',
      career: 'final-details',
    };

    setCurrentPage(nextPages[category]);
  };

  return (
    <div className="min-h-screen">
      {currentPage === 'home' && (
        <>
          <Header onNavigate={handleNavigate} />
          <HomePage onNavigate={handleNavigate} />
        </>
      )}

      {currentPage === 'signup' && <SignUpPage onNavigate={handleNavigate} />}

      {currentPage === 'goals-personal' && (
        <GoalInputPage
          category="personal"
          onNext={(goals) => handleGoalsSubmit('personal', goals)}
          initialGoals={userGoals.personal}
        />
      )}

      {currentPage === 'goals-financial' && (
        <GoalInputPage
          category="financial"
          onNext={(goals) => handleGoalsSubmit('financial', goals)}
          initialGoals={userGoals.financial}
        />
      )}

      {currentPage === 'goals-social' && (
        <GoalInputPage
          category="social"
          onNext={(goals) => handleGoalsSubmit('social', goals)}
          initialGoals={userGoals.social}
        />
      )}

      {currentPage === 'goals-career' && (
        <GoalInputPage
          category="career"
          onNext={(goals) => handleGoalsSubmit('career', goals)}
          initialGoals={userGoals.career}
        />
      )}

      {currentPage === 'final-details' && <FinalDetailsPage goals={userGoals} />}
    </div>
  );
}

export default App;
