import { create } from 'zustand';

interface AuthState {
  isLoading: boolean;
  error: string;
  setLoading: (loading: boolean) => void;
  setError: (error: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoading: false,
  error: '',
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
}));
