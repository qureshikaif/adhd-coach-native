import {create} from 'zustand';

type User = {
  token: string;
  user: {
    id: number;
    full_name: string;
    email: string;
    password: string;
    id_assigned: string;
    child_id?: string;
    personal_info: string;
  };
};

type Store = {
  role: string | null;
  setRole: (role: string) => void;
  isAuthenticated: boolean;
  setAuthenticated: (isAuthenticated: boolean) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  answers: Record<number, string>;
  setAnswer: (questionId: number, answer: string) => void;
  grandAssessmentAnswers: Record<number, string>;
  setGrandAssessmentAnswer: (questionId: number, answer: string) => void;
};

export const useStore = create<Store>(set => ({
  role: null,
  isAuthenticated: false,
  user: null,
  answers: {},
  grandAssessmentAnswers: {},
  setRole: role => set(() => ({role})),
  setAuthenticated: isAuthenticated => set(() => ({isAuthenticated})),
  setUser: user => set(() => ({user})),
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
