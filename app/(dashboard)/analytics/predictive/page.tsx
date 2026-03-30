'use client';
import { PageHeader } from '../../../../components/shared/PageHeader';
import { PlanGate } from '../../../../components/shared/PlanGate';
import { AIBadge } from '../../../../components/shared/AIBadge';
import { TrendingUp, AlertTriangle, Zap, Calendar } from 'lucide-react';

const predictions = [
  { icon: TrendingUp, color: 'text-green-500 bg-green-50', title: 'Ventes estimées : +12% ce mois', desc: 'Basé sur votre engagement croissant et la saisonnalité' },
  { icon: Calendar, color: 'text-blue-500 bg-blue-50', title: 'Meilleur moment pour une promo : vendredi 18h', desc: 'Votre audience est la plus active vendredi soir' },
  { icon: Zap, color: 'text-purple-500 bg-purple-50', title: 'Contenu qui performera : Vidéo courte + humour', desc: 'Les Reels humoristiques ont 3x plus d\'engagement dans votre secteur' },
  { icon: AlertTriangle, color: 'text-orange-500 bg-orange-50', title: 'Risque : Baisse d\'engagement sans publication cette semaine', desc: 'Vous n\'avez rien publié depuis 4 jours' },
];

export default function PredictivePage() {
  return (
    <PlanGate requiredPlan="BUSINESS">
      <div className="space-y-6">
        <PageHeader title="Analytics prédictives" description="Anticipez vos performances avec l'IA" actions={<AIBadge provider="gpt4o" model="GPT-4o Predictive" />} />
        <div className="grid md:grid-cols-2 gap-4">
          {predictions.map((p, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-[var(--color-border)]">
              <div className={`w-10 h-10 rounded-lg ${p.color} flex items-center justify-center mb-3`}><p.icon size={20} /></div>
              <h3 className="font-semibold mb-1">{p.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">{p.desc}</p>
              <button className="mt-3 text-xs text-[var(--color-accent)] font-medium">Appliquer →</button>
            </div>
          ))}
        </div>
      </div>
    </PlanGate>
  );
}
