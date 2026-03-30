'use client';
import { PageHeader } from '../../../../components/shared/PageHeader';
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const convos = [
  { id: '1', visitor: 'Visiteur #1234', lastMsg: 'Quels sont vos horaires?', sentiment: 'positive', status: 'Résolu', time: 'Il y a 2h', messages: 5 },
  { id: '2', visitor: 'Sophie M.', lastMsg: 'Je voudrais prendre un RDV', sentiment: 'positive', status: 'En cours', time: 'Il y a 15min', messages: 3 },
  { id: '3', visitor: 'Visiteur #1891', lastMsg: 'Trop cher!', sentiment: 'negative', status: 'Escaladé', time: 'Hier', messages: 8 },
];

const sentimentColors: Record<string, string> = { positive: 'text-green-500', neutral: 'text-gray-400', negative: 'text-red-500' };

export default function ConversationsPage() {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div className="space-y-6">
      <PageHeader title="Conversations" breadcrumb={[{ label: 'Chatbot', href: '/chatbot' }, { label: 'Conversations' }]} />
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="space-y-2">
          {convos.map(c => (
            <button key={c.id} onClick={() => setSelected(c.id)} className={`w-full text-left bg-white rounded-xl p-4 border ${selected === c.id ? 'border-[var(--color-accent)]' : 'border-[var(--color-border)]'}`}>
              <div className="flex items-center justify-between mb-1"><span className="font-semibold text-sm">{c.visitor}</span><span className="text-[10px] text-[var(--color-text-muted)]">{c.time}</span></div>
              <p className="text-xs text-[var(--color-text-muted)] truncate">{c.lastMsg}</p>
              <div className="flex items-center gap-2 mt-2"><span className={`text-xs ${sentimentColors[c.sentiment]}`}>{c.sentiment === 'positive' ? '😊' : c.sentiment === 'negative' ? '😟' : '😐'}</span><span className="text-[10px] text-[var(--color-text-muted)]">{c.messages} messages</span></div>
            </button>
          ))}
        </div>
        <div className="lg:col-span-2 bg-white rounded-xl border border-[var(--color-border)] p-6 flex items-center justify-center min-h-[400px]">
          {selected ? <p className="text-sm">Conversation #{selected} — historique des messages</p> : <div className="text-center text-[var(--color-text-muted)]"><MessageCircle size={32} className="mx-auto mb-2" /><p className="text-sm">Sélectionnez une conversation</p></div>}
        </div>
      </div>
    </div>
  );
}
