'use client';
import { PageHeader } from '../../../components/shared/PageHeader';
import { PlanGate } from '../../../components/shared/PlanGate';
import { AIBadge } from '../../../components/shared/AIBadge';
import { useState } from 'react';
import { Send } from 'lucide-react';

export default function StrategyPage() {
  const [question, setQuestion] = useState('');
  return (
    <PlanGate requiredPlan="BUSINESS">
      <div className="space-y-6">
        <PageHeader title="IA Stratège Marketing" description="Votre directeur marketing IA propulsé par Claude Opus" actions={<AIBadge provider="claude" model="Claude Opus 4" />} />
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-[var(--color-border)]">
            <h3 className="font-semibold mb-4">Plan hebdomadaire</h3>
            <button className="w-full py-3 bg-[var(--color-accent)] text-[var(--color-primary)] font-semibold rounded-lg mb-4">Générer le plan de cette semaine</button>
            <div className="space-y-3">
              {['Publier un Reel avant/après soin', 'Répondre aux 3 avis en attente', 'Lancer campagne Meta Ads promo été', 'Envoyer newsletter mensuelle', 'Créer un post éducatif sur TikTok'].map((a, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-[var(--color-surface-2)] rounded-lg">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">{a}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-[var(--color-border)] flex flex-col">
            <h3 className="font-semibold mb-4">Chat avec le stratège</h3>
            <div className="flex-1 bg-[var(--color-surface-2)] rounded-lg p-4 mb-4 min-h-[200px]">
              <p className="text-sm text-[var(--color-text-muted)]">Posez une question marketing...</p>
            </div>
            <div className="flex gap-2">
              <input type="text" value={question} onChange={e => setQuestion(e.target.value)} placeholder="Comment améliorer mon engagement TikTok?" className="flex-1 px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm outline-none" />
              <button className="px-4 py-2.5 bg-[var(--color-primary)] text-white rounded-lg"><Send size={18} /></button>
            </div>
          </div>
        </div>
      </div>
    </PlanGate>
  );
}
