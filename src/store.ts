import {create} from 'zustand';

type User = {
  token: string;
  user: {
    id: number;
    full_name: string;
    image?: string;
    email: string;
    password: string;
    id_assigned: string;
    child_id?: string;
    compulsory_courses_completed?: boolean;
  };
};

type Store = {
  role: string | null;
  setRole: (role: string) => void;
  setOtp: (otp: string) => void;
  isAuthenticated: boolean;
  setAuthenticated: (isAuthenticated: boolean) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  answers: Record<number, string>;
  setAnswer: (questionId: number, answer: string) => void;
  grandAssessmentAnswers: Record<number, string>;
  setGrandAssessmentAnswer: (questionId: number, answer: string) => void;
  otp: string | null;
};

export const useStore = create<Store>(set => ({
  role: null,
  isAuthenticated: false,
  user: null,
  answers: {},
  grandAssessmentAnswers: {},
  otp: null,
  setRole: role => set(() => ({role})),
  setOtp: otp => set(() => ({otp})),
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
