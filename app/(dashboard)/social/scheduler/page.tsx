'use client';
import { useState } from 'react';
import { PageHeader } from '../../../../components/shared/PageHeader';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import Link from 'next/link';

const mockPosts = [
  { id: '1', day: 3, title: 'Promo soin visage été', platform: 'Instagram', status: 'scheduled', time: '19:00' },
  { id: '2', day: 5, title: 'Avant/après traitement', platform: 'TikTok', status: 'scheduled', time: '12:00' },
  { id: '3', day: 8, title: 'Témoignage cliente', platform: 'Facebook', status: 'draft', time: '10:00' },
  { id: '4', day: 12, title: 'Conseil skincare', platform: 'Instagram', status: 'published', time: '18:30' },
  { id: '5', day: 15, title: 'Nouvelle offre botox', platform: 'LinkedIn', status: 'scheduled', time: '09:00' },
];

const statusColors: Record<string, string> = { scheduled: 'bg-blue-100 text-blue-700', published: 'bg-green-100 text-green-700', draft: 'bg-gray-100 text-gray-500', failed: 'bg-red-100 text-red-600' };
const platformColors: Record<string, string> = { Instagram: 'border-l-pink-400', TikTok: 'border-l-gray-800', Facebook: 'border-l-blue-500', LinkedIn: 'border-l-sky-600' };

export default function SchedulerPage() {
  const [month] = useState(new Date());
  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const firstDay = new Date(month.getFullYear(), month.getMonth(), 1).getDay();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="space-y-6">
      <PageHeader title="Calendrier éditorial" breadcrumb={[{ label: 'Réseaux sociaux', href: '/social' }, { label: 'Calendrier' }]}
        actions={<Link href="/social/composer" className="flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-lg font-semibold text-sm"><Plus size={16} /> Nouveau post</Link>} />

      <div className="bg-white rounded-xl border border-[var(--color-border)] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-[var(--color-border)]">
          <button className="p-2 hover:bg-[var(--color-surface-2)] rounded-lg"><ChevronLeft size={20} /></button>
          <h3 className="font-semibold">{month.toLocaleDateString('fr-CA', { month: 'long', year: 'numeric' })}</h3>
          <button className="p-2 hover:bg-[var(--color-surface-2)] rounded-lg"><ChevronRight size={20} /></button>
        </div>
        <div className="grid grid-cols-7 text-center text-xs font-medium text-[var(--color-text-muted)] border-b border-[var(--color-border)]">
          {['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'].map(d => <div key={d} className="py-2">{d}</div>)}
        </div>
        <div className="grid grid-cols-7">
          {Array.from({ length: firstDay }, (_, i) => <div key={`e${i}`} className="min-h-[100px] border-b border-r border-[var(--color-border)] bg-[var(--color-surface-2)]" />)}
          {days.map(day => {
            const dayPosts = mockPosts.filter(p => p.day === day);
            return (
              <div key={day} className="min-h-[100px] border-b border-r border-[var(--color-border)] p-1.5">
                <span className={`text-xs font-medium ${day === new Date().getDate() ? 'w-6 h-6 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-full flex items-center justify-center' : 'text-[var(--color-text-muted)]'}`}>{day}</span>
                <div className="mt-1 space-y-1">
                  {dayPosts.map(p => (
                    <div key={p.id} className={`text-[10px] px-1.5 py-1 rounded border-l-2 ${platformColors[p.platform] || ''} bg-[var(--color-surface-2)] truncate cursor-pointer hover:bg-[var(--color-border)]`}>
                      <span className="font-medium">{p.time}</span> {p.title}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
