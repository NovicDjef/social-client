import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface WorkspaceState {
  activePlatformFilters: string[];
  calendarView: 'month' | 'week' | 'day';
  analyticsRange: '7d' | '30d' | '90d' | '12m';
  togglePlatformFilter: (p: string) => void;
  clearFilters: () => void;
  setCalendarView: (v: 'month' | 'week' | 'day') => void;
  setAnalyticsRange: (r: '7d' | '30d' | '90d' | '12m') => void;
}

export const useWorkspaceStore = create<WorkspaceState>()(
  persist(
    (set) => ({
      activePlatformFilters: [], calendarView: 'month', analyticsRange: '30d',
      togglePlatformFilter: (p) => set((s) => ({
        activePlatformFilters: s.activePlatformFilters.includes(p)
          ? s.activePlatformFilters.filter((x) => x !== p) : [...s.activePlatformFilters, p],
      })),
      clearFilters: () => set({ activePlatformFilters: [] }),
      setCalendarView: (calendarView) => set({ calendarView }),
      setAnalyticsRange: (analyticsRange) => set({ analyticsRange }),
    }),
    { name: 'nm-workspace', storage: createJSONStorage(() => localStorage), partialize: (s) => ({ calendarView: s.calendarView, analyticsRange: s.analyticsRange }) }
  )
);
