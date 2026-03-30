'use client';
import { PageHeader } from '../../../../components/shared/PageHeader';
import { Plus, TrendingUp, TrendingDown, Minus } from 'lucide-react';

const keywords = [
  { keyword: 'clinique esthétique montréal', rank: 3, prev: 5, volume: 2400, difficulty: 65 },
  { keyword: 'botox montréal prix', rank: 7, prev: 8, volume: 1800, difficulty: 72 },
  { keyword: 'laser peau québec', rank: 12, prev: 10, volume: 890, difficulty: 45 },
  { keyword: 'soin visage plateau mont-royal', rank: 1, prev: 1, volume: 320, difficulty: 28 },
  { keyword: 'acide hyaluronique montréal', rank: 5, prev: 6, volume: 1500, difficulty: 58 },
];

export default function KeywordsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Suivi mots-clés" breadcrumb={[{ label: 'SEO', href: '/seo' }, { label: 'Mots-clés' }]}
        actions={<button className="flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-lg font-semibold text-sm"><Plus size={16} /> Ajouter</button>} />
      <div className="bg-white rounded-xl border border-[var(--color-border)] overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-[var(--color-border)] text-[var(--color-text-muted)] text-left"><th className="px-4 py-3">Mot-clé</th><th className="px-4 py-3">Position</th><th className="px-4 py-3">Tendance</th><th className="px-4 py-3">Volume</th><th className="px-4 py-3">Difficulté</th></tr></thead>
          <tbody>{keywords.map((k, i) => (
            <tr key={i} className="border-b border-[var(--color-border)]">
              <td className="px-4 py-3 font-medium">{k.keyword}</td>
              <td className="px-4 py-3"><span className={`font-bold ${k.rank <= 3 ? 'text-[var(--color-success)]' : k.rank <= 10 ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-muted)]'}`}>#{k.rank}</span></td>
              <td className="px-4 py-3">{k.rank < k.prev ? <TrendingUp size={16} className="text-[var(--color-success)]" /> : k.rank > k.prev ? <TrendingDown size={16} className="text-[var(--color-error)]" /> : <Minus size={16} className="text-[var(--color-text-muted)]" />}</td>
              <td className="px-4 py-3">{k.volume.toLocaleString()}</td>
              <td className="px-4 py-3"><div className="flex items-center gap-2"><div className="w-12 h-2 bg-[var(--color-surface-2)] rounded-full"><div className={`h-full rounded-full ${k.difficulty > 60 ? 'bg-[var(--color-error)]' : k.difficulty > 40 ? 'bg-[var(--color-warning)]' : 'bg-[var(--color-success)]'}`} style={{ width: `${k.difficulty}%` }} /></div><span className="text-xs">{k.difficulty}</span></div></td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
}
