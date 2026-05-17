import { prisma } from "../lib/prisma";

export async function chargeOrgForUser(userId: string, amountCents: number) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { organizationId: true, email: true },
  });
  if (!user) throw new Error("user not found");
  return {
    organizationId: user.organizationId,
    email: user.email,
    amountCents,
  };
}
