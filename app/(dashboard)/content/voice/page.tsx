'use client';
import { PageHeader } from '../../../../components/shared/PageHeader';
import { AIBadge } from '../../../../components/shared/AIBadge';
import { PlanGate } from '../../../../components/shared/PlanGate';
import { Mic, MicOff } from 'lucide-react';
import { useState } from 'react';

export default function VoicePage() {
  const [recording, setRecording] = useState(false);
  const [transcript, setTranscript] = useState('');

  return (
    <PlanGate requiredPlan="PRO">
      <div className="space-y-6">
        <PageHeader title="Voix → Contenu" description="Parlez, l'IA transcrit et crée du contenu" />
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-[var(--color-border)] text-center">
            <AIBadge provider="whisper" /> <span className="mx-2 text-[var(--color-text-muted)]">+</span> <AIBadge provider="elevenlabs" />
            <div className="mt-8 mb-6">
              <button onClick={() => setRecording(!recording)} className={`w-20 h-20 rounded-full flex items-center justify-center ${recording ? 'bg-red-500 animate-pulse' : 'bg-[var(--color-primary)]'} text-white`}>
                {recording ? <MicOff size={32} /> : <Mic size={32} />}
              </button>
            </div>
            <p className="text-sm text-[var(--color-text-muted)]">{recording ? 'Enregistrement en cours...' : 'Cliquez pour commencer'}</p>
            {transcript && <textarea rows={6} value={transcript} onChange={e => setTranscript(e.target.value)} className="w-full mt-4 px-4 py-3 border border-[var(--color-border)] rounded-lg text-sm" />}
          </div>
          <div className="bg-white rounded-xl p-6 border border-[var(--color-border)]">
            <h3 className="font-semibold mb-4">Contenu généré</h3>
            <p className="text-[var(--color-text-muted)] text-sm">Enregistrez votre voix, puis Claude créera un post depuis la transcription.</p>
          </div>
        </div>
      </div>
    </PlanGate>
  );
}
