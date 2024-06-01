import {create} from 'zustand';

type Authentication = {
  role: string | null;
  setRole: (role: string) => void;
  isAuthenticated: boolean;
  setAuthenticated: (isAuthenticated: boolean) => void;
  answers: Record<number, string>;
  setAnswer: (questionId: number, answer: string) => void;
};

export type Store = Authentication;

export const useStore = create<Store>(set => ({
  role: null,
  isAuthenticated: false,
  answers: {},
  setRole: role => set(() => ({role})),
  setAuthenticated: isAuthenticated => set(() => ({isAuthenticated})),
  setAnswer: (questionId, answer) =>
    set(state => ({answers: {...state.answers, [questionId]: answer}})),
}));
