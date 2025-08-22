
export type Tab = 'analyze' | 'learn' | 'quiz';

export interface AnalysisResult {
  co2e: number;
  explanation: string;
}

export interface OptimizationResult {
  optimizedCode: string;
  explanation: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
}
