'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuthStore } from '../../lib/stores/authStore';
import { hasAccess, type PlanType } from '../../lib/utils/plan-limits';
import { LayoutDashboard, BrainCircuit, Share2, CalendarDays, Sparkles, Image, Video, Mic, BarChart3, Megaphone, Search, Mail, Ear, Users, Bot, Star, MessageCircle, UserCheck, Globe, QrCode, MapPin, ShoppingCart, Building2, ShieldCheck, DollarSign, FileText, Settings, CreditCard, Users2, Lock } from 'lucide-react';

const ICONS: Record<string, any> = { LayoutDashboard, BrainCircuit, Share2, CalendarDays, Sparkles, Image, Video, Mic, BarChart3, Megaphone, Search, Mail, Ear, Users, Bot, Star, MessageCircle, UserCheck, Globe, QrCode, MapPin, ShoppingCart, Building2, ShieldCheck, DollarSign, FileText, Settings, CreditCard, Users2 };

const NAV = [
  { section: 'Vue d\'ensemble', items: [
    { href: '/', icon: 'LayoutDashboard', label: 'Tableau de bord' },
    { href: '/strategy', icon: 'BrainCircuit', label: 'IA Stratège', badge: 'IA', plan: 'BUSINESS' as PlanType },
  ]},
  { section: 'Publication', items: [
    { href: '/social', icon: 'Share2', label: 'Réseaux sociaux' },
    { href: '/social/scheduler', icon: 'CalendarDays', label: 'Calendrier' },
    { href: '/content/text', icon: 'Sparkles', label: 'Texte IA' },
    { href: '/content/images', icon: 'Image', label: 'Images IA', plan: 'PRO' as PlanType },
    { href: '/content/video', icon: 'Video', label: 'Vidéo IA', plan: 'BUSINESS' as PlanType },
    { href: '/content/voice', icon: 'Mic', label: 'Voix → Contenu', plan: 'PRO' as PlanType },
  ]},
  { section: 'Croissance', items: [
    { href: '/analytics', icon: 'BarChart3', label: 'Analytics' },
    { href: '/ads', icon: 'Megaphone', label: 'Publicités', plan: 'PRO' as PlanType },
    { href: '/seo', icon: 'Search', label: 'SEO', plan: 'PRO' as PlanType },
    { href: '/email', icon: 'Mail', label: 'Email Marketing', plan: 'PRO' as PlanType },
    { href: '/social-listening', icon: 'Ear', label: 'Social Listening', plan: 'BUSINESS' as PlanType },
  ]},
  { section: 'Engagement', items: [
    { href: '/crm', icon: 'Users', label: 'CRM', plan: 'PRO' as PlanType },
    { href: '/chatbot', icon: 'Bot', label: 'Chatbot IA', plan: 'PRO' as PlanType },
    { href: '/reputation', icon: 'Star', label: 'Réputation', plan: 'PRO' as PlanType },
    { href: '/whatsapp', icon: 'MessageCircle', label: 'WhatsApp', plan: 'BUSINESS' as PlanType },
    { href: '/influencers', icon: 'UserCheck', label: 'Influenceurs', plan: 'AGENCY' as PlanType },
  ]},
  { section: 'Outils', items: [
    { href: '/landing-pages', icon: 'Globe', label: 'Landing Pages', plan: 'PRO' as PlanType },
    { href: '/qr-campaigns', icon: 'QrCode', label: 'QR Campaigns' },
    { href: '/google-business', icon: 'MapPin', label: 'Google Business' },
    { href: '/ecommerce', icon: 'ShoppingCart', label: 'E-commerce', plan: 'BUSINESS' as PlanType },
    { href: '/multi-location', icon: 'Building2', label: 'Multi-location', plan: 'BUSINESS' as PlanType },
  ]},
  { section: 'Canada 🇨🇦', items: [
    { href: '/casl', icon: 'ShieldCheck', label: 'Conformité CASL' },
    { href: '/grants', icon: 'DollarSign', label: 'Subventions' },
    { href: '/white-label', icon: 'FileText', label: 'White-label', plan: 'AGENCY' as PlanType },
  ]},
  { section: 'Compte', items: [
    { href: '/settings', icon: 'Settings', label: 'Paramètres' },
    { href: '/settings/billing', icon: 'CreditCard', label: 'Facturation' },
    { href: '/settings/team', icon: 'Users2', label: 'Équipe' },
  ]},
];

export function Sidebar() {
  const pathname = usePathname();
  const workspace = useAuthStore((s) => s.workspace);
  const currentPlan = workspace?.planType ?? 'STARTER';

  return (
    <aside className="w-64 bg-[var(--sidebar-bg)] border-r border-white/10 min-h-screen flex flex-col overflow-y-auto">
      <div className="p-5 border-b border-white/10">
        <span className="text-lg font-bold text-white">Nm<span className="text-[var(--color-accent)]">Solution</span></span>
        <div className="mt-2 text-xs text-[var(--sidebar-text)] truncate">{workspace?.name || 'Mon workspace'}</div>
        <span className="inline-block mt-1 text-[10px] px-2 py-0.5 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-full">{currentPlan}</span>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-5">
        {NAV.map((section) => (
          <div key={section.section}>
            <div className="text-[10px] uppercase tracking-wider text-white/30 px-3 mb-1.5">{section.section}</div>
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const Icon = ICONS[item.icon] || LayoutDashboard;
                const active = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
                const locked = item.plan && !hasAccess(currentPlan, item.plan);
                const badge = 'badge' in item ? (item as any).badge : undefined;
                return (
                  <Link key={item.href} href={locked ? '#' : item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${active ? 'bg-[var(--sidebar-active-bg)] text-[var(--sidebar-active-text)]' : 'text-[var(--sidebar-text)] hover:bg-white/5 hover:text-white'} ${locked ? 'opacity-50' : ''}`}>
                    <Icon size={18} />
                    <span className="flex-1 truncate">{item.label}</span>
                    {badge && <span className="text-[10px] px-1.5 py-0.5 bg-[var(--color-accent)]/20 text-[var(--color-accent)] rounded-full">{badge}</span>}
                    {locked && <Lock size={12} className="text-white/30" />}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
