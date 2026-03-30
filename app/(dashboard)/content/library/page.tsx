'use client';
import { PageHeader } from '../../../../components/shared/PageHeader';
import { Upload, Image, Video, FileAudio, Trash2 } from 'lucide-react';

const files = [
  { name: 'soin-visage-promo.jpg', type: 'image', size: '2.4 MB', date: '2025-03-25' },
  { name: 'tiktok-avant-apres.mp4', type: 'video', size: '18.2 MB', date: '2025-03-22' },
  { name: 'voiceover-promo.mp3', type: 'audio', size: '1.1 MB', date: '2025-03-20' },
  { name: 'clinique-logo.png', type: 'image', size: '0.5 MB', date: '2025-03-15' },
  { name: 'treatment-result.jpg', type: 'image', size: '3.1 MB', date: '2025-03-10' },
];

const icons: Record<string, any> = { image: Image, video: Video, audio: FileAudio };

export default function LibraryPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Bibliothèque médias" actions={<button className="flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-lg font-semibold text-sm"><Upload size={16} /> Téléverser</button>} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {files.map((f, i) => {
          const Icon = icons[f.type] || Image;
          return (
            <div key={i} className="bg-white rounded-xl border border-[var(--color-border)] overflow-hidden group">
              <div className="h-32 bg-[var(--color-surface-2)] flex items-center justify-center relative">
                <Icon size={32} className="text-[var(--color-text-muted)]" />
                <button className="absolute top-2 right-2 p-1.5 bg-red-50 text-red-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={14} /></button>
              </div>
              <div className="p-3"><p className="text-xs font-medium truncate">{f.name}</p><p className="text-[10px] text-[var(--color-text-muted)]">{f.size} • {f.date}</p></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
