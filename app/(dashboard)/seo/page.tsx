'use client';
import { PageHeader } from '../../../components/shared/PageHeader';
import { PlanGate } from '../../../components/shared/PlanGate';
import { AIBadge } from '../../../components/shared/AIBadge';

export default function SEOPage() {
  return (
    <PlanGate requiredPlan="PRO">
      <div className="space-y-6">
        <PageHeader title="SEO Manager" actions={<AIBadge provider="gpt4o" model="GPT-4o SEO" />} />
        <div className="bg-white rounded-xl p-6 border border-[var(--color-border)] flex items-center gap-6">
          <div className="relative w-24 h-24"><svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="#E2E8F0" strokeWidth="8" /><circle cx="50" cy="50" r="40" fill="none" stroke="#D4AF37" strokeWidth="8" strokeLinecap="round" strokeDasharray={`${68 * 2.51} ${100 * 2.51}`} /></svg><span className="absolute inset-0 flex items-center justify-center text-2xl font-bold">68</span></div>
          <div><h3 className="font-bold text-lg">Score SEO</h3><p className="text-sm text-[var(--color-text-secondary)]">3 problèmes critiques, 7 avertissements</p></div>
          <button className="ml-auto px-4 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-lg font-semibold text-sm">Lancer un audit</button>
        </div>
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="bg-red-50 rounded-xl p-4 border border-red-200"><span className="text-red-600 font-bold text-2xl">3</span><p className="text-sm text-red-600">Critiques</p></div>
          <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200"><span className="text-yellow-600 font-bold text-2xl">7</span><p className="text-sm text-yellow-600">Avertissements</p></div>
          <div className="bg-green-50 rounded-xl p-4 border border-green-200"><span className="text-green-600 font-bold text-2xl">12</span><p className="text-sm text-green-600">Réussis</p></div>
        </div>
      </div>
    </PlanGate>
  );
}
