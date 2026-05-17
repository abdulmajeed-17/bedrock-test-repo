import { prisma } from "../lib/prisma";

export async function adminListAll() {
  return prisma.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      organizationId: true,
      createdAt: true,
    },
    orderBy: { createdAt: "desc" },
  });
}
