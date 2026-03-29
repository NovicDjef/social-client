'use client';
import { useState } from 'react';
import { PageHeader } from '../../../../components/shared/PageHeader';
import { AIBadge } from '../../../../components/shared/AIBadge';
import { Copy, RefreshCw, Send, Save } from 'lucide-react';

export default function TextGeneratorPage() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState('caption');
  const [tone, setTone] = useState('professional');
  const [platform, setPlatform] = useState('instagram');

  const generate = () => {
    setLoading(true);
    setTimeout(() => {
      setResult("Découvrez notre nouveau soin visage à l'acide hyaluronique! ✨ Résultats visibles dès la première séance.\n\n💎 Hydratation profonde\n🌟 Éclat naturel\n⏰ Séance de 45 minutes\n\nPrenez rendez-vous dès maintenant!\n📞 514-555-0123\n📍 Plateau Mont-Royal, Montréal\n\n#CliniqueLumière #SoinVisage #AcideHyaluronique #BeautéMontréal #SkinCare #Montréal");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <PageHeader title="Générateur de texte IA" description="Créez du contenu engageant avec Claude" actions={<AIBadge provider="claude" model="Claude Sonnet 4" />} />
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Input */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-6 border border-[var(--color-border)] space-y-4">
            <div className="grid grid-cols-3 gap-3">
              <div><label className="block text-xs font-medium text-[var(--color-text-muted)] mb-1">Type</label>
                <select value={type} onChange={e => setType(e.target.value)} className="w-full px-3 py-2 border border-[var(--color-border)] rounded-lg text-sm">{['caption', 'hashtags', 'blog_post', 'ad_copy', 'email', 'video_script'].map(t => <option key={t} value={t}>{t}</option>)}</select></div>
              <div><label className="block text-xs font-medium text-[var(--color-text-muted)] mb-1">Ton</label>
                <select value={tone} onChange={e => setTone(e.target.value)} className="w-full px-3 py-2 border border-[var(--color-border)] rounded-lg text-sm">{['professional', 'friendly', 'humorous', 'inspirational'].map(t => <option key={t} value={t}>{t}</option>)}</select></div>
              <div><label className="block text-xs font-medium text-[var(--color-text-muted)] mb-1">Plateforme</label>
                <select value={platform} onChange={e => setPlatform(e.target.value)} className="w-full px-3 py-2 border border-[var(--color-border)] rounded-lg text-sm">{['instagram', 'tiktok', 'facebook', 'linkedin', 'email'].map(p => <option key={p} value={p}>{p}</option>)}</select></div>
            </div>
            <textarea rows={6} value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Décrivez ce que vous voulez générer..." className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg text-sm resize-none outline-none focus:ring-2 focus:ring-[var(--color-primary)]" />
            <button onClick={generate} disabled={loading || !prompt} className="w-full py-3 bg-[var(--color-accent)] text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-accent-hover)] disabled:opacity-50">
              {loading ? 'Génération en cours...' : 'Générer avec Claude'}
            </button>
          </div>
        </div>

        {/* Result */}
        <div className="bg-white rounded-xl p-6 border border-[var(--color-border)]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-sm">Résultat</h3>
            {result && <span className="text-xs text-[var(--color-text-muted)]">{result.length} caractères</span>}
          </div>
          {result ? (
            <>
              <textarea rows={12} value={result} onChange={e => setResult(e.target.value)} className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg text-sm resize-none outline-none mb-4" />
              <div className="flex gap-2">
                <button className="flex items-center gap-1.5 px-3 py-2 bg-[var(--color-surface-2)] rounded-lg text-xs font-medium"><Copy size={14} /> Copier</button>
                <button className="flex items-center gap-1.5 px-3 py-2 bg-[var(--color-surface-2)] rounded-lg text-xs font-medium"><RefreshCw size={14} /> Régénérer</button>
                <button className="flex items-center gap-1.5 px-3 py-2 bg-[var(--color-surface-2)] rounded-lg text-xs font-medium"><Save size={14} /> Sauvegarder</button>
                <button className="flex items-center gap-1.5 px-3 py-2 bg-[var(--color-primary)] text-white rounded-lg text-xs font-medium"><Send size={14} /> Planifier</button>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-64 text-[var(--color-text-muted)] text-sm">Le contenu généré apparaîtra ici</div>
          )}
        </div>
      </div>
    </div>
  );
}
