'use client';
import { PageHeader } from '../../../../components/shared/PageHeader';
import { FileText, Download } from 'lucide-react';

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Rapports PDF" description="Générez des rapports de performance" />
      <div className="bg-white rounded-xl p-6 border border-[var(--color-border)] max-w-2xl space-y-4">
        <div><label className="block text-xs text-[var(--color-text-muted)] mb-1">Période</label>
          <select className="w-full px-3 py-2 border border-[var(--color-border)] rounded-lg text-sm"><option>Ce mois</option><option>Mois dernier</option><option>Personnalisé</option></select></div>
        <div><label className="block text-xs text-[var(--color-text-muted)] mb-1">Plateformes</label>
          <div className="flex gap-2">{['Instagram', 'Facebook', 'TikTok', 'LinkedIn'].map(p => <label key={p} className="flex items-center gap-1.5 text-sm"><input type="checkbox" defaultChecked className="rounded" />{p}</label>)}</div></div>
        <div><label className="block text-xs text-[var(--color-text-muted)] mb-1">Langue du rapport</label>
          <select className="w-full px-3 py-2 border border-[var(--color-border)] rounded-lg text-sm"><option>Français</option><option>English</option></select></div>
        <button className="flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-lg font-semibold"><FileText size={18} /> Générer le rapport PDF</button>
      </div>
    </div>
  );
}
