import { prisma } from "../lib/prisma";

export async function inviteUserToOrg(email: string, organizationId: string) {
  const existing = await prisma.user.findFirst({
    where: { email, organizationId },
  });
  if (existing) {
    return { status: "already_member", organizationId: existing.organizationId };
  }

  return prisma.user.create({
    data: {
      email,
      organizationId,
      name: email.split("@")[0],
    },
  });
}
