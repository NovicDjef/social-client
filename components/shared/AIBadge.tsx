'use client';
import { Sparkles } from 'lucide-react';

type AIProvider = 'claude' | 'gpt4o' | 'dalle3' | 'stability' | 'runway' | 'whisper' | 'elevenlabs';

const PROVIDERS: Record<AIProvider, { label: string; color: string }> = {
  claude: { label: 'Claude', color: 'bg-orange-50 text-orange-700 border-orange-200' },
  gpt4o: { label: 'GPT-4o', color: 'bg-green-50 text-green-700 border-green-200' },
  dalle3: { label: 'DALL-E 3', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  stability: { label: 'Stability AI', color: 'bg-pink-50 text-pink-700 border-pink-200' },
  runway: { label: 'Runway ML', color: 'bg-purple-50 text-purple-700 border-purple-200' },
  whisper: { label: 'Whisper', color: 'bg-gray-50 text-gray-600 border-gray-200' },
  elevenlabs: { label: 'ElevenLabs', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
};

export function AIBadge({ provider, model }: { provider: AIProvider; model?: string }) {
  const cfg = PROVIDERS[provider];
  return (
    <span className={`inline-flex items-center gap-1 border rounded-full px-2 py-0.5 text-xs font-medium ${cfg.color}`}>
      <Sparkles className="w-3 h-3" /> {model ?? cfg.label}
    </span>
  );
}
