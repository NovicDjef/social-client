'use client';
import { PageHeader } from '../../../components/shared/PageHeader';
import { MapPin, Phone, Globe, Clock, Eye, MousePointer } from 'lucide-react';

export default function GoogleBusinessPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Google Business Profile" />
      <div className="bg-white rounded-xl p-6 border border-[var(--color-border)]">
        <div className="flex items-center gap-4 mb-6"><MapPin size={24} className="text-[var(--color-accent)]" /><div><h3 className="font-bold">Clinique Esthétique Lumière</h3><p className="text-sm text-[var(--color-text-muted)]">Clinique santé/beauté • Plateau Mont-Royal, Montréal</p></div></div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          {[{ l: 'Vues fiche', v: '4,521', icon: Eye }, { l: 'Clics appel', v: '234', icon: Phone }, { l: 'Visites site', v: '891', icon: Globe }, { l: 'Itinéraires', v: '156', icon: MapPin }].map((s, i) => (
            <div key={i} className="bg-[var(--color-surface-2)] rounded-lg p-4"><s.icon size={16} className="text-[var(--color-accent)] mb-2" /><p className="text-lg font-bold">{s.v}</p><span className="text-xs text-[var(--color-text-muted)]">{s.l}</span></div>
          ))}
        </div>
      </div>
    </div>
  );
}
