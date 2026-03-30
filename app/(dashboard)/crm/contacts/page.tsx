'use client';
import { PageHeader } from '../../../../components/shared/PageHeader';
import { Plus, Search, Download } from 'lucide-react';
import { useState } from 'react';

const contacts = [
  { name: 'Sophie Martin', email: 'sophie@email.com', company: '', status: 'Nouveau', score: 45, source: 'Instagram' },
  { name: 'Pierre Gagnon', email: 'pierre@gagnon.ca', company: 'Gagnon & Fils', status: 'Qualifié', score: 75, source: 'Site web' },
  { name: 'Isabelle Roy', email: 'isabelle@outlook.com', company: '', status: 'Contacté', score: 55, source: 'Facebook' },
  { name: 'Marc Lefebvre', email: 'marc@events.ca', company: 'Lefebvre Events', status: 'Proposition', score: 90, source: 'Référence' },
  { name: 'David Thompson', email: 'david@tech.io', company: 'TechStartup', status: 'Converti', score: 100, source: 'LinkedIn' },
];

const statusColors: Record<string, string> = { Nouveau: 'bg-blue-50 text-blue-600', Contacté: 'bg-yellow-50 text-yellow-600', Qualifié: 'bg-purple-50 text-purple-600', Proposition: 'bg-orange-50 text-orange-600', Converti: 'bg-green-50 text-green-600' };

export default function ContactsPage() {
  const [search, setSearch] = useState('');
  return (
    <div className="space-y-6">
      <PageHeader title="Contacts" breadcrumb={[{ label: 'CRM', href: '/crm' }, { label: 'Contacts' }]}
        actions={<><button className="flex items-center gap-2 px-3 py-2 bg-white border border-[var(--color-border)] rounded-lg text-sm"><Download size={14} /> Exporter</button><button className="flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-lg font-semibold text-sm"><Plus size={16} /> Nouveau</button></>} />
      <div className="flex items-center gap-2 bg-white border border-[var(--color-border)] rounded-lg px-4 py-2.5"><Search size={18} className="text-[var(--color-text-muted)]" /><input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Rechercher..." className="bg-transparent text-sm outline-none w-full" /></div>
      <div className="bg-white rounded-xl border border-[var(--color-border)] overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-[var(--color-border)] text-[var(--color-text-muted)] text-left"><th className="px-4 py-3">Nom</th><th className="px-4 py-3">Email</th><th className="px-4 py-3">Entreprise</th><th className="px-4 py-3">Statut</th><th className="px-4 py-3">Score</th><th className="px-4 py-3">Source</th></tr></thead>
          <tbody>{contacts.filter(c => c.name.toLowerCase().includes(search.toLowerCase())).map((c, i) => (
            <tr key={i} className="border-b border-[var(--color-border)] hover:bg-[var(--color-surface-2)] cursor-pointer">
              <td className="px-4 py-3 font-medium">{c.name}</td><td className="px-4 py-3 text-[var(--color-text-muted)]">{c.email}</td><td className="px-4 py-3">{c.company || '-'}</td>
              <td className="px-4 py-3"><span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[c.status]}`}>{c.status}</span></td>
              <td className="px-4 py-3"><div className="flex items-center gap-2"><div className="w-8 h-2 bg-[var(--color-surface-2)] rounded-full"><div className="h-full bg-[var(--color-accent)] rounded-full" style={{ width: `${c.score}%` }} /></div><span className="text-xs">{c.score}</span></div></td>
              <td className="px-4 py-3 text-[var(--color-text-muted)]">{c.source}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
}
