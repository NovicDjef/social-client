'use client';
import { useState } from 'react';
import { PageHeader } from '../../../../components/shared/PageHeader';
import { AIBadge } from '../../../../components/shared/AIBadge';
import { Camera, ThumbsUp, Briefcase, Video, Send, Clock, Save, Sparkles, ImagePlus } from 'lucide-react';

const platforms = [
  { id: 'instagram', label: 'Instagram', icon: Camera, color: 'bg-pink-50 text-pink-600 border-pink-200', maxChars: 2200 },
  { id: 'facebook', label: 'Facebook', icon: ThumbsUp, color: 'bg-blue-50 text-blue-600 border-blue-200', maxChars: 63206 },
  { id: 'linkedin', label: 'LinkedIn', icon: Briefcase, color: 'bg-sky-50 text-sky-600 border-sky-200', maxChars: 3000 },
  { id: 'tiktok', label: 'TikTok', icon: Video, color: 'bg-gray-50 text-gray-800 border-gray-200', maxChars: 2200 },
];

export default function ComposerPage() {
  const [selected, setSelected] = useState<string[]>(['instagram']);
  const [content, setContent] = useState('');
  const [mode, setMode] = useState<'now' | 'schedule' | 'draft'>('schedule');

  const minMax = selected.length > 0 ? Math.min(...platforms.filter(p => selected.includes(p.id)).map(p => p.maxChars)) : 2200;

  return (
    <div className="space-y-6">
      <PageHeader title="Créer un post" breadcrumb={[{ label: 'R��seaux sociaux', href: '/social' }, { label: 'Compositeur' }]} />

      {/* Platform selection */}
      <div className="bg-white rounded-xl p-6 border border-[var(--color-border)]">
        <h3 className="text-sm font-semibold mb-3">Plateformes</h3>
        <div className="flex flex-wrap gap-3">
          {platforms.map(p => (
            <button key={p.id} onClick={() => setSelected(s => s.includes(p.id) ? s.filter(x => x !== p.id) : [...s, p.id])}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium transition-all ${selected.includes(p.id) ? p.color + ' border-current' : 'bg-white text-[var(--color-text-muted)] border-[var(--color-border)]'}`}>
              <p.icon size={18} /> {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content editor */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-xl p-6 border border-[var(--color-border)]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold">Contenu</h3>
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 text-orange-600 rounded-lg text-xs font-medium border border-orange-200">
                <Sparkles size={14} /> Générer avec Claude <AIBadge provider="claude" />
              </button>
            </div>
            <textarea rows={8} value={content} onChange={e => setContent(e.target.value)} placeholder="Écrivez votre message..." className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg text-sm resize-none outline-none focus:ring-2 focus:ring-[var(--color-primary)]" />
            <div className="flex items-center justify-between mt-2">
              <span className={`text-xs ${content.length > minMax ? 'text-[var(--color-error)]' : 'text-[var(--color-text-muted)]'}`}>{content.length} / {minMax} caractères</span>
              <button className="flex items-center gap-1.5 text-xs text-[var(--color-accent)]"><ImagePlus size={14} /> Ajouter des médias</button>
            </div>
          </div>

          {/* Actions */}
          <div className="bg-white rounded-xl p-6 border border-[var(--color-border)]">
            <div className="flex items-center gap-3 mb-4">
              {(['now', 'schedule', 'draft'] as const).map(m => (
                <button key={m} onClick={() => setMode(m)} className={`px-4 py-2 rounded-lg text-sm font-medium ${mode === m ? 'bg-[var(--color-primary)] text-white' : 'bg-[var(--color-surface-2)] text-[var(--color-text-secondary)]'}`}>
                  {m === 'now' ? 'Publier maintenant' : m === 'schedule' ? 'Planifier' : 'Brouillon'}
                </button>
              ))}
            </div>
            {mode === 'schedule' && (
              <div className="grid grid-cols-2 gap-3 mb-4">
                <input type="date" className="px-3 py-2 border border-[var(--color-border)] rounded-lg text-sm" />
                <input type="time" className="px-3 py-2 border border-[var(--color-border)] rounded-lg text-sm" />
              </div>
            )}
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-lg font-semibold text-sm">
                {mode === 'now' ? <><Send size={16} /> Publier</> : mode === 'schedule' ? <><Clock size={16} /> Planifier</> : <><Save size={16} /> Sauvegarder</>}
              </button>
              {mode === 'schedule' && (
                <button className="flex items-center gap-2 px-4 py-3 bg-green-50 text-green-600 border border-green-200 rounded-lg text-sm font-medium">
                  <Sparkles size={16} /> Meilleure heure IA
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="bg-white rounded-xl p-6 border border-[var(--color-border)]">
          <h3 className="text-sm font-semibold mb-4">Aperçu</h3>
          <div className="bg-[var(--color-surface-2)] rounded-lg p-4 min-h-[300px]">
            {content ? (
              <div className="text-sm whitespace-pre-wrap">{content}</div>
            ) : (
              <p className="text-[var(--color-text-muted)] text-sm text-center mt-20">Votre post apparaîtra ici</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
