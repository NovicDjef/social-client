'use client';
import { Bell, Search, Globe, Sparkles } from 'lucide-react';
import { useAuthStore } from '../../lib/stores/authStore';
import { useUIStore } from '../../lib/stores/uiStore';
import Link from 'next/link';

export function Header() {
  const user = useAuthStore((s) => s.user);
  const unread = useUIStore((s) => s.unreadNotifications);
  const toggleAI = useUIStore((s) => s.toggleAIPanel);

  return (
    <header className="h-16 bg-white border-b border-[var(--color-border)] flex items-center justify-between px-6">
      <div className="flex items-center gap-3 flex-1 max-w-md">
        <Search size={18} className="text-[var(--color-text-muted)]" />
        <input type="text" placeholder="Rechercher..." className="bg-transparent text-sm outline-none w-full placeholder:text-[var(--color-text-muted)]" />
      </div>

      <div className="flex items-center gap-3">
        <button onClick={toggleAI} className="p-2 text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 rounded-lg" title="IA Assistant">
          <Sparkles size={20} />
        </button>

        <Link href="/en" className="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]" title="Switch language">
          <Globe size={20} />
        </Link>

        <button className="relative p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]">
          <Bell size={20} />
          {unread > 0 && <span className="absolute top-1 right-1 w-2 h-2 bg-[var(--color-error)] rounded-full" />}
        </button>

        <div className="flex items-center gap-2 pl-3 border-l border-[var(--color-border)]">
          <div className="w-8 h-8 bg-[var(--color-accent)]/20 rounded-full flex items-center justify-center text-[var(--color-accent)] text-sm font-bold">
            {user?.firstName?.charAt(0) || 'U'}
          </div>
          <span className="text-sm font-medium hidden lg:block">{user?.firstName}</span>
        </div>
      </div>
    </header>
  );
}
