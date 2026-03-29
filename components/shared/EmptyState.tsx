import { type LucideIcon } from 'lucide-react';

interface Props { icon: LucideIcon; title: string; description: string; action?: React.ReactNode }

export function EmptyState({ icon: Icon, title, description, action }: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-14 h-14 bg-[var(--color-surface-2)] rounded-2xl flex items-center justify-center mb-4">
        <Icon size={24} className="text-[var(--color-text-muted)]" />
      </div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-[var(--color-text-secondary)] mb-4 max-w-sm">{description}</p>
      {action}
    </div>
  );
}
