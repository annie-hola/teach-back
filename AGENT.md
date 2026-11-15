# TeachBack AI Agent Handbook

## Product Vision

TeachBack AI helps people learn by teaching simulated AI students. The Beta prioritizes a polished classroom, an editable whiteboard, lesson notes, and observable student questions. It does not train models or claim numerical student understanding.

## Decision Boundaries

- Keep exactly two primary tabs: Classroom and Lesson Plan.
- Access Settings through the avatar.
- Keep Display Language and Teaching Language independent.
- Do not add providers, major frameworks, or Beta features without an accepted decision record.
- Never report work or tests as complete without verification.

## Repository Guidelines

## Project Structure & Module Organization

The repository is an npm-workspaces monorepo:

- `ui/` — Next.js frontend.
- `app/` — NestJS backend.
- `packages/contracts/` — shared API contracts.
- `docs/design/` — product and interface reference images.

If implementation is added, keep production code in a clearly named top-level directory such as `src/`, tests in `tests/`, and static assets in `public/` or `assets/`. Preserve the existing `docs/design/` location for visual references.

## Build, Test, and Development Commands

Canonical commands are:

```sh
npm install       # install dependencies
npm run dev       # start a local development server
npm run dev:api   # start the backend
npm run build     # build all workspaces
npm test          # run the test suite
```

## Documentation Workflow

Before work, read `STATE.md`, the relevant `PLAN.md` task, accepted `DECISIONS.md` entries, and `ui/DESIGN.md` for UI work. After meaningful work, update task state, append `PROGRESS.md`, and refresh `STATE.md`.

Definition of Done requires implemented acceptance criteria, relevant automated checks, manual visual verification for UI changes, and synchronized documentation.

## Coding Style & Naming Conventions

Use the formatter and linter selected by the implementation stack, and make formatting part of the normal development workflow. Use two-space indentation for JSON, YAML, JavaScript, and TypeScript unless the project adopts a documented alternative. Use `kebab-case` for asset filenames and descriptive names such as `quadratic-classroom.png`; avoid spaces and unexplained abbreviations.

## Testing Guidelines

There is currently no test framework or coverage requirement. When code is introduced, add tests alongside the relevant feature or under `tests/`, use descriptive names such as `quadraticSolver.test.ts`, and document the exact test command and any required coverage threshold.

## Commit & Pull Request Guidelines

No Git history or commit convention is available yet. Use short, imperative commit subjects (for example, `Add classroom dashboard mockup`). Pull requests should explain the change, identify relevant paths, include screenshots for visual changes, and note validation performed or why validation is not yet applicable.

## Design Asset Guidelines

Treat files in `docs/design/` as reference material. Keep source and exported assets organized, use consistent dimensions and filenames, and avoid replacing an existing reference without recording the reason in the pull request.
