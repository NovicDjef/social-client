export type PlanType = 'STARTER' | 'PRO' | 'BUSINESS' | 'AGENCY';

export const PLAN_ORDER: Record<PlanType, number> = { STARTER: 0, PRO: 1, BUSINESS: 2, AGENCY: 3 };

export function hasAccess(current: PlanType, required: PlanType): boolean {
  return PLAN_ORDER[current] >= PLAN_ORDER[required];
}
