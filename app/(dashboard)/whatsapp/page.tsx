'use client';
import { PageHeader } from '../../../components/shared/PageHeader';
import { PlanGate } from '../../../components/shared/PlanGate';

export default function WhatsAppPage() {
  return (
    <PlanGate requiredPlan="BUSINESS"><div className="space-y-6">
      <PageHeader title="WhatsApp Business" description="Automatisez vos messages clients" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[{ l: 'Messages envoyés', v: '1,234' }, { l: 'Livrés', v: '98%' }, { l: 'Lus', v: '72%' }, { l: 'Réponses', v: '34%' }].map((s, i) => (
          <div key={i} className="bg-white rounded-xl p-4 border border-[var(--color-border)]"><span className="text-xs text-[var(--color-text-muted)]">{s.l}</span><p className="text-xl font-bold">{s.v}</p></div>
        ))}
      </div>
      <div className="bg-white rounded-xl p-6 border border-[var(--color-border)]">
        <h3 className="font-semibold mb-4">Templates messages</h3>
        <p className="text-sm text-[var(--color-text-muted)]">Configurez vos templates WhatsApp Business pour envoyer des messages automatisés.</p>
      </div>
    </div></PlanGate>
  );
}
