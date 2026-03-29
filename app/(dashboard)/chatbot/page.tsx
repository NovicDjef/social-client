'use client';
import { PageHeader } from '../../../components/shared/PageHeader';
import { PlanGate } from '../../../components/shared/PlanGate';
import { AIBadge } from '../../../components/shared/AIBadge';
import { MessageCircle, Users, Clock, ThumbsUp } from 'lucide-react';

export default function ChatbotPage() {
  return (
    <PlanGate requiredPlan="PRO">
      <div className="space-y-6">
        <PageHeader title="Chatbot IA 24/7" description="Assistant bilingue FR/EN pour votre site" actions={<AIBadge provider="claude" />} />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[{ l: 'Conversations ce mois', v: '234', icon: MessageCircle }, { l: 'Taux résolution auto', v: '87%', icon: ThumbsUp }, { l: 'Visiteurs uniques', v: '1,891', icon: Users }, { l: 'Temps réponse moyen', v: '1.2s', icon: Clock }].map((s, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-[var(--color-border)]"><div className="flex items-center justify-between mb-2"><span className="text-xs text-[var(--color-text-muted)]">{s.l}</span><s.icon size={16} className="text-[var(--color-accent)]" /></div><p className="text-xl font-bold">{s.v}</p></div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-[var(--color-border)]">
            <h3 className="font-semibold mb-4">Configuration</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-[var(--color-text-muted)]">Nom</span><span>Sophie — Clinique Lumière</span></div>
              <div className="flex justify-between"><span className="text-[var(--color-text-muted)]">Langue</span><span>Auto-détection FR/EN</span></div>
              <div className="flex justify-between"><span className="text-[var(--color-text-muted)]">Statut</span><span className="text-[var(--color-success)]">Actif</span></div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-[var(--color-border)]">
            <h3 className="font-semibold mb-4">Code d'intégration</h3>
            <code className="block bg-[var(--color-surface-2)] p-3 rounded-lg text-xs font-mono break-all">&lt;script src="https://chat.nmsolution.ca/widget.js" data-id="ws_01"&gt;&lt;/script&gt;</code>
            <button className="mt-3 px-3 py-1.5 bg-[var(--color-surface-2)] rounded text-xs font-medium">Copier le code</button>
          </div>
        </div>
      </div>
    </PlanGate>
  );
}
