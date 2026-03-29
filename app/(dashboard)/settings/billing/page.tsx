'use client';
import { PageHeader } from '../../../../components/shared/PageHeader';
import { CreditCard, ExternalLink } from 'lucide-react';

export default function BillingPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Facturation" />
      <div className="bg-white rounded-xl p-6 border border-[var(--color-border)] max-w-2xl">
        <div className="flex items-center justify-between mb-6">
          <div><h3 className="font-bold text-lg">Plan Business</h3><p className="text-sm text-[var(--color-text-muted)]">199$/mois • Facturé mensuellement</p></div>
          <span className="px-3 py-1 bg-[var(--color-success)]/10 text-[var(--color-success)] text-xs font-bold rounded-full">ACTIF</span>
        </div>
        <div className="space-y-2 text-sm mb-6">
          <div className="flex justify-between"><span className="text-[var(--color-text-muted)]">Prochaine facturation</span><span>15 avril 2025</span></div>
          <div className="flex justify-between"><span className="text-[var(--color-text-muted)]">Mode de paiement</span><span>Visa •••• 4242</span></div>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg text-sm">Gérer l'abonnement <ExternalLink size={14} /></button>
          <a href="https://nmsolution.ca/pricing" className="px-4 py-2 bg-white border border-[var(--color-border)] rounded-lg text-sm">Changer de plan</a>
        </div>
      </div>
    </div>
  );
}
