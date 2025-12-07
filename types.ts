
export enum Difficulty {
  Easy = 'Easy',
  Medium = 'Medium',
  Hard = 'Hard',
}

export interface Problem {
  id: number;
  title: string;
  slug: string;
  difficulty: Difficulty;
  category: string;
  description: string;
  starterCode: string;
  likes: number;
  solved: boolean;
  externalLink?: string;
  tutorialLink?: string; // "Best Tutorial link"
  articleLink?: string; // "Solution Article"
}

export interface UserStats {
  xp: number;
  streak: number;
  problemsSolved: number;
  rank: string;
  recentActivity: number[]; // Array of activity counts for graph
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  unlocked: boolean;
  description: string;
}

export type ViewState = 'DASHBOARD' | 'PROBLEMS' | 'SOLVER' | 'PROFILE' | 'RESOURCES';
