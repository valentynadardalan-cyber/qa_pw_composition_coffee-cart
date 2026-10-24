import { test } from '../../../_fixtures/fixtures';
import { COFFEE_NAMES } from '../../../../src/constants';

test('Cart updated correctly after clicking minus for drinks', async ({
  cartPage,
  menuPage,
}) => {
  await menuPage.open();
  await menuPage.cup.clickCoffeeCup(COFFEE_NAMES.cappuccino);
  await menuPage.cup.clickCoffeeCup(COFFEE_NAMES.espresso);

  await menuPage.header.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.cartList.assertCoffeeItemIsVisible(COFFEE_NAMES.espresso);

  await cartPage.cartList.clickCoffeeListItemRemoveOneButton(COFFEE_NAMES.espresso);

  await cartPage.cartList.assertCoffeeItemIsHidden(COFFEE_NAMES.espresso);
  await cartPage.cartList.assertCoffeeItemIsVisible(COFFEE_NAMES.cappuccino);

  await cartPage.cartList.clickCoffeeListItemRemoveOneButton(COFFEE_NAMES.cappuccino);

  await cartPage.cartList.assertCoffeeItemIsHidden(COFFEE_NAMES.cappuccino);
  await cartPage.cartList.assertNoCoffeeMessageIsVisible();
});
