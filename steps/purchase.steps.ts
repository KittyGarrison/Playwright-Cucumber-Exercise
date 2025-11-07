import { When, Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Cart } from '../pages/cart.page';
import { CheckoutStepOne } from '../pages/checkout.step-one.page';
import { CheckoutStepTwo } from '../pages/checkout.step-two.page';
import { CheckoutComplete } from '../pages/checkout.complete.page';

console.log('*****loaded purchase.steps.ts'); 

When('I select Checkout', async () => {
  await new Cart(getPage()).proceedToCheckout();
});

When('I fill in the First Name {string}, Last Name {string}, and Zip/Postal Code {string}', async (firstName: string, lastName: string, postalCode: string) => {
  await new CheckoutStepOne(getPage()).fillCheckoutInfo(firstName, lastName, postalCode);
});

/*
// This is what was printed in the run report error that stated the step was undefined 
//
Then(/^I fill in the First Name "([^"]*)", Last Name "([^"]*)", and Zip/Postal Code "([^"]*)"$/, function(arg1, arg2, arg3, callback) {
  // Write code here that turns the phrase above into concrete actions
  callback(null, 'pending');
});
*/

When('I select Continue', async () => {
  await new CheckoutStepOne(getPage()).continueCheckout();
});

When('I select Finish', async () => {
  await new CheckoutStepTwo(getPage()).finishCheckout();
});

Then('I should see the order success text {string}', async (expected: string) => {
  await new CheckoutComplete(getPage()).validateOrderSuccess(expected);
});
