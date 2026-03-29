'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Mot de passe oublié</h1>
          <p className="text-[var(--color-text-muted)] text-sm mt-2">Entrez votre email pour recevoir un lien de réinitialisation</p>
        </div>
        {sent ? (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--color-border)] text-center">
            <p className="text-[var(--color-success)] font-medium mb-4">Email envoyé!</p>
            <p className="text-sm text-[var(--color-text-secondary)]">Vérifiez votre boîte mail pour le lien de réinitialisation.</p>
            <Link href="/login" className="block mt-6 text-[var(--color-accent)] text-sm">Retour à la connexion</Link>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--color-border)] space-y-4">
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="votre@email.ca" className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg outline-none focus:ring-2 focus:ring-[var(--color-primary)]" />
            <button type="submit" className="w-full py-3 bg-[var(--color-accent)] text-[var(--color-primary)] font-semibold rounded-lg">Envoyer le lien</button>
            <Link href="/login" className="block text-center text-sm text-[var(--color-text-muted)]">Retour</Link>
          </form>
        )}
      </div>
    </div>
  );
}
