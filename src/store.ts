import {create} from 'zustand';

type Store = {
  role: string | null;
  setRole: (role: string) => void;
  isAuthenticated: boolean;
  setAuthenticated: (isAuthenticated: boolean) => void;
  answers: Record<number, string>;
  setAnswer: (questionId: number, answer: string) => void;
  grandAssessmentAnswers: Record<number, string>;
  setGrandAssessmentAnswer: (questionId: number, answer: string) => void;
};

export const useStore = create<Store>(set => ({
  role: null,
  isAuthenticated: false,
  answers: {},
  grandAssessmentAnswers: {},
  setRole: role => set(() => ({role})),
  setAuthenticated: isAuthenticated => set(() => ({isAuthenticated})),
  setAnswer: (questionId, answer) =>
    set(state => ({answers: {...state.answers, [questionId]: answer}})),
  setGrandAssessmentAnswer: (questionId, answer) =>
    set(state => ({
      grandAssessmentAnswers: {
        ...state.grandAssessmentAnswers,
        [questionId]: answer,
      },
    })),
}));
