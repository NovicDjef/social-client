'use client';
import { PageHeader } from '../../../../components/shared/PageHeader';
import Link from 'next/link';
import { Plus, Mail } from 'lucide-react';

const campaigns = [
  { name: 'Newsletter Mars', status: 'Envoyée', sent: 2340, opens: '38%', clicks: '4.2%', date: '2025-03-15' },
  { name: 'Promo Été 2025', status: 'Planifiée', sent: 0, opens: '-', clicks: '-', date: '2025-04-01' },
  { name: 'Bienvenue automatique', status: 'Active', sent: 450, opens: '52%', clicks: '8.1%', date: '2025-01-01' },
];

export default function EmailCampaignsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Campagnes email" breadcrumb={[{ label: 'Email Marketing', href: '/email' }, { label: 'Campagnes' }]}
        actions={<Link href="/email/campaigns/new" className="flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-lg font-semibold text-sm"><Plus size={16} /> Nouvelle campagne</Link>} />
      <div className="bg-white rounded-xl border border-[var(--color-border)] overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-[var(--color-border)] text-[var(--color-text-muted)] text-left"><th className="px-4 py-3">Campagne</th><th className="px-4 py-3">Statut</th><th className="px-4 py-3">Envoyés</th><th className="px-4 py-3">Ouvertures</th><th className="px-4 py-3">Clics</th><th className="px-4 py-3">Date</th></tr></thead>
          <tbody>{campaigns.map((c, i) => (
            <tr key={i} className="border-b border-[var(--color-border)]">
              <td className="px-4 py-3 font-medium">{c.name}</td>
              <td className="px-4 py-3"><span className={`text-xs px-2 py-0.5 rounded-full ${c.status === 'Envoyée' ? 'bg-green-50 text-green-600' : c.status === 'Active' ? 'bg-blue-50 text-blue-600' : 'bg-yellow-50 text-yellow-600'}`}>{c.status}</span></td>
              <td className="px-4 py-3">{c.sent}</td><td className="px-4 py-3">{c.opens}</td><td className="px-4 py-3">{c.clicks}</td><td className="px-4 py-3 text-[var(--color-text-muted)]">{c.date}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
}
