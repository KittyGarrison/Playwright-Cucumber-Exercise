import { Given, When } from "@cucumber/cucumber";
import { getPage } from "../playwrightUtilities";

Given('I open the {string} page', async (url) => {
    await getPage().goto(url);
  });

When(
  'I fill the {string} field with {string}',
  async (testId: string, text: string) => {
    await getPage().getByTestId(testId).fill(text);
  }
);
// TODO: refactor the field input step back into the feature steps file and reuse the getPage().getByTestId(testId).fill(text); part elsewhere

/*
Then('I validate the element with test ID {string} contains the text {string}',
  async (testId: string, expectedText: string) => {  
    expect(getPage().getByTestId(testId)).toContainText(expectedText)
  }
);
I wanted this to work for things like

 Then I validate the element with test ID "complete-header" contains the text "Thank you for your order!"

However, that makes the feature files look to code-y. Elements' test IDs should be obscured in the page file
 */

