import { prisma } from "../prisma";

export type Session = {
  userId: string;
  email: string;
  organizationId: string;
};

export async function getSession(userId: string): Promise<Session | null> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      organizationId: true,
    },
  });
  if (!user) return null;
  return {
    userId: user.id,
    email: user.email,
    organizationId: user.organizationId,
  };
}

export function tenantFromSession(session: Session): string {
  return session.organizationId;
}
