# AGENTS.md

Guidance for autonomous coding agents working in this repository.

## Project Snapshot

- Stack: Astro 5, TypeScript (strict), Tailwind CSS v4, `astro-icon`.
- Package manager in active use: Bun (`bun.lock` present).
- Language/content tone: mostly Spanish UI copy.
- Build output: `dist/` (generated; do not edit manually).

## Repository Layout

- `src/pages/` route files (`index.astro` currently).
- `src/layouts/` shared page shell (`Layout.astro`).
- `src/components/sections/` page sections.
- `src/components/ui/` reusable UI building blocks.
- `src/components/widgets/` interactive widgets (theme toggle, etc.).
- `src/constants/` typed content/config arrays.
- `src/styles/global.css` global theme tokens + Tailwind setup.
- `public/` static assets and documents.
- `dist/` build artifacts.

## Required Commands

Run commands from repository root.

### Install

- `bun install` - install dependencies.

### Dev / Build / Preview

- `bun run dev` - local dev server.
- `bun run build` - production build to `dist/`.
- `bun run preview` - preview built site.
- `bun run astro -- --help` - Astro CLI help.

### Type Checking / Diagnostics

- `bun run astro check` - Astro + TS diagnostics.

### Lint / Format (Current State)

- No ESLint config detected (`.eslintrc*` / `eslint.config.*` absent).
- No Prettier config detected (`.prettierrc*` / `prettier.config.*` absent).
- No dedicated lint script in `package.json`.
- For now, rely on `astro check` and existing file style.

### Tests (Current State)

- No test runner config detected (Vitest/Jest/Playwright/Cypress absent).
- No `test` script detected in `package.json`.
- If you add tests, also add scripts and document usage.

### Single Test Execution (When Tests Exist)

If Vitest is added (recommended), use:

- `bun vitest run` - run all tests once.
- `bun vitest run path/to/file.test.ts` - run one test file.
- `bun vitest run path/to/file.test.ts -t "test name"` - run one named test.
- `bun vitest --watch path/to/file.test.ts` - watch one file.

If Jest is added instead, use:

- `bun jest path/to/file.test.ts` - run one file.
- `bun jest path/to/file.test.ts -t "test name"` - run one named test.

## TypeScript and Astro Rules

- TS config extends `astro/tsconfigs/strict`; keep code type-safe.
- Avoid `any`; prefer explicit interfaces/types for props and data.
- Keep `Astro.props` destructuring typed via `interface Props`.
- Use union types for constrained values (see `WorkType`, `MonthName`).
- Prefer `const` over `let` unless reassignment is needed.
- Keep runtime scripts defensive around browser-only APIs.

## Imports and Module Conventions

- Prefer path aliases from `tsconfig.json`:
  - `@/*`, `@assets/*`, `@components/*`, `@layouts/*`, etc.
- Prefer absolute alias imports over deep relative chains where practical.
- Keep import groups stable:
  1) framework/platform imports,
  2) third-party packages,
  3) internal aliases,
  4) relative imports.
- In `.astro` files, keep imports in frontmatter only.

## Naming Conventions

- Components: PascalCase (`Hero.astro`, `ThemeToggle.astro`).
- Interfaces/types: PascalCase (`SocialLink`, `Experience`).
- Variables/functions: camelCase.
- Exported constants:
  - Use UPPER_SNAKE_CASE for canonical datasets (`EXPERIENCE`).
  - Use camelCase for grouped lists where already established.
- File names:
  - Components: PascalCase.
  - Constants/util modules: camelCase or domain-specific naming.

## Formatting and Style

- Match the surrounding file style when editing (indentation varies today).
- Prefer double quotes in TS/Astro code (current convention).
- Use semicolons in TS files (current convention).
- Keep lines reasonably short; split long class lists and object literals.
- Avoid adding comments unless they clarify non-obvious logic.
- Remove dead commented-out code when touching a related block.

## Tailwind and Theming

- Theme tokens are defined in `src/styles/global.css` via CSS variables.
- Reuse semantic tokens (`text-text`, `bg-surface`, `text-muted`, etc.).
- Avoid hardcoding colors when a token exists.
- Preserve dark-mode behavior via `.dark` class strategy.
- Prefer component-level utility composition over ad-hoc global CSS.

## Astro Component Patterns

- Put all setup logic in frontmatter (`---` block).
- Keep markup semantic and accessible (landmarks, heading order, labels).
- For external links, use `target="_blank"` with `rel="noopener noreferrer"`.
- Prefer `astro:assets` (`Picture`) for optimized image rendering.
- Keep inline scripts minimal and scoped to component behavior.

## Error Handling and Robustness

- Fail fast for invalid states in helper logic.
- In browser scripts, guard null DOM lookups before attaching listeners.
- Avoid assuming `localStorage` availability in non-browser contexts.
- Avoid silent failures; log useful context for debug-only paths.
- Do not swallow exceptions unless there is a clear fallback behavior.

## Content and Localization

- Existing UX copy is Spanish-first; keep tone and language consistent.
- Preserve diacritics and proper casing in user-facing text.
- Keep labels concise and action-oriented.

## Files and Paths to Avoid Editing

- Do not manually edit generated output in `dist/`.
- Do not commit secrets from `.env`.
- Prefer editing source files under `src/` and `public/`.

## Validation Checklist for Agents

Before finishing a change:

1. Run `bun run astro check`.
2. Run `bun run build` for production-impacting changes.
3. Verify no unintended changes in `dist/` unless build artifacts are required.
4. Confirm imports use aliases consistently.
5. Confirm accessibility basics for changed UI.

## Cursor / Copilot Instruction Files

- `.cursorrules`: not found.
- `.cursor/rules/`: not found.
- `.github/copilot-instructions.md`: not found.

If these files are added later, treat them as higher-priority agent instructions
and update this document to reflect any mandatory workflow or style constraints.
