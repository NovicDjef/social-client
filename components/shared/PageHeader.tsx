import { ChevronRight } from 'lucide-react';

interface Props {
  title: string;
  description?: string;
  breadcrumb?: { label: string; href?: string }[];
  actions?: React.ReactNode;
}

export function PageHeader({ title, description, breadcrumb, actions }: Props) {
  return (
    <div className="mb-6">
      {breadcrumb && (
        <div className="flex items-center gap-1 text-sm text-[var(--color-text-muted)] mb-2">
          {breadcrumb.map((b, i) => (
            <span key={i} className="flex items-center gap-1">
              {i > 0 && <ChevronRight size={14} />}
              {b.href ? <a href={b.href} className="hover:text-[var(--color-accent)]">{b.label}</a> : <span>{b.label}</span>}
            </span>
          ))}
        </div>
      )}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          {description && <p className="text-[var(--color-text-secondary)] text-sm mt-1">{description}</p>}
        </div>
        {actions && <div className="flex items-center gap-3">{actions}</div>}
      </div>
    </div>
  );
}
