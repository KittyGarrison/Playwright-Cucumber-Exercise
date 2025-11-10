import { Page } from "@playwright/test"

export class Product {
  private readonly page: Page;
  private readonly addToCart: string =
    'button[id="add-to-cart-sauce-labs-backpack"]';
  private readonly cartLink: string = 'a[data-test="shopping-cart-link"]';
  private readonly sortSelectorTestId: string = 'product-sort-container';
  private readonly listItemTitleTestId: string = 'inventory-item-name';

  constructor(page: Page) {
    this.page = page;
  }

  public async addBackPackToCart() {
    await this.page.locator(this.addToCart).click();
  }

  public async goToCart() {
    await this.page.locator(this.cartLink).click();
  }

  public async selectSortByLabel(label: string) {
    await this.page
      .getByTestId(this.sortSelectorTestId)
      .selectOption({ label });
  }

}
