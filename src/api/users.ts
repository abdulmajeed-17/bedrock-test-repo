import { prisma } from "../lib/prisma";

export async function listUsersForOrg(organizationId: string) {
  return prisma.user.findMany({
    where: { organizationId },
    orderBy: { createdAt: "desc" },
  });
}

export async function findUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
  });
}
