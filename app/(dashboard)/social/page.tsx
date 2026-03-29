'use client';
import { PageHeader } from '../../../components/shared/PageHeader';
import { Plus, Camera, ThumbsUp, Briefcase } from 'lucide-react';
import Link from 'next/link';

const accounts = [
  { name: 'Clinique Lumière', handle: '@cliniquelumiere', platform: 'Instagram', followers: 12400, engagement: 4.8, icon: Camera, color: 'text-pink-500' },
  { name: 'Clinique Lumière', handle: 'Clinique Lumière', platform: 'Facebook', followers: 5100, engagement: 3.2, icon: ThumbsUp, color: 'text-blue-500' },
  { name: 'Marie-Ève Tremblay', handle: 'marie-eve-tremblay', platform: 'LinkedIn', followers: 2300, engagement: 5.1, icon: Briefcase, color: 'text-blue-700' },
];

export default function SocialPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Réseaux sociaux" description="Gérez vos comptes connectés" actions={
        <button className="flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-lg font-semibold text-sm"><Plus size={16} /> Connecter un réseau</button>
      } />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {accounts.map((a, i) => (
          <div key={i} className="bg-white rounded-xl p-6 border border-[var(--color-border)]">
            <div className="flex items-center gap-3 mb-4"><a.icon size={24} className={a.color} /><div><p className="font-semibold text-sm">{a.name}</p><p className="text-xs text-[var(--color-text-muted)]">{a.handle}</p></div></div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div><p className="text-xl font-bold">{(a.followers / 1000).toFixed(1)}k</p><p className="text-xs text-[var(--color-text-muted)]">Abonnés</p></div>
              <div><p className="text-xl font-bold">{a.engagement}%</p><p className="text-xs text-[var(--color-text-muted)]">Engagement</p></div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-3">
        <Link href="/social/composer" className="px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg text-sm font-medium">Créer un post</Link>
        <Link href="/social/scheduler" className="px-4 py-2 bg-white border border-[var(--color-border)] rounded-lg text-sm font-medium">Voir le calendrier</Link>
      </div>
    </div>
  );
}
