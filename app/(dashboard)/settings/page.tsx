'use client';
import { PageHeader } from '../../../components/shared/PageHeader';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Paramètres" description="Profil de votre entreprise" />
      <div className="bg-white rounded-xl p-6 border border-[var(--color-border)] space-y-4 max-w-2xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-[var(--color-accent)]/10 rounded-xl flex items-center justify-center text-2xl font-bold text-[var(--color-accent)]">CL</div>
          <div><h3 className="font-bold">Clinique Esthétique Lumière</h3><p className="text-sm text-[var(--color-text-muted)]">clinique • Québec</p></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div><label className="block text-xs text-[var(--color-text-muted)] mb-1">Nom entreprise</label><input type="text" defaultValue="Clinique Esthétique Lumière" className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm" /></div>
          <div><label className="block text-xs text-[var(--color-text-muted)] mb-1">Secteur</label><select className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm"><option>Clinique</option><option>Restaurant</option><option>Boutique</option></select></div>
          <div><label className="block text-xs text-[var(--color-text-muted)] mb-1">Province</label><select className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm"><option>QC</option><option>ON</option><option>BC</option></select></div>
          <div><label className="block text-xs text-[var(--color-text-muted)] mb-1">Site web</label><input type="url" defaultValue="https://cliniquelumiere.ca" className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm" /></div>
          <div><label className="block text-xs text-[var(--color-text-muted)] mb-1">Langue</label><select className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm"><option>Français</option><option>English</option></select></div>
          <div><label className="block text-xs text-[var(--color-text-muted)] mb-1">Fuseau horaire</label><select className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm"><option>America/Toronto</option><option>America/Vancouver</option></select></div>
        </div>
        <button className="px-6 py-2.5 bg-[var(--color-accent)] text-[var(--color-primary)] font-semibold rounded-lg text-sm">Sauvegarder</button>
      </div>
    </div>
  );
}
