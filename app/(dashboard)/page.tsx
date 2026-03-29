'use client';
import { PageHeader } from '../../components/shared/PageHeader';
import { Wifi, Heart, Send, Users, Plus, Sparkles, BarChart3, Megaphone, BrainCircuit } from 'lucide-react';
import Link from 'next/link';

const kpis = [
  { label: 'Portée totale', value: '24.8k', trend: '+12.3%', icon: Wifi, color: 'text-blue-500' },
  { label: 'Taux engagement', value: '4.7%', trend: '+0.8%', icon: Heart, color: 'text-pink-500' },
  { label: 'Posts publiés', value: '34', trend: 'ce mois', icon: Send, color: 'text-green-500' },
  { label: 'Leads générés', value: '18', trend: '+5 cette sem.', icon: Users, color: 'text-purple-500' },
];

const quickActions = [
  { label: 'Créer un post', icon: Plus, href: '/social/composer', color: 'bg-blue-50 text-blue-600' },
  { label: 'Contenu IA', icon: Sparkles, href: '/content/text', color: 'bg-orange-50 text-orange-600' },
  { label: 'Analytics', icon: BarChart3, href: '/analytics', color: 'bg-cyan-50 text-cyan-600' },
  { label: 'Campagne pub', icon: Megaphone, href: '/ads', color: 'bg-yellow-50 text-yellow-600' },
  { label: 'IA Stratège', icon: BrainCircuit, href: '/strategy', color: 'bg-purple-50 text-purple-600' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Bonjour, Marie-Ève 👋" description="Voici un aperçu de vos performances marketing" />

      {/* Score santé */}
      <div className="bg-white rounded-xl p-6 border border-[var(--color-border)] flex items-center gap-6">
        <div className="relative w-24 h-24">
          <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="#E2E8F0" strokeWidth="8" /><circle cx="50" cy="50" r="40" fill="none" stroke="#D4AF37" strokeWidth="8" strokeLinecap="round" strokeDasharray={`${74 * 2.51} ${100 * 2.51}`} /></svg>
          <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold">74</span>
        </div>
        <div><h3 className="font-bold text-lg">Score santé marketing</h3><p className="text-sm text-[var(--color-text-secondary)]">Bon score! Publiez 3x/semaine pour atteindre 85+</p></div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, i) => (
          <div key={i} className="bg-white rounded-xl p-5 border border-[var(--color-border)]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-[var(--color-text-muted)]">{kpi.label}</span>
              <kpi.icon size={18} className={kpi.color} />
            </div>
            <div className="text-2xl font-bold">{kpi.value}</div>
            <div className="text-xs text-[var(--color-success)] mt-1">{kpi.trend}</div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="font-semibold mb-3">Actions rapides</h3>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
          {quickActions.map((a, i) => (
            <Link key={i} href={a.href} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-[var(--color-border)] hover:shadow-md transition-shadow">
              <div className={`w-10 h-10 rounded-lg ${a.color} flex items-center justify-center`}><a.icon size={20} /></div>
              <span className="text-sm font-medium">{a.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
