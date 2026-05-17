import { getSession, tenantFromSession } from "../lib/auth/session";

test("session carries organizationId", async () => {
  const session = await getSession("user-123");
  if (!session) throw new Error("no session");
  expect(session.organizationId).toBeDefined();
  expect(tenantFromSession(session)).toBe(session.organizationId);
});
