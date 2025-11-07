import { When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

When('I add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

When('I navigate to the cart', async () => {
  await new Product(getPage()).goToCart();
});
