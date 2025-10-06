export type Priority = 'high' | 'medium' | 'low';
export type GoalCategory = 'personal' | 'financial' | 'social' | 'career';

export interface Goal {
  text: string;
  priority: Priority;
}

export interface UserGoals {
  personal: Goal[];
  financial: Goal[];
  social: Goal[];
  career: Goal[];
}

export interface UserDetails {
  firstName: string;
  lastName: string;
  age: string;
  monthlyIncome: string;
  hasDebts: string;
}
