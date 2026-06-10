import { prisma } from "./prisma";

export async function getActiveWorkspace(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      organizationId: true,
      organization: {
        select: { id: true, name: true, plan: true },
      },
    },
  });
  if (!user) return null;
  return {
    userId: user.id,
    activeOrganizationId: user.organizationId,
    organization: user.organization,
  };
}
