# bedrock-test-repo

Demo repo for the Bedrock GitHub App.

## Demo scenario (use this for Techstars recording)

**Story:** Ship multi-org membership (Linear-style workspace switcher) by
dropping `User.organizationId` and moving to a `UserOrganization` join table.

**Why it's a hard migration:** `organizationId` is referenced across auth,
billing, admin, webhooks, and jobs. Bedrock should score it CRITICAL, walk 8+
files, and generate an expand-and-contract rollout.

### Record the demo

1. Open PR from `demo-multi-org-migration` → `main`
2. Show GitHub check + PR comment
3. Open the shareable report: blast radius file list + rollout SQL

### Branches

| Branch | Purpose |
| --- | --- |
| `main` | Production schema with `User.organizationId` + realistic TS app |
| `demo-multi-org-migration` | The risky PR — drops column, changes relations |
