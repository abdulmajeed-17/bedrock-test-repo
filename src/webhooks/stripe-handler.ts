import { prisma } from "../lib/prisma";

export async function handleCheckoutCompleted(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { organization: true },
  });
  if (!user) return null;

  return {
    userId: user.id,
    organizationId: user.organizationId,
    plan: user.organization.plan,
    stripeCustomerId: user.organization.stripeCustomerId,
  };
}
