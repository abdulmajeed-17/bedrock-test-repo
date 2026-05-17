import { prisma } from "../lib/prisma";

export async function getMe(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      organization: true,
    },
  });
  if (!user) return null;
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    organizationId: user.organizationId,
    organization: user.organization,
  };
}
