'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true); setError('');
    const res = await signIn('credentials', { email, password, redirect: false });
    if (res?.error) { setError('Email ou mot de passe incorrect'); setLoading(false); }
    else router.push('/');
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Nm<span className="text-[var(--color-accent)]">Solution</span></h1>
          <p className="text-[var(--color-text-muted)] text-sm mt-2">Connectez-vous à votre dashboard</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--color-border)] space-y-4">
          {error && <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg">{error}</div>}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg outline-none focus:ring-2 focus:ring-[var(--color-primary)]" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Mot de passe</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg outline-none focus:ring-2 focus:ring-[var(--color-primary)]" />
          </div>
          <button type="submit" disabled={loading} className="w-full py-3 bg-[var(--color-accent)] text-[var(--color-primary)] font-semibold rounded-lg hover:bg-[var(--color-accent-hover)] disabled:opacity-50">
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
          <div className="flex justify-between text-sm">
            <Link href="/forgot-password" className="text-[var(--color-accent)]">Mot de passe oublié?</Link>
            <Link href="/register" className="text-[var(--color-accent)]">Créer un compte</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
