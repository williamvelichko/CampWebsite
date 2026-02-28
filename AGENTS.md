# AGENTS.md

These rules apply to any agent working in this repository.

## Primary Goal

Make accurate changes with enough context to avoid blind edits, regressions, and stale documentation.

## Required Workflow

1. Read documentation first.
2. Inspect the relevant code paths before proposing or making changes.
3. Run the existing verification commands before editing anything.
4. Update documentation before or alongside code changes.
5. Add or update tests for the behavior being changed whenever the codebase supports it.
6. Re-run verification after changes and report the result clearly.

## Read First

Before making changes, read these files first:

- `README.md`
- `docs/FILE_MAP.md`

Then read the files directly related to the requested change.

## Verification First

Before changing code, run the strongest available verification commands to establish the current baseline.

Preferred order:

1. `npm test` if a test script exists
2. `npm run lint` if available
3. `npm run build` if available

Current repository note:

- This repository does not currently define an `npm test` script in `package.json`.
- Until a dedicated test suite exists, agents must use the best available baseline checks, which are `npm run lint` and `npm run build`.
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

Minimum expectations:

- if tests already exist for the affected area, update them
- if no test covers the change but the repo supports tests, add one
- if the repo does not yet support tests, state that gap clearly and use lint/build or other available verification instead

Agents must not claim confidence in a change without running the available checks.

## Change Discipline

Before editing:

- understand the current behavior
- identify where content, logic, styling, and assets are defined
- avoid guessing

When editing:

- keep changes scoped to the request
- preserve existing patterns unless there is a strong reason to improve them
- prefer fixing root causes over layering on one-off patches

After editing:

- update docs
- run verification again
- summarize what changed, what was verified, and any remaining risk

## Accuracy Standard

Accuracy is more important than speed. Build context first, then change code.
