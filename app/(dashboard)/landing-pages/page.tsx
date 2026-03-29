'use client';
import { PageHeader } from '../../../components/shared/PageHeader';
import { PlanGate } from '../../../components/shared/PlanGate';
import { AIBadge } from '../../../components/shared/AIBadge';
import { Plus, Eye, MousePointer, TrendingUp } from 'lucide-react';

export default function LandingPagesPage() {
  return (
    <PlanGate requiredPlan="PRO"><div className="space-y-6">
      <PageHeader title="Landing Page Builder" actions={<><AIBadge provider="claude" /><button className="flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-lg font-semibold text-sm"><Plus size={16} /> Créer une page</button></>} />
      <div className="grid md:grid-cols-2 gap-4">
        {[{ title: 'Promo Été Soins Visage', status: 'Publié', views: 1234, conversions: 89, rate: '7.2%' }, { title: 'Programme Fidélité', status: 'Brouillon', views: 0, conversions: 0, rate: '0%' }].map((p, i) => (
          <div key={i} className="bg-white rounded-xl p-6 border border-[var(--color-border)]">
            <div className="flex justify-between mb-3"><h3 className="font-semibold">{p.title}</h3><span className={`text-xs px-2 py-0.5 rounded-full ${p.status === 'Publié' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-500'}`}>{p.status}</span></div>
            <div className="grid grid-cols-3 gap-2 text-center text-sm"><div><Eye size={14} className="mx-auto mb-1 text-[var(--color-text-muted)]" />{p.views}</div><div><MousePointer size={14} className="mx-auto mb-1 text-[var(--color-text-muted)]" />{p.conversions}</div><div><TrendingUp size={14} className="mx-auto mb-1 text-[var(--color-text-muted)]" />{p.rate}</div></div>
          </div>
        ))}
      </div>
    </div></PlanGate>
  );
}
