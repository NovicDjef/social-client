'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '', company: '', province: 'QC' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true);
    // Call POST /api/v1/auth/register
    setTimeout(() => { window.location.href = '/'; }, 1500);
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Créer votre compte <span className="text-[var(--color-accent)]">NmSolution</span></h1>
          <p className="text-[var(--color-text-muted)] text-sm mt-2">14 jours d'essai gratuit, aucune carte requise</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--color-border)] space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-medium mb-1">Prénom</label><input type="text" required value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})} className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg outline-none focus:ring-2 focus:ring-[var(--color-primary)]" /></div>
            <div><label className="block text-sm font-medium mb-1">Nom</label><input type="text" required value={form.lastName} onChange={e => setForm({...form, lastName: e.target.value})} className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg outline-none focus:ring-2 focus:ring-[var(--color-primary)]" /></div>
          </div>
          <div><label className="block text-sm font-medium mb-1">Email professionnel</label><input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg outline-none focus:ring-2 focus:ring-[var(--color-primary)]" /></div>
          <div><label className="block text-sm font-medium mb-1">Mot de passe</label><input type="password" required minLength={8} value={form.password} onChange={e => setForm({...form, password: e.target.value})} className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg outline-none focus:ring-2 focus:ring-[var(--color-primary)]" /></div>
          <div><label className="block text-sm font-medium mb-1">Nom de l'entreprise</label><input type="text" required value={form.company} onChange={e => setForm({...form, company: e.target.value})} className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg outline-none focus:ring-2 focus:ring-[var(--color-primary)]" /></div>
          <div><label className="block text-sm font-medium mb-1">Province</label>
            <select value={form.province} onChange={e => setForm({...form, province: e.target.value})} className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
              <option value="QC">Québec</option><option value="ON">Ontario</option><option value="BC">British Columbia</option><option value="AB">Alberta</option><option value="MB">Manitoba</option><option value="SK">Saskatchewan</option><option value="NS">Nova Scotia</option><option value="NB">New Brunswick</option>
            </select>
          </div>
          <button type="submit" disabled={loading} className="w-full py-3 bg-[var(--color-accent)] text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-accent-hover)] disabled:opacity-50">
            {loading ? 'Création...' : 'Créer mon compte gratuit'}
          </button>
          <p className="text-center text-xs text-[var(--color-text-muted)]">Déjà un compte? <Link href="/login" className="text-[var(--color-accent)]">Se connecter</Link></p>
        </form>
      </div>
    </div>
  );
}
