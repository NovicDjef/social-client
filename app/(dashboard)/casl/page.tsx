'use client';
import { PageHeader } from '../../../components/shared/PageHeader';
import { ShieldCheck, FileText, Download } from 'lucide-react';

export default function CASLPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Conformité CASL 🇨🇦" description="Loi canadienne anti-pourriel" actions={<button className="flex items-center gap-2 px-4 py-2 bg-white border border-[var(--color-border)] rounded-lg text-sm"><Download size={14} /> Exporter registre</button>} />
      <div className="bg-white rounded-xl p-6 border border-[var(--color-border)] flex items-center gap-6">
        <div className="relative w-20 h-20"><svg className="w-20 h-20 -rotate-90" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="#E2E8F0" strokeWidth="8" /><circle cx="50" cy="50" r="40" fill="none" stroke="#10B981" strokeWidth="8" strokeLinecap="round" strokeDasharray={`${85 * 2.51} ${100 * 2.51}`} /></svg><span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-[var(--color-success)]">85</span></div>
        <div><h3 className="font-bold">Score conformité CASL</h3><p className="text-sm text-[var(--color-text-secondary)]">Votre registre de consentements est à jour</p></div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[{ l: 'Consentements actifs', v: '2,340' }, { l: 'Consentements exprès', v: '1,890' }, { l: 'Implicites', v: '450' }, { l: 'Révocations ce mois', v: '12' }].map((s, i) => (
          <div key={i} className="bg-white rounded-xl p-4 border border-[var(--color-border)]"><span className="text-xs text-[var(--color-text-muted)]">{s.l}</span><p className="text-xl font-bold">{s.v}</p></div>
        ))}
      </div>
      <div className="bg-white rounded-xl p-6 border border-[var(--color-border)]">
        <h3 className="font-semibold mb-3">Checklist conformité</h3>
        <div className="space-y-2">
          {['Double opt-in activé', 'Lien désinscription sur tous les emails', 'Registre des consentements actif', 'Identification de l\'expéditeur'].map((c, i) => (
            <div key={i} className="flex items-center gap-2"><ShieldCheck size={16} className="text-[var(--color-success)]" /><span className="text-sm">{c}</span></div>
          ))}
        </div>
      </div>
    </div>
  );
}
