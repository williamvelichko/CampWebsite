# AGENTS.md

These rules apply to any agent working in this repository.

## Primary Goal

Make accurate changes with enough context to avoid blind edits, regressions, and stale documentation.

## Non-Negotiable Guardrails

Agents must not edit application code until they have completed all of the following:

1. read the required documentation
2. inspected the directly related source files, data files, styles, and existing tests
3. run the baseline verification commands that are available in the repository
4. identified which documentation and tests must be updated or added

If any of those steps cannot be completed, the agent must say so explicitly before proceeding.

## Required Workflow

1. Read documentation first.
2. Inspect the relevant code paths before proposing or making changes.
3. Read the existing tests for the affected area before editing.
4. Run the existing verification commands before editing anything.
5. Plan the required documentation and test updates before changing implementation.
6. Update documentation before or alongside code changes.
7. Add or update tests for the behavior being changed whenever the codebase supports it.
8. Re-run verification after changes and report the result clearly.

## Read First

Before making changes, read these files first:

- `README.md`
- `docs/FILE_MAP.md`

Then read the files directly related to the requested change, including:

- route files
- shared components they use
- local JSON/content files they depend on
- related styles when behavior or layout is involved
- existing tests for the same area

If the request spans multiple sections of the site, read all affected sections before editing any of them.

## Verification First

Before changing code, run the strongest available verification commands to establish the current baseline.

Preferred order:

1. `npm test`
2. `npm run lint`
3. `npm run build`

Current repository note:

- This repository defines `npm test` with Vitest and React Testing Library.
- Agents must treat `npm test`, `npm run lint`, and `npm run build` as the default baseline checks before editing and the required verification checks after editing.
- If a verification command cannot run, the agent must say so explicitly and continue only with that limitation stated.

## Documentation Rule

Documentation is required work, not optional cleanup.

Before or alongside code changes, agents must:

- update existing documentation that is affected by the change
- add documentation for new files, new flows, new config, or new behavior
- keep `README.md` and `docs/FILE_MAP.md` aligned with the current codebase when relevant

Agents must not leave behavior changes undocumented.

## Test Rule

Agents must add or update automated tests when changing behavior, fixing bugs, or adding features, whenever the project has a test framework or when adding tests is reasonable within the task scope.

Default expectation:

- read the current tests in the affected area before editing
- write or update the tests before changing implementation whenever that is practical
- if strict test-first is not practical, add the tests in the same change set and explain the constraint
- do not leave any touched behavior without automated coverage when the repo supports it

Minimum expectations:

- if tests already exist for the affected area, update them
- if no test covers the change but the repo supports tests, add one
- if the repo does not yet support tests, state that gap clearly and use lint/build or other available verification instead

Agents must not claim confidence in a change without running the available checks.

## Change Discipline

Before editing:

- understand the current behavior
- identify where content, logic, styling, and assets are defined
- identify the exact tests and docs that need to change
- avoid guessing

When editing:

- keep changes scoped to the request
- preserve existing patterns unless there is a strong reason to improve them
- prefer fixing root causes over layering on one-off patches

After editing:

- update docs
- update or add tests
- run verification again
- summarize what changed, what was verified, and any remaining risk

## Accuracy Standard

Accuracy is more important than speed. Build context first, then change code.
