'use client';
import { PageHeader } from '../../../components/shared/PageHeader';
import { PlanGate } from '../../../components/shared/PlanGate';
import { Ear } from 'lucide-react';

export default function SocialListeningPage() {
  return (
    <PlanGate requiredPlan="BUSINESS"><div className="space-y-6">
      <PageHeader title="Social Listening" description="Surveillez les mentions de votre marque" />
      <div className="bg-white rounded-xl p-8 border border-[var(--color-border)] text-center">
        <Ear size={48} className="mx-auto mb-4 text-[var(--color-text-muted)]" />
        <h3 className="font-bold text-lg mb-2">Surveillez votre marque</h3>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">Ajoutez des mots-clés pour surveiller ce qu'on dit de vous en ligne</p>
        <button className="px-6 py-3 bg-[var(--color-accent)] text-[var(--color-primary)] font-semibold rounded-lg">Configurer les alertes</button>
      </div>
    </div></PlanGate>
  );
}
