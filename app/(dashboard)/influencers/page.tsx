'use client';
import { PageHeader } from '../../../components/shared/PageHeader';
import { PlanGate } from '../../../components/shared/PlanGate';

export default function InfluencersPage() {
  return (
    <PlanGate requiredPlan="AGENCY"><div className="space-y-6">
      <PageHeader title="Influencer Marketplace 🇨🇦" description="Trouvez des micro-influenceurs canadiens" />
      <div className="grid md:grid-cols-3 gap-4">
        {[{ name: 'Julie Tremblay', handle: '@julie_beaute', followers: '45.2k', engagement: '5.8%', province: 'QC', price: '150$/post' },
          { name: 'Alex Chen', handle: '@alex_eats_mtl', followers: '28.1k', engagement: '7.2%', province: 'QC', price: '100$/post' },
          { name: 'Sarah Wilson', handle: '@sarah_wellness', followers: '62.3k', engagement: '4.5%', province: 'ON', price: '200$/post' }
        ].map((inf, i) => (
          <div key={i} className="bg-white rounded-xl p-6 border border-[var(--color-border)]">
            <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center text-[var(--color-accent)] font-bold mb-3">{inf.name.charAt(0)}</div>
            <h3 className="font-semibold">{inf.name}</h3><p className="text-xs text-[var(--color-text-muted)]">{inf.handle} • {inf.province}</p>
            <div className="grid grid-cols-2 gap-2 mt-3 text-sm"><div>{inf.followers}<br /><span className="text-xs text-[var(--color-text-muted)]">Abonnés</span></div><div>{inf.engagement}<br /><span className="text-xs text-[var(--color-text-muted)]">Engagement</span></div></div>
            <div className="flex items-center justify-between mt-4"><span className="font-bold text-[var(--color-accent)]">{inf.price}</span><button className="px-3 py-1.5 bg-[var(--color-primary)] text-white rounded-lg text-xs">Contacter</button></div>
          </div>
        ))}
      </div>
    </div></PlanGate>
  );
}
