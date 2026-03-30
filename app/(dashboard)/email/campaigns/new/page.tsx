'use client';
import { PageHeader } from '../../../../../components/shared/PageHeader';
import { AIBadge } from '../../../../../components/shared/AIBadge';
import { Sparkles, Send } from 'lucide-react';

export default function NewEmailCampaignPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Nouvelle campagne email" breadcrumb={[{ label: 'Email', href: '/email' }, { label: 'Campagnes', href: '/email/campaigns' }, { label: 'Nouvelle' }]} />
      <div className="bg-white rounded-xl p-6 border border-[var(--color-border)] max-w-3xl space-y-4">
        <div><label className="block text-xs text-[var(--color-text-muted)] mb-1">Nom de la campagne</label><input type="text" placeholder="Ex: Newsletter Mars 2025" className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm outline-none" /></div>
        <div>
          <div className="flex items-center justify-between mb-1"><label className="text-xs text-[var(--color-text-muted)]">Objet</label><button className="flex items-center gap-1 text-xs text-[var(--color-accent)]"><Sparkles size={12} /> Générer avec GPT-4o <AIBadge provider="gpt4o" /></button></div>
          <input type="text" placeholder="Objet de l'email..." className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm outline-none" />
        </div>
        <div><label className="block text-xs text-[var(--color-text-muted)] mb-1">Contenu</label><textarea rows={10} placeholder="Corps de l'email..." className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg text-sm resize-none outline-none" /></div>
        <div className="flex gap-3"><button className="px-4 py-2.5 bg-white border border-[var(--color-border)] rounded-lg text-sm">Sauvegarder brouillon</button><button className="flex items-center gap-2 px-6 py-2.5 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-lg font-semibold text-sm"><Send size={16} /> Envoyer</button></div>
      </div>
    </div>
  );
}
