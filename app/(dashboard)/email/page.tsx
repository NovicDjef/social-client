'use client';
import { PageHeader } from '../../../components/shared/PageHeader';
import { PlanGate } from '../../../components/shared/PlanGate';
import { AIBadge } from '../../../components/shared/AIBadge';
import { Plus, ShieldCheck } from 'lucide-react';

export default function EmailPage() {
  return (
    <PlanGate requiredPlan="PRO">
      <div className="space-y-6">
        <PageHeader title="Email Marketing" actions={<><AIBadge provider="gpt4o" model="Subject Lines" /><span className="flex items-center gap-1 text-xs text-[var(--color-success)]"><ShieldCheck size={14} /> Conforme CASL</span></>} />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[{ l: 'Abonnés actifs', v: '2,340' }, { l: 'Taux ouverture', v: '38%' }, { l: 'Taux clics', v: '4.2%' }, { l: 'Désinscrits', v: '12' }].map((s, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-[var(--color-border)]"><span className="text-xs text-[var(--color-text-muted)]">{s.l}</span><p className="text-xl font-bold">{s.v}</p></div>
          ))}
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-lg font-semibold text-sm"><Plus size={16} /> Nouvelle campagne</button>
          <button className="px-4 py-2 bg-white border border-[var(--color-border)] rounded-lg text-sm">Séquences</button>
          <button className="px-4 py-2 bg-white border border-[var(--color-border)] rounded-lg text-sm">Templates</button>
        </div>
      </div>
    </PlanGate>
  );
}
