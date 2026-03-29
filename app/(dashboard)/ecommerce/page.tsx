'use client';
import { PageHeader } from '../../../components/shared/PageHeader';
import { PlanGate } from '../../../components/shared/PlanGate';
import { ShoppingCart } from 'lucide-react';

export default function EcommercePage() {
  return (
    <PlanGate requiredPlan="BUSINESS"><div className="space-y-6">
      <PageHeader title="E-commerce Social" description="Vendez directement depuis vos réseaux sociaux" />
      <div className="bg-white rounded-xl p-8 border border-[var(--color-border)] text-center">
        <ShoppingCart size={48} className="mx-auto mb-4 text-[var(--color-text-muted)]" />
        <h3 className="font-bold text-lg mb-2">Connectez votre boutique Shopify</h3>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">Synchronisez vos produits et vendez via Instagram Shopping et TikTok Shop</p>
        <button className="px-6 py-3 bg-[var(--color-accent)] text-[var(--color-primary)] font-semibold rounded-lg">Connecter Shopify</button>
      </div>
    </div></PlanGate>
  );
}
