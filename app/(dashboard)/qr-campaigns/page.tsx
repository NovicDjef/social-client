'use client';
import { PageHeader } from '../../../components/shared/PageHeader';
import { Plus, QrCode } from 'lucide-react';

export default function QRCampaignsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="QR Code Campaigns" actions={<button className="flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-lg font-semibold text-sm"><Plus size={16} /> Créer un QR code</button>} />
      <div className="grid md:grid-cols-3 gap-4">
        {[{ name: 'Menu Restaurant', scans: 456, type: 'URL' }, { name: 'Promo Instagram', scans: 234, type: 'Instagram' }, { name: 'WiFi Guest', scans: 89, type: 'WiFi' }].map((q, i) => (
          <div key={i} className="bg-white rounded-xl p-6 border border-[var(--color-border)] text-center">
            <QrCode size={64} className="mx-auto mb-4 text-[var(--color-primary)]" />
            <h3 className="font-semibold">{q.name}</h3>
            <p className="text-xs text-[var(--color-text-muted)] mb-2">Type: {q.type}</p>
            <p className="text-lg font-bold text-[var(--color-accent)]">{q.scans} scans</p>
          </div>
        ))}
      </div>
    </div>
  );
}
