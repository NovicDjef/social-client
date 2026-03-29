'use client';
import { PageHeader } from '../../../components/shared/PageHeader';
import { PlanGate } from '../../../components/shared/PlanGate';
import { MapPin, Plus } from 'lucide-react';

export default function MultiLocationPage() {
  return (
    <PlanGate requiredPlan="BUSINESS"><div className="space-y-6">
      <PageHeader title="Multi-location" description="Gérez plusieurs emplacements" actions={<button className="flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-lg font-semibold text-sm"><Plus size={16} /> Ajouter</button>} />
      <div className="grid md:grid-cols-2 gap-4">
        {[{ name: 'Clinique Lumière — Plateau', score: 78, posts: 12 }, { name: 'Clinique Lumière — Laval', score: 65, posts: 8 }].map((loc, i) => (
          <div key={i} className="bg-white rounded-xl p-6 border border-[var(--color-border)]">
            <div className="flex items-center gap-3 mb-4"><MapPin className="text-[var(--color-accent)]" /><h3 className="font-semibold">{loc.name}</h3></div>
            <div className="grid grid-cols-2 gap-4 text-center"><div className="bg-[var(--color-surface-2)] rounded-lg p-3"><p className="text-xl font-bold">{loc.score}</p><span className="text-xs text-[var(--color-text-muted)]">Score santé</span></div><div className="bg-[var(--color-surface-2)] rounded-lg p-3"><p className="text-xl font-bold">{loc.posts}</p><span className="text-xs text-[var(--color-text-muted)]">Posts ce mois</span></div></div>
          </div>
        ))}
      </div>
    </div></PlanGate>
  );
}
