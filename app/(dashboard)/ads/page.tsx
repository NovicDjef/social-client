'use client';
import { PageHeader } from '../../../components/shared/PageHeader';
import { PlanGate } from '../../../components/shared/PlanGate';
import { AIBadge } from '../../../components/shared/AIBadge';
import { Plus } from 'lucide-react';
import Link from 'next/link';

const campaigns = [
  { name: 'Promo Soin Visage Été', platform: 'Meta Ads', status: 'Active', budget: '25$/j', spent: '320$', ctr: '2.8%', roas: '3.2x' },
  { name: 'Botox Awareness', platform: 'Meta Ads', status: 'En pause', budget: '15$/j', spent: '180$', ctr: '3.1%', roas: '2.8x' },
];

export default function AdsPage() {
  return (
    <PlanGate requiredPlan="PRO">
      <div className="space-y-6">
        <PageHeader title="Publicités" actions={
          <><AIBadge provider="gpt4o" model="GPT-4o Optimizer" /><Link href="/ads/new" className="flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-lg font-semibold text-sm"><Plus size={16} /> Nouvelle campagne</Link></>
        } />
        <div className="bg-white rounded-xl border border-[var(--color-border)] overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-[var(--color-border)] text-[var(--color-text-muted)] text-left"><th className="px-4 py-3">Campagne</th><th className="px-4 py-3">Plateforme</th><th className="px-4 py-3">Statut</th><th className="px-4 py-3">Budget</th><th className="px-4 py-3">Dépensé</th><th className="px-4 py-3">CTR</th><th className="px-4 py-3">ROAS</th></tr></thead>
            <tbody>{campaigns.map((c, i) => (
              <tr key={i} className="border-b border-[var(--color-border)]">
                <td className="px-4 py-3 font-medium">{c.name}</td><td className="px-4 py-3 text-[var(--color-text-muted)]">{c.platform}</td>
                <td className="px-4 py-3"><span className={`text-xs px-2 py-0.5 rounded-full ${c.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-600'}`}>{c.status}</span></td>
                <td className="px-4 py-3">{c.budget}</td><td className="px-4 py-3">{c.spent}</td><td className="px-4 py-3">{c.ctr}</td><td className="px-4 py-3 font-bold text-[var(--color-success)]">{c.roas}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </div>
    </PlanGate>
  );
}
