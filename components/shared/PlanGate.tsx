'use client';
import { useAuthStore } from '../../lib/stores/authStore';
import { hasAccess, type PlanType } from '../../lib/utils/plan-limits';
import { Lock, ArrowUpRight } from 'lucide-react';

export function PlanGate({ requiredPlan, children }: { requiredPlan: PlanType; children: React.ReactNode }) {
  const workspace = useAuthStore((s) => s.workspace);
  const current = workspace?.planType ?? 'STARTER';
  if (hasAccess(current, requiredPlan)) return <>{children}</>;

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="w-16 h-16 bg-[var(--color-surface-2)] rounded-2xl flex items-center justify-center mb-4">
        <Lock className="text-[var(--color-text-muted)]" size={28} />
      </div>
      <h3 className="text-lg font-bold mb-2">Fonctionnalité {requiredPlan}</h3>
      <p className="text-[var(--color-text-secondary)] text-sm mb-6 max-w-md">
        Cette fonctionnalité nécessite le plan {requiredPlan} ou supérieur. Mettez à niveau pour y accéder.
      </p>
      <a href="https://nmsolution.ca/pricing" className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-accent-hover)]">
        Passer au plan {requiredPlan} <ArrowUpRight size={16} />
      </a>
    </div>
  );
}
