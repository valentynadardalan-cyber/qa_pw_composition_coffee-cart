import { test } from '../../_fixtures/fixtures';
import { COFFEE_NAMES } from '../../../src/constants';

test('Discounted Mocha Not added to the Cart after promo rejecting', async ({
  cartPage,
  menuPage,
}) => {
  await menuPage.open();
  await menuPage.cup.clickCoffeeCup(COFFEE_NAMES.cappuccino);
  await menuPage.cup.clickCoffeeCup(COFFEE_NAMES.espresso);
  await menuPage.cup.clickCoffeeCup(COFFEE_NAMES.americano);

  await menuPage.promo.assertPromoMessageIsVisible();
  await menuPage.promo.clickNoPromoButton();

  await menuPage.header.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.cartList.assertCoffeeItemIsVisible(COFFEE_NAMES.espresso);
  await cartPage.cartList.assertCoffeeItemIsHidden('(Discounted) Mocha');

  await cartPage.cartList.assertCoffeeItemIsVisible(COFFEE_NAMES.cappuccino);
  await cartPage.cartList.assertCoffeeItemIsVisible(COFFEE_NAMES.americano);
});
