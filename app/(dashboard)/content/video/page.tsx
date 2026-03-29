'use client';
import { PageHeader } from '../../../../components/shared/PageHeader';
import { AIBadge } from '../../../../components/shared/AIBadge';
import { PlanGate } from '../../../../components/shared/PlanGate';
import { useState } from 'react';

export default function VideoGeneratorPage() {
  const [prompt, setPrompt] = useState('');
  return (
    <PlanGate requiredPlan="BUSINESS">
      <div className="space-y-6">
        <PageHeader title="Générateur vidéo IA" description="Créez des TikToks et Reels automatiquement" actions={<AIBadge provider="runway" model="Runway ML Gen-3" />} />
        <div className="bg-white rounded-xl p-6 border border-[var(--color-border)] space-y-4 max-w-2xl">
          <textarea rows={4} value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Décrivez la vidéo souhaitée..." className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg text-sm resize-none outline-none" />
          <div className="grid grid-cols-2 gap-3">
            <select className="px-3 py-2 border border-[var(--color-border)] rounded-lg text-sm"><option>5 secondes</option><option>10 secondes</option></select>
            <select className="px-3 py-2 border border-[var(--color-border)] rounded-lg text-sm"><option>Cinématique</option><option>TikTok</option><option>Publicité</option></select>
          </div>
          <button disabled={!prompt} className="w-full py-3 bg-[var(--color-accent)] text-[var(--color-primary)] font-semibold rounded-lg disabled:opacity-50">Générer la vidéo (~3 min)</button>
          <p className="text-xs text-[var(--color-text-muted)] text-center">La génération peut prendre 2-5 minutes. Vous recevrez une notification.</p>
        </div>
      </div>
    </PlanGate>
  );
}
