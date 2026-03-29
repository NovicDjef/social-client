'use client';
import { PageHeader } from '../../../components/shared/PageHeader';
import { PlanGate } from '../../../components/shared/PlanGate';
import { AIBadge } from '../../../components/shared/AIBadge';
import { Star, ThumbsUp, Minus, ThumbsDown } from 'lucide-react';

const reviews = [
  { author: 'Marie L.', rating: 5, text: 'Excellent service! Mon visage n\'a jamais été aussi lumineux.', source: 'Google', sentiment: 'positive', date: '2025-03-25' },
  { author: 'Jean P.', rating: 4, text: 'Bon service, un peu d\'attente mais résultat impeccable.', source: 'Facebook', sentiment: 'positive', date: '2025-03-22' },
  { author: 'Sophie B.', rating: 3, text: 'Correct mais le prix est un peu élevé.', source: 'Google', sentiment: 'neutral', date: '2025-03-20' },
];

export default function ReputationPage() {
  return (
    <PlanGate requiredPlan="PRO">
      <div className="space-y-6">
        <PageHeader title="Réputation" actions={<AIBadge provider="claude" model="Sentiment Analysis" />} />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 border border-[var(--color-border)]"><span className="text-xs text-[var(--color-text-muted)]">Score global</span><p className="text-3xl font-bold text-[var(--color-accent)]">4.7<span className="text-lg">/5</span></p></div>
          <div className="bg-green-50 rounded-xl p-4 border border-green-200"><ThumbsUp size={16} className="text-green-600 mb-1" /><p className="text-xl font-bold text-green-600">72%</p><span className="text-xs">Positif</span></div>
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200"><Minus size={16} className="text-gray-500 mb-1" /><p className="text-xl font-bold text-gray-500">20%</p><span className="text-xs">Neutre</span></div>
          <div className="bg-red-50 rounded-xl p-4 border border-red-200"><ThumbsDown size={16} className="text-red-500 mb-1" /><p className="text-xl font-bold text-red-500">8%</p><span className="text-xs">Négatif</span></div>
        </div>
        <div className="space-y-4">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white rounded-xl p-5 border border-[var(--color-border)]">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2"><span className="font-semibold text-sm">{r.author}</span><span className="text-xs text-[var(--color-text-muted)]">{r.source}</span></div>
                <div className="flex gap-0.5">{[...Array(r.rating)].map((_, j) => <Star key={j} size={14} className="text-[var(--color-accent)] fill-[var(--color-accent)]" />)}</div>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] mb-3">{r.text}</p>
              <button className="text-xs text-[var(--color-accent)] font-medium">Répondre avec l'IA →</button>
            </div>
          ))}
        </div>
      </div>
    </PlanGate>
  );
}
