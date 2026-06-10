import { getSession } from "../lib/auth/session";

export async function requireTenant(userId: string): Promise<string> {
  const session = await getSession(userId);
  if (!session?.organizationId) {
    throw new Error("missing organizationId on session");
  }
  return session.organizationId;
}

export function scopeQueryToOrg<T extends { organizationId?: string }>(
  organizationId: string,
  query: T,
): T & { organizationId: string } {
  return { ...query, organizationId };
}
