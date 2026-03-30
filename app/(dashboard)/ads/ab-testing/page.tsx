'use client';
import { PageHeader } from '../../../../components/shared/PageHeader';
import { PlanGate } from '../../../../components/shared/PlanGate';
import { AIBadge } from '../../../../components/shared/AIBadge';

export default function ABTestingPage() {
  return (
    <PlanGate requiredPlan="BUSINESS">
      <div className="space-y-6">
        <PageHeader title="Auto A/B Testing" description="L'IA teste et optimise vos publicités automatiquement" actions={<AIBadge provider="gpt4o" model="GPT-4o A/B" />} />
        <div className="bg-white rounded-xl p-6 border border-[var(--color-border)]">
          <p className="text-[var(--color-text-secondary)] mb-4">Sélectionnez une campagne active pour lancer un test A/B automatique.</p>
          <select className="w-full px-3 py-2 border border-[var(--color-border)] rounded-lg text-sm mb-4"><option>Promo Soin Visage Été</option><option>Botox Awareness</option></select>
          <button className="px-6 py-3 bg-[var(--color-accent)] text-[var(--color-primary)] font-semibold rounded-lg">Générer 3 variantes IA</button>
        </div>
      </div>
    </PlanGate>
  );
}
