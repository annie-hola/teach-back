# TeachBack AI Execution Plan

## Goal

Deliver a focused Beta in which a user prepares notes, teaches four simulated students with an editable board and voice/text controls, handles queued questions, and saves the session.

## Phases

| ID | Phase | Deliverable | Dependencies | Exit criteria |
|---|---|---|---|---|
| DOC-001 | Documentation | Seven synchronized project documents | Approved decisions | Required files exist and contain no invented completion claims |
| FND-001 | Foundation | Runnable workspaces, contracts, API health, design shell | DOC-001 | Install, build, lint, and baseline tests pass |
| UI-001 | Shared UI | Header, navigation, localization, responsive shell | FND-001 | Two tabs only; avatar opens Settings; tablet layout remains usable |
| CLS-001 | Classroom scene | Pixi scene, four licensed students, animation states, viewport controls | UI-001, approved assets | Four students render and state transitions do not block board input |
| BRD-001 | Whiteboard | Pen, eraser, text, images, history, clear, export | CLS-001 | All input operations and snapshot export pass tests |
| TCH-001 | Teaching | Voice/Text UI, discussion, queue, End Class | BRD-001 | Mock session lifecycle and sequential questions work |
| LES-001 | Lesson Plan | Searchable TipTap notes with image paste and autosave | FND-001 | CRUD, formatting, save states, and reference selection work |
| SET-001 | Settings | Read-only account, independent languages, theme status | UI-001 | English/Vietnamese preferences persist independently |
| VER-001 | Verification | Functional, visual, accessibility, browser, and performance report | All frontend phases | No critical discrepancy remains undocumented |
| API-001 | Persistence | MongoDB and Cloudinary production adapters | FND-001 | Server-only credentials and integration tests pass |
| AI-001 | AI integration | Approved speech/VLM/LLM adapters | Accepted provider decisions | End-to-end multimodal flow passes agreed tests |
| REL-001 | Release | Vercel/Render Beta deployment | VER-001, API-001 | Smoke tests and license review pass |

## Key risks

- Coordinate Fabric pointer input with Pixi viewport controls.
- Preserve board editability while producing faithful snapshots.
- Verify third-party sprite licenses before release.
- Avoid coupling mock classroom state to future AI providers.
