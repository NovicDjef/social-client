'use client';
import { PageHeader } from '../../../components/shared/PageHeader';
import { DollarSign, ExternalLink } from 'lucide-react';

const programs = [
  { name: 'CDAP', region: 'Fédéral', max: '15 000$', deadline: '2025-09-30', desc: 'Programme canadien d\'adoption du numérique' },
  { name: 'MEIE — Virage numérique', region: 'Québec', max: '10 000$', deadline: '2025-12-31', desc: 'Aide à la transformation numérique des PME québécoises' },
  { name: 'Digital Main Street', region: 'Ontario', max: '2 500$', deadline: '2025-06-30', desc: 'Programme de numérisation des commerces de rue' },
];

export default function GrantsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Subventions canadiennes 🇨🇦" description="Programmes pour digitaliser votre entreprise" />
      <div className="bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/20 rounded-xl p-6">
        <div className="flex items-center gap-4"><DollarSign size={32} className="text-[var(--color-accent)]" /><div><p className="text-2xl font-bold">Jusqu'à 15 000$ récupérables</p><p className="text-sm text-[var(--color-text-secondary)]">Selon votre province et votre secteur d'activité</p></div></div>
      </div>
      <div className="space-y-4">
        {programs.map((p, i) => (
          <div key={i} className="bg-white rounded-xl p-6 border border-[var(--color-border)]">
            <div className="flex items-center justify-between mb-2">
              <div><h3 className="font-bold text-lg">{p.name}</h3><span className="text-xs text-[var(--color-text-muted)]">{p.region}</span></div>
              <span className="text-2xl font-bold text-[var(--color-accent)]">{p.max}</span>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] mb-3">{p.desc}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-[var(--color-text-muted)]">Date limite: {p.deadline}</span>
              <button className="flex items-center gap-1 text-sm text-[var(--color-accent)] font-medium">Comment postuler <ExternalLink size={14} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
