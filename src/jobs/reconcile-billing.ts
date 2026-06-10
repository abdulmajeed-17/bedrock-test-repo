import { prisma } from "../lib/prisma";

export async function reconcileOrgBilling(organizationId: string) {
  const users = await prisma.user.findMany({
    where: { organizationId },
    select: { id: true, email: true, organizationId: true },
  });

  const org = await prisma.organization.findUnique({
    where: { id: organizationId },
    select: { id: true, plan: true, name: true },
  });

  return { organizationId, org, seatCount: users.length, users };
}
