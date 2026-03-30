'use client';
import { PageHeader } from '../../../../components/shared/PageHeader';
import Link from 'next/link';
import { Plus } from 'lucide-react';

export default function CampaignsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Campagnes publicitaires" breadcrumb={[{ label: 'Publicités', href: '/ads' }, { label: 'Campagnes' }]}
        actions={<Link href="/ads/campaigns/new" className="flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-lg font-semibold text-sm"><Plus size={16} /> Nouvelle</Link>} />
      <div className="bg-white rounded-xl p-8 border border-[var(--color-border)] text-center text-[var(--color-text-muted)]">Liste des campagnes avec filtres et actions</div>
    </div>
  );
}
