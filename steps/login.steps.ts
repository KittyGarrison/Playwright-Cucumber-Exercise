import { When, Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';

Then('I should see the title {string}', async (expectedTitle) => {
  await new Login(getPage()).validateTitle(expectedTitle);
});

// Keeping original step for legacy code
Then('I will login as {string}', async (userName) => {
  await new Login(getPage()).loginAsUser(userName);
});

// New step for better flow
When('I login as {string}', async (userName) => {
  await new Login(getPage()).loginAsUser(userName);
});

// TODO: DRY the two login handlers into one function
// Ruled out using defineStep with a regex, it decreases readability.

Then('The error will read {string}', async (expected) => {
  await new Login(getPage()).validateError(expected);
});