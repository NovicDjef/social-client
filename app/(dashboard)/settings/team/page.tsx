'use client';
import { PageHeader } from '../../../../components/shared/PageHeader';
import { Plus } from 'lucide-react';

const members = [
  { name: 'Marie-Ève Tremblay', email: 'marie@cliniquelumiere.ca', role: 'OWNER', status: 'Actif' },
  { name: 'Jean Bouchard', email: 'jean@cliniquelumiere.ca', role: 'ADMIN', status: 'Actif' },
  { name: 'Sarah Chen', email: 'sarah@cliniquelumiere.ca', role: 'MEMBER', status: 'Invité' },
];

const roleColors: Record<string, string> = { OWNER: 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]', ADMIN: 'bg-blue-50 text-blue-600', MEMBER: 'bg-gray-100 text-gray-600', VIEWER: 'bg-gray-50 text-gray-400' };

export default function TeamPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Équipe" description="Gérez les membres de votre workspace" actions={<button className="flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-lg font-semibold text-sm"><Plus size={16} /> Inviter</button>} />
      <div className="bg-white rounded-xl border border-[var(--color-border)] overflow-hidden max-w-3xl">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-[var(--color-border)] text-[var(--color-text-muted)] text-left"><th className="px-4 py-3">Membre</th><th className="px-4 py-3">Rôle</th><th className="px-4 py-3">Statut</th><th className="px-4 py-3">Actions</th></tr></thead>
          <tbody>{members.map((m, i) => (
            <tr key={i} className="border-b border-[var(--color-border)]">
              <td className="px-4 py-3"><p className="font-medium">{m.name}</p><p className="text-xs text-[var(--color-text-muted)]">{m.email}</p></td>
              <td className="px-4 py-3"><span className={`text-xs px-2 py-0.5 rounded-full ${roleColors[m.role]}`}>{m.role}</span></td>
              <td className="px-4 py-3 text-[var(--color-text-muted)]">{m.status}</td>
              <td className="px-4 py-3">{m.role !== 'OWNER' && <button className="text-xs text-red-400">Retirer</button>}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
}
