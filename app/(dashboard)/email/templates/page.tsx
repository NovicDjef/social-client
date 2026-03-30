'use client';
import { PageHeader } from '../../../../components/shared/PageHeader';
import { Plus, FileText } from 'lucide-react';

export default function TemplatesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Templates email" breadcrumb={[{ label: 'Email', href: '/email' }, { label: 'Templates' }]}
        actions={<button className="flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-lg font-semibold text-sm"><Plus size={16} /> Nouveau template</button>} />
      <div className="grid md:grid-cols-3 gap-4">
        {['Bienvenue', 'Newsletter', 'Promo', 'Rappel RDV', 'Merci', 'Réactivation'].map((t, i) => (
          <div key={i} className="bg-white rounded-xl p-6 border border-[var(--color-border)] hover:shadow-md transition-shadow cursor-pointer">
            <FileText size={24} className="text-[var(--color-accent)] mb-3" />
            <h3 className="font-semibold">{t}</h3>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">Template {t.toLowerCase()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
