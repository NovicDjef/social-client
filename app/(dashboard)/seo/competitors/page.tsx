'use client';
import { PageHeader } from '../../../../components/shared/PageHeader';
import { PlanGate } from '../../../../components/shared/PlanGate';
import { AIBadge } from '../../../../components/shared/AIBadge';
import { Plus } from 'lucide-react';

export default function CompetitorsPage() {
  return (
    <PlanGate requiredPlan="BUSINESS">
      <div className="space-y-6">
        <PageHeader title="Intelligence concurrentielle" breadcrumb={[{ label: 'SEO', href: '/seo' }, { label: 'Concurrents' }]} actions={<AIBadge provider="gpt4o" />} />
        <div className="bg-white rounded-xl p-6 border border-[var(--color-border)] max-w-xl">
          <h3 className="font-semibold mb-4">Ajouter un concurrent (max 3)</h3>
          <div className="flex gap-2"><input type="url" placeholder="https://concurrent.ca" className="flex-1 px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm outline-none" /><button className="flex items-center gap-2 px-4 py-2.5 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-lg font-semibold text-sm"><Plus size={16} /> Analyser</button></div>
        </div>
      </div>
    </PlanGate>
  );
}
