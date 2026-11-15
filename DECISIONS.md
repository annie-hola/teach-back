# Decisions

## D-001 — Workspace architecture

- **Status:** Accepted
- **Choice:** npm workspaces with `ui/` (Next.js), `app/` (NestJS), and `packages/contracts/`.
- **Rationale:** Clear frontend/backend ownership with shared TypeScript contracts.

## D-002 — Classroom and editing technology

- **Status:** Accepted
- **Choice:** PixiJS v8 with pixi-viewport, Fabric.js whiteboard, and TipTap lesson editor.
- **Rationale:** Reuse mature rendering and editing libraries instead of custom engines.

## D-003 — Data and deployment

- **Status:** Accepted
- **Choice:** MongoDB Atlas, Cloudinary, Vercel frontend, Render backend, and a fixed server-side demo identity for Beta.
- **Consequences:** Secrets remain server-side; authentication is deferred.

## D-004 — Beta experience

- **Status:** Accepted
- **Choice:** Four students, desktop/landscape tablet, Chrome/Edge/Safari, English and Vietnamese, Light theme only, direct avatar-to-Settings navigation.

## D-005 — Open AI integration choices

- **Status:** Pending User Decision
- **Alternatives:** Speech, LLM, VLM, orchestration, observation timing, knowledge tracking, and retention providers remain open until their integration phases.
