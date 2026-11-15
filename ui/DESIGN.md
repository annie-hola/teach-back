# TeachBack AI UI Specification

## Sources

- Settings: `docs/design/01-settings.png` (1670×942)
- Classroom: `docs/design/02-classroom.png` (1671×941)
- Lesson Plan: `docs/design/03-lesson.png` (1672×941)

These images define visual direction, not static backgrounds. All controls and content surfaces must remain functional.

## Design system

- Bright pastel-blue page backgrounds, white translucent surfaces, medium-blue active states, dark navy text.
- Rounded 8–18px controls and cards, thin blue-gray borders, restrained blue shadows.
- System sans-serif typography until a licensed/hosted production font is approved.
- Icons must be simple and accompanied by accessible names when meaning is not visible in text.
- Focus, hover, active, disabled, loading, success, and error states must remain distinguishable without color alone.

## Global layout

- Header contains logo, Beta badge, Classroom, Lesson Plan, and avatar.
- Exactly two primary tabs. Avatar navigates directly to Settings.
- Fully support desktop and landscape tablet. Portrait screens under 768px show the approved unsupported-layout message.

## Classroom

- Preserve the reference's front-facing, bright classroom composition, but use four students instead of six.
- Fabric.js whiteboard is a separate aligned layer above the PixiJS environment.
- Dedicated Pan and zoom controls prevent viewport gestures from stealing drawing input.
- Right rail contains Teaching Mode above Discussion; it must not cover the board.
- Supported board objects: strokes, normal text, and pasted/uploaded images. No native equation editor.
- Clear Board requires confirmation and enters normal undo history.
- One student may raise a hand at a time. The teacher accepts before the question appears.
- End Class confirms, saves, stops activity, and resets the classroom.

## Lesson Plan

- Left sidebar includes New Note, search, count, and selected-note state.
- Main surface includes note metadata, formatting toolbar, TipTap editor, and visible Saving/Saved/Error feedback.
- Support headings, emphasis, lists, images, and equation images; omit native `fx` editing.

## Settings

- One page with Account, Preferences, Teaching, and About cards; no settings sidebar.
- Account is read-only in Beta. English and Vietnamese are offered independently for display and teaching.
- Light is active; Dark and System remain visibly unavailable.

## Assets and verification

- Production classroom and student assets must come from recorded, compatible licenses. Temporary CSS/emoji characters are placeholders only.
- Compare implemented views at the reference aspect ratio and approved tablet widths.
- Report visual deviations separately from functional failures. Never claim pixel-perfect parity without screenshot comparison.
