import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface AppUser {
  id: string; email: string; firstName: string; lastName: string;
  avatarUrl?: string; locale: 'fr' | 'en';
}

export interface AppWorkspace {
  id: string; name: string; slug: string; logoUrl?: string;
  industry?: string; province?: string;
  planType: 'STARTER' | 'PRO' | 'BUSINESS' | 'AGENCY';
  subscriptionStatus: 'ACTIVE' | 'TRIALING' | 'PAST_DUE' | 'CANCELED';
  trialEndsAt?: string; memberRole: 'OWNER' | 'ADMIN' | 'MEMBER' | 'VIEWER';
}

interface AuthState {
  user: AppUser | null;
  workspace: AppWorkspace | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isSubscriptionActive: () => boolean;
  setUser: (u: AppUser) => void;
  setWorkspace: (w: AppWorkspace) => void;
  setAccessToken: (t: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null, workspace: null, accessToken: null, isAuthenticated: false,
      isSubscriptionActive: () => { const s = get().workspace?.subscriptionStatus; return s === 'ACTIVE' || s === 'TRIALING'; },
      setUser: (user) => set({ user, isAuthenticated: true }),
      setWorkspace: (workspace) => set({ workspace }),
      setAccessToken: (accessToken) => set({ accessToken }),
      logout: () => set({ user: null, workspace: null, accessToken: null, isAuthenticated: false }),
    }),
    { name: 'nm-auth', storage: createJSONStorage(() => localStorage), partialize: (s) => ({ user: s.user, workspace: s.workspace }) }
  )
);
