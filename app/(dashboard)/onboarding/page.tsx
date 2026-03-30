'use client';
import { useState } from 'react';
import { Check, ChevronRight, Camera, ThumbsUp, Briefcase, Video, Globe, MapPin } from 'lucide-react';

const steps = [
  { title: 'Votre entreprise', desc: 'Nom, secteur, province' },
  { title: 'Réseaux sociaux', desc: 'Connectez vos comptes' },
  { title: 'Votre plan', desc: 'Confirmation' },
  { title: 'Langue', desc: 'FR ou EN' },
  { title: 'Google Business', desc: 'Optionnel' },
  { title: 'Tour guidé', desc: 'Découvrir le dashboard' },
];

export default function OnboardingPage() {
  const [step, setStep] = useState(0);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Bienvenue chez Nm<span className="text-[var(--color-accent)]">Solution</span>!</h1>
          <p className="text-[var(--color-text-muted)] text-sm mt-2">Configurons votre espace en quelques étapes</p>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${i < step ? 'bg-[var(--color-success)] text-white' : i === step ? 'bg-[var(--color-accent)] text-[var(--color-primary)]' : 'bg-[var(--color-surface-2)] text-[var(--color-text-muted)]'}`}>
                {i < step ? <Check size={16} /> : i + 1}
              </div>
              {i < steps.length - 1 && <div className={`w-8 h-0.5 ${i < step ? 'bg-[var(--color-success)]' : 'bg-[var(--color-border)]'}`} />}
            </div>
          ))}
        </div>

        {/* Step content */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--color-border)]">
          <h2 className="text-lg font-bold mb-1">{steps[step].title}</h2>
          <p className="text-sm text-[var(--color-text-muted)] mb-6">{steps[step].desc}</p>

          {step === 0 && (
            <div className="space-y-4">
              <input type="text" placeholder="Nom de l'entreprise" className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm outline-none" />
              <select className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm"><option>Restaurant</option><option>Clinique</option><option>Boutique</option><option>Salon</option><option>Artisan</option><option>Tech</option><option>Autre</option></select>
              <select className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm"><option>Québec</option><option>Ontario</option><option>BC</option><option>Alberta</option></select>
            </div>
          )}
          {step === 1 && (
            <div className="grid grid-cols-2 gap-3">
              {[{ l: 'Instagram', icon: Camera, c: 'bg-pink-50 text-pink-600' }, { l: 'Facebook', icon: ThumbsUp, c: 'bg-blue-50 text-blue-600' }, { l: 'LinkedIn', icon: Briefcase, c: 'bg-sky-50 text-sky-600' }, { l: 'TikTok', icon: Video, c: 'bg-gray-100 text-gray-800' }].map((p, i) => (
                <button key={i} className={`flex items-center gap-3 p-4 rounded-xl border border-[var(--color-border)] ${p.c}`}><p.icon size={20} /> Connecter {p.l}</button>
              ))}
            </div>
          )}
          {step === 2 && <div className="bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/20 rounded-xl p-6 text-center"><p className="text-lg font-bold">Plan Business</p><p className="text-sm text-[var(--color-text-muted)]">199$/mois • Essai gratuit 14 jours</p></div>}
          {step === 3 && (
            <div className="flex gap-4">
              <button className="flex-1 p-6 rounded-xl border-2 border-[var(--color-accent)] text-center font-bold">Français 🇨🇦</button>
              <button className="flex-1 p-6 rounded-xl border border-[var(--color-border)] text-center">English 🇨🇦</button>
            </div>
          )}
          {step === 4 && (
            <div className="text-center"><MapPin size={48} className="mx-auto mb-4 text-[var(--color-text-muted)]" /><button className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg">Connecter Google Business</button><p className="text-xs text-[var(--color-text-muted)] mt-3">Optionnel — vous pouvez le faire plus tard</p></div>
          )}
          {step === 5 && (
            <div className="text-center"><p className="text-4xl mb-4">🎉</p><p className="text-lg font-bold mb-2">Tout est prêt!</p><p className="text-sm text-[var(--color-text-muted)]">Votre espace NmSolution est configuré. Commencez à explorer!</p></div>
          )}

          <div className="flex justify-between mt-8">
            {step > 0 ? <button onClick={() => setStep(step - 1)} className="px-4 py-2 text-sm text-[var(--color-text-muted)]">Retour</button> : <div />}
            <button onClick={() => step < 5 ? setStep(step + 1) : window.location.href = '/'} className="flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-lg font-semibold text-sm">
              {step === 5 ? 'Commencer!' : 'Suivant'} {step < 5 && <ChevronRight size={16} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
