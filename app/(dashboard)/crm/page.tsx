'use client';
import { PageHeader } from '../../../components/shared/PageHeader';
import { PlanGate } from '../../../components/shared/PlanGate';
import { Plus } from 'lucide-react';

const columns = [
  { status: 'Nouveau', count: 8, color: 'border-blue-400', contacts: ['Sophie Martin', 'Jean Lavoie', 'Nathalie Roy'] },
  { status: 'Contacté', count: 4, color: 'border-yellow-400', contacts: ['Pierre Gagnon', 'Marc Lefebvre'] },
  { status: 'Qualifié', count: 6, color: 'border-purple-400', contacts: ['Isabelle Roy', 'David Chen', 'Emma Wilson'] },
  { status: 'Proposition', count: 3, color: 'border-orange-400', contacts: ['Marc Lefebvre'] },
  { status: 'Converti', count: 4, color: 'border-green-400', contacts: ['David Thompson', 'Louise Bergeron'] },
];

export default function CRMPage() {
  return (
    <PlanGate requiredPlan="PRO">
      <div className="space-y-6">
        <PageHeader title="CRM & Pipeline de Leads" actions={
          <button className="flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-lg font-semibold text-sm"><Plus size={16} /> Nouveau contact</button>
        } />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {[{ l: 'Total leads', v: '25' }, { l: 'Taux conversion', v: '16%' }, { l: 'Valeur pipeline', v: '12,500$' }, { l: 'Délai moyen', v: '8 jours' }].map((s, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-[var(--color-border)]"><span className="text-xs text-[var(--color-text-muted)]">{s.l}</span><p className="text-xl font-bold">{s.v}</p></div>
          ))}
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {columns.map((col, i) => (
            <div key={i} className={`min-w-[250px] bg-[var(--color-surface-2)] rounded-xl p-4 border-t-2 ${col.color}`}>
              <div className="flex items-center justify-between mb-3"><span className="font-semibold text-sm">{col.status}</span><span className="text-xs bg-white px-2 py-0.5 rounded-full">{col.count}</span></div>
              <div className="space-y-2">
                {col.contacts.map((c, j) => (
                  <div key={j} className="bg-white rounded-lg p-3 shadow-sm border border-[var(--color-border)] cursor-grab"><p className="text-sm font-medium">{c}</p><p className="text-xs text-[var(--color-text-muted)]">Score: {Math.floor(Math.random() * 50) + 50}</p></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PlanGate>
  );
}
