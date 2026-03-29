'use client';
import { PageHeader } from '../../../components/shared/PageHeader';
import { Wifi, Eye, Heart, MousePointer, Users, TrendingUp } from 'lucide-react';

const metrics = [
  { label: 'Portée', value: '24.8k', trend: '+12%', icon: Wifi }, { label: 'Impressions', value: '67.2k', trend: '+8%', icon: Eye },
  { label: 'Engagement', value: '4.7%', trend: '+0.8%', icon: Heart }, { label: 'Clics', value: '1,234', trend: '+15%', icon: MousePointer },
  { label: 'Abonnés', value: '19.8k', trend: '+345', icon: Users }, { label: 'Croissance', value: '+1.8%', trend: 'cette sem.', icon: TrendingUp },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Analytics" actions={
        <select className="px-3 py-2 border border-[var(--color-border)] rounded-lg text-sm"><option>30 derniers jours</option><option>7 jours</option><option>90 jours</option><option>12 mois</option></select>
      } />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((m, i) => (
          <div key={i} className="bg-white rounded-xl p-5 border border-[var(--color-border)]">
            <div className="flex items-center justify-between mb-2"><span className="text-sm text-[var(--color-text-muted)]">{m.label}</span><m.icon size={18} className="text-[var(--color-accent)]" /></div>
            <div className="text-2xl font-bold">{m.value}</div>
            <div className="text-xs text-[var(--color-success)]">{m.trend}</div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl p-6 border border-[var(--color-border)] h-64 flex items-center justify-center text-[var(--color-text-muted)]">Graphique de performance — Recharts LineChart</div>
    </div>
  );
}
