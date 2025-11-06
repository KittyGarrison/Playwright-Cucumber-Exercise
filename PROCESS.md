# Process Log
## 2025-11-06 — Session 1
- Context:
  - Initial setup and review of requirements.
- Actions:
  - Cloned fork and reviewed README/system requirements.
  - Scanned features and steps for TODOs and failing areas.
  - Added suggested vsCode plugins.
  - Ran `npm run test` and `npm run report`.
- Findings/Decisions:
  - Update login title expectation to match site.
  - Add assertion step for locked out user error.
  - Implement purchase flow and product sort outline + examples.
  - Of note: package-lock.json updated to the current project name -> "Playwright-Cucumber-Exercise"
- Issues:
  - None logged yet.
- Next Steps:
  - Fix failing login test.
  - Extend login error test.

## 2025-11-06 — Session 2
- Context:
  - Fixing, updating, and adding tests.
- Actions:
  - Repaired login test
  - Added error string validation
    - validateError added to the login page model aligning with validateTitle pattern
    - new step def created for login page
    - test added to login feature file
- Findings/Decisions:
  - Tests Pass
  - There is a Playwright method `expect(locator).toHaveText(expected[, options])` that might preform better than `errorText !== expectedError`
  - If errors need validation on multiple pages and they all have the `data-test="error"` attribute then it could be useful to move that step def to common.steps.ts
- Issues:
  - None logged yet.
- Next Steps:
  - Complete and expand the purchase test by adding a new page model and steps file

## Template for New Entries
```
## YYYY-MM-DD — Session N
- Context:
  - ...
- Actions:
  - ...
- Findings/Decisions:
  - ...
- Issues:
  - ...
- Next Steps:
  - ...
```

