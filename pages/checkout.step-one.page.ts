import { Page } from '@playwright/test'

export class CheckoutStepOne {
  private readonly page: Page

  private readonly firstNameField: string = 'input[data-test="firstName"]'
  private readonly lastNameField: string = 'input[data-test="lastName"]'
  private readonly postalCodeField: string = 'input[data-test="postalCode"]'
  private readonly continueButton: string = 'button[data-test="continue"]'

  constructor(page: Page) {
    this.page = page
  }

  public async fillCheckoutInfo(firstName: string, lastName: string, postalCode: string) {
    await this.page.locator(this.firstNameField).fill(firstName)
    await this.page.locator(this.lastNameField).fill(lastName)
    await this.page.locator(this.postalCodeField).fill(postalCode)
  }

  public async continueCheckout() {
    await this.page.locator(this.continueButton).click()
  }
}

