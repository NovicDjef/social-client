import { create } from 'zustand';

interface UIState {
  sidebarOpen: boolean;
  sidebarCollapsed: boolean;
  composerOpen: boolean;
  aiPanelOpen: boolean;
  unreadNotifications: number;
  setSidebarOpen: (v: boolean) => void;
  toggleSidebarCollapsed: () => void;
  openComposer: () => void;
  closeComposer: () => void;
  toggleAIPanel: () => void;
  setUnreadNotifications: (n: number) => void;
}

export const useUIStore = create<UIState>()((set) => ({
  sidebarOpen: true, sidebarCollapsed: false, composerOpen: false,
  aiPanelOpen: false, unreadNotifications: 0,
  setSidebarOpen: (v) => set({ sidebarOpen: v }),
  toggleSidebarCollapsed: () => set((s) => ({ sidebarCollapsed: !s.sidebarCollapsed })),
  openComposer: () => set({ composerOpen: true }),
  closeComposer: () => set({ composerOpen: false }),
  toggleAIPanel: () => set((s) => ({ aiPanelOpen: !s.aiPanelOpen })),
  setUnreadNotifications: (n) => set({ unreadNotifications: n }),
}));
