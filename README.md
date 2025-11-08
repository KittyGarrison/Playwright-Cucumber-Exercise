# Sample Playwright/Cucumber Automation Test

For a running log of my progress and decisions during this challenge, see `PROCESS.md`.

## Setup

### System Requirements
- Text Editor
    - Install Visual Studio Code:
    https://code.visualstudio.com/download
    - Recommended vscode extensions
        - Cucumber v1.7.0
- node >= v18.5.x
    - Install Node.js:
    https://nodejs.org/en/download
- npm >= v7

### Cloning and Installing Packages
```bash
git clone https://github.com/automationExamples/Playwright-Cucumber-Exercise.git
npm install
npx playwright install
```



## Instructions
### Running Tests
Executes test that are not tagged with "@wip"
```bash
npm run test
```

### Debugging
Only executes tests tagged "@wip"
```bash
npm run test-debug
```

### Reporting
Generates the cucumber report (cucumber_report.html)
_Use only after running a test command_
```bash
npm run report
```
## Original Exercise Details
It is not expected that you complete every task, however, please give your best effort 

You will be scored based on your ability to complete the following tasks:

- [ ] Install and setup this repository on your personal computer
- [ ] Complete the automation tasks listed below

### Tasks
- [ ] Modify the scenario 'Validate the login page title' from [login.feature](features/login.feature#8) which runs but fails. Determine the cause of the failure and update the scenario to pass in the test
- [ ] Extend the scenario 'Validate login error message' from [login.feature](features/login.feature#10) which runs and passes but is missing a step. Extend the scenario to validate the error message received.
- [ ] Modify and extend the 'Validate successful purchase text' from [purchase.feature](features/purchase.feature#6) with steps for each comment listed. Consider writing a new steps.ts file along with an appropriate page.ts
- [ ] Modify and extend the 'Validate product sort by price sort' from [product.feature](features/product.feature#6) with steps for each comment listed. Utilize the Scenario Outline and Examples table to parameterize the test
- [ ] Extend the testing coverage with anything you believe would be beneficial
