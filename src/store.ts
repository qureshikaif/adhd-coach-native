import {create} from 'zustand';

type Authentication = {
  role: string | null;
  setRole: (role: string) => void;
  isAuthenticated: boolean;
  setAuthenticated: (isAuthenticated: boolean) => void;
};

export type Store = Authentication;

export const useStore = create<Store>(set => ({
  role: null,
  isAuthenticated: false,
  setRole: role => set(() => ({role})),
  setAuthenticated: isAuthenticated => set(() => ({isAuthenticated})),
}));
