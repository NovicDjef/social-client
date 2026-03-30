'use client';
import { PageHeader } from '../../../../components/shared/PageHeader';
import { Play, Pause, Plus } from 'lucide-react';

const sequences = [
  { name: 'Bienvenue', trigger: 'Inscription', steps: 5, enrolled: 450, completed: 380, active: true },
  { name: 'Réactivation', trigger: 'Inactivité 30j', steps: 3, enrolled: 120, completed: 45, active: false },
  { name: 'Post-traitement', trigger: 'Après RDV', steps: 4, enrolled: 230, completed: 210, active: true },
];

export default function SequencesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Séquences automatisées" breadcrumb={[{ label: 'Email', href: '/email' }, { label: 'Séquences' }]}
        actions={<button className="flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-lg font-semibold text-sm"><Plus size={16} /> Nouvelle séquence</button>} />
      <div className="space-y-4">
        {sequences.map((s, i) => (
          <div key={i} className="bg-white rounded-xl p-6 border border-[var(--color-border)] flex items-center justify-between">
            <div><h3 className="font-semibold">{s.name}</h3><p className="text-sm text-[var(--color-text-muted)]">Déclencheur: {s.trigger} • {s.steps} étapes</p></div>
            <div className="flex items-center gap-6 text-sm"><div className="text-center"><p className="font-bold">{s.enrolled}</p><span className="text-xs text-[var(--color-text-muted)]">Inscrits</span></div><div className="text-center"><p className="font-bold">{s.completed}</p><span className="text-xs text-[var(--color-text-muted)]">Complétés</span></div>
              <button className={`p-2 rounded-lg ${s.active ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-400'}`}>{s.active ? <Pause size={18} /> : <Play size={18} />}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
