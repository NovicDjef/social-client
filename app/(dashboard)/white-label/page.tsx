'use client';
import { PageHeader } from '../../../components/shared/PageHeader';
import { PlanGate } from '../../../components/shared/PlanGate';
import { FileText, Download } from 'lucide-react';

export default function WhiteLabelPage() {
  return (
    <PlanGate requiredPlan="AGENCY"><div className="space-y-6">
      <PageHeader title="Rapports White-Label" description="Générez des rapports avec le branding de votre agence" />
      <div className="bg-white rounded-xl p-6 border border-[var(--color-border)]">
        <h3 className="font-semibold mb-4">Configuration branding</h3>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-xs text-[var(--color-text-muted)] mb-1">Logo agence</label><div className="border-2 border-dashed border-[var(--color-border)] rounded-lg p-8 text-center text-sm text-[var(--color-text-muted)]">Glissez votre logo ici</div></div>
          <div className="space-y-3"><div><label className="block text-xs text-[var(--color-text-muted)] mb-1">Couleur primaire</label><input type="color" defaultValue="#0A2540" className="w-full h-10 rounded-lg" /></div><div><label className="block text-xs text-[var(--color-text-muted)] mb-1">Couleur secondaire</label><input type="color" defaultValue="#D4AF37" className="w-full h-10 rounded-lg" /></div></div>
        </div>
      </div>
      <button className="flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[var(--color-primary)] font-semibold rounded-lg"><FileText size={18} /> Générer un rapport PDF</button>
    </div></PlanGate>
  );
}
