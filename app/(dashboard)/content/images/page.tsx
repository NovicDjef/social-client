'use client';
import { useState } from 'react';
import { PageHeader } from '../../../../components/shared/PageHeader';
import { AIBadge } from '../../../../components/shared/AIBadge';
import { PlanGate } from '../../../../components/shared/PlanGate';
import { Download, Send, Save } from 'lucide-react';

export default function ImageGeneratorPage() {
  const [prompt, setPrompt] = useState('');
  const [model, setModel] = useState<'dalle3' | 'stability'>('dalle3');
  const [format, setFormat] = useState('1:1');
  const [loading, setLoading] = useState(false);

  return (
    <PlanGate requiredPlan="PRO">
      <div className="space-y-6">
        <PageHeader title="Générateur d'images IA" actions={<AIBadge provider={model} />} />
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-[var(--color-border)] space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div><label className="block text-xs font-medium text-[var(--color-text-muted)] mb-1">Modèle</label>
                <select value={model} onChange={e => setModel(e.target.value as any)} className="w-full px-3 py-2 border border-[var(--color-border)] rounded-lg text-sm">
                  <option value="dalle3">DALL-E 3 (Recommandé)</option><option value="stability">Stability AI</option>
                </select></div>
              <div><label className="block text-xs font-medium text-[var(--color-text-muted)] mb-1">Format</label>
                <select value={format} onChange={e => setFormat(e.target.value)} className="w-full px-3 py-2 border border-[var(--color-border)] rounded-lg text-sm">
                  <option value="1:1">Carré 1:1</option><option value="4:5">Portrait 4:5</option><option value="9:16">Story 9:16</option><option value="16:9">Paysage 16:9</option>
                </select></div>
            </div>
            <textarea rows={4} value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Décrivez l'image souhaitée..." className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg text-sm resize-none outline-none" />
            <button onClick={() => setLoading(true)} disabled={loading || !prompt} className="w-full py-3 bg-[var(--color-accent)] text-[var(--color-primary)] font-semibold rounded-lg disabled:opacity-50">
              {loading ? 'Génération (~15s)...' : 'Générer l\'image'}
            </button>
          </div>
          <div className="bg-white rounded-xl p-6 border border-[var(--color-border)] flex items-center justify-center min-h-[400px]">
            <p className="text-[var(--color-text-muted)] text-sm">L'image générée apparaîtra ici</p>
          </div>
        </div>
      </div>
    </PlanGate>
  );
}
